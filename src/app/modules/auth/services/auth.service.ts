import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
} from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { Store } from '@ngrx/store';
import { catchError, from, map, Observable, switchMap, throwError } from 'rxjs';
import { CustomRoute } from 'src/app/core/models/routing.interface';
import {
  FirebaseAuthError,
  LoggedUser,
  LoginUser,
  RegisterUser,
} from 'src/app/core/models/user.interface';
import { CustomRoutingService } from 'src/app/core/services/custom-routing.service';
import { AppState } from 'src/app/store/app.reducer';
import { setUser, unSetUser } from 'src/app/store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private store: Store<AppState>,
    private customRoutingService: CustomRoutingService
  ) {
    this.auth = getAuth();
  }

  initializeAuth() {
    onAuthStateChanged(this.auth, (user: any) => {
      user ? this.setUserFromFirebase(user) : this.unSetUserFromFirebase();
    });
  }

  private setUserFromFirebase(user: any) {
    const loggedUser: LoggedUser = {
      username: user.email,
      fullname: user.displayName,
      uid: user.uid,
      photoUrl: user.photoUrl,
      expiresIn: user.stsTokenManager.expirationTime,
      idToken: user.accessToken,
      refreshToken: user.stsTokenManager.refreshToken,
    };
    this.store.dispatch(setUser({ user: loggedUser }));
  }

  private unSetUserFromFirebase() {
    this.store.dispatch(unSetUser());
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

  login(loginUser: LoginUser): Observable<UserCredential> {
    const { username, password } = loginUser;
    return from(signInWithEmailAndPassword(this.auth, username, password)).pipe(
      catchError((err: FirebaseAuthError) => throwError(() => err))
    );
  }

  isAuth(): Observable<boolean> {
    return new Observable(subscribe => {
      onAuthStateChanged(this.auth, user => {
        subscribe.next(!!user);
      });
    });
  }

  logout() {
    signOut(this.auth).then(() =>
      this.customRoutingService.go(CustomRoute.LOGIN)
    );
  }
}
