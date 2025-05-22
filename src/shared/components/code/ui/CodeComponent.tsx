import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeComponentProps = {
  language: 'bash' | 'javascript' | 'batchfile' | 'jsx' | 'css';
  code: string;
};

export const CodeComponent: FC<CodeComponentProps> = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};
