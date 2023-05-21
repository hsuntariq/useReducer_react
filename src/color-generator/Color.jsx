import React, { useEffect, useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
const Color = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container col-lg-5">
        <form>
          <label htmlFor="">Enter Color</label>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="form-control"
            type="text"
            placeholder="e.g. Red"
          />
          <button onClick={handleClick} className="my-3 w-100 btn btn-primary">
            Generate
          </button>
        </form>
      </div>
      <div className="container-fluid">
        <div className="row">
          {list.map((col) => {
            return (
              <>
                <SingleColor {...col} hex={col.hex} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Color;
