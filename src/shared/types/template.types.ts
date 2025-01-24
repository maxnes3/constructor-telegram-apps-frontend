export type CategoryType = {
  id: string;
  name: string;
};

export type BuildType = {
  id?: string;
  html: string;
  css: string;
};

export type TemplateType = {
  id: string;
  name: string;
  positionBehaviour: string;
  categoryId: string;
  demo: BuildType;
  prototype: BuildType;
};
