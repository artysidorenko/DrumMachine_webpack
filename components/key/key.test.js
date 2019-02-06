import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Key from './key';

afterEach(cleanup);

// audio interface does not exist in jest/jsdom?
window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

describe('Key component', () => {

    test('should be dark before firing', () => {
      const { getByText } = render(<Key letter='Q'/>);
      const button = getByText('Q');
      expect(button.className).toEqual(expect.not.stringContaining('key__button--lit'));
    });

    test('should light up on mouse press', () => {
      const { getByText } = render(<Key letter='Q'/>);
      const button = getByText('Q');
      fireEvent.mouseDown(button);
      expect(button.className).toEqual(expect.stringContaining('key__button--lit'));
    });

    test('should light up on keydown', () => {
      const { getByText } = render(<Key letter='Q'/>);
      const button = getByText('Q');
      fireEvent.keyDown(button, { key: 'q'});
      expect(button.className).toEqual(expect.stringContaining('key__button--lit'));
    });

});
