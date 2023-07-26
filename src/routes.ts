import { Router } from 'express';

const route = Router();

route.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    })
});

route.get("/teste", (req, res) => {
    res.send("Rota teste funcionando!");
});

export default route