import './Style.css'
import {useState} from "react"



// function changee(e){
//   return <></>
// }
export default function App(){
  // const[num,setnum]=useState("0")
  const[text,setText]=useState("")
  function handleClick(e){
      setText(text+e)
    
  }

  function solve(){
    try{ 
      setText(eval(text))
  }catch(err){
    setText(err)
    console.log(err)
  }
}

  return <>
  <div className="board">
        <h1>Calculator Lets make it!</h1>
        <div className="main-calculator">
          <div className='display'>{text}</div>
          
          <div className="keypad">
            <div className="row-0">
              <button className='operator' onClick={()=>handleClick("/")}>/</button>
              <button className='operator' onClick={()=>handleClick("+")}>+</button>
              <button className='operator' onClick={()=>handleClick("-")}>-</button>
              <button className='operator' onClick={()=>handleClick("*")}>*</button>
            </div>
            <div className="row-1">
              <button onClick={()=>handleClick("1")}>1</button>
              <button onClick={()=>handleClick("2")}>2</button>
              <button onClick={()=>handleClick("3")}>3</button>
              <button onClick={()=>handleClick("4")}>4</button>
              <button onClick={()=>handleClick("5")}>5</button>
            </div>
            <div className="row-2">
              <button onClick={()=>handleClick("7")}>7</button>
              <button onClick={()=>handleClick("8")}>8</button>
              <button onClick={()=>handleClick("6")}>6</button>
              <button onClick={()=>handleClick("9")}>9</button>
              <button  onClick={()=>handleClick("0")}>0</button>
            </div>
            <div className="row-3">
            <button onClick={()=>handleClick(".")}>.</button>
            <button className='operator'onClick={()=>solve()}>=</button>
            <button className='operator' onClick={()=>setText(0)}>CLR</button>
              <button className='operator' onClick={()=>setText( text.slice(0,-1))}>DEL</button>
            </div>        

          </div>
        </div>
 </div> 
  
  </>
}

