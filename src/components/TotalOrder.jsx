import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { deleteAll, handleChange } from "../redux/CartSlice";
import { useDispatch, useSelector } from 'react-redux';
import AlertDialog from './Popup';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TotalOrder = () => {
    const price = (useSelector(state => state.cart.allPrice) || 0).toFixed(2);
    const dispatch = useDispatch();
    //const [click,setClick] = React.useState(false);
    
    const checkbox = useSelector(state => state.cart.isChecked);

    const [open,setOpen] = React.useState(false);

    const handleClose = (value) => { 
        setOpen(false);
        if(value) {
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
            <button onClick={() => setOpen(true)}>Order payment</button>
            {open && <AlertDialog open={open} handleClose={handleClose} />}
        </div>
    )
};
export default TotalOrder;