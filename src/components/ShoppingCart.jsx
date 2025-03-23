import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addAmount, deleteAll, deleteOne, subAmount } from "../redux/CartSlice";
import TotalOrder from "./TotalOrder";
import "../App.css"

const ShoppingCart = () => {
    const productsOnCart = useSelector(state => state.cart.cartList);
    const dispatch = useDispatch();

    return (
        <div className="container text-center shopping-cart-container" style={{marginTop:"100px"}}>
            <h2>Cart</h2>
            <TableContainer component={Paper} className="table-container">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right"><button onClick={() => { dispatch(deleteAll()); }}>Delete All</button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsOnCart.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right"><img src={row.thumbnail} alt="" style={{ width: "70px" }} /></TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.price}$</TableCell>
                                <TableCell align="right">
                                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                        <Fab size="small" className="btn btn-primary" style={{zIndex:"100"}} aria-label="add" onClick={() => dispatch(addAmount(row.id))}>
                                            <AddIcon />
                                        </Fab>
                                        {row.amount}
                                        <Fab size="small" className="btn btn-primary" style={{zIndex:"100"}} aria-label="sub" onClick={() => dispatch(subAmount(row.id))}>
                                            <RemoveIcon />
                                        </Fab>
                                    </Box>
                                </TableCell>
                                <TableCell align="right"><button onClick={() => dispatch(deleteOne(row.id))}>Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TotalOrder />
        </div>
    )
};
export default ShoppingCart;