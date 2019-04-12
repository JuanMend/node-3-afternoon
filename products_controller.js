const getOne = (req, res) => {
	let db = req.app.get('db');
	db
		.read_product(req.params.id)
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('err');
		});
};

const getAll = (req, res) => {
	let db = req.app.get('db');
	db.read_products().then((result) => {
		res.status(200).json(result);
	});
};

const create = (req, res) => {
	req.app
		.get('db')
		.create_product([ req.body.name, req.body.description, req.body.price, req.body.image_url ])
		.then((result) => {
			res.status(200).json(result);
		});
};

const update = (req, res) => {
	req.app.get('db').update_product([ req.query.desc, req.params.id ]).then((result) => {
		res.status(200).json(result);
	});
};

const Delete = (req, res) => {
	req.app.get('db').delete_product(req.params.id).then((result) => {
		res.status(200).json(result);
	});
};

module.exports = {
	getOne,
	getAll,
	create,
	update,
	Delete
};
