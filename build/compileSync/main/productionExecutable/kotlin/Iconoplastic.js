(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin_org_jetbrains_kotlinx_kotlinx_html.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_html.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Iconoplastic'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'Iconoplastic'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_html === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_html' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_html' is loaded prior to 'Iconoplastic'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'Iconoplastic'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'Iconoplastic'.");
    }
    root.Iconoplastic = factory(typeof Iconoplastic === 'undefined' ? {} : Iconoplastic, this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], kotlin_org_jetbrains_kotlinx_kotlinx_html, this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_html, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.a6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l5;
  var split$default = kotlin_kotlin.$_$.m;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w3;
  var mapCapacity = kotlin_kotlin.$_$.t4;
  var coerceAtLeast = kotlin_kotlin.$_$.o7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var Companion_getInstance = kotlin_kotlin.$_$.z2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var charArrayOf = kotlin_kotlin.$_$.j6;
  var split$default_0 = kotlin_kotlin.$_$.l;
  var to = kotlin_kotlin.$_$.u9;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w1;
  var createFailure = kotlin_kotlin.$_$.j9;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.z1;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var isObject = kotlin_kotlin.$_$.e7;
  var toMap = kotlin_kotlin.$_$.g5;
  var classMeta = kotlin_kotlin.$_$.o6;
  var Unit_getInstance = kotlin_kotlin.$_$.e3;
  var attributesMapOf = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.l;
  var DIV = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var attributesMapOf_0 = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.k;
  var IMG = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.g;
  var SPAN = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.i;
  var enumEncode = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.a;
  var INPUT = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.h;
  var set_id = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.n;
  var set_onChangeFunction = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.c;
  var set_onKeyUpFunction = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.e;
  var toInt = kotlin_kotlin.$_$.e8;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u1;
  var numberToChar = kotlin_kotlin.$_$.i7;
  var toString = kotlin_kotlin.$_$.v1;
  var STYLE = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.j;
  var append = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.b;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var isInterface = kotlin_kotlin.$_$.c7;
  var get_id = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.m;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var contains$default = kotlin_kotlin.$_$.h;
  var SuspendFunction1 = kotlin_kotlin.$_$.b6;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var List = kotlin_kotlin.$_$.n3;
  var getKClass = kotlin_kotlin.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.v2;
  var arrayOf = kotlin_kotlin.$_$.h9;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var emptyList = kotlin_kotlin.$_$.j4;
  var set_onClickFunction = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.d;
  var replace$default = kotlin_kotlin.$_$.k;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.m6;
  var charSequenceGet = kotlin_kotlin.$_$.l6;
  var uppercaseChar = kotlin_kotlin.$_$.n8;
  var plus = kotlin_kotlin.$_$.x4;
  var plus_0 = kotlin_kotlin.$_$.r9;
  var minus = kotlin_kotlin.$_$.v4;
  //endregion
  //region block: pre-declaration
  $getCodepointsCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $getCodepointsCOROUTINE$0.prototype.constructor = $getCodepointsCOROUTINE$0;
  sayHello$slambda.prototype = Object.create(CoroutineImpl.prototype);
  sayHello$slambda.prototype.constructor = sayHello$slambda;
  //endregion
  function $getCodepointsCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1o_1 = _this__u8e3s4;
  }
  $getCodepointsCOROUTINE$0.prototype.ci = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            this.sh_1 = 1;
            suspendResult = await_0(window.fetch(this.s1o_1.v1o_1 + '/download/codepoints'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t1o_1 = suspendResult;
            this.u1o_1 = this.t1o_1.text();
            this.sh_1 = 2;
            suspendResult = await_0(this.u1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var response = suspendResult;
            console.log(response);
            var tmp0_associate = split$default(response, ['\n'], false, 0, 6, null);
            var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associate, 10)), 16);
            var tmp1_associateTo = LinkedHashMap_init_$Create$(capacity);
            var tmp0_iterator = tmp0_associate.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              var tmp$ret$0;
              l$ret$1: do {
                var tmp_0;
                try {
                  var tmp0_success = Companion_getInstance();
                  var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(32)]);
                  var final = split$default_0(element, tmp_1, false, 0, 6, null);
                  var tmp1_success = to(final.h(0), final.h(1));
                  tmp_0 = _Result___init__impl__xyqfz8(tmp1_success);
                } catch ($p) {
                  var tmp_2;
                  if ($p instanceof Error) {
                    var tmp2_failure = Companion_getInstance();
                    tmp_2 = _Result___init__impl__xyqfz8(createFailure($p));
                  } else {
                    throw $p;
                  }
                  tmp_0 = tmp_2;
                }
                var tmp0_getOrDefault = tmp_0;
                var tmp1_getOrDefault = to('10mp', 'E8B8');
                if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrDefault)) {
                  tmp$ret$0 = tmp1_getOrDefault;
                  break l$ret$1;
                }
                var tmp_3 = _Result___get_value__impl__bjfvqg(tmp0_getOrDefault);
                tmp$ret$0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
              }
               while (false);
              var tmp0_plusAssign = tmp$ret$0;
              tmp1_associateTo.a(tmp0_plusAssign.x2_1, tmp0_plusAssign.y2_1);
            }

            return toMap(tmp1_associateTo);
          case 3:
            throw this.vh_1;
        }
      } catch ($p) {
        if (this.th_1 === 3) {
          throw $p;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = $p;
        }
      }
     while (true);
  };
  $getCodepointsCOROUTINE$0.$metadata$ = classMeta('$getCodepointsCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Api() {
    this.v1o_1 = 'https://iconoplastic-api.herokuapp.com/';
  }
  Api.prototype.w1o = function ($cont) {
    var tmp = new $getCodepointsCOROUTINE$0(this, $cont);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.ci();
  };
  Api.$metadata$ = classMeta('Api');
  function main() {
    var tmp = window;
    tmp.onload = main$lambda();
  }
  function sayHello(_this__u8e3s4) {
    var response = {_v: null};
    var tmp$ret$17;
    {
      var tmp$ret$16;
      {
        var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'row'), _this__u8e3s4);
        var tmp$ret$15;
        {
          if (!(tmp0_visitAndFinalize.bj() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize.bj().ij(tmp0_visitAndFinalize);
            try {
              {
                {
                  var tmp = CoroutineScope(Dispatchers_getInstance().qw_1);
                  launch$default(tmp, null, null, sayHello$slambda_0(response, null), 3, null);
                  var tmp$ret$14;
                  {
                    var tmp$ret$13;
                    {
                      var tmp0_visit = new DIV(attributesMapOf('class', 'column'), tmp0_visitAndFinalize.bj());
                      tmp0_visit.bj().ij(tmp0_visit);
                      var tmp_0;
                      try {
                        var tmp$ret$2;
                        {
                          var tmp$ret$1;
                          {
                            var tmp0_visit_0 = new IMG(attributesMapOf_0(['alt', null, 'src', null, 'class', 'logo']), tmp0_visit.bj());
                            tmp0_visit_0.bj().ij(tmp0_visit_0);
                            var tmp_1;
                            try {
                              var tmp$ret$0;
                              {
                                tmp$ret$0 = Unit_getInstance();
                              }
                              tmp_1 = tmp$ret$0;
                            } catch ($p) {
                              var tmp_2;
                              if ($p instanceof Error) {
                                tmp_2 = tmp0_visit_0.bj().mj(tmp0_visit_0, $p);
                              } else {
                                throw $p;
                              }
                              tmp_1 = tmp_2;
                            }
                            finally {
                              tmp0_visit_0.bj().lj(tmp0_visit_0);
                            }
                            tmp$ret$1 = tmp_1;
                          }
                          tmp$ret$2 = tmp$ret$1;
                        }
                        var tmp$ret$10;
                        {
                          var tmp$ret$9;
                          {
                            var tmp0_visit_1 = new DIV(attributesMapOf('class', 'search-box search-row'), tmp0_visit.bj());
                            tmp0_visit_1.bj().ij(tmp0_visit_1);
                            var tmp_3;
                            try {
                              var tmp$ret$4;
                              {
                                var tmp$ret$3;
                                {
                                  var tmp0_visit_2 = new SPAN(attributesMapOf('class', 'search-icon'), tmp0_visit_1.bj());
                                  tmp0_visit_2.bj().ij(tmp0_visit_2);
                                  var tmp_4;
                                  try {
                                    tmp_4 = tmp0_visit_2.fj('\uE8B6');
                                  } catch ($p) {
                                    var tmp_5;
                                    if ($p instanceof Error) {
                                      tmp_5 = tmp0_visit_2.bj().mj(tmp0_visit_2, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_4 = tmp_5;
                                  }
                                  finally {
                                    tmp0_visit_2.bj().lj(tmp0_visit_2);
                                  }
                                  tmp$ret$3 = tmp_4;
                                }
                                tmp$ret$4 = tmp$ret$3;
                              }
                              var tmp$ret$8;
                              {
                                var tmp$ret$7;
                                {
                                  var tmp0_visit_3 = new SPAN(attributesMapOf('class', null), tmp0_visit_1.bj());
                                  tmp0_visit_3.bj().ij(tmp0_visit_3);
                                  var tmp_6;
                                  try {
                                    var tmp$ret$6;
                                    {
                                      var tmp$ret$5;
                                      {
                                        var tmp0_safe_receiver = null;
                                        var tmp_7 = tmp0_safe_receiver == null ? null : enumEncode(tmp0_safe_receiver);
                                        var tmp1_safe_receiver = null;
                                        var tmp_8 = tmp1_safe_receiver == null ? null : enumEncode(tmp1_safe_receiver);
                                        var tmp2_safe_receiver = null;
                                        var tmp0_visit_4 = new INPUT(attributesMapOf_0(['type', tmp_7, 'formenctype', tmp_8, 'formmethod', tmp2_safe_receiver == null ? null : enumEncode(tmp2_safe_receiver), 'name', null, 'class', 'search']), tmp0_visit_3.bj());
                                        tmp0_visit_4.bj().ij(tmp0_visit_4);
                                        var tmp_9;
                                        try {
                                          tmp0_visit_4.mn('Search icons');
                                          set_id(tmp0_visit_4, 'search-field');
                                          var onChange = sayHello$lambda(tmp0_visit_4, response);
                                          set_onChangeFunction(tmp0_visit_4, sayHello$lambda_0(onChange));
                                          tmp_9 = set_onKeyUpFunction(tmp0_visit_4, sayHello$lambda_1(onChange));
                                        } catch ($p) {
                                          var tmp_10;
                                          if ($p instanceof Error) {
                                            tmp_10 = tmp0_visit_4.bj().mj(tmp0_visit_4, $p);
                                          } else {
                                            throw $p;
                                          }
                                          tmp_9 = tmp_10;
                                        }
                                        finally {
                                          tmp0_visit_4.bj().lj(tmp0_visit_4);
                                        }
                                        tmp$ret$5 = tmp_9;
                                      }
                                      tmp$ret$6 = tmp$ret$5;
                                    }
                                    tmp_6 = tmp$ret$6;
                                  } catch ($p) {
                                    var tmp_11;
                                    if ($p instanceof Error) {
                                      tmp_11 = tmp0_visit_3.bj().mj(tmp0_visit_3, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_6 = tmp_11;
                                  }
                                  finally {
                                    tmp0_visit_3.bj().lj(tmp0_visit_3);
                                  }
                                  tmp$ret$7 = tmp_6;
                                }
                                tmp$ret$8 = tmp$ret$7;
                              }
                              tmp_3 = tmp$ret$8;
                            } catch ($p) {
                              var tmp_12;
                              if ($p instanceof Error) {
                                tmp_12 = tmp0_visit_1.bj().mj(tmp0_visit_1, $p);
                              } else {
                                throw $p;
                              }
                              tmp_3 = tmp_12;
                            }
                            finally {
                              tmp0_visit_1.bj().lj(tmp0_visit_1);
                            }
                            tmp$ret$9 = tmp_3;
                          }
                          tmp$ret$10 = tmp$ret$9;
                        }
                        var tmp$ret$12;
                        {
                          var tmp$ret$11;
                          {
                            var tmp0_visit_5 = new DIV(attributesMapOf('class', 'grid'), tmp0_visit.bj());
                            tmp0_visit_5.bj().ij(tmp0_visit_5);
                            var tmp_13;
                            try {
                              tmp_13 = set_id(tmp0_visit_5, 'grid-icons');
                            } catch ($p) {
                              var tmp_14;
                              if ($p instanceof Error) {
                                tmp_14 = tmp0_visit_5.bj().mj(tmp0_visit_5, $p);
                              } else {
                                throw $p;
                              }
                              tmp_13 = tmp_14;
                            }
                            finally {
                              tmp0_visit_5.bj().lj(tmp0_visit_5);
                            }
                            tmp$ret$11 = tmp_13;
                          }
                          tmp$ret$12 = tmp$ret$11;
                        }
                        tmp_0 = tmp$ret$12;
                      } catch ($p) {
                        var tmp_15;
                        if ($p instanceof Error) {
                          tmp_15 = tmp0_visit.bj().mj(tmp0_visit, $p);
                        } else {
                          throw $p;
                        }
                        tmp_0 = tmp_15;
                      }
                      finally {
                        tmp0_visit.bj().lj(tmp0_visit);
                      }
                      tmp$ret$13 = tmp_0;
                    }
                    tmp$ret$14 = tmp$ret$13;
                  }
                }
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp0_visitAndFinalize.bj().mj(tmp0_visitAndFinalize, $p);
              } else {
                throw $p;
              }
            }
            finally {
              tmp0_visitAndFinalize.bj().lj(tmp0_visitAndFinalize);
            }
          }
          tmp$ret$15 = _this__u8e3s4.nj();
        }
        tmp$ret$16 = tmp$ret$15;
      }
      tmp$ret$17 = tmp$ret$16;
    }
  }
  function toSymbol(_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp0_Char = toInt(_this__u8e3s4, 16);
      var tmp;
      var tmp$ret$0;
      {
        Companion_getInstance_0();
        var tmp0__get_code__88qj9g = _Char___init__impl__6a9atx(0);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
      }
      if (tmp0_Char < tmp$ret$0) {
        tmp = true;
      } else {
        var tmp$ret$1;
        {
          Companion_getInstance_0();
          var tmp1__get_code__adl84j = _Char___init__impl__6a9atx(65535);
          tmp$ret$1 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
        }
        tmp = tmp0_Char > tmp$ret$1;
      }
      if (tmp) {
        throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + tmp0_Char);
      }
      tmp$ret$2 = numberToChar(tmp0_Char);
    }
    return toString(tmp$ret$2);
  }
  function main$lambda$lambda() {
    return function ($this$append) {
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp0_visitAndFinalize = new STYLE(attributesMapOf('type', null), $this$append);
          var tmp$ret$1;
          {
            if (!(tmp0_visitAndFinalize.bj() === $this$append)) {
              throw IllegalArgumentException_init_$Create$('Wrong exception');
            }
            {
              tmp0_visitAndFinalize.bj().ij(tmp0_visitAndFinalize);
              try {
                {
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = Unit_getInstance();
                  }
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp0_visitAndFinalize.bj().mj(tmp0_visitAndFinalize, $p);
                } else {
                  throw $p;
                }
              }
              finally {
                tmp0_visitAndFinalize.bj().lj(tmp0_visitAndFinalize);
              }
            }
            tmp$ret$1 = $this$append.nj();
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      sayHello($this$append);
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda_0() {
    return function ($this$append) {
      return Unit_getInstance();
    };
  }
  function main$lambda() {
    return function (it) {
      var tmp0_safe_receiver = document.body;
      if (tmp0_safe_receiver == null)
        null;
      else {
        append(tmp0_safe_receiver, main$lambda$lambda());
      }
      var tmp1_safe_receiver = document.head;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = append(tmp1_safe_receiver, main$lambda$lambda_0());
      }
      return tmp;
    };
  }
  function sayHello$slambda$lambda($element) {
    return function ($this$append) {
      GridItem($this$append, $element);
      return Unit_getInstance();
    };
  }
  function sayHello$slambda($response, resultContinuation) {
    this.f1p_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  sayHello$slambda.prototype.h1p = function ($this$launch, $cont) {
    var tmp = this.i1p($this$launch, $cont);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.ci();
  };
  sayHello$slambda.prototype.di = function (p1, $cont) {
    return this.h1p((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  sayHello$slambda.prototype.ci = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 2;
            this.sh_1 = 1;
            suspendResult = (new Api()).w1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.f1p_1._v = ARGUMENT;
            var grid = document.getElementById('grid-icons');
            var tmp0_safe_receiver = this.f1p_1._v;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_iterator = tmp0_safe_receiver.o().d();
              while (tmp0_iterator.e()) {
                var element = tmp0_iterator.f();
                var tmp0_safe_receiver_0 = grid;
                if (tmp0_safe_receiver_0 == null)
                  null;
                else {
                  append(tmp0_safe_receiver_0, sayHello$slambda$lambda(element));
                }
              }
            }

            ;
            return Unit_getInstance();
          case 2:
            throw this.vh_1;
        }
      } catch ($p) {
        if (this.th_1 === 2) {
          throw $p;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = $p;
        }
      }
     while (true);
  };
  sayHello$slambda.prototype.i1p = function ($this$launch, completion) {
    var i = new sayHello$slambda(this.f1p_1, completion);
    i.g1p_1 = $this$launch;
    return i;
  };
  sayHello$slambda.$metadata$ = classMeta('sayHello$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sayHello$slambda_0($response, resultContinuation) {
    var i = new sayHello$slambda($response, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.h1p($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sayHello$lambda$lambda($element) {
    return function ($this$append) {
      GridItem($this$append, $element);
      return Unit_getInstance();
    };
  }
  function sayHello$lambda($tmp0_visit, $response) {
    return function () {
      var grid = document.getElementById('grid-icons');
      var tmp = document.getElementById(get_id($tmp0_visit));
      var search = (tmp instanceof HTMLInputElement ? tmp : THROW_CCE()).value;
      var tmp0_safe_receiver = $response._v;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp0_filterTo = LinkedHashMap_init_$Create$_0();
            var tmp$ret$0;
            {
              tmp$ret$0 = tmp0_safe_receiver.o().d();
            }
            var tmp0_iterator = tmp$ret$0;
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              var tmp$ret$1;
              {
                var tmp_1;
                var tmp_2 = element.p1();
                if (contains$default(tmp_2, search, false, 2, null)) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element.r1();
                  tmp_1 = contains$default(tmp_3, search, false, 2, null);
                }
                tmp$ret$1 = tmp_1;
              }
              if (tmp$ret$1) {
                tmp0_filterTo.a(element.p1(), element.r1());
              }
            }
            tmp$ret$2 = tmp0_filterTo;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        tmp_0 = tmp$ret$3;
      }
      var filtered = tmp_0;
      var tmp1_safe_receiver = $response._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = tmp1_safe_receiver.o().d();
          }
          var tmp0_iterator_0 = tmp$ret$4;
          while (tmp0_iterator_0.e()) {
            var element_0 = tmp0_iterator_0.f();
            {
              var tmp0_safe_receiver_0 = document.getElementById('grid-item-' + element_0.p1());
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                tmp0_safe_receiver_0.remove();
              }
            }
          }
        }
      }
      var tmp2_safe_receiver = filtered;
      var tmp_4;
      if (tmp2_safe_receiver == null) {
        tmp_4 = null;
      } else {
        {
          var tmp$ret$5;
          {
            tmp$ret$5 = tmp2_safe_receiver.o().d();
          }
          var tmp0_iterator_1 = tmp$ret$5;
          while (tmp0_iterator_1.e()) {
            var element_1 = tmp0_iterator_1.f();
            {
              var tmp0_safe_receiver_1 = grid;
              if (tmp0_safe_receiver_1 == null)
                null;
              else {
                append(tmp0_safe_receiver_1, sayHello$lambda$lambda(element_1));
              }
            }
          }
        }
        tmp_4 = Unit_getInstance();
      }
      return tmp_4;
    };
  }
  function sayHello$lambda_0($onChange) {
    return function (it) {
      $onChange();
      return Unit_getInstance();
    };
  }
  function sayHello$lambda_1($onChange) {
    return function (it) {
      $onChange();
      return Unit_getInstance();
    };
  }
  var _selectedListStorage;
  function set_selectedListStorage(value) {
    _selectedListStorage = value;
    {
      var tmp1_set = localStorage;
      var tmp$ret$2;
      {
        var tmp0_encodeToString = Default_getInstance();
        var tmp$ret$1;
        {
          var tmp1_serializer = tmp0_encodeToString.sz();
          var tmp$ret$0;
          {
            var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ye(), arrayOf([]), false))]), false));
            tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp0_encodeToString.qz(tmp$ret$1, value);
      }
      var tmp2_set = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = tmp1_set;
      }
      tmp$ret$3['selectedList'] = tmp2_set;
    }
  }
  function get_selectedListStorage() {
    if (_selectedListStorage == null) {
      var tmp$ret$1;
      {
        var tmp0_get = localStorage;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_get;
        }
        tmp$ret$1 = tmp$ret$0['selectedList'];
      }
      var tmp0_safe_receiver = tmp$ret$1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$6;
        {
          {
          }
          var tmp$ret$5;
          {
            var tmp$ret$4;
            {
              var tmp0_decodeFromString = Default_getInstance();
              var tmp$ret$3;
              {
                var tmp1_serializer = tmp0_decodeFromString.sz();
                var tmp$ret$2;
                {
                  var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ye(), arrayOf([]), false))]), true));
                  tmp$ret$2 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp$ret$4 = tmp0_decodeFromString.rz(tmp$ret$3, tmp0_safe_receiver);
            }
            tmp$ret$5 = tmp$ret$4;
          }
          tmp$ret$6 = tmp$ret$5;
        }
        tmp = tmp$ret$6;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$7;
        {
          tmp$ret$7 = emptyList();
        }
        tmp_0 = tmp$ret$7;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      _selectedListStorage = tmp_0;
    }
    var tmp_1 = _selectedListStorage;
    return (!(tmp_1 == null) ? isInterface(tmp_1, List) : false) ? tmp_1 : THROW_CCE();
  }
  function GridItem(_this__u8e3s4, item) {
    var tmp$ret$6;
    {
      var tmp0_div = 'grid-item column' + (get_selectedListStorage().g1(item.p1()) ? ' active' : '');
      var tmp$ret$5;
      {
        var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', tmp0_div), _this__u8e3s4);
        var tmp$ret$4;
        {
          if (!(tmp0_visitAndFinalize.bj() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize.bj().ij(tmp0_visitAndFinalize);
            try {
              {
                {
                  set_id(tmp0_visitAndFinalize, 'grid-item-' + item.p1());
                  set_onClickFunction(tmp0_visitAndFinalize, GridItem$lambda(item));
                  var tmp$ret$1;
                  {
                    var tmp$ret$0;
                    {
                      var tmp0_visit = new SPAN(attributesMapOf('class', 'icon'), tmp0_visitAndFinalize.bj());
                      tmp0_visit.bj().ij(tmp0_visit);
                      var tmp;
                      try {
                        tmp = tmp0_visit.fj(toSymbol(item.r1()));
                      } catch ($p) {
                        var tmp_0;
                        if ($p instanceof Error) {
                          tmp_0 = tmp0_visit.bj().mj(tmp0_visit, $p);
                        } else {
                          throw $p;
                        }
                        tmp = tmp_0;
                      }
                      finally {
                        tmp0_visit.bj().lj(tmp0_visit);
                      }
                      tmp$ret$0 = tmp;
                    }
                    tmp$ret$1 = tmp$ret$0;
                  }
                  var tmp$ret$3;
                  {
                    var tmp$ret$2;
                    {
                      var tmp0_visit_0 = new SPAN(attributesMapOf('class', 'grid-item-span'), tmp0_visitAndFinalize.bj());
                      tmp0_visit_0.bj().ij(tmp0_visit_0);
                      var tmp_1;
                      try {
                        var tmp_2 = item.p1();
                        var tmp_3 = replace$default(tmp_2, '_', ' ', false, 4, null);
                        var tmp_4 = split$default(tmp_3, [' '], false, 0, 6, null);
                        var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, GridItem$lambda_0(), 31, null);
                        tmp_1 = tmp0_visit_0.fj(replace$default(tmp_5, ',', '', false, 4, null));
                      } catch ($p) {
                        var tmp_6;
                        if ($p instanceof Error) {
                          tmp_6 = tmp0_visit_0.bj().mj(tmp0_visit_0, $p);
                        } else {
                          throw $p;
                        }
                        tmp_1 = tmp_6;
                      }
                      finally {
                        tmp0_visit_0.bj().lj(tmp0_visit_0);
                      }
                      tmp$ret$2 = tmp_1;
                    }
                    tmp$ret$3 = tmp$ret$2;
                  }
                }
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp0_visitAndFinalize.bj().mj(tmp0_visitAndFinalize, $p);
              } else {
                throw $p;
              }
            }
            finally {
              tmp0_visitAndFinalize.bj().lj(tmp0_visitAndFinalize);
            }
          }
          tmp$ret$4 = _this__u8e3s4.nj();
        }
        tmp$ret$5 = tmp$ret$4;
      }
      tmp$ret$6 = tmp$ret$5;
    }
  }
  function GridItem$lambda$lambda$lambda() {
    return function (value) {
      var tmp$ret$5;
      {
        var tmp;
        var tmp$ret$0;
        {
          tmp$ret$0 = charSequenceLength(value) > 0;
        }
        if (tmp$ret$0) {
          var tmp$ret$4;
          {
            var tmp$ret$1;
            {
              var tmp0__anonymous__q1qw7t = charSequenceGet(value, 0);
              tmp$ret$1 = uppercaseChar(tmp0__anonymous__q1qw7t);
            }
            var tmp0_plus = tmp$ret$1;
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                tmp$ret$2 = value;
              }
              tmp$ret$3 = tmp$ret$2.substring(1);
            }
            var tmp1_plus = tmp$ret$3;
            tmp$ret$4 = toString(tmp0_plus) + tmp1_plus;
          }
          tmp = tmp$ret$4;
        } else {
          tmp = value;
        }
        tmp$ret$5 = tmp;
      }
      return tmp$ret$5;
    };
  }
  function GridItem$lambda$lambda($item) {
    return function ($this$append) {
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'row'), $this$append);
          var tmp$ret$4;
          {
            if (!(tmp0_visitAndFinalize.bj() === $this$append)) {
              throw IllegalArgumentException_init_$Create$('Wrong exception');
            }
            {
              tmp0_visitAndFinalize.bj().ij(tmp0_visitAndFinalize);
              try {
                {
                  {
                    set_id(tmp0_visitAndFinalize, 'selected-item-' + $item.p1());
                    var tmp$ret$1;
                    {
                      var tmp$ret$0;
                      {
                        var tmp0_visit = new SPAN(attributesMapOf('class', 'icon'), tmp0_visitAndFinalize.bj());
                        tmp0_visit.bj().ij(tmp0_visit);
                        var tmp;
                        try {
                          tmp = tmp0_visit.fj(toSymbol($item.r1()));
                        } catch ($p) {
                          var tmp_0;
                          if ($p instanceof Error) {
                            tmp_0 = tmp0_visit.bj().mj(tmp0_visit, $p);
                          } else {
                            throw $p;
                          }
                          tmp = tmp_0;
                        }
                        finally {
                          tmp0_visit.bj().lj(tmp0_visit);
                        }
                        tmp$ret$0 = tmp;
                      }
                      tmp$ret$1 = tmp$ret$0;
                    }
                    var tmp$ret$3;
                    {
                      var tmp$ret$2;
                      {
                        var tmp0_visit_0 = new SPAN(attributesMapOf('class', null), tmp0_visitAndFinalize.bj());
                        tmp0_visit_0.bj().ij(tmp0_visit_0);
                        var tmp_1;
                        try {
                          var tmp_2 = $item.p1();
                          var tmp_3 = replace$default(tmp_2, '_', ' ', false, 4, null);
                          var tmp_4 = split$default(tmp_3, [' '], false, 0, 6, null);
                          var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, GridItem$lambda$lambda$lambda(), 31, null);
                          tmp_1 = tmp0_visit_0.fj(replace$default(tmp_5, ',', '', false, 4, null));
                        } catch ($p) {
                          var tmp_6;
                          if ($p instanceof Error) {
                            tmp_6 = tmp0_visit_0.bj().mj(tmp0_visit_0, $p);
                          } else {
                            throw $p;
                          }
                          tmp_1 = tmp_6;
                        }
                        finally {
                          tmp0_visit_0.bj().lj(tmp0_visit_0);
                        }
                        tmp$ret$2 = tmp_1;
                      }
                      tmp$ret$3 = tmp$ret$2;
                    }
                  }
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp0_visitAndFinalize.bj().mj(tmp0_visitAndFinalize, $p);
                } else {
                  throw $p;
                }
              }
              finally {
                tmp0_visitAndFinalize.bj().lj(tmp0_visitAndFinalize);
              }
            }
            tmp$ret$4 = $this$append.nj();
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      return Unit_getInstance();
    };
  }
  function GridItem$lambda($item) {
    return function (_anonymous_parameter_0__qggqh8) {
      var tmp;
      if (get_selectedListStorage().g1($item.p1())) {
        set_selectedListStorage(minus(get_selectedListStorage(), $item.p1()));
        var tmp0_safe_receiver = document.getElementById('selected-item-' + $item.p1());
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.remove();
        }
        var tmp4_safe_receiver = document.getElementById('grid-item-' + $item.p1());
        var tmp_0;
        if (tmp4_safe_receiver == null) {
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1_safe_receiver = document.getElementById('grid-item-' + $item.p1());
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.className;
          var tmp_1;
          if (tmp2_safe_receiver == null) {
            tmp_1 = null;
          } else {
            tmp_1 = replace$default(tmp2_safe_receiver, ' active', '', false, 4, null);
          }
          var tmp3_elvis_lhs = tmp_1;
          tmp_0 = tmp4_safe_receiver.className = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        set_selectedListStorage(plus(get_selectedListStorage(), $item.p1()));
        var tmp5_safe_receiver = document.getElementById('grid-item-' + $item.p1());
        if (tmp5_safe_receiver == null) {
        } else {
          var tmp6_this = tmp5_safe_receiver;
          tmp6_this.className = plus_0(tmp6_this.className, ' active');
        }
        var tmp7_safe_receiver = document.getElementById('selected-icons');
        if (tmp7_safe_receiver == null)
          null;
        else {
          append(tmp7_safe_receiver, GridItem$lambda$lambda($item));
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GridItem$lambda_0() {
    return function (value) {
      var tmp$ret$5;
      {
        var tmp;
        var tmp$ret$0;
        {
          tmp$ret$0 = charSequenceLength(value) > 0;
        }
        if (tmp$ret$0) {
          var tmp$ret$4;
          {
            var tmp$ret$1;
            {
              var tmp0__anonymous__q1qw7t = charSequenceGet(value, 0);
              tmp$ret$1 = uppercaseChar(tmp0__anonymous__q1qw7t);
            }
            var tmp0_plus = tmp$ret$1;
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                tmp$ret$2 = value;
              }
              tmp$ret$3 = tmp$ret$2.substring(1);
            }
            var tmp1_plus = tmp$ret$3;
            tmp$ret$4 = toString(tmp0_plus) + tmp1_plus;
          }
          tmp = tmp$ret$4;
        } else {
          tmp = value;
        }
        tmp$ret$5 = tmp;
      }
      return tmp$ret$5;
    };
  }
  //region block: init
  _selectedListStorage = null;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=Iconoplastic.js.map