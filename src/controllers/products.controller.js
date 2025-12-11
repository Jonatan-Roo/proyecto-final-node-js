import { getProducts } from "../models/Products.js";

export const index = (req, res) => {
    const products = getProducts();
    res.json(products);
};