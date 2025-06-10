document.addEventListener('DOMContentLoaded', function() {
   
    const inicioSesionBtn = document.getElementById('inicioSesion');

    if (inicioSesionBtn) {
        inicioSesionBtn.addEventListener('click', function(event) {
            event.preventDefault();

            const emailInput = document.getElementById('emailInput');
            const passInput = document.getElementById('passInput');

            const email = emailInput.value.trim(); 
            const password = passInput.value.trim();

            const emailFeedback = emailInput.nextElementSibling; 
            const passFeedback = passInput.nextElementSibling;

            let isValid = true; 

            
            if (email === '') {
                emailInput.classList.add('is-invalid'); 
                emailFeedback.textContent = 'El correo electrónico es obligatorio.';
                isValid = false;
            } else if (!validateEmail(email)) {
                emailInput.classList.add('is-invalid');
                emailFeedback.textContent = 'Por favor, introduce un formato de correo electrónico válido.';
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid'); 
                emailFeedback.textContent = ''; 
            }

            
            if (password === '') {
                passInput.classList.add('is-invalid');
                passFeedback.textContent = 'La contraseña es obligatoria.';
                isValid = false;
            } else {
                passInput.classList.remove('is-invalid');
                passFeedback.textContent = '';
            }

            
            if (isValid) {
                
                const urlDeRedireccion = '../index.html';
                window.location.href = urlDeRedireccion;
                alert('Inicio de sesión exitoso (simulado). Redirigiendo...'); 
            }
        });
    }

    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    
    const cambiarPasswordBtn = document.getElementById('cambiaPasswordBtn');
    if (cambiarPasswordBtn) {
        cambiarPasswordBtn.addEventListener('click', function() {
            const urlDeRedireccion = '../index.html'; 
            window.location.href = urlDeRedireccion;
        });
    }
});