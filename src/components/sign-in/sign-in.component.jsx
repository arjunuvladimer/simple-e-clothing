import React from 'react'

import {
    SignInContainer,
    TitleContainer,
    ButtonContainer
} from './sign-in.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.util.js'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            } catch (error) {
            console.log(error);
        }
    }
    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]:value
        })
    }
    render(){
        const {email, password} = this.state
        console.log(this.state)
        return(
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='Email' name='email' type='email' value={email} required/>
                    <FormInput handleChange={this.handleChange} label='Password' name='password' type='password' value={password} required/>
                    <ButtonContainer>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn='true'>Sign in With Google</CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn