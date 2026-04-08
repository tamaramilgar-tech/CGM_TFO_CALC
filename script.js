
const APP_DATA = {"titles": {"a": "Tipos de datos y referencias", "b": "Fórmulas y funciones", "c": "Gráficos", "d": "Macros", "e": "Importación y exportación", "f": "Calc como base de datos"}, "pools": {"a": [{"q": "¿Qué tipo de referencia no cambia al copiar una fórmula?", "options": ["Relativa", "Absoluta", "Mixta", "Rango"], "answer": 1}, {"q": "¿Qué representa A2:D6?", "options": ["Una hoja", "Un rango", "Una macro", "Una fecha"], "answer": 1}, {"q": "¿Cuál de estos datos es un porcentaje?", "options": ["07/10/2025", "Bolígrafos", "21%", "30,00"], "answer": 2}, {"q": "¿Cuál es un ejemplo de referencia absoluta?", "options": ["A1", "$G$2", "B$2", "$C4"], "answer": 1}, {"q": "¿Qué ocurre con B2 al copiarla una fila hacia abajo?", "options": ["Pasa a B3", "No cambia nunca", "Pasa a C2", "Se borra"], "answer": 0}, {"q": "¿Para qué sirve una referencia absoluta en esta práctica?", "options": ["Para fijar el IVA", "Para crear el gráfico", "Para insertar fechas", "Para proteger la hoja"], "answer": 0}, {"q": "¿Qué dato de la práctica era texto?", "options": ["1,20", "21%", "Bolígrafos", "07/10/2025"], "answer": 2}, {"q": "¿Qué formato conviene aplicar a la columna de precios?", "options": ["Fecha", "Moneda", "Texto", "Porcentaje"], "answer": 1}, {"q": "¿Qué es un libro de cálculo?", "options": ["Una única hoja", "Un conjunto de hojas", "Un gráfico", "Una macro"], "answer": 1}, {"q": "¿Qué cálculo base se usa para obtener el importe de una línea?", "options": ["Precio × cantidad", "IVA × cantidad", "Fecha + precio", "Producto ÷ cantidad"], "answer": 0}, {"q": "¿Cuál de estas es una referencia mixta?", "options": ["$B2", "$B$2", "A1:B5", "Hoja2.A1"], "answer": 0}, {"q": "Una celda se identifica por…", "options": ["Nombre y color", "Columna y fila", "Solo fila", "Solo columna"], "answer": 1}, {"q": "¿Qué permite una referencia entre hojas?", "options": ["Calcular con datos de otra hoja", "Cambiar el idioma", "Crear filtros", "Guardar en PDF"], "answer": 0}, {"q": "¿Qué significa que una referencia sea relativa?", "options": ["Se adapta al copiarla", "Se bloquea", "No usa fórmulas", "Solo vale en gráficos"], "answer": 0}], "b": [{"q": "¿Con qué símbolo empieza una fórmula en Calc?", "options": ["#", "=", "+", "@"], "answer": 1}, {"q": "¿Qué función calcula la media?", "options": ["SUMA", "MAX", "PROMEDIO", "SI"], "answer": 2}, {"q": "¿Qué función devuelve el valor más alto?", "options": ["MIN", "MAX", "SI", "CONTAR"], "answer": 1}, {"q": "¿Para qué sirve la función SI?", "options": ["Para evaluar una condición", "Para dibujar un gráfico", "Para ordenar filas", "Para importar CSV"], "answer": 0}, {"q": "¿Qué fórmula promedia B2:D2?", "options": ["=SUMA(B2:D2)", "=PROMEDIO(B2:D2)", "=MAX(B2:D2)", "=SI(B2:D2)"], "answer": 1}, {"q": "¿Qué función usarías para la nota más baja?", "options": ["MAX", "MIN", "SUMA", "PROMEDIO"], "answer": 1}, {"q": "¿Qué ventaja tiene usar funciones?", "options": ["Reducen errores y automatizan cálculos", "Solo sirven para decorar", "Bloquean la hoja", "Impiden copiar fórmulas"], "answer": 0}, {"q": "¿Qué función sumarías varias calificaciones?", "options": ["SI", "SUMA", "MAX", "MIN"], "answer": 1}, {"q": "¿Qué pasa al copiar una fórmula con referencias relativas?", "options": ["Se ajustan", "Se borran", "No cambia nada", "Se convierte en texto"], "answer": 0}, {"q": "¿Cuál es una función válida?", "options": ["=PROMEDIO(B2:D2)", "PROMEDIO=B2:D2", "{PROMEDIO}", "B2:D2=PROMEDIO"], "answer": 0}, {"q": "¿Qué puede devolver una condición lógica?", "options": ["Verdadero o falso", "Solo texto", "Solo fechas", "Solo decimales"], "answer": 0}, {"q": "¿Qué función usarías para contar celdas numéricas?", "options": ["CONTAR", "MAX", "SI", "SUMA"], "answer": 0}, {"q": "En una hoja de notas, ¿qué función ayuda a decidir Apto/No apto?", "options": ["SI", "MAX", "MIN", "HOY"], "answer": 0}, {"q": "¿Qué símbolo separa normalmente argumentos según configuración regional española?", "options": [";", "/", "#", "@"], "answer": 0}], "c": [{"q": "¿Qué gráfico es adecuado para comparar cantidades?", "options": ["Columnas/Barras", "Sectores", "Radar", "Superficie"], "answer": 0}, {"q": "¿Qué gráfico muestra mejor una evolución temporal?", "options": ["Líneas", "Sectores", "Anillos", "Mapa"], "answer": 0}, {"q": "¿Qué gráfico es útil para porcentajes de un total?", "options": ["Sectores", "Líneas", "Barras", "Dispersión"], "answer": 0}, {"q": "¿Qué elemento identifica cada serie de datos?", "options": ["Leyenda", "Comentarios", "Pie de página", "Encabezado"], "answer": 0}, {"q": "¿Para qué sirve el título del gráfico?", "options": ["Describe qué muestra", "Bloquea la hoja", "Cambia fórmulas", "Protege datos"], "answer": 0}, {"q": "Antes de insertar un gráfico debes…", "options": ["Seleccionar los datos", "Grabar una macro", "Proteger la hoja", "Exportar a PDF"], "answer": 0}, {"q": "Si cambian los datos de origen, el gráfico…", "options": ["Se actualiza", "Se borra", "Se convierte en imagen", "Se desactiva"], "answer": 0}, {"q": "¿Qué parte ayuda a interpretar escalas?", "options": ["Ejes", "Macros", "Comentarios", "Filtros"], "answer": 0}, {"q": "¿Qué mejora la legibilidad?", "options": ["Títulos claros y etiquetas", "Quitar todos los textos", "Usar 3D siempre", "Duplicar series"], "answer": 0}, {"q": "¿Para qué sirve cambiar el tipo de gráfico?", "options": ["Adaptar la visualización al objetivo", "Solo decorar", "Bloquear datos", "Crear más hojas"], "answer": 0}, {"q": "¿Cuál sería un uso poco adecuado?", "options": ["Elegir un tipo que no encaja con los datos", "Poner leyenda", "Revisar valores", "Añadir título"], "answer": 0}, {"q": "¿Cuál es la fuente de un gráfico en Calc?", "options": ["Las celdas seleccionadas", "Un vídeo", "Una macro", "Internet"], "answer": 0}, {"q": "¿Qué gráfico elegirías para ventas por meses?", "options": ["Líneas", "Sectores", "Anillos", "Radar"], "answer": 0}, {"q": "¿Qué gráfico elegirías para reparto porcentual por producto?", "options": ["Sectores", "Líneas", "Dispersión", "Áreas"], "answer": 0}], "d": [{"q": "¿Qué es una macro en Calc?", "options": ["Una secuencia automatizada", "Un gráfico", "Un filtro", "Una celda protegida"], "answer": 0}, {"q": "¿Para qué sirve grabar una macro?", "options": ["Repetir tareas frecuentes", "Cambiar idioma", "Crear audios", "Abrir Internet"], "answer": 0}, {"q": "¿Qué ventaja aportan las macros?", "options": ["Ahorran tiempo", "Borran datos", "Impidan guardar", "Solo decoran"], "answer": 0}, {"q": "Antes de grabar una macro conviene…", "options": ["Planificar los pasos", "Borrar las hojas", "Insertar vídeo", "Cerrar Calc"], "answer": 0}, {"q": "¿Dónde puede guardarse una macro?", "options": ["En el documento o en Mis macros", "Solo en PDF", "Solo en imagen", "Solo en el navegador"], "answer": 0}, {"q": "Después de grabarla es recomendable…", "options": ["Probarla", "Publicarla en web", "Cambiar el monitor", "Borrar el archivo"], "answer": 0}, {"q": "¿Para qué sirve asignarla a un botón?", "options": ["Ejecutarla fácilmente", "Ocultarla", "Cambiar fuente", "Crear filtros"], "answer": 0}, {"q": "¿Qué uso razonable tiene aquí?", "options": ["Aplicar formato repetitivo", "Enviar correos", "Editar vídeo", "Buscar wifi"], "answer": 0}, {"q": "Si la tarea cambia mucho cada vez…", "options": ["La macro puede ser menos útil", "Será perfecta siempre", "No hace falta pensar", "No se guarda"], "answer": 0}, {"q": "Si una macro falla conviene…", "options": ["Revisar los pasos", "Eliminar el programa", "No guardar nunca", "Cambiar impresora"], "answer": 0}, {"q": "Las macros facilitan…", "options": ["La automatización", "La pérdida de datos", "Los errores tipográficos", "Los gráficos 3D"], "answer": 0}, {"q": "Buena práctica con macros:", "options": ["Poner nombres claros", "Nombrarlas todas igual", "No documentarlas", "No probarlas"], "answer": 0}, {"q": "Además del menú, una macro puede ejecutarse con…", "options": ["Un botón o atajo", "La barra espaciadora siempre", "Una imagen", "El pie de página"], "answer": 0}, {"q": "Objetivo de esta fase:", "options": ["Generar documentos y plantillas con menos trabajo manual", "Aprender a dibujar", "Navegar por internet", "Hacer bases externas"], "answer": 0}], "e": [{"q": "¿Cuál es el formato nativo de Calc?", "options": ["ODS", "CSV", "DOCX", "PPTX"], "answer": 0}, {"q": "¿Qué caracteriza a un CSV?", "options": ["Datos separados por delimitadores", "Macros complejas", "Solo imágenes", "No abre en Calc"], "answer": 0}, {"q": "¿Qué permite trabajar con archivos de Excel?", "options": ["Importarlos o abrirlos", "Escanearlos", "Bloquearlos", "Convertirlos en vídeo"], "answer": 0}, {"q": "¿Por qué conviene revisar un archivo importado?", "options": ["Porque pueden cambiar formatos o fórmulas", "Porque siempre se borra", "Porque no tiene datos", "Porque Calc no admite tablas"], "answer": 0}, {"q": "¿Qué formato se usa mucho para intercambio simple de datos?", "options": ["CSV", "PNG", "MP3", "JPG"], "answer": 0}, {"q": "¿Qué puede alterarse al pasar entre aplicaciones?", "options": ["Formatos, fórmulas o caracteres", "La pantalla física", "El teclado", "La conexión eléctrica"], "answer": 0}, {"q": "Exportar una hoja significa…", "options": ["Guardar en otro formato", "Cerrar el programa", "Eliminar datos", "Copiar una celda"], "answer": 0}, {"q": "Si quieres seguir editando con plena compatibilidad en Calc, usa…", "options": ["ODS", "PDF", "PNG", "CSV"], "answer": 0}, {"q": "Ventaja de XLSX en algunos contextos:", "options": ["Compatibilidad con Excel", "Mejor para audios", "Nunca pierde formato", "Solo sirve para macros"], "answer": 0}, {"q": "Al importar un CSV conviene comprobar…", "options": ["Separador, codificación y tipo de datos", "Solo el color", "La webcam", "La batería del ratón"], "answer": 0}, {"q": "Para solo lectura e impresión, formato habitual:", "options": ["PDF", "ODS", "CSV", "TXT"], "answer": 0}, {"q": "Problema posible al exportar:", "options": ["Cambios en fórmulas o formato", "El archivo habla", "Se vuelve vídeo", "Desaparece el sistema"], "answer": 0}, {"q": "¿Qué ayuda a evitar errores de intercambio?", "options": ["Probar apertura en el formato destino", "No revisar nunca", "Borrar encabezados", "Usar nombres aleatorios"], "answer": 0}, {"q": "Objetivo de la fase:", "options": ["Importar y exportar hojas entre formatos", "Crear solo macros", "Diseñar certificados", "Ordenar bases de datos"], "answer": 0}], "f": [{"q": "En una lista, cada fila suele representar…", "options": ["Un registro", "Un gráfico", "Una macro", "Una hoja"], "answer": 0}, {"q": "Cada columna suele representar…", "options": ["Un campo", "Una contraseña", "Una impresora", "Una macro"], "answer": 0}, {"q": "¿Para qué sirve ordenar datos?", "options": ["Reorganizarlos según un criterio", "Borrarlos", "Convertirlos en imagen", "Cambiar idioma"], "answer": 0}, {"q": "¿Qué permite un filtro?", "options": ["Mostrar solo registros que cumplen condición", "Eliminar todo", "Crear macros", "Bloquear el teclado"], "answer": 0}, {"q": "¿Qué utilidad tiene proteger una hoja?", "options": ["Evitar cambios no deseados", "Hacer gráficos 3D", "Insertar vídeos", "Importar CSV"], "answer": 0}, {"q": "¿Qué ventaja tiene usar Calc como base de datos sencilla?", "options": ["Gestionar listas con rapidez", "Crear videojuegos", "Reparar hardware", "Diseñar carteles"], "answer": 0}, {"q": "En la fila 1 conviene…", "options": ["Poner encabezados", "Dejarla vacía", "Escribir macros", "Insertar imágenes grandes"], "answer": 0}, {"q": "¿Para qué sirve un formulario?", "options": ["Facilitar la entrada y consulta de registros", "Activar internet", "Cambiar el color del sistema", "Ocultar hojas"], "answer": 0}, {"q": "Buena práctica con listas largas:", "options": ["Usar filtros y ordenaciones", "Escribir todo en una celda", "Eliminar encabezados", "No guardar"], "answer": 0}, {"q": "Antes de compartir datos sensibles conviene…", "options": ["Proteger hoja o celdas", "Convertirla en audio", "Quitar columnas", "Duplicar fórmulas"], "answer": 0}, {"q": "Para localizar clientes de una ciudad concreta usarías…", "options": ["Filtrar por la columna ciudad", "Zoom 200%", "Cambiar la fuente", "Un gráfico circular"], "answer": 0}, {"q": "Para ver primero importes mayores usarías…", "options": ["Ordenar de mayor a menor", "Proteger hoja", "Exportar a CSV", "Grabar macro"], "answer": 0}, {"q": "Objetivo de la fase:", "options": ["Usar Calc como base de datos sencilla", "Diseñar gráficos", "Importar audios", "Crear presentaciones"], "answer": 0}, {"q": "La protección de hoja reduce…", "options": ["Modificaciones accidentales", "La falta de internet", "El tamaño del monitor", "La batería"], "answer": 0}]}};
const STORAGE_KEY = "calc_tii_progress_v4";
const PASS_SCORE = 8;
const MAX_ATTEMPTS = 3;
const QUESTIONS_PER_ATTEMPT = 10;

