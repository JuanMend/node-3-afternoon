require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const { getOne, getAll, create, update, Delete } = require('./products_controller');

const PORT = 3000;

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
	app.set('db', dbInstance).catch((err) => {
		console.log('err');
	});
	console.log('db connected');
});

app.use(express.json());

app.get('/api/products/:id', getOne);
app.get('/api/products', getAll);
app.post('/api/products', create);
app.put('/api/products/:id', update);
app.delete('/api/products/:id', Delete);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
