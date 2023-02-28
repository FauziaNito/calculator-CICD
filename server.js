import express from 'express';

const app = express();
app.use(express.static('public'));

// app.get()

app.listen(3009, () => console.log('Listening to PORT 3009'));
