import mongoose from "mongoose";

const mongoURI = "mongodb+srv://himanshukiran:Kk%4012345@cluster0.z4vkef8.mongodb.net/";

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    linkedinUsername: {
        type: String,
        required: true,
    },
    twitterUsername: {
        type: String,
        required: true,
    },
    interests: [
        {
            type: String,
            required: true,
        },
    ],
})

const Card=mongoose.model("Card",cardSchema);
export {Card};