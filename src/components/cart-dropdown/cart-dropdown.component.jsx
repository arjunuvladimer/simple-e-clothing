import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../cutom-button/custom-button.component'

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            Cart Items
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
) 

export default CartDropDown