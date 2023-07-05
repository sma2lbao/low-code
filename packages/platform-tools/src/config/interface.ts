export enum Align {
  Start = "start",
  Center = "center",
  End = "end",
  Stretch = "stretch",
  Normal = "normal",
}

export interface SizeConfig {
  width: number;
  height: number;
}

export interface TypographyConfig {
  color: string;
  fontSize: string;
}

export interface AlignConfig {}

export interface Config {
  align: AlignConfig;
  size: SizeConfig;
  typography: TypographyConfig;
}

export enum ConfigCategory {
  Align = "align",
  Size = "size",
  Typography = "typography",
}
