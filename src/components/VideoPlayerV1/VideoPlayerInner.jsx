import React, { useState, useRef } from "react";
import "./VideoPlayer.scss";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <React.Fragment>
      <ReactPlayer
        url="https://www.dropbox.com/scl/fi/wju7gayfi0px8x1u4vcch/.mp4?rlkey=kv78rg1o21jzpueqjp5xpa3zl&st=h242md6n&dl=1"
        controls={true}
      />
    </React.Fragment>
  );
}

export default VideoPlayer;
