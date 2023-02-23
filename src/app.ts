import "reflect-metadata";
import express from "express";
import "express-async-errors";
// import userRoutes from "./routes/users.routes";
// import sessionRoutes from "./routes/session.routes";
import { handleError } from "./errors";
// import categoriesRoutes from "./routes/categories.routes";
// import propertiesRoutes from "./routes/properties.routes";
// import schedulesRoutes from "./routes/schedules.routes";

const app = express();

app.use(express.json());

// app.use("/users", userRoutes);
// app.use("/login", sessionRoutes);
// app.use("/categories", categoriesRoutes);
// app.use("/properties", propertiesRoutes);
// app.use("/schedules", schedulesRoutes);
app.use(handleError);

export default app;
