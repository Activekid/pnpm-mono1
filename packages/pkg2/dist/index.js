(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["web-see"] = factory());
})(this, (function () { 'use strict';

  // import {pk1} from '@lizhiweinpm/pk1'
  function pk2() {
      //  pk1()
      console.log('I am pk2');
  }

  return pk2;

}));
//# sourceMappingURL=index.js.map
