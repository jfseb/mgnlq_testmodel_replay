"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_record_replay = require("mongoose_record_replay");
const process = require("process");
const Constants = require("./constants");
const mgnlq_model_1 = require("mgnlq_model");
var mode = 'REPLAY';
// MGNLQ_TESTMODEL2_REPLAY
if (process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY] === "RECORD") {
    mode = 'RECORD';
}
else if (process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY] === "OFF") {
    mode = undefined;
}
else if (!process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY]
    || process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY] === "REPLAY") {
    mode = undefined;
}
else {
    throw new Error(`illegal value ${process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY]}  for ${Constants.ENV_NAME_MONGO_RECORD_REPLAY}, epxected one of "REPLAY", "RECORD", "OFF" or not set`);
}
var mypath = Constants.MONGOOSE_RECORD_REPLAY_FOLDER; // require().resolve('mgnlq_testmodel_replay');
var mongooseMock = mongoose_record_replay.instrumentMongoose(mongoose, mypath, // 'node_modules/mgnlq_testmodel_replay/mgrecrep/',
mode);
var aPromise = undefined;
function loadModel() {
    return mgnlq_model_1.Model.loadModelsOpeningConnection(mongooseMock, Constants.MONGO_DBURL, Constants.MODEL_PATH);
}
/**
 * Obtain a model instance,
 *
 * note: the model must be closed via
 * Model.releaseModel(theModelInstance)
 */
function getTestModel() {
    if (mode === 'REPLAY') {
        // determine mode
        // in replax mode, using a singleton is sufficient
        aPromise = aPromise || loadModel();
        return aPromise;
    }
    return loadModel();
}
exports.getTestModel = getTestModel;

//# sourceMappingURL=getmodel.js.map
