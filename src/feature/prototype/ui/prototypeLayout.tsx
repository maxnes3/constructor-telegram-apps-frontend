import { CSSProperties, FC } from 'react';
import { PROTOTYPE_ID, PrototypeType } from '@shared/types';
import { convertToCSSProperties } from '../model';
import { TemplatePrototype } from '@feature/template';
import {
  usePrototypeLayout,
  PrototypeLayoutArea,
  TelegrammTopPanel,
} from '@entities/prototype';
import { useProjectConfig } from '@entities/project';
import { useTemplatesAtPrototype } from '@entities/template';
import classNames from 'classnames';
import classes from './styles.module.scss';

type PrototypeWithoutIdAndName = Omit<PrototypeType, 'id' | 'model_name'>;

type PrototypeLayoutProps = {
  model: PrototypeWithoutIdAndName;
  containerWidth: number | null;
};

export const PrototypeLayout: FC<PrototypeLayoutProps> = ({ model }) => {
  const { projectName } = useProjectConfig();
  const { isScaledPrototype } = usePrototypeLayout();
  const { templatesAtPrototype } = useTemplatesAtPrototype();

  const modelCssProperties = convertToCSSProperties(model) as CSSProperties;

  const templatesAtPrototypeRender =
    templatesAtPrototype.length > 0 &&
    templatesAtPrototype.map((template) => (
      <TemplatePrototype key={template.id} template={template} />
    ));

  const prototypeLayoutClassNames = classNames(classes.prototypeLayout, {
    [classes.isScaled]: isScaledPrototype,
  });

  return (
    <div
      id={PROTOTYPE_ID}
      style={modelCssProperties}
      className={prototypeLayoutClassNames}
    >
      <TelegrammTopPanel projectName={projectName} />
      <div className={classes.prototypeLayoutContent}>
        {templatesAtPrototypeRender}
      </div>
      <PrototypeLayoutArea />
    </div>
  );
};
