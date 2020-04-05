const Category = require('../../models/category');
const Product = require('../../models/product');

/* Product List controller */
exports.productList = (req, res, next) => {
    let query = {
        allowPublish: true
    };
    const paginationOptions = {
        page: req.query.page || 1,
        limit: 10,
        lean: true,
    }
    
    if(req.query.q){
        query = {
            name: { 
                $regex: req.query.q,
                $options: "i"
            }
        };
    }

    Promise.all([
        Category.find(),
        Product.paginate(
            query,
            paginationOptions
        )
    ])
    .then(([categories, products]) => {
        res.render(
            'storefront/pages/product-list',
            { 
                categories: categories,
                products: products,
                baseUrl: req.path,
                search: req.query.q
            }
        );
    })
    .catch(console.log);
}

/* Product Category controller */
exports.productCategory = async (req, res, next) => {
    const productOptions = {
        page: req.query.page || 1,
        limit: 10,
        lean: true,
    }

    try {
        const categories = await Category.find();
        const category = categories.find((item) => {
            return item.name === req.params.categoryText;
        })
        
        const products = await Product.paginate(
            {categories: {$eq: category._id}},
            productOptions
        )

        res.render(
            'storefront/pages/product-list',
            { 
                categories: categories,
                products: products,
                baseUrl: req.path
            }
        );
    }
    catch(err){
        console.log(err)
    };
}

exports.productDetail = async (req, res, next) => {
    try {
        const categories = await Category.find({});
        const product = await Product.find({ name: req.params.name });
        const relative = await Product.find({ categories: { $in: product.categories} })
            .sort({x:-1})   // Sort the newest
            .limit(5);      // Get 5 record only

        res.render(
            'storefront/pages/product-detail',
            {
                categories: categories,
                product: product,
                relative: relative
            }
        )
    } catch(err) {
        console.log(err);
    };
}