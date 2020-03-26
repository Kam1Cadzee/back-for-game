import * as dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT,
  app_secret: process.env.APP_SECRET
};

export default config;
