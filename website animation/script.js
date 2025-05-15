function startCelebration() {
    const heart = document.querySelector('.heart');
    const card = document.getElementById('card');
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    
    heart.classList.add('clicked');
    heart.querySelector('.click-me').style.display = 'none';
    
    // Show and flip the card
    setTimeout(() => {
        card.classList.add('show');
        setTimeout(() => {
            card.classList.add('flipped');
        }, 300);
    }, 500);

    // Confetti setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const confetti = [];
    const colors = ['#ff4d94', '#ff99cc', '#ffe6f2', '#ff3385'];

    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            angle: Math.random() * 360
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c, i) => {
            c.y += c.speed;
            c.x += Math.sin(c.angle) * 2;
            c.angle += 0.05;
            
            if (c.y > canvas.height) {
                confetti[i] = {
                    x: Math.random() * canvas.width,
                    y: -10,
                    size: c.size,
                    speed: c.speed,
                    color: c.color,
                    angle: c.angle
                };
            }

            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.rotate(c.angle);
            ctx.fillStyle = c.color;
            ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
            ctx.restore();
        });
        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}