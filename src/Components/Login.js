import React,{useState} from 'react'
import "./Login.css"
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({useremail:'',password:''})
  
  const setLoginData = () => {
    if (data.useremail && data.password) {
      axios.post('http://localhost:8001/login',data)
      .then((res) => {
        if (res.data.status === 200) {
          // localStorage.setItem('loginData',JSON.stringify(res.data.data))
          navigate('/home');
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
  const changeHandler = (e) => {
    setdata({...data,[e.target.name]:e.target.value})
  }
  // window.onload = () => {
  //   if (localStorage.getItem('loginData')) {
  //    navigate('/home');
  //   }
  // }
  return (
    <div className='Login_form'>
      <div className='Login_formData'>
      <h1>Login</h1>
        <label>Email</label>
        <input type='text' name="useremail" placeholder='Enter your email' onChange={changeHandler} required/>
        <label>Password</label>
        <input type='password' name="password"  placeholder='Enter your password'onChange={changeHandler} required/>
        <button onClick={setLoginData} ><Link to="/home" >Login</Link></button>
    </div>
    </div>
  )
}

export default Login