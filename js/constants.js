"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.MONGO_DBURL = 'mongodb://localhost/testdb';
exports.MONGOOSE_RECORD_REPLAY_FOLDER = path.normalize('./test/data/mongoose_record_replay/testmodel/'); // path.normalize(__dirname + '/../mgrecrep/');
exports.ENV_NAME_MONGO_RECORD_REPLAY = 'MGNLQ_TESTMODEL_REPLAY';
// not in use for record/replay
// used to load data into model
exports.RAW_MODEL_PATH = path.normalize(__dirname + '/../testmodel');
exports.MODEL_PATH = path.normalize(__dirname + '/../testmodel');

//# sourceMappingURL=constants.js.map
