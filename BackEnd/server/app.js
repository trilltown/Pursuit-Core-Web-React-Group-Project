const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const usersRouter = require('./routes/users');


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log("Server running on port ", port));

