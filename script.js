    //Campos de personalización de camiseta
    let textoInput = document.getElementById('textoCamiseta');
    let posicionX = document.getElementById('posX');
    let posicionY = document.getElementById('posY');
    let radioBotones = document.querySelectorAll('.colorCamiseta');

    //Galería con las imágenes que puede elegir el usuario
    let imagenesDisponibles = document.querySelector('.imagenes-galeria');
    let camisetaImg = document.getElementById('imagenCamiseta');
    let textoCamiseta = document.createElement('p');

    // Todos los componentes que tiene la camiseta
    let camisetaArea = document.getElementById('contenedorCamiseta');
    let imagenPecho = document.getElementById('imagenPecho');
    let imagenCentro = document.getElementById('imagenCentro');
    let textoAlt = document.getElementById('texto');


    // Texto introducido por el usuario que se añade a la camiseta
    textoInput.addEventListener('input', (event) => {
        let textoIntroducido = event.target.value;
        
        if (textoIntroducido.length > 10) {
            alert("El límite de caracteres es 10 :/");
            textoInput.value = textoInput.value.slice(0, 10);
        }
        textoCamiseta.textContent = textoInput.value;
        textoCamiseta.className = 'texto-camiseta';
        camisetaArea.appendChild(textoCamiseta); 
    });


    // Eje X
    posicionX.addEventListener('input', (event) => {
        textoCamiseta.style.left = event.target.value + '%';
    });

    // Eje Y
    posicionY.addEventListener('input', (event) => {
        textoCamiseta.style.top = event.target.value + '%';
    });

    //Elección de camiseta (blanco o negro), se cambia el color del texto tanto del que ha introducido 
    //el usuario como el Alt de la camiseta

    radioBotones.forEach(radio => {
        radio.addEventListener('click', () => {
            if (radio.value === 'blanco') {
                camisetaImg.src = 'white.png';
                textoCamiseta.style.color = 'black';
                textoAlt.style.color = 'black';
            } else {
                camisetaImg.src = 'black.png';
                textoCamiseta.style.color = 'white';
                textoAlt.style.color = 'white';
            }
        });
    });

    // Se inicia el arrastre de las imágenes disponibles en la galería
    imagenesDisponibles.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.src)
        event.dataTransfer.setData('alt', event.target.alt);

    });

    // Evebto que se ejecuta cuando la imagen se arrastra en camisetaArea
    camisetaArea.addEventListener('dragover', (event) => {
        event.preventDefault();
    });


    // Evento cuando se suelta la camiseta en el área
    camisetaArea.addEventListener('drop', (event) => {
        event.preventDefault();
    
        imagenPecho.innerHTML = '';
        imagenCentro.innerHTML = '';
    
        let imgNueva = document.createElement('img');
        let imgPecho = document.createElement('img');
    
        imgPecho.src = event.dataTransfer.getData("text/plain");
        imgNueva.src = event.dataTransfer.getData("text/plain");
        textoAlt.textContent = event.dataTransfer.getData("alt");
    
        imagenPecho.appendChild(imgPecho);
        imagenCentro.appendChild(imgNueva);
        camisetaArea.appendChild(textoAlt);
    });