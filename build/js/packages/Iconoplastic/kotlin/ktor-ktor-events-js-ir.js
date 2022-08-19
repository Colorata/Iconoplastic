(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-events-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-events-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-events-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-events-js-ir'.");
    }
    root['ktor-ktor-events-js-ir'] = factory(typeof this['ktor-ktor-events-js-ir'] === 'undefined' ? {} : this['ktor-ktor-events-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var LinkedListNode = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var classMeta = kotlin_kotlin.$_$.q5;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.f;
  var equals = kotlin_kotlin.$_$.s5;
  var THROW_CCE = kotlin_kotlin.$_$.b8;
  var addSuppressed = kotlin_kotlin.$_$.e8;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  //endregion
  //region block: pre-declaration
  HandlerRegistration.prototype = Object.create(LinkedListNode.prototype);
  HandlerRegistration.prototype.constructor = HandlerRegistration;
  //endregion
  function HandlerRegistration() {
  }
  HandlerRegistration.prototype.j20 = function () {
    return this.i20_1;
  };
  HandlerRegistration.$metadata$ = classMeta('HandlerRegistration', [DisposableHandle], undefined, undefined, undefined, LinkedListNode.prototype);
  function Events() {
    this.k20_1 = new CopyOnWriteHashMap();
  }
  Events.prototype.l20 = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.k20_1.b2(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      {
        var cur = tmp0_safe_receiver.ds();
        while (!equals(cur, tmp0_safe_receiver)) {
          if (cur instanceof HandlerRegistration) {
            var tmp0__anonymous__q1qw7t = cur;
            try {
              var tmp = tmp0__anonymous__q1qw7t.i20_1;
              (typeof tmp === 'function' ? tmp : THROW_CCE())(value);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver_0 = exception;
                var tmp_0;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_0 = null;
                } else {
                  addSuppressed(tmp0_safe_receiver_0, $p);
                  tmp_0 = Unit_getInstance();
                }
                var tmp1_elvis_lhs = tmp_0;
                if (tmp1_elvis_lhs == null) {
                  var tmp$ret$0;
                  {
                    {
                    }
                    exception = $p;
                    tmp$ret$0 = Unit_getInstance();
                  }
                } else {
                }
              } else {
                throw $p;
              }
            }
          }
          cur = cur.as_1;
        }
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp1_safe_receiver;
      }
    }
  };
  Events.$metadata$ = classMeta('Events');
  function EventDefinition() {
  }
  EventDefinition.$metadata$ = classMeta('EventDefinition');
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventDefinition;
  _.$_$.b = Events;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-events-js-ir.js.map