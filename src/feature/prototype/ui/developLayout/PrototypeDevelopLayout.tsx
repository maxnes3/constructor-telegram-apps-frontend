import { useProjectMode } from '@entities/project';
// import { useTemplatesAtPrototype } from '@entities/template';
import classes from './styles.module.scss';

export const PrototypeDevelopLayout = () => {
  const { projectMode } = useProjectMode();
  //   const { templatesAtPrototype } = useTemplatesAtPrototype();

  return (
    projectMode === 'develop' && (
      <div className={classes.prototypeDevelopLayout}></div>
    )
  );
};
