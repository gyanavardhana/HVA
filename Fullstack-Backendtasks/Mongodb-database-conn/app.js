// index.js
const express = require('express');
const db = require('./db');
const User = require('./userModel');
const app = express();
const PORT = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/create', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
    });
    await user.save();
    res.status(200).send('User created successfully');
  } catch (e) {
    res.status(500).send(e);
  }
});


app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.put('/update/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { email: req?.body?.email },
      { new: true }
    );
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User updated successfully');
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User deleted successfully');
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
