'use client'

import { useMemo, useState } from 'react'
import Dado from './Dado'

const MAX_ROUNDS = 5

function getValorAleatorio() {
  return Math.floor(Math.random() * 6) + 1
}

export default function JogoDados() {
  const [round, setRound] = useState(1)
  const [turn, setTurn] = useState('player1')
  const [player1Dice, setPlayer1Dice] = useState([1, 1])
  const [player2Dice, setPlayer2Dice] = useState([1, 1])
  const [roundResult, setRoundResult] = useState('')
  const [scores, setScores] = useState({ player1: 0, player2: 0, draws: 0 })
  const [roundFinished, setRoundFinished] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const player1Sum = useMemo(() => player1Dice[0] + player1Dice[1], [player1Dice])
  const player2Sum = useMemo(() => player2Dice[0] + player2Dice[1], [player2Dice])

  const matchMessage = useMemo(() => {
    if (!gameOver) return ''
    if (scores.player1 > scores.player2) {
      return 'Jogador 1 venceu a partida!'
    }
    if (scores.player1 < scores.player2) {
      return 'Jogador 2 venceu a partida!'
    }
    return 'A partida terminou empatada!'
  }, [gameOver, scores])

  function jogar(player) {
    const dice = [getValorAleatorio(), getValorAleatorio()]

    if (player === 'player1') {
      setPlayer1Dice(dice)
      setTurn('player2')
      setRoundResult('')
      return
    }

    setPlayer2Dice(dice)
    const sum1 = player1Sum
    const sum2 = dice[0] + dice[1]
    let result = ''
    const nextScores = { ...scores }

    if (sum1 > sum2) {
      result = 'Ganhou'
      nextScores.player1 += 1
    } else if (sum1 < sum2) {
      result = 'Perdeu'
      nextScores.player2 += 1
    } else {
      result = 'Empatou'
      nextScores.draws += 1
    }

    setScores(nextScores)
    setRoundResult(result)
    setRoundFinished(true)
    setGameOver(round === MAX_ROUNDS)
  }

  function proximaRodada() {
    if (round >= MAX_ROUNDS) {
      return
    }

    setRound(round + 1)
    setTurn('player1')
    setPlayer1Dice([1, 1])
    setPlayer2Dice([1, 1])
    setRoundResult('')
    setRoundFinished(false)
  }

  function reiniciarJogo() {
    setRound(1)
    setTurn('player1')
    setPlayer1Dice([1, 1])
    setPlayer2Dice([1, 1])
    setRoundResult('')
    setScores({ player1: 0, player2: 0, draws: 0 })
    setRoundFinished(false)
    setGameOver(false)
  }

  return (
    <div className="game-grid">
      <div className="card">
        <div className="status">
          <strong>Rodada atual</strong>
          <span>{round} de {MAX_ROUNDS}</span>
        </div>
      </div>

      <div className="card player">
        <h2>Jogador 1</h2>
        <div className="dados">
          <Dado valor={player1Dice[0]} />
          <Dado valor={player1Dice[1]} />
        </div>
        <div className="status">
          <strong>Soma</strong>
          <span>{player1Sum}</span>
        </div>
      </div>

      <div className="card player">
        <h2>Jogador 2</h2>
        <div className="dados">
          <Dado valor={player2Dice[0]} />
          <Dado valor={player2Dice[1]} />
        </div>
        <div className="status">
          <strong>Soma</strong>
          <span>{player2Sum}</span>
        </div>
      </div>

      <div className="card">
        <div className="status">
          <strong>Placar</strong>
          <span>1: {scores.player1} / 2: {scores.player2} / Empates: {scores.draws}</span>
        </div>
        <div className="result">
          <strong>Resultado da rodada:</strong>
          <div>{roundFinished ? roundResult : 'Aguardando jogada'}</div>
        </div>
      </div>

      <div className="card">
        <div className="btn-row">
          <button onClick={() => jogar('player1')} disabled={roundFinished || turn !== 'player1'}>
            Jogar Jogador 1
          </button>
          <button onClick={() => jogar('player2')} disabled={roundFinished || turn !== 'player2'}>
            Jogar Jogador 2
          </button>
        </div>
        {roundFinished && !gameOver && (
          <div className="btn-row">
            <button onClick={proximaRodada}>Próxima rodada</button>
          </div>
        )}
        {gameOver && (
          <div className="btn-row">
            <button onClick={reiniciarJogo}>Jogar Novamente</button>
          </div>
        )}
      </div>

      {gameOver && (
        <div className="card result">
          <strong>Resultado final:</strong>
          <div>{matchMessage}</div>
        </div>
      )}
    </div>
  )
}
