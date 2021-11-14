import React, { useState } from 'react'
import { useCallback,useEffect } from 'react';
import axios from "axios";
import {Button} from "react-bootstrap"
import { useMediaQuery } from 'react-responsive'

export default function DeleteCard({prop}) {






const [state,setState] =useState({val:""})

const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
function deleteMe(e){

    window.location.reload(false);

        
        setState({
             val: "ok"
           
         })}
     
     


useEffect(() => {
    // e.preventDefault();
    // // console.log(ab);
    let formData = new FormData();
 
    formData.append("delete",
    state.val);
    formData.append("columns",
    prop);
    console.log(state)
    console.log(formData)
    const url = "https://phpproduct.herokuapp.com/newIndex.php";
    console.log(formData)
    // for (var key of formData.entries()) {
    //     console.log(key[0] + ', ' + key[1]);
    // }
    axios.post(url,formData)
    .then(res=> console.log(res.data) +"delete function")
    .catch(err=>console.log(err))

}, [state])


       
     





    return (
        <div>
        {!isTabletOrMobile&&<Button style={{paddingLeft:"2rem",paddingRight:"2rem"}} variant="danger" size="lg" onClick={deleteMe}>MASS DELETE</Button>}
        {isTabletOrMobile&&<Button style={{fontSize:"0.6rem",padding:0}}  variant="danger" size="sm" onClick={deleteMe}>MASS DELETE</Button>}   
        </div>
    )
}








