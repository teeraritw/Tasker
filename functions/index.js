const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config.firebase);

const createNotification = notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => {
            return console.log('notification added', doc);
        });
};

exports.projectCreated = functions.firestore
    .document('todos/{todosId}')
        .onCreate(doc => {
        const todo = doc.data();
        const notification = {
            content: 'added a new todo',
            user: todo.author,
            time: admin.firestore.FieldValue.serverTimestamp()
        };

    return createNotification(notification);
});