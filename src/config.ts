import * as dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT,
  app_secret: process.env.APP_SECRET,
  node_env: process.env.NODE_ENV
};

export default config;
