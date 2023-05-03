import Express from "express";
import Images from "../schema/index.js";

const router = Express.Router();

router.get("/images", async (req, res) => {
    const images = await Images.find({}).sort({ _id: -1 });
    res.status(200).json(images);
});

export default router;
