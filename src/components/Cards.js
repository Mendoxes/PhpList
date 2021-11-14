import React, {useState} from 'react'
import {Card,ListGroup,Button} from "react-bootstrap"
import "./cards.css"
import DeleteCard from "./DeleteCard.js"
import { useMediaQuery } from 'react-responsive'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function Cards({state}) {
const [arr,setArr]=useState([]);

const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
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
                            }} className="delete-checkbox"   type="checkbox" id={state[i].sku} name="scales"
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
        <div >
          <div className="header">
            <h1 class="header_text">Product List</h1>
            {!isTabletOrMobile&&<div className="buttons_container">
          <DeleteCard prop={ok}/>
         <a href="add"><Button style={{paddingLeft:"2rem",paddingRight:"2rem",marginRight:"1rem"}} variant="success" size="lg">ADD</Button></a>
         </div>}

         {isTabletOrMobile&&<div className="buttons_container">
          <DeleteCard prop={ok}/>
         <a href="add"><Button  variant="success" size="sl">ADD</Button></a>
         </div>}
         
         </div>
         <hr/>



          <div className="cardM" >
          <Ok ></Ok></div>
            
     
        </div>
    )
}
