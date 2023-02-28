import "dotenv/config";


import express from 'express';
import { operations } from './calc.js';
import { insertOperation } from './db.js';

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/calculate', async (req, res) => {
  const { firstNumber, secondNumber, operator } = req.body;
  const operation = operations[operator];
  const result = operation(firstNumber, secondNumber);
  const id = await insertOperation(firstNumber, secondNumber, operator,result);
  res.json({ result, id });
});

app.listen(process.env.PORT || 3009, () => console.log('Listening to PORT 3009'));
