'use strict';
(function (){

  function Contador() {
    this._cuenta = 0;
  }

  Contador.prototype.total = function (){
    return this._cuenta;
  };

  Contador.prototype.click = function (){
    this._cuenta++;
  };

  angular.module('angularJsmadridServiciosApp')
    .service('Contador', Contador);
}());
