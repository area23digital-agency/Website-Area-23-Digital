
import React from 'react';

const PARTICLE_COUNT = 8;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  width: Math.random() * 2 + 1,
  height: Math.random() * 2 + 1,
  top: Math.random() * 100,
  left: Math.random() * 100,
  opacity: Math.random() * 0.3 + 0.05,
  duration: Math.random() * 30 + 30,
  delay: Math.random() * 20,
  dx: Math.random() * 50 - 25,
  dy: Math.random() * 50 - 25,
}));

const particleKeyframes = particles
  .map(p => `@keyframes particleDrift${p.id} { 0% { transform: translate(0, 0); } 100% { transform: translate(${p.dx}px, ${p.dy}px); } }`)
  .join('\n');

const BackgroundEffects: React.FC = () => {
  return (
    <>
      <div className="bg-grid opacity-30"></div>

      <div className="bg-mesh">
        <div
          className="mesh-blob bg-primary w-[900px] h-[900px] -top-[300px] -left-[200px]"
          style={{ animationDuration: '60s', opacity: '0.04' }}
        ></div>
        <div
          className="mesh-blob bg-primary w-[700px] h-[700px] bottom-[5%] -right-[150px]"
          style={{ animationDuration: '70s', animationDelay: '-10s', opacity: '0.03' }}
        ></div>
        <div
          className="mesh-blob bg-secondary w-[800px] h-[800px] top-[30%] left-[10%]"
          style={{ animationDuration: '80s', animationDelay: '-20s', opacity: '0.02' }}
        ></div>

        <div className="absolute inset-0 pointer-events-none opacity-10">
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute bg-white rounded-full"
              style={{
                width: `${p.width}px`,
                height: `${p.height}px`,
                top: `${p.top}%`,
                left: `${p.left}%`,
                opacity: p.opacity,
                animation: `particleDrift${p.id} ${p.duration}s infinite linear alternate`,
                animationDelay: `-${p.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{particleKeyframes}</style>
    </>
  );
};

export default BackgroundEffects;
