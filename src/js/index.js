/*
 OBJETIVO 1 - Quando passar o mouse em cima do personagem temos que:
 
 - Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele.
 
 - Retirar a classe selecionada do personagem que está selecionado.


 OBJETIVO 2 - Quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande.
 
 - Alterar a imagem do jogador 1
 
 - Alterar o nome do jogador 1 
*/

//console.log('Olá Mundão')

// Seleção de todos os personagens em uma constante
const personagens = document.querySelectorAll('.personagem')
//console.log('personagens')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter',() => {
        //Não deixar o Ultron jogável    
        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado === 'ultron') return;

        /* OBJETIVO 1*/
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        /* OBJETIVO 2*/
        //console.log('idSelecionado', idSelecionado);
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado
    
    })
})

