const Koa = require('koa');
const Router = require('./router');
const Body = require('koa-body');
const { init } = require('./helpers/sina-auth');

const app = new Koa();

app.use(Body());

Router(app);

app.listen(3000, () => {
  init();
});
