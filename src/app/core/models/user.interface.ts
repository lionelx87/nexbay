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
  // .user
  username: string; // email
  fullname: string; // displayName
  uid: string;
  photoUrl: string;
  //._tokenResponse:
  expiresIn: string;
  idToken: string;
  refreshToken: string;
}

export interface FirebaseAuthError {
  code: string;
}
