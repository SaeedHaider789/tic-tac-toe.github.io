let rules = document.getElementById("rules");
rules.onclick = () =>{
    window.open("https://en.wikipedia.org/wiki/Tic-tac-toe", "_blank");
}

// script for the game is given below
let printMsg = (index, div) =>{
    if(index == 1){
        div.innerHTML = `Congratulations! <img src="cross.png"> have won the game. <button id="plg">Play Again?</button>`;
    }
    else if(index == 2){
        div.innerHTML = `Congratulations! <img src="tac.png"> have won the game. <button id="plg">Play Again?</button>`;
    }
    else if(index == 3){
        div.innerHTML = 'Its a draw. <button id="plg">Play Again?</button>';
    }
}

let winMsg = (index)=> {
    let div = document.createElement("div");
    div.id = "winMsg";
    let mainBox = document.getElementById("main-box");
    div.style.width = "90vw";
    div.style.height = "30vh";
    div.style.position = "absolute";
    mainBox.append(div);
    div.style.backgroundColor = "black";
    div.style.color = "white";
    printMsg(index, div);
    let plg = document.getElementById("plg");
    plg.addEventListener("click", ()=>{
        location.reload();
    })
}

let drawCheck = () =>{
    if(btn1.innerHTML != "" && btn2.innerHTML != "" && btn3.innerHTML != "" && btn4.innerHTML != "" && btn5.innerHTML != "" && btn6.innerHTML != "" && btn7.innerHTML != "" && btn8.innerHTML != "" && btn9.innerHTML != ""){
        winMsg(3);
    }
}

let check = () =>{
    if((btn1.innerHTML == btn2.innerHTML && btn2.innerHTML == btn3.innerHTML) && (btn1.innerHTML != "" && btn2.innerHTML != "" && btn3.innerHTML != "")){  //first row check
        // console.log(btn1.innerHTML);
        if(btn1.innerHTML == `<img src="cross.png">`){
            winMsg(1);
        }
        else{
            winMsg(2);
        }
    }
    else if((btn4.innerHTML == btn5.innerHTML && btn5.innerHTML == btn6.innerHTML) && (btn4.innerHTML != "" && btn5.innerHTML != "" && btn6.innerHTML != "")){  // second row check 
            // console.log(btn4.innerHTML);
        if(btn4.innerHTML == `<img src="cross.png">`){
            winMsg(1);
        }
        else{
            winMsg(2)
        }
    }
    else if((btn7.innerHTML == btn8.innerHTML && btn8.innerHTML == btn9.innerHTML) && (btn7.innerHTML != "" && btn8.innerHTML != "" && btn9.innerHTML != "")){  // third row check 
        // console.log(btn7.innerHTML);
        if(btn7.innerHTML == `<img src="cross.png">`){
            winMsg(1);
        }
        else{
            winMsg(2);
        }
    }
    else if((btn1.innerHTML == btn5.innerHTML && btn5.innerHTML == btn9.innerHTML) && (btn1.innerHTML != "" && btn5.innerHTML != "" && btn9.innerHTML != "")){   // left to right check
        // console.log(btn1.innerHTML);
        if(btn1.innerHTML == `<img src="cross.png">`){
            winMsg(1);
        }
        else{
            winMsg(2);
        }
    }
    else if((btn3.innerHTML == btn5.innerHTML && btn5.innerHTML == btn7.innerHTML) && (btn3.innerHTML != "" && btn5.innerHTML != "" && btn7.innerHTML != "")){   // right to left check
        // console.log(btn1.innerHTML);
        if(btn3.innerHTML == `<img src="cross.png">`){
            winMsg(1);
        }
        else{
            winMsg(2);
        }
    }
    else if((btn1.innerHTML == btn4.innerHTML && btn4.innerHTML == btn7.innerHTML) && (btn1.innerHTML != "" && btn4.innerHTML != "" && btn7.innerHTML != "")){   // first column check
        // console.log(btn1.innerHTML);
        if(btn1.innerHTML == `<img src="cross.png">`){
            winMsg(1);
        }
        else{
            winMsg(2);
        }
    }
    else if((btn2.innerHTML == btn5.innerHTML && btn5.innerHTML == btn8.innerHTML) && (btn2.innerHTML != "" && btn5.innerHTML != "" && btn8.innerHTML != "")){   // Second column check
        // console.log(btn1.innerHTML);
        if(btn2.innerHTML == `<img src="cross.png">`){
            winMsg(1);
        }
        else{
            winMsg(2);
        }
    }
    else if((btn3.innerHTML == btn6.innerHTML && btn6.innerHTML == btn9.innerHTML) && (btn3.innerHTML != "" && btn6.innerHTML != "" && btn9.innerHTML != "")){   // third column check
        // console.log(btn1.innerHTML);
        if(btn3.innerHTML == `<img src="cross.png">`){
            winMsg(1);
        }
        else{
            winMsg(2);
        }
    }
    else{
        drawCheck();
    }
}

let count = Math.floor(Math.random() * 2) + 1;
let display = (id) =>{
    if(count == 1){
        document.getElementById(id).innerHTML = "<img src='cross.png'>";
        // console.log("hello");
        count++;
    }
    else{
        document.getElementById(id).innerHTML = "<img src='tac.png'>";
        count--;
    }
}

let btn = document.getElementsByClassName("grid-item");  
btn = Array.from(btn);
btn.forEach(element => {
    element.addEventListener("click", ()=>{
        if(element.innerHTML == ""){
            display(element.id);
        }
        check();
    })
});
// main code of game is ended here 
let reset = document.getElementById("reset");
reset.onclick = () =>{
    location.reload();
}
// if(btn1.innerHTML == ""){      --> hint for draw msg after the game ends
//     console.log("empty");      --> make a function which checks all the boxes
// }