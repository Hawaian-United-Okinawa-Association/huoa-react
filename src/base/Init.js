import { useDispatch } from 'react-redux';
import { getClubs, getPages } from '../actions/index'

export const Init = () => {
    const dispatch = useDispatch();
    dispatch(getClubs());
    dispatch(getPages());
};
