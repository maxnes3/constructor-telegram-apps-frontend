import { FC } from 'react';
import { BuildType } from '@shared/types';
import { JSXRenderModule } from '../jsx';
import { SCSSRulesModule } from '../scss';
import classes from './styles.module.scss';

type JSXRendererProps = Omit<BuildType, 'id'>;

export const Renderer: FC<JSXRendererProps> = ({ jsx, scss }) => {
  return (
    <div className={classes.rendererContainer}>
      <SCSSRulesModule scss={scss} />
      <JSXRenderModule jsx={jsx} />
    </div>
  );
};
