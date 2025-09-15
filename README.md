# CGB Informational Landing Page

## Overview

This project is a modern, responsive landing page built with **React** and **Next.js** for CGB Informational. It is designed to showcase the company’s core services related to visa applications, consultation, and appointment bookings. The landing page features a visually appealing, auto-rotating hero section with service highlights, making it easy for users to understand offerings and take action.

---

## Features

- **Auto-Rotating Hero Slides:**  
  Displays three main services with images, titles, descriptions, and a call-to-action button.
- **Responsive Design:**  
  Optimized for desktop and mobile devices using Tailwind CSS utility classes.
- **Google Fonts Integration:**  
  Uses the Poppins font for a clean, professional look.
- **Next.js Image Optimization:**  
  Fast-loading images with built-in optimization.
- **Accessible UI:**  
  High-contrast text and buttons for readability.

---

## Technologies Used

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins)

---

## Project Structure

```
src/
└── app/
    └── components/
        └── Landing/
            └── index.tsx   # Main landing page component
public/
└── images/
    ├── visa.jpg
    ├── globe-passport.jpg
    └── globe-travs.jpg
```

---

## How It Works

- The landing page cycles through three slides, each representing a core service:
  1. **Visa Application Process**
  2. **Consultation Services**
  3. **Appointment Bookings**
- Each slide includes:
  - A relevant image
  - Service title
  - Brief description
  - “Contact Us” button
- The slides automatically rotate every 5 seconds.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/cgb-informational.git
   cd cgb-informational
   ```

2. **Install dependencies:**
   ```
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## Customization

- **Images:**  
  Replace images in `public/images/` with your own.
- **Service Content:**  
  Edit the `slides` array in `src/app/components/Landing/index.tsx` to update service details.
- **Styling:**  
  Modify Tailwind classes for custom colors, spacing, or layout.

---

## Deployment

This project can be deployed to any platform supporting Next.js, such as Vercel, Netlify, or your own server.

---

## License

This project is intended for informational and demonstration purposes. Please contact the author for commercial use.

---

## Contact

For questions or collaboration, please reach out via the contact form on the landing page or email
