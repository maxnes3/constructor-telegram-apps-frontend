import { Button, Input, ModalEnum, useModalContext } from '@/shared/components';
import { useProjectConfig } from '../../model';
import { DownloadIcon } from '@/shared/assets/icons';
import { FC } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

interface Props {
  inputClassName?: string;
  buttonClassName?: string;
}

export const ProjectChangeData: FC<Props> = ({
  inputClassName,
  buttonClassName,
}) => {
  const { projectName, changeProjectName } = useProjectConfig();
  const { open } = useModalContext();

  const handleOpenExportModal = () => {
    open(ModalEnum.PROJECT_EXPORT);
  };

  return (
    <div className={classes.projectChangeData}>
      <Input
        value={projectName}
        placeholder="Project name"
        onChange={changeProjectName}
        customClassNames={inputClassName}
      />
      <Button
        mode={'active'}
        onClick={handleOpenExportModal}
        customClassNames={cn(classes.exportButton, buttonClassName)}
      >
        <DownloadIcon className={classes.icon} />
        EXPORT
      </Button>
    </div>
  );
};
