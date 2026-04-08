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
