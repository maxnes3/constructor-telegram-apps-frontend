import { FC } from 'react';
import { TemplateType } from '@shared/types';
import { Renderer } from '@shared/components';

type TemplatePrototypeProps = {
  template: TemplateType;
};

export const TemplatePrototype: FC<TemplatePrototypeProps> = ({ template }) => {
  const { prototype } = template;
  return <Renderer html={prototype.html} css={prototype.css} />;
};
