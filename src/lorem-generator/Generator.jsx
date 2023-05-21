import React, { useState } from "react";
import { data } from "./data";

const Generator = () => {
  const [number, setNumber] = useState(0);
  const [myData, setMyData] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setMyData(data.slice(0,number));
  };
  return (
    <>
      <div className="container text-center col-lg-4 ">
        <h1>Lorem Generator</h1>
        <form>
          <input
            className="form-control"
            type="number"
            placeholder="number..."
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button onClick={handleClick} className="btn btn-dark my-3 w-100">
            Generate
          </button>
        </form>
      </div>
      <div className="container">
        {myData.map((data) => {
          return (
            <>
              <p className="text-secondary">{data}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Generator;
