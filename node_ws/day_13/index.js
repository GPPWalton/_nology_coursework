const express = require("express");

const api = express();

//root handler
api.get("/", (req, res) => {
    res.send("Hello, World!");
});

api.listen(3000, () => {
    console.log("API running on port 3000");
});
