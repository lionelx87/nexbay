export interface RegisterUser {
  fullname: string;
  username: string;
  password: string;
}

export interface LoginUser {
  username: string;
  password: string;
}

export interface LoggedUser {
  username: string;
  fullname: string;
  uid: string;
}
