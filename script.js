document.addEventListener('DOMContentLoaded', function() {
    const candlesIcon = document.getElementById('candlesIcon');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuArrow = document.getElementById('menuArrow');
    const menuCandles = document.getElementById('menuCandles');
    const menuWho = document.getElementById('menuWho');
    const menuLetters = document.getElementById('menuLetters');
    
    function openMenu() {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (candlesIcon) {
        candlesIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            openMenu();
        });
    }
    
    if (menuArrow) {
        menuArrow.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
        });
    }
    
    if (menuCandles) {
        menuCandles.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
            window.scrollTo(0, 0);
        });
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });
    }
    // ГАЛЕРЕЯ - переход на отдельную страницу
    const galleryBtn = document.getElementById('menuGallery');
    
    if (galleryBtn) {
        galleryBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
            window.location.href = 'gallery.html';
        });
    }

    
    if (menuWho) {
        menuWho.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = 'wayf.html';
        });
    }
    
    if (menuLetters) {
        menuLetters.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = 'letters.html';
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });
    
    const menuPanel = document.querySelector('.menu-panel');
    if (menuPanel) {
        menuPanel.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    // ===== СТРАНИЦА "WHO ARE YOU FROM...?" =====
// Проверяем, находимся ли мы на странице wayf.html
if (window.location.pathname.includes('wayf.html') || document.querySelector('.quiz-card')) {
    
    // Переходы по карточкам
    const gameCard = document.getElementById('gameCard');
    const lolCard = document.getElementById('lolCard');
    const seriesCard = document.getElementById('seriesCard');
    
    if (gameCard) {
        gameCard.addEventListener('click', function() {
            window.location.href = 'games.html';
        });
    }
    
    if (lolCard) {
        lolCard.addEventListener('click', function() {
            window.location.href = 'lol.html';
        });
    }
    
       if (seriesCard) {
        seriesCard.addEventListener('click', function() {
            window.location.href = 'series.html';
        });
    }
}

// Меню для страницы wayf.html (если candles icon есть)
const wayfCandlesIcon = document.getElementById('candlesIcon');
if (wayfCandlesIcon && !window.location.pathname.includes('index.html')) {
    // Используем те же функции openMenu/closeMenu, которые уже есть в script.js
    // Просто добавляем обработчик, если они еще не привязаны
    if (typeof openMenu === 'undefined') {
        // Если функций нет, создаем их заново для этой страницы
        const menuOverlay = document.getElementById('menuOverlay');
        const menuArrow = document.getElementById('menuArrow');
        const menuCandles = document.getElementById('menuCandles');
        
        function openMenuWayf() {
            if (menuOverlay) menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMenuWayf() {
            if (menuOverlay) menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        wayfCandlesIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            openMenuWayf();
        });
        
        if (menuArrow) {
            menuArrow.addEventListener('click', function(e) {
                e.stopPropagation();
                closeMenuWayf();
            });
        }
        
        if (menuCandles) {
            menuCandles.addEventListener('click', function(e) {
                e.stopPropagation();
                closeMenuWayf();
                window.scrollTo(0, 0);
            });
        }
        
        if (menuOverlay) {
            menuOverlay.addEventListener('click', function(e) {
                if (e.target === menuOverlay) {
                    closeMenuWayf();
                }
            });
        }
        
        const menuPanel = document.querySelector('.menu-panel');
        if (menuPanel) {
            menuPanel.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
}
});