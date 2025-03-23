import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsyncAction } from "../redux/thunk";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import loadingIcon from "../assets/icons8-loading.gif";
import "../App.css";

const Products=()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector(state => state.products.productList);
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        dispatch(fetchDataAsyncAction());
    }, []);

    useEffect(() => {
        // if(error){
        //     navigate("/error")
        // }
        
    }, [error]);
    
    return(
<div className="container text-center content-container" style={{ marginTop: "80px" }}>
    <h2>Products</h2>
    {loading && <img src={loadingIcon} alt="Loading" width="50px" height="50px" />}
    <div className="row d-flex justify-content-center" style={{ margin: "0" }}>
        {products.length > 0 && products.map((product, index) => {
            return <Item key={index} item={product} />
        })}
    </div>
</div>
    )
};
export default Products;