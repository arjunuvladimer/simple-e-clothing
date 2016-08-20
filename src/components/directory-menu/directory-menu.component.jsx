import React from 'react'

import {DirectoryContainer} from './directory-menu.styles'
import  MenuItem  from '../menu-item/menu-item.component'
import {createStructuredSelector} from 'reselect'
import {selectSections} from '../../redux/directory/directory.selector'
import {connect} from 'react-redux'

const DirectoryMenu = ({sections}) => (
            <DirectoryContainer>
                    {sections.map(item => (
                        <MenuItem key={item.id} item = {item} />
                    ))}
            </DirectoryContainer>
)
const mapStateToProps = createStructuredSelector({
  sections: selectSections
})
export default connect(mapStateToProps,null)(DirectoryMenu)