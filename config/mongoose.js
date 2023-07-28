const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amritanandsingh999:qNG2hxe0WTuFAfX9@issuetracker.xtgtkrk.mongodb.net/?retryWrites=true&w=majority")
    .then(() =>  { console.log("Connected to dataBase") })
    .catch((error) =>  { console.log("Failed while connecting to dataBase!") });