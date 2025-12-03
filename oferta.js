document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spin-button');
    const resultMessage = document.getElementById('result-message');
    const confettiContainer = document.getElementById('confetti-container');

    // Câștigurile posibile (6 segmente)
    // Corespund cu segmentele din CSS: 60 grade fiecare (360 / 6)
    const prizes = [
        { name: "30%", rotationRange: [0, 60], message: "Felicitări! Ai câștigat -30% reducere!" },
        { name: "10%", rotationRange: [60, 120], message: "Ai câștigat -10% reducere! Nu-i rău deloc." },
        { name: "-20%", rotationRange: [120, 180], message: "WOW! Ai câștigat -20% la orice rezervare!" },
        { name: "Nimic", rotationRange: [180, 240], message: "Data viitoare e cu noroc! Incearcă din nou." },
        { name: "1h Gratuit", rotationRange: [240, 300], message: "Super! 1 oră gratuită la pachetul ales!" },
        { name: "5%", rotationRange: [300, 360], message: "Ai câștigat 5% reducere! Pune deoparte." }
    ];

    let currentRotation = 0;
    
    // --- 1. Funcția de generare fulgi ---
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄️'; 
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 4}s`; // 4-7 secunde
        snowflake.style.opacity = `${Math.random()}`;
        snowflake.style.fontSize = `${Math.random() * 1 + 1}em`;
        document.getElementById('snowflake-container').appendChild(snowflake);

        // Elimină fulgul după ce a căzut
        setTimeout(() => {
            snowflake.remove();
        }, 7000); 
    }

    // Generează continuu fulgi
    setInterval(createSnowflake, 500);


    // --- 2. Funcția de Confetti ---
    function launchConfetti() {
        // Creează un număr de confeti
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Culori aleatoare
            
            // Poziționează confeti în jurul centrului
            confetti.style.left = `${wheel.offsetLeft + wheel.offsetWidth / 2 + (Math.random() - 0.5) * 200}px`;
            confetti.style.top = `${wheel.offsetTop + wheel.offsetHeight / 2 + (Math.random() - 0.5) * 200}px`;
            
            confettiContainer.appendChild(confetti);

            // Setează animația
            confetti.style.animation = `confetti-fall ${Math.random() * 1.5 + 1.5}s ease-out forwards`; 
            
            // Elimină confeti după ce animația s-a terminat
            setTimeout(() => {
                confetti.remove();
            }, 3000); 
        }
    }


    // --- 3. Logica de Rotire ---
    spinButton.addEventListener('click', () => {
        // Dezactivează butonul pentru a preveni rotiri multiple rapide
        spinButton.disabled = true;
        resultMessage.textContent = "Se învârte... norocul tău se decide!";
        
        // 1. Alege un segment câștigător (Indexul în array-ul prizes)
        const winningIndex = Math.floor(Math.random() * prizes.length);
        const winningPrize = prizes[winningIndex];

        // 2. Calculează rotația finală
        // Roata trebuie să se rotească de cel puțin 5 ori (360 * 5)
        // Adăugăm rotația necesară pentru a ajunge în mijlocul segmentului câștigător.
        // Roata se rotește în sensul acelor de ceasornic, dar CSS transform e invers.
        // Indicatorul este la ora 12 (0 grade), și segmentele sunt de 60 de grade.
        
        // Unghiul țintă (centrul segmentului) - De la 0 la 360.
        // Segmentele sunt: 0-60, 60-120, 120-180, 180-240, 240-300, 300-360.
        // Centrul segmentului: 30, 90, 150, 210, 270, 330
        const targetAngle = winningPrize.rotationRange[0] + 30; 
        
        // Calculăm o rotație finală mare, aleatoare, dar care să se termine la unghiul țintă.
        // Rotim în sensul acelor de ceasornic (CSS e negativ)
        const baseSpins = 5; 
        const finalSpinAngle = (360 * baseSpins) - targetAngle;

        // 3. Aplică rotația
        currentRotation += finalSpinAngle; // Adună la rotația precedentă
        wheel.style.transform = `rotate(-${currentRotation}deg)`; // Aplică în CSS

        // 4. Așteaptă terminarea animației (5 secunde din CSS)
        setTimeout(() => {
            // Afișează rezultatul
            resultMessage.innerHTML = `🏆 **${winningPrize.message}** 🥳`;
            
            // Lansează Confetti
            launchConfetti();

            // Reactivează butonul
            spinButton.disabled = false;
        }, 5000); // Trebuie să fie același timp ca și 'transition' din CSS
    });
});