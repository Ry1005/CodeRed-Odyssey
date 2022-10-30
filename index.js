const ivysaur= document.getElementById("ivysaur");
const myAnimationIvy = document.getElementById("ivyDiv");

ivysaur.addEventListener("click", beginIvy);

function beginIvy(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 350 || y >= 250){
            clearInterval(timerId);
        }else{
            x+=1;
            myAnimationIvy.style.left = x + "px";
            y+=1;
            myAnimationIvy.style.top = y + "px";
            degrees+=5;
            myAnimationIvy.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}


const charmeleon= document.getElementById("charmeleon");
const myAnimationChar = document.getElementById("charDiv");

charmeleon.addEventListener("click", beginChar);

function beginChar(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(y >= 450){
            clearInterval(timerId);
        }else{
            x+=1;
            myAnimationChar.style.left = x + "px";
            y+=1;
            myAnimationChar.style.top = y + "px";
            degrees+=5;
            myAnimationChar.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}


const wartortle= document.getElementById("wartortle");
const myAnimationWar = document.getElementById("warDiv");

wartortle.addEventListener("click", beginWar);

function beginWar(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if( y >= 650){
            clearInterval(timerId);
        }else{
            x+=1;
            myAnimationWar.style.left = x + "px";
            y+=1;
            myAnimationWar.style.top = y + "px";
            degrees+=5;
            myAnimationWar.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}

const pidgeotto= document.getElementById("pidgeotto");
const myAnimationPidg = document.getElementById("pidgDiv");

pidgeotto.addEventListener("click", beginPidg);

function beginPidg(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if( y >= 850){
            clearInterval(timerId);
        }else{
            x+=1;
            myAnimationPidg.style.left = x + "px";
            y+=1;
            myAnimationPidg.style.top = y + "px";
            degrees+=5;
            myAnimationPiq.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}


const jigglypuff= document.getElementById("jigglypuff");
const myAnimationJigg = document.getElementById("jiggDiv");

jigglypuff.addEventListener("click", beginJigg);

function beginJigg(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if( y >= 1050){
            clearInterval(timerId);
        }else{
            x+=1;
            myAnimationJigg.style.left = x + "px";
            y+=1;
            myAnimationJigg.style.top = y + "px";
            degrees+=5;
            myAnimationJigg.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}
