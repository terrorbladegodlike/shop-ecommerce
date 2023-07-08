import React, { useContext } from 'react'

// IMport Link
import { Link } from 'react-router-dom'

// Import Icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

// Import cart context
import { CartContext } from './../contexts/CartContext';

const CartItem = ({ item }) => {

  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

  // Destructure item
  const { id, title, image, price, amount } = item

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* Image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt="" />
        </Link>
        <div className='w-full flex flex-col'>
          {/* Title & Remove icon */}
          <div className='flex justify-between mb-2'>
            {/* Title */}
            <Link className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline' to={`/product/${id}`}>
              {title}
            </Link>
            {/* Remove Icon */}
            <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer h-full'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* QTY */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* Minus Icon */}
              <div onClick={() => decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer'>
                <IoMdRemove />
              </div>
              {/* Amount */}
              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>
              {/* Plus Icon */}
              <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer h-full'>
                <IoMdAdd />
              </div>
            </div>
            {/* Item Price */}
            <div className='flex-1 flex items-center justify-around'>
              $ {price}
            </div>
            {/* Final Price */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              {`$ ${parseFloat(item.price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem