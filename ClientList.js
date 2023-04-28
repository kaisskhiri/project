import React from 'react'

import Client from './Client'
import './Client.css'

function ClientList({aff}) {
     
    
      return (
        <div>
    {
          
          aff.map((el,i) =><Client el={el} key={i}></Client>)
          
      } 
      
            </div>
      )
    }

export default ClientList