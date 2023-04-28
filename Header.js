import React, { useRef, useState } from 'react'
import { NavLink, Route ,Routes} from "react-router-dom";
import image from './headbck.png';
import Add_Client from './Redux/Component/Add_Client';
import './Header.css'
import { useDispatch, useSelector} from 'react-redux'
import {filter_By_Credit, filter_By_Name} from './Redux/Actions/ProjectActions'
function Header() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const dispatch = useDispatch()
  const aff = useSelector(state => state.projectReducer.client)
  const ref=useRef("")
  const filter_Name =(e) => {
    
    dispatch(filter_By_Name(aff,e.target.value))  
  }
  const filter_Credit =(e) => {
    
    dispatch(filter_By_Credit(aff,e.target.value))
    
  }
  
  return (
    <div className='header'>
        
      <ul className='header-link'>
      <img src={image}></img>
      <NavLink to={'/kais'}  > ADVANS TUNISIE</NavLink>
      <li >
          <NavLink to={'../src'} > Home </NavLink>
      </li>
      <li> <Add_Client></Add_Client> </li>
      <li>
        {/* <button onClick={FilterPicker}> Search </button> */}
         {/* <input type={"text"} onChange = {filter_Name}></input>  */}
         <>
        <label>
          Pick a filter:
          <select
            value={selectedFilter}
            onChange={e => setSelectedFilter(e.target.value) }
          >
            <option value="Name" >Name</option>
            <option value="Montant">Montant</option>
            
          </select>
        </label>
        {selectedFilter=="Name"?<input type={"text"} onChange = {filter_Name}></input>:<input type={"text"} onChange = {filter_Credit}></input>}
        </>
        
       
      </li> 
      </ul> 
    
    </div>
  )
}

export default Header

/* react-scroll-animal
react-text-animation */