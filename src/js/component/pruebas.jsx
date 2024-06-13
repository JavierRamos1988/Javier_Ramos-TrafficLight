import React, { useState } from "react";

const Counter = () => {

  // Inicializar una variable de "count" en 0, la función setCount se utilizará para restablecer el valor de "count"

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count} likes</h2>
      <span onClick={() => setCount(count + 1)}>👍🏽</span>
      <span onClick={() => setCount(count - 1)}>👎🏽</span>
      <span onClick={()=> setCount(count=> count=0)}>Reset</span>
      <h3>Like or dislike to increase/decrease</h3>
    </div>
  );
};

export default Counter;