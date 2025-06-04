(function() {
    const card = document.querySelector('.card1-container');
    const cardElement = card.querySelector('.card1');
    const glare = card.querySelector('.card1-glare');
    const foil = card.querySelector('.card1-foil');
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 24;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 24;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (e.clientX - rect.left) / rect.width * 100;
        const glareY = (e.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.5';
    });
    card.addEventListener('mouseleave', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
    });
    card.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = touch.clientX - centerX;
        const mouseY = touch.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 24;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 24;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (touch.clientX - rect.left) / rect.width * 100;
        const glareY = (touch.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.5';
    });
    card.addEventListener('touchend', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
    });
})();
(function() {
    const card = document.querySelector('.card2-container');
    const cardElement = card.querySelector('.card2');
    const glare = card.querySelector('.card2-glare');
    const foil = card.querySelector('.card2-foil');
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (e.clientX - rect.left) / rect.width * 100;
        const glareY = (e.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 10%, rgba(120,255,200,0.4) 30%, rgba(0,180,255,0.3) 50%, rgba(0,0,0,0.1) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.7';
        const rotationIntensity = Math.abs(rotateX) + Math.abs(rotateY);
        const normalizedIntensity = rotationIntensity / 24;
        cardElement.style.boxShadow = `
            0 10px 30px rgba(0,0,0,0.2),
            0 0 ${20 + normalizedIntensity * 20}px rgba(120,255,100,${0.3 + normalizedIntensity * 0.4}),
            0 0 ${40 + normalizedIntensity * 30}px rgba(0,200,255,${0.2 + normalizedIntensity * 0.3})
        `;
    });
    card.addEventListener('mouseleave', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
        cardElement.style.boxShadow = `
            0 10px 30px rgba(0,0,0,0.2),
            0 0 20px rgba(120,255,100,0.3),
            0 0 40px rgba(0,200,255,0.2)
        `;
    });
    card.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = touch.clientX - centerX;
        const mouseY = touch.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (touch.clientX - rect.left) / rect.width * 100;
        const glareY = (touch.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 10%, rgba(120,255,200,0.4) 30%, rgba(0,180,255,0.3) 50%, rgba(0,0,0,0.1) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.7';
        const rotationIntensity = Math.abs(rotateX) + Math.abs(rotateY);
        const normalizedIntensity = rotationIntensity / 24;
        cardElement.style.boxShadow = `
            0 10px 30px rgba(0,0,0,0.2),
            0 0 ${20 + normalizedIntensity * 20}px rgba(120,255,100,${0.3 + normalizedIntensity * 0.4}),
            0 0 ${40 + normalizedIntensity * 30}px rgba(0,200,255,${0.2 + normalizedIntensity * 0.3})
        `;
    });
    card.addEventListener('touchend', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
        cardElement.style.boxShadow = `
            0 10px 30px rgba(0,0,0,0.2),
            0 0 20px rgba(120,255,100,0.3),
            0 0 40px rgba(0,200,255,0.2)
        `;
    });
})();
(function() {
    const card = document.querySelector('.card3-container');
    const cardElement = card.querySelector('.card3');
    const glare = card.querySelector('.card3-glare');
    const foil = card.querySelector('.card3-foil');
    const holoFoil = card.querySelector('.card3-holo');
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (e.clientX - rect.left) / rect.width * 100;
        const glareY = (e.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.5';
        holoFoil.style.opacity = '0.7';
        const percentX = (e.clientX - rect.left) / rect.width * 100;
        const percentY = (e.clientY - rect.top) / rect.height * 100;
        holoFoil.style.backgroundPosition = `${percentX}% ${percentY}%`;
    });
    card.addEventListener('mouseleave', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
        holoFoil.style.opacity = '0';
    });
    card.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = touch.clientX - centerX;
        const mouseY = touch.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (touch.clientX - rect.left) / rect.width * 100;
        const glareY = (touch.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.5';
        holoFoil.style.opacity = '0.7';
        const percentX = (touch.clientX - rect.left) / rect.width * 100;
        const percentY = (touch.clientY - rect.top) / rect.height * 100;
        holoFoil.style.backgroundPosition = `${percentX}% ${percentY}%`;
    });
    card.addEventListener('touchend', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
        holoFoil.style.opacity = '0';
    });
})();
(function() {
    const card = document.querySelector('.card4-container');
    const cardElement = card.querySelector('.card4');
    const glare = card.querySelector('.card4-glare');
    const foil = card.querySelector('.card4-foil');
    const holographic = card.querySelector('.card4-holo');
    const rainbow = card.querySelector('.card4-rainbow');
    let rainbowAnimationActive = false;
    let rainbowFrame;
    let hue = 0;
    function animateRainbow() {
        hue = (hue + 1) % 360;
        rainbow.style.filter = `hue-rotate(${hue}deg)`;
        if (rainbowAnimationActive) {
            rainbowFrame = requestAnimationFrame(animateRainbow);
        }
    }
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const normalizedX = mouseX / (rect.width / 2);
        const normalizedY = mouseY / (rect.height / 2);
        const rotateY = normalizedX * 12;
        const rotateX = -1 * normalizedY * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (e.clientX - rect.left) / rect.width * 100;
        const glareY = (e.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        holographic.style.opacity = `${Math.abs(normalizedX * 0.5) + 0.2}`;
        const hueRotate = (normalizedX * 180) + (normalizedY * 90);
        holographic.style.filter = `hue-rotate(${hueRotate}deg)`;
        foil.style.opacity = '0.5';
        rainbow.style.opacity = '0.8';
        if (!rainbowAnimationActive) {
            rainbowAnimationActive = true;
            animateRainbow();
        }
    });
    card.addEventListener('mouseleave', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
        holographic.style.opacity = '0';
        rainbow.style.opacity = '0';
        rainbowAnimationActive = false;
        cancelAnimationFrame(rainbowFrame);
    });
    card.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = touch.clientX - centerX;
        const mouseY = touch.clientY - centerY;
        const normalizedX = mouseX / (rect.width / 2);
        const normalizedY = mouseY / (rect.height / 2);
        const rotateY = normalizedX * 12;
        const rotateX = -1 * normalizedY * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (touch.clientX - rect.left) / rect.width * 100;
        const glareY = (touch.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        holographic.style.opacity = `${Math.abs(normalizedX * 0.5) + 0.2}`;
        const hueRotate = (normalizedX * 180) + (normalizedY * 90);
        holographic.style.filter = `hue-rotate(${hueRotate}deg)`;
        foil.style.opacity = '0.5';
        rainbow.style.opacity = '0.8';
        if (!rainbowAnimationActive) {
            rainbowAnimationActive = true;
            animateRainbow();
        }
    });
    card.addEventListener('touchend', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
        holographic.style.opacity = '0';
        rainbow.style.opacity = '0';
        rainbowAnimationActive = false;
        cancelAnimationFrame(rainbowFrame);
    });
})();
(function() {
    const card = document.querySelector('.card5-container');
    const cardElement = card.querySelector('.card5');
    const glare = card.querySelector('.card5-glare');
    const foil = card.querySelector('.card5-foil');
    const cardImg = card.querySelector('.card5-img');
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (e.clientX - rect.left) / rect.width * 100;
        const glareY = (e.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.5';
        cardElement.classList.add('negative-effect');
        const hueRotation = ((glareX + glareY) / 2) * 3.6;
        cardImg.style.filter = `invert(1) hue-rotate(${hueRotation}deg)`;
    });
    card.addEventListener('mouseleave', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
        cardElement.classList.remove('negative-effect');
        cardImg.style.filter = '';
    });
    card.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = touch.clientX - centerX;
        const mouseY = touch.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (touch.clientX - rect.left) / rect.width * 100;
        const glareY = (touch.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.5';
        cardElement.classList.add('negative-effect');
        const hueRotation = ((glareX + glareY) / 2) * 3.6;
        cardImg.style.filter = `invert(1) hue-rotate(${hueRotation}deg)`;
    });
    card.addEventListener('touchend', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
        cardElement.classList.remove('negative-effect');
        cardImg.style.filter = '';
    });
})();
(function() {
    const card = document.querySelector('.card6-container');
    const cardElement = card.querySelector('.card6');
    const glare = card.querySelector('.card6-glare');
    const foil = card.querySelector('.card6-foil');
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (e.clientX - rect.left) / rect.width * 100;
        const glareY = (e.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.7';
        const bgPosX = ((e.clientX - rect.left) / rect.width) * 100;
        const bgPosY = ((e.clientY - rect.top) / rect.height) * 100;
        foil.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    });
    card.addEventListener('mouseleave', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
    });
    card.addEventListener('touchmove', function(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = touch.clientX - centerX;
        const mouseY = touch.clientY - centerY;
        const rotateY = (mouseX / (rect.width / 2)) * 12;
        const rotateX = -1 * (mouseY / (rect.height / 2)) * 12;
        cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const glareX = (touch.clientX - rect.left) / rect.width * 100;
        const glareY = (touch.clientY - rect.top) / rect.height * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0.4) 30%, rgba(0,0,0,0.3) 80%)`;
        glare.style.opacity = '1';
        foil.style.opacity = '0.7';
        const bgPosX = ((touch.clientX - rect.left) / rect.width) * 100;
        const bgPosY = ((touch.clientY - rect.top) / rect.height) * 100;
        foil.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    });
    card.addEventListener('touchend', function() {
        cardElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
        glare.style.opacity = '0';
        foil.style.opacity = '0';
    });
})();
