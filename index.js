const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chef.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef server is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`Chef server api is running on port: ${port}`)
});