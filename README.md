# proyecto-react

Proyecto del curso **Talento Tech** — e-commerce desarrollado con React + Vite y Firebase (Firestore) como DB

🚀 **En producción:** 
https://delicate-cascaron-7e96e2.netlify.app/

---

## Instalación y configuración local

### 1. Clonar el repositorio

```bash
git clone https://github.com/mariok99/proyecto-react.git
cd proyecto-react
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Este proyecto usa **Firebase** como base de datos. 
Rename `.env_example` to `.env` and replace the values with your own values.

> You can find these values in the Firebase console:
> **Project Settings → General → Your apps → SDK setup and configuration**

### 4. Start development server

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

---

## 📦 Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Generate production bundle |
| `npm run preview` | Preview production build |
| `npm run lint` | Run linter |

---

## 🔧 Technologies used

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [React Router DOM 7](https://reactrouter.com/)
- [Firebase / Firestore](https://firebase.google.com/)
