import express from 'express';
import { operations} from './calc.js';

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post("/calculate", (req, res) =>{
    
    const {firstNumber, secondNumber, operator} = req.body;
    const operation = operations[operator];
    const result = operation(firstNumber, secondNumber);

    res.json({result})

})

app.listen(3009, () => console.log('Listening to PORT 3009'));
