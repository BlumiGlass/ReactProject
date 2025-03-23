import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const Item = ({ item }) => {

const dispatch = useDispatch();

    return (
        <div className="card" style={{ width: "18rem", margin: "15px" }}>
            <img src={item.thumbnail} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">price: {item.price}</p>
                <button className="btn btn-primary" onClick={() => dispatch(addToCart(item))}>Add to cart</button>
            </div>
        </div>
    )
};
export default Item;