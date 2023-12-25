const Box = require('cli-box');
const ip = require('ip');
const version = require('../package.json').version;
const dotenv = require('dotenv');
dotenv.config();

const serverName = process.env.SERVER_NAME;
const port = process.env.PORT_DEV;
const isNetwork = process.env.NETWORK;

const myBox = new Box({
    w: 35,
    h: 10,
    stringify: false,
    marks: {
      nw: '╭',
      n: '─',
      ne: '╮',
      e: '│',
      se: '╯',
      s: '─',
      sw: '╰',
      w: '│'
    },
    hAlign: 'left',
  }, `EZ FRAMEWORK @ ${version}

  ▸ Name      :   ${serverName}
  ▸ Network   :   ${isNetwork ? "Yes" : "No"}
  ▸ Device IP :   ${ip.address()}

  Listening: http://localhost:${port}`);
  console.log(myBox.stringify());

  module.exports = myBox;