const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
};


app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const usersRouter = require('./routes/user.routes');
app.use('/users', usersRouter);



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});




