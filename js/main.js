let btnAvaliacao = document.getElementsByClassName("avaliacao__selecao__item");
let btnSubmit = document.getElementById("avaliacaoBtn");
let nota = [];

Array.from(btnAvaliacao).forEach(b => {
    b.addEventListener("click", () => {
        if(nota.length === 2 ) {
            alert(`Você já selecionou sua nota`)
        } else {
            nota.push(b.value)
            b.classList.add("avaliacao__selecao__item--ativo")
        }
    })
})

btnSubmit.addEventListener("click", () => {
    if(nota[0] > nota [1]){
        nota.reverse()
    }
    
    let avaliacaoInicial = document.querySelector(".avaliacao")
    avaliacaoInicial.classList.add("sumir")

    let avaliacaoFinal = document.querySelector(".avaliacao__final")
    avaliacaoFinal.style.display = "flex";

    let res = document.querySelector(".res");
    if(nota.length === 2){
        res.innerHTML = `You selected ${nota[0]} out of ${nota[1]}`
    } else {
        res.innerHTML = `You selected ${nota[0]}`
    }
    
})


