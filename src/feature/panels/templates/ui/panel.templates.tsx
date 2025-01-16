import { FC } from 'react';
import classes from './styles.module.scss';

type PanelWithTemplatesProps = {
  templates?: undefined;
};

export const PanelWithTemplates: FC<PanelWithTemplatesProps> = () => {
  return <div className={classes.panelWithTemplates}></div>;
};
