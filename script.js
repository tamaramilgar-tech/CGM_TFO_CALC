
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

function getTodayCode(date = new Date()) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}${month}${year}`;
}

const PHASE_CODES = {
  a: () => getTodayCode(),
  b: () => getTodayCode(),
  c: () => getTodayCode(),
  d: () => getTodayCode(),
  e: () => getTodayCode(),
  f: () => getTodayCode()
};

const PASS_MARK = 8;
const ATTEMPTS_MAX = 3;
const QUESTIONS_PER_ATTEMPT = 10;
const STORAGE_KEY = "calc_tii_progress_v3";

function defaultProgress() {
  return { studentName: "", verified: {}, passed: {}, attempts: {}, bestScores: {} };
}
function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : defaultProgress();
    return {
      studentName: parsed.studentName || "",
      verified: parsed.verified || {},
      passed: parsed.passed || {},
      attempts: parsed.attempts || {},
      bestScores: parsed.bestScores || {}
    };
  } catch (e) {
    return defaultProgress();
  }
}
function saveProgress(progress) { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
function resetProgress() { localStorage.removeItem(STORAGE_KEY); }
function phaseOrder() { return ["a","b","c","d","e","f"]; }

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function isPhaseAccessible(phase, progress) {
  const order = phaseOrder();
  const idx = order.indexOf(phase);
  if (idx === 0) return true;
  return order.slice(0, idx).every(p => !!progress.passed[p]);
}
function statusLabel(phase, progress) {
  if (progress.passed[phase]) return "superada";
  if (isPhaseAccessible(phase, progress)) return "pendiente";
  return "bloqueada";
}
function updateYear() {
  document.querySelectorAll("[data-current-year]").forEach(el => el.textContent = new Date().getFullYear());
}
function updateStudentNameUI() {
  const progress = getProgress();
  document.querySelectorAll("[data-student-name]").forEach(el => {
    el.textContent = progress.studentName || "Nombre del alumno/a";
  });
  const input = document.getElementById("student-name-input");
  if (input) input.value = progress.studentName || "";
}

function mountStudentProfile() {
  const input = document.getElementById("student-name-input");
  const saveBtn = document.getElementById("save-student-name");
  const resetBtn = document.getElementById("reset-progress");
  const message = document.getElementById("student-profile-message");
  if (saveBtn && input) {
    saveBtn.addEventListener("click", () => {
      const progress = getProgress();
      progress.studentName = input.value.trim();
      saveProgress(progress);
      updateStudentNameUI();
      if (message) message.textContent = progress.studentName ? "Nombre guardado correctamente." : "Nombre eliminado.";
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (!window.confirm("Se borrará el progreso guardado de este navegador. ¿Quieres continuar?")) return;
      resetProgress();
      window.location.href = "index.html";
    });
  }
}

function updatePhaseCards() {
  const progress = getProgress();
  document.querySelectorAll("[data-phase-card]").forEach(card => {
    const phase = card.dataset.phaseCard;
    const state = statusLabel(phase, progress);
    const badge = card.querySelector("[data-phase-status]");
    if (badge) {
      badge.textContent = `FASE ${phase.toUpperCase()}: ${state}`;
      badge.className = "phase-status " + (state === "superada" ? "phase-status-pass" : (state === "pendiente" ? "phase-status-open" : "phase-status-lock"));
    }
    card.classList.toggle("is-locked", state === "bloqueada");
  });
  document.querySelectorAll("[data-phase-link]").forEach(link => {
    const phase = link.dataset.phaseLink;
    const state = statusLabel(phase, progress);
    if (state === "bloqueada") {
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled","true");
      link.addEventListener("click", (e) => e.preventDefault(), { once: true });
    } else {
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
    }
  });
  document.querySelectorAll("[data-certificate-link]").forEach(link => {
    const allPassed = phaseOrder().every(p => !!progress.passed[p]);
    if (!allPassed) {
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled","true");
      link.addEventListener("click", (e) => e.preventDefault(), { once: true });
    } else {
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
    }
  });
}

function mountDashboard() {
  const progress = getProgress();
  const mount = document.getElementById("phase-dashboard");
  if (!mount) return;
  mount.innerHTML = phaseOrder().map(phase => {
    const label = statusLabel(phase, progress);
    const lockClass = label === "bloqueada" ? "is-locked" : "";
    const stateClass = label === "superada" ? "mini-pass" : (label === "pendiente" ? "mini-open" : "mini-lock");
    return `
      <a class="dashboard-item ${lockClass}" href="fase-${phase}.html" data-phase-link="${phase}">
        <strong>FASE ${phase.toUpperCase()}</strong>
        <span>${APP_DATA.titles[phase]}</span>
        <em class="mini-state ${stateClass}">${label}</em>
      </a>
    `;
  }).join("");
  const overall = document.getElementById("overall-progress");
  if (overall) {
    const allPassed = phaseOrder().every(p => !!progress.passed[p]);
    overall.innerHTML = allPassed
      ? '<div class="note note-success"><strong>Itinerario completo.</strong> Ya puedes acceder al certificado final.</div>'
      : '<div class="note note-warning"><strong>Cómo funciona:</strong> realiza la práctica, súbela a EVAGD, valida el código del docente y supera el test con un mínimo de 8/10.</div>';
  }
}

function sampleQuestions(phase, usedQuestions=[]) {
  const pool = APP_DATA.pools[phase];
  const unused = pool.filter(q => !usedQuestions.includes(q.q));
  const source = unused.length >= QUESTIONS_PER_ATTEMPT ? unused : pool;
  return shuffle(source).slice(0, QUESTIONS_PER_ATTEMPT).map(item => {
    const ordered = shuffle(item.options.map((text, idx) => ({ text, idx })));
    return {
      q: item.q,
      options: ordered.map(o => o.text),
      answer: ordered.findIndex(o => o.idx === item.answer)
    };
  });
}

function renderVerificationBlock(phase) {
  const progress = getProgress();
  const mount = document.getElementById("phase-lock-state");
  if (!mount) return;
  const isVerified = !!progress.verified[phase];
  mount.innerHTML = `
    <section class="card verification-card">
      <p class="eyebrow">Entrega y verificación</p>
      <h2>Verificación del docente</h2>
      <p>Cuando hayas subido la práctica de esta fase a EVAGD, introduce el <strong>código de verificación</strong> facilitado por el profesorado. El campo se muestra oculto para que el código no quede visible.</p>
      <form id="phase-code-form" class="inline-form">
        <input type="password" id="phase-code-input" placeholder="Introduce el código de la fase" autocomplete="off" ${isVerified ? "disabled" : ""}>
        <button class="button" type="submit" ${isVerified ? "disabled" : ""}>${isVerified ? "Práctica verificada" : "Validar código"}</button>
      </form>
      <div id="phase-code-message" class="form-message">${isVerified ? "La práctica ya está verificada. El test está disponible." : ""}</div>
    </section>
  `;
  const form = document.getElementById("phase-code-form");
  if (!form || isVerified) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = (document.getElementById("phase-code-input").value || "").trim();
    const message = document.getElementById("phase-code-message");
    if (value === PHASE_CODES[phase]()) {
      const fresh = getProgress();
      fresh.verified[phase] = true;
      saveProgress(fresh);
      message.textContent = "Código correcto. El test ya está desbloqueado.";
      renderVerificationBlock(phase);
      renderTestBlock(phase);
      updatePhaseCards();
      mountDashboard();
    } else {
      message.textContent = "Código incorrecto. Revisa el código facilitado por el profesorado.";
    }
  });
}

function renderAttemptSummary(phase) {
  const mount = document.getElementById("attempt-summary");
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
        ${attempts.map((attempt, idx) => `
          <article class="attempt-card">
            <h3>Intento ${idx + 1}</h3>
            <p>${exhausted ? `Puntuación registrada: <strong>${attempt.score}/10</strong>` : "Intento guardado correctamente."}</p>
            <p class="muted-text">${exhausted ? "La corrección completa aparece debajo." : "La corrección no se muestra hasta finalizar el tercer intento."}</p>
          </article>
        `).join("")}
      </div>
  `;
  if (exhausted) {
    html += `
      <div class="result-banner ${passed ? "result-pass" : "result-fail"}">
        <strong>Resultado final:</strong> mejor puntuación ${best}/10. ${passed ? "Fase superada." : "Fase no superada. Debe revisarse con el profesorado."}
      </div>
    `;
    attempts.forEach((attempt, attemptIndex) => {
      html += `<div class="correction-block"><h3>Autocorrección del intento ${attemptIndex + 1}</h3>`;
      attempt.questions.forEach((q, idx) => {
        const selected = attempt.answers[idx];
        const isOK = selected === q.answer;
        html += `
          <div class="correction-item ${isOK ? "ok" : "ko"}">
            <p><strong>${idx + 1}. ${q.q}</strong></p>
            <p>Tu respuesta: ${selected >= 0 ? q.options[selected] : "Sin responder"}</p>
            <p>Respuesta correcta: <strong>${q.options[q.answer]}</strong></p>
          </div>
        `;
      });
      html += `</div>`;
    });
  } else {
    html += `<p class="note note-warning">Aún no se muestra la corrección. Te quedan <strong>${ATTEMPTS_MAX - attempts.length}</strong> intento(s).</p>`;
  }
  html += `</section>`;
  mount.innerHTML = html;
}

