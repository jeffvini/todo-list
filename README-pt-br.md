[Read the English version here](./README.md)

# 📝 Todo List - React + TypeScript

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Uma lista de tarefas (Todo List) moderna e de alta performance, desenvolvida para dominar o gerenciamento de estado, componentização e as novas funcionalidades do **Tailwind CSS v4**.

## 🔗 Demonstração ao Vivo

Confira o projeto em produção: [https://jeff-todo-list.vercel.app/](https://jeff-todo-list.vercel.app/)

## 🏗️ Arquitetura e Funcionalidades

Este projeto vai além de uma lista simples, implementando padrões profissionais de engenharia de software:

- **Padrão Custom Hook**: Toda a lógica de negócio, filtragem e gerenciamento de estado estão encapsulados no hook `useTasks`, garantindo uma separação clara de responsabilidades (Clean Architecture).
- **Persistência de Dados**: Integração com a API de Local Storage do navegador, utilizando `try/catch` para resiliência e inicialização preguiçosa (lazy initializer) para performance otimizada.
- **Filtragem Avançada**: Busca em tempo real, filtragem por categoria e ordenação alfabética (A-Z/Z-A).
- **Tipagem Estrita**: 100% escrito em TypeScript com interfaces personalizadas para tarefas e retornos de hooks, garantindo segurança de tipos e uma excelente experiência de desenvolvimento.

## 🎯 Objetivos do Projeto

- **Gerenciamento de Estado**: Dominar o fluxo de dados usando React Hooks.
- **Componentização**: Divisão da interface em componentes reutilizáveis e especializados.
- **Performance**: Renderização otimizada e sincronização de dados eficiente.
- **Tailwind v4**: Utilização do novo motor para uma estilização mais rápida e limpa.

## 🎨 Créditos e Inspiração

A base visual deste projeto foi inspirada no tutorial de **Matheus Battisti** neste [vídeo](https://www.youtube.com/watch?v=YVEVrigByKY&list=WL&index=3&t=1456s).

> **Nota**: Embora o design da interface siga a inspiração, a arquitetura foi evoluída por mim para um **padrão baseado em Custom Hooks** com **persistência em LocalStorage** e **interfaces TypeScript estritas**, adicionando camadas de robustez que não estavam presentes no tutorial original.

## 🛠️ Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/jeffvini/todo-list.git
   ```

---

Desenvolvido por [**Jefferson Vinicius**](https://github.com/jeffvini) – [Connect with me on LinkedIn](https://www.linkedin.com/in/jeffvinidev/).
