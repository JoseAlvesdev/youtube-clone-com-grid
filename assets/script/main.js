"use strict";

(function () {

  const main = document.querySelector('.js-main');

  const video = [
    {
      "src": "./assets/images/pictures/thumb-1-picture.svg",
      "title": "Geração Tech Unimed - BH - Ciência de Dados",
      "info": "711 visualizações Transmitido há 2 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-2-picture.svg",
      "title": "Scrum Talks",
      "info": "1,6 mil visualizações Transmitido há 3 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-3-picture.svg",
      "title": "Machine Learning Avançado - Fast Track",
      "info": "1,7 mil visualizações Transmitido há 4 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-4-picture.svg",
      "title": "Global Skills #2 - Project Planning",
      "info": "2,1 mil visualizações Transmitido há 2 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-3-picture.svg",
      "title": "Machine Learning Avançado - Fast Track",
      "info": "1,7 mil visualizações Transmitido há 4 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-1-picture.svg",
      "title": "Geração Tech Unimed - BH - Ciência de Dados",
      "info": "711 visualizações Transmitido há 2 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-2-picture.svg",
      "title": "Scrum Talks",
      "info": "1,6 mil visualizações Transmitido há 3 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-3-picture.svg",
      "title": "Machine Learning Avançado - Fast Track",
      "info": "1,7 mil visualizações Transmitido há 4 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-4-picture.svg",
      "title": "Global Skills #2 - Project Planning",
      "info": "2,1 mil visualizações Transmitido há 2 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-1-picture.svg",
      "title": "Geração Tech Unimed - BH - Ciência de Dados",
      "info": "711 visualizações Transmitido há 2 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-2-picture.svg",
      "title": "Scrum Talks",
      "info": "1,6 mil visualizações Transmitido há 3 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-3-picture.svg",
      "title": "Machine Learning Avançado - Fast Track",
      "info": "1,7 mil visualizações Transmitido há 4 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-4-picture.svg",
      "title": "Global Skills #2 - Project Planning",
      "info": "2,1 mil visualizações Transmitido há 2 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-3-picture.svg",
      "title": "Machine Learning Avançado - Fast Track",
      "info": "1,7 mil visualizações Transmitido há 4 dias"
    },
    {
      "src": "./assets/images/pictures/thumb-1-picture.svg",
      "title": "Geração Tech Unimed - BH - Ciência de Dados",
      "info": "711 visualizações Transmitido há 2 dias"
    },
  ];

  main.innerHTML = video.map(video => {
    return `
      <a href="" class="l-main__video">
        <img src="${video.src}" alt="" class="l-main__thumb">
        <div class="l-main__channel">
          <img src="./assets/images/pictures/avatar-dio-channel.svg" alt="" class="c-avatar l-main__avatar">
          <span class="l-main__title">${video.title}</span>
          <span class="l-main__info">${video.info}</span>
        </div>
      </a>
    `;
  }).join('');


})();