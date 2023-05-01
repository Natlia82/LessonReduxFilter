import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeService, removeEdit} from '../redux/actionCreators';

function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const filter = useSelector(state => state.serviceFilter);
   // console.log(filter);
    const newItems = items.filter(item => item.name.indexOf(filter.filter) !== -1);
   // console.log(newItems);
    const dispatch = useDispatch();
    const handleRemove = id => {dispatch(removeService(id)) };
    const handleEdit = (id, nazv, price) => {dispatch(removeEdit(id, nazv, price)) };

    return (
        <ul>
            {newItems.map(o => (
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
