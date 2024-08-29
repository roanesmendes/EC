// Função para verificar a nota e manipular o parágrafo "resultado"
function verificarNota() {
    var nota = document.getElementById("nota").value;
	nota = nota.replace(",", ".");
	nota = parseFloat(nota);
    var notaArredondada = Math.round(nota);  // Arredondar a nota para o inteiro mais próximo
    var resultado = document.getElementById("resultado");
    var mensagemMotivacional = document.getElementById("mensagemMotivacional");
	
	console.log(nota);
	console.log(notaArredondada);

    if (notaArredondada >= 6) {
        resultado.textContent = "Você Passou!!";
    } else if (notaArredondada > 5 && notaArredondada < 7) {
        resultado.textContent = "Estude mais";
    } else {
        resultado.textContent = "Não desista.";
    }

    // Usando switch para apresentar uma mensagem motivacional baseada na nota arredondada
    switch (notaArredondada) {
        case 10:
            mensagemMotivacional.textContent = "Parabéns! Você é incrível, continue assim!";
            break;
        case 9:
            mensagemMotivacional.textContent = "Mandou bem! Continue assim!";
            break;
        case 8:
            mensagemMotivacional.textContent = "Muito bom! Um esforço admirável!";
            break;
        case 7:
            mensagemMotivacional.textContent = "Bom trabalho! Continue se esforçando!";
            break;
        case 6:
            mensagemMotivacional.textContent = "Não fez mais que a sua obrigação!";
            break;
        case 5:
            mensagemMotivacional.textContent = "Poxa, bora lá, sei que você pode mais!";
            break;
        case 4:
            mensagemMotivacional.textContent = "Tente mais!";
            break;
        case 3:
            mensagemMotivacional.textContent = "Não desanime! Use isso como uma lição.";
            break;
        case 2:
            mensagemMotivacional.textContent = "Você estava indo tão bem...";
            break;
        case 1:
            mensagemMotivacional.textContent = "Cada passo é um avanço. Continue tentando!";
            break;
        case 0:
            mensagemMotivacional.textContent = "Próxima aula, tem prova, estude!";
            break;
        default:
            mensagemMotivacional.textContent = "Isso não existe.";
            break;
    }
}

// Função para limpar o parágrafo "resultado" e "mensagemMotivacional" quando o valor do input for alterado
function limparResultado() {
    document.getElementById("resultado").textContent = "";
    document.getElementById("mensagemMotivacional").textContent = "";
}

// Adicionando os eventos de clique aos botões para que sempre chamem as funções
//document.getElementById("verificarNotaBtn").addEventListener("click", verificarNota);

// Adicionando o evento de input ao campo da nota para limpar os parágrafos "resultado" e "mensagemMotivacional"
document.getElementById("nota").addEventListener("input", limparResultado);
