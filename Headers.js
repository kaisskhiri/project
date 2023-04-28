import React, { useRef, useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./Headers.css";
import { NavLink, Route ,Routes} from "react-router-dom";
const Headers= (props) =>  {
  const chercher =useRef();
  const filtrer = () => {

    props.setFilter(props.liste.filter((e) => e.title.toLowerCase().includes(chercher.current.value.toLowerCase())))
    
}
const [rating,setRating]=useState(1)
const onStarClick =(nextvalue) =>{

 setRating(nextvalue);
 props.setFilter(props.liste.filter((e) => e.rating>=nextvalue))
}

  return (
    <div className="header">
      <div className="container">
      <div className="logo">
       <NavLink to={'/'}> Movie </NavLink> 
      </div>
      <ul className="nav-link">
        <li>
          <NavLink to={'Movievideo'}> MovieVideo</NavLink>
        </li>
        <li>
        <NavLink to={'ListeMovie'}> MovieListe</NavLink>
         
        </li>
        <li>
          <a href="/"> Filter </a>
        </li>
        <li>
       
<input type={"text"} placeholder="Enter your movie" ref={chercher} onChange={filtrer}></input>
<StarRatingComponent 
          name="rate2" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}    />
        </li>
      </ul>
      
      </div>
    </div>
  );
}

export default Headers;
