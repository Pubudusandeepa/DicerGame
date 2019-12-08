const button = document.querySelector("button");

const output = document.querySelector("#output");
const player1 =document.querySelector("#player1");
const player2 =document.querySelector("#player2");
const dice = [[5],[1,9],[1,5,9],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9]];

button.addEventListener("click", function(){
    let rolls = [roll(6),roll(6)];
    let temp;
    if(rolls[0] == rolls[1])
    {
        temp = "Draw";
    }  
    else if(rolls[0] > rolls[1])
    {
        temp ="Player 1 wins";
    }
    else{
        temp ="Player 2 Win";
    }
    updateOutput(player1, rolls[0]);
    updateOutput(player2, rolls[1]);
    output.innerHTML = temp;


})

function updateOutput(el,num){
    let holder = builder(num);
    if(el.children[0])
    { 
        el.children[0].remove();
    }
   
    el.appendChild(holder);
}

function builder(num){
let div  = document.createElement("div");
let dieArray  = dice[num-1];
console.log(dieArray);

for(let x=1;x<10;x++){
    let span = document.createElement("div");
    span.setAttribute("class","dot");

    if(dieArray.includes(x)){
        span.classList.add("black");
    }
      div.appendChild(span);
}

div.setAttribute("class","dicer");
return div;
}

function roll(num){
    let rNumber = Math.floor(Math.random()*num) +1;
    return rNumber;
}