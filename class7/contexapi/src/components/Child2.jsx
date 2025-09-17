import Child3 from "./Child3"
function Child2({userNameByDrilling}) {
  return (
    <div>
        <Child3 userNameByDrilling={userNameByDrilling}/>
    </div>
  )
}

export default Child2