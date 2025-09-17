import { Route,Routes } from "react-router-dom";
import BestForm from "./components/BestForm";
import Profile from "./components/Profile";
// import Form from "./components/Form";


function App() {
  return (
    <div>
      {/* <Form /> */}


      <Routes>
        <Route path="/" element={ <BestForm/>}/>
        <Route path="/profile" element={ <Profile/>}/>
        <Route path="*" element={<h2>not found</h2>}></Route>

      </Routes>
    </div>
  );
}

export default App;
