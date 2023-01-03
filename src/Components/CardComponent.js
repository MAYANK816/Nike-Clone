import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const CardComponent = ({courseName,id,rating,price,image}) => {
  return (
    <Card style={{margin:"20px", width:"300px", border:"none", outline:"none", borderRadius:"0px"}} className="Card_div">
    <CardMedia
      component="img"
      height="220"
      image={image}
      alt="green iguana"
      style={{backgroundImage:"url('/Images/BackgroundImage.jpg')"}}
    />
    <CardContent style={{backgroundColor: "#121513", color: "white"}}>
    <Typography variant="p" color="text.secondary ">
    <i class="fa-solid fa-star"></i>{rating}
      </Typography>
      <Typography gutterBottom variant="p" component="div">
        {courseName}
      </Typography>
      <Typography variant="p" component="div">
      {price}
       <Button size="small" ><Link to={`/course/${id}`} style={{color:"white", background:"#3e92fc",padding:"3px",borderRadius:"2px", marginLeft:"5px"}}>Buy Now</Link></Button>
      </Typography>
    </CardContent>
   
  </Card>
  )
}

export default CardComponent