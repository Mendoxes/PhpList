
import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Form,FloatingLabel,Button} from "react-bootstrap"
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
const [validation,setValidation]=useState(true)




useEffect(() => {
    if(propx){
  setValidation(false)}
  else {setValidation(true)}
}, [propx])



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
      .post("https://phpproduct.herokuapp.com/indexEnd.php", formData)
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
                <FloatingLabel
    
    label="Sku"
    className="mb-2"
  >
    <Form.Control onChange={handleSku} placeholder="sku" id="sku" required />
    </FloatingLabel>
    <FloatingLabel
    
    label="Price"
    className="mb-3"
  >
    <Form.Control onChange={handleCost} placeholder="Price" id="price" required />
    </FloatingLabel>
    <FloatingLabel
    
    label="Name"
    className="mb-3"
  >
    <Form.Control onChange={handleName} placeholder="Name" id="name" required/>
  </FloatingLabel>



  {!!propx[1]&&<FloatingLabel
    
    label="Height(cm)"
    className="mb-3"
  >
    <Form.Control onChange={handleHeightChange} id="height" required placeholder={propx[2]}/>
  </FloatingLabel>}

  {!!propx[1]&&<FloatingLabel
    
    label="Width(cm)"
    className="mb-3"
  >
    <Form.Control onChange={handleWidthChange}  id="width" required placeholder={propx[3]}/>
  </FloatingLabel>}

  {!!propx[1]&&<FloatingLabel
    
    label="Length(cm)"
    className="mb-3"
  >
    <Form.Control onChange={handleLengthChange} id="length" required placeholder={propx[4]}/>
  </FloatingLabel>}

  {propx[0]=="Dvd"?<FloatingLabel
    
    label="Size(MB)"
    className="mb-3"
  >
    <Form.Control onChange={handleSizeChange} id="size" required placeholder={propx[2]}/>
  </FloatingLabel>:null}


  {propx[0]=="Book"?<FloatingLabel
    
    label="Weight(kg)"
    className="mb-3"
  >
    <Form.Control onChange={handleWeightChange} id="weight" required placeholder={propx[2]}/>
  </FloatingLabel>:null}
          
          
        
            <Button disabled={validation} size="lg" variant="outline-success" onClick={createPost} > Save</Button>
            <a href="/"> <Button variant="outline-danger" size="lg">Back</Button></a>
            </form>
           
    
        </div>
    )
}

