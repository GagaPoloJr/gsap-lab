import { CodeBlock } from '@/components/code-block';
import { useState } from 'react';
import { Motion } from '../experiment/motion-fundamental/motion';
import motionSource from '../experiment/motion-fundamental/motion.tsx?raw';

// TODO: re-style the layout to make it interactive or something good (it can be useful for others page)
export default function MotionFundamentalPage() {
  const [revealCode, setRevealCode] = useState(false);

  return (
    <section className="flex flex-col gap-6">
      <div className="border border-black/90 bg-orange-200 py-20">
        <h1 className="text-heading text-center">Managing Tween Instance</h1>

        <Motion />

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setRevealCode((prev) => !prev)}
            className="rounded-xl border border-black bg-black px-4 py-2 text-sm text-white transition hover:opacity-80"
          >
            {revealCode ? 'Hide' : 'Reveal'} Code
          </button>
        </div>

        {revealCode && (
          <div className="mx-auto mt-10 max-w-5xl px-6">
            <CodeBlock code={motionSource} />
          </div>
        )}
      </div>
    </section>
  );
}
