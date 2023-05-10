
//exercicío 1

const entrarNumero = prompt("Entre um número");

const dobroNumero = entrarNumero*2

alert("O dobro do número digitado é " + dobroNumero + ".");

//exercício 2

const entrarValorConta = prompt("Digite o valor da sua conta:");

const percentual = 0.10;

const totalPercent = entrarValorConta * percentual;

const totalConta = parseInt(entrarValorConta)+ parseInt(totalPercent);

alert("O valor total da conta com taxa de serviço é " + totalConta.toFixed(2));


//exercício 3

const valorContaPizza = prompt("Digite o valor da sua conta:");

const numPessoas = prompt("Informe o número de pessoas pagantes:");

const valorPessoa = valorContaPizza/numPessoas;

const totalPessoa = parseInt(valorPessoa);

alert("O valor a pagar por pessoa é de  R$ " + totalPessoa.toFixed(2));


