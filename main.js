document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'rgba(0, 0, 500, 0.9)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    });
});