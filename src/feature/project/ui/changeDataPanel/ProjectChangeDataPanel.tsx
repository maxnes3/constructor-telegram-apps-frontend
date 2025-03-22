import { Input } from '@shared/components';
import { Button } from '@shared/components';
import { useProjectQuery } from '@entities/project';
import { useProjectConfig } from '@/entities/project';
import { useTemplatesAtPrototype } from '@/entities/template';
import classes from './styles.module.scss';
import { DownloadIcon } from '@/shared/assets/icons';

export const ProjectChangeDataPanel = () => {
  const { projectName, changeProjectName } = useProjectConfig();
  const { templatesAtPrototype } = useTemplatesAtPrototype();
  const { downloadProject } = useProjectQuery();

  const handleDownloadProjectZip = () => {
    const templatesId = templatesAtPrototype.map((template) => template.id);
    downloadProject({
      name: projectName,
      templatesId,
    });
  };

  return (
    <div className={classes.projectChangeDataPanel}>
      <div className={classes.panelProjectContent}>
        <Input
          value={projectName}
          placeholder="Project name"
          onChange={changeProjectName}
        />
        <Button mode={'active'} onClick={handleDownloadProjectZip}>
          <div className={classes.downloadButton}>
            <DownloadIcon />
            Export as Zip
          </div>
        </Button>
      </div>
    </div>
  );
};
