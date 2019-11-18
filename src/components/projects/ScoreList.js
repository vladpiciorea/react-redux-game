import React from "react";
import ScoreSummary from "./ScoreSummary";

const ScoreList = ({highScores}) => {
    return(
        <div className='project-list section'>
            {highScores && highScores.map(itemScore => {
                return (
                    <div key={itemScore.id}>
                        <ScoreSummary highScore={itemScore} key={itemScore.id}/>
                    </div>
                )
            })}
        </div>
    )
};

export default ScoreList;