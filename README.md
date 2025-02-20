# Jira Clone with Next.js and Hono

## 🚀 Project Description

This project is a Jira clone built with modern technologies like Next.js 15, Hono, and an elegant user interface using Tailwind CSS and Radix UI.

## 🛠️ Core Technologies

- **Frontend:**

  - Next.js 15.1.7
  - React 19.0.0
  - Tailwind CSS 4.0.6
  - Radix UI (Components)
  - TypeScript 5.7.3

- **Backend:**

  - Hono 4.7.2

- **Authentication:**
  - Custom authentication system
  - OAuth support (Google and GitHub)

## 📋 Prerequisites

- Node.js (recommended version: 18.x or higher)
- npm or yarn
- Git

## 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/build-jira-clone.git
cd build-jira-clone
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables:**
   Create a `.env` file in the project root:

```env
# Required environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🚀 Running the Project

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

## 🏗️ Project Structure

```
build-jira-clone/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── api/
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── dotted-separator.tsx
├── features/
│   └── auth/
├── lib/
│   └── utils.ts
└── public/
```

## 🔐 Authentication Features

The system includes:

- User registration
- Login
- Google authentication
- GitHub authentication
- Form validation with Zod

## 🎨 UI Components

The project uses a custom component library based on Radix UI and Tailwind CSS:

- Buttons
- Forms
- Cards
- Inputs
- Modals
- Tooltips
- And more...

## 🌐 API Routes

The API is built with Hono and integrates with Next.js:

```typescript
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello World" });
});

export const GET = handle(app);
```

## 🎯 Key Features

- Responsive design
- Light/dark theme
- Modern and minimalist interface
- Robust form validation
- Dynamic routing system
- Reusable components
- Query Provider for data fetching
- Mobile-first approach
- Custom hooks for enhanced functionality
- Comprehensive UI component library
- Type-safe API routes

## 🔄 Project Status

The project is under active development with new features being added regularly.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome. Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please open an issue in the repository.

## 🙏 Acknowledgments

- Next.js Team
- Radix UI
- Tailwind CSS
- Hono Team

---

Made with ❤️ by Epsaind dev
