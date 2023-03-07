type Constructor<T> = new (...args: any[]) => T;
type ConstructorParameters<C, T> = C extends new (...arg: infer P) => T
  ? P
  : never;

/**
 * Give custom error a name
 */
export function namedError<T extends Error, C extends Constructor<T>>(
  constructor: C,
  ...args: ConstructorParameters<C, T>
) {
  const error: T = new constructor(...args);
  error.name = constructor.name;
  return error;
}

export class NamedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = new.target.name;
  }
}
