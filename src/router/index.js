const SinaAuth = require('./sina-auth');
const SinaData = require('./sina-data');

module.exports = (app) => {
  app.use(SinaAuth.routes());
  app.use(SinaData.routes());
};
