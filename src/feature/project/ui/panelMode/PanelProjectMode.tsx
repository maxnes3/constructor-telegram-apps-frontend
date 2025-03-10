import { Switch, SwitchOptionType } from '@shared/components';
import { useProjectStore } from '@entities/project';
import { DevelopIcon, RunningIcon } from '@shared/assets/icons';
import classes from './styles.module.scss';
import classNames from 'classnames';

export const PanelProjectMode = () => {
  const { projectMode, setProjectMode } = useProjectStore();

  const projectModeOptions: SwitchOptionType[] = [
    {
      value: 'develop',
      component: (
        <div
          className={classNames(classes.mode, {
            [classes.showIcon]: projectMode === 'develop',
          })}
        >
          <DevelopIcon />
          <span>DEVELOP</span>
        </div>
      ),
    },
    {
      value: 'running',
      component: (
        <div
          className={classNames(classes.mode, {
            [classes.showIcon]: projectMode === 'running',
          })}
        >
          <RunningIcon />
          <span>RUNNING</span>
        </div>
      ),
    },
  ];

  const handleSwitchMode = (newValue: string) => {
    if (newValue !== 'develop' && newValue !== 'running') return;
    setProjectMode(newValue);
  };

  return (
    <div className={classes.panelProjectMode}>
      <div className={classes.panelProjectContent}>
        <Switch
          current={projectMode}
          options={projectModeOptions}
          handleSwitchValue={handleSwitchMode}
        />
      </div>
    </div>
  );
};
