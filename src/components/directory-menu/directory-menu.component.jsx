import React from 'react'

import './directory-menu.styles.scss'
import { MenuItem } from '../menu-item/menu-item.component'
import {createStructuredSelector} from 'reselect'
import {selectSections} from '../../redux/directory/directory.selector'
import {connect} from 'react-redux'

const DirectoryMenu = ({sections}) => (
            <div className='directory-menu'>
                    {sections.map(item => (
                        <MenuItem key={item.id} item = {item} />
                    ))}
            </div>
)
const mapStateToProps = createStructuredSelector({
  sections: selectSections
})
export default connect(mapStateToProps,null)(DirectoryMenu)