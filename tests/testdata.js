const mongoose = require('mongoose');
const _ = require('lodash'); 
const database = require('../app/configs/database');

// Models
const CategoryModel = require('../app/models/category');
const ProductModel = require('../app/models/product');
const AdminModel = require('../app/models/admin');
const CustomerModel = require('../app/models/customer');

// Model data
const CategoriesData = require('./data/categories');
const ProductsData = require('./data/products');
const AdminData = require('./data/admin.json');
const CustomerData = require('./data/customer.json');

// Connect MongoDB
mongoose.connect(database.url, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("DB is connected!")
    insertData();
});

// Methods
const insertData = async () => {
    try {
        await db.dropDatabase();
        const categories = await CategoryModel.insertMany(CategoriesData);
        replaceProductsCategoryStringToId(categories);
        await ProductModel.insertMany(ProductsData);
        await new AdminModel(AdminData).save();
        await new CustomerModel(CustomerData[0]).save();
        await new CustomerModel(CustomerData[1]).save();
    }
    catch(err) {
        console.log(err);
    }
    db.close(console.log("Close connection"));
}

const replaceProductsCategoryStringToId = (categories) => {
    const dict = _.keyBy(categories, 'name');

    ProductsData.forEach((product) => {
        product.categories = product.categories.map((cat) => dict[cat]._id)
    });
}
