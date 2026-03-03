[Leia a versão em Português aqui](./README-pt-br.md)

# 📝 Todo List - React + TypeScript

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

A modern, high-performance Todo List developed to master state management, componentization, and the new features of **Tailwind CSS v4**.

## 🔗 Live Demo

Check out the project in production: [https://jeff-todo-list.vercel.app/](https://jeff-todo-list.vercel.app/)

## 🏗️ Architecture & Features

This project goes beyond a simple list by implementing professional software engineering patterns:

- **Custom Hook Pattern**: All business logic, filtering, and state management are encapsulated in the `useTasks` hook, ensuring a clear separation of concerns (Clean Architecture).
- **Persistent Data**: Integration with the Browser's Local Storage API, using `try/catch` for resilience and a lazy initializer for optimized performance.
- **Advanced Filtering**: Real-time search, category filtering, and alphabetical sorting (A-Z/Z-A).
- **Strict Typing**: 100% written in TypeScript with strict interfaces for tasks and hook returns, ensuring type safety and excellent developer experience.

## 🎯 Project Goals

- **State Management**: Mastering the flow of data using React Hooks.
- **Componentization**: Breaking the UI into reusable and specialized components.
- **Performance**: Optimized rendering and efficient data synchronization.
- **Tailwind v4**: Leveraging the new engine for faster and cleaner styling.

## 🎨 Credits & Inspiration

The visual base of this project was inspired by the tutorial by **Matheus Battisti** in this [video](https://www.youtube.com/watch?v=YVEVrigByKY&list=WL&index=3&t=1456s).

> **Note**: While the UI design follows the inspiration, the architecture was evolved by me to a **Custom Hook-based pattern** with **LocalStorage persistence** and **strict TypeScript interfaces**, adding a layer of robustness not present in the original tutorial.

## 🛠️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jeffvini/todo-list.git
   ```

---

Developed by [**Jefferson Vinicius**](https://github.com/jeffvini) – [Connect with me on LinkedIn](https://www.linkedin.com/in/jeffvinidev/).
