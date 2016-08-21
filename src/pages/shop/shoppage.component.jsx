import React from 'react'
import './shoppage.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collectionpage.component'
import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.util'

import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.action'

class ShopPage extends React.Component{

    unsubscribeFromSnapshot = null

    componentDidMount(){
        const {collections} = this.props
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            collections(collectionsMap)
        })
    }
    render(){
        const {match} = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
            </div>  
        )
    }
}

const mapDispatchToProps = dispatch => ({
    collections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage) 