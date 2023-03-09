const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let data = "";

// GET endpoint to retrieve data
app.get("/api/data", (req, res) => {
    res.send(data);
});

// POST endpoint to update data
app.post("/api/data", (req, res) => {
    data = req.body.data;
    res.send("Data updated successfully.");
});

// Start the server
app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
);
