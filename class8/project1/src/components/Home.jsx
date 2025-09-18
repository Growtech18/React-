import SingleCard from "./SingleCard.jsx";
import "./Home.css";
import { myContext } from "../App.js";
import { useContext } from "react";
function Home({ data}) {
const {cartData,setCartData}=useContext(myContext)

  return (
    <div className="card-con">
      <div className="card-container">

        {data?.length > 0 ? (
          data?.map((product, index) => (
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
