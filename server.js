const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static frontend files
app.use(express.static(path.join(__dirname, "public")));

// testing route
app.get("/api", (req, res) => {
    res.json({
        message: "CSE Productions API running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});