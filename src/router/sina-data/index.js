const axios = require('axios');
const Router = require('koa-router');
const wb = require('nodeweibo');
const { pullData } = require('../../helpers/sina-auth');
const { dataFilter } = require('../../helpers/sina-data');
const fs = require('fs');

const memoryCache = require('../../memory-cache');

const router = new Router({
  prefix: '/sina-data',
});

router.get('/pull', async (ctx) => {
  const list = await pullData(memoryCache.get('wbToken').access_token);



  ctx.body = list;
});

module.exports = router;
