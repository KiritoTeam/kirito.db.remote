const v1 = require("./v1.js");
const v2 = require("./v2.js");
const v3 = require("./v3.js");
const v4 = require("./v4.js");
const v5 = require("./v5.js")

const KiritoDB = v2.KiritoDB;

const KiritoDBV1 = v1.KiritoDB;
const KiritoDBV3 = v3.KiritoDB;
const KiritoDBV4 = v4.KiritoDB;
const KiritoDBV5 = v5.KiritoDB;

module.exports = { KiritoDB, KiritoDBV1, KiritoDBV3, KiritoDBV4, KiritoDBV5 };