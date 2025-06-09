document.addEventListener('DOMContentLoaded', function() {
    const reservaSala = document.getElementById('reservaSalaBtn');
    const reservaSala2 = document.getElementById('reservaSalaBtn2');
    const reservaSala3 = document.getElementById('reservaSalaBtn3');


    const volverBtn = document.getElementById('volverBtn');

    if (reservaSala) {
        reservaSala.addEventListener('click', function() {
            
            const urlDeRedireccion = '../pages/respuestaSala.html'; 

            window.location.href = urlDeRedireccion;

        });
    }

    if (reservaSala2) {
        reservaSala2.addEventListener('click', function() {
            
            const urlDeRedireccion = '../pages/respuestaSala.html'; 

            window.location.href = urlDeRedireccion;

        });
    }

    if (reservaSala3) {
        reservaSala3.addEventListener('click', function() {
            
            const urlDeRedireccion = '../pages/respuestaSala.html'; 

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