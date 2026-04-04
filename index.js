const v2 = require("./v2.js");
const v3 = require("./v3.js");
const v4 = require("./v4.js")

const KiritoDB = v2.KiritoDB;
const KiritoDBV3 = v3.KiritoDB;
const KiritoDBV4 = v4.KiritoDB;

module.exports = { KiritoDB, KiritoDBV3, KiritoDBV4 };