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
  username: string; // email
  fullname: string; // displayName
  uid: string;
  photoUrl: string;
  expiresIn: number;
  idToken: string;
  refreshToken: string;
}

export interface FirebaseAuthError {
  code: string;
}

export interface FirebaseUser {
  email: string;
  displayName: string;
  uid: string;
  photoUrl: string;
  accessToken: string;
  stsTokenManager: {
    expirationTime: number;
    refreshToken: string;
  };
}
