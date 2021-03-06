"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestModel = void 0;
const mongoose = require("mongoose");
const mongoose_record_replay = require("mongoose_record_replay");
const process = require("process");
const Constants = require("./constants");
const mgnlq_model_1 = require("mgnlq_model");
var mode = 'REPLAY';
if (process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY] === "RECORD") {
    mode = 'RECORD';
}
else if (process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY] === "OFF") {
    mode = undefined;
}
else if (!process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY]
    || process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY] === "REPLAY") {
    mode = 'REPLAY';
}
else {
    throw new Error(`illegal value ${process.env[Constants.ENV_NAME_MONGO_RECORD_REPLAY]}  for ${Constants.ENV_NAME_MONGO_RECORD_REPLAY}, epxected one of "REPLAY", "RECORD", "OFF" or not set`);
}
var mypath = Constants.MONGOOSE_RECORD_REPLAY_FOLDER;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXRtb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxQ0FBcUM7QUFDckMsaUVBQWlFO0FBQ2pFLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMsNkNBQWlFO0FBRWpFLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNwQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLEtBQUssUUFBUSxFQUFFO0lBQ3BFLElBQUksR0FBRyxRQUFRLENBQUM7Q0FDakI7S0FBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLEtBQUssS0FBSyxFQUFFO0lBQ3hFLElBQUksR0FBRyxTQUFTLENBQUM7Q0FDbEI7S0FBTSxJQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUM7T0FDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUMsS0FBSyxRQUFRLEVBQUU7SUFDcEUsSUFBSSxHQUFHLFFBQVEsQ0FBQztDQUNqQjtLQUFPO0lBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUMsU0FBVSxTQUFTLENBQUMsNEJBQTZCLHdEQUF3RCxDQUFDLENBQUM7Q0FDaE07QUFFRCxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsNkJBQTZCLENBQUM7QUFFckQsSUFBSSxZQUFZLEdBQUcsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUNuRSxNQUFNLEVBQUUsbURBQW1EO0FBQzNELElBQUksQ0FBQyxDQUFDO0FBRVIsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDO0FBRXpCLFNBQVMsU0FBUztJQUNoQixPQUFPLG1CQUFLLENBQUMsMkJBQTJCLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RHLENBQUM7QUFDRDs7Ozs7R0FLRztBQUNILFNBQWdCLFlBQVk7SUFDMUIsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3JCLGlCQUFpQjtRQUNqQixrREFBa0Q7UUFDbEQsUUFBUSxHQUFHLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNuQyxPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUNELE9BQU8sU0FBUyxFQUFFLENBQUM7QUFDckIsQ0FBQztBQVJELG9DQVFDIiwiZmlsZSI6ImdldG1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0ICogYXMgbW9uZ29vc2VfcmVjb3JkX3JlcGxheSBmcm9tICdtb25nb29zZV9yZWNvcmRfcmVwbGF5JztcclxuaW1wb3J0ICogYXMgcHJvY2VzcyBmcm9tICdwcm9jZXNzJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTW9kZWwgYXMgTW9kZWwsIElGTW9kZWwgYXMgSUZNb2RlbCB9IGZyb20gJ21nbmxxX21vZGVsJztcclxuXHJcbnZhciBtb2RlID0gJ1JFUExBWSc7XHJcbmlmIChwcm9jZXNzLmVudltDb25zdGFudHMuRU5WX05BTUVfTU9OR09fUkVDT1JEX1JFUExBWV0gPT09IFwiUkVDT1JEXCIpIHtcclxuICBtb2RlID0gJ1JFQ09SRCc7XHJcbn0gZWxzZSBpZiAocHJvY2Vzcy5lbnZbQ29uc3RhbnRzLkVOVl9OQU1FX01PTkdPX1JFQ09SRF9SRVBMQVldID09PSBcIk9GRlwiKSB7XHJcbiAgbW9kZSA9IHVuZGVmaW5lZDtcclxufSBlbHNlIGlmICggIXByb2Nlc3MuZW52W0NvbnN0YW50cy5FTlZfTkFNRV9NT05HT19SRUNPUkRfUkVQTEFZXVxyXG4gfHwgcHJvY2Vzcy5lbnZbQ29uc3RhbnRzLkVOVl9OQU1FX01PTkdPX1JFQ09SRF9SRVBMQVldID09PSBcIlJFUExBWVwiKSB7XHJcbiAgbW9kZSA9ICdSRVBMQVknO1xyXG59IGVsc2UgIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoYGlsbGVnYWwgdmFsdWUgJHtwcm9jZXNzLmVudltDb25zdGFudHMuRU5WX05BTUVfTU9OR09fUkVDT1JEX1JFUExBWV19ICBmb3IgJHsgQ29uc3RhbnRzLkVOVl9OQU1FX01PTkdPX1JFQ09SRF9SRVBMQVkgfSwgZXB4ZWN0ZWQgb25lIG9mIFwiUkVQTEFZXCIsIFwiUkVDT1JEXCIsIFwiT0ZGXCIgb3Igbm90IHNldGApO1xyXG59XHJcblxyXG52YXIgbXlwYXRoID0gQ29uc3RhbnRzLk1PTkdPT1NFX1JFQ09SRF9SRVBMQVlfRk9MREVSO1xyXG5cclxudmFyIG1vbmdvb3NlTW9jayA9IG1vbmdvb3NlX3JlY29yZF9yZXBsYXkuaW5zdHJ1bWVudE1vbmdvb3NlKG1vbmdvb3NlLFxyXG4gIG15cGF0aCwgLy8gJ25vZGVfbW9kdWxlcy9tZ25scV90ZXN0bW9kZWxfcmVwbGF5L21ncmVjcmVwLycsXHJcbiAgbW9kZSk7XHJcblxyXG52YXIgYVByb21pc2UgPSB1bmRlZmluZWQ7XHJcblxyXG5mdW5jdGlvbiBsb2FkTW9kZWwoKSA6IFByb21pc2U8SUZNb2RlbC5JTW9kZWxzPiB7XHJcbiAgcmV0dXJuIE1vZGVsLmxvYWRNb2RlbHNPcGVuaW5nQ29ubmVjdGlvbihtb25nb29zZU1vY2ssIENvbnN0YW50cy5NT05HT19EQlVSTCwgQ29uc3RhbnRzLk1PREVMX1BBVEgpO1xyXG59XHJcbi8qKlxyXG4gKiBPYnRhaW4gYSBtb2RlbCBpbnN0YW5jZSxcclxuICpcclxuICogbm90ZTogdGhlIG1vZGVsIG11c3QgYmUgY2xvc2VkIHZpYVxyXG4gKiBNb2RlbC5yZWxlYXNlTW9kZWwodGhlTW9kZWxJbnN0YW5jZSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXN0TW9kZWwoKTogUHJvbWlzZTxJRk1vZGVsLklNb2RlbHM+IHtcclxuICBpZiAobW9kZSA9PT0gJ1JFUExBWScpIHtcclxuICAgIC8vIGRldGVybWluZSBtb2RlXHJcbiAgICAvLyBpbiByZXBsYXggbW9kZSwgdXNpbmcgYSBzaW5nbGV0b24gaXMgc3VmZmljaWVudFxyXG4gICAgYVByb21pc2UgPSBhUHJvbWlzZSB8fCBsb2FkTW9kZWwoKTtcclxuICAgIHJldHVybiBhUHJvbWlzZTtcclxuICB9XHJcbiAgcmV0dXJuIGxvYWRNb2RlbCgpO1xyXG59Il19
