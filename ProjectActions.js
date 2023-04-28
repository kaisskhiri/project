import { v4 as uuidv4 } from 'uuid';
import {ADD_CLIENT,FILTER_NAME,DELETE_CLIENT,FILTER_CREDIT} from '../Actions/Type'

export const add_Client = (newClient) =>  {
    return{
    type : ADD_CLIENT ,
    payload : {...newClient , id : uuidv4() }
}}
export const filter_By_Name = (client,query) =>  {
    return{
    type : FILTER_NAME ,
    payload : client,query}
}
export const delete_Client = (id) =>  {
    return{
    type : DELETE_CLIENT ,
    payload : id
}}
export const filter_By_Credit = (client,query) =>  {
    return{
    type : FILTER_CREDIT ,
    payload : client,query}
}

