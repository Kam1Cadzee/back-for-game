import config from "../config";

export const isDevelopment = config.node_env === "development";
export const isProduction = config.node_env === "production";
