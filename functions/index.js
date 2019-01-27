const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config.firebase);

const createNotification = notification => {
    return admin.firestore().collection('notifications').add(notification);
};

var alreadyRunning = [];

function isAlreadyRunning(eventId) {
    return alreadyRunning.indexOf(eventId) >= 0;
}

function markAsRunning(eventId) {
    alreadyRunning.push(eventId);
}

exports.projectCreated = functions.firestore.document('todos/{todosId}')
        .onCreate((doc, event) => {
        let eventId = event.eventId;

        const todo = doc.data();
        const notification = {
            content: 'added a new todo',
            user: todo.author,
            time: admin.firestore.FieldValue.serverTimestamp()
        };

    if (isAlreadyRunning(eventId)) {
        return false;
    }

    markAsRunning(eventId);
    return createNotification(notification);
});

exports.userSignedUp = functions.auth.user().onCreate((user, event) => {
    let eventId = event.eventId;
    const notification = {
        content: 'just signed up',
        user: user.email,
        time: admin.firestore.FieldValue.serverTimestamp()
    };

    if (isAlreadyRunning(eventId)) {
        return false;
    }

    markAsRunning(eventId);
    return createNotification(notification);
});