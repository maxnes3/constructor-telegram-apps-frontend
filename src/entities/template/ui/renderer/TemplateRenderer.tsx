import { FC } from 'react';
import { TemplateType } from '@shared/types';
import { Renderer } from '@shared/components';

type TemplateRendererProps = {
  template: TemplateType;
};

export const TemplateRenderer: FC<TemplateRendererProps> = ({ template }) => {
  const { prototype } = template;
  return <Renderer html={prototype.html} css={prototype.css} />;
};