function renderTestBlock(phase) {
  const mount = document.getElementById("dynamic-test");
  if (!mount) return;
  const progress = getProgress();
  if (!progress.verified[phase]) {
    mount.innerHTML = `<section class="card"><h2>Test bloqueado</h2><p>Primero debes entregar la práctica en EVAGD y validar el código del docente para activar el test.</p></section>`;
    return;
  }
  if (progress.passed[phase]) {
    mount.innerHTML = `<section class="card"><h2>Fase superada</h2><p>Ya has superado el test de esta fase con una puntuación mínima de <strong>${PASS_MARK}/10</strong>.</p></section>`;
    return;
  }
  const attempts = progress.attempts[phase] || [];
  if (attempts.length >= ATTEMPTS_MAX) {
    mount.innerHTML = `<section class="card"><h2>Intentos agotados</h2><p>Ya se han consumido los tres intentos permitidos. Consulta la autocorrección final en el bloque inferior.</p></section>`;
    return;
  }
  const usedQuestions = attempts.flatMap(at => (at.questions || []).map(q => q.q));
  const questions = sampleQuestions(phase, usedQuestions);
  mount.innerHTML = `
    <section class="card">
      <div class="test-header-flex">
        <div>
          <p class="eyebrow">Evaluación</p>
          <h2>Test autocorregible de la fase</h2>
          <p>Dispones de <strong>${ATTEMPTS_MAX} intentos</strong>. Cada intento genera <strong>10 preguntas</strong> con <strong>4 opciones</strong>. La fase solo se supera con un mínimo de <strong>${PASS_MARK} aciertos</strong>. La corrección aparece únicamente al finalizar el tercer intento.</p>
        </div>
        <span class="attempt-badge">Intento ${attempts.length + 1} de ${ATTEMPTS_MAX}</span>
      </div>
      <form id="dynamic-test-form" class="quiz-form"></form>
    </section>
  `;
  const form = document.getElementById("dynamic-test-form");
  questions.forEach((item, idx) => {
    const field = document.createElement("fieldset");
    field.className = "test-item";
    field.innerHTML = `<legend>${idx + 1}. ${item.q}</legend>`;
    item.options.forEach((option, optIndex) => {
      const label = document.createElement("label");
      label.className = "option-row";
      label.innerHTML = `<input type="radio" name="q_${idx}" value="${optIndex}" required><span>${String.fromCharCode(97 + optIndex)}) ${option}</span>`;
      field.appendChild(label);
    });
    form.appendChild(field);
  });
  const footer = document.createElement("div");
  footer.className = "quiz-actions";
  footer.innerHTML = '<button class="button" type="submit">Enviar intento</button>';
  form.appendChild(footer);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let score = 0;
    const answers = [];
    questions.forEach((q, idx) => {
      const checked = form.querySelector(`input[name="q_${idx}"]:checked`);
      const value = Number(checked.value);
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
    updatePhaseCards();
    mountDashboard();
    renderTestBlock(phase);
    renderAttemptSummary(phase);
    mountNextStep(phase);
  });
}

