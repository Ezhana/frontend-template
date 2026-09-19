import { useEffect } from 'react'

export function App() {
  if (Math.random() > 0.5) {
    useEffect(() => {
      console.log('Hello World!')
    }, [])
  }

  return <div />
}
