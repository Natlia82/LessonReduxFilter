import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeService, removeEdit} from '../redux/actionCreators';

function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    const handleRemove = id => {dispatch(removeService(id)) };
    const handleEdit = (id, nazv, price) => {dispatch(removeEdit(id, nazv, price)) };

    return (
        <ul>
            {items.map(o => (
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() =>handleEdit(o.id, o.name, o.price)}>редактировать</button>
                    <button onClick={() =>handleRemove(o.id)}>✕</button>
                </li>
            ))}
        </ul>
        )
}
export default ServiceList;
