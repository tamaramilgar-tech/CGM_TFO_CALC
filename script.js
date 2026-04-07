
const APP_DATA = {
  "titles": {
    "a": "Tipos de datos y referencias",
    "b": "Fórmulas y funciones",
    "c": "Gráficos",
    "d": "Macros",
    "e": "Importación y exportación",
    "f": "Hoja de cálculo como base de datos"
  },
  "pools": {
    "a": [
      {
        "q": "¿Qué tipo de referencia no cambia al copiar una fórmula?",
        "options": [
          "Relativa",
          "Absoluta",
          "Mixta",
          "Enlace externo"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué representa A2:D6 en Calc?",
        "options": [
          "Una sola celda",
          "Un rango de celdas",
          "Un gráfico",
          "Una hoja"
        ],
        "answer": 1
      },
      {
        "q": "¿Cuál de estos valores se interpreta normalmente como fecha?",
        "options": [
          "21%",
          "07/10/2025",
          "Bolígrafos",
          "$G$2"
        ],
        "answer": 1
      },
      {
        "q": "¿Para qué se usó la celda $G$2 en la práctica?",
        "options": [
          "Para guardar el nombre del producto",
          "Para fijar el IVA",
          "Para poner la fecha",
          "Para crear un gráfico"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué ocurre con la referencia B2 al copiarla una fila hacia abajo?",
        "options": [
          "Pasa a B3",
          "Se convierte en $B$2",
          "Desaparece",
          "Pasa a C2"
        ],
        "answer": 0
      },
      {
        "q": "¿Cuál es un ejemplo de referencia mixta?",
        "options": [
          "A1:B5",
          "$C$4",
          "$B2",
          "Hoja2.A1"
        ],
        "answer": 2
      },
      {
        "q": "Si una fórmula usa datos de otra hoja del mismo libro, estamos usando…",
        "options": [
          "Una referencia entre hojas",
          "Una macro",
          "Un filtro",
          "Un comentario"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué dato de la práctica era texto?",
        "options": [
          "1,20",
          "21%",
          "Bolígrafos",
          "07/10/2025"
        ],
        "answer": 2
      },
      {
        "q": "¿Qué formato conviene aplicar a la columna de precios?",
        "options": [
          "Porcentaje",
          "Moneda",
          "Texto fijo",
          "Fecha"
        ],
        "answer": 1
      },
      {
        "q": "¿Para qué sirve una referencia absoluta en una tabla de cálculos repetidos?",
        "options": [
          "Para que la fórmula falle",
          "Para fijar una celda común",
          "Para ordenar alfabéticamente",
          "Para ocultar filas"
        ],
        "answer": 1
      },
      {
        "q": "¿Cuál de estas expresiones referencia una celda de otra hoja?",
        "options": [
          "=SUMA(A1:A5)",
          "=Resumen.B2",
          "=$B$2",
          "=A1+B1"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué identifica a una celda en Calc?",
        "options": [
          "El nombre de la hoja y un color",
          "La columna y la fila",
          "Solo la fila",
          "Solo la columna"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué es un libro de cálculo?",
        "options": [
          "Una única celda",
          "Un conjunto de hojas",
          "Una función avanzada",
          "Un tipo de gráfico"
        ],
        "answer": 1
      },
      {
        "q": "En la práctica, el cálculo base del total sin IVA fue…",
        "options": [
          "Precio × cantidad",
          "IVA × fecha",
          "Producto ÷ cantidad",
          "Fecha + precio"
        ],
        "answer": 0
      }
    ],
    "b": [
      {
        "q": "¿Con qué símbolo debe comenzar una fórmula en Calc?",
        "options": [
          "+",
          "=",
          "@",
          "#"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué función calcula la media aritmética?",
        "options": [
          "SUMA",
          "SI",
          "PROMEDIO",
          "MIN"
        ],
        "answer": 2
      },
      {
        "q": "¿Qué función devuelve el valor más alto?",
        "options": [
          "MAX",
          "MIN",
          "CONTAR",
          "MEDIANA"
        ],
        "answer": 0
      },
      {
        "q": "¿Para qué sirve la función SI?",
        "options": [
          "Para ordenar celdas",
          "Para evaluar una condición",
          "Para insertar una imagen",
          "Para crear hojas nuevas"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué fórmula sería adecuada para promediar B2:D2?",
        "options": [
          "=SUMA(B2:D2)",
          "=PROMEDIO(B2:D2)",
          "=SI(B2:D2)",
          "=MAX(B2:D2)"
        ],
        "answer": 1
      },
      {
        "q": "Si quieres mostrar “Apto” cuando una nota es igual o mayor que 5, usarías…",
        "options": [
          "Una tabla dinámica",
          "Una función SI",
          "Un filtro automático",
          "Un gráfico de líneas"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué función usarías para conocer la nota más baja de una lista?",
        "options": [
          "MAX",
          "MIN",
          "SUMA",
          "HOY"
        ],
        "answer": 1
      },
      {
        "q": "¿Cuál es el objetivo principal de una fórmula?",
        "options": [
          "Dar formato visual",
          "Calcular un resultado",
          "Bloquear la hoja",
          "Insertar comentarios"
        ],
        "answer": 1
      },
      {
        "q": "En una hoja de notas, ¿qué función usarías para sumar varias calificaciones?",
        "options": [
          "SUMA",
          "PROMEDIO",
          "SI",
          "MAX"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué pasa si copias una fórmula con referencias relativas hacia abajo?",
        "options": [
          "Las referencias se ajustan",
          "La fórmula se elimina",
          "Se convierte en texto",
          "No se puede copiar"
        ],
        "answer": 0
      },
      {
        "q": "¿Cuál de estas expresiones es una función válida?",
        "options": [
          "=PROMEDIO(B2:D2)",
          "PROMEDIO=B2:D2",
          "B2:D2=PROMEDIO",
          "{PROMEDIO}"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué resultado lógico puede devolver una condición en la función SI?",
        "options": [
          "Verdadero o falso",
          "Solo números negativos",
          "Solo texto",
          "Solo fechas"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué función elegirías para saber cuántas celdas numéricas hay?",
        "options": [
          "CONTAR",
          "SI",
          "MAX",
          "SUMA"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué ventaja tiene usar funciones en vez de calcular a mano?",
        "options": [
          "Empeoran la precisión",
          "Automatizan y reducen errores",
          "Solo sirven para gráficos",
          "Obligan a usar macros"
        ],
        "answer": 1
      }
    ],
    "c": [
      {
        "q": "¿Qué gráfico suele ser más adecuado para comparar cantidades entre categorías?",
        "options": [
          "Columnas o barras",
          "Sectores",
          "Radar",
          "Superficie"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué gráfico muestra mejor la evolución en el tiempo?",
        "options": [
          "Líneas",
          "Sectores",
          "Dispersión",
          "Pirámide"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué gráfico es útil para representar porcentajes de un total?",
        "options": [
          "Líneas",
          "Sectores",
          "Burbujas",
          "Cotizaciones"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué elemento identifica cada serie de datos en un gráfico?",
        "options": [
          "La leyenda",
          "El borde de la hoja",
          "La barra de fórmulas",
          "El comentario"
        ],
        "answer": 0
      },
      {
        "q": "¿Para qué sirve el título del gráfico?",
        "options": [
          "Para ocultar datos",
          "Para describir qué muestra",
          "Para bloquear celdas",
          "Para sumar valores"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué se necesita antes de insertar un gráfico?",
        "options": [
          "Seleccionar los datos",
          "Crear una macro",
          "Proteger la hoja",
          "Guardar como PDF"
        ],
        "answer": 0
      },
      {
        "q": "Si modificas los datos de origen, el gráfico en Calc normalmente…",
        "options": [
          "Se actualiza",
          "Se borra",
          "Se convierte en imagen",
          "Se cierra"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué parte de un gráfico ayuda a interpretar las escalas?",
        "options": [
          "Los ejes",
          "El pie de página",
          "La contraseña",
          "La hoja 2"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué acción mejora la legibilidad de un gráfico?",
        "options": [
          "Quitar todos los textos",
          "Añadir títulos claros y etiquetas",
          "Usar 3D siempre",
          "Duplicar las series"
        ],
        "answer": 1
      },
      {
        "q": "¿Para qué sirve cambiar el tipo de gráfico?",
        "options": [
          "Para adaptar la visualización al objetivo",
          "Solo para decorar",
          "Para bloquear los datos",
          "Para hacer macros"
        ],
        "answer": 0
      },
      {
        "q": "¿Cuál sería un mal uso frecuente de los gráficos?",
        "options": [
          "Elegir un tipo poco adecuado para los datos",
          "Revisar los valores antes de insertarlo",
          "Poner un título descriptivo",
          "Mostrar leyenda"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué gráfico elegirías para ventas por meses de enero a junio?",
        "options": [
          "Líneas",
          "Sectores",
          "Anillos múltiples",
          "Mapa"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué gráfico elegirías para repartir el porcentaje de ventas por producto?",
        "options": [
          "Sectores",
          "Líneas",
          "Columnas 3D obligatoriamente",
          "Dispersión"
        ],
        "answer": 0
      },
      {
        "q": "¿Cuál es la fuente de un gráfico en Calc?",
        "options": [
          "Los datos de las celdas",
          "Un archivo de audio",
          "Una macro grabada",
          "El explorador web"
        ],
        "answer": 0
      }
    ],
    "d": [
      {
        "q": "¿Qué es una macro en Calc?",
        "options": [
          "Un gráfico especial",
          "Una secuencia de acciones automatizadas",
          "Un filtro de texto",
          "Una hoja protegida"
        ],
        "answer": 1
      },
      {
        "q": "¿Para qué puede ser útil grabar una macro?",
        "options": [
          "Para repetir tareas frecuentes",
          "Para cambiar el idioma de Calc",
          "Para dibujar a mano alzada",
          "Para abrir internet"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué ventaja ofrecen las macros en documentos repetitivos?",
        "options": [
          "Aumentan el trabajo manual",
          "Ahorran tiempo",
          "Impiden guardar archivos",
          "Solo sirven para gráficos"
        ],
        "answer": 1
      },
      {
        "q": "¿Qué acción suele hacerse antes de grabar una macro?",
        "options": [
          "Planificar qué pasos se van a repetir",
          "Borrar todas las hojas",
          "Insertar un vídeo",
          "Desactivar el teclado"
        ],
        "answer": 0
      },
      {
        "q": "¿Dónde puede guardarse una macro?",
        "options": [
          "En el documento o en Mi Macros",
          "Solo en PDF",
          "Solo en una imagen",
          "En el correo electrónico"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué es recomendable probar después de grabar una macro?",
        "options": [
          "Que repite bien las acciones",
          "Que cambia el fondo del sistema",
          "Que crea usuarios nuevos",
          "Que bloquea internet"
        ],
        "answer": 0
      },
      {
        "q": "¿Para qué sirve asignar una macro a un botón?",
        "options": [
          "Para ejecutarla más fácilmente",
          "Para ocultarla",
          "Para imprimir automáticamente siempre",
          "Para convertirla en gráfico"
        ],
        "answer": 0
      },
      {
        "q": "¿Cuál es un uso razonable de una macro en esta unidad?",
        "options": [
          "Aplicar formato repetitivo a una tabla",
          "Crear una cuenta de correo",
          "Editar un vídeo",
          "Buscar archivos en toda la red"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué ocurre si la tarea cambia mucho cada vez?",
        "options": [
          "La macro puede ser menos útil",
          "La macro siempre será perfecta",
          "No hace falta pensar",
          "La hoja no se guarda"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué conviene hacer si una macro falla?",
        "options": [
          "Revisar los pasos grabados y volver a probar",
          "Eliminar el programa",
          "No guardar nunca",
          "Cambiar el monitor"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué relación tienen las macros con la automatización?",
        "options": [
          "La facilitan",
          "La impiden",
          "No tienen ninguna",
          "Solo la usan los gráficos"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué buena práctica mejora el uso de macros?",
        "options": [
          "Poner nombres claros a las macros",
          "Nombrarlas todas igual",
          "No documentarlas nunca",
          "Usarlas sin pruebas"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué elemento puede ejecutar una macro además del menú?",
        "options": [
          "Un botón o atajo",
          "Solo una impresora",
          "Una imagen de fondo",
          "El pie de página"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué objetivo tenía la práctica de macros?",
        "options": [
          "Generar documentos o plantillas con menos trabajo manual",
          "Aprender a dibujar gráficos 3D",
          "Navegar por internet",
          "Crear bases de datos externas"
        ],
        "answer": 0
      }
    ],
    "e": [
      {
        "q": "¿Cuál es el formato nativo de LibreOffice Calc?",
        "options": [
          "ODS",
          "CSV",
          "DOCX",
          "PPTX"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué caracteriza a un archivo CSV?",
        "options": [
          "Guarda datos separados por delimitadores",
          "Incluye macros complejas siempre",
          "Solo almacena imágenes",
          "No puede abrirse en Calc"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué acción permite trabajar con archivos de Excel en Calc?",
        "options": [
          "Importarlos o abrirlos",
          "Convertirlos en vídeo",
          "Escanearlos",
          "Bloquearlos"
        ],
        "answer": 0
      },
      {
        "q": "¿Por qué conviene revisar un archivo importado?",
        "options": [
          "Porque el formato puede cambiar",
          "Porque siempre se borra solo",
          "Porque no tiene datos",
          "Porque Calc no admite tablas"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué formato suele usarse para intercambio simple de datos tabulares?",
        "options": [
          "CSV",
          "PNG",
          "MP3",
          "HTML"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué puede alterarse al pasar de una aplicación a otra?",
        "options": [
          "Formatos, fórmulas o caracteres",
          "La existencia del teclado",
          "La pantalla física",
          "La conexión eléctrica"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué significa exportar una hoja?",
        "options": [
          "Guardar o generar el archivo en otro formato",
          "Cerrar el programa",
          "Eliminar los datos",
          "Copiar solo una celda"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué formato es adecuado si quieres seguir editando la hoja en Calc con plena compatibilidad?",
        "options": [
          "ODS",
          "JPG",
          "PDF exclusivamente",
          "TXT plano siempre"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué ventaja tiene XLSX frente a ODS en algunos contextos?",
        "options": [
          "Mayor compatibilidad con Microsoft Excel",
          "Mejor para audios",
          "Sirve para macros en cualquier caso",
          "Nunca pierde formato"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué conviene comprobar al importar un CSV?",
        "options": [
          "Separador, codificación y tipo de datos",
          "Solo el color del fondo",
          "La webcam",
          "La batería del ratón"
        ],
        "answer": 0
      },
      {
        "q": "Si necesitas enviar una hoja para solo lectura e impresión, un formato habitual sería…",
        "options": [
          "PDF",
          "ODS",
          "CSV",
          "XML de macros"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué problema puede aparecer al exportar?",
        "options": [
          "Cambios en fórmulas o formato",
          "Que el archivo se convierta en vídeo",
          "Que desaparezca el sistema operativo",
          "Que la hoja hable"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué acción ayuda a evitar errores de intercambio?",
        "options": [
          "Hacer pruebas de apertura en el formato destino",
          "No revisar nunca el archivo",
          "Usar nombres aleatorios",
          "Borrar encabezados"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué finalidad tuvo la práctica de esta fase?",
        "options": [
          "Importar y exportar hojas entre aplicaciones y formatos",
          "Crear únicamente macros",
          "Ordenar bases de datos",
          "Diseñar certificados"
        ],
        "answer": 0
      }
    ],
    "f": [
      {
        "q": "En una lista tipo base de datos, cada fila suele representar…",
        "options": [
          "Un registro",
          "Un gráfico",
          "Una macro",
          "Una hoja nueva"
        ],
        "answer": 0
      },
      {
        "q": "En una lista tipo base de datos, cada columna suele representar…",
        "options": [
          "Un campo",
          "Una impresora",
          "Un comentario",
          "Un filtro"
        ],
        "answer": 0
      },
      {
        "q": "¿Para qué sirve ordenar datos?",
        "options": [
          "Para reorganizar registros según un criterio",
          "Para borrarlos",
          "Para convertirlos en imágenes",
          "Para bloquear el teclado"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué permite un filtro?",
        "options": [
          "Mostrar solo los datos que cumplen una condición",
          "Eliminar todos los datos",
          "Crear macros automáticamente",
          "Cambiar el sistema operativo"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué utilidad tiene proteger una hoja?",
        "options": [
          "Evitar cambios no deseados",
          "Hacer gráficos 3D",
          "Insertar vídeos",
          "Importar CSV"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué ventaja tiene usar la hoja de cálculo como base de datos sencilla?",
        "options": [
          "Gestionar listas con rapidez",
          "Crear videojuegos",
          "Enviar correos masivos sin control",
          "Reparar hardware"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué es recomendable en la fila 1 de una lista?",
        "options": [
          "Poner encabezados de campos",
          "Dejarla vacía siempre",
          "Escribir macros",
          "Insertar imágenes grandes"
        ],
        "answer": 0
      },
      {
        "q": "¿Para qué sirve un formulario en este contexto?",
        "options": [
          "Facilitar la introducción y consulta de registros",
          "Cambiar el color del sistema",
          "Activar internet",
          "Ocultar todas las hojas"
        ],
        "answer": 0
      },
      {
        "q": "¿Cuál es una buena práctica con listas largas?",
        "options": [
          "Usar filtros y ordenaciones",
          "Escribir todo en una sola celda",
          "Eliminar encabezados",
          "No guardar cambios"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué puede hacerse antes de compartir una hoja con datos sensibles?",
        "options": [
          "Proteger celdas u hoja",
          "Convertirla en audio",
          "Quitar todas las columnas",
          "Duplicar fórmulas aleatoriamente"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué operación ayuda a localizar rápidamente clientes de una ciudad concreta?",
        "options": [
          "Filtrar por la columna ciudad",
          "Poner zoom al 200%",
          "Cambiar la fuente",
          "Insertar un gráfico circular"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué operación permite ver primero los importes mayores?",
        "options": [
          "Ordenar de mayor a menor",
          "Proteger hoja",
          "Exportar a CSV",
          "Grabar una macro"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué objetivo tenía esta fase?",
        "options": [
          "Usar Calc como base de datos sencilla con listas, filtros, ordenación y protección",
          "Diseñar solo gráficos",
          "Importar archivos de audio",
          "Crear presentaciones"
        ],
        "answer": 0
      },
      {
        "q": "¿Qué riesgo reduce la protección de la hoja?",
        "options": [
          "Modificaciones accidentales",
          "La falta de internet",
          "La falta de ratón",
          "El tamaño del monitor"
        ],
        "answer": 0
      }
    ]
  }
};

const PHASE_CODES = {
  a: "CAMBIA-CODIGO-A",
  b: "CAMBIA-CODIGO-B",
  c: "CAMBIA-CODIGO-C",
  d: "CAMBIA-CODIGO-D",
  e: "CAMBIA-CODIGO-E",
  f: "CAMBIA-CODIGO-F"
};

const PASS_MARK = 8;
const ATTEMPTS_MAX = 3;
const QUESTIONS_PER_ATTEMPT = 10;
const STORAGE_KEY = "calc_tii_progress_v2";

function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    parsed.verified = parsed.verified || {};
    parsed.passed = parsed.passed || {};
    parsed.attempts = parsed.attempts || {};
    parsed.bestScores = parsed.bestScores || {};
    return parsed;
  } catch (e) {
    return { verified: {}, passed: {}, attempts: {}, bestScores: {} };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sampleQuestions(phase, usedQuestions=[]) {
  const pool = APP_DATA.pools[phase];
  const unused = pool.filter(q => !usedQuestions.includes(q.q));
  const source = unused.length >= QUESTIONS_PER_ATTEMPT ? unused : pool;
  return shuffle(source).slice(0, QUESTIONS_PER_ATTEMPT).map((item) => {
    const order = shuffle(item.options.map((opt, idx) => ({ text: opt, originalIndex: idx })));
    return {
      q: item.q,
      options: order.map(o => o.text),
      answer: order.findIndex(o => o.originalIndex === item.answer)
    };
  });
}

function phaseOrder() {
  return ["a","b","c","d","e","f"];
}

function isPhaseAccessible(phase, progress) {
  const order = phaseOrder();
  const index = order.indexOf(phase);
  if (index <= 0) return true;
  return order.slice(0, index).every(p => progress.passed[p]);
}

function updatePhaseCards() {
  const progress = getProgress();
  document.querySelectorAll("[data-phase-card]").forEach(card => {
    const phase = card.dataset.phaseCard;
    const accessible = isPhaseAccessible(phase, progress);
    const passed = !!progress.passed[phase];
    const badge = card.querySelector("[data-phase-status]");
    if (badge) {
      badge.textContent = passed ? "Superada" : (accessible ? "Disponible" : "Bloqueada");
      badge.className = "phase-status " + (passed ? "phase-status-pass" : (accessible ? "phase-status-open" : "phase-status-lock"));
    }
    if (!accessible) {
      card.classList.add("is-locked");
      card.setAttribute("aria-disabled","true");
      card.addEventListener("click", (e) => e.preventDefault(), { once: true });
    }
  });
  document.querySelectorAll("[data-certificate-link]").forEach(link => {
    const allPassed = phaseOrder().every(p => progress.passed[p]);
    if (!allPassed) {
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (e) => e.preventDefault(), { once: true });
    } else {
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
    }
  });
}

function mountPhasePage() {
  const page = document.body.dataset.phase;
  if (!page) return;
  document.querySelectorAll('[data-current-year]').forEach(span => span.textContent = new Date().getFullYear());

  const progress = getProgress();
  const accessible = isPhaseAccessible(page, progress);
  const title = APP_DATA.titles[page];
  const lockBox = document.getElementById("phase-lock-state");
  const content = document.getElementById("phase-learning-content");
  const testMount = document.getElementById("dynamic-test");
  const summaryMount = document.getElementById("attempt-summary");
  const nextLink = document.getElementById("next-phase-link");

  if (!accessible) {
    content.innerHTML = `
      <section class="card card-warning">
        <h2>Fase bloqueada</h2>
        <p>Para acceder a <strong>${title}</strong> primero debes superar la fase anterior. Vuelve al inicio y continúa el itinerario en orden.</p>
        <a class="button" href="index.html">Volver al inicio</a>
      </section>`;
    if (lockBox) lockBox.remove();
    return;
  }

  renderVerificationBlock(page, progress);

  if (progress.verified[page]) {
    renderTestBlock(page);
  } else if (testMount) {
    testMount.innerHTML = `
      <div class="note note-warning">
        <strong>Test aún bloqueado.</strong> Cuando entregues la práctica en EVAGD, introduce aquí el código facilitado por el profesorado para activar el test de esta fase.
      </div>`;
  }

  if (summaryMount) renderAttemptSummary(page, summaryMount);

  if (nextLink) {
    const order = phaseOrder();
    const idx = order.indexOf(page);
    if (idx === order.length - 1) {
      nextLink.href = "certificado.html";
      nextLink.textContent = "Ir al certificado final";
    } else {
      nextLink.href = `fase-${order[idx+1]}.html`;
    }
    if (progress.passed[page]) nextLink.classList.remove('is-disabled');
  }
}

function renderVerificationBlock(phase, progress) {
  const mount = document.getElementById("phase-lock-state");
  if (!mount) return;
  const alreadyVerified = !!progress.verified[phase];
  mount.innerHTML = `
    <section class="card verification-card">
      <h2>Verificación de práctica en EVAGD</h2>
      <p>Cuando hayas subido la práctica de esta fase a EVAGD, introduce el <strong>código de verificación</strong> que te facilita el profesorado. El código se escribe en modo oculto para que no se vea en pantalla.</p>
      <form id="phase-code-form" class="inline-form">
        <input type="password" id="phase-code-input" placeholder="Introduce el código de la fase" autocomplete="off" ${alreadyVerified ? "disabled" : ""}>
        <button class="button" type="submit" ${alreadyVerified ? "disabled" : ""}>${alreadyVerified ? "Práctica verificada" : "Validar práctica"}</button>
      </form>
      <div id="phase-code-message" class="form-message">${alreadyVerified ? "La práctica ya está verificada. Ya puedes trabajar el test de esta fase." : ""}</div>
    </section>`;
  const form = document.getElementById("phase-code-form");
  if (!form || alreadyVerified) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("phase-code-input");
    const msg = document.getElementById("phase-code-message");
    const value = (input.value || "").trim();
    if (value && value === PHASE_CODES[phase]) {
      const fresh = getProgress();
      fresh.verified[phase] = true;
      saveProgress(fresh);
      msg.textContent = "Código correcto. El test de esta fase se ha desbloqueado.";
      renderVerificationBlock(phase, fresh);
      renderTestBlock(phase);
    } else {
      msg.textContent = "Código incorrecto. Revisa el código facilitado por el profesorado en EVAGD.";
    }
  });
}

function renderTestBlock(phase) {
  const progress = getProgress();
  const mount = document.getElementById("dynamic-test");
  if (!mount) return;
  const history = progress.attempts[phase] || [];
  const attemptsUsed = history.length;
  const passed = !!progress.passed[phase];

  if (passed) {
    mount.innerHTML = `
      <section class="card">
        <h2>Test de fase superado</h2>
        <p>Ya has superado esta fase con al menos <strong>${PASS_MARK}/10</strong>. Puedes repasar el contenido o continuar con la siguiente fase.</p>
      </section>`;
    return;
  }

  if (attemptsUsed >= ATTEMPTS_MAX) {
    mount.innerHTML = `
      <section class="card">
        <h2>Intentos agotados</h2>
        <p>Ya se han utilizado los tres intentos disponibles. Consulta la autocorrección final y revisa tus errores antes de continuar con apoyo del profesorado.</p>
      </section>`;
    return;
  }

  const usedQuestions = history.flatMap(at => (at.questions || []).map(q => q.q));
  const questions = sampleQuestions(phase, usedQuestions);
  mount.innerHTML = `
    <section class="card">
      <div class="test-header-flex">
        <div>
          <h2>Test autocorregible de la fase</h2>
          <p><strong>Normas:</strong> 3 intentos máximos, 10 preguntas por intento, 4 opciones por pregunta y solo se supera la fase con <strong>${PASS_MARK} aciertos o más</strong>.</p>
          <p class="muted-text">La corrección no se muestra hasta agotar los tres intentos.</p>
        </div>
        <span class="attempt-badge">Intento ${attemptsUsed + 1} de ${ATTEMPTS_MAX}</span>
      </div>
      <form id="dynamic-test-form" class="quiz-form"></form>
    </section>`;

  const form = document.getElementById("dynamic-test-form");
  questions.forEach((item, idx) => {
    const block = document.createElement("fieldset");
    block.className = "test-item";
    block.innerHTML = `<legend>${idx+1}. ${item.q}</legend>`;
    item.options.forEach((option, optIdx) => {
      const wrap = document.createElement("label");
      wrap.className = "option-row";
      wrap.innerHTML = `<input type="radio" name="q_${idx}" value="${optIdx}" required> <span>${String.fromCharCode(97 + optIdx)}) ${option}</span>`;
      block.appendChild(wrap);
    });
    form.appendChild(block);
  });

  const footer = document.createElement("div");
  footer.className = "quiz-actions";
  footer.innerHTML = `<button class="button" type="submit">Enviar intento</button>`;
  form.appendChild(footer);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const answers = [];
    let score = 0;
    questions.forEach((q, idx) => {
      const selected = form.querySelector(`input[name="q_${idx}"]:checked`);
      const value = Number(selected.value);
      answers.push(value);
      if (value === q.answer) score += 1;
    });

    const fresh = getProgress();
    const phaseAttempts = fresh.attempts[phase] || [];
    phaseAttempts.push({ score, answers, questions });
    fresh.attempts[phase] = phaseAttempts;
    fresh.bestScores[phase] = Math.max(...phaseAttempts.map(a => a.score));
    if (phaseAttempts.length >= ATTEMPTS_MAX && fresh.bestScores[phase] >= PASS_MARK) {
      fresh.passed[phase] = true;
    }
    saveProgress(fresh);

    renderAttemptSummary(phase, document.getElementById("attempt-summary"));
    updatePhaseCards();

    if (phaseAttempts.length >= ATTEMPTS_MAX) {
      mount.innerHTML = `
        <section class="card">
          <h2>Intentos completados</h2>
          <p>Ya has realizado los tres intentos. Debajo tienes la autocorrección final y el resultado de la fase.</p>
        </section>`;
      const nextLink = document.getElementById("next-phase-link");
      if (nextLink && fresh.passed[phase]) nextLink.classList.remove("is-disabled");
    } else {
      renderTestBlock(phase);
    }
  });
}

function renderAttemptSummary(phase, mount) {
  if (!mount) return;
  const progress = getProgress();
  const attempts = progress.attempts[phase] || [];
  if (!attempts.length) {
    mount.innerHTML = "";
    return;
  }
  const exhausted = attempts.length >= ATTEMPTS_MAX;
  const best = progress.bestScores[phase] || 0;
  const passed = !!progress.passed[phase];
  let html = `
    <section class="card">
      <h2>Seguimiento del test</h2>
      <div class="attempt-grid">
        ${attempts.map((at, idx) => `<article class="attempt-card"><h3>Intento ${idx+1}</h3><p>Registrado correctamente.</p><p class="muted-text">${exhausted ? `Puntuación: <strong>${at.score}/10</strong>` : 'La corrección se mostrará al final del tercer intento.'}</p></article>`).join('')}
      </div>`;

  if (exhausted) {
    html += `<div class="result-banner ${passed ? 'result-pass' : 'result-fail'}">
      <strong>Resultado final:</strong> mejor puntuación <strong>${best}/10</strong>.
      ${passed ? 'Fase superada.' : 'Fase no superada. Necesita revisión con el profesorado.'}
    </div>`;

    attempts.forEach((attempt, idx) => {
      html += `<div class="correction-block"><h3>Autocorrección del intento ${idx+1}</h3>`;
      attempt.questions.forEach((q, qIdx) => {
        const selected = attempt.answers[qIdx];
        const isOk = selected === q.answer;
        html += `<div class="correction-item ${isOk ? 'ok' : 'ko'}">
          <p><strong>${qIdx+1}. ${q.q}</strong></p>
          <p>Tu respuesta: ${selected >= 0 ? q.options[selected] : 'Sin responder'}</p>
          <p>Respuesta correcta: <strong>${q.options[q.answer]}</strong></p>
        </div>`;
      });
      html += `</div>`;
    });
  } else {
    html += `<p class="note note-warning">Quedan <strong>${ATTEMPTS_MAX - attempts.length}</strong> intento(s). Todavía no se muestra la corrección.</p>`;
  }

  html += `</section>`;
  mount.innerHTML = html;
}

function mountCertificate() {
  if (!document.body.classList.contains("certificate-page")) return;
  document.querySelectorAll('[data-current-year]').forEach(span => span.textContent = new Date().getFullYear());
  updatePhaseCards();
  const progress = getProgress();
  const allPassed = phaseOrder().every(p => progress.passed[p]);
  const gate = document.getElementById("certificate-gate");
  const cert = document.getElementById("certificate-panel");
  if (!allPassed) {
    gate.innerHTML = `<section class="card card-warning"><h2>Certificado bloqueado</h2><p>Debes superar las seis fases para acceder al certificado final.</p><a class="button" href="index.html">Volver al inicio</a></section>`;
    cert.innerHTML = "";
    return;
  }
  gate.innerHTML = `<section class="card"><h2>Certificado final disponible</h2><p>Has superado las seis fases. Escribe el nombre del estudiante y genera el certificado.</p></section>`;
  cert.innerHTML = `
    <section class="card">
      <form id="cert-form" class="inline-form">
        <input type="text" id="student-name" placeholder="Nombre y apellidos del estudiante" required>
        <button class="button" type="submit">Generar certificado</button>
      </form>
    </section>
    <section class="certificate-sheet" id="certificate-sheet" hidden>
      <p class="cert-mini">Certificado de aprovechamiento</p>
      <h1>LibreOffice Calc · Tratamiento Informático de la Información</h1>
      <p>Se certifica que</p>
      <h2 id="cert-student-name">Nombre del estudiante</h2>
      <p>ha completado satisfactoriamente las seis fases del itinerario didáctico de LibreOffice Calc, incluyendo prácticas guiadas, verificación por fase y pruebas tipo test con autocorrección final.</p>
      <p class="cert-footer">Fecha de emisión: <span id="cert-date"></span></p>
      <div class="cert-signatures">
        <div><span>Profesorado</span></div>
        <div><span>Centro educativo</span></div>
      </div>
      <button class="button no-print" onclick="window.print()">Imprimir / Guardar en PDF</button>
    </section>`;
  const form = document.getElementById("cert-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("student-name").value.trim();
    if (!name) return;
    document.getElementById("cert-student-name").textContent = name;
    document.getElementById("cert-date").textContent = new Date().toLocaleDateString("es-ES");
    document.getElementById("certificate-sheet").hidden = false;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-current-year]').forEach(span => span.textContent = new Date().getFullYear());
  updatePhaseCards();
  mountPhasePage();
  mountCertificate();
});
