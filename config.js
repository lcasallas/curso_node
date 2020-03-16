const config = {
  dbUrl:
    process.env.DB_URL || 'insertar url mongo'
  port: process.env.PORT || 4000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  fileRoute: process.env.FILE_ROUTE || 'files',
};

module.exports = config;
