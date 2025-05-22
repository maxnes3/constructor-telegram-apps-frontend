import { CodebaseType } from './codebaseTypes';

export type TemplateType = {
  id: string;
  name: string;
  positionBehaviour: string;
  categoryId: string;
  develop: CodebaseType;
  running: CodebaseType;
};

export type TemplatesAtPrototypeType = Record<string, TemplateType[]>;
