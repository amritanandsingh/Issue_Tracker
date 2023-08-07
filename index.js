const express = require("express");
const app = express();
const port = 8000 ;

app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use('/', require('./routes'));

app.listen(process.env.PORT||port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
