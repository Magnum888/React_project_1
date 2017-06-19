import React, {Component} from 'react';
import Dropdown from './Dropdown.js';
// import Header from './Header';
import RegistrationForm from './RegistrationForm';
import Refs from './Refs';
import './App.css';


const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];

class App extends Component {
    render(){
        return (
            <div className="container">
                <Dropdown/>
                {/*<Header items = {menu} />*/}
                <RegistrationForm/>
                <Refs/>
            </div>
        );
    }
}


export default App;
