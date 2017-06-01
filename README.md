# mgnlq_testmodel_replay [![Build Status](https://travis-ci.org/jfseb/mgnlq_testmodel_replay.svg?branch=master)](https://travis-ci.org/jfseb/mgnql_abot)[![Coverage Status](https://coveralls.io/repos/github/jfseb/mgnlq_testmodel_replay/badge.svg)](https://coveralls.io/github/jfseb/mgnql_testmodel_replay)

The mongo testmodel replay files
and an hard coded instantiation hook assuming:

Property | Value (hard coded!)
--------------------------------------
Mongo DB Connection string  |  'mongodb://localhost/testdb'
--------------|-----------------------
data Folder        | mgrecrep/


Note: in default mode no mongo connection is established and REPLAY mode is on.
(see [mongoose_record_replay](https://travis-ci.org/jfseb/mongoose_record_replay))

# usage

## plain hook:
```javscript
    const Model = require('mgnlq_model');

    require('mgnlq_testmodel_replay').getTestModel().then( theModel =>
        {
            // your code using theModel
            Model.releaseModel(theModel);
        }
    );

```

## just use file storage.
```
    var mongooseMock = require('mongoose_record_replay').instrumentMongoose(require('mongoose'),
        'node_modules/mgnlq_testmodel_replay/mgrecrep/',
        mode);
    var aPromise = undefined;
    function getModel() {
        if(mode === 'REPLAY') {
            // in replay mode during testing, using a singleton is sufficient
            aPromise = aPromise || Model.loadModelsOpeningConnection(mongooseMock,'mongodb://localhost/testdb'  );
            return aPromise;
    }
    // open a real connection, which has to be closed
    return Model.loadModelsOpeningConnection(mongooseMock, 'mongodb://localhost/testdb');
}

```

# environment Switching to Record mode ...
environment variable
MGNLQ_TESTMODEL_REPLAY
control the mode.

1. REPLAY (default)
2. REPLAY
3. OFF



Beware: the underlying model uses a caching mechanism, thus it attempts to write to
folders.

Similar, in RECORD mode, mgrecrep/queries.json and mgrecrep/data may be extened with new files.


# Tasks to maintain the model
## Rebuilding the model from scratch (raw files)
  todo

## Updating the queries
  todo