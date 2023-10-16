// src/redux/actionType/formActionType.ts
export enum FormActionTypes {
    SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS',
    SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE',
    FETCH_SUBMISSIONS_SUCCESS = 'FETCH_SUBMISSIONS_SUCCESS',
    FETCH_SUBMISSIONS_FAILURE = 'FETCH_SUBMISSIONS_FAILURE',
  }
  
  export interface FormState {
    submissions: Submission[];
    error: string | null;
  }
  
  export interface Submission {
    id: number;
    name: string;
    email: string;
    // Add more submission fields as needed
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type FormAction = { type: FormActionTypes; payload: any };
  