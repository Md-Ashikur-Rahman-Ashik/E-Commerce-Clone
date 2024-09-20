"use client";
import { useEffect, useRef } from "react";

const SmokeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 10;
        this.opacity = 1;
        this.speedY = Math.random() * 1 - 0.5;
        this.speedX = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.01;
      }
      draw() {
        ctx.fillStyle = `rgba(200, 200, 200, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 4);
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(e.x, e.y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.opacity <= 0) {
          particles.splice(index, 1);
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        transition: "  all ease 200ms",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default SmokeCanvas;
