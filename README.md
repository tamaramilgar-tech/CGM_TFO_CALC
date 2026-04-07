# Web didáctica de LibreOffice Calc

Proyecto listo para publicar en GitHub Pages.

## Archivos
- `index.html`
- `fase-a.html`
- `fase-b.html`
- `fase-c.html`
- `fase-d.html`
- `fase-e.html`
- `fase-f.html`
- `certificado.html`
- `style.css`
- `script.js`

## Qué incluye esta versión
- 6 fases con práctica guiada y caso real
- validación por código para cada práctica entregada en EVAGD
- test dinámico de 10 preguntas por fase
- 3 intentos máximos por fase
- preguntas y orden de respuestas variables en cada intento
- autocorrección solo al terminar el tercer intento
- superación con 8 de 10 o más
- desbloqueo progresivo de fases
- certificado final al completar las 6 fases

## IMPORTANTE: códigos de verificación
En el archivo `script.js` encontrarás este bloque:

```js
const PHASE_CODES = {
  a: "CAMBIA-CODIGO-A",
  b: "CAMBIA-CODIGO-B",
  c: "CAMBIA-CODIGO-C",
  d: "CAMBIA-CODIGO-D",
  e: "CAMBIA-CODIGO-E",
  f: "CAMBIA-CODIGO-F"
};
```

Debes sustituir esos valores por los códigos reales que entregarás al alumnado a través de EVAGD.

## Publicación rápida en GitHub Pages
1. Sube todos los archivos a un repositorio.
2. Ve a **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama principal y la carpeta `/root`.
5. Guarda los cambios.
6. GitHub publicará la web y te dará la URL.

## Nota técnica
El progreso se guarda en el navegador mediante `localStorage`, por lo que cada estudiante mantiene su avance en su propio equipo/navegador.
