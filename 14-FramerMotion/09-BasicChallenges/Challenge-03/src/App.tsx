// Spin an icon Continuosly.

import { motion } from "motion/react";

import CarMeme from "./assets/cat.mp3";
import { useEffect, useRef, useState } from "react";

const variantX = {
  initial: {
    opacity: 0,
  },
  visibleAnimation: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  scaleAnimation: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const App = () => {
  const audioRef = useRef(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(false);
  const [isCatStopped, setIsCatStopped] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);

  // To ensure Framer Motion detects the new duration,we add a key prop to the motion.img. This forces Framer Motion to restart the animation whenever duration updates.
  const [animationKey, setAnimationKey] = useState<number>(0);

  const [isAudioEnd, setIsAudioEnd] = useState<boolean>(false);
  const [isStopClicked, setIsStopClicked] = useState<boolean>(false);

  // To clear all the timeouts when isAudioEnabled state changes:
  const timeoutRefs = useRef<number[]>([]);

  const playMusic = async () => {
    if (audioRef.current && audioRef.current.readyState >= 3) {
      setDuration(2);
      setIsCatStopped(false);
      setIsAudioEnd(false);
      setIsStopClicked(false);

      audioRef.current.currentTime = 3.18;
      audioRef.current.play();
      setAnimationKey((prev) => prev + 1);

      const handleCatStop = setTimeout(() => {
        setIsCatStopped(true);
      }, 2000);

      const handleCatSpin = setTimeout(() => {
        setIsCatStopped(false);
        setDuration(0.5);
      }, 3000);

      const handleCatSpinFast = setTimeout(() => {
        setDuration(0.2);
        setAnimationKey((prev) => prev + 1);
      }, 28900);

      timeoutRefs.current.push(handleCatStop, handleCatSpin, handleCatSpinFast);
    } else {
      setIsAudioEnabled(false);
    }
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    if (duration !== 0 && !isAudioEnd) setIsStopClicked(true);
  };

  useEffect(() => {
    if (isAudioEnabled) {
      playMusic();
    } else {
      pauseMusic();
    }
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
    };
  }, [isAudioEnabled]);

  const handleAudioEnd = () => {
    setIsAudioEnabled(false);
    setIsAudioEnd(true);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-black ">
      <div className="bg-slate-900 w-1/2 h-1/2 rounded-3xl flex flex-col justify-around items-center relative">
        <p className="text-white text-3xl font-[cursive]">Listen For 1 min</p>
        <div className="flex items-center justify-center w-1/2 h-1/2  rounded-3xl ">
          <motion.img
            key={animationKey}
            src="https://imgs.search.brave.com/jb8L-d-8NhCXfB64fq7Pl4YAdF4XrI4dFtbsSb_X0aI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL2Vu/dHJpZXMvaWNvbnMv/bmV3c2ZlZWQvMDAw/LzA0Ni80MzMvb2lp/YW9paWEuanBn"
            alt="cat.png"
            className=" h-full rounded-3xl"
            animate={
              isAudioEnabled && !isCatStopped
                ? { rotateY: [0, 180, 360] }
                : { rotateY: 0 }
            }
            transition={
              isAudioEnabled && !isCatStopped
                ? {
                    duration,
                    repeat: Infinity,
                    ease: "circInOut",
                  }
                : {}
            }
          />
        </div>
        <button
          className={`px-8 text-white py-2 z-10  rounded-2xl ${
            isAudioEnabled ? "bg-red-700" : "bg-green-700"
          }`}
          onClick={() => {
            setIsAudioEnabled(!isAudioEnabled);
          }}
        >
          {isAudioEnabled ? "Stop" : "Enable Audio"}
        </button>
        <audio
          src={CarMeme}
          className="hidden"
          ref={audioRef}
          onEnded={handleAudioEnd}
        ></audio>
        <motion.div
          className={`p-2 bg-black rounded-xl ${
            isAudioEnd || isStopClicked ? "mt-0" : "absolute bottom-5"
          }`}
          variants={variantX}
          initial="initial"
          animate={
            isAudioEnd || isStopClicked
              ? ["scaleAnimation", "visibleAnimation"]
              : {}
          }
        >
          <motion.div
            className="text-white text-xl font-[cursive]"
            initial={{ opacity: 0, scale: 0, rotateX: -360 }}
            animate={
              isAudioEnd || isStopClicked
                ? { opacity: 1, scale: 1, rotateX: 0 }
                : {}
            }
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {isAudioEnd
              ? "1 Min Wasted Successfully!!!"
              : " Impatient Chutiya Sala!"}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
