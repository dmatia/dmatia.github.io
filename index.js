
var secciones = document.querySelectorAll('.title');
var cuerposec = document.querySelectorAll('.section_body');
var contenedor = document.getElementById('main');


secciones.forEach((elemento, clave)=>{
    
    elemento.addEventListener('click', () => {
    

        let clase = "";
        switch(clave) {
            case 0:  
                    clase = 'main_aboutme';
            break;
            case 1:  
                    clase = 'main_do';
            break;
            case 2:  
                    clase = 'main_experience';
            break;
          
          }
        contenedor.classList.toggle(`${clase}`);
        
        clase = "";

        switch(clave){
            case 0:  
            clase = 'titulo_exp';
    break;
    case 1:  
    clase = 'do_exp';
            
    break;
    case 2:  

    break;
        }
        secciones[clave].classList.toggle(`${clase}`)

        cuerposec[clave].classList.toggle('visible');
        
        switch(clave){
            case 0:  
            secciones[1].classList.toggle('ocultar');
            secciones[2].classList.toggle('ocultar');
    break;
    case 1:  
    secciones[0].classList.toggle('ocultar');
    secciones[2].classList.toggle('ocultar');
            
    break;
    case 2:
        secciones[1].classList.toggle('ocultar');
    secciones[0].classList.toggle('ocultar');
        }
        

    })
})

