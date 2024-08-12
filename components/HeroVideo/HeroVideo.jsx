import React, { useState, useRef } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

const HeroVideo = () => {
  const [isMuted, setIsMuted] = useState(true); // default to unmuted
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !isMuted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
      // console.log(`Video is now ${newMuteState ? "muted" : "unmuted"}`);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="lg:h-[800px] h-[224px] min-w-full object-cover object-center"
        controls={false}
        autoPlay
        playsInline
        loop
        muted={isMuted}
      >
        <source src="/assets/images/Hero video final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={toggleMute}
        className="absolute bottom-[10px] right-4 p-2 bg-gray-800 bg-opacity-50 rounded-full"
      >
        {isMuted ? <GiSpeakerOff /> : <GiSpeaker />}
      </button>
    </div>
  );
};

export default HeroVideo;
