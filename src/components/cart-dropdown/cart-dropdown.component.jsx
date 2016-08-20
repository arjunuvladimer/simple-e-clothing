import React from 'react'
import {CartDropdownContainer, CartItemsContainer} from './cart-dropdown.styles'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import CartItem from '../cart-item/cart-item.component'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {withRouter} from 'react-router-dom'

const CartDropDown = ({cartItems,history,dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.map(cartItem => 
                <CartItem key={cartItem.id} item={cartItem} />
            )}
        </CartItemsContainer>
        <CustomButton onClick={
        () =>{ 
                history.push('/checkout')
                dispatch(toggleCartHidden())
        }
        }>Go To Checkout</CustomButton>
    </CartDropdownContainer>
) 

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps,null)(CartDropDown))