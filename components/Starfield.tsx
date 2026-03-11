'use client';

import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
    }

    const stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      stars.length = 0;
      const count = Math.min(
        200,
        Math.floor((canvas.width * canvas.height) / 8000)
      );
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.15 + 0.02,
          brightness: Math.random() * 0.6 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.001;

      for (const star of stars) {
        const flicker =
          Math.sin(time * 3 + star.x) * 0.15 + star.brightness;
        const alpha = Math.max(0.05, Math.min(0.8, flicker));
        ctx.beginPath();
        ctx.arc(
          star.x + Math.sin(time + star.y * 0.01) * 0.5,
          star.y + Math.cos(time + star.x * 0.01) * 0.3,
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(200, 210, 240, ${alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
