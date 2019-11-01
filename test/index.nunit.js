/*! copyright gerd forstmann, all rights reserved */
//var debug = require('debugf')('index.nunit');

var TMRep = require('../js/getmodel.js');
var Model = require('mgnlq_model').Model;

exports.testgetModel = function(test) {
  TMRep.getTestModel().then( theModel => {
    test.deepEqual(theModel.domains, [ 'Cosmos',
      'demomdls',
      'FioriBOM',
      'Fiori Backend Catalogs',
      'IUPAC',
      'metamodel',
      'Philosophers elements',
      'SAP Transaction Codes',
      'SOBJ Tables' ]);

    test.done();
    Model.releaseModel(theModel);
  });
};
