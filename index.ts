import {config} from "dotenv";
config();

import express from "express";

const app = express();

app.get('/esgi', (req, res) => {
    res.send("UwU");
})

app.get('/shool/:name', (req, res) => {
    const name: string = req.params.name;
    const {lang} = req.query || 'en';
    res.send('Name: '+ name + ', lang: ' + lang);
});

app.post('/oppa', express.json(), (req, res) => {
    res.json(req.body);
})


app.listen(process.env.PORT, () => {
    console.log('server started on ' + process.env.PORT);
});