
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx"
import MyCart from "./pages/MyCart.jsx"
import SingleCard from './components/SingleCard.jsx';
import Navbar from "./components/Navbar.jsx"
import Home from './components/Home.jsx';
import { createContext, useEffect, useState } from 'react';
import Profile from './pages/Profile.jsx';

export const myContext = createContext()
function App() {

  const [apiData, setApiData] = useState([])
  const [cartData, setCartData] = useState([])
  // I want to call this function only first render of App

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



  return (
    
    <myContext.Provider value={{ cartData, setCartData }}>

      <>  <Navbar cartData={cartData} />
        <Routes>
          <Route path='/' element={<Home data={apiData}
          />} />
          <Route path='/mycart' element={<MyCart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/card/:id' element={<SingleCard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes></>
    </myContext.Provider>
  )
}

export default App