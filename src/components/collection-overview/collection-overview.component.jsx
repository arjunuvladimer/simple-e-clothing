import React from 'react'

import {CollectionOverViewContainer} from './collection-overview.styles'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionForPreview} from '../../redux/shop/shop.selector'
import {CollectionPreview} from '../collection-preview/collection-preview.component'

const CollectionOverview = ({collections}) => {
    console.log(collections)
    return (
        <CollectionOverViewContainer>
            {
                collections.map(({id,...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionOverViewContainer>
        
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps,null)(CollectionOverview)