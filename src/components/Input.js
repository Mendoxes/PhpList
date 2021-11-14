import React, {Component } from "react"
import {useEffect} from "react"
import axios from "axios"
import FunctionC from "./functionC.js"
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
    //     (console.log(res.data)),
    //    res=>
    
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


    

// handleAdd2 = async e =>{
// await this.setState({
//     nur: e.target.value
// })
   
// }

// handleAdd = async e =>{

//     await this.setState({
//         text: e.target.value
        
//     })
//         }
    
//     handleSubmit = e =>{
    
    
//         // console.log(Boolean(this.state.text));

   
//         e.preventDefault();
//         // // console.log(ab);

        
//         let formData = new FormData();
//         console.log(this.state.text)
//         formData.append("text",
//         this.state.text);
//         formData.append("nur",
//         this.state.nur);
//         formData.append("attr",
//         this.state.attr);
//         formData.append("sku",
//     this.state.sku);
//     formData.append("size",
//     this.state.sen.size);
//     formData.append("width",
//     this.state.sen.width);
//     formData.append("length",
//     this.state.sen.length)
//     // formData.append("size","sja");
//         // console.log(formData)
//         const url = "http://localhost/testPHP/newIndex.php";
//         console.log(formData)
//         // for (var key of formData.entries()) {
//         //     console.log(key[0] + ', ' + key[1]);
//         // }
//         axios.post(url,formData)
//         .then(res=> 
            
            
//             // console.log(res.data),
//             // res=>
        
//             this.setState({
//                 placeholder:{sku: res.data},
              
                
//             })    
//         )

//         .catch(err=>console.log(err))
//         // window.location.reload(false);
//     //   document.getElementById("text1").value = null;
//           }
    
      

render(){



    // for (let i =0; i<=props.props.length-3;i++){
        
    //     bucketMe.push(<div >
    //         <input required  id={props.props[i+2]} placeholder={props.props[i+2]}></input>
            
    //       </div>)
      
    //     }
  
        // for (let i = 0 ; i<=this.state.try-3;i++){
        //     this.state.try[i+2]
        // }
// let mino ="ok";
// console.log(this.state.try);
// if (this.state.try[1]){
// console.log(this.state.try[1]);}
//     const isInvalid = this.state.text ===""||this.state.attr ===""||this.state.nur==="";
//     for (let i =0; i<=this.state.try.length-3;i++){
 
   
// console.log(this.state.try[i+2]);}


//     function MyComp(props) {
//        function handleMe (e){
           
//          console.log(e.target.value);
//     mino = e.target.value;
    
//               return mino
//             }
           
        
// const bucketMe =[]
//         for (let i =0; i<=props.props.length-3;i++){

//         bucketMe.push(<div >
//             <input required onChange={handleMe}  id={props.props[i+2]} placeholder={props.props[i+2]}></input>
            
//           </div>)
      
//         }
        
//         console.log(props.props)
//          console.log(mino)
//         return (
//          bucketMe
//         );
//       }

return(
<div>


<div>
<form id="product_form">
<select onChange={this.handleAdd3} id="productType">
<option disabled selected value >Please select product</option>
  <option id="Book" value="Book">Book</option>
  <option id="DVD" value="Dvd">Dvd</option>
  <option id="Furniture" value="Furniture">Furniture</option>

</select>

{/* <br/>
{this.state.try[2]&&<input required onChange={this.handleAddSize} id={this.state.try[2]} placeholder={this.state.try[2]} ></input>} <br/>
{this.state.main.width&&<input required onChange={this.handleAddWidth}   placeholder={this.state.main.width} ></input>}<br/>
{this.state.main.length&&<input required onChange={this.handleAddLength}  placeholder={this.state.main.length} ></input>} */}
    {/* <div id="Dvd">{this.state.try[0]}</div> */}
{/* <FunctionC propx={this.state.try} text={this.state.text}></FunctionC> */}
  {/* <MyComp props={this.state.try}/> */}
  {/* <p>{this.state.placeholder.sku}</p>
<input required onChange={this.handleAdd4} className="form-control" type="text" id="text1" placeholder={this.state.placeholder.sku}></input>
<input required onChange={this.handleAdd2} className="form-control" type="text" id="text2" placeholder={this.state.placeholder.price}></input>
<input required onChange={this.handleAdd} className="form-control" type="text" id="text3" placeholder={this.state.placeholder.name}></input>

<button disabled={isInvalid} onClick={this.handleSubmit} className="btn btn-success"  id="submit">Submit</button> */}
     </form>
     

     <FunctionC propx={this.state.try} propxx={this.state.main} propText={this.state.text} propNur={this.state.nur} propSku={this.state.sku}></FunctionC>
      </div>
     
</div>
)





}}

export default Input;
