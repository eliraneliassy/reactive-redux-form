import { Action } from '@ngrx/store';
import { FormGroup } from '@angular/forms';

export enum AppActionTypes {
  UpdateForm = '[App] Update Form'
}

export class UpdateForm implements Action {
  readonly type = AppActionTypes.UpdateForm;
  constructor(public payload: FormGroup) { }
}

export type AppActions = UpdateForm;
