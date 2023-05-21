import React, { useState } from "react";
import Modal from "./Modal";

const Todo = () => {
  const [name, setName] = useState("");
  const [todos,setTodos] = useState([])
  const [show,setShow] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos,name])
    setShow(true)
  }
  return (
    <>
    {show && <Modal/>}
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
  );
};

export default Todo;
