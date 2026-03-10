// menu.js - Gestion du menu latéral

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments
    const planeBtn = document.getElementById('plane-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    // Vérifier que les éléments existent
    if (!planeBtn || !sidebar || !overlay || !closeBtn) {
        console.error('Éléments du menu non trouvés');
        return;
    }

    // Fonction pour ouvrir le menu
    function openMenu() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }

    // Événement : Clic sur l'avion pour ouvrir
    planeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openMenu();
    });

    // Événement : Clic sur le bouton X pour fermer
    closeBtn.addEventListener('click', closeMenu);

    // Événement : Clic sur l'overlay pour fermer
    overlay.addEventListener('click', closeMenu);

    // Événement : Touche Échap pour fermer
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});
