const cards = [

{
text:"I know I made a mistake that day. I truly regret the words I said and I wish I could take them back.",
img:"images/img1.jpeg"
},

{
text:"Hurting you was never my intention. You mean a lot to me and I hate the fact that I caused you pain.",
img:"images/img2.jpeg"
},

{
text:"I'm trying to become a better person — calmer, more responsible, and more careful with my words.",
img:"images/img3.jpeg"
},

{
text:"I know trust and respect take time to rebuild. I’m ready to work on myself and prove it through my actions.",
img:"images/img4.jpeg"
},

{
text:"No matter what happens, I’ll always appreciate the moments and memories we have shared together.",
img:"images/img5.jpeg"
},

{
text:"Thank you for being part of my life. I hope someday you can see the better version of me I'm trying to become.",
img:"images/img6.jpeg"
}

];

let index=0;

const textEl=document.getElementById("cardText");
const imgEl=document.getElementById("cardImage");
const card=document.getElementById("cardBox");

function start(){
document.getElementById("startScreen").classList.add("hidden");
document.getElementById("cardScreen").classList.remove("hidden");
render();
}

function render(){
textEl.innerText=cards[index].text;
imgEl.src=cards[index].img;
}

let startX=0;

document.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

document.addEventListener("touchend",e=>{
let endX=e.changedTouches[0].clientX;

if(endX<startX-60) nextCard();
if(endX>startX+60) prevCard();
});

function nextCard(){
if(index<cards.length-1){
card.classList.add("slide-left");

setTimeout(()=>{
index++;
render();
card.classList.remove("slide-left");
},250);
}
}

function prevCard(){
if(index>0){
card.classList.add("slide-right");

setTimeout(()=>{
index--;
render();
card.classList.remove("slide-right");
},250);
}
}