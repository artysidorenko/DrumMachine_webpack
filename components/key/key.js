import React from 'react';
import '../../public/styles/key.css';

class Key extends React.Component {
  state = {
    lightup: false,
    looping: false,
    loopID: null
  };
  // stopLoop = () => {
  //   if (this.state.looping) clearInterval();
  // }
  playKey = () => {
    const audio = new Audio(this.props.sound);
    audio.type = 'audio/wav';
    // if key is already looping, then pressing again should stop the loop (assigned to the key's loopID state)
    if (this.state.looping) {
      clearInterval(this.state.loopID)
      this.setState({looping: false});
    }
    // if parent passes loop boolean prop - sound plays on a loop/interval
    else if (this.props.loop) {
      this.lightOn();
      audio.play();
      this.setState({looping: true, loopID: setInterval(function(){
        audio.play()
      }, 60000/this.props.bpm)});
    }
    else audio.play();
  };
  lightOn = () => {
    this.setState(() => ({lightup: true}));
    // onScreen function defined in app.js - changes the parent's 'display' state to the name of the key that was just pressed
    this.props.onScreen(this.props.name);
  };
  lightOff = () => {
    this.setState(() => ({lightup: false}));
  };
  mouseDown = () => {
    this.lightOn();
    this.playKey();
  }
  mouseUp = () => {
    if (!this.state.looping) this.lightOff();
  }
  keyDown = (e) => {if (e.key === this.props.letter.toLowerCase()) {
    this.lightOn();
    this.playKey();
  }}
  keyUp = (e) => {
    if (!this.state.looping && e.key === this.props.letter.toLowerCase()) this.lightOff();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
    document.addEventListener('keyup', this.keyUp);
  }
  // need to remove event listeners on component unmount to prevent memory leaks
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);
    document.removeEventListener('keyup', this.keyUp);
  }
  componentDidUpdate(prevProps) {
    // not sure if this is the best way to change the interval on bpm change?
    if (this.props.bpm !== prevProps.bpm && this.state.looping) {
      clearInterval(this.state.loopID);
      const audio = new Audio(this.props.sound);
      audio.type = 'audio/wav';
      this.setState({loopID: setInterval(function(){
        audio.play()
      }, 60000/this.props.bpm)})
    }
    else if (this.props.clear !== prevProps.clear && this.props.clear) {
      clearInterval(this.state.loopID);
      this.lightOff();
      this.props.undoReset();
    }
  }
  render() {
    return (<div className='key__container'>
      <button className={`key__button ${this.state.lightup && 'key__button--lit'}`} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onKeyPress={this.keyDown}>{this.props.letter}</button>
      <audio className="clip" id={this.props.letter}></audio>
      </div>
    )
  }
}

export default Key;
