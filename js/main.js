//selecionando botões
let btnAvaliacao = document.getElementsByClassName("avaliacao__selecao__item");
let btnSubmit = document.getElementById("avaliacaoBtn");

//Array com resultado
let nota = [];

//Capturando todos botões relacionados a nota final
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

//Imprimindo resultado na tela
btnSubmit.addEventListener("click", () => {
    
    //Organizando array do resultado sempre do menor para o maior
    if(nota[0] > nota [1]){
        nota.reverse()
    }
    //Removendo tela inicial
    let avaliacaoInicial = document.querySelector(".avaliacao")
    avaliacaoInicial.classList.add("sumir")

    //Exibindo tela final
    let avaliacaoFinal = document.querySelector(".avaliacao__final")
    avaliacaoFinal.style.display = "flex";

    //Imprimindo resultado
    let res = document.querySelector(".res");
    if(nota.length === 2){
        res.innerHTML = `Você selecionou de ${nota[0]} a ${nota[1]}`
    } else {
        res.innerHTML = `Você selecionou ${nota[0]}`
    }

})


