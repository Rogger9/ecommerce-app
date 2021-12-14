import { useEffect, useState } from 'react'
import { Interval } from '../services/Iterval.service'

interface useSliderProps {
  inicialState: number
  restartState: number
}

export const useSlider = ({ inicialState, restartState }: useSliderProps) => {
  const [counter, setCounter] = useState<number>(inicialState)

  useEffect(function () {
    const interval = Interval.set(() => {
      counter < restartState ? setCounter(counter => counter + 1) : setCounter(inicialState)
    }, 5000)

    return () => Interval.clear(interval)
  }, [counter, inicialState, restartState])

  return { counter, setCounter }
}