function getTodayCode() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return dd + mm + yy;
}

function phaseOrder() { return ["a","b","c","d","e","f"]; }

function defaultState() {
  return {
    studentName: "",
    verified: {},
    passed: {},
    attempts: {},
    bestScores: {}
  };
}

function getState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const state = raw ? JSON.parse(raw) : defaultState();
    return Object.assign(defaultState(), state);
  } catch (e) {
    return defaultState();
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isPhaseAccessible(phase, state) {
  const order = phaseOrder();
  const idx = order.indexOf(phase);
  if (idx === 0) return true;
  return state.passed[order[idx - 1]] === true;
}

function allPassed(state) {
  return phaseOrder().every(p => state.passed[p]);
}

function mountCommon() {
  document.querySelectorAll("[data-current-year]").forEach(el => el.textContent = new Date().getFullYear());
}

function updateHome() {
  if (document.body.dataset.page !== "home") return;
  const state = getState();
  const input = document.getElementById("student-name-input");
  const form = document.getElementById("student-form");
  const msg = document.getElementById("student-status");
  const resetBtn = document.getElementById("reset-progress-btn");
  if (input) input.value = state.studentName || "";
  if (msg) msg.textContent = state.studentName ? `Nombre guardado: ${state.studentName}` : "Aún no has guardado tu nombre.";
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const s = getState();
      const name = (input.value || "").trim();
      if (!name) {
        msg.textContent = "Escribe tu nombre y apellidos antes de guardar.";
        return;
      }
      s.studentName = name;
      saveState(s);
      msg.textContent = `Nombre guardado: ${name}`;
      refreshPhaseCards();
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    });
  }
  refreshPhaseCards();
}

