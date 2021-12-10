import { useEffect, useState } from 'react'

const maxMobileScreenWidth: number = 768

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0)

  useEffect(() => {
    const handleRezise = () => setScreenWidth(window.innerWidth)
    handleRezise()
    window.addEventListener('resize', handleRezise)
    return () => window.removeEventListener('resize', handleRezise)
  }, [])

  const isMobileScreen: boolean = screenWidth <= maxMobileScreenWidth
  return { isMobileScreen }
}
