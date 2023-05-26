import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import {
  Observable,
  catchError,
  from,
  map,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import {
  FirebaseAuthError,
  RegisterUser,
} from 'src/app/core/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {
    this.auth = getAuth();
  }

  register(registerUser: RegisterUser): Observable<boolean> {
    const { fullname: displayName, username, password } = registerUser;
    const registeredUser$ = from(
      createUserWithEmailAndPassword(this.auth, username, password)
    );
    return registeredUser$.pipe(
      switchMap(({ user }) =>
        from(updateProfile(user, { displayName })).pipe(map(() => true))
      ),
      catchError((err: FirebaseAuthError) => throwError(() => err))
    );
  }
}
