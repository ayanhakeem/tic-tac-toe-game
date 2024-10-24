let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbt=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;//player turn;

const winners=[
  [0,1,2],
  [3,4,5], 
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

const resetgame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");//hide karna dubra
};
               
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("clicked");
        if(turn0){
            box.innerText="o";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
        
    });
});

const showwinner=(winner)=>{
    msg.innerText=`congratuations winner is ${winner}`;
    msgcontainer.classList.remove("hide");//winner show
    disableBoxes();
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const checkwinner=()=>{
    for(patterns of winners){
       let pos1=boxes[patterns[0]].innerText;
       let pos2=boxes[patterns[1]].innerText;
       let pos3=boxes[patterns[2]].innerText;

       if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
            showwinner(pos1);

        }
       }

    }

};

newbt.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


                      