import Child1 from "./components/Child1";
import Child2 from "./components/Child2";


function App() {

  const userName = "Grow Tech"
  return (
    <div>
      <Child1 userNameByDrilling={userName} />
      <Child2 userNameByDrilling={userName}/>
    </div>
  );
}

export default App;
