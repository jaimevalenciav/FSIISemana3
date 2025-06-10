document.addEventListener('DOMContentLoaded', function() {
    const cambiarPasswordBtn = document.getElementById('cambiaPasswordBtn');
    const form = document.getElementById('recuperarClave'); 

    if (cambiarPasswordBtn && form) {
        cambiarPasswordBtn.addEventListener('click', function(event) {
            event.preventDefault(); 

            const emailInput = document.getElementById('emailInput');
            const passInput = document.getElementById('passInput');
            const newPassInput = document.getElementById('newPassInput'); 

            const email = emailInput.value.trim();
            const password = passInput.value.trim();
            const repeatedPassword = newPassInput.value.trim();

            let isValid = true; 

            
            emailInput.classList.remove('is-invalid');
            passInput.classList.remove('is-invalid');
            newPassInput.classList.remove('is-invalid');

            emailInput.nextElementSibling.textContent = '';
            passInput.nextElementSibling.textContent = '';
            newPassInput.nextElementSibling.textContent = '';

            
            if (email === '') {
                emailInput.classList.add('is-invalid');
                emailInput.nextElementSibling.textContent = 'El correo electrónico es obligatorio.';
                isValid = false;
            } else if (!validateEmail(email)) {
                emailInput.classList.add('is-invalid');
                emailInput.nextElementSibling.textContent = 'Por favor, introduce un formato de correo electrónico válido.';
                isValid = false;
            }

            // --- Validación de la Nueva Contraseña ---
            if (password === '') {
                passInput.classList.add('is-invalid');
                passInput.nextElementSibling.textContent = 'La nueva contraseña es obligatoria.';
                isValid = false;
            } else if (!validatePasswordStrength(password)) {
                passInput.classList.add('is-invalid');
                passInput.nextElementSibling.textContent = 'La contraseña debe tener al menos 6 caracteres, 1 mayúscula y 1 carácter especial (ej. !, @, #, $).';
                isValid = false;
            }

            
            if (repeatedPassword === '') {
                newPassInput.classList.add('is-invalid');
                newPassInput.nextElementSibling.textContent = 'Por favor, repite la nueva contraseña.';
                isValid = false;
            } else if (password !== repeatedPassword) {
                newPassInput.classList.add('is-invalid');
                newPassInput.nextElementSibling.textContent = 'Las contraseñas no coinciden.';
                isValid = false;
            }

            
            if (isValid) {
                
                alert('¡Contraseña cambiada exitosamente! Redirigiendo a la página de acceso.');
                const urlDeRedireccion = '../pages/acceso.html'; 
                window.location.href = urlDeRedireccion;
            }
        });
    }

    

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePasswordStrength(password) {
       
        const re = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
        return re.test(password);
    }
});