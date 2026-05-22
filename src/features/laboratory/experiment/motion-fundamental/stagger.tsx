import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const CHEST_MAP_VALUE = 64;

export const StaggerAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const grid = [8, 8]; //row, column (it is depends on the design)
  useGSAP(
    () => {
      tl.current = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
      });

      tl.current?.to('.box', {
        y: 10,
        duration: 0.8,
        opacity: 1,
        scale: 0.1,
        yoyo: true,
        stagger: {
          amount: 0.5,
          grid: grid as [number, number],
          from: 'center',
          ease: 'power3.in',
          each: 0.05,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="container flex items-center justify-center gap-3">
      <div className="grid grid-cols-8 place-items-center gap-2">
        {Array.from({ length: CHEST_MAP_VALUE }).map((_, index) => (
          <div key={index} className={`box h-10 w-10 bg-green-300`}></div>
        ))}
      </div>
    </div>
  );
};
