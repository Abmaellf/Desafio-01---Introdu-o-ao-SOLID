import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();
app.use(express.json());
app.use("/users", usersRoutes);
// eslint-disable-next-line prettier/prettier
export { app };
