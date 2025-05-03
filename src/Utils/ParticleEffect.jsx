import React, { useEffect } from 'react';

const ParticleEffect = () => {
    useEffect(() => {
        const createParticles = () => {
            const particleCount = 20;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');

                const size = Math.random() * 5 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                const posX = Math.random() * window.innerWidth;
                const posY = Math.random() * window.innerHeight;
                particle.style.left = `${posX}px`;
                particle.style.top = `${posY}px`;

                particle.style.opacity = Math.random() * 0.5 + 0.1;

                const duration = Math.random() * 20 + 10;
                particle.style.animation = `float ${duration}s ease-in-out infinite`;
                particle.style.animationDelay = `${Math.random() * 5}s`;

                document.body.appendChild(particle);

                // Clean up
                setTimeout(() => {
                    particle.remove();
                }, duration * 1000);
            }
        };

        createParticles();
        const intervalId = setInterval(createParticles, 5000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    return null; // This component renders nothing visible itself
};

export default ParticleEffect;
