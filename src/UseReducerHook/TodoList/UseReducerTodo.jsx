import React, { useReducer, useState } from 'react'
import Modal from './Modal'

const UseReducerTodo = () => {
    const reducer = (state,action) =>{
        if(action.type === 'EMPTY'){
            return {
                ...state,
                message:'Please enter all the fields',
                show:true

            }
        }
    }
    const [name,setName] = useState('')
    const initialState = {
        todos:[],
        message:'',
        show:false
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name){
            dispatch({type:'EMPTY'})
        }
    } 
  return (
    <>
        {state.show && <Modal message = {state.message}/>}
        <div className="container col-sm-5">
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Todo..."
            className="form-control"
            name=""
            id=""
          />
          <button onClick={handleSubmit} className="btn btn-danger my-2 w-100">Add Todo</button>
        </form>
      </div>
    </>
  )
}

export default UseReducerTodo