import { Input } from '@shared/components';
import { Button } from '@shared/components';
import { useProjectConfig } from '@/entities/project';
import { DownloadIcon } from '@/shared/assets/icons';
import { ModalEnum, useModalContext } from '@/shared/components/modal';
import classes from './styles.module.scss';

export const ProjectChangeDataPanel = () => {
  const { projectName, changeProjectName } = useProjectConfig();
  const { open } = useModalContext();

  const handleOpenExportModal = () => {
    open(ModalEnum.PROJECT_EXPORT);
  };

  return (
    <div className={classes.projectChangeDataPanel}>
      <div className={classes.panelProjectContent}>
        <Input
          value={projectName}
          placeholder="Project name"
          onChange={changeProjectName}
        />
        <Button mode={'active'} onClick={handleOpenExportModal}>
          <div className={classes.downloadButton}>
            <DownloadIcon />
            EXPORT
          </div>
        </Button>
      </div>
    </div>
  );
};
