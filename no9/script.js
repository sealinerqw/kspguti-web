//no1//
let button1 = document.querySelector('.btn1');
let counter = 0;
button1.addEventListener('click', ()=>
{
    counter++;
    button1.innerHTML = "Количество кликов: " + counter;
});
//////
//no2//
let button2 = document.querySelector('.btn2');
let imgselector = document.querySelector('.cats');
let catcounter = 0;
button2.addEventListener('click', ()=>
{
    if (catcounter<4){
        catcounter++;
    imgselector.setAttribute("src", "./img/"+catcounter+".png");
    } else catcounter = 0;
    imgselector.setAttribute("src", "./img/"+catcounter+".png");
    
});
//////
//no3//
let imgselector2 = document.querySelector('.cats2');
let catcounter2 = 0;
imgselector2.addEventListener('mouseover', ()=>
{
    if (catcounter2<4){
        catcounter2++;
    imgselector2.setAttribute("src", "./img/"+catcounter2+".png");
    } else catcounter2 = 0;
    imgselector2.setAttribute("src", "./img/"+catcounter2+".png");
});
imgselector2.addEventListener('mouseout', ()=>
{
    imgselector2.setAttribute("src", "./img/"+0+".png");
});
//////
//no4//
let lamp = document.querySelector('.lamp');
let offbtn = document.querySelector('.off');
let onbtn = document.querySelector('.on');

onbtn.addEventListener('click', ()=>
{
    lamp.setAttribute("src","./img/on.png" );
});
offbtn.addEventListener('click', ()=>
{
    lamp.setAttribute("src","./img/off.png" );
});
