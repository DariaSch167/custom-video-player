import React, { useRef } from "react";
import video from "../../assets/video.mp4";
import useVideoPlayer from "../../hooks/useVideoPlayer.js";
import "./VideoPlayerV2.scss";
// import backward from "../../images/player-icons/backward.svg";
// import forward from "../../images/player-icons/forward.svg";
import play from "../../images/player-icons/play.svg";
import pause from "../../images/player-icons/pause.svg";
import mute from "../../images/player-icons/mute.svg";
import unmute from "../../images/player-icons/unmute.svg";

function VideoPlayer() {
  const videoElement = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <React.Fragment>
      <div className="container">
        <div className="video-wrapper">
          <video
            src={video}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
          <div className="controls">
            <div className="actions">
              <button onClick={togglePlay}>
                {playerState.isPlaying ? (
                  <img className="bx bx-pause" src={pause} alt="pause" />
                ) : (
                  <img className="bx bx-play" src={play} alt="play" />
                )}
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={(e) => handleVideoProgress(e)}
            />
            <select
              className="velocity"
              value={playerState.speed}
              onChange={(e) => handleVideoSpeed(e)}>
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
            <button className="mute-btn" onClick={toggleMute}>
              {playerState.isMuted ? (
                <img className="bx bxs-volume-mute" src={mute} alt="mute" />
              ) : (
                <img className="bx bxs-unmute" src={unmute} alt="unmute" />
              )}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoPlayer;
