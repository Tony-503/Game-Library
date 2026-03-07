import express from 'express';
import path from 'path';

import { fileURLToPath } from 'url';
import gamesRouter from './routes/games.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/public', express.static('public'));

app.use('/scripts', express.static('./public/scripts'));
app.use('/games', gamesRouter);

app.get('/404.html', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './public/404.html'));
});


app.get ('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Works</h1>');
});

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});