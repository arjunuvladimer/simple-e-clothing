import React from 'react'
import {CheckoutItemContainer,ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles'
import {connect} from 'react-redux'
import {addItemToCart,removeItem,clearItemFromCart} from '../../redux/cart/cart.action'

const CheckoutItem = ({item, addItemToCart, removeItem, clearItemFromCart}) => {
    const {name,imageUrl,quantity,price} = item
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(item) }>&#10094;</div>
                    <span>{quantity}</span>
                 <div onClick= {() => addItemToCart(item)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItemFromCart(item)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    ) 
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))

})
export default connect(null,mapDispatchToProps)(CheckoutItem)