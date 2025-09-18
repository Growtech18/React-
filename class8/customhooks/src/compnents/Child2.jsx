import React from 'react'
import useAdd from '../customhook/useAdd';

function Child2() {
   const {add} = useAdd();
    let ans = add(97, 8);
    return (
        <div>
            Child2
            <p>{ans}</p>
        </div>
    )
}

export default Child2