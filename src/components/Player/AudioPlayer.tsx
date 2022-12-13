import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import "./styles.css";
<<<<<<< HEAD
// @ts-ignore
=======
// @ts-ignore  
>>>>>>> 1c24baf (player component)
import perfect from "../../assets/audio.mp3";

const AudioPlayer = () => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(new Audio(perfect));
  const intervalRef = useRef();

  // Destructure for conciseness
<<<<<<< HEAD
  const { duration }: any = audioRef.current;
=======
  const { duration } = audioRef.current;
>>>>>>> 1c24baf (player component)

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

<<<<<<< HEAD
  const startTimer = (): any => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    // @ts-ignore
    intervalRef.current = setInterval(() => {
      // @ts-ignore
      setTrackProgress(audioRef.current.currentTime);
      // @ts-ignore
    }, [1000]);
  };

  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    // @ts-ignore
    audioRef.current.currentTime = value;
    // @ts-ignore
=======
  const startTimer = ():any => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
// @ts-ignore  
    intervalRef.current = setInterval(() => {
        setTrackProgress(audioRef.current.currentTime);
        // @ts-ignore  
    }, [1000]);
  };

  const onScrub = (value:any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
>>>>>>> 1c24baf (player component)
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
<<<<<<< HEAD
      // @ts-ignore
      audioRef.current.play();
      startTimer();
    } else {
      // @ts-ignore
=======
      audioRef.current.play();
      startTimer();
    } else {
>>>>>>> 1c24baf (player component)
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
<<<<<<< HEAD
      // @ts-ignore
=======
>>>>>>> 1c24baf (player component)
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player">
      <div className="track-info">
<<<<<<< HEAD
        <AudioControls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
=======
        <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={setIsPlaying}
        />
>>>>>>> 1c24baf (player component)
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
<<<<<<< HEAD
          style={{ background: trackStyling, width: "80%", marginLeft: "10px", border: "1px solid red" }}
=======
          style={{ background: trackStyling, width: '80%', marginLeft: '10px' }}
>>>>>>> 1c24baf (player component)
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
