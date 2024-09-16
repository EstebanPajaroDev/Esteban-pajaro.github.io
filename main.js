var boton = document.getElementById("boton");
  boton.onclick = verPdf;

    //   podemos tambien igualas directamente en la funcion sin darle nombre a la funcion
  function verPdf() {
    window.open("./Curriculum Profesional - EstebanPajaro.pdf", "_blank"); // abre el PDF en otra pestaña
  };
