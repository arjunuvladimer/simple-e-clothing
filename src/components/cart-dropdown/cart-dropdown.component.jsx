import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../cutom-button/custom-button.component'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import CartItem from '../cart-item/cart-item.component'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {withRouter} from 'react-router-dom'

const CartDropDown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem} />
            )}
        </div>
        <CustomButton onClick={
        () =>{ 
                history.push('/checkout')
                dispatch(toggleCartHidden())
        }
        }>Go To Checkout</CustomButton>
    </div>
) 

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps,null)(CartDropDown))