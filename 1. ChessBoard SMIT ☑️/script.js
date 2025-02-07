let chessBoardBluePrint = ()=>{
    const chessboard = document.querySelector("#chessboard")
    for(var i=1;i<=8;i++){
        for(var j=1;j<=8;j++){
            let square = document.createElement("div")
            square.classList.add("square")
            if((i+j)%2===0){
                square.classList.add("white")
            }
            else{
                square.classList.add("black")
            }
            chessboard.appendChild(square)
        }
    }
}
chessBoardBluePrint()