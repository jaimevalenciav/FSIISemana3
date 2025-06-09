document.addEventListener('DOMContentLoaded', function() {
    const reservaOficina = document.getElementById('reservaOficinaBtn');
    const reservaOficina2 = document.getElementById('reservaOficinaBtn2');
    const reservaOficina3 = document.getElementById('reservaOficinaBtn3');


    const volverBtn = document.getElementById('volverBtn');


    if (reservaOficina){
        reservaOficina.addEventListener('click', function() {
            
            const urlDeRedireccion = '../pages/respuestaOficina.html'; 

            window.location.href = urlDeRedireccion;

        });
    }

    if (reservaOficina2){
        reservaOficina2.addEventListener('click', function() {
            
            const urlDeRedireccion = '../pages/respuestaOficina.html'; 

            window.location.href = urlDeRedireccion;

        });
    }
    if (reservaOficina3){
        reservaOficina3.addEventListener('click', function() {
            
            const urlDeRedireccion = '../pages/respuestaOficina.html'; 

            window.location.href = urlDeRedireccion;

        });
    }
   


    if (volverBtn) {
        volverBtn.addEventListener('click', function() {
            
            const urlDeRedireccion = '../index.html'; 

            window.location.href = urlDeRedireccion;

        });
    }
});