import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {getGames} from '../controllers/gifts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router .get('/', getGames);

router.get('/:gameid', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/game.html'));
});

export default router;