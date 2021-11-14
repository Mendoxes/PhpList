import React, {useState} from 'react'
import {Card,ListGroup} from "react-bootstrap"
import "./cards.css"
import DeleteCard from "./DeleteCard.js"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Cards({state}) {
const [arr,setArr]=useState([]);

let ok = []

  const selectCheck = (e) => {
    const checked = e.target.checked;
    if (checked) {
  

ok.push(e.target.id)
console.log(ok)


    } else {
   ok = ok.filter(el => el !== e.target.id);

    }
  };


  const Ok = ()=>{
    let bucket = [];
    if(state){
    
    for (let i = 0 ; i<=state.length-1 ; i++){
      bucket.push(   <div className="each_card" key={state[i].sku}>
          <Card   style={{ width: '18rem' }}>
      <Card.Header><input onClick={(e) => {
                                selectCheck(e);
                            }}   type="checkbox" id={state[i].sku} name="scales"
         ></input>  </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{state[i].sku}</ListGroup.Item>
        <ListGroup.Item>{state[i].name}</ListGroup.Item>
        <ListGroup.Item>{state[i].price}$</ListGroup.Item>
        <ListGroup.Item>{state[i].attrubutes}</ListGroup.Item>
        
      </ListGroup>
    </Card></div>)
}

  
  return bucket
}}


    return (
        <div>
          <DeleteCard prop={ok}/>
         <a href="add">ADD</a>
          <div className="cardM" >
          <Ok ></Ok></div>
            
     
        </div>
    )
}
