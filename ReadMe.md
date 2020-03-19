-------------------------------------------------------------------------------------
    To Do
-------------------------------------------------------------------------------------
	- Storefront:
		. Database schema + test data
		. UI
	- Cart - Checkout
    - User authentication
	- Administration
		. Database schema
		. UI

Ref:
	- https://github.com/AdamRisberg/react-express-cart
    - https://github.com/mrvautin/expressCart


-------------------------------------------------------------------------------------
    Introduction
-------------------------------------------------------------------------------------
+ A shop builds by Express + React + MongoDB.

+ Project structure:
    - app/controller: define route handlers.
    - app/middlewares: define function interpreted all incoming requests before moving to the route handler.
    - app/models: database schemes and validations.
    - app/routes: define app routes.
    - app/services: define bussiness logic
    - app/views: contains templates to be rendered by the server.
    - app.js: Initialize express app and setup other elements
    - bin/www: bootstrap express server
    - public: store static images in/img, custom JavaScript files, and CSS /css
    - test: contains all test cases
    - utils: helper functions 


-------------------------------------------------------------------------------------
    MongoDB
-------------------------------------------------------------------------------------
+ Start the mongodb server:
    - Linux: mongod --noauth --dbpath "data_base_location"        
    - Windows: [mongo_folder]/mongod.exe --noauth --dbpath "data_base_location"

+ Development:
    - Linux:
        mongod --noauth --dbpath "./mongodb"
    - Windows:
        "/mongod.exe" --noauth --dbpath "./mongodb"