import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsyncAction } from "../redux/thunk";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import loadingIcon from "../assets/icons8-loading.gif";
import "../App.css";
import Error from "./error";

const Products=()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector(state => state.products.productList);
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        dispatch(fetchDataAsyncAction());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            navigate("/error");
        }
    }, [error, navigate]);

    return (
        <div className="container text-center shopping-cart-container" style={{marginTop:"100px", position:"relative", top:"0"}}>
            <h2>Products</h2>
            {loading && <img src={loadingIcon} alt="Loading" width="50px" height="50px" />}
            {error && <Error/>}
            <div className="row d-flex justify-content-center">
                {products.length > 0 && products.map((product, index) => {
                    return <Item key={index} item={product} />
                })}
            </div>
        </div>
    );
};
export default Products;