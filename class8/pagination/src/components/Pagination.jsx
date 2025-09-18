import React, { useContext } from 'react'
import { myContext } from '../App'
import "./Pagination.css"

function Pagination() {
    const { buttons, setCurrentPage, currentPage } = useContext(myContext);


    function handleNext() {
        console.log("Next btn click")
        setCurrentPage(currentPage + 1)
    }


    function handleprev() {
        console.log("prev btn click")
        setCurrentPage(currentPage - 1)
    }

    function handlePageData(page) {
        setCurrentPage(page)
    }

    return (
        <div className="pagination">
            <button className="page-btn" onClick={handleprev} disabled={currentPage === 1} >Prev</button>
            {
                buttons?.map((i, index) => {
                    return <button key={index} className={currentPage === i ? ("active") : ("page-btn")}
                        onClick={() => { handlePageData(i) }}
                    >{i}</button>
                })
            }
            <button className="page-btn" onClick={handleNext} disabled={currentPage === buttons.length}>Next</button>
        </div>
    )
}

export default Pagination
