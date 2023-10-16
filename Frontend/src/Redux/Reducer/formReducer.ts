// src/redux/reducers/formReducer.ts
import { FormAction, FormState, FormActionTypes } from '../actionType/formActionType';

const initialState: FormState = {
  submissions: [],
  error: null,
};

export const formReducer = (state = initialState, action: FormAction): FormState => {
  switch (action.type) {
    case FormActionTypes.SUBMIT_FORM_SUCCESS:
      return { ...state, error: null };
    case FormActionTypes.SUBMIT_FORM_FAILURE:
      return { ...state, error: action.payload };
    case FormActionTypes.FETCH_SUBMISSIONS_SUCCESS:
      return { ...state, submissions: action.payload, error: null };
    case FormActionTypes.FETCH_SUBMISSIONS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