function mountNextStep(phase) {
  const mount = document.getElementById("next-step-card");
  if (!mount) return;
  const progress = getProgress();
  const order = phaseOrder();
  const idx = order.indexOf(phase);
  let href = "certificado.html";
  let label = "Ir al certificado final";
  if (idx < order.length - 1) {
    href = `fase-${order[idx+1]}.html`;
    label = `Ir a la fase ${order[idx+1].toUpperCase()}`;
  }
  const currentPassed = !!progress.passed[phase];
  mount.innerHTML = `
    <section class="card">
      <h2>Siguiente paso</h2>
      <p>${currentPassed ? "Has superado esta fase y puedes continuar." : "Cuando completes el proceso de esta fase, se desbloqueará el avance real a la siguiente."}</p>
      <a class="button ${currentPassed ? "" : "is-disabled"}" href="${href}" ${currentPassed ? "" : 'aria-disabled="true"'}>${label}</a>
    </section>
  `;
}

function mountPhasePage() {
  const phase = document.body.dataset.phase;
  if (!phase) return;
  const progress = getProgress();
  if (!isPhaseAccessible(phase, progress)) {
    const main = document.getElementById("phase-learning-content");
    if (main) {
      main.innerHTML = `<div class="container"><section class="card card-warning"><h2>Fase bloqueada</h2><p>Debes superar la fase anterior antes de acceder a este bloque.</p><a class="button" href="index.html">Volver al inicio</a></section></div>`;
    }
    const lock = document.getElementById("phase-lock-state");
    if (lock) lock.innerHTML = "";
    return;
  }
  renderVerificationBlock(phase);
  renderTestBlock(phase);
  renderAttemptSummary(phase);
  mountNextStep(phase);
}

