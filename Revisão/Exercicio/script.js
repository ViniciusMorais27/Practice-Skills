function somamedia(){
    var idade1 = parseInt(document.querySelector('#num1').value);
    var idade2 = parseInt(document.querySelector('#num2').value);
    var soma = idade1 + idade2;
    console.log('Soma: '+ soma);
    var media = soma/2;
   alert('A média das idades é = '+ media);
}