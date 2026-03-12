import {pool} from '../config/database.js';

const getGames = async (req, res) => {
    try{
       const result = await pool.query('SELECT * FROM games ORDER BY id ASC');
       res.status(200).json(result.rows);
    }catch(error){
        console.error('Error fetching games:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
} 

const getGameById = async (req, res) => {
    try {
        const selectQuery = `
            SELECT
                id,
                name,
                price_point AS "pricePoint",
                audience,
                image,
                description,
                submitted_by AS "submittedBy",
                submitted_on AS "submittedOn"
            FROM games
            WHERE id = $1
        `;
        const gameId = req.params.gameid;
        const result = await pool.query(selectQuery, [gameId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Game not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching game by id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// "id": 2,
// "name": "Hades",
// "pricePoint": "$$",
// "audience": "Action Roguelike Players",
// "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
// "description": "Fast combat and repeat runs through the underworld.",
// "submittedBy": "Milo",
// "submittedOn": "2024-01-14T08:22:00"

export {getGames, getGameById};