const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/venkat', (req, res) => {
    res.send("Hello Venkat");
})

app.get('/url-params/:param1/:param2', (req, res) => {
    const { param1, param2 } = req.params;
    res.json({ param1, param2 });
});


app.get('/query-params', (req, res) => {
    const queryParams = req.query;
    res.json(queryParams);
});


app.post('/body-data', (req, res) => {
    const bodyData = req.body;
    res.json(bodyData);
});




app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})