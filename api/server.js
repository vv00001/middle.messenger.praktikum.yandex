app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

const express = require('express');

const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static('./dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + './dist/index.html');
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
