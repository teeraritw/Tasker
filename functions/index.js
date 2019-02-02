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
        let time = admin.firestore.FieldValue.serverTimestamp();

        const todo = doc.data();
        const notification = {
            content: 'added a new todo',
            name: todo.author,
            time: time
        };

    if (isAlreadyRunning(eventId)) {
        return false;
    }

    markAsRunning(eventId);
    return createNotification(notification);
});

exports.todoDeleted = functions.firestore.document('todos/{todosId}').onDelete((doc, event) => {
    let eventId = event.eventId;
    let time = admin.firestore.FieldValue.serverTimestamp();

    // If the event is already running (avoid being triggered twice)
    if (isAlreadyRunning(eventId)) { return false; }

    const todo = doc.data();
    const notification = {
        content: 'has been deleted',
        name: todo.title,
        time: time
    };

    markAsRunning(eventId);
    return createNotification(notification);
});

exports.userSignedUp = functions.auth.user().onCreate((user, event) => {
    let eventId = event.eventId;
    let time = admin.firestore.FieldValue.serverTimestamp();

    const notification = {
        content: 'just signed up',
        name: user.email,
        time: time
    };

    if (isAlreadyRunning(eventId)) {
        return false;
    }

    markAsRunning(eventId);
    return createNotification(notification);
});