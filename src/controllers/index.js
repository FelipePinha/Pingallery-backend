import Express from "express";

const router = Express.Router();

router.get("/", (req, res) => {
    res.send("oi oi");
});

export default router;
