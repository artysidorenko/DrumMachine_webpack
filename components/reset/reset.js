import React from 'react';
import '../../public/styles/switch.css';

const Reset = (props) => {
  return (
    <div className="reset__container">
      <button className="reset__button" onClick={props.action}>Reset</button>
    </div>
  );
};

export default Reset;
