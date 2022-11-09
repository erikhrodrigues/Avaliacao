let btnAvaliacao = document.getElementsByClassName("avaliacao__selecao__item");
let nota = []
Array.from(btnAvaliacao).forEach(b => {
    b.addEventListener("click", () => {
        if(nota.length === 2 ) {
            alert(`Você já selecionou sua nota`)
            
            
        } else {
            return nota.push(b.value)
            
        }
    })
})


