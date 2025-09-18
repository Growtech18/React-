

import Navbar from "./components/Navbar.jsx"
import Home from './components/Home.jsx';
import { createContext, useEffect, useState } from 'react';
import Pagination from './components/Pagination.jsx';

export const myContext = createContext()
function App() {
  //1-step
  const [apiData, setApiData] = useState([])
  
  //step-4 done
  const [currentPage, setCurrentPage] = useState(1);

  //step-3 done
let totalCardInUI=3;

  //2nd api caLLING
  async function getData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json()
      // console.log("api response is", data)
      setApiData(data)
    }
    catch (err) {
      console.log("Getting an error while fetching the data")
    }
  }

  // this willcall 1st time when app is rendering
  useEffect(() => {
    getData("https://fakestoreapi.com/products/");
  }, [])

  //step-5 
  let totalLength = apiData?.length;
  // console.log(totalLength)
  // step-6
  const totalPages = Math.ceil(totalLength / totalCardInUI);
  // console.log(totalLength / totalCardInUI)
  // console.log(totalPages)

  //step 7 buttons
  let buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(i)
  }
  

  // get the lastIndex and firstIndex so that you can decide kee kitne cards dikhane hai
  let lastIndex=currentPage*totalCardInUI;
  let firstIndex=(currentPage-1)*totalCardInUI;

// you have to slice the array ki kon se card ui me dikhane hai
let UiValueCard=apiData.slice(firstIndex,lastIndex)
  




  return (

    <myContext.Provider value={{ UiValueCard,buttons,setCurrentPage,currentPage }}>

      <Navbar />
      <Home/>

      {/* pagination bna leaya  */}
      <Pagination/>


    </myContext.Provider>
  )
}

export default App