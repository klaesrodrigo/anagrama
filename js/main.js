var respostaFinal = document.getElementById("resposta");
var palavra = document.getElementById('palavra');

document.getElementById("next").addEventListener('click', function () {

    respostaFinal.textContent = "";
    var letras = [];
    var numeros = [];
    var anagramas = [];

    //divide a palavra em letras sem filtrar repitidas
    var letras = palavra.value.toLowerCase().split("");
    var filtro = [];
    var count = {};
    var repeticao = 1;

    for (var l of letras)
        count[l] = 0;

    //filtra as letras repitidas
    for (var x = 0; x < letras.length; x++) {
        if (filtro.indexOf(letras[x]) == -1)
            filtro.push(letras[x]);

        count[letras[x]] += 1;
    }

    console.log(count);

    var m = 1;
    var n = 0;

    //define o numero de m
    for (var i = letras.length; i > 0; i--)
        m = m * i;

    //define o numero de n

    for (var letra in count) {
        console.log(letra);
        var soma = 1;
        if (count[letra] > 1) {
            for (var k = count[letra]; k > 0; k--)
                soma = soma * k
        } else {
            soma = 0;
        }
        n = n + soma;
    }



    //define o numero de combinações
    if(n>0)
        var combinacoes = m / n;
    else
        var combinacoes = m;

    //adiciona a palavra digitada no anagrama
    anagramas.push(palavra.value);

    //monta o array de anagramas
    while (anagramas.length < combinacoes) {
        numeros = [];
        //monta a ordem dos numeros
        while (numeros.length < letras.length) {
            var aleatorio = Math.floor(Math.random() * letras.length);

            if (numeros.indexOf(aleatorio) == -1)
                numeros.push(aleatorio);
        }

        let anagrama = "";

        //monta o anagrama
        for (var j = 0; j < numeros.length; j++) {
            anagrama = anagrama + letras[numeros[j]];
        }

        //verifica se o anagrama já existe em anagramas
        if (anagramas.indexOf(anagrama) == -1)
            anagramas.push(anagrama);

    }

    var resposta = "";

    //imprime a resposta
    for (var l = 0; l < anagramas.length; l++)
        resposta = resposta + (l + 1) + ") " + anagramas[l].toLowerCase() + "\n";

    respostaFinal.textContent = resposta;
});
