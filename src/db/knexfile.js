require('dotenv').config()

//for running migrations (npm run migrate), it has to be the raw data from the .env file, not the process.env

module.exports = {

    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        timezone: 'UTC-3',
    },
    pool: { min: 0, max: 10 },
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations',
    }
}
