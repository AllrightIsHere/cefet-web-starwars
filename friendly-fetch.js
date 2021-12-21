export async function friendlyFetch(url) {
    const cache = localStorage.getItem(url);
    if (cache) return JSON.parse(cache);

    const resposta = await fetch(url)
        .then(res => res.json())
        .then(f => f.results)
        .catch(error => console.log("Filmes não encontrados!"))

    localStorage.setItem(url, JSON.stringify(resposta));

    return resposta;
}