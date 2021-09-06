export class HttpError extends Error {
  httpCode: number;
  errors: unknown[];

  constructor(httpCode: number, message: string, errors: unknown[] = []) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
    this.httpCode = httpCode;
    this.errors = errors;
  }
}
