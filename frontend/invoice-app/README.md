## Docs

# invoice-app

Invoice generator built using vue-cli, Typescript & SASS.

## Project setup
```
yarn install
```

### Build and start http-server
```
yarn run start
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

## Structure

The app uses an MVC-like approach, with the main business logic defined in the form of models.

### `src/main`

App entry point, initializes vue instance.

### `src/App`

Vue component entry point, renders header & router

### `src/storage`

Basic localStorage for local caching / persisting data on page reload.

### `src/models`

- Invoice: Models all data for the invoice
- LineItem: Models a single invoice line items, only the Invoice model initializes it internally.
- TaxRate: Models a single tax rate (GST, HST, etc)

### `src/components`

Custom vue presenatational components.

### `src/views`

- Invoice: The main view of the app. Handles all CRUD operations. internally it intializes an instance of the `Invoice` model & assigns it to the `invoice` namespace in the vue instane
