"use client"
import { IBook } from "./types"

interface Props{
    elm:IBook
}
export const Book=({elm}:Props)=>{
    return <div className="book" >
         <img  src={elm.photo}/>
    <p>{elm.title} </p>
       <p> <strong> by {elm.author}</strong></p>
    <strong>{elm.price} AMD</strong>
   
  </div>
}