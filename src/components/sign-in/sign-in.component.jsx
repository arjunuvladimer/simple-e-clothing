import React from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../cutom-button/custom-button.component'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email:'', password:''})
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
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label='Email' name='email' type='email' value={email} required/>
                    <FormInput handleChange={this.handleChange} label='Password' name='password' type='password' value={password} required/>
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn