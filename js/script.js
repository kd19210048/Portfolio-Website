document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 200); // Delay each section by 200ms
        } else {
            section.classList.remove('visible');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});