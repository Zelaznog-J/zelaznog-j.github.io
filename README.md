# Portafolio — Javiera González Mardones

Sitio web de portafolio para **Analista de Datos Geoespacial**, construido con
HTML, CSS y JavaScript puros (sin frameworks ni build step), listo para
publicarse gratis en **GitHub Pages**.

🔗 Una vez publicado: `https://zelaznog-j.github.io/portafolio-geodata/`
(o `https://zelaznog-j.github.io/` si el repositorio se llama así).

## Contenido

- **Inicio**: presentación y enlaces de contacto.
- **Sobre mí**: perfil profesional.
- **Habilidades**: herramientas de análisis de datos, SIG y teledetección.
- **Proyectos**: incluye un **mapa interactivo real** (Leaflet) con zonas de
  ejemplo, y dos **gráficos interactivos** (Chart.js) de NDVI y rendimiento
  agrícola. Los datos de estos tres elementos son **de demostración**.
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

Las librerías externas (Leaflet y Chart.js) se cargan desde CDN — no requiere
instalar dependencias.

## Ver el sitio en tu computador

No necesitas instalar nada: basta con abrir `index.html` en el navegador.

Si prefieres servirlo localmente (recomendado, evita restricciones del
navegador con `file://`), con Python instalado:

```bash
python -m http.server 8000
```

y visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `portafolio-geodata`).
2. Sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "Primer despliegue del portafolio"
   git branch -M main
   git remote add origin https://github.com/Zelaznog-J/portafolio-geodata.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source**, selecciona la rama `main` y la
   carpeta `/ (root)`. Guarda.
4. En 1-2 minutos el sitio estará disponible en la URL que indica esa misma
   página de configuración.

> Tip: si en vez de `portafolio-geodata` nombras el repositorio
> `zelaznog-j.github.io`, GitHub lo publica automáticamente en la raíz de tu
> dominio de usuario, sin pasos adicionales de configuración.

## Cómo personalizar

Este sitio se entrega con **contenido de ejemplo** que debes reemplazar por
tu información real antes de compartirlo:

- [ ] **Proyectos** (`index.html`, sección `#proyectos`): reemplaza los 4
      proyectos de ejemplo por tus proyectos reales — actualiza título,
      descripción, herramientas y el enlace `href` a cada repositorio de
      GitHub real.
- [ ] **Mapa** (`js/main.js`, arreglo `zonas`): reemplázalo por tus propios
      datos geoespaciales (o cárgalo desde un archivo `.geojson` real con
      `fetch`).
- [ ] **Gráficos NDVI / rendimiento** (`js/main.js`): reemplaza los arreglos
      `data` por resultados reales de tus análisis.
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
