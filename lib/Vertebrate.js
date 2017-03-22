'use strict';

var Bilateral = require('./Bilateral.js');

export default class Mollusk extends Bilateral {

  constructor (name){
    super(name, "vertebral-column");
    this._name = name;
  }

}