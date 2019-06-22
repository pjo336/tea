export function handleGenerate(generateCommand: string): any {
  switch (generateCommand) {
    default:
      throw new Error(`Generator command "${generateCommand}" not recognized`);
  }
}
