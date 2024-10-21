import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addToLS } from "../../utilities/localStorage";
import { getLS } from "../../utilities/localStorage";
import { removeFromLs } from "../../utilities/localStorage";
import Cart from "../cart/Cart";



const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
            .catch(error => console.log(error))
    }, [])
    // from local storage
    useEffect(() => {
        // console.log('called the use effect ', bottles.length)
        if (bottles.length) {
            const storedCart = getLS();
            // console.log(storedCart)
            const savedCart = []
            for (const id of storedCart) {
                // console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            // console.log(savedCart)
            setCart(savedCart)
        }
    }, [bottles])
    const handleAddToCardBtn = (bottle) => {
        const updateCard = [...cart, bottle]
        setCart(updateCard)
        addToLS(bottle.id)
    }
    const handleRemoveFromCartBtn = (id) =>{
        // from visual
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        // from local storage
        removeFromLs(id)
    }
    return (
        <div>
            <h3>bottles: {bottles.length}</h3>
            <Cart cart={cart} handleRemoveFromCartBtn={handleRemoveFromCartBtn}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                         key={bottle.id} 
                         bottle={bottle} 
                         handleAddToCardBtn={handleAddToCardBtn}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;