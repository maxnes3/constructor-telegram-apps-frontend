import { useConstructorStore } from '@entities/constructor';
import SETTINGS from '@shared/assets/icons/settings.svg';
import classes from './telegramm.top.panel.module.scss';

export const TelegrammTopPanel = () => {
  const projectName = useConstructorStore((state) => state.projectName);

  return (
    <div className={classes.telegrammTopPanelContainer}>
      <span className={classes.telegrammCancel}>Cancel</span>
      <div className={classes.telegrammMiniApp}>
        <span className={classes.telegrammMiniAppName}>{projectName}</span>
        <span className={classes.telegrammBot}>bot</span>
      </div>
      <SETTINGS className={classes.telegrammSettingsIcon} />
    </div>
  );
};
