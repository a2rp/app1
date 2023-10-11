require("dotenv").config();


const express = require("express");
const app = express();

app.get("/api/v1/a2rp", (req, res) => {
    res.json({
        success: false,
        message: "a2rp: an Ashish Ranjan presentation"
    });
});

const PORT = process.env.PORT || 1198;
app.listen(PORT, () => console.log(`listening on ${PORT}: http://localhost:${PORT}`));

