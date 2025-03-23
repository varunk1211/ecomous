import express from "express";
import dotenv from "dotenv";
import { customerFeedback,insertFeedback } from "./database.js";
import cors from 'cors';
dotenv.config(); // Load .env variables
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Test Route
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

// Fetch All Branches
app.get("/branches", async (req, res) => {
  await customerFeedback().then((data) => {
    res.json(data);
  });
});

app.post("/feedback", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    insertFeedback(name, email, message);
    // Here you would normally insert into a database
    console.log("Received Feedback:", { name, email, message });

    res.status(201).json({ success: true, message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});












// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
