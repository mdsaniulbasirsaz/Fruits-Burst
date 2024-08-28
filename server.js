const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mongoose.connect('mongodb+srv://saniulcsejust:admin200103@fruitburst.uliyy.mongodb.net/?retryWrites=true&w=majority&appName=fruitburst', {
    
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('MongoDB connection error', err);
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'styles')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop.html'));
});

app.get('/allfruits', (req, res) => {
    res.sendFile(path.join(__dirname, 'allfruits.html'));
});

// Signup Schema
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    address: String,
    phone: String
});


const User = mongoose.model('User', userSchema);
module.exports = User;

app.post('/signup', async (req, res) => {
    try {
        const { username, name, email, password, address, phone } = req.body;

        
        // Create and save the new user
        const newUser = new User({ username, name, email, password, address, phone });
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User registered successfully!', username: newUser.username });
    } catch (error) {
        console.error('Error registering user:', error);  // Log the error to the console
        res.status(500).json({ error: 'Internal server error' });
    }
});


  

app.get('/user/:username', async(req,res) =>{
    try{
        const {username} = req.params;

        const user = await User.findOne({username});
        if(!user)
        {
            res.status(404).json({message: 'User not found'});
        }
        else
        {
            res.status(200).json(user);
        }
    } catch(error)
    {
        console.error('Error fetching user:', error);
        res.status(500).json({error: 'Internal server error'});
    }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
