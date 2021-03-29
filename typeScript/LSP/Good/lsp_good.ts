/**
 * 
 * Suppose we’re building an Error handler for a particular web application and the requirements are to perform different types of actions based on the type of error. In this scenario, let’s just take two types of errors:
 * 
 * 1. Database Error
 * 2. Connection Error
 * 
 */

abstract class CustomErrorGood {
  error: Error;
  errorMessage: string;
  constructor(error: Error) {
    this.error = error;
  }
  abstract createErrorMessage(): void;
  abstract logError(): void;
}

class ConnectionErrorGood extends CustomErrorGood {
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

class AlertSystem {
  public sendAlert(message: string) {
    console.log("Alert sent");
  }
}

class DBErrorGood extends CustomErrorGood {
  constructor(error: Error) {
    super(error);
  }
  createErrorMessage(): void {
    this.errorMessage = `DB error: ${this.error.message}`;
  }
  logError(): void {
    console.log(this.errorMessage);
    const alert = new AlertSystem();
    alert.sendAlert(this.errorMessage);
  }
}

const errorDecoratorGood = (customError: CustomErrorBad) => {
  customError.createErrorMessage();
  customError.logError();
};
