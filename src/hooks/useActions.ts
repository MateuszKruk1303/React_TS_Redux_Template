import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};


// it makes our code more convenient, look below:

//-----------------------------------------------------------------------------Before-------------------------
// import { useDispatch } from 'react-redux'
// [...]
// const dispatch = useDispatch()
// (example) const onSubmit = () => dispatch(actionCreators.actionCreatorMethod(inputData))
//-----------------------------------------------------------------------------After--------------------------
// import { useActions } from '../hooks'
// [...]
// const { actionCreatorMethod } = useDispatch()
// (example) const onSubmit = () => actionCreatorMethod(inputData)