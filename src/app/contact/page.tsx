"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Contact() {
  const [showScreamer, setShowScreamer] = useState(false);
  
  useEffect(() => {
    // Delay the screamer to make it unexpected
    const timer = setTimeout(() => {
      setShowScreamer(true);
      
      // Play scary sound
      const audio = new Audio("/scream.mp3");
      audio.volume = 0.7;
      audio.play().catch(e => console.error("Audio failed to play:", e));
      
      // Hide screamer after 1.5 seconds
      setTimeout(() => {
        setShowScreamer(false);
      }, 1500);
    }, 2000); // Wait 2 seconds before screamer
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      {showScreamer && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-pulse">
          <div className="relative w-full h-full">
            <Image 
              src="/scary-face.jpg" 
              alt="Boo!" 
              fill 
              className="object-contain animate-bounce"
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