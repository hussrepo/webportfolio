// Function to reload the page when clicking "Home" while already on the home page
function reloadHome(event) {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        event.preventDefault(); // Prevent default link behavior
        location.reload(); // Reload the current page
    }
}

// Enhanced Sparkle background effect
(function createSparkles() {
    const sparkleBg = document.getElementById('sparkle-bg');
    if (!sparkleBg) return;
    const sparkleCount = 70; // Increase sparkle count for a denser effect
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        if (Math.random() < 0.3) sparkle.classList.add('star-4'); // Slightly increase chance of larger sparkles
        // Randomize position, size, blur, and animation duration
        const size = Math.random() * 2 + 2; // 2px to 4px for smaller sparkles
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const blur = Math.random() * 1.5 + 0.5; // 0.5px to 2px for softer glow
        const brightness = Math.random() * 0.5 + 1.5; // 1.5 to 2 for brighter sparkles
        const duration = Math.random() * 3 + 4; // 4s to 7s for slower animations
        // Randomize floating direction and distance
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 20 + 10; // 10px to 30px for subtle movement
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        // Set initial position and style
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${left}vw`;
        sparkle.style.top = `${top}vh`;
        sparkle.style.filter = `blur(${blur}px) brightness(${brightness})`;
        sparkle.style.animation = `sparkle-float-${i} ${duration}s ease-in-out infinite alternate`;
        // Create a unique keyframes rule for this sparkle
        const styleSheet = document.styleSheets[0];
        const keyframes = `@keyframes sparkle-float-${i} {\n  0% { transform: translate(0, 0) scale(1); opacity: 0.9; }\n  50% { transform: translate(${dx}px, ${dy}px) scale(1.3); opacity: 1; }\n  100% { transform: translate(0, 0) scale(1); opacity: 0.8; }\n}`;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        sparkleBg.appendChild(sparkle);
    }
})();

// Hamburger menu functionality
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    if (!hamburger || !nav) return;
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
    // Optional: Close nav when clicking a link (for single-page feel)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
}
document.addEventListener('DOMContentLoaded', setupHamburgerMenu);
