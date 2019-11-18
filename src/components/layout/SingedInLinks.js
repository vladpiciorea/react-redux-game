import React from 'react';
import { NavLink } from 'react-router-dom'
import {signOut} from "../../store/actions/authActions";
import connect from "react-redux/es/connect/connect";

const SingedInLinks = (props) => {
    return (
        <ul id="nav-mobile" className="right">
            <li>
                <span className='waves-effect waves-light black-text btn lime accent-2 lighten-1' onClick={props.signOut}>Log Out</span>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'> {props.profile.initials}</NavLink>
            </li>
        </ul>
    )
};
// const mapStateToProps = (state) => {
//     return {
//         authError: state.auth.authError
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(null, mapDispatchToProps)(SingedInLinks);
