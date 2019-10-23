const express = require('express')
const app = express();
const PORT = process.env.PORT || 5005;
const routes = require('./routes')
const morgan = require('morgan')
const expressLayouts = require('express-ejs-layouts')

// 
// app.use(expressLayouts);
app.set('view engine','ejs');


app.use(morgan('combined'))
app.use('/', routes())
//mounts the whole routes folder to '/'

app.listen(PORT, console.log(`Server started on port ${PORT}`))