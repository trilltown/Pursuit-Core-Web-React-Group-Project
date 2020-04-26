const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', (req,res) => {
    res.json("Hello World")
})


const usersRouter = require('./routes/users');
const postRouter = require('./routes/post');
const commentsRouter = require('./routes/comments');
// const uploadsRouter = require('./routes/upload')
const hashTagRouter = require('./routes/hash')


app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/comments', commentsRouter);
app.use('/hashtags', hashTagRouter);
// app.use('/uploads', uploadsRouter);

app.listen(port, () => console.log("Server running on port ", port));

