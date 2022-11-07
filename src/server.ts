/* eslint-disable prettier/prettier */
import swaggerUi from "swagger-ui-express";

import { app } from ".";
import swaggeFile from "./swagger.json"


app.use("/ip-docs", swaggerUi.serve, swaggerUi.setup(swaggeFile));
app.listen(3333, () => console.log("Server is running!"));

