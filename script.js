document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createActiveBgElements();
    initTimers();
    initFlickerEffect();
});

function createParticles() {
    const container = document.getElementById('particles');
    const count = 30;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = '-10px';
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        
        container.appendChild(particle);
    }
}

function createActiveBgElements() {
    const container = document.getElementById('active-bg-elements');
    const count = 8;
    
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.classList.add('active-bg-element');
        
        element.style.width = `${Math.random() * 300 + 100}px`;
        element.style.height = element.style.width;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDuration = `${Math.random() * 10 + 10}s`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(element);
    }
}

function initTimers() {
    const TARGET_DATES = {
        VACATION: new Date('2025-05-03T00:01:00'),
        BIRTHDAY: new Date('2025-05-01T00:01:00'),
        NEW_YEAR: new Date('2025-12-31T00:01:00')
    };

    setInterval(() => {
        updateTimer(TARGET_DATES.VACATION, 'vac');
        updateTimer(TARGET_DATES.BIRTHDAY, 'bd');
        updateTimer(TARGET_DATES.NEW_YEAR, 'ny');
    }, 1000);
}

function updateTimer(targetDate, prefix) {
    const now = new Date();
    const distance = targetDate - now;
    
    if (distance < 0) {
        document.getElementById(`${prefix}-timer`).innerHTML = `
            <div class="timer-unit" style="grid-column: 1 / -1; text-align: center;">
                <div class="timer-value">✓</div>
                <div class="timer-label">Событие наступило!</div>
            </div>`;
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById(`${prefix}-days`).textContent = days.toString().padStart(2, '0');
    document.getElementById(`${prefix}-hours`).textContent = hours.toString().padStart(2, '0');
    document.getElementById(`${prefix}-minutes`).textContent = minutes.toString().padStart(2, '0');
    document.getElementById(`${prefix}-seconds`).textContent = seconds.toString().padStart(2, '0');
}

function initFlickerEffect() {
    setInterval(() => {
        document.querySelectorAll('.menu-item').forEach(item => {
            if (Math.random() > 0.8) {
                item.style.opacity = 0.7 + Math.random() * 0.3;
            }
        });
    }, 300);
}