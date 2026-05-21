import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code, language = 'tsx' }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10">
      <div className="-mb-1 flex items-center justify-between border-b border-black/10 bg-black px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="text-xs text-white/60">{language}</span>
      </div>

      <button
        onClick={handleCopyToClipboard}
        className="absolute top-10 right-3 flex cursor-pointer items-center gap-2 rounded-xl border border-black bg-slate-600/60 px-2 py-2 text-xs text-white transition select-none hover:opacity-80"
      >
        {isCopied ? <Check size={12} /> : <Copy size={12} />}
      </button>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLongLines
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          background: '#0f1115',
          fontSize: '0.875rem',
          lineHeight: '1.6',
          maxHeight: 'calc(400px)',
          overflowY: 'auto',
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
