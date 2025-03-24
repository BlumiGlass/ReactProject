import errorIcon from '../assets/icons8-error.gif';
import "../App.css"
const Error = ()=>{
    return(
        <div className='content-container shopping-cart-container'>
            <p>Error loading products. Please try again later.</p>
            <img src={errorIcon} alt="Loading" width="100px" height="100px" />
        </div>
    )
};
export default Error;