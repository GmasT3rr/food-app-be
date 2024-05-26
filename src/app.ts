import express from "express";
import routes from "./server/routes/index.routes";
import cors from "cors";
import 'dotenv/config'; 


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

export default app;
