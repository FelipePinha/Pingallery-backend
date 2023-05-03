import mongoose from "mongoose";

const { Schema } = mongoose;

const imagesSchema = new Schema(
    {
        path: String,
    },
    { collection: "images" }
);

const Images = mongoose.model("images", imagesSchema);

export default Images;
