
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to mongodb..."))
    .catch((err) => console.error("Could not connect to mongodb...", err));

const schema = new mongoose.Schema({
    name: String,
});

const Message = mongoose.model("Message", schema);

// Create a Hello World message
const message = new Message({
    name: "Hello World",
});

async function createMessage() {
    try {
        const result = await message.save();
        console.log(result);
    } catch (err) {
        console.error("Could not save message:", err);
    } finally {
        await mongoose.disconnect();
    }
}

mongoose.connection.once("open", createMessage);
