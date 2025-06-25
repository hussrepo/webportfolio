// Function to reload the page when clicking "Home" while already on the home page
function reloadHome(event) {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        event.preventDefault(); // Prevent default link behavior
        location.reload(); // Reload the current page
    }
}

// Sparkle background effect
(function createSparkles() {
    const sparkleBg = document.getElementById('sparkle-bg');
    if (!sparkleBg) return;
    const sparkleCount = 50;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        if (Math.random() < 0.2) sparkle.classList.add('star-4');
        // Randomize position, size, blur, and animation duration
        const size = Math.random() * 2 + 3; // 3px to 5px
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const blur = Math.random() * 0.7 + 0.3; // 0.3px to 1px
        const duration = Math.random() * 2 + 3; // 3s to 5s
        // Randomize floating direction and distance
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 30 + 10; // 10px to 40px
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        // Set initial position and style
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${left}vw`;
        sparkle.style.top = `${top}vh`;
        sparkle.style.filter = `blur(${blur}px) brightness(1.7)`;
        sparkle.style.animation = `sparkle-float-${i} ${duration}s ease-in-out infinite alternate`;
        // Create a unique keyframes rule for this sparkle
        const styleSheet = document.styleSheets[0];
        const keyframes = `@keyframes sparkle-float-${i} {\n  0% { transform: translate(0, 0) scale(1); opacity: 0.8; }\n  50% { transform: translate(${dx}px, ${dy}px) scale(1.2); opacity: 1; }\n  100% { transform: translate(0, 0) scale(1); opacity: 0.7; }\n}`;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        sparkleBg.appendChild(sparkle);
    }
})();
