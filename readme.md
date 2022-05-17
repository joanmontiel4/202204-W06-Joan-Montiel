# Week 2 - Weekend Challenge

## Conway Game of Life 🦠 !

Programación del [Juego de la vida de Conway](https://es.wikipedia.org/wiki/Juego_de_la_vida).

Un resumen de las reglas:

-   Una célula viva sigue las siguientes reglas:
    -   Si tiene menos de 2 células contiguas vivas, muere por "soledad".
    -   Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
    -   Si tiene 2 o 3 células contiguas vivas, sobrevive.
-   Una célula muerta sigue la siguiente regla: Permanece muerta hasta que tiene exactamente 3 células contiguas vivas, momento en el que "nace".

## Requisitos

1. Debe de estar testeado con Jest.
2. Se utilizará Husky para manejar los git-hooks, utilizando los archivos adjuntos.
3. Debe protegerse main en GitHub para que todo lo que se mergee pase por pull-request y que el workflow se cumpla.
4. En el caso de llegar a HTML/CSS.
   4.1. Se utilizará BEM/SASS.
   4.2. Se debe desplegar a Netlify.

## Milestones

1. Programa funcional en JS. Las células se quedan pegadas la pared.
2. Programa 100% testeado.
3. Añadir HTML/CSS.
4. Modificar JS para que:
   a. Las células sigan avanzando al llegar a la pared y desaparezcan.
   b. Las células salgan por un lado de la cuadrícula y aparezcan por el otro.
