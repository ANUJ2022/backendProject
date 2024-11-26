import dotenv from "dotenv";
dotenv.config();
import express from "express";

const port = 4000;
const app = express();
const name = "NHI btaunga"

app.get("/", (req, res) => {
    res.send("Hello World");
})
app.get("/twitter", (req, res) => {
    console.log("Twitter route hit");
    res.send("Hello Twitter");
});
app.get("/json", (req, res) => {
    res.json(name);
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${port}`);
})