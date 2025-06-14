import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;

    // Dummy login logic
    if (email === "admin@example.com" && password === "123456") {
        return res.json({ token: "mock-token-123" });
    } else {
        return res.status(401).json({ msg: "Invalid credentials" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
