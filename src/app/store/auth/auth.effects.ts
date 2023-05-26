import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, finalize, map, mergeMap, of, tap } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CustomMessageService } from 'src/app/shared/services/custom-message.service';
import { AppState } from '../app.reducer';
import { hideLoading, showLoading } from '../ui/ui.actions';
import {
  registerUser,
  registerUserFail,
  registerUserSuccess,
} from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private customMessageService: CustomMessageService,
    private store: Store<AppState>
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      tap(() => this.store.dispatch(showLoading())),
      mergeMap(action =>
        this.authService.register(action.user).pipe(
          map(success =>
            success ? registerUserSuccess() : registerUserFail()
          ),
          catchError(err => of(registerUserFail())),
          finalize(() => this.store.dispatch(hideLoading()))
        )
      )
    )
  );

  registerUserFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerUserFail),
        tap(_ => this.customMessageService.showMessage())
      ),
    { dispatch: false }
  );
}
