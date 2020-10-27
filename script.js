var grids=document.querySelector('.grids');
var row=document.createElement('div');
row.className='row';
grids.appendChild(row);
console.log(row);

arr_nos=[0,1,2,3,4,5,6,7,8,9];
arr_operators=['/','-','*','+','=',"C"];

for(var i=0; i<arr_nos.length; i++){
    var button1=document.createElement('button');
    button1.id="no"+arr_nos[i];
    button1.className='number';
    button1.textContent=arr_nos[i];
    row.appendChild(button1);
}
for(var j=0; j<arr_operators.length; j++){
    var button2=document.createElement('button');
    button2.id="op"+j;
    button2.className='operator';
    button2.textContent=arr_operators[j];
    row.appendChild(button2);
}


// get number values

var number = document.querySelectorAll('.number');
for(var k=0; k<number.length;k++){
    number[k].addEventListener('click',ex1);
}

var a=''
function ex1(e){
    x=e.target.textContent;
    a+=x;
    return a
}

document.querySelector('.operator').addEventListener('click',operate);

var b='';
function operate(e){
    operator=e.target.textContent;
    // b=a;
    console.log(a);
}
