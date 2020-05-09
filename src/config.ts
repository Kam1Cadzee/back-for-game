import * as dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  app_secret: process.env.APP_SECRET || 'secret',
  node_env: process.env.NODE_ENV || 'production'
};

export default config;
