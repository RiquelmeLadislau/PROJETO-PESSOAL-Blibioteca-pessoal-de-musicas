// Array para armazenar os nomes das músicas
const library = [];

// Função para tocar uma música aleatória
function tocarAleatoria() {
    if (library.length === 0) {
        alert("Nenhuma música para tocar.")
    } else {
        const randomIndex = Math.floor(Math.random() * library.length);
        const music = library[randomIndex]
        alert(`🎵 Tocando agora: ${music}`)
    }
}

// Menu de opções
let option

do {
    option = parseInt(
        prompt(`Numero de musicas adicionadas: ${library.length}s
            Escolha uma opção:
            1. Adicionar música
            2. Mostrar lista de músicas
            3. Tocar música aleatória
            4. Sair
        `)
    )

    switch (option) {
        case 1: // Adicionar música
            const name = prompt("Digite o nome da música:")
            library.push(name)
            break

        case 2: // Mostrar lista de músicas
            if (library.length === 0) {
                alert("A lista está vazia.")
            } else {
                alert(`Total de músicas: ${library.length}\n${library.join("\n")}`)
            }
            break

        case 3: // Tocar música aleatória
            tocarAleatoria()
            break
            
        default: // opção invalida
            alert("Opção inválida. Tente novamente.")
            break
    }
} while (option !== '4')