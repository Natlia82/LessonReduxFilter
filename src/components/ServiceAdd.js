import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, removeService, changeServiceCansel, updateService} from '../redux/actionCreators';


function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
  //  console.log(item)
    const dispatch = useDispatch();
    const handleChange = evt => { const {name, value} = evt.target; 
                                  dispatch(changeServiceField(name, value));    
                                }
    const handleSubmit = evt => { evt.preventDefault(); 
                                  if (item.id == 0) {
                                    dispatch(addService(item.name, item.price));
                                    dispatch(changeServiceCansel());   
                                  } else {
                                    dispatch(updateService(item.id, item.name, item.price));
                                    dispatch(changeServiceCansel());
                                  }
                                  
                                }
    const clickCansel = evt => {
                                  dispatch(changeServiceCansel()); 
                               }                                
    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price}/>
            <button type='submit'>Save</button>
            {item.id==0?"":<button type='button' onClick={clickCansel}>Cansel</button>}
        </form>
    );
}

export default ServiceAdd;
