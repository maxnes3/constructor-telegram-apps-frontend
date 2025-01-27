import { Input } from '@shared/components';
import { Button } from '@shared/components';
import { useConstructorStore } from '@entities/constructor';
import { useProjectQuery } from '../api';
import classes from './styles.module.scss';

export const PanelProjectControll = () => {
  const projectName = useConstructorStore((state) => state.projectName);
  const templatesAtPrototype = useConstructorStore(
    (state) => state.templatesAtPrototype,
  );
  const setProjectName = useConstructorStore((state) => state.setProjectName);
  const { handleDownloadProject } = useProjectQuery();

  const handleDownloadProjectZip = () => {
    const templatesId = templatesAtPrototype.map((template) => template.id);
    handleDownloadProject({
      name: projectName,
      templatesId,
    });
  };

  return (
    <div className={classes.panelProjectContainer}>
      <div className={classes.panelProjectControll}>
        <div className={classes.panelProjectContent}>
          <Input
            value={projectName}
            placeholder="Project name"
            onChange={setProjectName}
          />
          <Button mode={'active'} onClick={handleDownloadProjectZip}>
            Export as Zip
          </Button>
        </div>
      </div>
    </div>
  );
};
