import Child5 from './Child5'
import { useContext } from 'react'
import {userContext} from "../index.js"
function Child4({userNameByDrilling}) {
    // const userNameByContextApi = useContext(userContext)
    const {userName, userName2, user} = useContext(userContext)

    return (
        <div>
            <p>props drilling ke through <br /> {userNameByDrilling}</p>
            <p>context api ke through <br /> {userName} <br /> {userName2} <br /> {user.firstName}</p>
            <Child5 />
        </div>
    )
}

export default Child4