import React,{useState}from "react";
import "./styles.css";

export default function App() {
  var time
  const [items, setItems] = useState([]);

  function getrandomBool(n){
    var maxRandomCoeff=1000
    if(n>maxRandomCoeff) n=maxRandomCoeff
    return Math.floor(Math.random()*maxRandomCoeff)%n===0
  }
    function getsearchedItem(substr){
     let arr=["raunak","rohan","swati","sanjay","adi","om","krupa"]
     let temp=[]
     if(getrandomBool(2)){
     for(let i=0;i<arr.length;i++){
       let ele=(arr[i]).substr(0,substr.length)
       if(substr===ele){
        //  alert("ehe")
        temp.push(arr[i])
       }
     }
    }
     return(temp)
  }
  function debounce(...arguements){
    if (time){clearTimeout(time)}
    time=setTimeout(()=>{console.log(arguements[0])},arguements[1])
   return time
  }
 function getInput(e){
   
   let f=debounce(getsearchedItem(e.target.value),2000)
   console.log(f)
 }
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
    <input onChange={getInput}/>
    <br/>
    {items}
    {items.map((e)=>{return(<option>{e}</option>)})}
    </div>
  );
}

