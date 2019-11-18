import React from "react";
import moment from 'moment'

const ScoreSummary = ({highScore}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{highScore.title}</span>
                <p>Posted by {highScore.authorFirstName} {highScore.authorLastName} <span className='right btn-floating btn-large waves-effect waves-light red'>{highScore.highScore} P</span></p>
                <p className="grey-text">{moment(highScore.createdAt.toDate()).calendar()} </p>
            </div>
        </div>
    )
};

export default ScoreSummary;