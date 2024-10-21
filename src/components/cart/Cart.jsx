import PropTypes from "prop-types";
import './Cart.css'
const Cart = ({cart, handleRemoveFromCartBtn}) => {
    // console.log(cart)
    return (
        <div className="cart-section">
            <h3>cart : {cart.length}</h3>
            <div className="cart-container">
                {cart.map(bottle=> <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=> handleRemoveFromCartBtn(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart:PropTypes.array.isRequired,
    handleRemoveFromCartBtn:PropTypes.func.isRequired
}
export default Cart;