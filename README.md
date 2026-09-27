# Portafolio — Javiera González Mardones

Sitio web de portafolio para **Analista de Datos Geoespacial**, construido con
HTML, CSS y JavaScript puros (sin frameworks ni build step), listo para
publicarse gratis en **GitHub Pages**.

🔗 Una vez publicado: **https://zelaznog-j.github.io/**

## Contenido

- **Inicio**: presentación y enlaces de contacto.
- **Sobre mí**: perfil profesional.
- **Habilidades**: herramientas de análisis de datos, SIG y teledetección.
- **Proyectos**: sección pendiente de completar con proyectos reales.
- **Experiencia**: áreas de trabajo (sector público, agroindustria, proyectos
  agroecológicos).
- **Contacto**: email y LinkedIn.

## Estructura del proyecto

```
portafolio_geodata/
├── index.html          # Página principal
├── css/style.css        # Estilos (incluye modo oscuro automático)
├── js/main.js            # Interactividad: menú, mapa, gráficos, animaciones
├── assets/favicon.svg   # Ícono del sitio
├── LICENSE
└── README.md
```

## Ver el sitio en tu computador

No necesitas instalar nada: basta con abrir `index.html` en el navegador.

Si prefieres servirlo localmente (recomendado, evita restricciones del
navegador con `file://`), con Python instalado:

```bash
python -m http.server 8000
```

y visita `http://localhost:8000`.

## Publicar en GitHub Pages

Este proyecto vive en el repositorio **`zelaznog-j.github.io`** — por ser un
repositorio de sitio de usuario, GitHub lo publica automáticamente en
`https://zelaznog-j.github.io/` en cuanto se sube contenido a la rama `main`,
sin pasos adicionales de configuración de Pages.

```bash
git remote add origin https://github.com/Zelaznog-J/zelaznog-j.github.io.git
git push -u origin main
```

En 1-2 minutos el sitio queda disponible en esa URL. Puedes verificar el
estado del despliegue en la pestaña **Actions** del repositorio, o en
**Settings → Pages**.

## Cómo personalizar

Este sitio se entrega con **contenido de ejemplo** que debes reemplazar por
tu información real antes de compartirlo:

- [ ] **Proyectos** (`index.html`, sección `#proyectos`): agrega tus
      proyectos reales — título, descripción, herramientas y el enlace
      `href` a cada repositorio de GitHub. Si vuelves a incluir un mapa o
      gráficos interactivos, agrega Leaflet y/o Chart.js desde CDN de nuevo.
- [ ] **Experiencia** (`index.html`, sección `#experiencia`): agrega cargos,
      instituciones y fechas reales si quieres mayor detalle.
- [ ] **Foto de perfil**: el círculo con iniciales "JGM" es un placeholder;
      puedes reemplazarlo por una foto real agregando una imagen en
      `assets/` y sustituyendo el `div.about-avatar` en `index.html` por una
      etiqueta `<img>`.
- [ ] **CV descargable** (opcional): agrega tu CV en PDF dentro de `assets/`
      y enlázalo desde el botón de contacto.

## Accesibilidad y diseño

- Paleta de color y especificaciones de los gráficos siguen una metodología
  validada de accesibilidad para daltonismo (contraste y separación de color
  verificados).
- Modo oscuro automático según la preferencia del sistema operativo.
- Diseño responsivo (menú móvil, cuadrícula adaptable).

## Licencia

Código publicado bajo licencia MIT (ver `LICENSE`). El contenido personal
(textos, biografía) es propiedad de Javiera González Mardones.
