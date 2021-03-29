/**
 * 
 * Suppose we’re building an Error handler for a particular web application and the requirements are to perform different types of actions based on the type of error. In this scenario, let’s just take two types of errors:
 * 
 * 1. Database Error
 * 2. Connection Error
 * 
 */

abstract class CustomErrorBad {
  error: Error;
  errorMessage: string;
  constructor(error: Error) {
    this.error = error;
  }
  abstract createErrorMessage(): void;
  abstract logError(): void;
}

class ConnectionErrorBad extends CustomErrorBad {
  constructor(error: Error) {
    super(error);
  }
  createErrorMessage(): void {
    this.errorMessage = `Connection error: ${this.error.message}`;
  }
  logError(): void {
    console.log(this.errorMessage);
  }
}

class DBErrorBad extends CustomErrorBad {
  constructor(error: Error) {
    super(error);
  }
  createErrorMessage(): void {
    this.errorMessage = `DB error: ${this.error.message}`;
  }
  logError(): void {
    console.log(this.errorMessage);
  }
  createAlert(): void {
    console.log("Alert Sent");
  }
}

const errorDecoratorBad = (customError: CustomErrorBad) => {
  customError.createErrorMessage();
  customError.logError();
  if (customError instanceof DBErrorBad) {
    customError.createAlert();
  }
};
