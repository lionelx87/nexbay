import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { getAuth, UserCredential } from '@firebase/auth';
import { RegisterUser } from 'src/app/core/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: Auth) {
    this.auth = getAuth();
  }

  register(registerUser: RegisterUser) {
    const { fullname: displayName, username, password } = registerUser;
    createUserWithEmailAndPassword(this.auth, username, password).then(
      (userCredential: UserCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName }).then(() =>
          console.log(userCredential)
        );
      }
    );
  }
}
