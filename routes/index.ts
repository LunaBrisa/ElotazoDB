import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

export default router;
