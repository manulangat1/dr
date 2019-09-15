import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../actions/auth'
import {createMessage} from '../../actions/messages'
class Register extends React.Component{
    state = {
        username:'',
        email:'',
        password:'',
        password2:''
    
    }
    static propTypes = {
        register:PropTypes.func.isRequired,
        isAuthenticated:PropTypes.bool
    }
    onSubmit = e =>{
        e.preventDefault()
        const {username,email,password,password2} = this.state
        if (password !== password2){
            this.props.createMessage({passwordNotMatch:"Passwords not match"})
        } else {
            const newUser ={
                username,
                password,
                email
            }
            this.props.register(newUser)
        }
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    render(){
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const {username,email,password,password2} = this.state
        return(
            <div>
                <h5>Register</h5>
                <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={this.onChange} />
                </div>
                <div>
                    <label>email</label>
                    <input type="email" name="email" value={email} onChange={this.onChange} />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" value={password} onChange={this.onChange} />
                </div>
                <div>
                    <label>password2</label>
                    <input type="password" name="password2" value={password2} onChange={this.onChange} />
                </div>
                <input type="submit" value="Sign Up" />
                <div>
                    <p>Already registered please login <Link to="/login">Login</Link> </p>
                </div>
            </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated:state.isAuthenticated
})
export default connect(mapStateToProps,{register,createMessage})(Register)