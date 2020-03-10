To do:
	- Connect to mongodb: Mongoose	
	- Storefront
		. Database schema
		. UI
	- Cart - Checkout
	- Administration
		. Database schema
		. UI

Ref:
	- https://github.com/AdamRisberg/react-express-cart

-------------------------------------------------------------------------------------------------------------
React SSR: https://github.com/reactjs/express-react-views

Project structure:
    1. app/controller: define route handlers.
    2. app/middlewares: define function interpreted all incoming requests before moving to the route handler.
    3. app/models: database schemes and validations.
    4. app/routes: define app routes.
    5. app/services: define bussiness logic
    6. app/views: contains templates to be rendered by the server.
    7. app.js: Initialize express app and setup other elements
    8. bin/www: bootstrap express server
    9. /public: store static images in/img, custom JavaScript files, and CSS /css
    10. /test: contains all test cases
    11. /utils: helper functions 
