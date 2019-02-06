import React from 'react';
import '../../public/styles/screen.css';

class Screen extends React.Component {
  state = {
    power: 'off'
  }
  render() {
    return (
      <div className='screen__container'>
        <p className='screen__output'>{this.props.display}</p>
      </div>
    )
  }
}

export default Screen;
