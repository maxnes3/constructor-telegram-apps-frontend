import { Switch, SwitchOptionType } from '@shared/components';
import { DevelopIcon, RunningIcon } from '@shared/assets/icons';
import classes from './styles.module.scss';
import cn from 'classnames';
import { useProjectMode } from '@/entities/project';

export const ProjectSwitchModePanel = () => {
  const { projectMode, switchProjectMode } = useProjectMode();

  const projectModeOptions: SwitchOptionType[] = [
    {
      value: 'develop',
      component: (
        <div
          className={cn(classes.mode, {
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
          className={cn(classes.mode, {
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
    switchProjectMode(newValue);
  };

  return (
    <div className={classes.projectSwitchModePanel}>
      <div className={classes.projectPanelContent}>
        <Switch
          current={projectMode}
          options={projectModeOptions}
          handleSwitchValue={handleSwitchMode}
        />
      </div>
    </div>
  );
};
