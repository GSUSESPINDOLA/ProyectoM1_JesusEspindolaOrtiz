    // Generamos variables para las referencias a los elementos del DOOM
    const paleta = document.getElementById('paleta');
    const boton = document.getElementById('btnGenerar');
    const radios = document.querySelectorAll('input[name="cantidad"]');

    // Funcjion para Generar color Aleaoirio
    function colorAleatorio() {
      let color = '#';
    let numeros =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    for(let i=0;i<6;i++){

        let n_aleatorio = Math.floor(Math.random()*15);
    
        color=color+numeros[n_aleatorio];
        console.log(color)
    }    
    return color;

    }

    // Funcion para evaluar el radio BUTTON 
    function obtenerCantidad() {
      for (const radio of radios) {
        if (radio.checked) {
          return parseInt(radio.value);
        }
      }
      return 4; 
    }

    // Funcion para generar la paleta 
    function generarPaleta() {
      const cantidad = obtenerCantidad();
      paleta.innerHTML = ''; 

      for (let i = 0; i < cantidad; i++) {
        const color = colorAleatorio();
        const div = document.createElement('div');
        div.className = 'color';
        div.style.backgroundColor = color;
        div.textContent = color;
        paleta.appendChild(div);
      }
    }
    // Evento para generar la paleta 
    boton.addEventListener('click', generarPaleta);

    // Evento que se activa al cambir el radio button
    for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', generarPaleta);
  }

   
    generarPaleta();