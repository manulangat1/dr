import React from 'react';
import Form from './Form'
import Leads from './Leads'

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Form />
                <Leads />
            </div>
        )
    }
}
export default Dashboard;