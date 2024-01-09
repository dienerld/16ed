import { useEffect, useState } from 'react'
import { Wrapper } from './styles'

export function About() {
  const time = 0.1 * 60 - 1
  const [timer, setTimer] = useState(time)
  const [keyInterval, setKeyInterval] = useState(0)

  useEffect(() => {
    if (timer === 0) {
      clearInterval(keyInterval)
      setTimer(time)
      setKeyInterval(0)
    }
  }, [timer])

  function startTimer() {
    const keyIntervalTemp = setInterval(() => {
      setTimer((prevState) => prevState - 1)
    }, 1000)

    setKeyInterval(keyIntervalTemp)
  }

  function pauseTimer() {
    clearInterval(keyInterval)
    setKeyInterval(0)
  }

  return (
    <Wrapper>
      <div>
        <p>{Math.floor(timer / 60)}</p>
        <span>:</span>
        <p>{(timer % 60).toString().padStart(2, '0')}</p>
      </div>
      <button onClick={startTimer} disabled={!!keyInterval}>
        Começar timer
      </button>
      <button onClick={pauseTimer}>Pausar timer</button>
    </Wrapper>
  )
}
