document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('ul');
    const image = document.querySelector('.mulher img');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); // Alterna a exibição do menu
        
        // Verifica a classe ativa do menu para ajustar a posição da imagem
        if (menu.classList.contains('active')) {
            image.style.top = '266px'; 
        } else {
            image.style.top = '0'; 
        }
    });
});