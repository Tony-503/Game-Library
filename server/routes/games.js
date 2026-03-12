import express from 'express';
import { getGames, getGameById } from '../controllers/games.js';

const router = express.Router();

router.get('/', getGames);

router.get('/:gameid', getGameById);

export default router;