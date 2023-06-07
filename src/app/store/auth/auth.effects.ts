import { Injectable } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { catchError, finalize, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { CustomMessageType } from 'src/app/shared/models/message.interface';
import { CustomRoute } from 'src/app/shared/models/routing.interface';
import { CustomRoutingService } from 'src/app/shared/services/custom-routing.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CustomMessageService } from 'src/app/shared/services/custom-message.service';
import { AppState } from '../app.reducer';
import { hideLoading, showLoading } from '../ui/ui.actions';
import {
  loginUser,
  loginUserFail,
  loginUserSuccess,
  registerUser,
  registerUserFail,
  registerUserSuccess,
  setUser,
} from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private customMessageService: CustomMessageService,
    private store: Store<AppState>,
    private translateService: TranslateService,
    private customRoutingService: CustomRoutingService
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      tap(() => this.store.dispatch(showLoading())),
      mergeMap(action =>
        this.authService.register(action.user).pipe(
          map(success =>
            success
              ? registerUserSuccess()
              : registerUserFail({ error: { code: 'generic' } })
          ),
          catchError(err => {
            return of(registerUserFail({ error: err.code }));
          }),
          finalize(() => this.store.dispatch(hideLoading()))
        )
      )
    )
  );

  registerUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerUserSuccess),
        switchMap(action =>
          this.translateService.get([
            'auth.register.success.title',
            'auth.register.success.content',
          ])
        ),
        tap((translate: string[]) => {
          const [title, content] = Object.values(translate);
          this.customRoutingService.go(CustomRoute.LOGIN);
          this.customMessageService.showMessage({
            type: CustomMessageType.SEVERITY_SUCCESS,
            title,
            content,
          });
        })
      ),
    { dispatch: false }
  );

  registerUserFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerUserFail),
        switchMap(action =>
          this.translateService.get('auth.form.errors.' + action.error)
        ),
        tap(translate =>
          this.customMessageService.showMessage({
            type: CustomMessageType.SEVERITY_ERROR,
            title: 'Error',
            content: translate,
          })
        )
      ),
    { dispatch: false }
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      tap(() => this.store.dispatch(showLoading())),
      mergeMap(action =>
        this.authService.login(action.user).pipe(
          map((userFirebase: UserCredential) => loginUserSuccess({ user: JSON.parse(JSON.stringify(userFirebase)) })),
          catchError(err => {
            return of(loginUserFail({ error: err.code }));
          }),
          finalize(() => this.store.dispatch(hideLoading()))
        )
      )
    )
  );

  loginUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUserSuccess),
      map(({ user }: any) => {
        const {
          email: username,
          displayName: fullname,
          uid,
          photoUrl,
        } = user.user;
        const { expiresIn, idToken, refreshToken } = user._tokenResponse;
        this.customRoutingService.go(CustomRoute.HOME);
        return setUser({
          user: {
            username,
            fullname,
            uid,
            photoUrl,
            expiresIn,
            idToken,
            refreshToken,
          },
        });
      })
    )
  );

  loginUserFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginUserFail),
        switchMap(action =>
          this.translateService.get('auth.form.errors.' + action.error)
        ),
        tap(translate =>
          this.customMessageService.showMessage({
            type: CustomMessageType.SEVERITY_ERROR,
            title: 'Error',
            content: translate,
          })
        )
      ),
    { dispatch: false }
  );
}
