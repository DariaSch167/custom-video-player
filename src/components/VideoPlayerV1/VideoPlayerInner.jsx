import React, { useState, useRef } from "react";
import "./VideoPlayer.scss";
import video from "../../test-video/chat.mp4";
import backward from "../../images/player-icons/backward.svg";
import forward from "../../images/player-icons/forward.svg";
import play from "../../images/player-icons/play.svg";
import pause from "../../images/player-icons/pause.svg";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      let vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <React.Fragment>
      <video id="video1" ref={videoRef} className="video" src={video}></video>
      <div className="controlsContainer">
        <div className="controls">
          <img
            className="controlsIcon"
            alt=""
            src={backward}
            onClick={revert}
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className="controlsIcon--small"
              alt=""
              src={pause}
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
              alt=""
              src={play}
            />
          )}
          <img
            className="controlsIcon"
            alt=""
            src={forward}
            onClick={fastForward}
          />
        </div>
      </div>
      <div className="timecontrols">
        <p className="controlsTime">
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className="time_progressbarContainer">
          <div
            style={{ width: { progress } }}
            className="time_progressBar"></div>
        </div>
        <p className="controlsTime">
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </p>
      </div>
    </React.Fragment>
  );
}

export default VideoPlayer;
