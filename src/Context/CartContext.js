import { createContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItems = (itemsToAdd) => {
        if(!isInCart(itemsToAdd.id)) {
            setCart([...cart, itemsToAdd])
        }
    }

    const removeCart = () => {
        Swal.fire({
            title: 'Está seguro que desea vaciar su carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Si, Vaciar carrito!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Carrito Vacío!',
                'Su carrito ha sido vaciado!',
                'success',
                setCart([])
              )
            }
        })
    }

    const removeCartPostVenta = () => {
        setCart([])   
    }

    const isInCart = (id) => {
        return cart.some(items => items.id === id)
    }

    const removeItems = (id) => {
        const newCart = cart.filter(items => items.id !== id)
        Swal.fire({
            title: 'Está seguro que desea eliminar este producto de su carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Producto Eliminado!',
                'Su producto ha sido eliminado!',
                'success',
                setCart(newCart)
              )
            }
        })
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
        <CartContext.Provider value={{ cart, addItems, removeItems, isInCart, getQuantity, getTotal, setCart, removeCart, removeCartPostVenta }}>
            { children }
        </CartContext.Provider>
    )
}
