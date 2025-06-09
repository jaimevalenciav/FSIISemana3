document.addEventListener('DOMContentLoaded', function() {
    const cambiarPasswordBtn = document.getElementById('cambiaPasswordBtn');

    if (cambiarPasswordBtn) {
        cambiarPasswordBtn.addEventListener('click', function() {
            
            const urlDeRedireccion = '../pages/acceso.html'; 

            window.location.href = urlDeRedireccion;

        });
    }
});