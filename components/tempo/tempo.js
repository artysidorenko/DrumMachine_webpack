import React from 'react';
import '../../public/styles/tempo.css';

class Tempo extends React.Component {
  handleChange = (event) => {
    this.props.action(event.target.value)
  }
  sliderFocus = (event) => {
    if (['ArrowRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft'].indexOf(event.key) >= 0) {
      document.getElementById('tempo').focus();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.sliderFocus);
  }
  componentWillUnmount() {
    document.addEventListener('keydown', this.sliderFocus);
  }
  render() {
    return (
      <div className="tempo__container">
        <input className="tempo__slider" type="range" name="tempo" min="60" max="240" step="2" defaultValue="120" onChange={this.handleChange} id="tempo"/>
        <label className="tempo__label" htmlFor="tempo">Tempo</label>
      </div>
    );
  }
}

export default Tempo;
