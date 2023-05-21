import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { getAuth, UserCredential } from '@firebase/auth';
import { Observable, catchError, from, map, of, switchMap, tap } from 'rxjs';
import { RegisterUser } from 'src/app/core/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: Auth) {
    this.auth = getAuth();
  }

  register(registerUser: RegisterUser): Observable<boolean> {
    const { fullname: displayName, username, password } = registerUser;
    const registeredUser$ = from(
      createUserWithEmailAndPassword(this.auth, username, password)
    );
    return registeredUser$.pipe(
      switchMap((userCredential: UserCredential) => {
        const { user } = userCredential;
        return from(updateProfile(user, { displayName })).pipe(map(() => true));
      }),
      catchError(err => of(false))
    );
  }
}
