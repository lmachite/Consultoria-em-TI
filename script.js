/**
 * Lógica de Interatividade do Site
 * Autor: Luis Marcelo Achite
 */

// --- FUNÇÕES DE MODAL ---

/**
 * Abre o modal especificado pelo ID
 * @param {string} modalId 
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impede rolagem do fundo
    }
}

/**
 * Fecha o modal especificado pelo ID
 * @param {string} modalId 
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Libera rolagem
    }
}

// Fechar modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const activeModals = document.querySelectorAll('.modal.active');
        activeModals.forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// --- MENU MOBILE ---

// Inicialização dos eventos do menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Smooth Scroll e fechar menu mobile ao clicar em links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (menu) {
                menu.classList.add('hidden'); 
            }
            
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// --- FAQ ACCORDION ---

/**
 * Alterna a visibilidade da resposta do FAQ
 * @param {HTMLElement} button - O botão que foi clicado
 */
function toggleFaq(button) {
    const parent = button.parentElement;
    
    // Fecha outros abertos (efeito sanfona único)
    const allFaqs = document.querySelectorAll('.faq-answer').forEach(el => {
        if (el !== parent.querySelector('.faq-answer')) {
            el.parentElement.classList.remove('faq-active');
        }
    });

    parent.classList.toggle('faq-active');
}

// --- NAVBAR SCROLL EFFECT ---

// Adiciona sombra na navbar ao rolar a página
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 10) {
            nav.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    }
});