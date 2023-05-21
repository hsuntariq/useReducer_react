import React, { useReducer } from 'react'

const Counter = () => {
  const reducer = (state,action)=>{
    // console.log(state,action)
    if(action.type === 'DECREASE'){
      return state-1
    }if(action.type === 'RESET'){
      return state = 0
    }if(action.type === 'INCREASE'){
      return state+1
    }
    // return state
  }
  const initialState = 0
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
        <div className="container text-center">
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:'DECREASE'})} className="btn btn-danger mx-2">Decrease</button>
            <button onClick={()=>dispatch({type:'RESET'})} className="btn btn-warning mx-2">Reset</button>
            <button onClick={()=>dispatch({type:'INCREASE'})} className="btn btn-success mx-2">Increase</button>
        </div>
    </>
  )
}

export default Counter