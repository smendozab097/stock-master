# StockMaster - Gestión de Inventario 🚀

Bienvenido al proyecto **StockMaster**, una aplicación premium para la gestión de inventarios. Este proyecto está diseñado para practicar el desarrollo de una interfaz CRUD completa consumiendo una API REST.

## 📂 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- **`/client`**: Contiene la interfaz de usuario construida con **Vite** y **Tailwind CSS**. Ya tienes toda la estructura HTML y los estilos listos para usar.
- **`/api`**: Aquí es donde debes configurar tu servidor de datos utilizando **json-server**.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS.
- **Herramientas de Construcción:** Vite.
- **Backend (Simulado):** JSON Server.

## 📋 Tareas a Realizar

Tu misión es conectar la interfaz visual con la lógica del backend:

1.  **Configurar la API:**
    - Inicializa un servidor con `json-server` en la carpeta `/api`.
    - Crea un archivo `db.json` con la estructura necesaria para los productos (nombre, precio, stock, descripción).
2.  **Lógica del Cliente (`/client/src/main.js`):**
    - Implementar el **Listado** (GET) de productos al cargar la página.
    - Implementar la **Creación** (POST) de nuevos productos desde el formulario.
    - Implementar la **Edición** (PUT/PATCH) de productos existentes.
    - Implementar la **Eliminación** (DELETE) de productos.
    - Actualizar las estadísticas superiores dinámicamente.

## 🚀 Cómo empezar

1.  Instala las dependencias en la carpeta del cliente:
    ```bash
    cd client
    npm install
    npm run dev
    ```
2.  Configura e inicia tu servidor en la carpeta `api`.

---
¡Mucha suerte con el desarrollo! Que el código te acompañe. 💻✨
