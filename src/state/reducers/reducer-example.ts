import { ActionType } from '../action-types';
import { Action } from '../actions';

interface thisReducerState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: thisReducerState = initialState,
  action: Action
): thisReducerState => {
  switch (action.type) {
    case ActionType.ACTION_TYPE:
      return { loading: true, error: null, data: [] };
    case ActionType.ACTION_TYPE_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.ACTION_TYPE_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
