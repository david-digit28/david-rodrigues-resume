import React, { useEffect, useRef } from 'react';

const ChristmasTheme: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Configuration
    const SNOW_BUCKET_SIZE = 5; // Width of one "pile" segment in pixels
    const MAX_FLAKES = 70;      // Reduced count for better stability
    const PILE_THRESHOLD = 80;  // Height in pixels to trigger elf
    const ELF_SPEED = 3;

    // State
    let flakes: { x: number; y: number; r: number; v: number; osc: number }[] = [];
    let ground: number[] = []; // Array storing height of snow at each bucket
    let elf = { active: false, x: -50 }; 

    // Resize Handler
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Reset ground buckets (simple approach for responsiveness)
      const buckets = Math.ceil(width / SNOW_BUCKET_SIZE);
      ground = new Array(buckets).fill(0);
    };

    window.addEventListener('resize', resize);
    resize();

    // Initialize Flakes
    for (let i = 0; i < MAX_FLAKES; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1, // radius
        v: Math.random() * 1 + 0.5, // velocity
        osc: Math.random() * Math.PI * 2 // oscillation for sway
      });
    }

    const drawSnowflake = (f: typeof flakes[0]) => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + Math.random() * 0.3})`;
      ctx.fill();
    };

    const drawGround = () => {
      if (!ground || ground.length === 0) return;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height);
      
      // Draw the shape of the snow pile
      for (let i = 0; i < ground.length; i++) {
        const x = i * SNOW_BUCKET_SIZE;
        const h = ground[i] || 0; // Safeguard against undefined
        ctx.lineTo(x, height - h);
      }
      
      ctx.lineTo(width, height);
      ctx.closePath();
      
      // Make the pile look soft and sleek
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
      
      const gradient = ctx.createLinearGradient(0, height - 100, 0, height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.0)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    };

    const drawElf = () => {
      if (!elf.active) return;
      
      ctx.font = "40px serif";
      ctx.textAlign = "center";
      
      const bounce = Math.sin(Date.now() / 100) * 5;
      const rock = Math.sin(Date.now() / 100) * 0.2; // Slight rocking motion
      
      ctx.save();
      ctx.translate(elf.x, height - 20 + bounce);
      ctx.rotate(rock); // Rotate elf slightly as he walks
      ctx.fillText("🧝", 0, 0); 
      
      // Sparkles behind elf
      ctx.font = "15px serif";
      ctx.fillText("✨", -30, -10 + bounce);
      
      ctx.restore();
    };

    const update = () => {
      // Battery Saver: Don't render if tab is hidden
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(update);
        return;
      }
      
      // Safety check: if ground isn't ready, skip this frame
      if (!ground || ground.length === 0) {
        animationFrameId = requestAnimationFrame(update);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Update & Draw Flakes
      flakes.forEach(f => {
        f.y += f.v;
        f.x += Math.sin(f.y * 0.01 + f.osc) * 0.5; // Sway

        // Boundary check / Collision
        const bucketIndex = Math.floor(f.x / SNOW_BUCKET_SIZE);
        
        // Only interact if within bounds
        if (bucketIndex >= 0 && bucketIndex < ground.length) {
            const currentPileHeight = ground[bucketIndex];
            
            if (f.y >= height - currentPileHeight) {
                // Accumulate
                if (currentPileHeight < 200) { 
                    ground[bucketIndex] += f.r * 2; 
                    // Smoothing neighbor buckets
                    if (bucketIndex > 0) ground[bucketIndex - 1] += f.r * 0.5;
                    if (bucketIndex < ground.length - 1) ground[bucketIndex + 1] += f.r * 0.5;
                }
                
                // Reset flake
                f.y = -10;
                f.x = Math.random() * width;
            }
        } else if (f.y > height) {
             // Reset flake if it falls off screen
             f.y = -10;
             f.x = Math.random() * width;
        }

        drawSnowflake(f);
      });

      // 2. Logic: Check if pile is too high
      if (!elf.active) {
        const maxH = Math.max(...ground);
        if (maxH > PILE_THRESHOLD) {
          elf.active = true;
          elf.x = -50; // Spawn left
        }
      }

      // 3. Elf Logic
      if (elf.active) {
        elf.x += ELF_SPEED;
        
        // Clean snow radius
        const elfBucketIndex = Math.floor(elf.x / SNOW_BUCKET_SIZE);
        const cleanRadius = 15; 
        
        for(let i = elfBucketIndex - cleanRadius; i < elfBucketIndex + cleanRadius; i++) {
            if (i >= 0 && i < ground.length) {
                // Melt snow rapidly
                ground[i] = Math.max(0, ground[i] - 5);
            }
        }

        // Despawn
        if (elf.x > width + 50) {
          elf.active = false;
        }

        drawElf();
      }

      // 4. Draw Ground
      drawGround();

      animationFrameId = requestAnimationFrame(update);
    };

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
      style={{ opacity: 0.8 }}
    />
  );
};

export default ChristmasTheme;