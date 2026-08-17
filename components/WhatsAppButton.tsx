const whatsappNumber = "919822193954";

const whatsappMessage = encodeURIComponent(
  "Hello SANDEEP ENTERPRISES, I found your website and would like to enquire about fabrication and erection work."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact SANDEEP ENTERPRISES on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl font-black text-white shadow-2xl transition hover:scale-105 hover:bg-green-400"
    >
      W
    </a>
  );
}
