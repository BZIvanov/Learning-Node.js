import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/", (_req: Request, res: Response) => {
  res.status(200).json({
    tasks: [
      { id: uuidv4(), text: "Task 1" },
      { id: uuidv4(), text: "Task 2" },
    ],
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
