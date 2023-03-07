export function assertNever(x: never): never {
  throw new Error('invalid-argument, unexpected object: ' + x);
}
