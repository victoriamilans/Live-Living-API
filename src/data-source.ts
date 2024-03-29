import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const dbUrl: string | undefined = process.env.PGDATABASE;
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: dbUrl,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
