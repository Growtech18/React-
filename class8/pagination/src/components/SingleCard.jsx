import { useState } from "react"
import "./SingleCard.css"

function SingleCard({ item }) {
  
  const [readmore, setReadmore] = useState(true)


  return (
    <div>
      <div className="card">
        <img src={item.image} alt={item.title} className="card-img" />

        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-desc">

            {readmore ?
              (<span>
                {item?.description?.substr(0, 60)} &nbsp;
                <b style={{ color: "blue" }} onClick={() => setReadmore(false)}>readmore</b>
              </span>) :
              <span>
                {item?.description}
                <b style={{ color: "blue" }} onClick={() => setReadmore(true)}>readless</b>
              </span>}

          </p>

          <p className="card-category">{item.category}</p>

          <div className="card-footer">
            <span className="price">${item.price}</span>
            <span className="rating">⭐ {item.rating.rate} ({item.rating.count})</span>
          </div>
         

        </div>
      </div>
    </div>
  )
}

export default SingleCard