import React from "react";

const Modal = ({message}) => {
  return (
    <>
      <div className="container">
        <h4 className="text-center">
            {message}
        </h4>
      </div>
    </>
  );
};

export default Modal;
