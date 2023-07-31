import {TypedUseSelectorHook,useSelector} from 'react-redux';
import { StateType } from '../types/store-types';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
