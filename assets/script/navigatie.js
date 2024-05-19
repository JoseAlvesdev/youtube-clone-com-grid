"use strict";

(function () {

    const navigatie = document.querySelector('.js-navigatie');

    const navItems = [
        {
            "icon": "c-icon--home",
            "text": "Início"
        },
        {
            "icon": "c-icon--compass",
            "text": "Explorar"
        },
        {
            "icon": "c-icon--youtube",
            "text": "Inscrições"
        },
        {
            "icon": "c-icon--disc",
            "text": "YouTube Music"
        },
        {
            "icon": "c-icon--thumbs-up",
            "text": "Vídeos que gostei"
        },
        {
            "icon": "c-icon--clock",
            "text": "Assistir mais tarde"
        },
        {
            "icon": "c-icon--download",
            "text": "Downloads"
        },
        {
            "icon": "c-icon--film",
            "text": "Filmes"
        },
        {
            "icon": "c-icon--book",
            "text": "Aprender"
        },
        {
            "icon": "c-icon--award",
            "text": "Esportes"
        }
    ];

    navigatie.innerHTML = navItems.map(item => {
        return `
            <a href="" class="l-navigatie__link u-flex-h-start">
              <span class="c-icon ${item.icon}"></span>
              <span class="l-navigatie__text">${item.text}</span>
            </a>
        `;
    }).join('');

})();