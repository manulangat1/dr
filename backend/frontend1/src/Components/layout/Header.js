import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'

class Header extends React.Component{
    static propTypes = {
        auth:PropTypes.object.isRequired,
        logout:PropTypes.func.isRequired
    }
    render(){
        const {isAuthenticated,user} = this.props.auth
        const authLinks = (
            <ul>
                   <li>
                           <Link to="/">Home</Link>
                       </li>
                       <span className="nvbar-text">
                           {user ? `Welcome ${user.username}` : ""}
                       </span>
                       <li>
                           <button onClick={this.props.logout}>Logout</button>
                       </li>
                   </ul>
        )
        const guestLinks = (
            <ul>
                       <li>
                           <Link to="/register">Register</Link>
                       </li>
                       <li>
                           <Link to="/login">Login</Link>
                       </li>
                   </ul>
        )
        return(
           <div>
               <nav>
                   {isAuthenticated ? authLinks : guestLinks}
               </nav>
           </div>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps,{logout})(Header);