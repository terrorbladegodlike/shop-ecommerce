import React, { createContext, useState, useEffect } from 'react'

// Create Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {

  // Cart State
  const [cart, setCart] = useState([])

  // Item Amount State
  const [itemAmount, setItemAmount] = useState(0)

  // Total Price State
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  })

  // Update Item Amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  // Add to Cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    const cartItem = cart.find(item => {
      return (
        item.id === id
      )
    })
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return (
            { ...item, amount: cartItem.amount + 1 }
          )
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  // Remove from Cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  // Clear Cart
  const clearCart = () => {
    setCart([])
  }

  // Increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  // Increase amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item;
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider