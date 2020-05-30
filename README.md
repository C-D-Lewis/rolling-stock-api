# rolling-stock-api

Full-stack demo project modelling management of railway stock inventory.


## `service`

Express server exposing a CRUD API with schema-validated endpoints storing in
MongoDB.

* `POST /rollingStock` - Create a rolling stock item.

* `GET /rollingStock` - Retrieve a list of the most recently created items.

* `GET /rollingStock?q=...` - Retrieve a filtered list of recently created
  items.

* `GET /rollingStock/:rollingStockId` - Retrieve an item by `id`.

* `PUT /rollingStock/:rollingStockId` - Replace an item by `id`.

* `DELETE /rollingStock/:rollingStockId` - Delete an item by `id`.


## `dashboard`

React dashboard application built with Webpack to allow human management of
database entries.

* Create a rolling stock item.

* View a table of recently created items.

* Search for items by unit number, class, type, or manufacturer.

* Update an existing item.

* Delete an existing item.

![screenshot.png](dashboard/screenshot.png)


## `openapi`

OpenAPI spec components describing the API.


## `database`

Scripts and tools for MongoDB database.

* `start-mongo.sh` - Start mongod locally.

* `insert-example-data.sh` - Use `curl` to insert some example data via the API.
