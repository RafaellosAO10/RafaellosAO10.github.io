document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            if (!this.classList.contains('expanded')) {
                this.style.maxHeight = "350px"; // Expande um pouco ao passar o mouse
            }
        });

        item.addEventListener('mouseout', function() {
            if (!this.classList.contains('expanded')) {
                this.style.maxHeight = "200px"; // Volta à altura original se não estiver expandido
            }
        });

        item.addEventListener('click', function() {
            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
                this.style.maxHeight = "200px"; // Contrai de volta ao tamanho inicial
            } else {
                this.classList.add('expanded');
                this.style.maxHeight = "1000px"; // Expansão completa ao clicar
            }
        });
    });
});
