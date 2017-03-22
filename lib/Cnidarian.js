'use strict';

var Animal = require('./Animal.js');

export default class Cnidarian extends Animal {

  constructor (name){
    super(name, "radial");
    this._name = name;
  }

}