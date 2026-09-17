/*
 * CONTENIDO PÚBLICO DEL PORTAL
 * Solo incluye desarrollo, producción, arte, técnica y comunidad.
 * La historia, personajes, virus, fases de infección y opening permanecen fuera del sitio.
 * Para agregar una entrada, copia un objeto dentro de projectUpdates.
 */
window.PROJECT_DATA = {
  project: {
    title: 'Frost Apocalypse',
    studio: 'Turtle Games Dev',
    status: 'En desarrollo',
    tagline: 'Bitácora de producción de un videojuego indie nicaragüense.',
    description: 'Un espacio para documentar prototipos, mapas, arte, mecánicas, audio y decisiones técnicas durante la creación del juego.',
    platform: 'PC / Steam (planificado)',
    developer: 'Hanzell René Mayorga Calero',
    engine: 'Unity 3D · URP'
  },
  projectUpdates: [
    { date: '2022-01-01', year: '2022', category: 'Preproducción', title: 'Nace el proyecto', summary: 'Comienza la exploración de conceptos, referencias visuales y objetivos para crear un videojuego indie de supervivencia.', body: '<p>Esta etapa reúne las primeras ideas, el alcance inicial y la decisión de aprender programación, modelado 3D y diseño gráfico para desarrollar el proyecto.</p>', tags: ['concepto', 'preproducción'] },
    { date: '2023-01-01', year: '2023', category: 'Prototipo', title: 'Primeros mapas y pruebas visuales', summary: 'Se construyen las primeras casas, el mapa inicial, el menú y pruebas de composición en Unity 3D con URP.', body: '<p>El objetivo de esta fase es validar escala, navegación, iluminación y rendimiento antes de aumentar el detalle visual.</p><div class="media-grid"><figure><img src="./IMG/Captura casas.png" alt="Primeras casas del mapa" loading="lazy"><figcaption>Mapa inicial</figcaption></figure><figure><img src="./IMG/Captura urp.png" alt="Prueba visual con URP" loading="lazy"><figcaption>Prueba con URP</figcaption></figure><figure><img src="./IMG/menu11.png" alt="Menú inicial del prototipo" loading="lazy"><figcaption>Menú inicial</figcaption></figure></div>', tags: ['unity', 'urp', 'mapa'] },
    { date: '2023-06-01', year: '2023', category: 'Arte 3D', title: 'Modelado de entornos', summary: 'Se prueban casas, piezas de escenario y recursos creados para establecer el lenguaje visual del mundo.', body: '<p>La prioridad es construir una biblioteca propia de recursos y aprender un flujo de trabajo consistente entre modelado, materiales, iluminación y montaje en Unity.</p><div class="media-grid"><figure><img src="./IMG/Captura3.png" alt="Casa creada con ProBuilder" loading="lazy"><figcaption>Prueba con ProBuilder</figcaption></figure></div>', tags: ['modelado', 'probuilder', 'entorno'] },
    { date: '2023-09-01', year: '2023', category: 'Mecánicas', title: 'Primeras mecánicas y controles', summary: 'Se implementan caminar, correr, agacharse, arrastrarse, saltar obstáculos, subir a plataformas y sistemas de combate.', body: '<p>Las pruebas se enfocan en respuesta de controles, transiciones de animación, cámara y lectura del espacio jugable.</p>', tags: ['mecánicas', 'controles', 'prototipo'] },
    { date: '2024-01-01', year: '2024', category: 'Diseño de niveles', title: 'Expansión del mapa', summary: 'El block mesh crece con nuevas zonas para probar recorridos, escalas, coberturas y distribución de recursos.', body: '<div class="media-grid"><figure><img src="./IMG/Expancion1.jpg" alt="Expansión del mapa uno" loading="lazy"><figcaption>Expansión 01</figcaption></figure><figure><img src="./IMG/Expancion2.jpg" alt="Expansión del mapa dos" loading="lazy"><figcaption>Expansión 02</figcaption></figure></div>', tags: ['mapa', 'block mesh', 'niveles'] },
    { date: '2025-01-01', year: '2025', category: 'Dirección de arte', title: 'Bosque y atmósferas', summary: 'Se exploran zonas boscosas, iluminación, clima y variaciones de ambiente, incluyendo una versión nocturna.', body: '<p>La meta es definir una identidad visual reconocible y estudiar cómo la luz, la niebla y la vegetación afectan la orientación del jugador.</p><div class="media-grid"><figure><img src="./IMG/Bosque1.jpg" alt="Zona boscosa del proyecto" loading="lazy"></figure><figure><img src="./IMG/Bosque4.jpg" alt="Zona boscosa nocturna" loading="lazy"><figcaption>Prueba nocturna</figcaption></figure></div>', tags: ['arte', 'bosque', 'iluminación'] },
    { date: '2025-06-01', year: '2025', category: 'Presentación', title: 'Evolución del teaser', summary: 'Se producen distintas versiones del teaser para probar ritmo, encuadres, atmósfera y forma de presentar el proyecto.', body: '<p>El material promocional se utiliza como ejercicio de comunicación visual y como registro de la evolución del prototipo.</p>', tags: ['teaser', 'trailer', 'edición'] },
    { date: '2026-09-17', year: '2026', category: 'Organización', title: 'Portal de desarrollo interactivo', summary: 'La bitácora se reorganiza para publicar avances por fecha, filtrar temas, recibir comentarios y agregar contenido sin modificar la estructura del sitio.', body: '<p>Esta etapa incorpora una base de contenido separada, un inventario de recursos y una estructura preparada para conectar un CMS o un servicio de comentarios público.</p>', tags: ['portal', 'comunidad', 'documentación'] }
  ],
  faq: [
    ['¿Qué se publica en esta página?', 'Avances de producción: prototipos, mapas, modelado, arte, mecánicas, animación, audio, rendimiento y pruebas.'],
    ['¿Qué no se publica todavía?', 'La historia, los personajes, el virus, las fases de infección, el opening y otros detalles narrativos permanecen reservados.'],
    ['¿En qué plataforma se está desarrollando?', 'El plan actual contempla PC y Steam. La disponibilidad final se anunciará cuando esté confirmada.'],
    ['¿Qué motor se utiliza?', 'Unity 3D con el canal de renderizado URP.'],
    ['¿Cómo puedo seguir el progreso?', 'A través de esta bitácora, las redes oficiales y la página de itch.io cuando se integre su enlace oficial.']
  ]
};

// Pendiente: completar con la URL y los identificadores de itch.io/Giscus cuando sean compartidos.
window.COMMENTS_CONFIG = { provider: 'local', itchUrl: '', providerUrl: '', repo: '', repoId: '', category: 'Announcements', categoryId: '' };

if (window.localStorage && localStorage.getItem('frost-project-data')) {
  try { window.PROJECT_DATA = JSON.parse(localStorage.getItem('frost-project-data')); } catch (error) { console.warn('No se pudo cargar el borrador local.', error); }
}
