import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hola Node.js");
});

import productsRouter from "./src/routes/products.router.js";
app.use("/api/products" , productsRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));