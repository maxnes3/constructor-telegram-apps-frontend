import { FC } from 'react';
import StringToReactComponent from 'string-to-react-component';
// import { createComponentFromString } from '../../model';

type JSXRenderModuleProps = {
  jsx: string;
};

export const JSXRenderModule: FC<JSXRenderModuleProps> = ({ jsx }) => {
  return <StringToReactComponent>{jsx}</StringToReactComponent>;
};
