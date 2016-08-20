import React from 'react'

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles'

import {withRouter} from 'react-router-dom'

const MenuItem = ({item,history,match}) => {
    const {title,imageUrl,linkUrl, size} = item
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <ContentContainer>
                    <ContentTitle>{title.toUpperCase()}</ContentTitle>
                    <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
        )
}

export default withRouter(MenuItem)

