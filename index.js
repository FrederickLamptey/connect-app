import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy } from 'passport-local';
import GoogleStrategy from 'passport-google-oauth2';
import session from 'express-session';
import env from 'dotenv';

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/employees', (req, res) => {
    res.render('employees.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
