// Comentário
/* Comentário
Comentário */

document.querySelectorAll('.personagem')

const personagens = document.querySelectorAll('.personagem');

// passo 2
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        // passo 3
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        // OBJETIVO 2
        // passo 1
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // passo 2
        const idPersonagem = personagem.attributes.id.value
        imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;

        // passo 3
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})