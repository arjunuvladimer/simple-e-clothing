import React from 'react'

import './sign-in.styles.scss'

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

                <form>
                    <input onChange={this.handleChange} name='email' type='email' value={email} required/>
                    <label>Email</label>
                    <input onChange={this.handleChange} name='password' type='password' value={password} required/>
                    <label>Password</label>
                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn