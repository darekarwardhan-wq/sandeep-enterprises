"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import {
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  MessageCircle,
} from "lucide-react";

import { createClient } from "../../lib/supabase/client";

const statuses = [
  "new",
  "contacted",
  "in_progress",
  "completed",
] as const;

type Status = (typeof statuses)[number];

const statusLabels: Record<Status, string> = {
  new: "New",
  contacted: "Contacted",
  in_progress: "In Progress",
  completed: "Completed",
};

const statusStyles: Record<
  Status,
  {
    button: string;
    icon: string;
    dot: string;
  }
> = {
  new: {
    button: "border-orange-200 bg-orange-50 text-orange-700",
    icon: "text-orange-500",
    dot: "bg-orange-500",
  },

  contacted: {
    button: "border-blue-200 bg-blue-50 text-blue-700",
    icon: "text-blue-500",
    dot: "bg-blue-500",
  },

  in_progress: {
    button: "border-amber-200 bg-amber-50 text-amber-700",
    icon: "text-amber-500",
    dot: "bg-amber-500",
  },

  completed: {
    button: "border-green-200 bg-green-50 text-green-700",
    icon: "text-green-600",
    dot: "bg-green-500",
  },
};

interface StatusSelectProps {
  enquiryId: number;
  initialStatus: string;
}

interface DropdownPosition {
  top: number;
  left: number;
  width: number;
  openUp: boolean;
}

export default function StatusSelect({
  enquiryId,
  initialStatus,
}: StatusSelectProps) {
  const router = useRouter();
  const supabase = createClient();

  const normalizedStatus: Status = statuses.includes(
    initialStatus as Status
  )
    ? (initialStatus as Status)
    : "new";

  const [status, setStatus] =
    useState<Status>(normalizedStatus);

  const [updating, setUpdating] =
    useState(false);

  const [error, setError] =
    useState("");

  const [open, setOpen] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  const [position, setPosition] =
    useState<DropdownPosition | null>(null);

  const buttonRef =
    useRef<HTMLButtonElement>(null);

  // ============================================================
  // CLIENT MOUNT
  // ============================================================

  useEffect(() => {
    setMounted(true);
  }, []);

  // ============================================================
  // CALCULATE DROPDOWN POSITION
  // ============================================================

  function updatePosition() {
    if (!buttonRef.current) {
      return;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    const menuHeight = 190;
    const gap = 8;

    const spaceBelow =
      window.innerHeight - rect.bottom;

    const spaceAbove =
      rect.top;

    const openUp =
      spaceBelow < menuHeight &&
      spaceAbove > spaceBelow;

    const top = openUp
      ? rect.top - menuHeight - gap
      : rect.bottom + gap;

    let left = rect.left;

    const menuWidth = Math.max(
      rect.width,
      180
    );

    // Prevent the menu from going outside
    // the right side of the screen.
    if (
      left + menuWidth >
      window.innerWidth - 16
    ) {
      left =
        window.innerWidth -
        menuWidth -
        16;
    }

    // Prevent the menu from going
    // outside the left side.
    if (left < 16) {
      left = 16;
    }

    setPosition({
      top,
      left,
      width: menuWidth,
      openUp,
    });
  }

  // ============================================================
  // UPDATE POSITION WHEN OPEN
  // ============================================================

  useEffect(() => {
    if (!open) {
      setPosition(null);
      return;
    }

    updatePosition();

    function handleScroll() {
      updatePosition();
    }

    function handleResize() {
      updatePosition();
    }

    window.addEventListener(
      "scroll",
      handleScroll,
      true
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
        true
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [open]);

  // ============================================================
  // CLOSE ON OUTSIDE CLICK
  // ============================================================

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleMouseDown(
      event: MouseEvent
    ) {
      const target =
        event.target as Node;

      if (
        buttonRef.current &&
        buttonRef.current.contains(target)
      ) {
        return;
      }

      const dropdown =
        document.getElementById(
          `status-dropdown-${enquiryId}`
        );

      if (
        dropdown &&
        dropdown.contains(target)
      ) {
        return;
      }

      setOpen(false);
    }

    document.addEventListener(
      "mousedown",
      handleMouseDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleMouseDown
      );
    };
  }, [open, enquiryId]);

  // ============================================================
  // ESC KEY
  // ============================================================

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  // ============================================================
  // STATUS ICON
  // ============================================================

  function StatusIcon({
    currentStatus,
    className,
  }: {
    currentStatus: Status;
    className?: string;
  }) {
    if (currentStatus === "new") {
      return (
        <CircleDot
          className={className}
          size={15}
          strokeWidth={2}
        />
      );
    }

    if (currentStatus === "contacted") {
      return (
        <MessageCircle
          className={className}
          size={15}
          strokeWidth={2}
        />
      );
    }

    if (currentStatus === "in_progress") {
      return (
        <Clock3
          className={className}
          size={15}
          strokeWidth={2}
        />
      );
    }

    return (
      <Check
        className={className}
        size={15}
        strokeWidth={2.5}
      />
    );
  }

  // ============================================================
  // CHANGE STATUS
  // ============================================================

  async function handleStatusChange(
    newStatus: Status
  ) {
    if (
      newStatus === status ||
      updating
    ) {
      setOpen(false);
      return;
    }

    const previousStatus = status;

    setStatus(newStatus);
    setOpen(false);
    setUpdating(true);
    setError("");

    const { error: updateError } =
      await supabase
        .from("enquiries")
        .update({
          status: newStatus,
        })
        .eq("id", enquiryId);

    if (updateError) {
      console.error(
        "Status update error:",
        updateError
      );

      setStatus(previousStatus);
      setError("Failed");

      setTimeout(() => {
        setError("");
      }, 2500);

      setUpdating(false);

      return;
    }

    setUpdating(false);

    router.refresh();
  }

  // ============================================================
  // CURRENT STYLE
  // ============================================================

  const currentStyle =
    statusStyles[status];

  // ============================================================
  // DROPDOWN
  // ============================================================

  const dropdown =
    open &&
    mounted &&
    position &&
    createPortal(
      <div
        id={`status-dropdown-${enquiryId}`}
        className="fixed z-[9999]"
        style={{
          top: position.top,
          left: position.left,
          width: position.width,
        }}
      >
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5">
          {statuses.map((item) => {
            const active =
              item === status;

            const itemStyle =
              statusStyles[item];

            return (
              <button
                key={item}
                type="button"
                onClick={() =>
                  handleStatusChange(item)
                }
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-semibold transition-colors ${
                  active
                    ? "bg-slate-50 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {/* ICON */}

                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                    active
                      ? "bg-white shadow-sm"
                      : "bg-slate-50"
                  }`}
                >
                  <StatusIcon
                    currentStatus={item}
                    className={
                      itemStyle.icon
                    }
                  />
                </span>

                {/* LABEL */}

                <span className="flex-1">
                  {statusLabels[item]}
                </span>

                {/* CHECK */}

                {active && (
                  <Check
                    className="h-4 w-4 text-orange-500"
                    strokeWidth={2.5}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>,
      document.body
    );

  // ============================================================
  // UI
  // ============================================================

  return (
    <>
      <div className="flex min-w-[150px] flex-col gap-1">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => {
            if (updating) {
              return;
            }

            setOpen(
              (current) => !current
            );
          }}
          disabled={updating}
          className={`flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-2 text-xs font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:opacity-60 ${currentStyle.button}`}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${currentStyle.dot}`}
            />

            <span className="truncate">
              {updating
                ? "Updating..."
                : statusLabels[status]}
            </span>
          </span>

          <ChevronDown
            className={`h-3.5 w-3.5 shrink-0 transition-transform ${
              open
                ? "rotate-180"
                : ""
            } ${
              currentStyle.icon
            }`}
            strokeWidth={2}
          />
        </button>

        {error && (
          <span className="text-[10px] font-medium text-red-500">
            {error}
          </span>
        )}
      </div>

      {dropdown}
    </>
  );
}