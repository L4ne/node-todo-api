// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('-- unable to connect to mongodb');
    }
    console.log('-- connected to mongodb');
    const db = client.db('TodoApp')

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch todo', err)
    });

    // client.close();
    // console.log('-- disconnected from mongodb');
});