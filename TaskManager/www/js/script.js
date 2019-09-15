var prioridade = 5;
console.log(prioridade);
function setColor(n){
    if (prioridade == 1){
        return ("#33FF00");
    }
    else if (prioridade == 2){
        return ("#99FF00");
    }
    else if (prioridade == 3){
        return ("#FFFF00");
    }
    else if (prioridade == 4){
        return ("#FF9900");
    }
    else{
        return ("#FF3300");
    }
}
function prioridadeSelect(n){
    prioridade = n;
    document.getElementById("group-prioridade").style.borderColor = setColor(prioridade);
}