import React,{useEffect} from 'react'
import "./Home.css";
import CardComponent from './CardComponent'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
const Home = () => {
const navigate = useNavigate();
useEffect(() => {
  if (JSON.parse(localStorage.getItem('loginData'))===null) {
    navigate('/login');
  }
}, []);

  return (
   
    // <div className="Home_Body">
    // <div className='Home_Courses'>
    //   <div className='home_circle'></div>    
    //   <div className='Home_Courses_Card'>
    //   <p>Summer Collections <span>2023</span></p>
    //   </div>
    //   <div className="Home_Courses_Card">
    //   <img src="/Images/product3.png" alt="summer"/>
    //   <div className='home_circle_2'></div>   
    //   </div>
    // </div>
    // <h3 className="Home_Courses_Title">Popular <span>Products</span></h3>
<>
    <div className='Home_Products'>    
          <CardComponent
          key="1"
          courseName="Nike Air Jordan-100"
          id="product_1"
          rating=" (4.5)"
          price="$20.20"
          image="/Images/product1.jpg"
          />

          <CardComponent
          key="2"
          courseName="Nike Air Jordan-100"
          id="product_2"
          rating=" (4.5)"
          price="$40.20"
          image="/Images/product2.jpg"
          />
        <div className='home_circle'></div>    
          <CardComponent
          key="3"
          courseName="Nike Air Jordan-100"
          id="product_3"
          rating=" (4.5)"
          price="$50.20"
          image="/Images/product1.jpg"
          />
          <CardComponent
          key="4"
          courseName="Nike Air Jordan-100"
          id="product_3"
          rating=" (4.5)"
          price="$70.20"
          image="/Images/product3.png"
          />
           <div className='home_circle_2'></div>   
          </div>
          <Footer/>
          <div className='Home_Footer_Container_5'>
            <p>© 2023 All Rights Reserved. Designed by <span>Mayank</span></p>
        </div>
        </>
  )
}

export default Home