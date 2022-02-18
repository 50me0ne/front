import './App.css';
import {Home} from './Home';
import {Navigation} from './Navigation';
import Login from './Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React from 'react';
import useToken from './useToken';
function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} api={process.env.REACT_APP_API} />
  }
  return (
  <BrowserRouter>
      <div className="container">
        <h3 className='m-3 d-flex justify-content-center'>Recibos</h3>
      </div>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
