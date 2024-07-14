const express = require('express');
const mongoose = require('mongoose');
try {
    mongoose.connect('mongodb://127.0.0.1:27017', {})
        .then(() => console.log("Database Connected"));
}
catch (err) {
    console.log(err);
    console.log("some error in connecting to database");
}