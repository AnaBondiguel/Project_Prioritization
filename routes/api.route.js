import express from "express";
import ticketsRouter from "./tickets.route.js";
import usersRouter from "./users.route.js";
import feedbacksRouter from "./feedbacks.route.js";
import authRouter from "./auth.route.js";
import { isAuth } from "../middleware/isAuth.middleware.js";
const router = express.Router();

router
  .use("/auth", authRouter)

  .use("/tickets", isAuth, ticketsRouter, feedbacksRouter)

  .use("/users", isAuth, usersRouter);

export default router;
