# ALX Project 0x02 - Next.js with TypeScript and Tailwind CSS

This is a Next.js project demonstrating modern web development with TypeScript and Tailwind CSS. The project includes reusable components, routing, API integration, and best practices for structuring a Next.js application.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jj-tech-ranger/alx-project-0x02-setup.git
cd alx-project-0x02-setup/alx-project-0x02
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev -- -p 3000
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## 🎯 Features

- ✅ Next.js with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Reusable components (Card, Button, Modal)
- ✅ Pages Router for navigation
- ✅ API integration with JSONPlaceholder
- ✅ TypeScript interfaces for type safety
- ✅ Responsive design
- ✅ ESLint for code quality

## 📄 Pages

- **Home** (`/home`) - Landing page with card grid and post modal
- **About** (`/about`) - About page with button examples
- **Posts** (`/posts`) - Posts fetched from JSONPlaceholder API
- **Users** (`/users`) - Users fetched from JSONPlaceholder API

## 🧩 Components

### Common Components

- **Card** - Reusable card component with title and content props
- **Button** - Customizable button with size and shape variants
- **PostModal** - Modal for adding new posts
- **PostCard** - Card component for displaying posts
- **UserCard** - Card component for displaying user information

### Layout Components

- **Header** - Navigation header with links to all pages

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake REST API for testing

## 📚 Learning Objectives

- Scaffold a Next.js application with TypeScript and Tailwind CSS
- Implement basic routing using the Pages Router
- Create reusable components with TypeScript interfaces
- Implement interactive UI elements (modals, buttons)
- Fetch and display data from external APIs
- Structure a Next.js project following best practices
- Work with component props and state management
- Build responsive layouts with navigation

## 👨‍💻 Author

**JJ** - [jj-tech-ranger](https://github.com/jj-tech-ranger)

## 📝 License

This project is part of the ALX Software Engineering Program.

## 🙏 Acknowledgments

- ALX Software Engineering Program
- Next.js Documentation
- Tailwind CSS Documentation
