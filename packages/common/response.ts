class CustomResponse {
  message?: string;
  error?: any;
  data?: any;
  constructor(message?: string) {
    this.message = message;
  }
}

export class ErrorResponse extends CustomResponse {
  constructor(message?: string, error?: any) {
    super(message);
    this.error = error;
    this.data = null;
  }
}

export class SuccessResponse extends CustomResponse {
  constructor(message?: string, data?: any) {
    super(message);
    this.data = data;
    this.error = null;
  }
}
