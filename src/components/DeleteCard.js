import React, { useState } from 'react'
import { useCallback,useEffect } from 'react';
import axios from "axios";

export default function DeleteCard({prop}) {






const [state,setState] =useState({val:""})


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
    const url = "http://localhost/testPHP/newIndex.php";
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
             <button onClick={deleteMe}>Delete Button</button>
             {state.val}
        </div>
    )
}








