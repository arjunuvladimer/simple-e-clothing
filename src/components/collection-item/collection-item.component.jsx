import React from 'react'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';
import {connect} from 'react-redux'
import {addItemToCart} from '../../redux/cart/cart.action'

const CollectionItem = ({item,addItem}) => {
    const {imageUrl,name,price} = item
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted='true' onClick = {() => addItem(item)}>Add To Cart</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem)