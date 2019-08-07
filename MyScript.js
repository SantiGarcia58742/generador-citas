var x = 0;
    function myFunction() {
      var infocart = ["No es posible mantener la paz usando la fuerza; que sólo se puede lograr mediante la comprensión.",
                      "Existen dos formas de ver la vida: una es creyendo que nada es un milagro, la otra es creyendo que todo es un milagro.",
                      "Dios no juega a los dados con el Universo.",
                      "Si A es el éxito en la vida, entonces A = X + Y + Z. Donde X es trabajo, Y es placer y Z es mantener la boca cerrada.",
                      "Cualquier tonto puede saber. La cuestión es entender.",
                      "Una locura es hacer la misma cosa una y otra vez esperando obtener resultados diferentes.",
                      "El misterio es la cosa más bonita que podemos experimentar. Es la fuente de todo arte y ciencia verdadera.",
                      "Me encanta la Humanidad pero odio los seres humanos.",
                      "Una persona que nunca ha cometido un error nunca intenta nada nuevo.",
                      "Dos cosas son infinitas: la estupidez humana y el universo; y no estoy realmente seguro de lo segundo.",
                      "Nada sucede hasta que algo se mueve.",
                      "Nunca se puede resolver un problema en el mismo nivel en el que fue creado.",
                      "Sólo aquellos que intentan el absurdo pueden lograr lo imposible.",
                      "Si los hechos no encajan en la teoría, cambie los hechos.",
                      "La creatividad es la inteligencia divirtiéndose."];
      if (x == 15) {
        x = 0;
      }
          document.getElementById('citas').innerHTML = infocart[x];
          x = x + 1;
    }
