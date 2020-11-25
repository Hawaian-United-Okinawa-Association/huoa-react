import { useDispatch } from 'react-redux';
import { getClubs, getPages, getHeros, getPages } from '../actions/index'

export const Init = () => {
    const dispatch = useDispatch();
    dispatch(getClubs());
    dispatch(getPages());
    dispatch(getHeros());
    dispatch(getPages());
};