function refreshPhaseCards() {
  const state = getState();
  document.querySelectorAll("[data-phase-card]").forEach(card => {
    const phase = card.dataset.phaseCard;
    const accessible = isPhaseAccessible(phase, state);
    const passed = !!state.passed[phase];
    const status = card.querySelector("[data-phase-status]");
    if (status) {
      status.textContent = passed ? "Superada" : (accessible ? "Disponible" : "Bloqueada");
      status.className = "phase-status " + (passed ? "phase-status-pass" : (accessible ? "phase-status-open" : "phase-status-lock"));
    }
    if (!accessible) {
      card.classList.add("is-locked");
      card.onclick = (e) => e.preventDefault();
    }
  });
  document.querySelectorAll("[data-certificate-link]").forEach(link => {
    if (!allPassed(state)) {
      link.classList.add("is-disabled");
      link.onclick = (e) => e.preventDefault();
    }
  });
}

function getQuestionSet(phase) {
  const pool = APP_DATA.pools[phase];
  return shuffle(pool).slice(0, QUESTIONS_PER_ATTEMPT).map(item => {
    const opts = shuffle(item.options.map((t, i) => ({ text: t, original: i })));
    return {
      q: item.q,
      options: opts.map(o => o.text),
      answer: opts.findIndex(o => o.original === item.answer)
    };
  });
}

