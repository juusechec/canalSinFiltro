const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/canal-sin-filtro',
  port: process.env.PORT || 8000,
  host: 'localhost'
};

export default config;
