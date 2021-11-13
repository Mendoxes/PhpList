import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useCallback,useEffect,useState} from "react"
import Cards from "./components/Cards.js"
import Input from "./components/Input"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

 const [ab,setAb]=useState("ok")






  const [state,setState]=useState([1,2])
; 
  const fetchData2 = useCallback(async ()=>
{
    const result3 = await axios.get(`http://localhost/testPHP/index.php`);

    console.log(result3.data)
setState(result3.data)
})


useEffect(() => {
fetchData2()
}, [])






  return (




    <div className="App">



<BrowserRouter>
    <Routes>
      <Route path="/" element={<Cards state={state}/>} />
      <Route path="Add" element={<Input />} />
     
    </Routes>
  </BrowserRouter>,
    
 









</div>




    
    
    
  );
}

export default App;
