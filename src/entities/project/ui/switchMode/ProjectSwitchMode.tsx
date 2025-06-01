import { Switch, SwitchOptionType } from '@/shared/components';
import { useProjectMode } from '../../model';
import { ProjectModeEnum } from '@/shared/types';
import { DevelopIcon, RunningIcon } from '@/shared/assets/icons';
import { FC } from 'react';
import cn from 'classnames';
import classes from './styles.module.scss';

interface Props {
  transitionClassName?: string;
}

export const ProjectSwitchMode: FC<Props> = ({ transitionClassName }) => {
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
    <Switch
      current={projectMode}
      options={projectModeOptions}
      onSwitchValue={handleSwitchMode}
      transitionClassNames={transitionClassName}
    />
  );
};
