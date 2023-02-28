import express from "express";
import { startDatabase } from "./database";
import "dotenv/config";

import productsRouter from "./routes/products.routes";
import categoriesRouter from "./routes/category.routes";

const app = express();

app.use(express.json());
app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)

export default app.listen(3333, () => {
  startDatabase()
  console.log("Server running")
});

