import React, {Component } from "react"
import {useEffect} from "react"
import axios from "axios"
import FunctionC from "./functionC.js"
import {Button,Form,FloatingLabel} from "react-bootstrap"
class Input extends Component{

 
state ={
    text:"",
    nur:"",
    attr:"",
    val:"",
    attrCheck:"",
    try:"",
    sku:"",
    placeholder:{
        sku:"sku",
        price:"price",
        name:"name"
    },
main:{
size:"",
length:"",
width:"",


},
mis:"",


sen:{
    size:"",
    length:"",
    width:"",
    
    
    },


}


handleAdd4 = async e =>{
    await this.setState({
        sku: e.target.value,
     })
       
    }


    handleAddWidth = async e =>{
        await this.setState({
            sen:{width: e.target.value}
         })
           
        }
        handleAddLength = async e =>{
            await this.setState({
                sen:{length: e.target.value}
             })
             
            }

            handleAddSize = async e =>{
                await this.setState({
                    sen:{size: e.target.value}
                 })
                
                }
            
        
    





handleAdd3 = async e =>{
    
    await this.setState({
        attr: e.target.value,
        attrCheck: e.target.value
    })
    const url = "https://phpproduct.herokuapp.com/newIndex.php";
    let formData = new FormData();
    
    formData.append("atrrCheck",
    this.state.attrCheck);
 
    axios.post(url,formData)
    .then(res=> 
  
    
        this.setState({
        try: res.data,
        mis: res.data[0],
        main:{size:res.data[2],
            length:res.data[4],
width:res.data[3]
        
        }
        
    })
    
  
    
    )
    .catch(err=>console.log(err))
    console.log(this.state.try);
  
    }


    

      

render(){




return(
<div>


<div>
<form id="product_form">
<Form.Select size="lg" onChange={this.handleAdd3} id="productType">

<option disabled selected value >Please select product</option>
  <option id="Book" value="Book">Book</option>
  <option id="DVD" value="Dvd">DVD</option>
  <option id="Furniture" value="Furniture">Furniture</option>

</Form.Select>


     </form>
     

     <FunctionC propx={this.state.try} propxx={this.state.main} propText={this.state.text} propNur={this.state.nur} propSku={this.state.sku}></FunctionC>
      </div>
     
</div>
)





}}

export default Input;
