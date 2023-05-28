
//exercicío 1

const entrarNumero = prompt("Entre um número");

const dobroNumero = entrarNumero*2;

alert("O dobro do número digitado é " + dobroNumero + ".");

function verificar(){
    const num = document.getElementById('number').value;

    const number =  Number(num);

    if(number%2 == 0) {
        alert("par")
    } else {
        alert("ímpar")
    }
 }



//exercício 2

const entrarValorConta = prompt("Digite o valor da sua conta:");

const percentual = 0.10;

const totalPercent = entrarValorConta * percentual;

const totalConta = parseInt(entrarValorConta)+ parseInt(totalPercent);

alert("O valor total da conta com taxa de serviço é " + totalConta.toFixed(2));


