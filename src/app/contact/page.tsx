"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Contact() {
  const [showScreamer, setShowScreamer] = useState(false);
  
  useEffect(() => {
    // Show screamer immediately when component mounts
    setShowScreamer(true);
    
    // Create audio element
    const audio = new Audio("/scream.mp3");
    audio.volume = 0.7;
    
    // Hide screamer after audio ends
    audio.addEventListener('ended', () => {
      setShowScreamer(false);
    });
    
    // Set a backup timer in case audio fails to load or end event doesn't fire
    const backupTimer = setTimeout(() => {
      setShowScreamer(false);
    }, 5000); // Keep image for 5 seconds
    
    // Play the sound
    audio.play().catch(e => {
      console.error("Audio failed to play:", e);
      // If audio fails, still hide the screamer after 5 seconds
    });
    
    return () => {
      audio.pause();
      audio.removeEventListener('ended', () => setShowScreamer(false));
      clearTimeout(backupTimer);
    };
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      {showScreamer && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image 
              src="/scary-face.jpg" 
              alt="Boo!" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <audio className="hidden" autoPlay src="/scream.mp3"></audio>
        </div>
      )}
      
      <h1 className="text-5xl font-bold">Contact</h1>
      <Link href="/" className="mt-4 hover:scale-110 transition-transform duration-300 flex items-center gap-2">
        <span>🏃‍♂️ Run back home before the boss sees you!</span>
      </Link>
    </div>
  );
}