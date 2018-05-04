(function (){
    window.onhashchange = function () {
        var cursor = document.getElementById('menu-cursor');
        var url = document.URL;

        /*
         Récupération ancre dans l'ul
         */
        function getAnchor() {
            var parts = url.split('#');

            return (parts.length > 1) ? parts[1] : null;
        }

        /*
        Changement de classe en fonction de l'ancre
         */
        var anchor = getAnchor();
        if (anchor != null) {
            switch (anchor) {
                case 'home':
                    cursor.className = 'cursor-home';
                    break;
                case 'services':
                    cursor.className = 'cursor-services';
                    break;
                case 'projects':
                    cursor.className = 'cursor-projects';
                    break;
                case 'contact':
                    cursor.className = 'cursor-contact';
                    break;
            }
        }
    };

    /*
    Gestion évènements menu projets
     */
    var tabMenus = document.querySelectorAll('.tab-navigation li');
    for (var i = 0; i < tabMenus.length; i++) {
        tabMenus[i].addEventListener('click', function() {
           oldActive = document.getElementsByClassName('active-tab')[0];
           oldActive.className = '';
           this.className = 'active-tab';
           active = this;
        });
        tabMenus[i].addEventListener('mouseenter', function() {
            active = document.getElementsByClassName('active-tab')[0];
            if (active != this) {
                active.className = '';
            }
            this.className = 'active-tab';
        });

        tabMenus[i].addEventListener('mouseleave', function() {
            if (!active) {
                active = document.getElementsByClassName('active-tab')[0];
            }
            active.className = 'active-tab';
            if (this != active) {
                this.className = '';
            }
        });
    }

    /*
    Gestion overlay projets sur mobile
     */
    var portfolioElements = document.getElementsByClassName('portfolio-element');
    for (var i = 0; i < portfolioElements.length; i++) {
        portfolioElements[i].addEventListener('click', function() {
            var element = this.getElementsByClassName('portfolio-element-content')[0];
            if (window.getComputedStyle(element).getPropertyValue('opacity') == 1) { element.setAttribute('style', 'opacity: 0;');}
            else {element.setAttribute('style', 'opacity: 1;'); }
        });
    }
})();