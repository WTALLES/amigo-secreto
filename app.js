//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaAmigos = [];

function addAmigo(){
    const input = document.getElementById("amigo");
    const nome = input.ariaValueMax.trim();

    if (nome === ""){
        alert ("Por favor, insira um nome válido.");
        return;
    } if (listaAmigos.includes(nome)){
        alert("Esse nome já foi adicionado.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista(){
    const ul = document.getElementById("listaDeAmigos");
    ul.innerHTML = "";

    listaDeAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo(){
    
}



function exibirResultado(nome) {
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `Amigo Secreto: ${nome}`;
    li.classList.add("sorteado");
    resultadoUl.appendChild(li);
}
