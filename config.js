const config = {
  dbUrl:
    process.env.DB_URL ||
    'mongodb+srv://db_user_lecode:PZxTfBizVWOrUpQ7@cluster0-neaoj.mongodb.net/foodplaner',
  port: process.env.PORT || 4000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  fileRoute: process.env.FILE_ROUTE || 'files',
};

module.exports = config;
