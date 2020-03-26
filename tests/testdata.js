const mongoose = require('mongoose');
const Categories = require('../app/models/category');

const CategoriesData = require('./data/category')

const mongoAddress = 'mongodb://127.0.0.1/shop';
mongoose.connect(mongoAddress, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

Categories.insertMany(CategoriesData, (err) => {
    console.error(err);
    db.close();
})