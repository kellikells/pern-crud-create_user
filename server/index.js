require('dotenv').config();
const PORT = process.env.SERVER_PORT;

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./dbConnect'); // this is used to run postgres queries

// MIDDLEWARE
app.use(cors());
app.use(express.json());    //this gets req.body data which comes from the client side 


// ROUTES

// create an item 
app.post('/api/post/item', async (req, res) => {
    try {
        console.log(req.body);

        const { description } = req.body;

        const newItem = await pool.query(
            "INSERT INTO items (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newItem.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

// get all items 
app.get('/api/get/items', async (req, res) => {
    try {
        const allItems = await pool.query(
            "SELECT * FROM items"
        );
        
        res.json(allItems);
    } catch (err) {
        console.error(err.message);
    }
});

// get one item 
app.get('/api/get/item/:id', async (req, res) => {
    try {
        console.log(req.params);

        const { id } = req.params;
        const item = await pool.query(
            "SELECT * FROM items WHERE item_id = $1",
            [id]
        );

        res.json(item.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


// update an item 
app.put('/api/edit/item/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateItem = await pool.query("UPDATE items SET description = $1 WHERE item_id = $2",
            [description, id]
        );

        res.json('item was updated');
    } catch (err) {
        console.error(err.message);
    }
});

// delete an item 
app.delete('/api/delete/item/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await pool.query("DELETE FROM items WHERE item_id = $1",
            [id]
        );

        res.json('item deleted');
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
});