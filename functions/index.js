const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotifications = notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => {
            console.log('Notification addes', doc)
        })
}

exports.projectCreated = functions.firestore
    .document('projects/{project}')
    .onCreate(doc  => {
        const project =doc.data();
        const notifications = {
            content: 'Added a new score',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };
        return createNotifications(notifications)
});
//Todo
// exports.projectUpdate= functions.firestore
//     .document('projects/{project}/{highScore}')
//     .onUpdate((change, context)  => {
//         const project = change.after.val();
//         console.log(project);
//         console.log(change)
//         const notifications = {
//             content: 'Update a new score',
//             user: `${project}`,
//             time: admin.firestore.FieldValue.serverTimestamp()
//         };
//         return createNotifications(notifications)
// });

exports.userJoined = functions.auth
    .user()
    .onCreate(user  => {
        return admin.firestore().collection('users')
            .doc(user.uid)
            .get()
            .then(doc => {
                const newUser =doc.data();
                const notifications = {
                    content: 'User Joined',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                };
                return createNotifications(notifications)
            })
    });
