async function getRandomFood(){
    let data = {}
    try {
        let url = `https://foodish-api.com/api`
        let response = await fetch(url )
        data = await response.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
    return data
}

async function start(){
    let data = await getRandomFood()
    let link = data.image   
    let text = document.getElementById("text")
    text.innerHTML = `<img id="imagem" src=${link} alt="Imagem aleatória de comida">`
}

start()
