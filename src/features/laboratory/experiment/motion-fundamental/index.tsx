import { Card } from '@/components/card';
import { Button } from '@/components/button';
import { CodeBlock } from '@/components/code-block';
import { cn } from '@/lib/utils';
import { useState } from 'react';

import { Motion } from './motion';
import motionSource from './motion.tsx?raw';
import { StaggerAnimation } from './stagger';
import staggerSource from './stagger.tsx?raw';

const motionLists = [
  {
    key: 'managing-tween-instance',
    name: 'Managing Tween Instance',
    code: motionSource,
    element: Motion,
  },
  {
    key: 'stagger-animation',
    name: 'Stagger Animation',
    code: staggerSource,
    element: StaggerAnimation,
  },
] as const;

type MotionKey = (typeof motionLists)[number]['key'];

const initialReveal = motionLists.reduce(
  (acc, item) => {
    acc[item.key] = false;
    return acc;
  },
  {} as Record<MotionKey, boolean>
);

export const MotionFundamentalComponent = () => {
  const [revealCode, setRevealCode] = useState<Record<MotionKey, boolean>>(initialReveal);

  const handleToggleCode = (key: MotionKey) => {
    setRevealCode((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      {motionLists.map((item) => {
        const Element = item.element;
        const isOpen = revealCode[item.key];

        return (
          <div key={item.key}>
            <Card title={item.name}>
              <div className="flex flex-col gap-5">
                <Element />
                <Button
                  className="w-fit"
                  onClick={() => handleToggleCode(item.key)}
                  label={isOpen ? 'Hide' : 'Reveal'}
                />

                <div
                  aria-hidden={!isOpen}
                  className={cn(
                    'grid overflow-hidden transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <div
                      className={cn(
                        'pt-2 transition-all duration-300 ease-in-out',
                        isOpen
                          ? 'translate-y-0 opacity-100'
                          : 'pointer-events-none -translate-y-2 opacity-0 select-none'
                      )}
                    >
                      <CodeBlock code={item.code} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
