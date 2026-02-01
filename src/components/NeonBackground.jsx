import React from 'react';
import { motion } from 'framer-motion';

const NeonBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-[#050505]">
        {/* Grid Floor */}
        <div 
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
          style={{
            background: `
              linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(188, 19, 254, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px)',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#bc13fe]/10 via-transparent to-[#00f3ff]/10 mix-blend-overlay" />
        
        {/* Floating Particles (Simulated with divs) */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              boxShadow: `0 0 ${Math.random() * 10 + 5}px var(--primary-neon)`
            }}
          />
        ))}

        <style>{`
          @keyframes gridMove {
            0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
            100% { transform: perspective(500px) rotateX(60deg) translateY(50px) translateZ(-200px); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default NeonBackground;
