import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.loop = true;
    audioRef.current.preload = "auto";
    audioRef.current.playsInline = true;
    // Remove autoplay attempt - browsers block it
    // audioRef.current.volume = volume;
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        audioRef.current.volume = volume;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio play failed:", error);
        alert("Audio file not found. Please add a 'background-music.mp3' file to the public folder.");
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0);
    } else {
      setVolume(0.3);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="flex items-center gap-3 bg-[#141b2e]/92 border border-[#d4af37]/10 rounded-full px-4 py-3 shadow-lg">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all duration-300 group"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Volume Control */}
        <button
          onClick={toggleMute}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#d4af37]/10 transition-all duration-300 group"
          aria-label={volume === 0 ? "Unmute" : "Mute"}
        >
          {volume === 0 ? (
            <VolumeX className="w-4 h-4 text-[#9ca3af] group-hover:text-[#d4af37] transition-colors" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#9ca3af] group-hover:text-[#d4af37] transition-colors" />
          )}
        </button>

        {/* Volume Slider */}
        <AnimatePresence>
          {showVolume && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#1a2035] rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#d4af37] 
                  [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-125
                  [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full 
                  [&::-moz-range-thumb]:bg-[#d4af37] [&::-moz-range-thumb]:border-0 
                  [&::-moz-range-thumb]:cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #d4af37 0%, #d4af37 ${volume * 100}%, #1a2035 ${volume * 100}%, #1a2035 100%)`
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Audio element - add your audio file to the public folder */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        src="/background-music.mp3"
      />
    </motion.div>
  );
}
