let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red", "pink", "yellow", "blue"]; 

let h3 = document.querySelector("h3");

let hightScore = document.createElement("h2");
hightScore = 0;

document.addEventListener("keypress", () => {
    if(started == false){
        console.log("game was stated");
        started = true;
        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(() => {
        btn.classList.remove("gameflash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    },300);
}


function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
    //random btns
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function chackAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML = `Game over! <b>Your score is ${level}</b> </br>Press any key to start.`;
        if(level > hightScore){
            hightScore = level;
            hightScore.innerHTML = `Your hightscore is ${hightScore}`;
        }
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "rgb(1, 2, 23)";
        }, 200);
        reset();
    }
}

function btnPress() {
    let btn = (this);
    userFlash(btn); 

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    chackAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;  
}