import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import "./styles.css";
// @ts-ignore
import perfect from "../../assets/audio.mp3";

const AudioPlayer = () => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(new Audio(perfect));
  const intervalRef = useRef();

  // Destructure for conciseness
  const { duration }: any = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

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
      // @ts-ignore
      audioRef.current.play();
      startTimer();
    } else {
      // @ts-ignore
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      // @ts-ignore
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player">
      <div className="track-info">
        <AudioControls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
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
          style={{ background: trackStyling, width: "80%", marginLeft: "10px", border: "1px solid red" }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
