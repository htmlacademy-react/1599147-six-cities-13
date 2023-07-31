import {useDispatch} from 'react-redux';
import { AppDispatchType } from '../types/store-types';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
