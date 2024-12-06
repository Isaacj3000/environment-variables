const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('The server is runnig');

})
// ADJUST THE FOLLOWING:
app.listen(3000, () => {
    console.log('Listening on port 3000');
    console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});
