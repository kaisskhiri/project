import React, { useState } from 'react'
import './Client.css'
import { useDispatch } from 'react-redux'
import {delete_Client} from '../Actions/ProjectActions'
function Client({el}) {
  function addDaysToDate(date, days){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}
var tmpDate = new Date()
const d = addDaysToDate(tmpDate, 30)


   const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch()
  const remove_client =()=>{  
        dispatch(delete_Client(el.id))
        alert("Are You Sure To Delete " + el.name + " From Your Liste")
  }
  const handleClick = event => {
   
    setIsShown(current => !current);}
      

  return (
    <div>
      <h1 style={{fontSize : '2rem'}} ><button className='credit-Info' href='{el.name}' onClick={handleClick}> {el.name} </button></h1>

      
     {isShown?  (
        
        <div>
        <ul> 
        <li > Montat Initial : {el.credit}</li>
        <li > Durée Crédit : {el.nbr_Echeance}</li>
        <li > Echance Restante : {el.nbr_Echeance_restant}</li>
        <li > Capital Restant : {el.montant_restant}</li>
        <li > Date échance : {d.toLocaleDateString()}</li>
        <li>  Montant Echéance : {(el.credit/el.nbr_Echeance)+((el.credit/el.nbr_Echeance)*0.278)}</li>
        <li>  Genre : {(el.genre)}</li>
        </ul>
        <button onClick={remove_client}> Remove_Client </button>
        </div> 
        ):null}</div> );   
        
       
        
      
}

export default Client
/*<input type={"text"} onChange={(e)=>setClient({name : e.target.value }) }></input>
<button onClick={addNewClient}> Add_New_Client</button>
import {useState} from 'react';

export default function App() {
  


*/