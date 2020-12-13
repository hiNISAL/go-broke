const axios = require('axios');
const Router = require('koa-router');
const wb = require('nodeweibo');
const { getWeiBoToken } = require('../../helpers/sina-auth');
const fs = require('fs');

const memoryCache = require('../../memory-cache');

const router = new Router({
  prefix: '/sina-auth',
});

router.get('/', async (ctx) => {
  const {
    code,
  } = ctx.query;

  memoryCache.set('wbCode', code);

  ctx.body = {
    code: 0,
    msg: 'OK',
  };

  // axios.get('http://localhost:3000/sina-auth/get-token');
});

router.get('/get-token', async (ctx) => {
  const code = memoryCache.get('wbCode');

  const res = await getWeiBoToken(code);

  console.log(res);

  if (res.error) {
    ctx.body = {
      data: res,
      code: 1,
      msg: 'ERROR',
    };
    return;
  }

  memoryCache.set('wbToken', res);

  ctx.body = {
    code: 0,
    msg: 'OK',
  };
});

module.exports = router;
