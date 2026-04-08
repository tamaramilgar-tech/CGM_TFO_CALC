# Web didáctica de LibreOffice Calc

Versión corregida para GitHub Pages.

## Incluye
- campo para guardar el nombre del estudiante en la portada
- progreso persistente con localStorage
- validación por código diario de 6 dígitos con formato DDMMAA
- test oculto hasta introducir el código
- 10 preguntas por fase
- avance inmediato al lograr 8/10 o más
- hasta 3 intentos por fase
- autocorrección final solo si agota los intentos sin superar la fase
- certificado final con nombre y resultados por fase

## Código diario
El código no se define a mano por fase. Se calcula con la fecha del día:
- día 08/04/2026 -> código 080426

## Publicación
Sube todos los archivos al repositorio y publica desde Settings > Pages > Deploy from a branch > main > /root.


## Verificación visual rápida tras publicar
Si has subido la versión correcta, deberías ver:
- En la portada: el bloque **"Guarda tu nombre para el seguimiento y el certificado"**
- En Fase A: el texto **"Validación tras la entrega en EVAGD"**
- NO debe aparecer **"Tipo test final"**
- NO debe aparecer **"Ver plantilla de corrección"**
- En el pie debe verse **Versión v-correcta-2026-04-08**
