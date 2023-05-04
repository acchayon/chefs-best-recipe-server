const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chef.json');
const recipe = require('./data/recipe.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef server is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/recipe', (req, res) => {
    res.send(recipe)
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    if(id === 0){
        res.send(chefs)
    }
    else{
        const selectedChef = chefs.filter(c => parseInt(c.id) === id)
        res.send(selectedChef) 
    }
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedRecipe = recipe.find(r => r.id == id);
    res.send(selectedRecipe)  
})

app.listen(port, () => {
    console.log(`Chef server api is running on port: ${port}`)
});