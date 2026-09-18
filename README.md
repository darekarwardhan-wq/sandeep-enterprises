<div align="center">

🏗️ SANDEEP ENTERPRISES

Fabrication & Erection • Industrial Steel Solutions

<p>
  <strong>A modern digital platform built to bring a traditional fabrication business online.</strong>
</p>

<p>
  <em>Showcase projects • Manage enquiries • Connect with customers • Manage business content</em>
</p>

<br/>

<a href="https://sandeep-enterprises-drab.vercel.app/">
  <img src="https://img.shields.io/badge/🌐_Live_Website-Visit_Now-orange?style=for-the-badge" alt="Live Website"/>
</a>
<a href="https://github.com/darekarwardhan-wq/sandeep-enterprises">
  <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository"/>
</a>

<br/><br/>

<img src="public/images/hero.png" alt="Sandeep Enterprises" width="900"/>

</div>

🏢 About

Sandeep Enterprises is an industrial fabrication and erection business based in Sanaswadi, Pune, Maharashtra, with more than 25 years of experience in the fabrication and erection field.

This project is a full-stack digital business platform created to give the company a professional online presence and make it easier for customers to:

🔩 Explore fabrication and erection services

🏗️ View completed projects

📸 Browse work photographs

📩 Submit project enquiries

💬 Contact the business through WhatsApp

📞 Call the business directly

📍 Find the business location

The platform also includes a secure Admin Panel for managing enquiries, projects and business photographs.

🌐 Live Platform

<div align="center">

Sandeep Enterprises

Fabrication & Erection

📍 Sanaswadi, Pune, Maharashtra

<br/>

<a href="https://sandeep-enterprises-drab.vercel.app/">
  <img src="https://img.shields.io/badge/OPEN_LIVE_WEBSITE-FF7A00?style=for-the-badge" alt="Open Live Website"/>
</a>

</div>

✨ Features

🌐 Public Website

🏠 Home

A professional industrial-focused landing page featuring:

Hero section

Company introduction

Experience highlights

Services overview

Why Choose Us

Featured projects

Contact CTA

WhatsApp integration

📖 About

Provides information about:

Company background

Industry experience

Fabrication and erection capabilities

Work approach and workmanship

🔩 Services

The platform currently presents:

#

Service

01

Structural Steel Fabrication

02

Industrial Shed Fabrication

03

Steel Erection

04

MS Fabrication

05

Staircases & Handrails

06

Platforms & Structures

07

Machinery Structures

08

Repair & Modification

🏗️ Projects

Customers can explore project-specific information including:

Project name

Work type

Location

Year

Description

Cover image

Additional project photographs

Each project can maintain its own collection of images.

🖼️ Gallery

A separate business gallery showcases general fabrication and erection work independently from project-specific photographs.

📩 Contact

The contact experience provides:

Phone contact

WhatsApp contact

Email contact

Business location

Google Maps

Customer enquiry form

🔐 Admin Management System

The website includes a dedicated authenticated Admin Panel so business content can be managed without changing the source code.

📊 Dashboard

Administrators can:

View customer enquiries

Search enquiries

Filter enquiries

View enquiry details

Call customers

Contact customers through WhatsApp

📩 Enquiry Management

Enquiries follow a simple workflow:

🆕 NEW
   │
   ▼
📞 CONTACTED
   │
   ▼
⚙️ IN PROGRESS
   │
   ▼
✅ COMPLETED

Supported statuses:

🆕 New

📞 Contacted

⚙️ In Progress

✅ Completed

🏗️ Project Management

Administrators can:

➕ Create projects

✏️ Edit projects

🗑️ Delete projects

📸 Upload project photographs

🗑️ Delete photographs

⭐ Select a cover photograph

❌ Remove a cover photograph

🖼️ Gallery Management

Administrators can:

Upload gallery photographs

View business work photographs

Delete gallery photographs

🔑 Authentication

The Admin Panel is protected using Supabase Authentication.

🧠 How the Platform Works

                         CUSTOMER
                            │
                            ▼
                  ┌──────────────────┐
                  │  Public Website  │
                  └────────┬─────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
      Services          Projects        Contact
          │                │                │
          └────────────────┼────────────────┘
                           │
                           ▼
                     Customer Enquiry
                           │
                           ▼
                    ┌──────────────┐
                    │ Supabase DB  │
                    └──────┬───────┘
                           │
                           ▼
                    🔐 Admin Panel
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
          Enquiries     Projects      Gallery
              │            │            │
              └────────────┼────────────┘
                           ▼
                    Supabase Storage

