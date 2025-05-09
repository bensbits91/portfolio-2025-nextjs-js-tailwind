# Portfolio 2025 - Next.js + Tailwind CSS

This is a modern portfolio website built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and other cutting-edge technologies. It showcases projects, skills, and experience in a visually appealing and responsive design.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Folder Structure](#folder-structure)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Dynamic Content**: Projects, skills, and experience are dynamically rendered.
- **Dynamic Views**: Display skills and projects in responsive grids, tables, and charts.
- **Dark Mode**: Built-in dark mode support using `next-themes`.
- **Accessibility**: WCAG-compliant components for an inclusive user experience.
- **Fast Performance**: Optimized with Next.js. SSR by default with CSR where needed.
- **SEO-Friendly**: Meta tags and Open Graph support for better search engine visibility.

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org) (App Router) with [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: 
    - Custom components and design system
    - Some components built with [Radix UI](https://www.radix-ui.com)
    - [Tanstack Table](https://tanstack.com/table)
    - A few simple charts built with [Recharts](https://recharts.org/en-US)
- **State Management**: Simple state managed with custom hooks
- **Utilities**: 
  - [clsx](https://github.com/lukeed/clsx) for conditional class names
  - [dayjs](https://day.js.org) for date manipulation
- **Media Management**
    - Icons as react components to support dynamic styling
    - Images hosted on [Cloudinary](https://cloudinary.com/)
    - Images optimized using Cloudinary and Next.js
    - Videos stored as [Vercel Blobs](https://vercel.com/docs/vercel-blob) and fetch using a custom hook and an API route
- **Contact Form**: 
    - Custom hooks for state management and input validation
    - [Nodemailer](https://www.npmjs.com/package/nodemailer)
- **Testing**:
  - [Jest](https://jestjs.io) for unit testing
  - [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for component testing
  - [Cypress](https://www.cypress.io) for end-to-end testing
- **Deployment**: [Vercel](https://vercel.com)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v18 or later)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-2025-nextjs-js-tailwind.git
   cd portfolio-2025-nextjs-js-tailwind
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Development Workflow

### Linting and Type Checking
Run the following command to lint your code and check for TypeScript errors:
```bash
npm run lint
```

### Building for Production
To build the application for production:
```bash
npm run build
```

### Running Tests
Run all tests:
```bash
npm test
```

---

## Folder Structure

```
portfolio-2025-nextjs-js-tailwind/
├── app/                     # Next.js App Router
│   ├── page.tsx             # Main entry point for the homepage
│   ├── about/               # About page
│   ├── projects/            # Projects page
├── components/              # Reusable React components
│   ├── common/              # Shared components (e.g., Button, IconBar)
│   ├── icons/               # SVG icons (e.g., PythonIcon, PhpIcon)
│   ├── layout/              # Layout components (e.g., Header, Footer)
│   ├── projects/            # Project-specific components (e.g., ProjectModal)
├── hooks/                   # Custom React hooks (e.g., useContactForm)
├── styles/                  # Global styles and Tailwind configuration
├── tests/                   # Unit and integration tests
├── public/                  # Static assets (e.g., images, fonts)
├── package.json             # Project metadata and dependencies
```

---

## Testing

This project uses **Jest** and **@testing-library/react** for unit and integration tests, and **Cypress** for end-to-end testing.

### Running Unit Tests
```bash
npm test
```

### Running End-to-End Tests
```bash
npx cypress open
```

---

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com).

### Steps to Deploy:
1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically build and deploy your application.

For more details, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
