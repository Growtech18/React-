import "../components/Home.css"
import SingleCard from "../components/SingleCard.jsx"
import { myContext } from "../App.js"
import { useContext } from "react"
function MyCart() {
  const { cartData } = useContext(myContext)
  console.log("cardData", cartData)
  return (
    <div className="card-con">
      <div className="card-container">

        {cartData && cartData.length > 0 ? (
          cartData?.map((product, index) => (
            <SingleCard key={index} item={product} />
          ))
        ) : (
          <p className="no-data">No products found.</p>
        )}
      </div>
    </div>
  )
}

export default MyCart