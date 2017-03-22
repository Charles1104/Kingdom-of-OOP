'use strict';

var Bilateral = require('./Bilateral.js');

export default class Mollusk extends Bilateral {

  constructor (name){
    super(name, "soft-bodied");
    this._name = name;
  }

}