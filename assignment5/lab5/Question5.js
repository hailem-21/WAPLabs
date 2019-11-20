

function reverse(input){


if(input=='') return '';

let x=input.charAt(input.length-1);


return x+ reverse(input.substring(0,input.length-1)) 

}

