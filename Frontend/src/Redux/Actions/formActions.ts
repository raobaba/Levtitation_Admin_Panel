// src/redux/actions/formActions.ts
import { Dispatch } from 'redux';
import { submitForm, getSubmissions } from '../../api/formApi';
import { FormActionTypes, FormAction } from '../actionType/formActionType';

export const submitUserForm = (formData: any) => {
  return async (dispatch: Dispatch<FormAction>) => {
    try {
      const response = await submitForm(formData); // You can implement this function in formApi.ts
      dispatch({ type: FormActionTypes.SUBMIT_FORM_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FormActionTypes.SUBMIT_FORM_FAILURE, payload: error.message });
    }
  };
};

export const fetchUserSubmissions = () => {
  return async (dispatch: Dispatch<FormAction>) => {
    try {
      const response = await getSubmissions(); // You can implement this function in formApi.ts
      dispatch({ type: FormActionTypes.FETCH_SUBMISSIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FormActionTypes.FETCH_SUBMISSIONS_FAILURE, payload: error.message });
    }
  };
};
