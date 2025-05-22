import { BackIcon, NextIcon } from '@/shared/assets/icons';
import { Button } from '@/shared/components';
import { FC } from 'react';
import classes from './styles.module.scss';

interface TemplatePickButtonProps {
  iconType: 'prev' | 'next';
  onClick: VoidFunction;
}

export const TemplatePickButton: FC<TemplatePickButtonProps> = ({
  iconType,
  onClick,
}) => {
  const icon =
    iconType === 'next' ? (
      <NextIcon className={classes.icon} />
    ) : (
      <BackIcon className={classes.icon} />
    );

  const handleClick = () => {
    onClick();
  };

  return (
    <Button
      mode="transparent"
      onClick={handleClick}
      customClassNames={classes.templatePickButton}
    >
      {icon}
    </Button>
  );
};