function mountCertificate() {
  if (!document.body.classList.contains("certificate-page")) return;
  const progress = getProgress();
  const allPassed = phaseOrder().every(p => !!progress.passed[p]);
  const gate = document.getElementById("certificate-gate");
  const panel = document.getElementById("certificate-panel");
  if (!allPassed) {
    gate.innerHTML = `<section class="card card-warning"><h2>Certificado bloqueado</h2><p>Debes superar las seis fases para acceder al certificado final.</p><a class="button" href="index.html">Volver al inicio</a></section>`;
    panel.innerHTML = "";
    return;
  }
  gate.innerHTML = `
    <section class="card">
      <h2>Certificado final disponible</h2>
      <p>El nombre guardado se usa automáticamente. También puedes editarlo antes de generar el certificado.</p>
      <form id="cert-form" class="inline-form">
        <input type="text" id="cert-student-input" placeholder="Nombre y apellidos del estudiante" value="${progress.studentName || ""}" required>
        <button class="button" type="submit">Generar certificado</button>
      </form>
    </section>
  `;
  panel.innerHTML = "";
  document.getElementById("cert-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cert-student-input").value.trim();
    const fresh = getProgress();
    fresh.studentName = name;
    saveProgress(fresh);
    updateStudentNameUI();
    const rows = phaseOrder().map(phase => `
      <tr>
        <td>Fase ${phase.toUpperCase()}</td>
        <td>${APP_DATA.titles[phase]}</td>
        <td>${fresh.bestScores[phase] || 0}/10</td>
        <td>${fresh.verified[phase] ? "Sí" : "No"}</td>
      </tr>
    `).join("");
    panel.innerHTML = `
      <section class="certificate-sheet" id="certificate-sheet">
        <p class="cert-mini">Certificado de aprovechamiento</p>
        <h1>LibreOffice Calc · Tratamiento Informático de la Información</h1>
        <p>Se certifica que</p>
        <h2>${name}</h2>
        <p>ha completado satisfactoriamente las seis fases del itinerario didáctico de LibreOffice Calc, con verificación del profesorado, entrega de prácticas y superación de los test correspondientes.</p>
        <div class="table-wrap" style="margin-top:1.5rem;">
          <table class="data-table">
            <thead><tr><th>Fase</th><th>Bloque</th><th>Mejor puntuación</th><th>Verificada</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <p class="cert-footer">Fecha de emisión: ${new Date().toLocaleDateString("es-ES")}</p>
        <div class="cert-signatures">
          <div><span>Profesorado</span></div>
          <div><span>Centro educativo</span></div>
        </div>
        <button class="button no-print" onclick="window.print()">Imprimir / Guardar en PDF</button>
      </section>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateYear();
  updateStudentNameUI();
  mountStudentProfile();
  updatePhaseCards();
  mountDashboard();
  mountPhasePage();
  mountCertificate();
});
