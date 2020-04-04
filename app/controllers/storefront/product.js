const ObjectId = require('mongodb').ObjectID;

const Category = require('../../models/category');
const Product = require('../../models/product');

exports.productList = (req, res, next) => {
    const productOptions = {
        page: req.params.pageNum || 1,
        limit: 10,
        lean: true,
    }

    Promise.all([
        Category.find(),
        Product.paginate(
            {allowPublish: true},
            productOptions
        )
    ])
    .then(([categories, products]) => {
        res.render(
            'storefront/pages/index',
            { 
                categories: categories,
                products: products,
                baseUrl: "/page/"
            }
        );
    })
    .catch(console.log);
}

exports.productCategory = async (req, res, next) => {
    const productOptions = {
        page: req.params.pageNum || 1,
        limit: 10,
        lean: true,
    }
    try {
        const categories = await Category.find();
        const categoryData = categories.find((item) => {
            return item.name === req.params.categoryText;
        })
        
        const products = await Product.paginate(
            {categoryData: {$in: [ObjectId(categoryData._id)]}},
            productOptions
        )
        console.log(categoryData._id);
        console.log(products);

        res.render(
            'storefront/pages/index',
            { 
                categories: categories,
                products: products,
                baseUrl: "/category/" + req.params.categoryText
            }
        );
    }
    catch(err){
        console.log(err)
    };
    
}