export const createScore = (score) => {
    return (dispatch, getState, {getFirestore}) => {
        // make async call to database

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        const highScores = getState().firestore.data.projects;
        let oldHightScore = null;
        let doc = '';
        for(let highScoreId in highScores) {

            if(highScores[highScoreId].authorId === uid){
                doc = highScoreId;
                oldHightScore = highScores[highScoreId]
            }
        }
        if(oldHightScore){
            //Upadate
            firestore.update({ collection: 'projects', doc: doc }, {
                ...score,
                createdAt: new Date()
            }).then(() => {
                dispatch({ type: 'CREATE_SCORE_SUCCESS' });
            }).catch(err => {
                dispatch({ type: 'CREATE_SCORE_ERROR' }, err);
            });
        }else{
            firestore.collection('projects').add({
                ...score,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: uid,
                createdAt: new Date()
            }).then(() => {
                dispatch({ type: 'CREATE_SCORE_SUCCESS' });
            }).catch(err => {
                dispatch({ type: 'CREATE_SCORE_ERROR' }, err);
            });
        }
    }
};