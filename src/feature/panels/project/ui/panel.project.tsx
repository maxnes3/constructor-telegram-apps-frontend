import { Input } from '@shared/components';
import { Button } from '@shared/components';
import { useConstructorStore } from '@entities/constructor';
import classes from './styles.module.scss';

export const PanelProjectControll = () => {
  const projectName = useConstructorStore((state) => state.projectName);
  const setProjectName = useConstructorStore((state) => state.setProjectName);
  const handleSaveProjectFile = () => {};

  return (
    <div className={classes.panelProjectContainer}>
      <div className={classes.panelProjectControll}>
        <div className={classes.panelProjectContent}>
          <Input
            value={projectName}
            placeholder="Project name"
            onChange={setProjectName}
          />
          <Button mode={'active'} onClick={handleSaveProjectFile}>
            Export as Zip
          </Button>
        </div>
      </div>
    </div>
  );
};
