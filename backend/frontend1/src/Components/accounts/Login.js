import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

class Login extends React.Component{
    state = {
        username:'',
        password:''
    }
    static propTypes = {
        login:PropTypes.func.isRequired,
        isAuthenticated:PropTypes.bool
    }
    onSubmit = e =>{
        e.preventDefault()
        this.props.login(this.state.username,this.state.password)
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    render(){
        if(this.props.isAuthenticated == true){
            return <Redirect to="/" />;
        }
        const {username,password} = this.state
        return(
            <div>
                <h5>Login</h5>
                <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={this.onChange} />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" value={password} onChange={this.onChange} />
                </div>
                <input type="submit" value="Sign in" />
                <div>
                    <p>Already ase register <Link to="/register">Register</Link> </p>
                </div>
            </form>
            </div>
        )
    }

}
const mapStateToProps = state => ({
    isAuthenticated:state.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login)