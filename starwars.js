// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from "./music.js"
import { decimalToRoman } from "./roman.js"

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
        liEl.innerHTML = `Episode ${decimalToRoman(filme.episode_id).padEnd(3, ' ')} - ${filme.title}`
        filmesUlEl.appendChild(liEl);
    });
}

preencherFilmes(filmes);