# serverless-sequelize-boilerplate

This is a simple guide and boilerplate on getting started on with Serverless Framework and relational database with Sequelize (ORM for NodeJS). This boilerplate will be use MySQL for database.

Get yourself a serverless REST API up with connected to a MySQL server in a few minutes on NodeJS.

## Whats Included

C- Create Book

R- List Books, and Show Book

U- Update Book

D- Delete Book

## Guide

First Install and configure Serverless https://github.com/serverless/serverless#quick-start

Then install [sequelize v6](https://sequelize.org/master) and [mysql2](https://www.npmjs.com/package/mysql2) for MySQL driver connection. More details about sequelize database connection [here](https://sequelize.org/master/manual/getting-started.html)

```shell
npm install --save sequilize mysql2
```

**MySQL Configuration**

**Note:** This boilerplate assume that database that will be use for this project is already create.

- Duplicate file `.env.example` and rename to `.env.{stage}`. More details about [environment variables](https://www.serverless.com/framework/docs/environment-variables/).
- Go to `.env.{stage}` and edit value through each environment variable. These variable will be use in `/src/config/database.js`

```javascript
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
});
```

## Starting serverless offline

```shel
npm start
```

## Contributing

All pull requests and feedbacks are welcome and appreciated :grin:

## Author

* **Sinh Noun** - *Javascript Developer* - [Mbanq Cloud](https://mbanq.com/cloud)

## Acknowledgments

To all NodeJS and other related field contributors, thank you! :black_heart:

## More information

- Serverless Framework - https://www.serverless.com/framework/docs
- Sequelize v6 Documentation - https://sequelize.org/master
