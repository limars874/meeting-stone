/**
 * EnrichedPromise define possible errors
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type EnrichedPromise<T, E> = Promise<T>;

// to escape tsetse errors => "All Promises in async functions must either be awaited or used in an expression"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noAwait = (p: Promise<any> | void) => {
  // noop
};

export const createDeferredPromise = <T = void>() => {
  let resolve;
  let reject;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve: resolve as never as (value: T | PromiseLike<T>) => void,
    reject: reject as never as (reason?: any) => void,
  };
};
