import { FC } from 'react';
import { highlight, languages } from 'prismjs';
import { BaseComponentsProps } from '../../type';
import Editor from 'react-simple-code-editor';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-okaidia.css';

type Props = {
  code: string;
  language: 'jsx' | 'css';
  onValueChange: (value: string) => void;
  textareaClassNames?: string;
} & BaseComponentsProps;

export const EditorComponent: FC<Props> = ({
  code,
  language,
  onValueChange: handleValueChange,
  textareaClassNames,
}) => {
  return (
    <Editor
      value={code}
      onValueChange={handleValueChange}
      highlight={(code) => highlight(code, languages[language], language)}
      padding={10}
      textareaClassName={textareaClassNames}
    />
  );
};
