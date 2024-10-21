import PropTypes, { object } from 'prop-types';
import './Bottle.css'
const Bottle = ({ bottle, handleAddToCardBtn ,handleRemoveFromCartBtn}) => {
    const { name,price,img } = bottle
    return (
        <div className="bottle-card">
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <p>Price : {price}</p>
            <button onClick={()=>handleAddToCardBtn(bottle)}>Add To Cart</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handleAddToCardBtn : PropTypes.func.isRequired
}
export default Bottle;