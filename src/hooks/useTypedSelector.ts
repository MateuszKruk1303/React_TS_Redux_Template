import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

// This hook makes easier using useSelector in our components. Now we dont have to import RootState type form store. But from now
// we have to import useSelector from this file, not from react-redux.