// Array contendo os projetos
const projects = [
    {
        title: "First Robot",
        description: "O 'First Robot' é um projeto inovador que combina a funcionalidade de um braço robótico montado sobre uma plataforma 4WD, controlado remotamente via interface web.",
        image: "/Admin/Public/img/Project_HPE.png",
        date: "2024-08-20" // Data de última atualização
    }
    // Adicione mais projetos aqui...
];

// Código para manipular os projetos na página Projects e Home

document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll('.project-item');

    // Comportamento de expansão para os itens de projeto
    projectItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            if (!this.classList.contains('expanded')) {
                this.style.maxHeight = "300px"; // Expande um pouco ao passar o mouse
            }
        });

        item.addEventListener('mouseout', function() {
            if (!this.classList.contains('expanded')) {
                this.style.maxHeight = "250px"; // Volta à altura original se não estiver expandido
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

    // Atualiza o feed de notícias na página Home
    const newsContainer = document.getElementById('news-project-container');

    if (newsContainer) {
        // Ordena os projetos por data (os mais recentes primeiro)
        projects.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Limita o número de atualizações mostradas no feed (por exemplo, 3)
        const latestProjects = projects.slice(0, 3);

        // Gera o HTML para o feed
        latestProjects.forEach(project => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            
            newsItem.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <small>Atualizado em: ${project.date}</small>
            `;
            
            newsContainer.appendChild(newsItem);
        });
    }
});
