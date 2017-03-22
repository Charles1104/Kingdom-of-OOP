'use strict';

var Bilateral = require('./Bilateral.js');

export default class Mollusk extends Bilateral {

  constructor (name){
    super(name, "exoskeleton");
    this._name = name;
  }

}