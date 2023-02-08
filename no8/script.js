 //no1
 let text1 = document.querySelector(".text1");    
 let button1 = document.querySelector(".btn1");
 button1.addEventListener('click', ()=>
 {
     text1.classList.add("clicked");
     text1.innerHTML = "текст изменился!"
 });
 //

 //no2
 let notif = document.querySelector(".notification")
 let button3 = document.querySelector(".btn3");
 function notifOpen(){
     notif.style.display = "block";
 }

 function notifClose(){
     notif.style.display = "none";
 }
 

 button3.addEventListener('click', ()=>
 {
     notifOpen();
     setTimeout(notifClose, 3000);
 });
 //

 //no6
 let buttonfirst = document.querySelector(".btn6");
 let buttonlast = document.querySelector(".btn7");
 let spisok = document.querySelector(".spisok");
 let liFirst = document.createElement('li');
 liFirst.innerHTML = "<b> САМАЯ ВАЖНАЯ ЗАДАЧА!!! </b>";
 let liLast = document.createElement('li');
 liLast.innerHTML = "<i>Задача на последок...</i>";
 buttonfirst.addEventListener('click', ()=>
 {
    spisok.prepend(liFirst);
 });
 buttonlast.addEventListener('click', ()=>
 {
     spisok.append(liLast);
 });
 //