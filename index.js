const express = require('express');
const app = express();
/*app.get('/', (req, res) => {
    res.json('Hello Socket')
})*/

app.use(express.static('public'));

app.listen(4000, () => console.log('Server is up and running in port 4000'));