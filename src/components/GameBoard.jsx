export default function GameBoard({onSelectSquare, board}) {


    return (<ol id='game-board'>
        {board.map((raw, rawIndex) => (<li key={rawIndex}>
            <ol>
                {raw.map((playerSymbol, colIndex) => (<li key={colIndex}>
                    <button onClick={() => onSelectSquare(rawIndex, colIndex)}
                            disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>))}
            </ol>
        </li>))}
    </ol>)
}