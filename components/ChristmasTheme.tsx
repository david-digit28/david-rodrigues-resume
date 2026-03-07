import React, { useEffect, useRef } from 'react';

type Petal = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  drift: number;
  rotation: number;
  rotationSpeed: number;
  alpha: number;
  color: string;
  swayOffset: number;
};

const PETAL_COLORS = ['#f9a8d4', '#fdba74', '#86efac', '#c4b5fd', '#ffffff'];

const ChristmasTheme: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let petals: Petal[] = [];

    const getPetalCount = () => {
      if (width < 640) return 24;
      if (width < 1024) return 34;
      return 42;
    };

    const randomPetal = (spawnFromTop = false): Petal => ({
      x: Math.random() * width,
      y: spawnFromTop ? -20 - Math.random() * height * 0.3 : Math.random() * height,
      size: 6 + Math.random() * 8,
      speedY: 0.35 + Math.random() * 0.65,
      drift: 0.2 + Math.random() * 0.8,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      alpha: 0.14 + Math.random() * 0.2,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      swayOffset: Math.random() * Math.PI * 2,
    });

    const init = () => {
      petals = new Array(getPetalCount()).fill(null).map(() => randomPetal());
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);

      ctx.beginPath();
      ctx.ellipse(0, 0, petal.size, petal.size * 0.58, 0, 0, Math.PI * 2);
      ctx.fillStyle = `${petal.color}${Math.round(petal.alpha * 255)
        .toString(16)
        .padStart(2, '0')}`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255,255,255,0.25)';
      ctx.fill();

      ctx.restore();
    };

    const update = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(update);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal, index) => {
        const sway = Math.sin(Date.now() * 0.001 + petal.swayOffset + index * 0.08);
        petal.y += petal.speedY;
        petal.x += sway * petal.drift;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > height + 24 || petal.x < -40 || petal.x > width + 40) {
          petals[index] = randomPetal(true);
        }

        drawPetal(petal);
      });

      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener('resize', resize);
    resize();
    update();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[60] pointer-events-none"
      style={{ opacity: 0.65 }}
      aria-hidden="true"
    />
  );
};

export default ChristmasTheme;
