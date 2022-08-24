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
  var CoroutineImpl = kotlin_kotlin.$_$.u6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e6;
  var split$default = kotlin_kotlin.$_$.p;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.k4;
  var mapCapacity = kotlin_kotlin.$_$.k5;
  var coerceAtLeast = kotlin_kotlin.$_$.o8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var Companion_getInstance = kotlin_kotlin.$_$.m3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var charArrayOf = kotlin_kotlin.$_$.e7;
  var split$default_0 = kotlin_kotlin.$_$.o;
  var to = kotlin_kotlin.$_$.gb;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j2;
  var createFailure = kotlin_kotlin.$_$.va;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.l2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m2;
  var THROW_CCE = kotlin_kotlin.$_$.ka;
  var isObject = kotlin_kotlin.$_$.a8;
  var toMap = kotlin_kotlin.$_$.y5;
  var classMeta = kotlin_kotlin.$_$.j7;
  var Unit_getInstance = kotlin_kotlin.$_$.r3;
  var attributesMapOf = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.l;
  var DIV = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u1;
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
  var toInt = kotlin_kotlin.$_$.p9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.k3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.h2;
  var numberToChar = kotlin_kotlin.$_$.f8;
  var toString = kotlin_kotlin.$_$.i2;
  var STYLE = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.j;
  var append = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.b;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var isInterface = kotlin_kotlin.$_$.y7;
  var get_id = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.m;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var contains$default = kotlin_kotlin.$_$.j;
  var SuspendFunction1 = kotlin_kotlin.$_$.v6;
  var charSequenceLength = kotlin_kotlin.$_$.h7;
  var charSequenceGet = kotlin_kotlin.$_$.g7;
  var uppercaseChar = kotlin_kotlin.$_$.y9;
  var replace$default = kotlin_kotlin.$_$.n;
  var joinToString$default = kotlin_kotlin.$_$.h;
  var plus = kotlin_kotlin.$_$.db;
  var set_onClickFunction = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.d;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var List = kotlin_kotlin.$_$.b4;
  var getKClass = kotlin_kotlin.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.i3;
  var arrayOf = kotlin_kotlin.$_$.ta;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var emptyList = kotlin_kotlin.$_$.y4;
  var Collection = kotlin_kotlin.$_$.t3;
  var plus_0 = kotlin_kotlin.$_$.p5;
  var minus = kotlin_kotlin.$_$.n5;
  //endregion
  //region block: pre-declaration
  $getCodepointsCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $getCodepointsCOROUTINE$0.prototype.constructor = $getCodepointsCOROUTINE$0;
  sayHello$slambda.prototype = Object.create(CoroutineImpl.prototype);
  sayHello$slambda.prototype.constructor = sayHello$slambda;
  //endregion
  function $getCodepointsCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $getCodepointsCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            suspendResult = await_0(window.fetch(this._this__u8e3s4__1.baseUrl_1 + '/download/codepoints'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.ARGUMENT1__1 = this.ARGUMENT0__1.text();
            this.state_1 = 2;
            suspendResult = await_0(this.ARGUMENT1__1, this);
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
            var tmp0_iterator = tmp0_associate.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var tmp$ret$0;
              l$ret$1: do {
                var tmp_0;
                try {
                  var tmp0_success = Companion_getInstance();
                  var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(32)]);
                  var final = split$default_0(element, tmp_1, false, 0, 6, null);
                  var tmp1_success = to(final.get_fkrdnv_k$(0), final.get_fkrdnv_k$(1));
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
              tmp1_associateTo.put_3mhbri_k$(tmp0_plusAssign.first_1, tmp0_plusAssign.second_1);
            }

            return toMap(tmp1_associateTo);
          case 3:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $getCodepointsCOROUTINE$0.$metadata$ = classMeta('$getCodepointsCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Api() {
    this.baseUrl_1 = 'https://iconoplastic-api.herokuapp.com/';
  }
  Api.prototype.get_baseUrl_48hdl7_k$ = function () {
    return this.baseUrl_1;
  };
  Api.prototype.getCodepoints_78j4ls_k$ = function ($cont) {
    var tmp = new $getCodepointsCOROUTINE$0(this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
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
          if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
            try {
              {
                {
                  var tmp = CoroutineScope(Dispatchers_getInstance().Default_1);
                  launch$default(tmp, null, null, sayHello$slambda_0(response, null), 3, null);
                  var tmp$ret$14;
                  {
                    var tmp$ret$13;
                    {
                      var tmp0_visit = new DIV(attributesMapOf('class', 'column'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                      var tmp_0;
                      try {
                        var tmp$ret$2;
                        {
                          var tmp$ret$1;
                          {
                            var tmp0_visit_0 = new IMG(attributesMapOf_0(['alt', null, 'src', null, 'class', 'logo']), tmp0_visit.get_consumer_tu5133_k$());
                            tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
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
                                tmp_2 = tmp0_visit_0.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_0, $p);
                              } else {
                                throw $p;
                              }
                              tmp_1 = tmp_2;
                            }
                            finally {
                              tmp0_visit_0.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_0);
                            }
                            tmp$ret$1 = tmp_1;
                          }
                          tmp$ret$2 = tmp$ret$1;
                        }
                        var tmp$ret$10;
                        {
                          var tmp$ret$9;
                          {
                            var tmp0_visit_1 = new DIV(attributesMapOf('class', 'search-box search-row'), tmp0_visit.get_consumer_tu5133_k$());
                            tmp0_visit_1.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_1);
                            var tmp_3;
                            try {
                              var tmp$ret$4;
                              {
                                var tmp$ret$3;
                                {
                                  var tmp0_visit_2 = new SPAN(attributesMapOf('class', 'search-icon'), tmp0_visit_1.get_consumer_tu5133_k$());
                                  tmp0_visit_2.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_2);
                                  var tmp_4;
                                  try {
                                    tmp_4 = tmp0_visit_2.unaryPlus_g7ydph_k$('\uE8B6');
                                  } catch ($p) {
                                    var tmp_5;
                                    if ($p instanceof Error) {
                                      tmp_5 = tmp0_visit_2.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_2, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_4 = tmp_5;
                                  }
                                  finally {
                                    tmp0_visit_2.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_2);
                                  }
                                  tmp$ret$3 = tmp_4;
                                }
                                tmp$ret$4 = tmp$ret$3;
                              }
                              var tmp$ret$8;
                              {
                                var tmp$ret$7;
                                {
                                  var tmp0_visit_3 = new SPAN(attributesMapOf('class', null), tmp0_visit_1.get_consumer_tu5133_k$());
                                  tmp0_visit_3.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_3);
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
                                        var tmp0_visit_4 = new INPUT(attributesMapOf_0(['type', tmp_7, 'formenctype', tmp_8, 'formmethod', tmp2_safe_receiver == null ? null : enumEncode(tmp2_safe_receiver), 'name', null, 'class', 'search']), tmp0_visit_3.get_consumer_tu5133_k$());
                                        tmp0_visit_4.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_4);
                                        var tmp_9;
                                        try {
                                          tmp0_visit_4.set_placeholder_y9dqmc_k$('Search icons');
                                          set_id(tmp0_visit_4, 'search-field');
                                          var onChange = sayHello$lambda(tmp0_visit_4, response);
                                          set_onChangeFunction(tmp0_visit_4, sayHello$lambda_0(onChange));
                                          tmp_9 = set_onKeyUpFunction(tmp0_visit_4, sayHello$lambda_1(onChange));
                                        } catch ($p) {
                                          var tmp_10;
                                          if ($p instanceof Error) {
                                            tmp_10 = tmp0_visit_4.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_4, $p);
                                          } else {
                                            throw $p;
                                          }
                                          tmp_9 = tmp_10;
                                        }
                                        finally {
                                          tmp0_visit_4.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_4);
                                        }
                                        tmp$ret$5 = tmp_9;
                                      }
                                      tmp$ret$6 = tmp$ret$5;
                                    }
                                    tmp_6 = tmp$ret$6;
                                  } catch ($p) {
                                    var tmp_11;
                                    if ($p instanceof Error) {
                                      tmp_11 = tmp0_visit_3.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_3, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_6 = tmp_11;
                                  }
                                  finally {
                                    tmp0_visit_3.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_3);
                                  }
                                  tmp$ret$7 = tmp_6;
                                }
                                tmp$ret$8 = tmp$ret$7;
                              }
                              tmp_3 = tmp$ret$8;
                            } catch ($p) {
                              var tmp_12;
                              if ($p instanceof Error) {
                                tmp_12 = tmp0_visit_1.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_1, $p);
                              } else {
                                throw $p;
                              }
                              tmp_3 = tmp_12;
                            }
                            finally {
                              tmp0_visit_1.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_1);
                            }
                            tmp$ret$9 = tmp_3;
                          }
                          tmp$ret$10 = tmp$ret$9;
                        }
                        var tmp$ret$12;
                        {
                          var tmp$ret$11;
                          {
                            var tmp0_visit_5 = new DIV(attributesMapOf('class', 'grid'), tmp0_visit.get_consumer_tu5133_k$());
                            tmp0_visit_5.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_5);
                            var tmp_13;
                            try {
                              tmp_13 = set_id(tmp0_visit_5, 'grid-icons');
                            } catch ($p) {
                              var tmp_14;
                              if ($p instanceof Error) {
                                tmp_14 = tmp0_visit_5.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_5, $p);
                              } else {
                                throw $p;
                              }
                              tmp_13 = tmp_14;
                            }
                            finally {
                              tmp0_visit_5.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_5);
                            }
                            tmp$ret$11 = tmp_13;
                          }
                          tmp$ret$12 = tmp$ret$11;
                        }
                        tmp_0 = tmp$ret$12;
                      } catch ($p) {
                        var tmp_15;
                        if ($p instanceof Error) {
                          tmp_15 = tmp0_visit.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit, $p);
                        } else {
                          throw $p;
                        }
                        tmp_0 = tmp_15;
                      }
                      finally {
                        tmp0_visit.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit);
                      }
                      tmp$ret$13 = tmp_0;
                    }
                    tmp$ret$14 = tmp$ret$13;
                  }
                }
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visitAndFinalize, $p);
              } else {
                throw $p;
              }
            }
            finally {
              tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visitAndFinalize);
            }
          }
          tmp$ret$15 = _this__u8e3s4.finalize_b9lof6_k$();
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
            if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === $this$append)) {
              throw IllegalArgumentException_init_$Create$('Wrong exception');
            }
            {
              tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
              try {
                {
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = Unit_getInstance();
                  }
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visitAndFinalize, $p);
                } else {
                  throw $p;
                }
              }
              finally {
                tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visitAndFinalize);
              }
            }
            tmp$ret$1 = $this$append.finalize_b9lof6_k$();
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
    this.$response_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  sayHello$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  sayHello$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $cont);
  };
  sayHello$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = (new Api()).getCodepoints_78j4ls_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$response_1._v = ARGUMENT;
            var grid = document.getElementById('grid-icons');
            var tmp0_safe_receiver = this.$response_1._v;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_iterator = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
              while (tmp0_iterator.hasNext_bitz1p_k$()) {
                var element = tmp0_iterator.next_20eer_k$();
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
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  sayHello$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new sayHello$slambda(this.$response_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  sayHello$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  sayHello$slambda.$metadata$ = classMeta('sayHello$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sayHello$slambda_0($response, resultContinuation) {
    var i = new sayHello$slambda($response, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
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
              tmp$ret$0 = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            }
            var tmp0_iterator = tmp$ret$0;
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var tmp$ret$1;
              {
                var tmp_1;
                var tmp_2 = element.get_key_18j28a_k$();
                if (contains$default(tmp_2, search, false, 2, null)) {
                  tmp_1 = true;
                } else {
                  var tmp_3 = element.get_value_j01efc_k$();
                  tmp_1 = contains$default(tmp_3, search, false, 2, null);
                }
                tmp$ret$1 = tmp_1;
              }
              if (tmp$ret$1) {
                tmp0_filterTo.put_3mhbri_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
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
            tmp$ret$4 = tmp1_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          }
          var tmp0_iterator_0 = tmp$ret$4;
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            {
              var tmp0_safe_receiver_0 = document.getElementById('grid-item-' + element_0.get_key_18j28a_k$());
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
            tmp$ret$5 = tmp2_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          }
          var tmp0_iterator_1 = tmp$ret$5;
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$();
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
  function isSystemInDarkTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function applyToDocument(_this__u8e3s4, selectedList) {
    var globalIndex = {_v: 0};
    var grid = document.getElementById('grid-icons');
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        {
          var tmp0_safe_receiver = grid;
          if (tmp0_safe_receiver == null)
            null;
          else {
            append(tmp0_safe_receiver, applyToDocument$lambda(globalIndex, element, selectedList));
          }
          globalIndex._v = globalIndex._v + 1 | 0;
        }
      }
    }
  }
  function applyToDocument$lambda$lambda$lambda$lambda() {
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
  function applyToDocument$lambda$lambda$lambda($index, $element) {
    return function ($this$append) {
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'row'), $this$append);
          var tmp$ret$4;
          {
            if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === $this$append)) {
              throw IllegalArgumentException_init_$Create$('Wrong exception');
            }
            {
              tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
              try {
                {
                  {
                    set_id(tmp0_visitAndFinalize, 'selected-item-' + $index);
                    var tmp$ret$1;
                    {
                      var tmp$ret$0;
                      {
                        var tmp0_visit = new SPAN(attributesMapOf('class', 'icon'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                        tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                        var tmp;
                        try {
                          tmp = tmp0_visit.unaryPlus_g7ydph_k$(toSymbol($element.get_value_j01efc_k$()));
                        } catch ($p) {
                          var tmp_0;
                          if ($p instanceof Error) {
                            tmp_0 = tmp0_visit.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit, $p);
                          } else {
                            throw $p;
                          }
                          tmp = tmp_0;
                        }
                        finally {
                          tmp0_visit.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit);
                        }
                        tmp$ret$0 = tmp;
                      }
                      tmp$ret$1 = tmp$ret$0;
                    }
                    var tmp$ret$3;
                    {
                      var tmp$ret$2;
                      {
                        var tmp0_visit_0 = new SPAN(attributesMapOf('class', null), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                        tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
                        var tmp_1;
                        try {
                          var tmp_2 = $element.get_key_18j28a_k$();
                          var tmp_3 = replace$default(tmp_2, '_', ' ', false, 4, null);
                          var tmp_4 = split$default(tmp_3, [' '], false, 0, 6, null);
                          var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, applyToDocument$lambda$lambda$lambda$lambda(), 31, null);
                          tmp_1 = tmp0_visit_0.unaryPlus_g7ydph_k$(replace$default(tmp_5, ',', '', false, 4, null));
                        } catch ($p) {
                          var tmp_6;
                          if ($p instanceof Error) {
                            tmp_6 = tmp0_visit_0.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_0, $p);
                          } else {
                            throw $p;
                          }
                          tmp_1 = tmp_6;
                        }
                        finally {
                          tmp0_visit_0.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_0);
                        }
                        tmp$ret$2 = tmp_1;
                      }
                      tmp$ret$3 = tmp$ret$2;
                    }
                  }
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visitAndFinalize, $p);
                } else {
                  throw $p;
                }
              }
              finally {
                tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visitAndFinalize);
              }
            }
            tmp$ret$4 = $this$append.finalize_b9lof6_k$();
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      return Unit_getInstance();
    };
  }
  function applyToDocument$lambda$lambda($selectedList, $index, $element) {
    return function (_anonymous_parameter_0__qggqh8) {
      var tmp;
      if ($selectedList.containsKey_wgk31w_k$($index)) {
        $selectedList.remove_8hbkc0_k$($index);
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = $selectedList.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          }
          var tmp0_iterator = tmp$ret$0;
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            {
              console.log(element.get_key_18j28a_k$(), ', ', element.get_value_j01efc_k$());
            }
          }
        }
        var tmp0_safe_receiver = document.getElementById('selected-item-' + $index);
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.remove();
        }
        var tmp4_safe_receiver = document.getElementById('grid-item-' + $index);
        var tmp_0;
        if (tmp4_safe_receiver == null) {
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1_safe_receiver = document.getElementById('grid-item-' + $index);
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
        {
          var tmp0_set = $element.get_value_j01efc_k$();
          $selectedList.put_3mhbri_k$($index, tmp0_set);
        }
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = $selectedList.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          }
          var tmp0_iterator_0 = tmp$ret$1;
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            {
              console.log(element_0.get_key_18j28a_k$(), ', ', element_0.get_value_j01efc_k$());
            }
          }
        }
        var tmp5_safe_receiver = document.getElementById('grid-item-' + $index);
        if (tmp5_safe_receiver == null) {
        } else {
          var tmp6_this = tmp5_safe_receiver;
          tmp6_this.className = plus(tmp6_this.className, ' active');
        }
        var tmp7_safe_receiver = document.getElementById('selected-icons');
        if (tmp7_safe_receiver == null)
          null;
        else {
          append(tmp7_safe_receiver, applyToDocument$lambda$lambda$lambda($index, $element));
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function applyToDocument$lambda$lambda_0() {
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
  function applyToDocument$lambda($globalIndex, $element, $selectedList) {
    return function ($this$append) {
      var index = $globalIndex._v;
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'grid-item column'), $this$append);
          var tmp$ret$4;
          {
            if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === $this$append)) {
              throw IllegalArgumentException_init_$Create$('Wrong exception');
            }
            {
              tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
              try {
                {
                  {
                    set_id(tmp0_visitAndFinalize, 'grid-item-' + index);
                    set_onClickFunction(tmp0_visitAndFinalize, applyToDocument$lambda$lambda($selectedList, index, $element));
                    var tmp$ret$1;
                    {
                      var tmp$ret$0;
                      {
                        var tmp0_visit = new SPAN(attributesMapOf('class', 'icon'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                        tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                        var tmp;
                        try {
                          tmp = tmp0_visit.unaryPlus_g7ydph_k$(toSymbol($element.get_value_j01efc_k$()));
                        } catch ($p) {
                          var tmp_0;
                          if ($p instanceof Error) {
                            tmp_0 = tmp0_visit.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit, $p);
                          } else {
                            throw $p;
                          }
                          tmp = tmp_0;
                        }
                        finally {
                          tmp0_visit.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit);
                        }
                        tmp$ret$0 = tmp;
                      }
                      tmp$ret$1 = tmp$ret$0;
                    }
                    var tmp$ret$3;
                    {
                      var tmp$ret$2;
                      {
                        var tmp0_visit_0 = new SPAN(attributesMapOf('class', null), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                        tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
                        var tmp_1;
                        try {
                          var tmp_2 = $element.get_key_18j28a_k$();
                          var tmp_3 = replace$default(tmp_2, '_', ' ', false, 4, null);
                          var tmp_4 = split$default(tmp_3, [' '], false, 0, 6, null);
                          var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, applyToDocument$lambda$lambda_0(), 31, null);
                          tmp_1 = tmp0_visit_0.unaryPlus_g7ydph_k$(replace$default(tmp_5, ',', '', false, 4, null));
                        } catch ($p) {
                          var tmp_6;
                          if ($p instanceof Error) {
                            tmp_6 = tmp0_visit_0.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_0, $p);
                          } else {
                            throw $p;
                          }
                          tmp_1 = tmp_6;
                        }
                        finally {
                          tmp0_visit_0.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_0);
                        }
                        tmp$ret$2 = tmp_1;
                      }
                      tmp$ret$3 = tmp$ret$2;
                    }
                  }
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visitAndFinalize, $p);
                } else {
                  throw $p;
                }
              }
              finally {
                tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visitAndFinalize);
              }
            }
            tmp$ret$4 = $this$append.finalize_b9lof6_k$();
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      return Unit_getInstance();
    };
  }
  function set__selectedListStorage(_set____db54di) {
    _selectedListStorage = _set____db54di;
  }
  function get__selectedListStorage() {
    return _selectedListStorage;
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
          var tmp1_serializer = tmp0_encodeToString.get_serializersModule_piitvg_k$();
          var tmp$ret$0;
          {
            var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false))]), false));
            tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp0_encodeToString.encodeToString_pl8vu2_k$(tmp$ret$1, value);
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
                var tmp1_serializer = tmp0_decodeFromString.get_serializersModule_piitvg_k$();
                var tmp$ret$2;
                {
                  var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false))]), true));
                  tmp$ret$2 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp$ret$4 = tmp0_decodeFromString.decodeFromString_ink0ik_k$(tmp$ret$3, tmp0_safe_receiver);
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
    var tmp$ret$8;
    {
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        var tmp0_any = get_selectedListStorage();
        var tmp_0;
        if (isInterface(tmp0_any, Collection)) {
          tmp_0 = tmp0_any.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$1;
          {
            tmp$ret$1 = element === item.get_key_18j28a_k$();
          }
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        tmp = ' active';
      } else {
        tmp = '';
      }
      var tmp1_div = 'grid-item column' + tmp;
      var tmp$ret$7;
      {
        var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', tmp1_div), _this__u8e3s4);
        var tmp$ret$6;
        {
          if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
            try {
              {
                {
                  set_id(tmp0_visitAndFinalize, 'grid-item-' + item.get_key_18j28a_k$());
                  set_onClickFunction(tmp0_visitAndFinalize, GridItem$lambda(item));
                  var tmp$ret$3;
                  {
                    var tmp$ret$2;
                    {
                      var tmp0_visit = new SPAN(attributesMapOf('class', 'icon'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                      var tmp_1;
                      try {
                        tmp_1 = tmp0_visit.unaryPlus_g7ydph_k$(toSymbol(item.get_value_j01efc_k$()));
                      } catch ($p) {
                        var tmp_2;
                        if ($p instanceof Error) {
                          tmp_2 = tmp0_visit.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit, $p);
                        } else {
                          throw $p;
                        }
                        tmp_1 = tmp_2;
                      }
                      finally {
                        tmp0_visit.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit);
                      }
                      tmp$ret$2 = tmp_1;
                    }
                    tmp$ret$3 = tmp$ret$2;
                  }
                  var tmp$ret$5;
                  {
                    var tmp$ret$4;
                    {
                      var tmp0_visit_0 = new SPAN(attributesMapOf('class', 'grid-item-span'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
                      var tmp_3;
                      try {
                        var tmp_4 = item.get_key_18j28a_k$();
                        var tmp_5 = replace$default(tmp_4, '_', ' ', false, 4, null);
                        var tmp_6 = split$default(tmp_5, [' '], false, 0, 6, null);
                        var tmp_7 = joinToString$default(tmp_6, null, null, null, 0, null, GridItem$lambda_0(), 31, null);
                        tmp_3 = tmp0_visit_0.unaryPlus_g7ydph_k$(replace$default(tmp_7, ',', '', false, 4, null));
                      } catch ($p) {
                        var tmp_8;
                        if ($p instanceof Error) {
                          tmp_8 = tmp0_visit_0.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_0, $p);
                        } else {
                          throw $p;
                        }
                        tmp_3 = tmp_8;
                      }
                      finally {
                        tmp0_visit_0.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_0);
                      }
                      tmp$ret$4 = tmp_3;
                    }
                    tmp$ret$5 = tmp$ret$4;
                  }
                }
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visitAndFinalize, $p);
              } else {
                throw $p;
              }
            }
            finally {
              tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visitAndFinalize);
            }
          }
          tmp$ret$6 = _this__u8e3s4.finalize_b9lof6_k$();
        }
        tmp$ret$7 = tmp$ret$6;
      }
      tmp$ret$8 = tmp$ret$7;
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
            if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === $this$append)) {
              throw IllegalArgumentException_init_$Create$('Wrong exception');
            }
            {
              tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
              try {
                {
                  {
                    set_id(tmp0_visitAndFinalize, 'selected-item-' + $item.get_key_18j28a_k$());
                    var tmp$ret$1;
                    {
                      var tmp$ret$0;
                      {
                        var tmp0_visit = new SPAN(attributesMapOf('class', 'icon'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                        tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                        var tmp;
                        try {
                          tmp = tmp0_visit.unaryPlus_g7ydph_k$(toSymbol($item.get_value_j01efc_k$()));
                        } catch ($p) {
                          var tmp_0;
                          if ($p instanceof Error) {
                            tmp_0 = tmp0_visit.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit, $p);
                          } else {
                            throw $p;
                          }
                          tmp = tmp_0;
                        }
                        finally {
                          tmp0_visit.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit);
                        }
                        tmp$ret$0 = tmp;
                      }
                      tmp$ret$1 = tmp$ret$0;
                    }
                    var tmp$ret$3;
                    {
                      var tmp$ret$2;
                      {
                        var tmp0_visit_0 = new SPAN(attributesMapOf('class', null), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                        tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
                        var tmp_1;
                        try {
                          var tmp_2 = $item.get_key_18j28a_k$();
                          var tmp_3 = replace$default(tmp_2, '_', ' ', false, 4, null);
                          var tmp_4 = split$default(tmp_3, [' '], false, 0, 6, null);
                          var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, GridItem$lambda$lambda$lambda(), 31, null);
                          tmp_1 = tmp0_visit_0.unaryPlus_g7ydph_k$(replace$default(tmp_5, ',', '', false, 4, null));
                        } catch ($p) {
                          var tmp_6;
                          if ($p instanceof Error) {
                            tmp_6 = tmp0_visit_0.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_0, $p);
                          } else {
                            throw $p;
                          }
                          tmp_1 = tmp_6;
                        }
                        finally {
                          tmp0_visit_0.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_0);
                        }
                        tmp$ret$2 = tmp_1;
                      }
                      tmp$ret$3 = tmp$ret$2;
                    }
                  }
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visitAndFinalize, $p);
                } else {
                  throw $p;
                }
              }
              finally {
                tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visitAndFinalize);
              }
            }
            tmp$ret$4 = $this$append.finalize_b9lof6_k$();
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
      var tmp$ret$0;
      $l$block_0: {
        var tmp0_any = get_selectedListStorage();
        var tmp_0;
        if (isInterface(tmp0_any, Collection)) {
          tmp_0 = tmp0_any.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$1;
          {
            tmp$ret$1 = element === $item.get_key_18j28a_k$();
          }
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        set_selectedListStorage(minus(get_selectedListStorage(), $item.get_key_18j28a_k$()));
        var tmp0_safe_receiver = document.getElementById('selected-item-' + $item.get_key_18j28a_k$());
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.remove();
        }
        var tmp4_safe_receiver = document.getElementById('grid-item-' + $item.get_key_18j28a_k$());
        var tmp_1;
        if (tmp4_safe_receiver == null) {
          tmp_1 = Unit_getInstance();
        } else {
          var tmp1_safe_receiver = document.getElementById('grid-item-' + $item.get_key_18j28a_k$());
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.className;
          var tmp_2;
          if (tmp2_safe_receiver == null) {
            tmp_2 = null;
          } else {
            tmp_2 = replace$default(tmp2_safe_receiver, ' active', '', false, 4, null);
          }
          var tmp3_elvis_lhs = tmp_2;
          tmp_1 = tmp4_safe_receiver.className = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        set_selectedListStorage(plus_0(get_selectedListStorage(), $item.get_key_18j28a_k$()));
        var tmp5_safe_receiver = document.getElementById('grid-item-' + $item.get_key_18j28a_k$());
        if (tmp5_safe_receiver == null) {
        } else {
          var tmp6_this = tmp5_safe_receiver;
          tmp6_this.className = plus(tmp6_this.className, ' active');
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