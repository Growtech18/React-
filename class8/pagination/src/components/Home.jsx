import SingleCard from "./SingleCard.jsx";
import "./Home.css";
import { useContext } from "react";
import { myContext } from "../App.js";
function Home() {
  const {UiValueCard}=useContext(myContext)
  console.log(UiValueCard)

  return (
    <div className="card-con">
      <div className="card-container">

        {UiValueCard?.length > 0 ? (
          UiValueCard?.map((product, index) => (
            <SingleCard key={index} item={product} 
             />
          ))
        ) : (
          <p className="no-data">No products found.</p>
        )}
      </div>
    </div>

  );
}

export default Home;
