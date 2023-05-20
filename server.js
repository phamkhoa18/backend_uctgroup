const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const bodyParser = require('body-parser')
const morgan = require('morgan');
const cors = require("cors");
const TurndownService  = require('turndown');
const showdown = require('showdown');
var data ;
// ROUTER LINK ES5
const UserRouter = require('./routers/UserRouter');
const MenuRouter = require('./routers/MenuRouter');
const CategoryRouter = require('./routers/CategoryRouter');
const NewRouter = require('./routers/NewRouter');
const ContactRouter = require('./routers/ContactRouter');
const SliderRouter = require('./routers/SliderRouter');
const HomeRouter = require('./routers/HomeRouter');
const tests = require('./models/test');
const Categories = require('./models/Categories');
const News = require('./models/News');
// CONFIG 
dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('common'));
app.use(express.static('public'));
app.set('view engine' , 'ejs');
app.use(cors());

// CONNECT DATABASE MONGODB 
mongoose.connect(process.env.URL_DATABASE)
    .then(() => {
        console.log('Connect mongodb success');
    })
    .catch((err) => {
        console.log(`Connect mongodb error: ${err}`);
    })


//  ROUTER 
app.use('/', UserRouter);
app.use('/', MenuRouter);
app.use('/', CategoryRouter);
app.use('/', NewRouter);
app.use('/', ContactRouter);
app.use('/' , SliderRouter);
app.use('/', HomeRouter) ;
// RUN PORT


app.listen(process.env.PORT , () => {
    console.log(`Server run port :${process.env.PORT}`);
})