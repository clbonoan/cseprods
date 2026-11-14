const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

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

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);