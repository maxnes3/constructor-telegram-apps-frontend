import { SettingsIcon } from '@shared/assets/icons';
import { useProjectConfig } from '@entities/project';
import classes from './styles.module.scss';

export const PrototypeTelegramTopPanel = () => {
  const { projectName } = useProjectConfig();

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
