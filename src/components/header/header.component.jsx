import React from 'react'
import {ReactComponent as Logo} from '../../assets/crwns.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer } from './header.styles'

const Header = ({currentUser,hideCart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
           
            <OptionContainer className='option' to='/shop'>SHOP</OptionContainer>
            <OptionContainer className='option' to='/contact'>CONTACT</OptionContainer>
            {
                currentUser?
                <OptionContainer as='div' className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionContainer>
                :
                <OptionContainer className='option' to='/signin'>SIGN IN</OptionContainer>
            }
            <CartIcon />
           
        </OptionsContainer>
        { hideCart ? null : <CartDropDown /> }
    </HeaderContainer>
) 

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hideCart: selectCartHidden
})

export default connect(mapStateToProps)(Header)

