import React from 'react';
import SingedInLinks from "./SingedInLinks";

import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    const {auth, profile } = props;

    const links = auth.uid  ? <SingedInLinks profile={profile} /> : null;
    return auth.uid  ?
        <div>
            <nav className="nav-wrapper deep-purple darken-3">
                <Link to='/'>   <img className='logoAuth' alt='logo' src='./img/westcasino-logo-143x60-01.svg'/></Link>
                {auth.isLoaded && links ? <SingedInLinks profile={profile} />  : null}
            </nav>
        </div>
        : null;

};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

export default connect(mapStateToProps)(Navbar);