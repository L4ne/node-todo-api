// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('-- unable to connect to mongodb');
    }
    console.log('-- connected to mongodb');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b88571fe3262d442d302463')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch todo', err)
    // });

    db.collection('Users').find({
        name: 'Frank'
    }).toArray([0]).then((docs) => {
        // console.log(`Names count: ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todo', err)
    });

    client.close();
    // console.log('-- disconnected from mongodb');
});