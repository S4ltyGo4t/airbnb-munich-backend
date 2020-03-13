const fs = require('fs');
const path = require('path');

const allFiles = function (dataFolder) {
  let ret = [];
  fs.readdirSync(path.normalize(dataFolder)).forEach(file => ret.push(file));
  return ret;
};

const test = function () {
  console.log('Test')
};

module.exports = {
  test, allFiles
};
