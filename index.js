import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.router.js";
import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();
app.use(express.json());

app.use("/api", productsRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: "Not Found" });
});

app.use("/api", authRouter);

app.use(auth);

app.get("/", auth, (req, res) => {
    res.send("API ...");
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));