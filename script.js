// Array para armazenar os nomes das músicas
const library = [];

// Função para tocar uma música aleatória
function play() {
    if (library.length === 0) {
        alert("Nenhuma música para tocar.")
    } else {
        const randomIndex = Math.floor(Math.random() * library.length);
        const music = library[randomIndex]
        alert(`🎵 Tocando agora: ${music}`)
    }
}
//função para remover todas as musicas
function removeMusic() {
    const nameMusic = prompt("Digite o nome da música para remover:");
    const index = library.indexOf(nameMusic);
    if (index !== -1) {
        library.splice(index, 1)
        alert(`A música "${nameMusic}" foi removida.`)
    } else {
        alert("Música não encontrada.")
    }
}
//função para ordernar as musicas em ordem alfabetica
function listMusic() {
    library.sort()
    alert("Músicas ordenadas em ordem alfabética.")
}
//funçao para limpar a lista
function eraseList() {
    library.length = 0;
    alert("Todas as músicas foram removidas.");
}

// Menu de opções
let option

do {
    option = prompt(`Numero de musicas adicionadas: ${library.length}
            Escolha uma opção:
            1. Adicionar música
            2. Mostrar lista de músicas
            3. Tocar música aleatória
            4. Remover uma musica
            5. Ordernar as musicas em ordem alfabetica
            6. Remover TODAS as musicas
            7. VERSÃO PREMIUM
            8. Sair
        `)

    switch (option) {
        case '1': // Adicionar música
            const name = prompt("Digite o nome da música:")
            library.push(name)
            break

        case '2': // Mostrar lista de músicas
            if (library.length === 0) {
                alert("A lista está vazia.")
            } else {
                alert(`Total de músicas: ${library.length}\n${library.join("\n")}`)
            }
            break

        case '3': // Tocar música aleatória
            play()
            break
        case'4': // remover uma musica
            removeMusic()
            break
        case '5':// ordenar Musicas
            listMusic()
            break
        case '6': // apagar a lista
            eraseList()
            break
        case '7': // ASSINE PREMIUM
            alert(
                `Desbloqueie a Versão Premium! 🎶Com a versão Premium, você ganha funcionalidades exclusivas para transformar sua experiência musical:

                🔁 Duplicação de músicas
                🎧 Criação de playlists inteiras
                🚫 Sem anúncios

                POR APENAS 10 PONTOS NA PARCIAL(1 MÊS)
                TESTE DE 7 DIAS DE GRAÇA
                
                contato: 85 9002-8922`
            )
            break
        case '8': // sair
            alert('Voce escolheu sair!')
            break
        default: 
            alert(`opção invalida!`)
            break
    }

} while (option !== '8')