import React from 'react'
import {CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, ButtonContainer, TestWarningContainer }from './checkout.styles'

import {connect} from 'react-redux'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems,total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} item={cartItem} />)
        }
        <TotalContainer>
            TOTAL: ${total}
        </TotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card for the payments*
            <br />
            4242 4242 4242 4242 - Exp: 11/20 - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps,null)(CheckoutPage)