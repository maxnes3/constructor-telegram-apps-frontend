import { useProjectConfig } from '@/entities/project';
import {
  AppleIcon,
  WindowsIcon,
  CloudIcon,
  LinuxIcon,
} from '@/shared/assets/icons';
import { Button } from '@/shared/components';
import {
  ModalLayout,
  ModalEnum,
  useModalContext,
} from '@shared/components/modal';
import { BrowserOSEnum } from '@/shared/types';
import classes from './styles.module.scss';

export const ModalProjectExport = () => {
  const { changeBrowserOS } = useProjectConfig();
  const { open, close } = useModalContext();

  const handleSaveAtServer = () => {
    open(ModalEnum.LOGIN);
  };

  const handleOpenProjectDownloadModal = (osName: BrowserOSEnum) => {
    changeBrowserOS(osName);
    open(ModalEnum.PROJECT_DOWNLOAD);
  };

  const handleClose = () => {
    close();
  };

  return (
    <ModalLayout
      title="Dowload Project Zip"
      onClose={handleClose}
      contentClassNames={classes.modalProjectExport}
    >
      <Button
        mode="active"
        customClassNames={classes.exportButton}
        onClick={handleSaveAtServer}
      >
        <CloudIcon className={classes.osIcon} />
        Save on Server
      </Button>
      <h4 className={classes.orText}>OR</h4>
      <Button
        mode="active"
        customClassNames={classes.exportButton}
        onClick={() => handleOpenProjectDownloadModal(BrowserOSEnum.WINDOWS)}
      >
        <WindowsIcon className={classes.osIcon} />
        Export for Windows
      </Button>
      <Button
        mode="active"
        customClassNames={classes.exportButton}
        onClick={() => handleOpenProjectDownloadModal(BrowserOSEnum.MACOS)}
      >
        <AppleIcon className={classes.osIcon} />
        Export for MacOS
      </Button>
      <Button
        mode="active"
        customClassNames={classes.exportButton}
        onClick={() => handleOpenProjectDownloadModal(BrowserOSEnum.LINUX)}
      >
        <LinuxIcon className={classes.osIcon} />
        Export for Linux
      </Button>
    </ModalLayout>
  );
};
