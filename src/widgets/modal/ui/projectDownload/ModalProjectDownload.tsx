import { useProjectConfig, useProjectQuery } from '@/entities/project';
import { useScreensAtProject } from '@/entities/screen';
import {
  ModalEnum,
  ModalLayout,
  useModalContext,
} from '@/shared/components/modal';
import { ReactNode, useMemo } from 'react';
import { BrowserOSEnum } from '@/shared/types';
import {
  LoadingIcon,
  SuccessIcon,
  CrossIcon,
  DownloadIcon,
  NovatoolkitIcon,
} from '@shared/assets/icons';
import classes from './styles.module.scss';
import cn from 'classnames';
import { Button } from '@/shared/components';
import { Code } from '@/shared/components';

const WINDOWS_INSTRUCTIONS: ReactNode = (
  <>
    <p>1. 📁 Unzip the project archive</p>
    <p>2. 💻 Open the project folder in the terminal</p>
    <p>
      3. 🛠️ Run <Code language="batchfile" code="./start.bat" />
    </p>
    <p>
      4. 📦 Ensure Node.js is installed. If not, download it from{' '}
      <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
        the official Node.js website
      </a>
    </p>
    <p>
      5. 🔄 If you installed Node.js, restart{' '}
      <Code language="batchfile" code="./start.bat" />
    </p>
    <p>
      6. ⏳ Wait for './start.bat' to install 📦 dependencies and 🚀 launch the
      project
    </p>
  </>
);

const MACOS_INSTRUCTIONS: ReactNode = (
  <>
    <p>1. 📁 Unzip the project archive</p>
    <p>2. 💻 Open the project folder in the terminal</p>
    <p>
      3. 🔑 Make the script executable by running{' '}
      <Code language="bash" code="chmod +x ./start.sh" />
    </p>
    <p>
      4. 🛠️ Run <Code language="bash" code="./start.sh" />
    </p>
    <p>
      5. 📦 Wait for Node.js to be installed via Homebrew (if not already
      installed)
    </p>
    <p>
      6. ⏳ Wait for './start.sh' to install 📦 dependencies and 🚀 launch the
      project
    </p>
  </>
);

const LINUX_INSTRUCTIONS: ReactNode = <></>;

const INSTRUCTIONS_FOR_START_PROJECT: Record<BrowserOSEnum, ReactNode> = {
  [BrowserOSEnum.WINDOWS]: WINDOWS_INSTRUCTIONS,
  [BrowserOSEnum.MACOS]: MACOS_INSTRUCTIONS,
  [BrowserOSEnum.LINUX]: LINUX_INSTRUCTIONS,
};

export const ModalProjectDownload = () => {
  const { open, close } = useModalContext();
  const { projectName, browserOS } = useProjectConfig();
  const { getScreensWithTemplatesIds } = useScreensAtProject();
  const { downloadProject, isIdle, isPending, isSuccess, isError } =
    useProjectQuery();

  const modalTitle = useMemo(() => {
    return (
      <span
        className={cn(classes.title, {
          [classes.isSuccess]: isSuccess,
          [classes.isError]: isError,
        })}
      >
        {isIdle && (
          <>
            <NovatoolkitIcon className={classes.icon} />
            Server ready to build!
          </>
        )}
        {isPending && (
          <>
            <LoadingIcon className={classes.icon} />
            Build in progress...
          </>
        )}
        {isSuccess && (
          <>
            <SuccessIcon className={classes.icon} />
            Build completed!
          </>
        )}
        {isError && (
          <>
            <CrossIcon className={classes.icon} />
            Build failed. Please try again.
          </>
        )}
      </span>
    );
  }, [isIdle, isPending, isSuccess, isError]);

  const modalContent = useMemo(() => {
    return INSTRUCTIONS_FOR_START_PROJECT[browserOS];
  }, [browserOS]);

  const handleDownloadProjectZip = () => {
    const screens = getScreensWithTemplatesIds();
    downloadProject({
      name: projectName,
      screens,
      browserOS,
    });
  };

  const handleBack = () => {
    open(ModalEnum.PROJECT_EXPORT);
  };

  const handleClose = () => {
    close();
  };

  return (
    <ModalLayout
      title={modalTitle}
      onBack={handleBack}
      onClose={handleClose}
      rootClassNames={classes.modalProjectDownload}
    >
      <div className={classes.content}>{modalContent}</div>
      {!isPending && (
        <Button
          mode="active"
          customClassNames={classes.downloadButton}
          onClick={handleDownloadProjectZip}
        >
          <DownloadIcon />
          Download
        </Button>
      )}
    </ModalLayout>
  );
};
