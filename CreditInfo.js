import React from 'react'
import './Client.css'
import { useDispatch } from 'react-redux'
import {delete_Client} from '../Actions/ProjectActions'
import { NavLink, Route, Routes } from "react-router-dom";
function CreditInfo({el}) {
  const dispatch = useDispatch()
  const remove_client =()=>{
        dispatch(delete_Client(el.id))
        alert("Are You Sure To Delete " + el.name + " From Your Liste")
  }

  return (   
     <div>  
        <h1> {el.name} </h1>
        <ul > 
        <li style={{fontSize : '2rem'}} > Montat Initial : {el.credit}</li>
        <li style={{fontSize : '2rem'}}> Durée Crédit : {el.nbr_Echéance}</li>
        <li style={{fontSize : '2rem'}}> Echance Restante : {el.nbr_Echéance_restant}</li>
        <li style={{fontSize : '2rem'}}> Capital Restant : {el.montant_restant}</li>
        <li style={{fontSize : '2rem'}}> Date échance : {new Date().toLocaleDateString()}</li>
        </ul>
        <button onClick={remove_client}> Remove_Client </button>
    </div>   
  )
}

export default CreditInfo