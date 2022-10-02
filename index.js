import express from "express";
import recitersRoute from "./routes/reciters.js";

const app = express();

app.use("/api/reciters", recitersRoute);

app.listen(3000, () => console.log("server started"));
