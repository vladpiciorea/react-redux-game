import React, {Component} from 'react';
import Notifications from "./Notifications";
import ScoreList from "../projects/ScoreList";
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Game from "../projects/dodgy/containers/Game";

class Dashboard extends Component{
    render() {
        const { highScores, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>;

        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6">
                        <Game boardSize={11} playerSize={25} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                        <ScoreList highScores={highScores}/>

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        highScores: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects',orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)