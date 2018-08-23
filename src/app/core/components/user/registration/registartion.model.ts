export interface IRegistrationModel {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export class RegistrationModel implements IRegistrationModel {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;

  constructor(firstName?: string, lastName?: string, userName?: string, email?: string, password?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}
