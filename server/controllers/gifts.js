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

export {getGames};