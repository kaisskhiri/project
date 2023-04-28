import {ADD_CLIENT , FILTER_NAME,DELETE_CLIENT, FILTER_CREDIT}from '../Actions/Type'
import '../Component/Client.css'



const initState ={

client : [
    {
        id : "1" ,
        name : "Med Salah Bergaoui",
        credit : "20000",
        nbr_Echeance :"24",
        nbr_Echeance_restant :"20",
        montant_restant :"20000",
        genre : "H"
    },
    {
        id : "2" ,
        name : "Ridha Azebi",
        credit : "8000",
        nbr_Echeance :"24",
        nbr_Echeance_restant :"6",
        montant_restant :"2400",
        genre : "H"
    },
    {
        id : "3" ,
        name : "Iadh Hadj Ammar",
        credit : "20000",
        nbr_Echeance :"12",
        nbr_Echeance_restant :"12",
        montant_restant :"21600",
        genre : "H"
    },
    {
        id : "4" ,
        name : "Sami Achour",
        credit : "22000",
        nbr_Echeance :"24",
        nbr_Echeance_restant :"8",
        montant_restant :"8400",
        genre : "H"
    },
    {
        id : "5" ,
        name : "Bessem Nehri",
        credit : "9600",
        nbr_Echeance :"24",
        nbr_Echeance_restant :"4",
        montant_restant :"2400",
        genre : "H"
    },
    {
        id : "6" ,
        name : "Med Sayed Trimech",
        credit : "15000",
        nbr_Echeance :"24",
        nbr_Echeance_restant :"18",
        montant_restant :"13500",
        genre : "H"
    },
    {
        id : "7" ,
        name : "Karima Souid",
        credit : "20000",
        nbr_Echeance :"24",
        nbr_Echeance_restant :"22",
        montant_restant :"22000",
        genre : "F"
    },
    {
        id : "8" ,
        name : "Nabil Jaziri",
        credit : "28500",
        nbr_Echeance :"20",
        nbr_Echeance_restant :"1",
        montant_restant :"1700",
        genre : "H"
    },{
        id : "9" ,
        name : "Mhamed Kabi",
        credit : "8000",
        nbr_Echeance :"24",
        nbr_Echeance_restant :"19",
        montant_restant :"7600",
        genre : "H"
    },
    {
        id : "10" ,
        name : "Afli Kaouther",
        credit : "6000",
        nbr_Echeance :"18",
        nbr_Echeance_restant :"4",
        montant_restant :"1680",
        genre : "F"
    },
    

]}
const filterclient=initState

const projectReducer = (state = initState , {type , payload,query})=>
{
    switch (type) {
        case  ADD_CLIENT :
            return {
                ...state , client : [...state.client
                ,payload] 
            }

        case  DELETE_CLIENT :
             return {
                 ...state , client : state.client.filter(elm => elm.id !== payload)   
             }
             case  FILTER_CREDIT :
                return {  ...state , client : filterclient.client.filter(elm => elm.credit.includes(query))   }     
        /*case  TOGGLE :
             return {
                 ...state , task : state.task.map(elm =>elm.id ===payload ? {...elm,isDone:!elm.isDone} : elm )   
             }
        
        case  EDIT :
                return {
                 ...state , task : state.task.map(elm =>elm.id ===payload.id ? payload:  elm )    
                }*/
        case  FILTER_NAME :
             return {  ...state , client : filterclient.client.filter(elm => elm.name.toLowerCase().includes(query))   }
   default :  return state
   

}

}

export default projectReducer

/*const filtrer = (liste, query) => {

    liste.Filter((chercher) => chercher.toLowerCase().includes(query.toLowerCase()))
    console.log(liste,"far");*/