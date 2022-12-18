import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItems = (itemsToAdd) => {
        if(!isInCart(itemsToAdd.id)) {
            setCart([...cart, itemsToAdd])
        }
    }

    const isInCart = (id) => {
        return cart.some(items => items.id === id)
    }

    const removeItems = (id) => {
        const newCart = cart.filter(items => items.id !== id)
        setCart(newCart)
    }

    const getQuantity = () => {
        let cont = 0

        cart.forEach(item => {
           cont += item.quantity 
        })

        return cont
    } 

    const getTotal = () => {
        let cont = 0

        cart.forEach(item => {
            cont += item.quantity * item.price
        })

        return cont
    }

    return (
        <CartContext.Provider value={{ cart, addItems, removeItems, isInCart, getQuantity, getTotal }}>
            { children }
        </CartContext.Provider>
    )
}
