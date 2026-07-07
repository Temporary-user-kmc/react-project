import { useState } from 'react'

const Greeting = () => {
  const [name, setName] = useState('')

  const handleClick = () => {
    alert(`Hello, ${name} !`)
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleClick}>Greet</button>
    </div>
  )
}

export default Greeting
