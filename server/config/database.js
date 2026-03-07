import pg from 'pg';
import './dotenv.js';

const requiredVars = ['PGUSER', 'PGPASSWORD', 'PGHOST', 'PGPORT', 'PGDATABASE'];
for (const key of requiredVars) {
    if (!process.env[key] || typeof process.env[key] !== 'string') {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
   ssl: {
        rejectUnauthorized: false
    }
};


export const pool = new pg.Pool(config);

