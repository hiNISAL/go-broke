const wb = require('nodeweibo');
const config = require('../../config/weibo');

const init = () => {
  wb.init(config);

  wb.authorize();
};

const getWeiBoToken = (code) => {
  return new Promise((resolve) => {
    wb.OAuth2.access_token({
      code,
      grant_type: 'authorization_code',
    },function(data){
      resolve(data);
    });
  })
};

const pullData = (token) => {
  return new Promise((resolve) => {
    wb.Statuses.home_timeline({
      access_token: token,
      count: 100,
    }, function(data){
      resolve(data);
    });
  });
};

module.exports = {
  init,
  getWeiBoToken,
  pullData,
}
