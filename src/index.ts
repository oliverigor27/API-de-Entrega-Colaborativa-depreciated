import express from 'express';
import {config} from 'dotenv';

config()

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "HellO World!"
    });
});

app.listen(process.env.PORT, () => {
    console.log("Server is running!");
});