import React, { useRef, useEffect, useState } from "react";

const Video = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Handle video errors
    const handleError = () => {
      setError(true);
      setIsLoading(false);
    };

    // Handle video loaded
    const handleLoaded = () => {
      setIsLoading(false);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('error', handleError);
      videoElement.addEventListener('loadeddata', handleLoaded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('error', handleError);
        videoElement.removeEventListener('loadeddata', handleLoaded);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16">
      {isLoading && (
        <div className="flex items-center justify-center w-full h-64 sm:h-80 md:h-96 lg:h-[480px] bg-gray-100 rounded-lg">
          <p className="text-gray-500">Loading video...</p>
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center w-full h-64 sm:h-80 md:h-96 lg:h-[480px] bg-gray-100 rounded-lg">
          <p className="text-gray-500">Failed to load video</p>
        </div>
      )}

      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        loop
        className={`w-full max-w-screen-2xl h-auto object-cover rounded-lg shadow-md ${isLoading ? 'hidden' : 'block'}`}
        aria-label="Promotional spa video"
      >
        <source src="/19675404.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;