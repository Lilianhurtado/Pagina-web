
// Selección de elementos del DOM
// Barra de navegacion
let menu = document.querySelector('#menu-icon');// Selecciona el icono del menú
let navbar = document.querySelector('.navbar');// Selecciona la barra de navegación

// Cuando se haga clic en el icono del menú, se alterna la clase 'active' en la barra de navegación
menu.onclick = () => {
    navbar.classList.toggle('active');// Agrega o elimina la clase 'active' en la barra de navegación

}
// Cuando se haga scroll en la ventana, se elimina la clase 'active' de la barra de navegación
window.onscroll = () => {
    navbar.classList.remove('active'); // Elimina la clase 'active' cuando se hace scroll
}


// Dark Mode
let darkmode = document.querySelector('#darkmode'); // Selecciona el icono de modo oscuro
// Cuando se hace clic en el icono de modo oscuro, se alterna entre modo claro y oscuro
darkmode.onclick = () => {
        // Si el icono tiene la clase 'bx-moon', significa que está en modo oscuro
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');// Cambia el icono de luna a sol
        document.body.classList.add('active');// Activa el modo oscuro en el cuerpo de la página
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon'); // Cambia el icono de sol a luna
        document.body.classList.remove('active');// Elimina el modo oscuro en el cuerpo de la página
    }
}
// Scroll Reveal: Revelar elementos de la página cuando se desplazan
const sr = ScrollReveal ({
    origin: 'top',// Los elementos aparecerán desde la parte superior
    distance: '40px',// Distancia de desplazamiento al revelar los elementos
    duration: 2000, // Duración de la animación en milisegundos
    reset: true // La animación se reinicia cada vez que el elemento entra en la vista
});
// Aplicar la animación de ScrollReveal a los elementos seleccionados
sr.reveal('.home-text, .home-img, .about-img, .about-text, .box, .s-box, .connect-text, .btn, .contact-box' , { interval: 200 });
