import { FC } from 'react';

type SCSSRulesModuleProps = {
  scss: string | undefined;
};

export const SCSSRulesModule: FC<SCSSRulesModuleProps> = ({ scss }) => {
  if (!scss) return null;
  return <style>{scss}</style>;
};
