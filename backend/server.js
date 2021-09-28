import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import category from "./routers/category.js";
import users from "./routers/users.js";
import sizes from "./routers/sizes.js";
import colors from "./routers/colors.js";
import products from "./routers/product.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 7000;
const URI =
  "mongodb+srv://admin:USTJPZM8oSfLNuDa@cluster0.8dzcl.mongodb.net/FashiShop?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/api/products", products);
app.use("/api/categories", category);
app.use("/api/users", users);
app.use("/api/sizes", sizes);
app.use("/api/colors", colors);
app.use("/api/product/images", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
