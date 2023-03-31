require('dotenv').config();
const { MongoClient } = require('mongodb');

uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.log(err);
        return;
    }
});
console.log('Connected successfully to MongoDB');
const collection = client.db("mydatabase").collection("mycollection");
const document = { name: "John", age: 32 };
collection.insertOne(document, (err, res) => {
    if (err) throw err;
    console.log("Document inserted:", document);
})
