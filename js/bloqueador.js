 // Deshabilitar el clic derecho
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert('¡El clic derecho está deshabilitado en esta página!');
        });

        // Deshabilitar teclas de acceso rápido como F12 y Ctrl+Shift+I
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
                e.preventDefault();
                alert('Las herramientas de desarrollo están deshabilitadas.');
            }
        });