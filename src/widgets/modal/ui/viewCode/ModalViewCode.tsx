import { useTemplateControll } from '@/entities/template';
import {
  ModalEnum,
  ModalLayout,
  useModalContext,
  Switch,
  SwitchOptionType,
  Code,
} from '@/shared/components';
import { useState } from 'react';
import { CssIcon, ReactIcon } from '@/shared/assets/icons';
import classes from './styles.module.scss';

export const ModalViewCode = () => {
  const { templateInEditMode } = useTemplateControll();
  const [editProperty, setEditProperty] = useState<'jsx' | 'css'>('jsx');
  const { open, close } = useModalContext();

  const jsx = templateInEditMode?.running.jsx ?? '';
  const scss = templateInEditMode?.running.scss ?? '';

  // const [jsxCode, setJsxCode] = useState<typeof jsx>(jsx);
  // const [scssCode, setScssCode] = useState<typeof scss>(scss);

  const handleSwitchEditProperty = (newValue: string) => {
    if (newValue === 'jsx' || newValue === 'css') {
      setEditProperty(newValue);
    }
  };

  // const handleJsxCodeChange = (value: string) => {
  //   setJsxCode(value);
  // };

  // const handleScssCodeChange = (value: string) => {
  //   setScssCode(value);
  // };

  const handleBack = () => {
    open(ModalEnum.TEMPLATE_CONTROLL);
  };

  const handleClose = () => {
    close();
  };

  const editOptions: SwitchOptionType[] = [
    {
      value: 'jsx',
      component: (
        <div className={classes.property}>
          <ReactIcon className={classes.icon} />
          JSX
        </div>
      ),
    },
    {
      value: 'css',
      component: (
        <div className={classes.property}>
          <CssIcon className={classes.icon} />
          CSS
        </div>
      ),
    },
  ];

  return (
    <ModalLayout
      onBack={handleBack}
      onClose={handleClose}
      contentClassNames={classes.modalEditTemplate}
    >
      <div className={classes.title}>
        <Switch
          current={editProperty}
          options={editOptions}
          onSwitchValue={handleSwitchEditProperty}
          transitionClassNames={classes.transition}
        />
      </div>
      <div className={classes.editView}>
        {editProperty === 'jsx' && <Code language="jsx" code={jsx} />}
        {editProperty === 'css' && <Code language="css" code={scss} />}
      </div>
    </ModalLayout>
  );
};
