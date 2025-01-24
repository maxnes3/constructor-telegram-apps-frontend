import { CSSProperties, FC } from 'react';
import { PROTOTYPE_ID, PrototypeType } from '@shared/types';
import { useConstructorStore } from '@entities/constructor';
import { convertToCSSProperties } from '../model';
import { TemplatePrototype } from '@/entities/template';
import { TelegrammTopPanel } from './telegramm.top.panel';
import { PrototypeLayoutArea } from './area.module';
import classNames from 'classnames';
import classes from './layout.module.scss';

type PrototypeWithoutIdAndName = Omit<PrototypeType, 'id' | 'model_name'>;

type PhonePrototypeLayoutProps = {
  model: PrototypeWithoutIdAndName;
  containerWidth: number | null;
};

export const PhonePrototypeLayout: FC<PhonePrototypeLayoutProps> = ({
  model,
}) => {
  const isScaledPrototype = useConstructorStore(
    (state) => state.isScaledPrototype,
  );
  const templatesAtPrototype = useConstructorStore(
    (state) => state.templatesAtPrototype,
  );
  const modelCssProperties = convertToCSSProperties(model) as CSSProperties;

  return (
    <div
      id={PROTOTYPE_ID}
      style={modelCssProperties}
      className={classNames(classes.phonePrototypeLayout, {
        [classes.isScaled]: isScaledPrototype,
      })}
    >
      <TelegrammTopPanel />
      <div className={classes.phonePrototypeLayoutContent}>
        {templatesAtPrototype.length > 0 &&
          templatesAtPrototype.map((template) => (
            <TemplatePrototype key={template.id} template={template} />
          ))}
      </div>
      <PrototypeLayoutArea />
    </div>
  );
};
