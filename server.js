const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded sample data (no database needed)
const cars = [
  { id: 1, name: "Speedster X1", type: "Racing", speed: "45 km/h", price: 79 },
  { id: 2, name: "Rock Crawler Pro", type: "Off-road", speed: "25 km/h", price: 129 },
  { id: 3, name: "Drift King", type: "Drift", speed: "35 km/h", price: 99 },
  { id: 4, name: "Mini Buggy", type: "Beginner", speed: "20 km/h", price: 49 },
];

// Serve the frontend
app.use(express.static(path.join(__dirname, "public")));

// API: list all cars
app.get("/api/cars", (req, res) => res.json(cars));

// Health check (handy for testing nginx / load balancers later)
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => console.log(`RC Cars app running on port ${PORT}`));
