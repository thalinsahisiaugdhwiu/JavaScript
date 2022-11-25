function pegarCorBotao(el){
    var botao1 = document.getElementById(el).id;
    var res = document.getElementById("res");

if (botao1 == "verde"){
    res.innerHTML = "Motorista pode avançar";
    res.style.color = "#00ff00";
}
else if (botao1 == "amarelo"){
    res.innerHTML = "Reduza a velocidade";
    res.style.color = "#ffd700";
}
else if(botao1 == "vermelho"){
    res.innerHTML = "Pare";
    res.style.color = "#ff0000";
}else{
    res.innerHTML = "DIGITE UMAS DAS OPÇÕES SOCILITADAS";
    res.style.color = "#A020F0";
}
}
