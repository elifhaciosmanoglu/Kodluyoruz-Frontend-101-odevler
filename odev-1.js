let myName = prompt("Lütfen isminizi ve soyisminizi girin: ");
myName= `${myName[0].toUpperCase()}${myName.slice(1,myName.search(" "))} ${myName[myName.search(" ")+1].toUpperCase()}${myName.slice(myName.search(" ")+2)} `
let name = document.getElementById("myName");
name.innerHTML=myName

function showTime() {
  let myClock = document.getElementById("myClock"); 
  let now = new Date(); 
  let day = now.getDay();
  let month = now.getMonth() + 1; 
  let year = now.getFullYear(); 
  let hour = now.getHours(); 
  let minute = now.getMinutes(); 
  let second = now.getSeconds(); 

  let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  day = gunler[day]

  let time = `${hour}:${minute}:${second}, ${day}`;

  myClock.innerHTML = time 
 
  setTimeout(showTime, 1000); 
}

showTime(); 
