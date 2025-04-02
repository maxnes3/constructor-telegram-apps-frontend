import { FC } from 'react';
import { BuildType } from '@shared/types';
import { JSXRenderModule } from '../jsx';
import { SCSSRulesModule } from '../scss';
import classes from './styles.module.scss';
import cn from 'classnames';

type JSXRendererProps = {
  customClassNames?: string;
} & Omit<BuildType, 'id'>;

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