function mountPhase() {
  const phase = document.body.dataset.phase;
  if (!phase) return;
  const state = getState();
  const title = APP_DATA.titles[phase];
  const lockBox = document.getElementById("phase-lock-state");
  const verification = document.getElementById("verification-block");
  const test = document.getElementById("dynamic-test");
  const summary = document.getElementById("attempt-summary");
  const nextLink = document.getElementById("next-phase-link");

  if (!isPhaseAccessible(phase, state)) {
    if (lockBox) lockBox.innerHTML = `<div class="card card-warning"><h2>Fase bloqueada</h2><p>Antes de acceder a <strong>${title}</strong> debes superar la fase anterior.</p><a class="button" href="index.html">Volver al inicio</a></div>`;
    if (verification) verification.innerHTML = "";
    if (test) test.innerHTML = "";
    if (summary) summary.innerHTML = "";
    return;
  }

  if (lockBox) {
    lockBox.innerHTML = `<div class="card"><h2>Progreso de la fase</h2><p><strong>Alumno:</strong> ${state.studentName || "Sin nombre guardado en la portada"}</p><p><strong>Estado:</strong> ${state.passed[phase] ? "Superada" : "Pendiente"}</p></div>`;
  }

  renderVerification(phase);
  renderTestArea(phase);
  renderSummary(phase);

  if (nextLink) {
    const np = {"a": "b", "b": "c", "c": "d", "d": "e", "e": "f", "f": null};
    const next = np[phase];
    if (state.passed[phase]) {
      nextLink.classList.remove("is-disabled");
      nextLink.href = next ? `fase-${next}.html` : "certificado.html";
      nextLink.textContent = next ? `Ir a la fase ${next.toUpperCase()}` : "Ir al certificado final";
    }
  }
}

