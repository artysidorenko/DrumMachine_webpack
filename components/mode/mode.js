import React from 'react';
import '../../public/styles/switch.css';

const Mode = (props) => {
  return (
    <div className="mode__container">
      <button className="mode__button" onClick={props.action}>{props.loop ? 'Loop' : 'Normal'}</button>
    </div>
  );
};

export default Mode;
