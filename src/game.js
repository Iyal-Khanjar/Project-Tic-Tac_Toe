import { useState, useEffect } from 'react';
import './style.css'
const Game = () => {
    const [player, setPlayer] = useState('');
    const [steps, setSteps] = useState()
    const [firstTime, setFirstTime] = useState(true)

    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    useEffect(() => {
        if (firstTime) {
            setSteps(['', '', '', '', '', '', '', '', ''])
            setFirstTime(false)
            setPlayer(player === '' ? 'x' : player === 'x' ? 'o' : 'x')
        }
        else {
            setPlayer(player === '' ? 'x' : player === 'x' ? 'o' : 'x')
            let winner = checkWinner(steps)
            if (winner) {
                document.querySelector('.playerTurn').innerHTML = 'winner is ' + winner
                document.querySelectorAll('.btn').forEach(item => {
                    item.disabled = true;
                })
            }
            else if (!steps.includes('')) {
                document.querySelector('.playerTurn').innerHTML = 'it is a draw'
            }

        }
// eslint-disable-next-line
    }, [firstTime, steps])

    const handleClick = (e) => {
        let idx = e.target.id;
        let arr = [...steps];
        arr[idx] = player;
        setSteps([...arr])
        // console.log(arr);
        e.target.textContent = player
        e.target.disabled = true
        if (player === 'x') {

        }

    }
    // console.log(steps);

    return (
        <div>
            <p>Tic Tac Toe</p>
            <div className="container">
                <button className="btn" id={0} onClick={(e) => { handleClick(e) }}></button>
                <button className="btn" id={1} onClick={(e) => { handleClick(e) }}></button>
                <button className="btn" id={2} onClick={(e) => { handleClick(e) }}></button>
                <button className="btn" id={3} onClick={(e) => { handleClick(e) }}></button>
                <button className="btn" id={4} onClick={(e) => { handleClick(e) }}></button>
                <button className="btn" id={5} onClick={(e) => { handleClick(e) }}></button>
                <button className="btn" id={6} onClick={(e) => { handleClick(e) }}></button>
                <button className="btn" id={7} onClick={(e) => { handleClick(e) }}></button>
                <button className="btn" id={8} onClick={(e) => { handleClick(e) }}></button>
            </div>
            <div>
                <span className="playerTurn">player {player}`s turn </span>
                <button className="restart" onClick={() => window.location.reload()}> restart</button>
            </div>
        </div>

    );
}

export default Game;