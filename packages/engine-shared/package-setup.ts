export type PackageNode = any;

export enum Library {
  React = "react",
  Vue = "vue",
  Native = "native",
}

export interface PackageSetup {
  name: string;

  icon: PackageNode | string;

  node: PackageNode;

  library: Library;

  category: Category;
}

export enum Category {
  Basic = "basic",
  Layout = "layout",
  Custom = "custom",
}

export function defineConfig(options: Partial<PackageSetup>): PackageSetup {
  return Object.assign(
    {
      name: "",
      icon: null,
      node: null,
      library: Library.Native,
      category: Category.Custom,
    },
    options
  );
}
