
import React,{useState,useEffect} from 'react'
import axios from "axios"
// import { useHistory } from "react-router-dom";

export default function FunctionC({propx,propxx,propText,propNur,propSku}) {
    // let history = useHistory();
const [state,setState]=useState("");
const [width,setWidth]=useState("")
const [length,setLength]=useState("")
const [height,setHight]=useState("")
const [size,setSize]=useState("")
const [weight,setWeight]=useState("")
const [type,setType]=useState("")
const [post,setPost]=useState("")
const [cost,setCost]=useState("")
const [name,setName]=useState("")

// useEffect(() => {
// setState(propSku)

// }, [propSku])



useEffect(() => {
 console.log(state)
}, [state])


function handleSku(e){

setState(e.target.value)
}

function handleName(e){

    setName(e.target.value)
    }

function handleCost(e){

    setCost(e.target.value)
    }


   console.log(propx);
//    console.log(propxx);
if (propx[1]){
    console.log(propx[1]+ "to jest to")


}

function handleChange(e){

    
    console.log(e.target.value)
    
    }



function handleHeightChange(e){

   setHight(e.target.value)
console.log(e.target.value)

}




function handleWidthChange(e){
    setWidth(e.target.value)
    
    console.log(e.target.value)
    
    }

    function handleLengthChange(e){

        setLength(e.target.value)
        console.log(e.target.value)
        
        }


        function handleSizeChange(e){

            setSize(e.target.value)
            console.log(e.target.value)
            
            }


            function handleWeightChange(e){

                setWeight(e.target.value)
                console.log(e.target.value)
                
                }


// console.log(propx[1])
// console.log(propText)
// console.log(propSku);
// console.log(propNur)

function createPost(e) {
    e.preventDefault();

    let formData = new FormData();

//width
formData.append("type",propx[0]);

formData.append("sku",state);
formData.append("name",name);
formData.append("cost",cost);
   formData.append(propx[3],width);
   formData.append(propx[2],height);
formData.append(propx[4],length);

formData.append("size",size);
formData.append("weight",weight);

    axios
      .post("http://localhost/testPHP/IndexEnd.php", formData)
      .then((response) => {
        //   console.log(response)
        setPost(response.data);
      });
    //      
      
  }



useEffect(() => {
 if(post =="Data succes"){
    window.location.replace("/");
 }
},[post])


    return (
        

        <div>
           
            <form >
                {post}
                <input onChange={handleSku} placeholder="sku" required></input>
                <input onChange={handleCost} placeholder="Price" required></input>
                <input onChange={handleName} placeholder="Name" required></input>
            {!!propx[1]&&<input onChange={handleHeightChange} required placeholder={propx[2]}></input>}
            {!!propx[1]&&<input onChange={handleWidthChange} required placeholder={propx[3]}></input>}
            {!!propx[1]&&<input onChange={handleLengthChange} required placeholder={propx[4]}></input>}
            {propx[0]=="Dvd"?<input onChange={handleSizeChange} required placeholder={propx[2]}></input>:null}
            {propx[0]=="Book"?<input onChange={handleWeightChange} required placeholder={propx[2]}></input>:null}
            <button onClick={createPost} > Save</button>
            
            </form>
           <a href="/"> <button >Back</button></a>
  {/* {state}
  Height: {height}
  Width: {width}
  Length: {length} */}
        </div>
    )
}
