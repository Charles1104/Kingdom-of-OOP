'use strict';

var Eukaryota = require('./Eukaryota.js');

export default class Fungi extends Eukaryota {

  constructor (name){
    super(name, false, true, false, true);
    this._name = name;
  }

}