import { useState } from 'react'

const ShoppingCart = () => {
  const [count, setCount] = useState(1)

  const handleClick = () => {
    alert(`商品をカートに${count}個入れました。`)
  };

  return (
    <div>
        <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>個数を増やす</button>
      <button onClick={() => setCount(Math.max(0, count - 1))}>個数を減らす</button>
      <button onClick={handleClick}>カートに入れる</button>
    </div>
  )
}

export default ShoppingCart;
