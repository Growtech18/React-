import React from 'react'
import useAdd from '../customhook/useAdd'
function Child1() {
    // let data= useAdd();
    //  let ans = data(72, 8);  //ye single data ke liye hai
    // console.log(ans,data)
    const { add } = useAdd();
    let ans = add(97, 8);
    return (
        <div>
            Child1
            <p>{ans}</p>
        </div>
    )
}

export default Child1