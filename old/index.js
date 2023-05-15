var botones = document.querySelectorAll('.boton');
const main_content = document.getElementById('main_content');
const texto = document.querySelectorAll('.texto_exp');;

botones.forEach((elemento, clave)=>{
    elemento.addEventListener('click', () => {
        main_content.classList.toggle('main-content_exp');
        botones[clave].classList.toggle('titulo_exp');
        texto[clave].classList.toggle('content_exp');


    })
})