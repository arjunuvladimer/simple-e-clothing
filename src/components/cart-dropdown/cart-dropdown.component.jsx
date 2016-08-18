import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../cutom-button/custom-button.component'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import CartItem from '../cart-item/cart-item.component'

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem} />
            )}
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
) 

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps,null)(CartDropDown)