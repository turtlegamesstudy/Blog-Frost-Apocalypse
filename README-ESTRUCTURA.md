# Frost Apocalypse — estructura del sitio

Esta carpeta contiene la versión pública de la bitácora de desarrollo. El sitio está pensado para GitHub Pages y separa la presentación, la lógica y el contenido.

## Archivos principales

| Archivo | Función |
|---|---|
| `index.html` | Estructura visible de la página. No necesitas modificarlo para publicar una entrada. |
| `Style.css` | Diseño visual responsive. |
| `app.js` | Buscador, filtros, comentarios locales, FAQ y panel de administración local. |
| `content.js` | Datos públicos del proyecto y todas las entradas de la bitácora. Este es el archivo que se edita para agregar contenido. |

## Carpetas

| Carpeta | Uso |
|---|---|
| `assets/images/` | Imágenes finales de publicaciones, capturas y arte. |
| `assets/videos/` | Videos, teasers y pruebas de gameplay. |
| `assets/audio/` | Música, efectos y otros audios. |
| `docs/` | Documentación interna que no debe publicarse en la página. |
| `data/` | Exportaciones JSON y respaldos de contenido. |

## Recursos antiguos

La bitácora original hace referencia a una carpeta `IMG/` con imágenes y videos. En los archivos recibidos en esta sesión solo estaban disponibles `index.html` y `Frost_Apocalypse.pdf`; los recursos multimedia no fueron adjuntados. Por eso no se copiaron imágenes ni videos reales y las entradas conservan las rutas antiguas `./IMG/...` como referencia.

Cuando compartas los recursos, puedes organizarlos así:

```text
assets/
├── images/
│   ├── mapa-casas.png
│   ├── mapa-urp.png
│   ├── menu-inicial.png
│   └── bosque-nocturno.jpg
├── videos/
│   ├── pre-alpha-01.mp4
│   └── teaser-v01.mp4
└── audio/
    └── musica-principal.mp3
```

Después se actualizan las rutas dentro de `content.js` para apuntar a `./assets/images/...`, `./assets/videos/...` y `./assets/audio/...`.

## Qué se muestra públicamente

La página solo muestra desarrollo del juego: preproducción, prototipos, Unity/URP, mapas, block mesh, modelado, arte, iluminación, mecánicas, controles, teaser, documentación y comunidad.

## Qué queda reservado

El PDF recibido se considera documentación interna. No se muestra en el sitio la historia, los personajes, el virus, las fases de infección, el opening cinematográfico ni otros detalles narrativos.

## Página de itch.io

No se recibió una URL ni un archivo exportado de itch.io. El portal deja un espacio pendiente para integrar el enlace oficial cuando lo compartas. No se inventó ningún enlace.

## Seguridad

GitHub Pages es hosting estático. La contraseña del panel actual solo sirve como control local del navegador y no protege datos reales. Para publicación y edición seguras se recomienda conectar un CMS/backend con autenticación, por ejemplo Supabase, Firebase, Decap CMS o GitHub OAuth. Para comentarios públicos se puede activar GitHub Discussions y conectar Giscus.
