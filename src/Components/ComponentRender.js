import React,{useState,useEffect} from 'react'
import Home from './Home'
import Login from './Login'
const ComponentRender = () => {
const [loginData, setloginData] = useState({});
useEffect(() => {
  setloginData(JSON.parse(localStorage.getItem('loginData')));
}, []);

  return (
    <>
    {
        (loginData===null) ? <Login/> : <Home/>
    }
    </>
  )
}

export default ComponentRender;