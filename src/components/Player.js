import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import energy from '../mp3/bensound-energy.mp3';
import onceAgain from '../mp3/bensound-onceagain.mp3';
import creativeMinds from '../mp3/bensound-creativeminds.mp3';

import joJo from '../images/jo-jo.jpg';
import pulette from '../images/pulette.jpg';
import creative from '../images/creativeminds.jpg';

const Player = () => {
  const urls = [energy, onceAgain, creativeMinds];
  const images = [joJo, pulette, creative];
  const titles = ['Energy', 'Once Again', 'Creative Minds'];

  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [play, setPlay] = useState(false);

  const handlePrevious = () => {
    setCurrentUrlIndex(prevUrlIndex => prevUrlIndex - 1);
    setPlay(true);
  };

  return (
    <>
      <div className='wrapper'>
        <h3 className='titles'>
          &mdash;&ldquo;{titles[currentUrlIndex]}&rdquo;&mdash;
        </h3>
        <div className='img-container'>
          <img src={images[currentUrlIndex]} alt={titles[currentUrlIndex]} />
        </div>
        <ReactPlayer
          playing={play}
          width='100%'
          height='100%'
          controls
          url={urls[currentUrlIndex]}
        />
        <button className='btn' onClick={() => setPlay(true)}>
          {' '}
          Play{' '}
        </button>{' '}
        <button className='btn' onClick={() => setPlay(false)}>
          {' '}
          Pause{' '}
        </button>{' '}
        <button
          className='btn'
          onClick={handlePrevious}
          disabled={currentUrlIndex === 0}
        >
          Previous{' '}
        </button>
        <button
          className='btn'
          onClick={() => {
            setCurrentUrlIndex(prevUrlIndex => prevUrlIndex + 1);
            setPlay(true);
          }}
          disabled={currentUrlIndex === urls.length - 1}
        >
          Next{' '}
        </button>
      </div>
    </>
  );
};

export default Player;
