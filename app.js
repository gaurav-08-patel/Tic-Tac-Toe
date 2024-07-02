let boxes=document.querySelectorAll(".boxes");
let msgBox=document.querySelector(".msg-box");
let container=document.querySelector(".container");
let newBtn=document.querySelector(".newBtn");
let msg=document.querySelector("#msg");
let resetBtn=document.querySelector("#resetBtn");


let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let turnX=true;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("hi");
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    });
    
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log(`player ${pos1Val} wins`);
                showWinner(pos1Val);
            }
        }
    }
};

let showWinner = (winner)=>{
    msgBox.classList.remove("hide");
    container.classList.add("hide");
    msg.innerText=`Congratulations ! Player${winner} Won`;
}

newBtn.addEventListener("click",()=>{
    container.classList.remove("hide");
    msgBox.classList.add("hide");
    for(box of boxes){
        box.innerText="";
        
    };
    turnX=true;
    for(let box of boxes){
        box.disabled=false;
    }
})

resetBtn.addEventListener("click",()=>{
    for(box of boxes){
        box.innerText="";
        
    };
    turnX=true;
    for(let box of boxes){
        box.disabled=false;
    }
})


// for(let pattern of winPatterns){
//     boxes.forEach((box)=>{
//         box.
//     });
//     console.log(pattern);
// }