import { ActionType } from '../action-types';

interface ACTION_TYPE {
  type: ActionType.ACTION_TYPE;
}

interface YourSuccessAction {
  type: ActionType.ACTION_TYPE_SUCCESS;
  payload: string[];
}

interface YourErrorAction {
  type: ActionType.ACTION_TYPE_ERROR;
  payload: string;
}

export type Action =
  | ACTION_TYPE
  | YourSuccessAction
  | YourErrorAction;
