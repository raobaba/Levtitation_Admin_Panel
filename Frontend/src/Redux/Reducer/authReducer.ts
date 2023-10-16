import { AuthAction, AuthState, AuthActionTypes } from '../ActionType/authActionType';

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
    case AuthActionTypes.REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.REGISTER_SUCCESS:
      return { ...state, user: action.payload, error: null, loading: false };
    case AuthActionTypes.LOGIN_FAILURE:
    case AuthActionTypes.REGISTER_FAILURE:
      return { ...state, user: null, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default authReducer;
