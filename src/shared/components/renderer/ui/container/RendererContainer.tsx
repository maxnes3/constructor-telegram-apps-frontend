import { FC } from 'react';
import { CodebaseType } from '@shared/types';
import { JSXRenderModule } from '../jsx';
import { SCSSRulesModule } from '../scss';
import { BaseComponentsProps } from '@/shared/components/type';
import classes from './styles.module.scss';
import cn from 'classnames';

type JSXRendererProps = {} & BaseComponentsProps & Omit<CodebaseType, 'id'>;

export const Renderer: FC<JSXRendererProps> = ({
  jsx,
  scss,
  customClassNames,
}) => {
  const rendererClassNames = cn(classes.rendererContainer, customClassNames);

  return (
    <div className={rendererClassNames}>
      <SCSSRulesModule scss={scss} />
      <JSXRenderModule jsx={jsx} />
    </div>
  );
};
