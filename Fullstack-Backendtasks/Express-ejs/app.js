const express = require("express");
const port = 3000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    const aboutInfo = {
        title: 'About Us',
        description: 'This is the about us page. Here you can learn more about our company.'
    };
    res.render('about', {about: aboutInfo});
});

app.get('/contact', (req, res) => {
    const contactInfo = {
        title: 'Contact Us',
        email: 'gyanavardhanmamidisetti@gmail.com',
        phone: '123-456-7890'
    };
    res.render('contact', {contact: contactInfo});
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
