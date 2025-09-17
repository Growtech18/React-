import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
export const userContext = createContext();
const userName = "parth Rajput";
const userName2 = "vikas khandola";
const user = {
  firstName:"vineet",
  lastName:"kahar",
  age:21
}
root.render(
  <userContext.Provider value={{userName, userName2, user}}>
    <BrowserRouter>  <App /></BrowserRouter>
  </userContext.Provider>


);


