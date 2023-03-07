export const smoke = (file: string) => {
  return process.argv.some((v) => v.endsWith(file)) ? describe : describe.skip;
};
