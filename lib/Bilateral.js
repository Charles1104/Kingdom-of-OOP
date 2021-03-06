'use strict';

var Animal = require('./Animal.js');

export default class Cnidarian extends Animal {

  constructor (name, body){
    super(name, "bilateral");
    this._name = name;
    this._body = body;
  }

  get body() {
    return this._body;

  }

  set body (body) {
    this._body = body;
  }

}