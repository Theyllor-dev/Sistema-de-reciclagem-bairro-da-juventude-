var verificarBtn = document.getElementById("verifica");
var text = document.getElementById("text");
var imagem = document.getElementById("imagem")

// objeto que guarda chave(itens) e seus valores(imagem,cor,cor de texto)
var itens = {
    garrafa: ["vermelha", "lixovermelho.png", "red"],
    plasticos: ["vermelha", "lixovermelho.png", "red"],
    metal: ["amarela","lixoamarelo.png", "#e7dd00"],
    papel: ["azul","lixoazul.png", "blue"],
    vidro: ["verde","lixoverde.png", "green"],

    

}


verificarBtn.addEventListener('click', function(){

    var item = document.getElementById("item").value;
    var chaves = Object.keys(itens)
    var valores = Object.values(itens)

    // percorre o item digitado
    for (let i = 0; i < item.length; i++){
        if (item == chaves[i]){
                
                text.textContent = "Lixeira de cor: " +  valores[i][0]; // mostra a cor na posição ao item
                text.style.color = valores[i][2] // mostra a cor de texto na posição do item
                imagem.src = valores[i][1] // mostra a imagem na posição do item
                return;
            }
            text.textContent = "Item não cadastrado";

                
        }    

})