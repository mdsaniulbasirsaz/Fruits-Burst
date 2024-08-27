const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'images')));
app.use(express.static(path.join(__dirname,'src')));
app.use(express.static(path.join(__dirname,'src')));
app.use(express.static(path.join(__dirname,'styles')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/shop',(req,res) =>{
    res.sendFile(path.join(__dirname, 'shop.html'));
});

app.get('/allfruits', (req,res) =>{
    res.sendFile(path.join(__dirname, 'allfruits.html'));
});





//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

