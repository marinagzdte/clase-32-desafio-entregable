import * as dotenv from 'dotenv';
const res = dotenv.config({ path: './.env' });

export default {
    mariaDb: {
        client: "mysql",
        connection: {
            host: '127.0.0.1',
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_PASS,
            database: 'mocks-normalizr'
        }
    },
    mongodb: {
        connectionString: process.env.MONGODB_CONNECTION_STRING,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}
