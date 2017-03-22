'use strict';

var Eukaryota = require('./Eukaryota.js');

export default class Protista extends Eukaryota {

  constructor (name){
    super(name, false, true, false, false);
    this._name = name;
  }

}