import { ScreenType } from './screenTypes';

export enum ProjectModeEnum {
  DEVELOP = 'develop',
  RUNNING = 'running',
}

export enum BrowserOSEnum {
  WINDOWS = 'windows',
  MACOS = 'macos',
  LINUX = 'linux',
}

export type ProjectRequestType = {
  name: string;
  screens: ScreenType[];
  browserOS?: BrowserOSEnum;
};
