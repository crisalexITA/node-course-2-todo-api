//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    /* db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5ba6126d40be400e94d555d6')
    },{
        $set : {
            completed : true
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    }); */

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5b9cdb4909fbd725bcbddc14')
    },{
        $set : {
            name : 'Cristian'
        },
        $inc : {
            age : 10
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});