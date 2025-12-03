document.addEventListener('DOMContentLoaded', () => {
});
document.addEventListener('DOMContentLoaded', function() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 100; // Ajustează acest număr pentru mai multi/putini fulgi

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Poziție orizontală aleatorie (de la 0% la 100% din lățimea viewport-ului)
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // Durată de cădere aleatorie (pentru viteze diferite)
        snowflake.style.animationDuration = Math.random() * 10 + 5 + 's'; // între 5s și 15s
        
        // Întârziere aleatorie (pentru a porni la momente diferite)
        snowflake.style.animationDelay = Math.random() * -15 + 's'; 
        
        // Mărime aleatorie (între 2px și 6px)
        const size = Math.random() * 4 + 2; 
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';

        // Opacitate și blur aleatoriu
        snowflake.style.opacity = Math.random() * 0.5 + 0.3; 
        snowflake.style.filter = `blur(${Math.random() * 1.5 + 0.5}px)`; 

        snowflakesContainer.appendChild(snowflake);
    }
});