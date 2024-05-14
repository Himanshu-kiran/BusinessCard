import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { userRouter } from "./routes/user.js";

const app = express();

app.use(bodyParser.json());
//app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port on 3000");
});
