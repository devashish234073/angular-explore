const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('angular-explore/dist/angular-explore'));

app.get('/getPersonAtId1111', function (req, res) {
    res.send({name:"lala",age:12,id:1111})
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));