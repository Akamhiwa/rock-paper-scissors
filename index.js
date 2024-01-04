let demo=document.querySelector('.demo');
let demo2=document.querySelector('.demo2');
let pScore=document.querySelector('.playerScore')
let cScore=document.querySelector('.computerScore')
let buttons=document.querySelectorAll('.selection img')
let pImg=document.querySelector('.show img');
let cImg=document.querySelector('.computer img')
let computerScore =1;
let playerScore =1;
let randomClasses=['rock','scissor','paper'];

function win(){
    demo.innerHTML='it is a win'
    demo.style.color='rgb(1 , 146 , 1)'
    demo2.innerHTML=demo.innerHTML;
    demo2.style.color='rgb(1 , 146 , 1)'
}
function lose(){
    demo.innerHTML='it is a loss'
    demo.style.color='red'
    demo2.innerHTML=demo.innerHTML;
    demo2.style.color='red'
}
function tie(){
    demo.innerHTML='it is a tie'
    demo.style.color='orange'
    demo2.innerHTML=demo.innerHTML;
    demo2.style.color='orange';
}
function playGame(){
    buttons.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            let playerMove=e.target.className;
            console.log(playerMove)
            let randomIndex=Math.floor(Math.random()*randomClasses.length)
            let computerMove=randomClasses[randomIndex];
            console.log(computerMove)
                   if(playerMove===computerMove){
                    pScore.innerHTML=pScore.innerHTML;
                    cScore.innerHTML=cScore.innerHTML;
                    tie();
                   }
                   else if (playerMove==='rock' &&computerMove==='scissor'
                   ||playerMove==='paper' &&computerMove==='rock'
                   ||playerMove==='scissor' &&computerMove==='paper'){
                    
                    pScore.innerHTML=playerScore;
                    playerScore++;  
                    win()

                   }
                   else {
                      
                    cScore.innerHTML=computerScore;
                    computerScore++;  
                    lose()
                   }
                   setImages(playerMove,computerMove);
        });
    });
}
let setImages=(Move,Move2)=>{
    pImg.setAttribute("src",`images/${Move}-emoji.png` );
    cImg.setAttribute("src", `images/${Move2}-emoji.png`);
  }
playGame()