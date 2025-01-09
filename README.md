# P3.2-Anem-al-cinema

**Aquesta pràctica s'ha de fer en parelles.**
**La nota serà la mínima de les dues aplicacions que heu de fer.**
**Tots dos heu de conèixer el codi i el funcionament de les dues aplicacions.**
**El codi ha d'estar documentat i comentat**
**S'ha d'utilitzar la llibreria jQuery com a mínim per assignar els gestors d'esdeveniments.**

 

## Si t'agraden les "pelis" d'aliens...
... fes un joc "matamarcianos" agafant com a base el paquet SpaceInvaders.zip.

S'ha de poder jugar amb el teclat i amb el ratolí.

La nau només pot disparar un míssil cada vegada (fins que el míssil no toqui un alien o surti de pantalla, no pot tornar a disparar).

**Amb el teclat**

Per moure la nau s'ha de poder fer tant amb les fletxes esquerra i dreta com amb la A i la D.
Per disparar s'ha de poder utilitzar tant la barra d'espai com la tecla INTRO.

El moviment s'ha d'iniciar i continuar de forma uniforme mentre estigui premuda una de les tecles per moure la nau (s'ha d'evitar l'efecte de retard i la repetició automàtica de tecles que es produeix amb l'esdeveniment keypress quan es manté una tecla premuda).
Si dues tecles oposades es mantenen premudes simultàniament, la nau no s'ha de moure.

**Amb el ratolí**

La nau s'ha de moure només en horitzontal seguint la posició horitzontal del ratolí en qualsevol punt de la finestra (no només dins de l'àrea de joc).

S'ha de poder disparar amb els dos botons del ratolí.
Si es dispara amb el botó secundari, no ha d'aparèixer el menú contextual.
Per evitar que això sigui un problema al depurar, s'ha de permetre que aparegui el menú contextual si està premuda la tecla Shift.

 

## Si prefereixes els musicals...
... fes un piano tàctil agafant com a base el paquet PianoMan.zip.

S'ha de poder tocar el piano amb el teclat de l'ordinador i amb els dits sobre una pantalla tàctil.
Han de sonar totes les tecles que es premin simultàniament.

S'ha d'evitar la repetició automàtica de tecles que es produeix amb l'esdeveniment keypress quan es manté una tecla premuda.

Per facilitar la interpretació amb el teclat, les lletres K, L i Ñ han de fer sonar les mateixes notes que R, T i Y, i les tecles Q, W i E, les mateixes que G, H i J.

Per fer les proves, si no es disposa de pantalla tàctil, es pot descomentar la comanda TouchEmulator() de l'arxiu PianoMan.js.
Per simular que es toquen dos punts de la pantalla simultàniament s'ha de clicar el ratolí mantenint premuda la tecla Shift (Mayús).

Abans de lliurar l'aplicació s'ha de tornar a comentar la comanda TouchEmulartor() i l'aplicació ha de funcionar perfectament amb una pantalla tàctil.

 

Lliurament
Cada component del grup ha de lliurar una de les dues aplicacions però ha d'incloure el nom dels dos participants.

El lliurament s'ha de fer en un arxiu comprimit, incloent tots els arxius necessaris