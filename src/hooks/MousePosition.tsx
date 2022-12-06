import { time } from 'console'
import { useEffect, useState } from 'react'

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 })
  useEffect(() => {
    const updateMousePosition = async (event: {
      clientX: any
      clientY: any
    }) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])
  return mousePosition
}
