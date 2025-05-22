import { FC } from 'react';
import { CodebaseType } from '@shared/types';
import { Renderer } from '@shared/components';

type TemplateRendererProps = {
  codebaseTemplate: Omit<CodebaseType, 'id'>;
  customClassNames?: string;
};

export const TemplateRenderer: FC<TemplateRendererProps> = ({
  codebaseTemplate,
  customClassNames,
}) => {
  const { jsx, scss } = codebaseTemplate;
  return <Renderer jsx={jsx} scss={scss} customClassNames={customClassNames} />;
};
