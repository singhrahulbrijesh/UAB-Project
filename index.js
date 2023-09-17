const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());

// Create an array to store the chat history
app.use(express.json());
app.use(express.static("public")); // Serve static files from the "public" directory

// Create an array to store the chat history
let chatHistory = [];

// Load chat history from a JSON file, if it exists
if (fs.existsSync("chatHistory.json")) {
  const data = fs.readFileSync("chatHistory.json");
  chatHistory = JSON.parse(data);
}

// API endpoint to add a message to the chat history
app.post("/addMessage", (req, res) => {
  const { message, sender } = req.body;
  chatHistory.push({ message, sender });
  console.log(chatHistory);
  // Save chat history to a JSON file
  fs.writeFileSync("chatHistory.json", JSON.stringify(chatHistory));

  res.sendStatus(200);
});

// API endpoint to get the chat history
app.get("/getChatHistory", (req, res) => {
  res.json(chatHistory);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Serve the HTML file
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});