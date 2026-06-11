document.querySelectorAll(
'.feature-card,.program-card,.support-card,.stat-card'
).forEach(card=>{

    card.addEventListener('mousemove',(e)=>{

        const rect = card.getBoundingClientRect();

        card.style.setProperty(
            '--x',
            `${e.clientX - rect.left}px`
        );

        card.style.setProperty(
            '--y',
            `${e.clientY - rect.top}px`
        );
    });

});