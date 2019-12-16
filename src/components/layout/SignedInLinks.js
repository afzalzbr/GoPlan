import React from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends React.Component {

    render() {
        return (
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AZ</NavLink></li>
            </ul>
        )
    }
}

export default SignedInLinks;