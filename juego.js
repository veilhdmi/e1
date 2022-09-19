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
                    jugador: true,
                    valor: true
                })
            }
    
            rows.push(casillas)
        }
    
        return rows
}
const enviarBoard=()=>{
        for (let i = 0; i < board.length; i++) {
            const casillas = board[i]
            if (casillas.valor == true) {
                console.log("Gana X")
                casillas.clickDisabled = true
            }
        }
}    
    
const getValue = (board, row, col) => {
    return board[row][col]
}

const casillaClick=(r,c)=>{
    contadorGlobal+=1
    const casilla = getValue(board, r, c)
    const cas = document.getElementById(`${r}_${c}`)
    if (casilla.clickDisabled == false) {
        if (contadorGlobal == 1 || 
            contadorGlobal == 3|| 
            contadorGlobal == 5|| 
            contadorGlobal == 7|| 
            contadorGlobal == 9) {
            cas.innerHTML = "X"
            
        }else {
            cas.innerHTML = "O"
            casilla.valor = false
        }
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

