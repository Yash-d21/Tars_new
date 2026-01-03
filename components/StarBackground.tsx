
import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Optimization for non-transparent canvas
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    interface Astronaut {
      x: number;
      y: number;
      vx: number;
      vy: number;
      rotation: number;
      rotationSpeed: number;
      scale: number;
      opacity: number;
    }

    const astronauts: Astronaut[] = [];
    const astronautCount = 3; // Small number of lost astronauts

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Reposition astronauts if they're off-screen after resize
      astronauts.forEach((astronaut) => {
        if (astronaut.x > width) astronaut.x = width * 0.5;
        if (astronaut.y > height) astronaut.y = height * 0.5;
      });
    };

    setSize();
    window.addEventListener('resize', setSize);

    // Initialize astronauts after canvas size is set
    for (let i = 0; i < astronautCount; i++) {
      astronauts.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1, // Very slow drift
        vy: (Math.random() - 0.5) * 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02, // Slow tumbling
        scale: Math.random() * 0.3 + 0.15, // Very small (minute)
        opacity: Math.random() * 0.3 + 0.4, // Subtle presence
      });
    }

    interface Star {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      speed: number;
      twinkleOffset: number;
    }
    
    const stars: Star[] = [];
    // Reduced density slightly for better performance on high-res screens
    const starCount = Math.min(Math.floor((width * height) / 4000), 1200); 

    for (let i = 0; i < starCount; i++) {
      const r = Math.random();
      let size, alpha, speed;

      if (r > 0.98) {
        size = Math.random() * 1.1 + 0.9; 
        alpha = Math.random() * 0.2 + 0.8;
        speed = Math.random() * 0.05 + 0.01;
      } else if (r > 0.85) {
        size = Math.random() * 0.7 + 0.5;
        alpha = Math.random() * 0.3 + 0.4;
        speed = Math.random() * 0.03 + 0.005;
      } else {
        size = Math.random() * 0.4 + 0.2;
        alpha = Math.random() * 0.25 + 0.1;
        speed = Math.random() * 0.015 + 0.002;
      }

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        baseAlpha: alpha,
        speed,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    interface Comet {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      life: number;
    }
    const comets: Comet[] = [];

    interface Shuttle {
      x: number;
      y: number;
      speed: number;
      active: boolean;
      angle: number;
      scale: number;
    }

    let shuttle: Shuttle = { x: -100, y: -100, speed: 0, active: false, angle: 0, scale: 1 };

    const animate = () => {
      // Use dark background fill instead of clearRect for performance with {alpha: false}
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);
      
      const now = Date.now() / 1000;

      // Group stars by their draw method for performance
      stars.forEach((star) => {
        star.y -= star.speed; 
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }

        let currentAlpha = star.baseAlpha;
        if (star.baseAlpha > 0.5) {
             const twinkle = Math.sin(now * 3 + star.twinkleOffset) * 0.1; // Twinkle faster
             currentAlpha = Math.min(1, Math.max(0.3, star.baseAlpha + twinkle));
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        
        // Fast path for tiny background stars
        if (star.size < 0.5) {
             ctx.fillRect(star.x, star.y, 1, 1);
        } else {
             ctx.beginPath();
             ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
             ctx.fill();
        }
      });

      // Shorter, faster Comet spawn logic
      if (Math.random() < 0.0008 && comets.length < 2) {
        comets.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 2.5 + 1.2, // Faster
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          opacity: 0,
          life: 0
        });
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        if (c.life < 30) c.opacity = Math.min(0.7, c.opacity + 0.03); // Quicker fade in
        c.life++;
        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;

        const tailX = c.x - Math.cos(c.angle) * c.length;
        const tailY = c.y - Math.sin(c.angle) * c.length;
        const gradient = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${c.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        if (c.x > width + 200 || c.y > height + 200 || c.life > 150) comets.splice(i, 1);
      }

      // Simplified shuttle draw for smoother FPS
      if (!shuttle.active && Math.random() < 0.0005) {
          shuttle.active = true;
          shuttle.x = -60;
          shuttle.y = Math.random() * height;
          shuttle.angle = (Math.random() - 0.5) * 0.2;
          shuttle.speed = Math.random() * 0.8 + 0.4; // Faster
          shuttle.scale = 0.6;
      } else if (shuttle.active) {
          shuttle.x += Math.cos(shuttle.angle) * shuttle.speed;
          shuttle.y += Math.sin(shuttle.angle) * shuttle.speed;
          if (shuttle.x > width + 100) shuttle.active = false;
          
          ctx.save();
          ctx.translate(shuttle.x, shuttle.y);
          ctx.rotate(shuttle.angle);
          ctx.scale(shuttle.scale, shuttle.scale);
          ctx.fillStyle = '#f8fafc';
          ctx.beginPath();
          ctx.moveTo(15, 0); ctx.lineTo(-12, -8); ctx.lineTo(-8, 0); ctx.lineTo(-12, 8);
          ctx.fill();
          ctx.restore();
      }

      // Draw lost astronauts drifting through space
      astronauts.forEach((astronaut) => {
        // Update position - very slow drift
        astronaut.x += astronaut.vx;
        astronaut.y += astronaut.vy;
        astronaut.rotation += astronaut.rotationSpeed;

        // Wrap around screen edges
        if (astronaut.x < -20) astronaut.x = width + 20;
        if (astronaut.x > width + 20) astronaut.x = -20;
        if (astronaut.y < -20) astronaut.y = height + 20;
        if (astronaut.y > height + 20) astronaut.y = -20;

        // Occasional slight direction changes (going with the flow)
        if (Math.random() < 0.001) {
          astronaut.vx += (Math.random() - 0.5) * 0.05;
          astronaut.vy += (Math.random() - 0.5) * 0.05;
          // Clamp velocity to keep them slow
          astronaut.vx = Math.max(-0.15, Math.min(0.15, astronaut.vx));
          astronaut.vy = Math.max(-0.15, Math.min(0.15, astronaut.vy));
        }

        ctx.save();
        ctx.translate(astronaut.x, astronaut.y);
        ctx.rotate(astronaut.rotation);
        ctx.scale(astronaut.scale, astronaut.scale);
        ctx.globalAlpha = astronaut.opacity;

        // Draw astronaut with detail
        // Helmet (white)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, -8, 6, 0, Math.PI * 2);
        ctx.fill();

        // Gold visor
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(0, -8, 5, 0, Math.PI * 2);
        ctx.fill();
        // Visor reflection
        ctx.fillStyle = '#ffed4e';
        ctx.beginPath();
        ctx.arc(-1, -9, 2, 0, Math.PI * 2);
        ctx.fill();

        // Body (white suit)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-3, -2, 6, 10);

        // Backpack (slightly darker)
        ctx.fillStyle = '#e0e0e0';
        ctx.fillRect(-4, 0, 3, 6);
        ctx.fillRect(1, 0, 3, 6);

        // Arms (extended, floating pose)
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-3, 2);
        ctx.lineTo(-8, -2);
        ctx.moveTo(3, 2);
        ctx.lineTo(8, -2);
        ctx.stroke();

        // Legs (bent, floating pose)
        ctx.beginPath();
        ctx.moveTo(-2, 8);
        ctx.lineTo(-5, 12);
        ctx.moveTo(2, 8);
        ctx.lineTo(5, 12);
        ctx.stroke();

        ctx.restore();
        ctx.globalAlpha = 1; // Reset alpha for other elements
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default StarBackground;