function renderVerification(phase) {
  const state = getState();
  const mount = document.getElementById("verification-block");
  if (!mount) return;
  if (state.verified[phase]) {
    mount.innerHTML = `<section class="card"><h2>Práctica verificada</h2><p>La práctica de esta fase ya está validada. El test está disponible.</p></section>`;
    return;
  }
  mount.innerHTML = `<section class="card verification-card">
    <h2>Validación tras la entrega en EVAGD</h2>
    <p>Cuando hayas subido la práctica de esta fase a EVAGD, introduce el código de verificación facilitado por el profesorado.</p>
    <form id="code-form" class="inline-form">
      <input type="password" id="code-input" inputmode="numeric" maxlength="6" placeholder="Código de 6 dígitos" autocomplete="off" />
      <button class="button" type="submit">Validar práctica</button>
    </form>
    <p class="form-message" id="code-message"></p>
  </section>`;
  document.getElementById("code-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const value = (document.getElementById("code-input").value || "").trim();
    const msg = document.getElementById("code-message");
    if (value === getTodayCode()) {
      const s = getState();
      s.verified[phase] = true;
      saveState(s);
      msg.textContent = "Código correcto. El test ya está desbloqueado.";
      renderVerification(phase);
      renderTestArea(phase);
    } else {
      msg.textContent = "Código incorrecto. Revisa la fecha o consulta al profesorado.";
    }
  });
}

