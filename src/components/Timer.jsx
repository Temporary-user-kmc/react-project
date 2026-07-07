import { useEffect, useState } from 'react'

function Timer() {
  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running) return

    const id = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [running])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setRunning(false)}>ストップ</button>
    </div>
  )
}

export default Timer