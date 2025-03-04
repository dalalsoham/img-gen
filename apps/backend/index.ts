import express from "express";
import "./types";
import {TrainModel, GenerateImage, GenerateImagesFromPack} from "common/types";
import { prismaClient } from "db";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.post("/ai/training", (req, res) => {
  const parsedBody = TrainModel.safeParse(req.body)
})

app.post("/ai/generate", (req, res) => {
    
})

app.post("/pack/generate", (req, res) => {
    
})

app.get("/pack/bulk", (req, res) => {
    
})

app.get("/image", (req, res) => {
    
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
