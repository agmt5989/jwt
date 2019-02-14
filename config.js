module.exports = {
  // 1. MongoDB
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/jwt',

  // 2. JWT
  TOKEN_SECRET: process.env.TOKEN_SECRET || '505cb5dacd775e51e19faf0c697221a86159f09d0e410d2de7adee91adb32bc9620a62213095df3b7aac154cad55b505f261a858f5fbf8caab47b166b3716295',

  // 3. Express Server Port
  LISTEN_PORT: process.env.LISTEN_PORT || 3000
};
