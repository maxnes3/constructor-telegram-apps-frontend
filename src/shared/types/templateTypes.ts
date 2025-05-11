import { BuildType } from './buildTypes';

export type TemplateType = {
  id: string;
  name: string;
  positionBehaviour: string;
  categoryId: string;
  demo: BuildType;
  prototype: BuildType;
};

export type TemplatesAtPrototypeType = Record<string, TemplateType[]>;
