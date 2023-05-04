import Express from "express";
import Images from "../schema/index.js";

import multer from "multer";
import storage from "../multer/multerConfig.js";
const upload = multer({ storage: storage });

const router = Express.Router();

router.get("/images", async (req, res) => {
    const images = await Images.find({}).sort({ _id: -1 });
    return res.status(200).json({
        images,
        url: "http://localhost:3000/files/",
    });
});

router.post("/upload", upload.single("file"), async (req, res) => {
    await Images.create({
        path: req.file.filename,
    });
    return res.status(201).send("imagem salva com sucesso");
});

export default router;
