import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {serviceFilter} from '../redux/actionCreators';


function ServiceFilter() {
    const item = useSelector(state => state.serviceFilter);
    console.log(item);
    const dispatch = useDispatch();
    
    const ChangeFilter = evt => { const {value} = evt.target; 
                                  console.log(value);
                                  dispatch(serviceFilter(value));    
                                }
  
    return (
            <form className='fiiler'>
                <label>Фильтер: </label> <input name='filter' onChange={ChangeFilter} value={item.filter} />
                <p>{item.filter}</p>
            </form>
   
    );
}

export default ServiceFilter;