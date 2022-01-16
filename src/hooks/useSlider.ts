import { useEffect, useState } from 'react'
import { Services } from '../services'

interface useSliderProps {
  inicialState: number
  restartState: number
}

export const useSlider = ({ inicialState, restartState }: useSliderProps) => {
  const [counter, setCounter] = useState<number>(inicialState)

  useEffect(function () {
    const interval = Services.setInterval(() => {
      counter < restartState ? setCounter(counter => counter + 1) : setCounter(inicialState)
    }, 5000)

    return () => Services.clearInterval(interval)
  }, [counter, inicialState, restartState])

  return { counter, setCounter }
}
