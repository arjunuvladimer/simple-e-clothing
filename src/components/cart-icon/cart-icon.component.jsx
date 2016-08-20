import React from 'react'
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import {itemCount} from '../../redux/cart/cart.selectors'
import {CartIconContainer,ItemCountContainer, ShoppingIcon} from './cart-icon.styles'

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <CartIconContainer>
        <ShoppingIcon onClick={toggleCartHidden} />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapsStateToProps = createStructuredSelector({
    itemCount: itemCount
})

export default connect(mapsStateToProps,mapDispatchToProps)(CartIcon)