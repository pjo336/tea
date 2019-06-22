declare module 'tea-domain' {
  export type Template = {
    // The location of the mustache template, relative to src/cli/templates
    templateLocation: string;
    // The location the file will be written to within the app, relative to cwd/appName
    writeLocation: string;
    name?: string;
  };
}
