const botoes = document.querySelectorAll(".botao");
console.log(botoes)
for(let i=0; i <  botoes.length; i++){
    console.log(i);
}
for(let i=1; i <  botoes.length; i++){
    console.log(i);
}
for(let i=2; i <  botoes.length; i++){
    console.log(i);
}
for(let i=3; i <  botoes.length; i++){
    console.log(i);
}
botoes[i].onclick = function(){
    
    botoes[i].classList.add("ativo");
}
for(let j=0;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
}
for(let j=1;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
}
for(let j=2;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
}
for(let j=3;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
}
