//Deborah jamilly de Abreu - 10420342	
//Guilherme Bertinato - 10428223
//Jean ALex Silva - 10426728
//Pedro Carvalho - 10388298




// Função assíncrona para buscar uma imagem de comida aleatória da API Foodish
async function getRandomFood(){
    // Inicializa um objeto vazio para armazenar os dados da resposta da API
    let data = {}

    // Tenta realizar a chamada à API
    try {
        // URL da API que fornece imagens aleatórias de comida
        let url = `https://foodish-api.com/api`

        // Faz a requisição HTTP usando a função fetch e aguarda a resposta
        let response = await fetch(url)

        // Converte a resposta para formato JSON e armazena em 'data'
        data = await response.json()

        // Exibe o objeto recebido no console para debug
        console.log(data)
    
    // Captura e exibe qualquer erro que ocorra durante a requisição
    } catch(error) {
        console.log(error)
    }

    // Retorna os dados recebidos da API
    return data
}

// Função assíncrona que inicializa o processo e manipula o DOM para exibir a imagem
async function start(){
    // Aguarda o retorno da função getRandomFood e armazena o dado retornado
    let data = await getRandomFood()

    // Extrai o link da imagem do objeto retornado
    let link = data.image   

    // Seleciona o elemento com o ID "text" no HTML
    let text = document.getElementById("text")

    // Insere a imagem no conteúdo HTML usando o link obtido da API
    text.innerHTML = `<img id="imagem" src=${link} alt="Imagem aleatória de comida">`
}

// Chama a função start para iniciar o processo assim que o script for executado
start()

