document.addEventListener('DOMContentLoaded', function() {
    const inicioSesion = document.getElementById('inicioSesion');


    if (inicioSesion){
        inicioSesion.addEventListener('click', function() {
            
            const urlDeRedireccion = '../index.html';
            window.location.href = urlDeRedireccion;

        });
    }

});