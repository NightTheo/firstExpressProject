import {config} from "dotenv";
config();

import express from "express";

const app = express();

app.get('/esgi', (req, res) => {
    res.send("UwU");
})


app.listen(process.env.PORT, () => {
    console.log('server started on ' + process.env.PORT);
});