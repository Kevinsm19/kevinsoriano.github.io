document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("myAudio");
    const playButton = document.getElementById("playButton");
    const lyricsDiv = document.getElementById("lyrics");
    const message = "Este pequeño detalle es para ti, no es la gran cosa, pero es con mucho amor. <br> <br> Así como se iluminan estas flores, así iluminas mis días y mi vida con tu presencia, te amo mi amor, que tengas un feliz día de la mujer ❤️‍🩹";

    // Evento al hacer clic en el botón de reproducción
    playButton.addEventListener("click", function() {
        audio.play(); // Inicia la reproducción del audio
        lyricsDiv.innerHTML = message; // Muestra el mensaje en el div de lyrics
    });

    // Mueve las flores al centro cuando la página se carga completamente
    window.addEventListener("load", function() {
        const flowers = document.querySelector(".flowers");
        const container = document.querySelector(".container");
        const offset = (container.offsetWidth - flowers.offsetWidth) / 2;
        flowers.style.left = offset + "px";
    });
});
