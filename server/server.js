import express from 'express';
import gamesRouter from './routes/games.js';

const app = express();

app.use('/public', express.static('public'));

app.use('/scripts', express.static('./public/scripts'));
app.use('/games', gamesRouter);


app.get ('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Works</h1>');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});