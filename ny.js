

  
 function zoomaIn0(){djurBild[0].style.width="170px";djurBild[0].style.backgroundColor="red"; setTimeout( function(){djurBild[0].style.width="150px";djurBild[0].style.backgroundColor="black";},500)} 
 function zoomaIn1(){djurBild[1].style.width="170px"; djurBild[1].style.backgroundColor="white";setTimeout( function(){djurBild[1].style.width="150px";djurBild[1].style.color="black";},500)} 
 function zoomaIn2(){djurBild[2].style.width="170px";djurBild[2].style.backgroundColor="red"; setTimeout( function(){djurBild[2].style.width="150px";djurBild[2].style.backgroundColor="black";},500)} 

let mainAnimal=document.querySelector(".mainAnimal");


// Create the outer div with the class "card"
let card = document.createElement("div");
card.classList.add("djurBild");

// Create the inner div with the class "cardImg"
let cardImg = document.createElement("div");
cardImg.classList.add("cardImg");

// Create the image element and set its attributes
const img = document.createElement("img");
img.setAttribute("src","image/1.gif");
img.setAttribute("alt","elefant");
img.addEventListener("click",zoomaIn2);

// Append the image element to the inner div
cardImg.appendChild(img);


// Add the card1 element to the document
card.appendChild(cardImg);
mainAnimal.appendChild(card);

  let djurBild=document.querySelectorAll(".djurBild"); 

let audio1=new Audio("image/wrong.wav");//identifiering  ljud wrong(wav) audio 
let audio2=new Audio("image/right.wav");//identifiering  ljud right(wav) audio 

let card1=document.querySelector(".card1"); //hämta elmenten som har classnam card1 från html fil.

//  när vi ropar den functionen blir ramen red  i 2 sekund och ljudet wrong börja på 
function function1(){ card1.style.color= "red"; audio1.play();

  setTimeout( function(){card1.style.color="black";},2000);}
 

  let card2=document.querySelector(".card2");
//  när vi ropar den functionen blir ramen red  i 2 sekund och ljudet right börja på 
function function2(){ card2.style.color= "green"; audio2.play();

  setTimeout( function(){card2.style.color="black";},2000);}
  
  let card3=document.querySelector(".card3");
  let card4=document.querySelector(".card4");// hämta elementen som har id card4 som finns i html sida
//  när vi ropar den functionen blir ramen red  i 2 sekund och ljudet right börja på 
function function3(){ card3.style.color= "green"; audio2.play();

  setTimeout( function(){card3.style.color="black";},2000);}
 

  let card5=document.querySelector(".card5");// hämta elementen som har id card5 som finns i html sida

function function4(){ card4.style.color= "red"; audio1.play();

  setTimeout( function(){card4.style.color="black";},2000);}

 
  let card6=document.querySelector(".card6");// hämta elementen som har id card6 som finns i html sida
//  när vi ropar den functionen blir ramen red  i 2 sekund och ljudet right börja på 
function function5(){ card5.style.color= "green"; audio2.play();

  setTimeout( function(){card5.style.color="black";},2000);}
 
 

  
//  när vi ropar den functionen blir ramen red  i 2 sekund och ljudet right börja på 
function function6(){ card6.style.color= "red"; audio1.play();

  setTimeout( function(){card6.style.color="black";},2000);}  

  