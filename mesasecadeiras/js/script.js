document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile Toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('active');
            // Acessibilidade: Atualizar aria-expanded
            const isExpanded = navbarCollapse.classList.contains('active');
            navbarToggler.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Atualizar ano no rodapé
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Lógica para fechar dropdowns se clicar fora (opcional, mas bom para UX)
    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.navbar-nav .dropdown');
        let isClickInsideDropdown = false;

        dropdowns.forEach(dropdown => {
            if (dropdown.contains(event.target)) {
                isClickInsideDropdown = true;
            }
        });

        if (!isClickInsideDropdown) {
            const openDropdownMenus = document.querySelectorAll('.dropdown-menu');
            openDropdownMenus.forEach(menu => {
                // Esta lógica de fechar ao clicar fora pode ser complexa com :hover
                // Para menus baseados em hover, geralmente não se adiciona este fechamento por JS
                // Se o menu fosse ativado por clique, seria mais direto.
            });
        }
    });

    // Outras interatividades podem ser adicionadas aqui, como:
    // - Carrosséis de imagens
    // - Validação de formulários
    // - Animações ao rolar a página (scroll animations)
    // - Lazy loading para imagens (embora o ideal seja via Intersection Observer API)

    console.log('JavaScript carregado e pronto!');
});

