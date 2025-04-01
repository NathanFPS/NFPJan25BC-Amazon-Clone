const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51R92zt4KrdOFPoaS7Hpe3dnazGAASOVMSY5xMfcy880hlE1p2WqeqtWLJjGpL2ZBhzJ6qmIGm5pR87nSYd6c1y7j00gilH6k5z')

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Hello World!'));

exports.api = functions.https.onRequest(app);
