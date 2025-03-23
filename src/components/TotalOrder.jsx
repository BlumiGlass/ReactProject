import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { deleteAll, handleChange } from "../redux/CartSlice";
import { useDispatch, useSelector } from 'react-redux';
import Popup from './Popup';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TotalOrder = () => {
    const price = useSelector(state => state.cart.allPrice).toFixed(2);
    const dispatch = useDispatch();
    //const [click,setClick] = React.useState(false);
    
    const checkbox = useSelector(state => state.cart.isChecked);

    const handleAlert = () => {
        const result = window.confirm("Do you want to finish your order?");
        if (result) {
            dispatch(deleteAll());
        }
    };

    return (
        <div>
            <div>Total price: {price}$</div>
            <div>
                <Checkbox 
                    {...label}
                    checked={checkbox} 
                    onChange={() => { 
                        dispatch(handleChange()); 
                    }} 
                />
                Delivery to your home: 20$
            </div>
            <button onClick={handleAlert}>Order payment</button>
            {/* {click} */}
        </div>
    )
};
export default TotalOrder;