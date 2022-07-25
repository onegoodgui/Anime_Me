import express from "express";
import cors from "cors";
import path from "path";

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// * significa qualquer rota
app.get("*", async (req, res) => {
  const file = req.url; // se o request for GET /index.html req.url será "/index.html", se for GET /banana/1 será "/banana/1"
  const filePath = path.resolve(`public/${file}`);
  res.sendFile(filePath);
});

app.listen(3200, () => {
  console.log("server is running on port 3200");
});
