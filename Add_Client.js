import React,{useState} from 'react'
import {add_Client}from '../Actions/ProjectActions'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import BasicSelect from './Select'

function Add_Client(props) {
    const [show,setShow] = useState()
    const [input , setInput] = useState(
        {name : " " ,
        credit :" " ,
        nbr_Echeance : " ",
        nbr_Echeance_restant :"",
        montant_restant :"",
        genre : ""
      
      })
    
    const dispatch = useDispatch()
    const addNewClient =() =>{
        dispatch(add_Client({...input,montant_restant : input.credit,nbr_Echeance_restant :input.nbr_Echeance,}));
        
        handleClose()
        
    }
    const handleClose = () => {
      setShow(false);
     
    };
    const handleShow = () => setShow(true);
    
      return (
        <div>
        <Button variant="primary" onClick={handleShow} className ="btn-ajout">
        Add_New_Client
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color : "red" , font : "bold"  }}>Ajout de Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     
    <input type={"text"} placeholder='enter name of client' onChange={(e)=>setInput({...input,name : e.target.value}) }></input>
    <input type={"text"} placeholder='enter monatant' onChange={(e)=>setInput({...input ,credit : e.target.value}) }></input>
    <input type={"text"} placeholder='enter period of credit' onChange={(e)=>setInput({...input ,nbr_Echeance : e.target.value}) }></input> 
    <label><input type="radio" name="myRadio" value="Homme" onChange={(e)=>setInput({...input,genre : e.target.value})}/> H </label>
    <label><input type="radio" name="myRadio" value="Femme" onChange={(e)=>setInput({...input,genre : e.target.value})} /> F </label>
     
        </Modal.Body>
       
<Button variant="secondary" onClick={handleClose}>
  Close
</Button>
<Button variant="primary" onClick={addNewClient}>
  Save Changes
</Button>
</Modal>

        </div>
      )
    }
    
    export default Add_Client



  