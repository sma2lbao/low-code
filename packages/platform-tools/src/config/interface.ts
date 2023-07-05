enum Align {
  Start = "start",
  Center = "center",
  End = "end",
  Stretch = "stretch",
  Normal = "normal",
}

interface SizeConfig {
  width: number;
  height: number;
}

interface TypographyConfig {
  color: string;
  fontSize: string;
}

interface AlignConfig {}

interface Config {
  align: AlignConfig;
  size: SizeConfig;
  typography: TypographyConfig;
}
