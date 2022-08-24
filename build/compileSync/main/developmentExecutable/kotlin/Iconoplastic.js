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
  var CoroutineImpl = kotlin_kotlin.$_$.l6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var split$default = kotlin_kotlin.$_$.l;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b4;
  var mapCapacity = kotlin_kotlin.$_$.b5;
  var coerceAtLeast = kotlin_kotlin.$_$.a8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Companion_getInstance = kotlin_kotlin.$_$.d3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.v1;
  var charArrayOf = kotlin_kotlin.$_$.v6;
  var split$default_0 = kotlin_kotlin.$_$.k;
  var to = kotlin_kotlin.$_$.la;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.a2;
  var createFailure = kotlin_kotlin.$_$.aa;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.c2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.d2;
  var THROW_CCE = kotlin_kotlin.$_$.p9;
  var isObject = kotlin_kotlin.$_$.q7;
  var toMap = kotlin_kotlin.$_$.p5;
  var classMeta = kotlin_kotlin.$_$.a7;
  var Unit_getInstance = kotlin_kotlin.$_$.i3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isInterface = kotlin_kotlin.$_$.o7;
  var append = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.b;
  var get_id = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.m;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var contains = kotlin_kotlin.$_$.k8;
  var plus = kotlin_kotlin.$_$.ia;
  var replace$default = kotlin_kotlin.$_$.j;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var attributesMapOf = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.l;
  var DIV = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var attributesMapOf_0 = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.k;
  var IMG = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.h;
  var SPAN = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.j;
  var enumEncode = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.a;
  var INPUT = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.i;
  var set_id = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.n;
  var set_onChangeFunction = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.c;
  var set_onKeyUpFunction = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.e;
  var FOOTER = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.g;
  var set_onClickFunction = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.d;
  var toInt = kotlin_kotlin.$_$.u8;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.y1;
  var numberToChar = kotlin_kotlin.$_$.u7;
  var toString = kotlin_kotlin.$_$.z1;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var List = kotlin_kotlin.$_$.s3;
  var getKClass = kotlin_kotlin.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.z2;
  var arrayOf = kotlin_kotlin.$_$.y9;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var emptyList = kotlin_kotlin.$_$.p4;
  var charSequenceLength = kotlin_kotlin.$_$.y6;
  var charSequenceGet = kotlin_kotlin.$_$.x6;
  var uppercaseChar = kotlin_kotlin.$_$.d9;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var Collection = kotlin_kotlin.$_$.k3;
  var plus_0 = kotlin_kotlin.$_$.g5;
  var minus = kotlin_kotlin.$_$.e5;
  //endregion
  //region block: pre-declaration
  $getCodepointsCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $getCodepointsCOROUTINE$0.prototype.constructor = $getCodepointsCOROUTINE$0;
  App$display$slambda.prototype = Object.create(CoroutineImpl.prototype);
  App$display$slambda.prototype.constructor = App$display$slambda;
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
  function set_isBarExpanded(_set____db54di) {
    isBarExpanded = _set____db54di;
  }
  function get_isBarExpanded() {
    return isBarExpanded;
  }
  var isBarExpanded;
  function App$display$slambda$lambda($element) {
    return function ($this$append) {
      GridItem($this$append, $element);
      return Unit_getInstance();
    };
  }
  function _get_job__e6b14k($this) {
    return $this.job_1;
  }
  function App$display$slambda($response, resultContinuation) {
    this.$response_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  App$display$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  App$display$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  App$display$slambda.prototype.doResume_5yljmg_k$ = function () {
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
                  append(tmp0_safe_receiver_0, App$display$slambda$lambda(element));
                }
              }
            }

            ;
            var tmp1_safe_receiver = elementFromId('search-field');
            if (tmp1_safe_receiver == null)
              null;
            else {
              tmp1_safe_receiver.focus();
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
  App$display$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new App$display$slambda(this.$response_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  App$display$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  App$display$slambda.$metadata$ = classMeta('App$display$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function App$display$slambda_0($response, resultContinuation) {
    var i = new App$display$slambda($response, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function App$display$lambda$lambda($element) {
    return function ($this$append) {
      GridItem($this$append, $element);
      return Unit_getInstance();
    };
  }
  function App$display$lambda($tmp0_visit, $response) {
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
                tmp$ret$1 = contains(element.get_key_18j28a_k$(), search, true) ? true : contains(element.get_value_j01efc_k$(), search, true);
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
      var tmp_1;
      if (tmp2_safe_receiver == null) {
        tmp_1 = null;
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
                append(tmp0_safe_receiver_1, App$display$lambda$lambda(element_1));
              }
            }
          }
        }
        tmp_1 = Unit_getInstance();
      }
      return tmp_1;
    };
  }
  function App$display$lambda_0($onChange) {
    return function (it) {
      $onChange();
      return Unit_getInstance();
    };
  }
  function App$display$lambda_1($onChange) {
    return function (it) {
      $onChange();
      return Unit_getInstance();
    };
  }
  function App$display$lambda_2() {
    return function (it) {
      var bar = document.getElementById('expanded-bottom-bar');
      var button = document.getElementById('bar-expand-button');
      console.log(bar);
      var tmp;
      if (isBarExpanded) {
        var tmp_0 = console;
        var tmp0_safe_receiver = bar;
        tmp_0.log(plus(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.className, 'fjalf'));
        var tmp4_safe_receiver = bar;
        if (tmp4_safe_receiver == null) {
        } else {
          var tmp1_safe_receiver = bar;
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.className;
          var tmp_1;
          if (tmp2_safe_receiver == null) {
            tmp_1 = null;
          } else {
            tmp_1 = replace$default(tmp2_safe_receiver, ' active', '', false, 4, null);
          }
          var tmp3_elvis_lhs = tmp_1;
          tmp4_safe_receiver.className = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
        }
        isBarExpanded = false;
        var tmp8_safe_receiver = button;
        var tmp_2;
        if (tmp8_safe_receiver == null) {
          tmp_2 = Unit_getInstance();
        } else {
          var tmp5_safe_receiver = button;
          var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.className;
          var tmp_3;
          if (tmp6_safe_receiver == null) {
            tmp_3 = null;
          } else {
            tmp_3 = replace$default(tmp6_safe_receiver, ' active', '', false, 4, null);
          }
          var tmp7_elvis_lhs = tmp_3;
          tmp_2 = tmp8_safe_receiver.className = tmp7_elvis_lhs == null ? '' : tmp7_elvis_lhs;
        }
        tmp = tmp_2;
      } else {
        isBarExpanded = true;
        var tmp_4 = console;
        var tmp9_safe_receiver = bar;
        tmp_4.log(tmp9_safe_receiver == null ? null : tmp9_safe_receiver.className);
        var tmp10_safe_receiver = bar;
        if (tmp10_safe_receiver == null) {
        } else {
          var tmp11_this = tmp10_safe_receiver;
          tmp11_this.className = plus(tmp11_this.className, ' active');
        }
        var tmp12_safe_receiver = button;
        var tmp_5;
        if (tmp12_safe_receiver == null) {
          tmp_5 = Unit_getInstance();
        } else {
          var tmp13_this = tmp12_safe_receiver;
          tmp_5 = tmp13_this.className = plus(tmp13_this.className, ' active');
        }
        tmp = tmp_5;
      }
      return Unit_getInstance();
    };
  }
  function App() {
    var tmp = this;
    tmp.job_1 = Job$default(null, 1, null);
  }
  App.prototype.get_coroutineContext_115oqo_k$ = function () {
    return this.job_1;
  };
  App.prototype.display_upsghq_k$ = function (consumer) {
    var tmp$ret$39;
    {
      {
      }
      {
        var response = {_v: null};
        var tmp$ret$23;
        {
          var tmp$ret$22;
          {
            var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'row'), consumer);
            var tmp$ret$21;
            {
              if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === consumer)) {
                throw IllegalArgumentException_init_$Create$('Wrong exception');
              }
              {
                tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
                try {
                  {
                    {
                      launch$default(this, null, null, App$display$slambda_0(response, null), 3, null);
                      var tmp$ret$14;
                      {
                        var tmp$ret$13;
                        {
                          var tmp0_visit = new DIV(attributesMapOf('class', 'column'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                          tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                          var tmp;
                          try {
                            var tmp$ret$2;
                            {
                              var tmp$ret$1;
                              {
                                var tmp0_visit_0 = new IMG(attributesMapOf_0(['alt', null, 'src', null, 'class', 'logo']), tmp0_visit.get_consumer_tu5133_k$());
                                tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
                                var tmp_0;
                                try {
                                  var tmp$ret$0;
                                  {
                                    tmp$ret$0 = Unit_getInstance();
                                  }
                                  tmp_0 = tmp$ret$0;
                                } catch ($p) {
                                  var tmp_1;
                                  if ($p instanceof Error) {
                                    tmp_1 = tmp0_visit_0.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_0, $p);
                                  } else {
                                    throw $p;
                                  }
                                  tmp_0 = tmp_1;
                                }
                                finally {
                                  tmp0_visit_0.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_0);
                                }
                                tmp$ret$1 = tmp_0;
                              }
                              tmp$ret$2 = tmp$ret$1;
                            }
                            var tmp$ret$10;
                            {
                              var tmp$ret$9;
                              {
                                var tmp0_visit_1 = new DIV(attributesMapOf('class', 'search-box search-row'), tmp0_visit.get_consumer_tu5133_k$());
                                tmp0_visit_1.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_1);
                                var tmp_2;
                                try {
                                  var tmp$ret$4;
                                  {
                                    var tmp$ret$3;
                                    {
                                      var tmp0_visit_2 = new SPAN(attributesMapOf('class', 'search-icon'), tmp0_visit_1.get_consumer_tu5133_k$());
                                      tmp0_visit_2.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_2);
                                      var tmp_3;
                                      try {
                                        tmp_3 = tmp0_visit_2.unaryPlus_g7ydph_k$('\uE8B6');
                                      } catch ($p) {
                                        var tmp_4;
                                        if ($p instanceof Error) {
                                          tmp_4 = tmp0_visit_2.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_2, $p);
                                        } else {
                                          throw $p;
                                        }
                                        tmp_3 = tmp_4;
                                      }
                                      finally {
                                        tmp0_visit_2.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_2);
                                      }
                                      tmp$ret$3 = tmp_3;
                                    }
                                    tmp$ret$4 = tmp$ret$3;
                                  }
                                  var tmp$ret$8;
                                  {
                                    var tmp$ret$7;
                                    {
                                      var tmp0_visit_3 = new SPAN(attributesMapOf('class', null), tmp0_visit_1.get_consumer_tu5133_k$());
                                      tmp0_visit_3.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_3);
                                      var tmp_5;
                                      try {
                                        var tmp$ret$6;
                                        {
                                          var tmp$ret$5;
                                          {
                                            var tmp0_safe_receiver = null;
                                            var tmp_6 = tmp0_safe_receiver == null ? null : enumEncode(tmp0_safe_receiver);
                                            var tmp1_safe_receiver = null;
                                            var tmp_7 = tmp1_safe_receiver == null ? null : enumEncode(tmp1_safe_receiver);
                                            var tmp2_safe_receiver = null;
                                            var tmp0_visit_4 = new INPUT(attributesMapOf_0(['type', tmp_6, 'formenctype', tmp_7, 'formmethod', tmp2_safe_receiver == null ? null : enumEncode(tmp2_safe_receiver), 'name', null, 'class', 'search']), tmp0_visit_3.get_consumer_tu5133_k$());
                                            tmp0_visit_4.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_4);
                                            var tmp_8;
                                            try {
                                              tmp0_visit_4.set_placeholder_y9dqmc_k$('Search icons');
                                              set_id(tmp0_visit_4, 'search-field');
                                              var onChange = App$display$lambda(tmp0_visit_4, response);
                                              set_onChangeFunction(tmp0_visit_4, App$display$lambda_0(onChange));
                                              tmp_8 = set_onKeyUpFunction(tmp0_visit_4, App$display$lambda_1(onChange));
                                            } catch ($p) {
                                              var tmp_9;
                                              if ($p instanceof Error) {
                                                tmp_9 = tmp0_visit_4.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_4, $p);
                                              } else {
                                                throw $p;
                                              }
                                              tmp_8 = tmp_9;
                                            }
                                            finally {
                                              tmp0_visit_4.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_4);
                                            }
                                            tmp$ret$5 = tmp_8;
                                          }
                                          tmp$ret$6 = tmp$ret$5;
                                        }
                                        tmp_5 = tmp$ret$6;
                                      } catch ($p) {
                                        var tmp_10;
                                        if ($p instanceof Error) {
                                          tmp_10 = tmp0_visit_3.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_3, $p);
                                        } else {
                                          throw $p;
                                        }
                                        tmp_5 = tmp_10;
                                      }
                                      finally {
                                        tmp0_visit_3.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_3);
                                      }
                                      tmp$ret$7 = tmp_5;
                                    }
                                    tmp$ret$8 = tmp$ret$7;
                                  }
                                  tmp_2 = tmp$ret$8;
                                } catch ($p) {
                                  var tmp_11;
                                  if ($p instanceof Error) {
                                    tmp_11 = tmp0_visit_1.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_1, $p);
                                  } else {
                                    throw $p;
                                  }
                                  tmp_2 = tmp_11;
                                }
                                finally {
                                  tmp0_visit_1.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_1);
                                }
                                tmp$ret$9 = tmp_2;
                              }
                              tmp$ret$10 = tmp$ret$9;
                            }
                            var tmp$ret$12;
                            {
                              var tmp$ret$11;
                              {
                                var tmp0_visit_5 = new DIV(attributesMapOf('class', 'grid'), tmp0_visit.get_consumer_tu5133_k$());
                                tmp0_visit_5.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_5);
                                var tmp_12;
                                try {
                                  tmp_12 = set_id(tmp0_visit_5, 'grid-icons');
                                } catch ($p) {
                                  var tmp_13;
                                  if ($p instanceof Error) {
                                    tmp_13 = tmp0_visit_5.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_5, $p);
                                  } else {
                                    throw $p;
                                  }
                                  tmp_12 = tmp_13;
                                }
                                finally {
                                  tmp0_visit_5.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_5);
                                }
                                tmp$ret$11 = tmp_12;
                              }
                              tmp$ret$12 = tmp$ret$11;
                            }
                            tmp = tmp$ret$12;
                          } catch ($p) {
                            var tmp_14;
                            if ($p instanceof Error) {
                              tmp_14 = tmp0_visit.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit, $p);
                            } else {
                              throw $p;
                            }
                            tmp = tmp_14;
                          }
                          finally {
                            tmp0_visit.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit);
                          }
                          tmp$ret$13 = tmp;
                        }
                        tmp$ret$14 = tmp$ret$13;
                      }
                      var tmp$ret$20;
                      {
                        var tmp$ret$19;
                        {
                          var tmp0_visit_6 = new DIV(attributesMapOf('class', 'column sticky'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                          tmp0_visit_6.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_6);
                          var tmp_15;
                          try {
                            var tmp$ret$18;
                            {
                              var tmp$ret$17;
                              {
                                var tmp0_visit_7 = new DIV(attributesMapOf('class', 'picker-card'), tmp0_visit_6.get_consumer_tu5133_k$());
                                tmp0_visit_7.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_7);
                                var tmp_16;
                                try {
                                  var tmp$ret$16;
                                  {
                                    var tmp$ret$15;
                                    {
                                      var tmp0_visit_8 = new DIV(attributesMapOf('class', 'column'), tmp0_visit_7.get_consumer_tu5133_k$());
                                      tmp0_visit_8.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_8);
                                      var tmp_17;
                                      try {
                                        tmp_17 = set_id(tmp0_visit_8, 'selected-icons');
                                      } catch ($p) {
                                        var tmp_18;
                                        if ($p instanceof Error) {
                                          tmp_18 = tmp0_visit_8.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_8, $p);
                                        } else {
                                          throw $p;
                                        }
                                        tmp_17 = tmp_18;
                                      }
                                      finally {
                                        tmp0_visit_8.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_8);
                                      }
                                      tmp$ret$15 = tmp_17;
                                    }
                                    tmp$ret$16 = tmp$ret$15;
                                  }
                                  tmp_16 = tmp$ret$16;
                                } catch ($p) {
                                  var tmp_19;
                                  if ($p instanceof Error) {
                                    tmp_19 = tmp0_visit_7.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_7, $p);
                                  } else {
                                    throw $p;
                                  }
                                  tmp_16 = tmp_19;
                                }
                                finally {
                                  tmp0_visit_7.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_7);
                                }
                                tmp$ret$17 = tmp_16;
                              }
                              tmp$ret$18 = tmp$ret$17;
                            }
                            tmp_15 = tmp$ret$18;
                          } catch ($p) {
                            var tmp_20;
                            if ($p instanceof Error) {
                              tmp_20 = tmp0_visit_6.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_6, $p);
                            } else {
                              throw $p;
                            }
                            tmp_15 = tmp_20;
                          }
                          finally {
                            tmp0_visit_6.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_6);
                          }
                          tmp$ret$19 = tmp_15;
                        }
                        tmp$ret$20 = tmp$ret$19;
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
              tmp$ret$21 = consumer.finalize_b9lof6_k$();
            }
            tmp$ret$22 = tmp$ret$21;
          }
          tmp$ret$23 = tmp$ret$22;
        }
        var tmp$ret$38;
        {
          var tmp$ret$37;
          {
            var tmp0_visitAndFinalize_0 = new FOOTER(attributesMapOf('class', null), consumer);
            var tmp$ret$36;
            {
              if (!(tmp0_visitAndFinalize_0.get_consumer_tu5133_k$() === consumer)) {
                throw IllegalArgumentException_init_$Create$('Wrong exception');
              }
              {
                tmp0_visitAndFinalize_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize_0);
                try {
                  {
                    {
                      var tmp$ret$35;
                      {
                        var tmp$ret$34;
                        {
                          var tmp0_visit_9 = new DIV(attributesMapOf('class', 'column'), tmp0_visitAndFinalize_0.get_consumer_tu5133_k$());
                          tmp0_visit_9.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_9);
                          var tmp_21;
                          try {
                            set_id(tmp0_visit_9, 'footer');
                            var tmp$ret$29;
                            {
                              var tmp$ret$28;
                              {
                                var tmp0_visit_10 = new DIV(attributesMapOf('class', 'bottom-bar'), tmp0_visit_9.get_consumer_tu5133_k$());
                                tmp0_visit_10.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_10);
                                var tmp_22;
                                try {
                                  var tmp$ret$25;
                                  {
                                    var tmp$ret$24;
                                    {
                                      var tmp0_visit_11 = new DIV(attributesMapOf('class', 'row marquee'), tmp0_visit_10.get_consumer_tu5133_k$());
                                      tmp0_visit_11.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_11);
                                      var tmp_23;
                                      try {
                                        tmp_23 = set_id(tmp0_visit_11, 'bottom-bar');
                                      } catch ($p) {
                                        var tmp_24;
                                        if ($p instanceof Error) {
                                          tmp_24 = tmp0_visit_11.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_11, $p);
                                        } else {
                                          throw $p;
                                        }
                                        tmp_23 = tmp_24;
                                      }
                                      finally {
                                        tmp0_visit_11.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_11);
                                      }
                                      tmp$ret$24 = tmp_23;
                                    }
                                    tmp$ret$25 = tmp$ret$24;
                                  }
                                  var tmp$ret$27;
                                  {
                                    var tmp$ret$26;
                                    {
                                      var tmp0_visit_12 = new SPAN(attributesMapOf('class', 'icon button click-pointer stick-right surface-variant-background rotate'), tmp0_visit_10.get_consumer_tu5133_k$());
                                      tmp0_visit_12.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_12);
                                      var tmp_25;
                                      try {
                                        set_id(tmp0_visit_12, 'bar-expand-button');
                                        tmp0_visit_12.unaryPlus_g7ydph_k$('\uE5CE');
                                        tmp_25 = set_onClickFunction(tmp0_visit_12, App$display$lambda_2());
                                      } catch ($p) {
                                        var tmp_26;
                                        if ($p instanceof Error) {
                                          tmp_26 = tmp0_visit_12.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_12, $p);
                                        } else {
                                          throw $p;
                                        }
                                        tmp_25 = tmp_26;
                                      }
                                      finally {
                                        tmp0_visit_12.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_12);
                                      }
                                      tmp$ret$26 = tmp_25;
                                    }
                                    tmp$ret$27 = tmp$ret$26;
                                  }
                                  tmp_22 = tmp$ret$27;
                                } catch ($p) {
                                  var tmp_27;
                                  if ($p instanceof Error) {
                                    tmp_27 = tmp0_visit_10.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_10, $p);
                                  } else {
                                    throw $p;
                                  }
                                  tmp_22 = tmp_27;
                                }
                                finally {
                                  tmp0_visit_10.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_10);
                                }
                                tmp$ret$28 = tmp_22;
                              }
                              tmp$ret$29 = tmp$ret$28;
                            }
                            var tmp$ret$33;
                            {
                              var tmp$ret$32;
                              {
                                var tmp0_visit_13 = new DIV(attributesMapOf('class', 'expanded-bottom-bar'), tmp0_visit_9.get_consumer_tu5133_k$());
                                tmp0_visit_13.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_13);
                                var tmp_28;
                                try {
                                  set_id(tmp0_visit_13, 'expanded-bottom-bar');
                                  var tmp$ret$31;
                                  {
                                    var tmp$ret$30;
                                    {
                                      var tmp0_visit_14 = new DIV(attributesMapOf('class', 'column'), tmp0_visit_13.get_consumer_tu5133_k$());
                                      tmp0_visit_14.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_14);
                                      var tmp_29;
                                      try {
                                        tmp_29 = set_id(tmp0_visit_14, 'bar-selected-icons');
                                      } catch ($p) {
                                        var tmp_30;
                                        if ($p instanceof Error) {
                                          tmp_30 = tmp0_visit_14.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_14, $p);
                                        } else {
                                          throw $p;
                                        }
                                        tmp_29 = tmp_30;
                                      }
                                      finally {
                                        tmp0_visit_14.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_14);
                                      }
                                      tmp$ret$30 = tmp_29;
                                    }
                                    tmp$ret$31 = tmp$ret$30;
                                  }
                                  tmp_28 = tmp$ret$31;
                                } catch ($p) {
                                  var tmp_31;
                                  if ($p instanceof Error) {
                                    tmp_31 = tmp0_visit_13.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_13, $p);
                                  } else {
                                    throw $p;
                                  }
                                  tmp_28 = tmp_31;
                                }
                                finally {
                                  tmp0_visit_13.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_13);
                                }
                                tmp$ret$32 = tmp_28;
                              }
                              tmp$ret$33 = tmp$ret$32;
                            }
                            tmp_21 = tmp$ret$33;
                          } catch ($p) {
                            var tmp_32;
                            if ($p instanceof Error) {
                              tmp_32 = tmp0_visit_9.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_9, $p);
                            } else {
                              throw $p;
                            }
                            tmp_21 = tmp_32;
                          }
                          finally {
                            tmp0_visit_9.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_9);
                          }
                          tmp$ret$34 = tmp_21;
                        }
                        tmp$ret$35 = tmp$ret$34;
                      }
                    }
                  }
                } catch ($p) {
                  if ($p instanceof Error) {
                    tmp0_visitAndFinalize_0.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visitAndFinalize_0, $p);
                  } else {
                    throw $p;
                  }
                }
                finally {
                  tmp0_visitAndFinalize_0.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visitAndFinalize_0);
                }
              }
              tmp$ret$36 = consumer.finalize_b9lof6_k$();
            }
            tmp$ret$37 = tmp$ret$36;
          }
          tmp$ret$38 = tmp$ret$37;
        }
      }
      tmp$ret$39 = consumer;
    }
  };
  App.$metadata$ = classMeta('App', [CoroutineScope]);
  function main() {
    var tmp = document;
    tmp.addEventListener('DOMContentLoaded', main$lambda());
    var tmp_0 = window;
    tmp_0.onload = main$lambda_0();
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
  function main$lambda() {
    return function (it) {
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda() {
    return function ($this$append) {
      (new App()).display_upsghq_k$($this$append);
      return Unit_getInstance();
    };
  }
  function main$lambda_0() {
    return function (it) {
      var tmp0_safe_receiver = document.body;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = append(tmp0_safe_receiver, main$lambda$lambda());
      }
      return tmp;
    };
  }
  function isSystemInDarkTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
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
  function addToBars(item) {
    console.log('AAAAAAAAAAAAAAAAA');
    addToBars$addRow$default(item, null, 2, null);
    addToBars$addRow(item, 'bar-');
    console.log(document.getElementById('bottom-bar'));
    var tmp0_safe_receiver = document.getElementById('bottom-bar');
    if (tmp0_safe_receiver == null)
      null;
    else {
      append(tmp0_safe_receiver, addToBars$lambda(item));
    }
  }
  function removeFromBars(item) {
    var tmp0_safe_receiver = document.getElementById('selected-item-' + item.get_key_18j28a_k$());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.remove();
    }
    var tmp1_safe_receiver = document.getElementById('bottom-item-' + item.get_key_18j28a_k$());
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.remove();
    }
  }
  function addToBars$addRow($item, prefix) {
    var tmp0_safe_receiver = document.getElementById(prefix + 'selected-icons');
    if (tmp0_safe_receiver == null)
      null;
    else {
      append(tmp0_safe_receiver, addToBars$addRow$lambda(prefix, $item));
    }
  }
  function addToBars$addRow$default($item, prefix, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      prefix = '';
    return addToBars$addRow($item, prefix);
  }
  function addToBars$lambda($item) {
    return function ($this$append) {
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', null), $this$append);
          var tmp$ret$2;
          {
            if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === $this$append)) {
              throw IllegalArgumentException_init_$Create$('Wrong exception');
            }
            {
              tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
              try {
                {
                  {
                    console.log('AAAA');
                    set_id(tmp0_visitAndFinalize, 'bottom-item-' + $item.get_key_18j28a_k$());
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
            tmp$ret$2 = $this$append.finalize_b9lof6_k$();
          }
          tmp$ret$3 = tmp$ret$2;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function addToBars$addRow$lambda$lambda() {
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
  function addToBars$addRow$lambda($prefix, $item) {
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
                    set_id(tmp0_visitAndFinalize, $prefix + 'selected-item-' + $item.get_key_18j28a_k$());
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
                          var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, addToBars$addRow$lambda$lambda(), 31, null);
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
  function elementFromId(id) {
    var tmp = document.getElementById(id);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
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
        removeFromBars($item);
        var tmp3_safe_receiver = document.getElementById('grid-item-' + $item.get_key_18j28a_k$());
        var tmp_1;
        if (tmp3_safe_receiver == null) {
          tmp_1 = Unit_getInstance();
        } else {
          var tmp0_safe_receiver = document.getElementById('grid-item-' + $item.get_key_18j28a_k$());
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.className;
          var tmp_2;
          if (tmp1_safe_receiver == null) {
            tmp_2 = null;
          } else {
            tmp_2 = replace$default(tmp1_safe_receiver, ' active', '', false, 4, null);
          }
          var tmp2_elvis_lhs = tmp_2;
          tmp_1 = tmp3_safe_receiver.className = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        set_selectedListStorage(plus_0(get_selectedListStorage(), $item.get_key_18j28a_k$()));
        var tmp4_safe_receiver = document.getElementById('grid-item-' + $item.get_key_18j28a_k$());
        if (tmp4_safe_receiver == null) {
        } else {
          var tmp5_this = tmp4_safe_receiver;
          tmp5_this.className = plus(tmp5_this.className, ' active');
        }
        tmp = addToBars($item);
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
  isBarExpanded = false;
  _selectedListStorage = null;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=Iconoplastic.js.map