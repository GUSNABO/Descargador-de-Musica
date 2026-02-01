# Neon Downloader 🎥✨

![Neon Downloader](https://img.shields.io/badge/Status-Active-brightgreen)

**Neon Downloader** es una aplicación web moderna y estilizada para descargar videos y audio de YouTube de manera rápida y sencilla. Diseñada con una estética "Cyberpunk/Neon" futurista, ofrece una experiencia de usuario fluida y visualmente atractiva.

## 🚀 Características

*   **Descarga Dual**: Soporte para descargar videos en **MP4** y audio en **MP3**.
*   **Diseño Futurista**: Interfaz de usuario inmersiva con efectos de neón, animaciones suaves y una paleta de colores oscuros.
*   **Limpieza Automática**: El servidor gestiona y elimina automáticamente los archivos temporales después de la descarga para ahorrar espacio.
*   **Frontend Reactivo**: Construido con React y Framer Motion para interacciones dinámicas.
*   **Backend Robusto**: Utiliza Flask y yt-dlp para un procesamiento de descargas confiable.

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza un stack moderno para garantizar rendimiento y estilo:

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

## 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:
*   [Node.js](https://nodejs.org/) (v14+ recomendado)
*   [Python](https://www.python.org/) (v3.8+)
*   [FFmpeg](https://ffmpeg.org/) (Necesario para la conversión y procesamiento de audio/video por yt-dlp)

## ⚡ Instalación y Ejecución

Sigue estos pasos para correr el proyecto localmente:

### 1. Configuración del Backend

Navega a la carpeta raíz del proyecto:

```bash
# Instalar dependencias de Python
pip install flask flask-cors yt-dlp
```

Ejecuta el servidor Flask:

```bash
python app.py
```
El backend correrá en `http://127.0.0.1:5000`.

### 2. Configuración del Frontend

Abre una nueva terminal y navega a la carpeta `frontend`:

```bash
cd frontend

# Instalar dependencias
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```
El frontend suele correr en `http://localhost:5173`. ¡Abre ese enlace en tu navegador y disfruta de Neon Downloader!
