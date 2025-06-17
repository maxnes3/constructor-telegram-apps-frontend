# 🚀 NovaToolkit Frontend

> The frontend of "NovaToolkit" diploma work by Maxim Bondarenko

---

## 📦 Requirements

- [Node.js](https://nodejs.org/) **v18+** (for local run)
- [npm](https://www.npmjs.com/) **v7+**
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) (for containerized run)

---

## ⚡️ Quick Start

### 1. Local Development

#### 1.1. Install dependencies

```bash
npm ci
```

#### 1.2. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

### 2. Docker Compose

#### 2.1. Make sure Docker and Docker Compose are installed

- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

#### 2.2. Start the project in a container

```bash
npm run start:docker
```
or
```bash
docker compose up
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 📝 Environment Variables

You can set environment variables in `.env` or use the provided `.env.example` as a template.

---

## 📚 Useful Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Build the project
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Fix lint errors automatically

---

## 🛠️ Project Structure

```
src/
  app/           # App entry and routes
  pages/         # Pages
  widgets/       # UI widgets
  entities/      # Business entities
  shared/        # Shared code and components
```

---

## 🤝 Contributing

Feel free to open issues or pull requests!

---