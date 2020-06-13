import * as dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  app_secret: process.env.APP_SECRET || 'secret',
  node_env: process.env.NODE_ENV || 'production',
  abbyy_url: process.env.ABBYY_URL,
  abbyy_keys: Object.keys(process.env).filter(key => key.startsWith('ABBYY_KEY')).map(key => {
      return process.env[key]
  }),
  abbyy_keys_count: () => config.abbyy_keys.length,

  azure_url: process.env.AZURE_URL,
  azure_keys: Object.keys(process.env).filter(key => key.startsWith('AZURE_KEY')).map(key => {
    return process.env[key]
  }),
  azure_keys_count: () => config.azure_keys.length,
  confidence: +process.env.CONFIDENCE,
  superUser: +process.env.SUPER_USER
};

export default config;
