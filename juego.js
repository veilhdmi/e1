let board;
let contadorGlobal=0;
let jugador =true;
const crearBoard=(numRows, numCols)=>{
        const rows = []
        for (let i = 0; i < numRows; i++) {
            const casillas = []
            for (let j = 0; j < numCols; j++) {
                casillas.push({
                    mostrar : false,
                    clickDisabled : false,
                    jugador: true
                })
            }
    
            rows.push(casillas)
        }
    
        return rows
}
const enviarBoard=()=>{
        for (let i = 0; i < board.length; i++) {
            const casillas = board[i]
            for (let j=0; j < casillas.length; j++) {
                const butCasilla = document.getElementById(`${i}_${j}`)
                if (casilla[j]) {
                    
                }
            }
        }
}    
    
const getValue = (board, row, col) => {
    return board[row][col]
}

const casillaClick=(r,c)=>{
    contadorGlobal+=1
    const casilla = getValue(board, r, c)
    //casilla.mostrar =true
    const cas = document.getElementById(`${r}_${c}`)
    //cas.innerHTML = "X"
        if (contadorGlobal == 1 || 
            contadorGlobal == 3|| 
            contadorGlobal == 5|| 
            contadorGlobal == 7|| 
            contadorGlobal == 9) {
            cas.innerHTML = "X"
        }else {
            cas.innerHTML = "O"
        }
        
        
    
    //enviarBoard(board)
    
    //jugador = false
    
    console.log(contadorGlobal)    
}




const main =()=>{
    board = crearBoard(3, 3) 
    //enviarBoard(board)
}

main()

