'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ code, language, showLineNumbers = true }: CodeBlockProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden my-6 border border-gray-700">
      <div className="absolute top-0 right-0 p-2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1rem',
          borderRadius: '0.5rem',
          backgroundColor: '#000000',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;