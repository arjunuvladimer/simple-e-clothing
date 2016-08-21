import React from 'react'
import './shoppage.styles.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collectionpage.component'
import {convertCollectionSnapshotToMap, firestore} from '../../firebase/firebase.util'

import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.action'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component{

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount(){
        const {collections} = this.props
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            collections(collectionsMap)
            this.setState({loading: false})
        })
    }
    render(){
        
        const {match} = this.props
        const {loading} = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render = 
                    {
                        props =>
                     <CollectionOverviewWithSpinner isLoading = {loading} {...props} />
                    }
                />
                <Route path={`${match.path}/:collectionID`} render = 
                    { 
                        props =>
                    <CollectionPageWithSpinner isLoading = {loading} {...props} />
                    }
                />
            </div>  
        )
    }
}

const mapDispatchToProps = dispatch => ({
    collections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage) 