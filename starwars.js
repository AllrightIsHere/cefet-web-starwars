// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from "./music.js"
import { decimalToRoman } from "./roman.js"
import { restartAnimation } from "./restart-animation.js"

const API_ENDPOINT = 'https://swapi.dev/api'

const musica = {
    audioUrl: 'audio/tema-sw.mp3',
    coverImageUrl: 'imgs/logo.svg',
    title: 'Intro',
    artist: 'John Williams'
}

play(musica, document.body);

const filmes = await fetch(`${API_ENDPOINT}/films`)
    .then(response => response.json())
    .then(f => f.results)
    .catch(e => console.log("Filmes não encontrados!"))

const filmesUlEl = document.querySelector('#filmes ul');

function preencherFilmes(filmes) {
    filmesUlEl.innerHTML = '';

    filmes.forEach(filme => {
        const liEl = document.createElement('li');
        const episode = decimalToRoman(filme.episode_id);
        const title = filme.title;
        liEl.innerHTML = `Episode ${episode.padEnd(3, ' ')} - ${title}`

        liEl.addEventListener('click', (e) => {
            const introEl = document.querySelector('pre.introducao');
            introEl.innerHTML = `Episode ${episode}
            ${title.toUpperCase()}
            
            ${filme.opening_crawl}`;

            restartAnimation(introEl);
        });
        filmesUlEl.appendChild(liEl);
    });
}

preencherFilmes(filmes);