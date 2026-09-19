import { useEffect, useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  )
}
