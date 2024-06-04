const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.json())


// Connect to MongoDB and define routes
MongoClient.connect('mongodb+srv://[username]:<password></password>@cluster0.kw3pzhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useUnifiedTopology: true })
.then(client => {
    console.log('Connected to Database');
    const db = client.db('star-wars-quotes');
    const quotesCollection = db.collection('quotes')
    // Handle POST requests to '/quotes'
    app.post('/quotes', (req, res) => {
        // Extract the quote from the request body
        const quote = req.body;

        // Insert the quote into the collection
        quotesCollection.insertOne(quote)
            .then(result => {
                console.log(result);
                res.redirect("/")
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Internal Server Error');
            });
    });

    // Handle GET requests to '/'
    app.get("/", (req, res) => {
        quotesCollection.find().toArray()
            .then(results => {
                console.log(results);
                res.render('index.ejs', { quotes: results });
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Internal Server Error');
            });
    });

    app.put('/quotes', (req, res) => {
        quotesCollection
        .findOneAndUpdate({name: "Yoda"}, {$set:{name: req.body.name, quote: req.body.quote}}, {upsert:true})
        .then(result=>{
            res.json("Success")

        })
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) =>{
        quotesCollection
        .deleteOne({name: req.body.name})
        .then(result => {
            if(result.deletedCount === 0){
                return res.json("No quote to delete")
            }
            res.json("Deleted the vader quote")
        })
        .catch(error => console.error(error))
    })

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(error => {
    console.error('Failed to connect to the database:', error);
});
