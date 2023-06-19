const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fileupload = require("express-fileupload");
const uploadRoute = require("./file-upload/route");

const app = express();

dotenv.config();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Welcome to the server uploader" });
});

app.use("/upload", uploadRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is up and running`);
});