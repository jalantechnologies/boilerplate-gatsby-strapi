# Gatsby / Strapi Boilerplate

This documents steps to get both frontend (gatsby) and backend (strapi) working locally
If you are new to both the tech then the documentation might help you to get familiar regarding both the tech-stack
i.e. [Gatsby](https://v4.gatsbyjs.com/docs/) and [Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html)

## Backend

### Prerequisite

-> Make sure you are using node version 16.0.0 while working with strapi.
-> Make sure you have a local Postgres server running on port `5432`. Check out [downloads](https://www.postgresql.org/download/) page to get help
with the installation.

### Steps

-> Copy .env.example to .env to ensure all environment variables are set up locally.
-> Update `DATABASE_USERNAME` and `DATABASE_PASSWORD` according to your local Postgres installation. (If using macOS, this step is probably not 
required)
-> Make sure `website-dev` database is in there. Create one using `create database "website-dev";` if not already there.

```
cd api
yarn install
yarn develop
```

-> Application should be up and running on - `http://localhost:1337`

### Initializing data for development

- Make sure there is no db file present at **./api/.tmp/data.db**
- Make sure you add **STRAPI_ADMIN_EMAIL** & **STRAPI_ADMIN_PASSWORD** values in .env ( take a look at .env.example) file this are the login
  details for strapi admin
- Now in ./api folder just run **yarn develop**

### Initializing data for new Page

- **./api/seed** folder contains all details related to initialization of development data
- **./api/src/index.ts** file has **bootstrap** method which will be called before server starts, we took advantage of this method to initialize
  admin, roles and prefill data
- Whenever you need to add new fields in strapi, you should also add update in seed folder to add initial data
- To add media in initial data use **uploadFile** method, which will take name of asset which stored in **./api/seed/data/uploads**
- To add data for new page follow
  Add page in ./api/seed/pages.ts
  like below

    - `export const pages = [
      {
        name: home-page',
        getData: getHomePage,
        isCollection: false
      },
      {
        name: 'article',
        getData: getVideoLibrary,
        isCollection: true
      },
      ];`
- In above pages **name** is the page name created in strapi and **getData** is a function which will return data in below format below is sample data
  for Seo section of homepage
    - `{
      "createdAt": "2022-12-16T11:59:47.825Z",
      "updatedAt": "2022-12-16T11:59:47.825Z",
      "publishedAt": "2022-12-16T11:59:47.825Z",
      "Seo": {
      "Title": "JTC",
      "Description": "Some description about website",
      "Favicon": 1,
      "Metas": [
      {
      "Name": "viewport",
      "Content": "width=device-width, initial-scale=1"
      }
      ]
      },
      "createdBy": 1,
      "updatedBy": 1
      }`

- In above example Favicon is image id of strapi that you can get from
  const favIcon = await uploadFile('favicon.png');
- Now you can get image id as favIcon[0].id
- To check newly added page drop db from postgres and recreate using **drop database "website-dev" WITH (FORCE);** and run **create database "website-staging-2";**
- run **yarn develop**

### Generating API token for Frontend

- Navigate to strapi admin page - `http://localhost:1337/admin`
- Login using `STRAPI_ADMIN_EMAIL` and `STRAPI_ADMIN_PASSWORD` (By default it's set to `admin@jalantechnologies.com` / `password`)
- Navigate - `Settings` > `API Tokens`
- Select - `Create new API token`
- Provide name, duration as `Unlimited`, token type `Full access`
- Copy the generated token.

## Frontend

### Prerequisite

-> Make sure you are using node version >=18.0.0 while working with gatsby.
-> While working on develop copy .env.example file to your .env.development to ensure all environment variables are set up locally.
-> Update `STRAPI_TOKEN` with the token generated in `Generating API token for Frontend` from `Backend`.

### Steps

```
yarn install
yarn develop
```

-> Application should be up and running on - `http://localhost:8000`