🛠️ Technology Stack

<div align="center">

Technology

Purpose

⚡ Next.js 16

Full-stack React framework

⚛️ React 19

UI development

🔷 TypeScript

Type-safe development

🎨 Tailwind CSS 4

Responsive styling

🟢 Supabase

Backend platform

🐘 PostgreSQL

Database

🔐 Supabase Auth

Admin authentication

☁️ Supabase Storage

Image storage

🧩 Lucide React

UI icons

🚀 Vercel

Deployment

🐙 GitHub

Version control

</div>

🗄️ Backend & Storage

The application uses Supabase for its backend infrastructure.

PostgreSQL

Used for structured application data such as:

Projects
Enquiries
Project Images
Gallery Images
Admin Users

Supabase Storage

Project and gallery photographs are stored in Supabase Storage rather than inside the database.

Example project organization:

projects/
│
├── project-id-1/
│   ├── image-01.webp
│   ├── image-02.webp
│   └── image-03.webp
│
└── project-id-2/
    ├── image-01.webp
    └── image-02.webp

This keeps business images organized and makes the system easier to scale.

📱 Responsive Design

The platform is designed for:

📱 Mobile
   ↓
📲 Tablet
   ↓
💻 Laptop
   ↓
🖥️ Desktop

The Admin Panel also includes a mobile navigation experience.

💬 Customer Communication

The website connects customers with the business through multiple channels:

Channel

Purpose

📞 Phone

Direct business contact

💬 WhatsApp

Quick enquiry and communication

📩 Website Form

Structured project enquiry

📧 Email

Business communication

📍 Google Maps

Business location

📁 Project Structure

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
│   ├── contact/
│   ├── gallery/
│   ├── projects/
│   │   └── [id]/
│   ├── services/
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
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md

⚡ Getting Started

1️⃣ Clone the repository

git clone https://github.com/darekarwardhan-wq/sandeep-enterprises.git

2️⃣ Navigate to the project

cd sandeep-enterprises

3️⃣ Install dependencies

npm install

4️⃣ Configure environment variables

Create a .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Never commit .env.local or private credentials to GitHub.

5️⃣ Start the development server

npm run dev

Open:

http://localhost:3000

🚀 Deployment

The application is designed for deployment with Vercel.

GitHub
   │
   ▼
 Vercel
   │
   ▼
Next.js Application
   │
   ▼
Supabase
 ┌─┴───────────┐
 ▼             ▼
Database     Storage

Build:

npm run build

Start:

npm run start

🔒 Security

The project uses:

Supabase Authentication

Protected admin routes

Server-side Supabase access where appropriate

Environment variables for configuration

Supabase database permissions

Supabase Storage

Production deployments should keep credentials and privileged keys outside the repository.

🎯 Project Goals

🌐 Digital Presence

Create a professional online identity for an established industrial business.

🤝 Customer Accessibility

Make it easier for potential customers to discover services and get in touch.

🏗️ Project Showcase

Present completed fabrication and erection work in an organized portfolio.

📊 Business Management

Provide an admin interface for managing enquiries, projects and photographs.

📈 Scalability

Build on a modern stack that can support additional business features in the future.

🔮 Future Roadmap

Potential future enhancements:

📊 Advanced business analytics

📈 Enquiry statistics

📧 Email notifications

🔔 Admin notifications

📝 Detailed quotation requests

📄 Online quotation generation

📑 PDF project reports

👥 Multiple admin accounts

🔎 Advanced SEO

⭐ Customer reviews

📍 Project map integration

🤖 AI-powered enquiry assistant

📱 Progressive Web App support

👨‍💻 Developer

<div align="center">

Wardhan Darekar

Computer Science Engineering

Building modern web applications with:

Next.js • TypeScript • React • Supabase • Tailwind CSS

<br/>

<a href="https://github.com/darekarwardhan-wq">
  <img src="https://img.shields.io/badge/GitHub-Wardhan_Darekar-black?style=for-the-badge&logo=github" alt="GitHub"/>
</a>

</div>

⭐ Support

If you find the project useful or interesting, consider giving the repository a ⭐.

It helps support continued development.

<div align="center">

🏗️ Built for Industry. Designed for the Digital World.

SANDEEP ENTERPRISES

Fabrication • Erection • Industrial Solutions

<br/>

<img src="https://img.shields.io/badge/Made_with-Next.js-black?style=for-the-badge&logo=next.js"/>
<img src="https://img.shields.io/badge/Powered_by-Supabase-3ECF8E?style=for-the-badge&logo=supabase"/>

</div>
