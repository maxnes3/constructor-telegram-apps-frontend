import { Switch, SwitchOptionType } from '@shared/components';
import { DevelopIcon, RunningIcon } from '@shared/assets/icons';
import { useProjectMode } from '@/entities/project';
import { ProjectModeEnum } from '@/shared/types';
import classes from './styles.module.scss';
import cn from 'classnames';

export const ProjectSwitchModePanel = () => {
  const { projectMode, switchProjectMode } = useProjectMode();

  const projectModeOptions: SwitchOptionType[] = [
    {
      value: ProjectModeEnum.DEVELOP,
      component: (
        <div
          className={cn(classes.mode, {
            [classes.showIcon]: projectMode === ProjectModeEnum.DEVELOP,
          })}
        >
          <DevelopIcon />
          <span>DEVELOP</span>
        </div>
      ),
    },
    {
      value: ProjectModeEnum.RUNNING,
      component: (
        <div
          className={cn(classes.mode, {
            [classes.showIcon]: projectMode === ProjectModeEnum.RUNNING,
          })}
        >
          <RunningIcon />
          <span>RUNNING</span>
        </div>
      ),
    },
  ];

  const handleSwitchMode = (newValue: string) => {
    if (
      newValue !== ProjectModeEnum.DEVELOP &&
      newValue !== ProjectModeEnum.RUNNING
    ) {
      return;
    }
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
