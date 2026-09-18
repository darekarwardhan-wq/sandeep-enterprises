<div align="center">

# 🏗️ SANDEEP ENTERPRISES

**Fabrication&nbsp;&nbsp;·&nbsp;&nbsp;Erection&nbsp;&nbsp;·&nbsp;&nbsp;Industrial Steel Solutions**

A modern digital presence and business management platform<br/>
built for an established industrial fabrication company in Sanaswadi, Pune.

<br/>

<a href="https://sandeep-enterprises-drab.vercel.app/">
  <img src="https://img.shields.io/badge/🌐_LIVE_WEBSITE-Visit_Now-FF7A00?style=for-the-badge&labelColor=111827" alt="Live Website"/>
</a>
<a href="https://github.com/darekarwardhan-wq/sandeep-enterprises">
  <img src="https://img.shields.io/badge/💻_SOURCE_CODE-View_Repository-111827?style=for-the-badge&logo=github&logoColor=white" alt="Source Code"/>
</a>

<br/>

<sub>

[![Last Commit](https://img.shields.io/github/last-commit/darekarwardhan-wq/sandeep-enterprises?style=flat-square&color=FF7A00&label=last%20commit)](https://github.com/darekarwardhan-wq/sandeep-enterprises/commits/main)
[![Repo Stars](https://img.shields.io/github/stars/darekarwardhan-wq/sandeep-enterprises?style=flat-square&color=FF7A00&label=stars)](https://github.com/darekarwardhan-wq/sandeep-enterprises/stargazers)
[![Top Language](https://img.shields.io/github/languages/top/darekarwardhan-wq/sandeep-enterprises?style=flat-square&color=FF7A00&label=language)](https://github.com/darekarwardhan-wq/sandeep-enterprises)

</sub>

<br/>

<img src="public/images/hero.png" alt="Sandeep Enterprises — website preview" width="90%"/>

<sub><i>Public website preview — Sandeep Enterprises</i></sub>

<br/>
<br/>

**BUILT WITH**

<img src="https://img.shields.io/badge/Next.js-16-111827?style=flat-square&logo=next.js&logoColor=white" alt="Next.js"/>&nbsp;
<img src="https://img.shields.io/badge/React-19-111827?style=flat-square&logo=react&logoColor=61DAFB" alt="React"/>&nbsp;
<img src="https://img.shields.io/badge/TypeScript-5-111827?style=flat-square&logo=typescript&logoColor=3178C6" alt="TypeScript"/>&nbsp;
<img src="https://img.shields.io/badge/Tailwind_CSS-4-111827?style=flat-square&logo=tailwindcss&logoColor=06B6D4" alt="Tailwind CSS"/>&nbsp;
<img src="https://img.shields.io/badge/Supabase-Backend-111827?style=flat-square&logo=supabase&logoColor=3ECF8E" alt="Supabase"/>&nbsp;
<img src="https://img.shields.io/badge/Vercel-Deployed-111827?style=flat-square&logo=vercel&logoColor=white" alt="Vercel"/>

</div>

<br/>

## 📑 Table of Contents

- [Overview](#-overview)
- [What This Platform Provides](#-what-this-platform-provides)
- [Services](#-services)
- [Project Showcase](#-project-showcase)
- [Admin Panel](#-admin-panel)
- [Image Management](#️-image-management)
- [System Architecture](#-system-architecture)
- [Technology Stack](#️-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Security](#-security)
- [Design & UX](#-design--ux)
- [Project Objectives](#-project-objectives)
- [Roadmap](#-roadmap)
- [Development Philosophy](#-development-philosophy)
- [Developer](#-developer)
- [Support](#-support)

---

## ✦ Overview

**Sandeep Enterprises** is an industrial **fabrication and erection business based in Sanaswadi, Pune, Maharashtra**.

This project transforms the company's traditional business presence into a modern, responsive web platform where customers can discover services, explore completed work, submit enquiries, and connect directly with the business.

Behind the public website is a secure **admin management system** that allows business content to be updated dynamically — without editing the source code.

> **The objective:** combine a professional industrial website with a practical content and enquiry management system.

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## ✦ What This Platform Provides

<table>
<tr>
<td width="50%">

### 🌐 Customer Experience

- Modern responsive website
- Company & services information
- Project portfolio
- Project-specific galleries
- General work gallery
- Contact & enquiry form
- WhatsApp integration
- Direct phone contact
- Business location

</td>
<td width="50%">

### 🔐 Business Management

- Secure admin authentication
- Enquiry dashboard
- Enquiry status management
- Project CRUD operations
- Project image management
- Cover image selection
- Gallery management
- Supabase Storage
- PostgreSQL-backed content

</td>
</tr>
</table>

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🏭 Services

The website presents the company's industrial capabilities in a structured format.

| Service | Focus |
|:--|:--|
| 🔩 **Structural Steel Fabrication** | Fabrication of industrial steel structures |
| 🏗️ **Steel Erection** | On-site erection and structural installation |
| 🏭 **Industrial Shed Fabrication** | Industrial shed and structural work |
| ⚙️ **MS Fabrication** | Custom mild-steel fabrication |
| 🪜 **Staircases & Handrails** | Industrial and commercial access structures |
| 🏢 **Platforms & Structures** | Custom industrial platforms |
| 🔧 **Machinery Structures** | Structural support and machinery frameworks |
| 🛠️ **Repair & Modification** | Modification, repair and maintenance work |

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 📸 Project Showcase

Projects are managed dynamically through the Admin Panel.

Each project can contain:

```text
PROJECT
│
├── Name
├── Location
├── Work Type
├── Year
├── Description
│
└── Images
     ├── Cover Image ⭐
     ├── Image 02
     ├── Image 03
     └── Image 04
```

The **cover image** acts as the primary visual for the project, while additional photographs remain available for visitors to explore.

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🔐 Admin Panel

The admin experience is designed around one principle:

> **Business content should be manageable without touching the codebase.**

### 📊 Dashboard

The administrator can quickly access:

- Customer enquiries
- Projects
- Project images
- Gallery
- Enquiry status

### 📩 Enquiry Workflow

Enquiries move through a clear business workflow:

```text
        ┌─────────┐
        │  NEW    │
        └────┬────┘
             │
             ▼
      ┌─────────────┐
      │  CONTACTED  │
      └──────┬──────┘
             │
             ▼
      ┌──────────────┐
      │ IN PROGRESS  │
      └──────┬───────┘
             │
             ▼
       ┌───────────┐
       │ COMPLETED │
       └───────────┘
```

Administrators can search, review and update enquiry status as the conversation progresses.

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🖼️ Image Management

The Admin Panel separates **project images** from the general **business gallery**.

### Project Images

```text
projects/
└── {projectId}/
    ├── cover.webp
    ├── image-02.webp
    ├── image-03.webp
    └── image-04.webp
```

### Gallery Images

```text
gallery/
├── work-01.webp
├── work-02.webp
├── work-03.webp
└── work-04.webp
```

Images are stored in **Supabase Storage**, while the database stores the associated metadata.

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🧩 System Architecture

```text
                         ┌─────────────────────┐
                         │       VISITOR       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     NEXT.JS APP     │
                         └──────────┬──────────┘
                                    │
                ┌───────────────────┴───────────────────┐
                │                                       │
                ▼                                       ▼
       ┌──────────────────┐                    ┌──────────────────┐
       │  PUBLIC WEBSITE  │                    │   ADMIN PANEL    │
       │                  │                    │                  │
       │ Home             │                    │ Dashboard        │
       │ About            │                    │ Enquiries        │
       │ Services         │                    │ Projects         │
       │ Projects         │                    │ Gallery          │
       │ Gallery          │                    │ Authentication   │
       │ Contact          │                    │                  │
       └────────┬─────────┘                    └────────┬─────────┘
                │                                       │
                └──────────────────┬────────────────────┘
                                   │
                                   ▼
                         ┌─────────────────────┐
                         │      SUPABASE       │
                         ├─────────────────────┤
                         │ PostgreSQL          │
                         │ Authentication      │
                         │ Storage             │
                         └─────────────────────┘
```

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🛠️ Technology Stack

<div align="center">

| Layer | Technology |
|:--|:--|
| **Framework** | Next.js 16 |
| **UI** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Backend** | Supabase |
| **Database** | PostgreSQL |
| **Authentication** | Supabase Auth |
| **File Storage** | Supabase Storage |
| **Icons** | Lucide React |
| **Version Control** | Git & GitHub |
| **Deployment** | Vercel |

</div>

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 📁 Project Structure

```text
sandeep-enterprises/
│
├── app/
│   ├── about/
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── enquiries/
│   │   ├── gallery/
│   │   ├── login/
│   │   └── projects/
│   │
│   ├── contact/
│   ├── gallery/
│   ├── projects/
│   │   └── [id]/
│   ├── services/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── admin/
│   │   ├── AdminMobileNav.tsx
│   │   ├── AdminSidebar.tsx
│   │   ├── EnquirySearch.tsx
│   │   ├── GalleryImageDeleteButton.tsx
│   │   ├── GalleryImageUpload.tsx
│   │   ├── LogoutButton.tsx
│   │   ├── ProjectCoverButton.tsx
│   │   ├── ProjectDeleteButton.tsx
│   │   ├── ProjectEditForm.tsx
│   │   ├── ProjectForm.tsx
│   │   ├── ProjectImageDeleteButton.tsx
│   │   ├── ProjectImageUpload.tsx
│   │   └── StatusSelect.tsx
│   │
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── WhatsAppButton.tsx
│   └── proxy.ts
│
├── lib/
│   └── supabase/
│       ├── client.ts
│       └── server.ts
│
├── public/
│   └── images/
│
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## ⚡ Getting Started

### 1. Clone

```bash
git clone https://github.com/darekarwardhan-wq/sandeep-enterprises.git
cd sandeep-enterprises
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🚀 Deployment

The application is designed for a simple GitHub → Vercel deployment workflow.

```text
┌─────────────┐
│   GitHub    │
└──────┬──────┘
       │ push
       ▼
┌─────────────┐
│   Vercel    │
└──────┬──────┘
       │ deploy
       ▼
┌─────────────┐
│  Next.js    │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│      Supabase       │
│ DB • Auth • Storage │
└─────────────────────┘
```

### Production build

```bash
npm run build
```

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🔒 Security

The platform is built with security-conscious practices including:

- 🔐 Supabase Authentication for admin access
- 🛡️ Protected admin routes
- 🔑 Environment-based configuration
- 🗄️ Database access controls
- ☁️ Supabase Storage
- 🚫 Secrets excluded from source control

> **Never commit `.env.local` or private service-role credentials to GitHub.**

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 📈 Design & UX

The interface follows a clean industrial-business visual language:

- Strong typography
- High-contrast content
- White professional admin surfaces
- Orange brand accents
- Responsive layouts
- Clear call-to-action elements
- Consistent iconography
- Mobile-friendly navigation
- Project-first visual presentation

The design goal is to communicate **trust, engineering capability and professionalism** rather than looking like a generic template.

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🎯 Project Objectives

| Objective | Outcome |
|:--|:--|
| 🌐 Digital Presence | Establish a professional online identity |
| 🏗️ Portfolio | Showcase completed fabrication & erection projects |
| 📩 Lead Generation | Allow visitors to submit enquiries |
| 💬 Communication | Connect customers through WhatsApp, phone and email |
| 🔐 Business Control | Give administrators direct control over website content |
| 📸 Media Management | Organize project and gallery photographs |
| 📱 Accessibility | Provide a responsive experience across devices |
| 📈 Scalability | Build on a modern stack for future expansion |

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🔮 Roadmap

Future improvements can extend the platform into a broader business management solution:

- [ ] 📊 Business analytics dashboard
- [ ] 📈 Enquiry conversion analytics
- [ ] 📧 Automated email notifications
- [ ] 🔔 Admin notification center
- [ ] 📝 Detailed quotation request system
- [ ] 📄 PDF quotation generation
- [ ] 📑 Project documentation
- [ ] 👥 Multiple administrator accounts
- [ ] ⭐ Customer reviews
- [ ] 🔎 Advanced SEO
- [ ] 📍 Project location mapping
- [ ] 🤖 AI-powered enquiry assistant
- [ ] 📱 Progressive Web App

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 🧪 Development Philosophy

This project focuses on three principles:

### 01 — Professional
The website should represent an established industrial business with a trustworthy digital identity.

### 02 — Practical
The admin panel should solve real operational needs rather than only provide a visual dashboard.

### 03 — Scalable
The architecture should make it possible to add business features without rebuilding the application.

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## 👨‍💻 Developer

<div align="center">

### Wardhan Darekar

**Computer Science Engineering**

Full-stack development using modern web technologies.

<br/>

<a href="https://github.com/darekarwardhan-wq">
<img src="https://img.shields.io/badge/GitHub-Wardhan%20Darekar-111827?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>

</div>

<div align="right"><a href="#-table-of-contents">⬆️ Back to top</a></div>

---

## ⭐ Support

If you find this project interesting, consider giving it a **⭐ Star** on GitHub.

<div align="center">

<br/>

## SANDEEP ENTERPRISES

### Fabrication • Erection • Industrial Solutions

**Built for Industry. Designed for the Digital World.**

<br/>

<img src="https://img.shields.io/badge/Next.js-16-111827?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
<img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=111827" alt="Supabase"/>
<img src="https://img.shields.io/badge/Vercel-Production-111827?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>

</div>
