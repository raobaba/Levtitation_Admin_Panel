import { Dispatch } from 'redux';
import { AuthActionTypes, AuthAction } from '../ActionType/authActionType';
import { authenticate, registerUser } from '../../API/authApi'; // Implement these functions

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.LOGIN_REQUEST });
    try {
      const response = await authenticate(email, password);
      dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      const err = error as Error;
      dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: err.message });
    }
  };
};

export const register = (name:string,email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionTypes.REGISTER_REQUEST });
    try {
      const response = await registerUser(name, email, password);
      dispatch({ type: AuthActionTypes.REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
      const err = error as Error;
      dispatch({ type: AuthActionTypes.REGISTER_FAILURE, payload: err.message });
    }
  };
};
