import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import {
  registerUser,
  registerUserFail,
  registerUserSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

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
}
