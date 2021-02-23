import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const yourActionCreator = (inputData: string) => {
  return async (dispatch: Dispatch<Action>) => {
    console.log(inputData)
    dispatch({
      type: ActionType.ACTION_TYPE,
    });
    try {
      const { data } = await axios.get('http://YOUR_API_ADDRESS/resource.com');
      dispatch({
        type: ActionType.ACTION_TYPE_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.ACTION_TYPE_ERROR,
        payload: err.message,
      });
    }
  };
};
