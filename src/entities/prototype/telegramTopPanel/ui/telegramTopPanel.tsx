import { SettingsIcon } from '@shared/assets/icons';
import classes from './styles.module.scss';

type TelegrammTopPanelPros = {
  projectName: string;
};

export const TelegrammTopPanel = ({ projectName }: TelegrammTopPanelPros) => {
  return (
    <div className={classes.telegrammTopPanelContainer}>
      <span className={classes.telegrammCancel}>Cancel</span>
      <div className={classes.telegrammMiniApp}>
        <span className={classes.telegrammMiniAppName}>{projectName}</span>
        <span className={classes.telegrammBot}>bot</span>
      </div>
      <SettingsIcon className={classes.telegrammSettingsIcon} />
    </div>
  );
};
