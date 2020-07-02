import React from 'react'
import './collectionpage.styles.scss'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect'

const CollectionPage = ({match}) => (
    <div className='collection-page'>
        
    </div>
)
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionID)(state)
})
export default connect()(CollectionPage)