export enum AuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
}

export interface User {
  id: number;
  email: string;
}

export interface AuthState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

export type AuthAction =
  | { type: AuthActionTypes.LOGIN_REQUEST }
  | { type: AuthActionTypes.LOGIN_SUCCESS; payload: User }
  | { type: AuthActionTypes.LOGIN_FAILURE; payload: string }
  | { type: AuthActionTypes.REGISTER_REQUEST }
  | { type: AuthActionTypes.REGISTER_SUCCESS; payload: User }
  | { type: AuthActionTypes.REGISTER_FAILURE; payload: string };
