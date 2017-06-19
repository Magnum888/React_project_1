/**
 * Created by kovel on 12.06.17.
 */
import React, {Component} from 'react';
import './registrationForm.css';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('form is submitted. Email value is', this.state.email);
    }
    handleEmailChange(event){
        console.log('form is changed', event.target.value);
        this.setState({email: event.target.value})
    }
    render(){
        return (
           <form onSubmit={this.handleSubmit}>
               <input
                   type="text"
                   placeholder="e-mail"
                   value={this.state.email}
                   onChange={this.handleEmailChange}
                   className="RegistrationSubmit"
               />
               <button className="buttonForm">Save</button>
           </form>
        );
    }
}


export default RegistrationForm;
