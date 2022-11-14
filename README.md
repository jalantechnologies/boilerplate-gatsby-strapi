# 🚀 Getting started with Gatsby and Strapi Boilerplate

This boilerplate helps to create easy go marketing websites, with the power of SSR we get using from Gatsby and Headless CMS provided by Strapi, which make this boilerplate perfect to use.

If you are new to both the tech then the documentation might help you to get familiar regarding both the tech-stack i.e. [Gatsby](https://v4.gatsbyjs.com/docs/) and [Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html)

## Backend Setup

`Prerequisite`

->  Make sure you are using node version 16.0.0 while working with strapi.

### `develop`

-> Follow these process to run your strapi server

-> Inside your .env file in api folder, make sure to add the following keys `HOST`, `PORT`, `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `JWT_SECRET`. 

```
cd api
yarn install
yarn develop

```
-> You can see your strapi server working successfully on the given port

## Frontend Setup

`Prerequisite`

-> Make sure you are using node version >=18.0.0 while working with gatsby.

-> While working on develop update your .env.development and add the keys `STRAPI_API_URL`, `STRAPI_TOKEN`. While running this on your local make sure your STRAPI_API_URL is something like this http://127.0.0.1:PORT instead of http://localhost:PORT. Using localhost throws error in the local so prefer using IP address just for local.

### `develop`

```
yarn install
yarn develop

```
-> You can see in your browser Gatsby working successfully.
