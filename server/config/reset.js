import {pool} from './database.js';
import './dotenv.js';
import gameData from '../data/games.js'


const createGameTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS games;

        CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price_point VARCHAR(20) NOT NULL,
    audience VARCHAR(100) NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    submitted_by VARCHAR(100) NOT NULL,
    submitted_on TIMESTAMP NOT NULL
)
    `

    try{
        await pool.query(createTableQuery);
        console.log('Games table created or already exists');
    }catch (err) {
        console.error('Error creating games table:', err);
        throw err;
    }
}



  const seedGamesTable = async () => {
    try {
        await createGameTable();

        const insertQuery = `
            INSERT INTO games (name, price_point, audience, image, description, submitted_by, submitted_on)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

        for (const game of gameData) {
            const values = [
                game.name,
                game.pricePoint,
                game.audience,
                game.image,
                game.description,
                game.submittedBy,
                game.submittedOn
            ];

            await pool.query(insertQuery, values);
            console.log(`Game "${game.name}" inserted successfully`);
        }
    } catch (err) {
        console.error('Error seeding games table:', err);
        process.exitCode = 1;
    } finally {
        await pool.end();
    }
};

seedGamesTable();

