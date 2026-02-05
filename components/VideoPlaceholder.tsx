import React, { useState, useEffect } from 'react';
import PlayIcon from './icons/PlayIcon';

interface VideoPlaceholderProps {
  thumbnailColor: string;
  title: string;
  description: string;
}

const VideoPlaceholder = ({ thumbnailColor, title, description }: VideoPlaceholderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`relative rounded-lg shadow-lg overflow-hidden group w-full h-80 ${thumbnailColor}`}>
      {!isPlaying ? (
        <>
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
          <div className="relative h-full flex flex-col justify-between p-6 text-white">
            <div>
              <h3 className="font-sans text-2xl font-bold">{title}</h3>
              <p className="opacity-90">{description}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={handlePlay} 
                className="bg-white/20 text-white p-5 rounded-full backdrop-blur-sm transform transition-all group-hover:scale-110 group-hover:bg-white/30"
                aria-label="Play Video"
              >
                <PlayIcon className="h-10 w-10" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="h-full flex items-center justify-center">
          <span className="text-white font-mono text-6xl tracking-wider">{formatTime(elapsedTime)}</span>
        </div>
      )}
    </div>
  );
};

export default VideoPlaceholder;