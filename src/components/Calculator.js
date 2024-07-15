import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { setOperator } from '../actions/Calculator_actions'
 
 


const Calculator = () => {
   

    const operator=useSelector((state)=>state)
    const input1=useSelector((state)=>state)
    console.log(input1)
    const dispatch=useDispatch()

const numbers=[1,2,3,4,5,6,7,8,9,0]


    const handleClick=(e)=>{
         
        dispatch(input1)
    }

    const handelclear=(result)=>{
        // dispatch(result)
    }

    const handelOperatorChange=(e)=>{
        dispatch(setOperator(e.target.value))
    }
  return (
    <div className='contianer'  >
    <input type='number' placeholder='inputOne'/>
    <select value={operator} onChange={handelOperatorChange}>
        <option>+</option>
        <option>-</option>
        <option >*</option>
        <option>/</option>

    </select>
    
    <input type='number' placeholder='inputTwo'/>
    =
    <input type='number' placeholder='Result'/>
    <div>
    {numbers.map((item,index)=>(
        <button key={index}   value={input1}  onClick={()=>{handleClick()}}>{item}</button>
    ))}
        
       
        <button  onClick={()=>{handelclear()}}>clear</button>
        <button>result</button>
    </div>
    </div>
  )
}

export default Calculator