import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, of, repeat, take, tap } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import {
  registerUser,
  registerUserFail,
  registerUserSuccess,
} from './auth.actions';
import { CustomMessageService } from 'src/app/shared/services/custom-message.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private customMessageService: CustomMessageService
  ) {}

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      mergeMap(action =>
        this.authService.register(action.user).pipe(
          map(success =>
            success ? registerUserSuccess() : registerUserFail()
          ),
          catchError(err => of(registerUserFail()))
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
