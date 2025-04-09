import React from "react";

const Video = () => {
  return (
    <div  className="flex items-center justify-center w-full mb-16">
      <video
        muted="muted"
        playsinline=""
        autoplay="autoplay"
        loop="loop"
        className="max-w-screen-2xl h-auto object-cover flex items-center justify-center rounded-lg"
      >
        <source src="/19675404.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
