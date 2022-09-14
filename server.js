const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes/index');

const PORT = process.env.PORT || 3001;
const app = express();

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});