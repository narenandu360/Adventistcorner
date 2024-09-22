document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const story = button.nextElementSibling;
        if (story.style.display === 'block') {
            story.style.display = 'none';
            button.textContent = 'Read Full Story';
        } else {
            story.style.display = 'block';
            button.textContent = 'Hide Story';
        }
    });
});
