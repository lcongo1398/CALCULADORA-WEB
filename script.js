const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const valor = this.textContent;
        
        if (valor === 'C') {
            pantalla.value = '';
        }
        else if (valor === '=') {
            try {
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = 'Error';
            }
        }
        else {
            pantalla.value += valor;
        }
    });
});