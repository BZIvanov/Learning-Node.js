import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../interfaces/task";

type ReqBody = { text: string };
type ReqParams = { id: string };

let tasks: Task[] = [];

export const getTasks = (_req: Request, res: Response) => {
  res.status(200).json({ tasks });
};

export const createTask = (req: Request<{}, {}, ReqBody>, res: Response) => {
  const { text } = req.body;
  if (!text || typeof text !== "string") {
    return res.status(400).json({ message: "Invalid task text" });
  }

  const task: Task = {
    id: uuidv4(),
    text,
  };

  tasks.push(task);
  res.status(201).json({ task });
};

export const updateTask = (
  req: Request<ReqParams, {}, ReqBody>,
  res: Response
) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({ message: "Invalid task text" });
  }

  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found." });
  }

  tasks[taskIndex].text = text;
  res.status(200).json({ task: tasks[taskIndex] });
};

export const deleteTask = (req: Request<ReqParams>, res: Response) => {
  const { id } = req.params;
  const taskExists = tasks.some((task) => task.id === id);

  if (!taskExists) {
    return res.status(404).json({ message: "Task not found." });
  }

  tasks = tasks.filter((task) => task.id !== id);
  res.status(204).send();
};
