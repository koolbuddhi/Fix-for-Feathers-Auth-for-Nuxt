# Nuxt with feathers

### Problem:
It seems that even though you are setting up the feathers client with the cookie storage module, the JWT is still not available to the feathers client as a cookie in the server environment. Hence, the error 'Could not find stored JWT and no authentication strategy was given'.

### Solution:

Use Nuxt Plugin to Authenticate through the store before Nuxt is rendered in the client

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feathers-nuxt-2; npm install
    ```

3. Start your app

    ```
    npm run dev
    ```

4. Create user using postman

    Send post request to http://localhost:3030/users with 

    Header
    ```
    Content-Type: application/json
    Accept: application/json
    ```

    Body
    ```
    {
        "email":"buddy@so.com",
        "password": "123456"
    }
    ```

    Your final request should look like bellow
    ```
    POST /users HTTP/1.1
    Host: localhost:3030
    Content-Type: application/json
    Accept: application/json
    cache-control: no-cache
    Postman-Token: f0e3ab3e-b46c-42dd-9c49-91de88b8a841

    {
    "email":"buddy@so.com",
    "password": "123456"
    }
    ```


4. Run the app
    * Route to http://localhost:3030/
    * Login using the above credentials
    * Route to the "Secret Section"
    * Refresh browser using F5

## Help


## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
