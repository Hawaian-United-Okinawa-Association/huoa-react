import { useDispatch } from 'react-redux';
import { getClubs, getPages, getEvents, getSettings } from '../actions/index'

export const Init = () => {
    const dispatch = useDispatch();

    dispatch(getClubs());
    dispatch(getPages());
    dispatch(getEvents());
    dispatch(getSettings());
};
