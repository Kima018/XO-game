import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {useState} from 'react'
import GameOver from "./components/GameOver.jsx";
import {checkWinner, derivingActivePlayer, handleBoard, PLAYERS} from "./game-logic.js";

function App() {
    const [gameTurns, setGameTurns] = useState([])
    const [players, setPlayers] = useState(PLAYERS)
    const activePlayer = derivingActivePlayer(gameTurns)
    const gameBoard = handleBoard(gameTurns)
    const winner = checkWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = derivingActivePlayer(prevTurns)
            const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns]
            return updatedTurns;

        });
    }

    function handleRestart() {
        setGameTurns([])
    }


    function handlePlayerName(symbol, newName) {
        setPlayers((prevPlayers) => {
                return {
                    ...prevPlayers,
                    [symbol]: newName
                }

            }
        )

    }

    return (<>
            <Header/>
            <main>
                <div id='game-container'>
                    <ol id='players' className='highlight-player'>
                        <Player inititalName={PLAYERS.X} symbol={'X'} isActive={activePlayer === 'X'}
                                onChangeName={handlePlayerName}/>
                        <Player inititalName={PLAYERS.O} symbol={'O'} isActive={activePlayer === 'O'}
                                onChangeName={handlePlayerName}/>
                    </ol>
                    {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
                    <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
                </div>
                <Log turns={gameTurns}/>
            </main>
        </>

    )
}

export default App
