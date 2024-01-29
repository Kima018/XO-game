export default function GameOver({winner, onRestart}) {
    return <div id='game-over'>
        <h2>Game over!</h2>
        {winner ? <p>{winner} won!</p> : <p>DRAW!</p>}
        <p>
            <button onClick={onRestart}>Play again</button>
        </p>
    </div>
}