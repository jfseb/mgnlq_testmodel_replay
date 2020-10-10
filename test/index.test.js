/*! copyright gerd forstmann, all rights reserved */
//var debug = require('debugf')('index.nunit');

var TMRep = require('../js/getmodel.js');
var Model = require('mgnlq_model').Model;

it('testgetModel', done => {
  TMRep.getTestModel().then( theModel => {
    expect(theModel.domains).toEqual([ 'Cosmos',
      'demomdls',
      'FioriBOM',
      'Fiori Backend Catalogs',
      'IUPAC',
      'metamodel',
      'Philosophers elements',
      'SAP Transaction Codes',
      'SOBJ Tables' ]);

    done();
    Model.releaseModel(theModel);
  });
});
