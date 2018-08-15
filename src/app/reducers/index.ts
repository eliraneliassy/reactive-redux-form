import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { AppActionTypes } from '../app.actions';


export interface AppState {
  form: FormGroup;

}

function appReducer(state: AppState, action): AppState {
  switch (action.type) {
    case AppActionTypes.UpdateForm:
      return {
        ...state,
        form: action.payload
      };
    default:
      return state;
  }
}


  export const reducers: ActionReducerMap<AppState> = {
    app: appReducer
  };


  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
