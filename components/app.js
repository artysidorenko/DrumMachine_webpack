import React from "react";
import Key from './key/key';
import Screen from './screen/screen';
import Mode from './mode/mode';
import Tempo from './tempo/tempo';
import Reset from './reset/reset';
import '../public/styles/machine.css';

// need to import entire contents of audio folder to enable wav playback :( ?
import clapCrushed from '../public/audio/clap-crushed.wav';
import clapTape from '../public/audio/clap-tape.wav';
import cowbell808 from '../public/audio/cowbell-808.wav';
import hihat808 from '../public/audio/hihat-808.wav';
import hihatAcoustic from '../public/audio/hihat-acoustic02.wav';
import kickAcoustic from '../public/audio/kick-acoustic02.wav';
import kickDry from '../public/audio/kick-dry.wav';
import percMetal from '../public/audio/perc-metal.wav';
import tomAcoustic from '../public/audio/tom-acoustic02.wav';

export default class App extends React.Component {
  state = {
    display: ' ',
    loop: false,
    bpm: 120,
    clear: false
  }
  activateDisplay(message) {
    this.setState({display: message});
  }
  // note to self: arrow notation -> function will stay bound to current component vs. classic function notation -> function is free to 'cascade' down to children components
  activateLoop() {
    this.setState(prevState => ({ loop: !prevState.loop}))
  }
  setTempo(tempo) {
    this.setState({bpm: tempo});
  }
  reset() {
    this.setState({clear: true});
  }
  undoReset() {
    this.setState({clear: false});
  }
  activateLoop = this.activateLoop.bind(this);
  activateDisplay = this.activateDisplay.bind(this);
  setTempo = this.setTempo.bind(this);
  reset = this.reset.bind(this);
  undoReset = this.undoReset.bind(this);
  render() {
    return <div className='machine__container' id='drum-machine'>
      <Screen display={this.state.display} id='display'/>
      <h3 className='machine__header'>PJSmooth's Drum Machine</h3>
      <Mode loop={this.state.loop} action={this.activateLoop} />
      <Reset action={this.reset}/>
      <div className='machine__keypad'>

        <Key letter="Q" sound={clapCrushed} onScreen={this.activateDisplay} name='clapCrushed' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>
        <Key letter="W" sound={clapTape} onScreen={this.activateDisplay} name='clapTape' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>
        <Key letter="E" sound={cowbell808} onScreen={this.activateDisplay} name='cowbell808' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>
        <Key letter="A" sound={hihat808} onScreen={this.activateDisplay} name='hihat808' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>
        <Key letter="S" sound={hihatAcoustic} onScreen={this.activateDisplay} name='hihatAcoustic' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>
        <Key letter="D" sound={kickAcoustic} onScreen={this.activateDisplay} name='kickAcoustic' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>
        <Key letter="Z" sound={kickDry} onScreen={this.activateDisplay} name='kickDry' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>
        <Key letter="X" sound={percMetal} onScreen={this.activateDisplay} name='percMetal' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>
        <Key letter="C" sound={tomAcoustic} onScreen={this.activateDisplay} name='tomAcoustic' loop={this.state.loop} bpm={this.state.bpm} clear={this.state.clear} undoReset={this.undoReset} className='drum-pad'/>

      </div>
      <Tempo action={this.setTempo}/>
    </div>;
  }
}
