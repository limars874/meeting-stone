import { NamedError } from '../utils/error';

export class DocumentNotExistsError extends Error {
  constructor(public readonly docName: string) {
    super(`${docName} not found`);
    this.name = new.target.name;
  }
}

export class InvalidArgumentError extends NamedError {
  constructor(public readonly argName: string, msg: string) {
    super(msg);
  }
}

export class NetworkError extends NamedError {}

export class DuplicateDataError extends NamedError {
  constructor(
    public readonly table: string,
    public readonly field: string,
    public readonly value: string
  ) {
    super(`${table}.${field}.${value} duplicated`);
  }
}

export class ReThrownError<T extends Error = Error> extends NamedError {
  constructor(public reason: T, message?: string) {
    super(message || reason.message);
    this.stack = this.stack + '\n' + reason.stack;
  }
}
