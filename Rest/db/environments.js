import 'dotenv/config'

export const environments = {
  PORT: process.env.PORT || 8080,
  SECRET: process.env.SECRET || 'my_secret',
  DB: {
    DB_NAME: process.env.DB_NAME || 'swarmdb',
    DB_HOST: process.env.DB_HOST || 'mysql',
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_PORT: process.env.DB_PORT || 3306
  }
}
