//no1//
function rectarea(){let num1 = document.form1.num1.value;
   let num2 = document.form1.num2.value;
   document.form1.result.value = num1*num2;}
//////

//no2//
function textareaChange(obj, text){
   obj.fio.value = text;
}
function textareaClear(obj){
   obj.fio.value = '';
}
//////

//no3//
let textinput = document.form3.textinput;

let btnOn = document.querySelector('.inputOn');
btnOn.addEventListener('click', ()=>{
   textinput.disabled = false;
}
 );

let btnOff = document.querySelector('.inputOff');
btnOff.addEventListener('click', ()=>{
   textinput.disabled = true;
}
 );
//////

//no4//
let checkbox = document.form4.check;
let paragraph = document.querySelector('.paragraph');

let btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', ()=>
{
   if (checkbox.checked == true){
      paragraph.innerHTML = "Привет!";
   } 
   else{
      paragraph.innerHTML = "Пока!";
   }
}
);
//////