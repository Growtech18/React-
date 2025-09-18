import React from 'react'
import Child1 from './compnents/Child1';
import Child2 from './compnents/Child2';
import useAdd from './customhook/useAdd';
function App() {
  // let data = useAdd();
  // let ans = data(88, 99);
  // console.log(ans, data)
  const { add } = useAdd();
  let ans = add(97, 8);
  return (
    <div>
      App
      <p>{ans}</p>
      <Child1 />
      <Child2 />
    </div>
  )
}

export default App