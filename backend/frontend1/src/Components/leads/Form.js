import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addLead} from '../../actions/leads'

class Form extends React.Component{
    state = {
        name:'',
        email:'',
        message:''
    }
    static propTypes = {
        addLead:PropTypes.func.isRequired
    }
    onChange = e =>this.setState({[e.target.name]:e.target.value})
    onSubmit = e =>{
        e.preventDefault();
        const {name,email,message} = this.state;
        const lead = {name,email,message}
        this.props.addLead(lead)
        this.setState({
            name:'',
            email:'',
            message:''
        })
        console.log("submit")
    }
    render(){
        const {name,email,message} = this.state
        return(
            <div>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={this.onChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={this.onChange} />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" name="message" value={message} onChange={this.onChange} />
                </div>
                <input type="submit" value="submit" />
            </form>
            </div>
        )
    }
}
export default connect(null,{addLead})(Form);