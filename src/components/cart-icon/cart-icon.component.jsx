import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import {itemCount} from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapsStateToProps = createStructuredSelector({
    itemCount: itemCount
})

export default connect(mapsStateToProps,mapDispatchToProps)(CartIcon)