function renderTestArea(phase) {
  const state = getState();
  const mount = document.getElementById("dynamic-test");
  if (!mount) return;

  if (!state.verified[phase]) {
    mount.innerHTML = `<section class="card"><h2>Test bloqueado</h2><p>El test se activará cuando la práctica haya sido validada con el código diario.</p></section>`;
    return;
  }

  if (state.passed[phase]) {
    const score = state.bestScores[phase] || 0;
    mount.innerHTML = `<section class="card"><h2>Fase superada</h2><p>Ya has superado esta fase con <strong>${score}/10</strong>. Puedes continuar.</p></section>`;
    return;
  }

  const attempts = state.attempts[phase] || [];
  if (attempts.length >= MAX_ATTEMPTS) {
    mount.innerHTML = `<section class="card card-warning"><h2>Intentos agotados</h2><p>Has utilizado los tres intentos disponibles. Revisa la corrección final y consulta al profesorado.</p></section>`;
    return;
  }

  const questions = getQuestionSet(phase);
  mount.innerHTML = `<section class="card">
    <div class="test-header-flex">
      <div>
        <h2>Test de la fase</h2>
        <p>10 preguntas, 4 opciones por pregunta. Necesitas al menos <strong>8 aciertos</strong> para superar la fase.</p>
      </div>
      <span class="attempt-badge">Intento ${attempts.length + 1} de ${MAX_ATTEMPTS}</span>
    </div>
    <form id="quiz-form" class="quiz-form"></form>
  </section>`;
  const form = document.getElementById("quiz-form");
  questions.forEach((q, i) => {
    const field = document.createElement("fieldset");
    field.className = "test-item";
    field.innerHTML = `<legend>${i+1}. ${q.q}</legend>`;
    q.options.forEach((opt, j) => {
      const row = document.createElement("label");
      row.className = "option-row";
      row.innerHTML = `<input required type="radio" name="q${i}" value="${j}"> <span>${String.fromCharCode(97+j)}) ${opt}</span>`;
      field.appendChild(row);
    });
    form.appendChild(field);
  });
  const actions = document.createElement("div");
  actions.className = "quiz-actions";
  actions.innerHTML = `<button class="button" type="submit">Enviar intento</button>`;
  form.appendChild(actions);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let score = 0;
    const answers = [];
    questions.forEach((q, i) => {
      const checked = form.querySelector(`input[name="q${i}"]:checked`);
      const value = Number(checked.value);
      answers.push(value);
      if (value === q.answer) score++;
    });
    const percent = Math.round((score / QUESTIONS_PER_ATTEMPT) * 100);
    const s = getState();
    s.attempts[phase] = s.attempts[phase] || [];
    s.attempts[phase].push({ score, percent, answers, questions });
    s.bestScores[phase] = Math.max(score, s.bestScores[phase] || 0);
    if (score >= PASS_SCORE) {
      s.passed[phase] = true;
    }
    saveState(s);
    renderSummary(phase);
    renderTestArea(phase);
    refreshPhaseCards();
  });
}

