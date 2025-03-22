import { FC } from 'react';
import { BuildType } from '@shared/types';
import { Renderer } from '@shared/components';

type TemplateRendererProps = {
  buildTemplate: Omit<BuildType, 'id'>;
};

export const TemplateRenderer: FC<TemplateRendererProps> = ({
  buildTemplate,
}) => {
  const { jsx, scss } = buildTemplate;
  return <Renderer jsx={jsx} scss={scss} />;
};
