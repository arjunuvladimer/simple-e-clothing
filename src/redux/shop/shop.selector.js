import {createSelector} from 'reselect'
import memoize from 'lodash.memoize'


const selectShop = state => state.shop 

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectShopData],
    shop => shop ? shop[collectionUrlParam]: null
))

export const selectCollectionForPreview = createSelector(
    [selectShopData],
    collections => collections? Object.keys(collections).map(key => collections[key]): []
)