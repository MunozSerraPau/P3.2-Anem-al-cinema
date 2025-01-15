# Piano Tàctil - Alumnes: Pau Muñoz Serra i Alba Matamoros Morales

## Característiques

- **Punts Afegits**: S'han afegit les funcionalitats següents, tal com es va sol·licitar en el enunciat:
    - Reproducció del so associat a cada tecla (lletres i números), permetent que l'usuari pugui sentir el so de les tecles pressionades.
    - Implementació d'una interacció tàctil, que permet als usuaris tocar les tecles directament a la pantalla tàctil del dispositiu.
    - Gestió de les interaccions amb el teclat, mitjançant els esdeveniments `keydown` i `keyup`, per seleccionar i deseleccionar les tecles adequadament.
    - S'ha evitat la repetició automàtica de tecles que es produeix amb l'esdeveniment `keypress` quan es manté una tecla premuda, de manera que només es reprodueix el so una vegada per cada tecla pressionada.
    - Per facilitar la interpretació amb el teclat, les lletres K, L i Ñ han estat configurades per fer sonar les mateixes notes que R, T i Y, mentre que les tecles Q, W i E han estat configurades per fer sonar les mateixes notes que G, H i J.

