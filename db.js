import mysql from 'mysql2';

const myConnection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

console.log(process.env.DB_USER)
const db = myConnection.promise();

export async function insertOperation(firstNumber, secondNumber, operator, result) {
  const [{ insertId }] = await db.execute(
    `INSERT INTO operation(first_number,second_number,
        operator,result) VALUES (?,?,?,?)`,
    [firstNumber, secondNumber, operator, result]
  );
  return insertId;
}
