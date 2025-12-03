// Mesajele de feedback
const feedbackMessages = [
    "Super!",
    "Sunt mulțumită!",
    "Vreau mai multă distracție!",
    "Să sune muzica mai tare!",
    "Note dulci!",
    "Vibrații reci!"
];

// Culori și forme pentru Confetti
const confettiColors = ['#ff00ff', '#00ffcc', '#ffcc00', '#fff', '#f06'];
const shapes = ['square', 'rhombus', 'star', 'circle'];

// --- 1. Funcție pentru Confetti (preluată din logica meniului) ---
const createConfetti = () => {
    const container = document.querySelector('.confetti-container');

    for (let i = 0; i < 50; i++) { // Generează 50 de bucăți de confetti
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        // Stiluri bazate pe CSS-ul din Meniu (dacă nu au fost adăugate în feedback.css)
        confetti.style.position = 'absolute';
        confetti.style.opacity = 0.8;
        confetti.style.animation = `fall linear infinite`;
        confetti.style.animationDuration = `${Math.random() * 3 + 5}s`;
        confetti.style.animationDelay = `-${Math.random() * 5}s`;
        confetti.style.left = `${Math.random() * 100}vw`;

        if (shape === 'star') {
             confetti.style.width = '0';
             confetti.style.height = '0';
             confetti.style.background = 'none';
             confetti.style.borderRight = '5px solid transparent';
             confetti.style.borderLeft = '5px solid transparent';
             confetti.style.borderBottom = `8px solid ${confettiColors[Math.floor(Math.random() * confettiColors.length)]}`; 
             confetti.style.transform = 'rotate(35deg)';
        } else {
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.width = `${Math.random() * 8 + 4}px`;
            confetti.style.height = `${Math.random() * 8 + 4}px`;
            if (shape === 'circle') confetti.style.borderRadius = '50%';
            if (shape === 'rhombus') confetti.style.transform = 'rotate(45deg)';
        }
        
        container.appendChild(confetti);
    }
};

// --- 2. Funcție pentru Mesajele Animate ---
const animateFeedbackMessages = () => {
    const area = document.querySelector('.message-animation-area');
    const totalMessages = feedbackMessages.length;
    
    feedbackMessages.forEach((msg, index) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('feedback-message');
        messageElement.textContent = msg;

        // Setări de animație variate
        const duration = 12 + Math.random() * 8; // 12s - 20s
        const delay = (index / totalMessages) * 4 + Math.random() * 2; // Spațiere și randomizare
        
        // Poziție de start aleatorie pe axa X (stânga)
        const startX = Math.random() * 80 - 40; // -40% la +40% din centru
        
        messageElement.style.animationDuration = `${duration}s`;
        messageElement.style.animationDelay = `${delay}s`;
        
        // Aplicăm variații de direcție și poziție
        messageElement.style.left = `calc(50% + ${startX}%)`; 
        
        // Asigurăm că fiecare mesaj are un stil unic pentru a nu se suprapune
        messageElement.style.setProperty('--float-x-end', `${Math.random() * 100 - 50}vw`);
        messageElement.style.fontSize = `${1.1 + Math.random() * 0.4}rem`; // Variație mărime

        // Modificăm cheia de animație pentru a folosi poziția X aleatorie
        const styleSheet = document.styleSheets[1]; // Presupunem că feedback.css e al doilea stylesheet
        
        styleSheet.insertRule(`
            @keyframes floatMessage-${index} {
                0% { transform: translate(0, 100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translate(${Math.random() * 50 - 25}vw, -100vh) rotate(${Math.random() * 360}deg); opacity: 0; }
            }
        `, styleSheet.cssRules.length);
        
        messageElement.style.animationName = `floatMessage-${index}`;
        area.appendChild(messageElement);
    });
};

// Inițializare
document.addEventListener('DOMContentLoaded', () => {
    // În mediile de producție, funcția createConfetti ar trebui să fie plasată 
    // într-un fișier comun (e.g., common.js) sau stilul CSS în style.css,
    // dar aici o rulăm direct pentru a simplifica.
    createConfetti(); 
    animateFeedbackMessages();
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