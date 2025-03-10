import { Input } from '@shared/components';
import { Button } from '@shared/components';
import { useProjectQuery } from '@entities/project';
import { useProjectConfig } from '@/entities/project';
import { useTemplatesAtPrototype } from '@/entities/template';
import classes from './styles.module.scss';

export const PanelProjectData = () => {
  const { projectName, handleSetProjectName } = useProjectConfig();
  const { templatesAtPrototype } = useTemplatesAtPrototype();
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
      <div className={classes.panelProjectData}>
        <div className={classes.panelProjectContent}>
          <Input
            value={projectName}
            placeholder="Project name"
            onChange={handleSetProjectName}
          />
          <Button mode={'active'} onClick={handleDownloadProjectZip}>
            Export as Zip
          </Button>
        </div>
      </div>
    </div>
  );
};
