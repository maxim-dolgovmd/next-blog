import mongoose from "mongoose";

const postModels = new mongoose.Schema({

    image: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    text: {
        type: String,
        required: true,
    }

})

export default mongoose.model('Post', postModels)