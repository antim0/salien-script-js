const SalienScript = require('./src/index.js');

const SALIEN_CONFIG = process.env.SALIEN_CONFIG;

const salien = new SalienScript();
salien.init();
