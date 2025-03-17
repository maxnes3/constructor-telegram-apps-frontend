import { FC } from 'react';
import { BuildType } from '@shared/types';
import { Renderer } from '@shared/components';

type TemplateRendererProps = {
  buildTemplate: Omit<BuildType, 'id'>;
};

export const TemplateRenderer: FC<TemplateRendererProps> = ({
  buildTemplate,
}) => {
  const { html, css } = buildTemplate;
  return <Renderer html={html} css={css} />;
};
