import React from 'react';
import {connect} from 'react-redux';

const Footer = (props) => {
    const {auth } = props;

    return auth.uid  ?
        <footer className="page-footer ">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Free Games</h5>
                        <p className="grey-text text-lighten-4">Play the most beautiful game :).</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright deep-purple darken-3">
                <div className="container">
                    © 2014 Copyright Piciorea Vladut
                </div>
            </div>
        </footer>
        : null;

};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
};

export default connect(mapStateToProps)(Footer);