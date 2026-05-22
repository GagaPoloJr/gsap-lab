import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Motion = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  // assigned for getting instance gsap properties
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useGSAP(
    () => {
      if (!containerRef.current || !boxRef.current) return;

      animationRef.current = gsap.fromTo(
        boxRef.current,
        { opacity: 1, rotation: 0, x: 0, y: 0 },
        {
          opacity: 1,
          x: () => {
            if (!containerRef.current || !boxRef.current) return 0;
            return containerRef.current.offsetWidth - boxRef.current.offsetWidth;
          },
          y: 0,
          rotation: 360,
          duration: 3,
          repeat: -1,
          yoyo: true, // infinitely move forth and back
          ease: 'power2.out',
        }
      );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (!containerRef.current) return;

    // handle the responsive
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        animationRef.current?.invalidate().restart();
      });
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleToggleMotion = () => {
    if (!animationRef.current) return;

    setIsPlaying((prev) => !prev);

    if (isPlaying) {
      animationRef.current.pause();
    } else {
      animationRef.current.resume();
    }
  };
  return (
    <div ref={containerRef} className="container w-full">
      <div
        ref={boxRef}
        onClick={handleToggleMotion}
        className="box flex h-20 w-20 cursor-pointer items-center justify-center bg-green-300 select-none"
      >
        <h1 className="text-black">{isPlaying ? 'Stop me' : 'Play me'}</h1>
      </div>
    </div>
  );
};
