'use strict';

var Eukaryota = require('./Eukaryota.js');

export default class Protista extends Eukaryota {

  constructor (name, symmetry){
    super(name, false, false, true, true);
    this._name = name;
    this._symmetry = symmetry;
  }

  get symmetry() {
    return this._symmetry;

  }

  set symmetry (symmetry) {
    this._symmetry = symmetry;
  }

}