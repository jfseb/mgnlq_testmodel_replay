
const path = require('path');

export const MONGO_DBURL =  'mongodb://localhost/testdb';
export const MONGOOSE_RECORD_REPLAY_FOLDER = path.normalize(__dirname + '/../mgrecrep/');
export const RAW_MODEL_PATH = path.normalize(__dirname + '/../testmodel');
export const MODEL_PATH = path.normalize(__dirname + '/../testmodel');
export const ENV_NAME_MONGO_RECORD_REPLAY = 'MGNLQ_TESTMODEL_REPLAY';