//variables
const markAll = document.querySelector('#mark-all');
const contenedor = document.querySelector('.container');

//eventos
eventListener();
function eventListener () {
    markAll.addEventListener('click', ()=> {
        //seleccionamos todos los no-read
        const notReadElements = document.querySelectorAll('.not-read')
        //eliminamos los nod-read
        notReadElements.forEach(elemntos => {
            elemntos.classList.remove('not-read')
        });

        actualizarCantidad(0);
    });

    document.addEventListener('DOMContentLoaded', () => {
        //Seleecionamos el campo a manipular
        const numberNotification = document.querySelector('.number-notification');
        //obtenemos la cantidad de notificaciones
        const notificacionCantidad = document.querySelectorAll('.not-read').length;
        
        //insertamos la cantidad de notificaciones
        numberNotification.textContent = notificacionCantidad
    })

    contenedor.addEventListener('click', (e) => {
        if(e.target.classList.contains('card')){
            const marca = e.target.children[1].children[0].children[3];
            if(marca.classList.contains('not-read')){
                //eliminamos la marca
                marca.classList.remove('not-read');

                //contamos las marcas restantes
                const marcasRestantes = document.querySelectorAll('.not-read').length;
                
                //actualizamos la cantidad
                actualizarCantidad(marcasRestantes)
            }
        }
    })
};

//funciones
function actualizarCantidad (cantidad) {
    
    const numberNotification = document.querySelector('.number-notification');

    numberNotification.textContent = cantidad;
};
