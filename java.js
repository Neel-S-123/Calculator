function addition(){
   var num1= Number(document.getElementById("number1").value);
   var num2= Number (document.getElementById("number2").value);
   var sum=num1+num2;
   document.getElementById("result").innerHTML=sum;
}

function subtraction(){
    var num1= document.getElementById("number1").value;
    var num2= document.getElementById("number2").value;
    var dif=num1-num2;
    document.getElementById("result").innerHTML=dif;
}

function multiplication(){
    var num1= document.getElementById("number1").value;
    var num2= document.getElementById("number2").value;
    var prod=num1*num2;
    document.getElementById("result").innerHTML=prod;

}

function division(){
    var num1= document.getElementById("number1").value;
    var num2= document.getElementById("number2").value;
    var quo=num1/num2;
    document.getElementById("result").innerHTML=quo;
}
function modulus(){
    var num1= document.getElementById("number1").value;
    var num2= document.getElementById("number2").value;
    var rem=num1%num2;
    document.getElementById("result").innerHTML=rem;
    
}
function square(){
    var num1= document.getElementById("number1").value;
    var squ=num1*num1;
    document.getElementById("result").innerHTML=squ;
}
function powers(){
    var num1= document.getElementById("number1").value;
    var num2= document.getElementById("number2").value;
    var pow=num1**num2;
    document.getElementById("result").innerHTML=pow;

}