function renderSummary(phase) {
  const state = getState();
  const mount = document.getElementById("attempt-summary");
  if (!mount) return;
  const attempts = state.attempts[phase] || [];
  if (!attempts.length) {
    mount.innerHTML = "";
    return;
  }
  const last = attempts[attempts.length - 1];
  const passed = !!state.passed[phase];
  let html = `<section class="card"><h2>Resultado del test</h2>
    <p><strong>Último intento:</strong> ${last.score}/10 · <strong>${last.percent}%</strong> de acierto.</p>`;
  if (passed) {
    html += `<div class="result-banner result-pass">Has alcanzado el 80% o más. Ya puedes avanzar a la siguiente fase.</div>`;
  } else {
    const left = MAX_ATTEMPTS - attempts.length;
    html += `<div class="result-banner result-fail">Todavía no has alcanzado el 80%. Puedes repetir el test. Te quedan <strong>${left}</strong> intento(s).</div>`;
    if (left === 0) {
      html += `<div class="correction-block"><h3>Autocorrección final</h3>`;
      last.questions.forEach((q, i) => {
        const chosen = last.answers[i];
        const ok = chosen === q.answer;
        html += `<div class="correction-item ${ok ? "ok" : "ko"}"><p><strong>${i+1}. ${q.q}</strong></p><p>Tu respuesta: ${typeof chosen === "number" ? q.options[chosen] : "Sin responder"}</p><p>Respuesta correcta: <strong>${q.options[q.answer]}</strong></p></div>`;
      });
      html += `</div>`;
    }
  }
  html += `<div class="attempt-grid">` + attempts.map((at, i) => `<article class="attempt-card"><h3>Intento ${i+1}</h3><p>${at.score}/10</p><p>${at.percent}%</p></article>`).join("") + `</div></section>`;
  mount.innerHTML = html;

  const nextLink = document.getElementById("next-phase-link");
  const order = phaseOrder();
  const idx = order.indexOf(phase);
  const next = order[idx+1];
  if (nextLink && passed) {
    nextLink.classList.remove("is-disabled");
    nextLink.href = next ? `fase-${next}.html` : "certificado.html";
    nextLink.textContent = next ? `Ir a la fase ${next.toUpperCase()}` : "Ir al certificado final";
  }
}

function mountCertificate() {
  if (!document.body.classList.contains("certificate-page")) return;
  const state = getState();
  const gate = document.getElementById("certificate-gate");
  const panel = document.getElementById("certificate-panel");
  if (!allPassed(state)) {
    gate.innerHTML = `<section class="card card-warning"><h2>Certificado bloqueado</h2><p>Debes superar las seis fases para acceder al certificado.</p><a class="button" href="index.html">Volver al inicio</a></section>`;
    panel.innerHTML = "";
    return;
  }
  const today = new Date().toLocaleDateString("es-ES");
  gate.innerHTML = `<section class="card"><h2>Certificado disponible</h2><p>Se ha detectado el itinerario completo superado.</p></section>`;
  panel.innerHTML = `<section class="certificate-sheet">
    <p class="cert-mini">Certificado de aprovechamiento</p>
    <h1>LibreOffice Calc · Tratamiento Informático de la Información</h1>
    <p>Se certifica que</p>
    <h2>${state.studentName || "Alumno/a"}</h2>
    <p>ha completado satisfactoriamente las seis fases del itinerario didáctico de LibreOffice Calc.</p>
    <div class="attempt-grid">
      ${phaseOrder().map(p => `<article class="attempt-card"><h3>Fase ${p.toUpperCase()}</h3><p>${APP_DATA.titles[p]}</p><p><strong>${(state.bestScores[p] || 0)}/10</strong></p></article>`).join("")}
    </div>
    <p class="cert-footer">Fecha de emisión: ${today}</p>
    <div class="cert-signatures"><div><span>Profesorado</span></div><div><span>Centro educativo</span></div></div>
    <button class="button no-print" onclick="window.print()">Imprimir / Guardar en PDF</button>
  </section>`;
}

document.addEventListener("DOMContentLoaded", () => {
  mountCommon();
  updateHome();
  refreshPhaseCards();
  mountPhase();
  mountCertificate();
});
