function button(){
    var valueInput = document.getElementById('num').value; //comando para procurar um elemento HTML pelo ID //
    
    if(valueInput < 0 ){
        alert(valueInput +' Is not a positive number');
    }else{
        alert(valueInput + ' Is a positive number');
    }
}


