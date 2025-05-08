const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'Alice' }]);
});

module.exports = app;
