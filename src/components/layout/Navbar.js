import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


class Navbar extends React.Component {

    render() {
        return (
            <nav className="nav-wrapper darken-3">
                <div className="container">
                    <Link to='/' className='brand-logo'>GoPlan</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        )
    }
}

export default Navbar;