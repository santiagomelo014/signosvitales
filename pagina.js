// Simulación de cambios en los signos vitales
function simularCambios() {
    setInterval(function() {
        var temperatura = Math.floor(Math.random() * (40 - 35 + 1)) + 35; // Temperatura entre 35 y 40 grados Celsius
        var oxigenacion = Math.floor(Math.random() * (100 - 90 + 1)) + 90; // Oxigenación entre 90% y 100%
        var pulsaciones = Math.floor(Math.random() * (180 - 120 + 1)) + 120; // Pulsaciones entre 120 y 180 pulsaciones por minuto

        document.getElementById('temperatura').innerText = temperatura + ' °C';
        document.getElementById('oxigenacion').innerText = oxigenacion + ' %';
        document.getElementById('pulsaciones').innerText = pulsaciones + ' bpm';

        // Comprobar si los signos vitales están fuera de los rangos normales y mostrar alertas
        if (temperatura > 38 || oxigenacion < 95 || pulsaciones < 140 || pulsaciones > 160) {
            document.getElementById('alertas').style.display = 'block';
            document.getElementById('alertas').innerHTML = '<h2>¡Alerta!</h2><p>¡Uno o más signos vitales fuera de los rangos normales!</p>';
        } else {
            document.getElementById('alertas').style.display = 'none';
        }
    }, 5000); // Cambios cada 5 segundos (simulación)
}

// Iniciar la simulación al cargar la página
window.onload = function() {
    simularCambios();
};
