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
            'storefront/pages/products',
            { 
                categories: categories,
                products: products,
                baseUrl: req.path,
                search: req.query.q
            }
        );
    })
    .catch(next);
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
            'storefront/pages/products',
            { 
                categories: categories,
                products: products,
                baseUrl: req.path
            }
        );
    }
    catch(err){
        return next(err)
    };
}

exports.productDetail = async (req, res, next) => {
    try {
        const categories = await Category.find({});
        const product = await Product.findOne({ name: req.params.name });
        const relatedProduct = await Product.find({ categories: { $in: product.categories} })
            .sort({x:-1})   // Sort the newest
            .limit(5);      // Get 5 record only
        
        res.render(
            'storefront/pages/product-detail',
            {
                categories: categories,
                product: product,
                relatedProduct: relatedProduct
            }
        )
    } catch(err) {
        return next(err)
    };
}

exports.addToCart = (req, res, next) => {
    res.send({
        message: "Cart successfully updated",
        cartId: "6872af8ee9e289f7e2513a39741cd3f58717f74e",
        totalCartItems: 2
    });
    
}