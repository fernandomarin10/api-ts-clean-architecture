import express, { Request, Response } from 'express';
import cors from "cors";
import userRoutes from "../infrastructure/routes/UserRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors<Request>());

// routes
app.use("/users", userRoutes);

export default app;