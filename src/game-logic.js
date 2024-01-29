import {WINNING_COMBINATIONS} from "./wining-combination.js";

const INITIAL_BOARD = [[null, null, null], [null, null, null], [null, null, null],]
export const PLAYERS = {
    X: 'Player1', O: 'Player2'
}

export function derivingActivePlayer(gameTurns) {
    let currentPlayer = 'X'
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O'
    }
    return currentPlayer
}

export function handleBoard(gameTurns) {
    let gameBoard = [...INITIAL_BOARD.map((array) => [...array])]

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }
    return gameBoard
}

export function checkWinner(gameBoard, players) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol]

        }

    }
    return winner;
}
