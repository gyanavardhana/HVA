const express = require('express')
const bcrypt = require("bcrypt")
const app = express();
const PORT = 3000;
const profiles = {};
const jwt = require('jsonwebtoken');

var jt = null;


app.use(express.json()); 

app.post('/signup', async (req, res) => {
    try {
        const email = req?.body?.email;
        const password = req?.body?.password;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        profiles[email] = {
            email,
            s: salt,
            password: hashedPassword
        };
        console.log(profiles,jt);
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/login',async(req,res)=>{
    try{
        const email = req?.body?.email;
        const password = req?.body?.password;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const user = profiles[email];
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const nowpass = await bcrypt.hash(password, user.s);
        if (user.password !== nowpass) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        jt = jwt.sign({email}, 'secret', {expiresIn: '1h'});
        res.status(200).json({ message: 'User logged in successfully', token: jt });

    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})




app.get('/protected-route',(req, res) => {
    const token = req?.body?.token;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, 'secret');
        res.status(200).json({ message: 'You are authorized', decoded });
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})