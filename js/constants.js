"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.MONGO_DBURL = 'mongodb://localhost/testdb';
exports.MONGOOSE_RECORD_REPLAY_FOLDER = path.normalize(__dirname + '/../mgrecrep/');
exports.RAW_MODEL_PATH = path.normalize(__dirname + '/../testmodel');
exports.MODEL_PATH = path.normalize(__dirname + '/../testmodel');
exports.ENV_NAME_MONGO_RECORD_REPLAY = 'MGNLQ_TESTMODEL_REPLAY';

//# sourceMappingURL=constants.js.map
