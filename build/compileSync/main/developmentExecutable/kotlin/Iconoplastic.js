(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin_org_jetbrains_kotlinx_kotlinx_html.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_html.js'));
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
    root.Iconoplastic = factory(typeof Iconoplastic === 'undefined' ? {} : Iconoplastic, this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], kotlin_org_jetbrains_kotlinx_kotlinx_html);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_html) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.x2;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h2;
  var split$default = kotlin_kotlin.$_$.e;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t1;
  var mapCapacity = kotlin_kotlin.$_$.a2;
  var coerceAtLeast = kotlin_kotlin.$_$.t3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var Companion_getInstance = kotlin_kotlin.$_$.l1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y;
  var charArrayOf = kotlin_kotlin.$_$.e3;
  var split$default_0 = kotlin_kotlin.$_$.d;
  var to = kotlin_kotlin.$_$.p4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.c1;
  var createFailure = kotlin_kotlin.$_$.j4;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.e1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.f1;
  var THROW_CCE = kotlin_kotlin.$_$.g4;
  var isObject = kotlin_kotlin.$_$.o3;
  var toMap = kotlin_kotlin.$_$.e2;
  var classMeta = kotlin_kotlin.$_$.h3;
  var Unit_getInstance = kotlin_kotlin.$_$.m1;
  var attributesMapOf = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.h;
  var DIV = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.c;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var set_id = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.i;
  var toInt = kotlin_kotlin.$_$.x3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.a1;
  var numberToChar = kotlin_kotlin.$_$.p3;
  var toString = kotlin_kotlin.$_$.b1;
  var STYLE = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.f;
  var attributesMapOf_0 = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.g;
  var LINK = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.d;
  var append = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.a;
  var charSequenceLength = kotlin_kotlin.$_$.g3;
  var charSequenceGet = kotlin_kotlin.$_$.f3;
  var uppercaseChar = kotlin_kotlin.$_$.z3;
  var SPAN = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.e;
  var replace$default = kotlin_kotlin.$_$.c;
  var joinToString$default = kotlin_kotlin.$_$.b;
  var plus = kotlin_kotlin.$_$.m4;
  var set_onClickFunction = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.b;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var isInterface = kotlin_kotlin.$_$.n3;
  var SuspendFunction1 = kotlin_kotlin.$_$.y2;
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
    var tmp$ret$7;
    {
      var tmp$ret$6;
      {
        var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'row'), _this__u8e3s4);
        var tmp$ret$5;
        {
          if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
            try {
              {
                {
                  var tmp$ret$4;
                  {
                    var tmp$ret$3;
                    {
                      var tmp0_visit = new DIV(attributesMapOf('class', 'column'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                      var tmp;
                      try {
                        var count = {_v: 0};
                        var tmp$ret$0;
                        {
                          tmp$ret$0 = LinkedHashMap_init_$Create$_0();
                        }
                        var selectedList = tmp$ret$0;
                        var tmp_0 = CoroutineScope(Dispatchers_getInstance().Default_1);
                        launch$default(tmp_0, null, null, sayHello$slambda_0(count, selectedList, null), 3, null);
                        var tmp$ret$2;
                        {
                          var tmp$ret$1;
                          {
                            var tmp0_visit_0 = new DIV(attributesMapOf('class', 'grid'), tmp0_visit.get_consumer_tu5133_k$());
                            tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
                            var tmp_1;
                            try {
                              tmp_1 = set_id(tmp0_visit_0, 'grid-icons');
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
                        tmp = tmp$ret$2;
                      } catch ($p) {
                        var tmp_3;
                        if ($p instanceof Error) {
                          tmp_3 = tmp0_visit.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit, $p);
                        } else {
                          throw $p;
                        }
                        tmp = tmp_3;
                      }
                      finally {
                        tmp0_visit.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit);
                      }
                      tmp$ret$3 = tmp;
                    }
                    tmp$ret$4 = tmp$ret$3;
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
          tmp$ret$5 = _this__u8e3s4.finalize_b9lof6_k$();
        }
        tmp$ret$6 = tmp$ret$5;
      }
      tmp$ret$7 = tmp$ret$6;
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
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp0_visitAndFinalize = new LINK(attributesMapOf_0(['href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200', 'rel', 'stylesheet', 'type', null]), $this$append);
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
  function sayHello$slambda$lambda$lambda$lambda$lambda() {
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
  function sayHello$slambda$lambda$lambda$lambda($index, $element) {
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
                          var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, sayHello$slambda$lambda$lambda$lambda$lambda(), 31, null);
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
  function sayHello$slambda$lambda$lambda($selectedList, $index, $element) {
    return function (event) {
      event.preventDefault();
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
          append(tmp7_safe_receiver, sayHello$slambda$lambda$lambda$lambda($index, $element));
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function sayHello$slambda$lambda$lambda_0() {
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
  function sayHello$slambda$lambda($globalIndex, $element, $selectedList) {
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
                    set_onClickFunction(tmp0_visitAndFinalize, sayHello$slambda$lambda$lambda($selectedList, index, $element));
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
                          var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, sayHello$slambda$lambda$lambda_0(), 31, null);
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
  function sayHello$slambda($count, $selectedList, resultContinuation) {
    this.$count_1 = $count;
    this.$selectedList_1 = $selectedList;
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
            var response = suspendResult;
            this.$count_1._v = response.get_size_woubt6_k$();
            var globalIndex = {_v: 0};
            var grid = document.getElementById('grid-icons');
            var tmp0_iterator = response.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var tmp0_safe_receiver = grid;
              if (tmp0_safe_receiver == null)
                null;
              else {
                append(tmp0_safe_receiver, sayHello$slambda$lambda(globalIndex, element, this.$selectedList_1));
              }
              globalIndex._v = globalIndex._v + 1 | 0;
            }

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
    var i = new sayHello$slambda(this.$count_1, this.$selectedList_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  sayHello$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  sayHello$slambda.$metadata$ = classMeta('sayHello$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function sayHello$slambda_0($count, $selectedList, resultContinuation) {
    var i = new sayHello$slambda($count, $selectedList, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function isSystemInDarkTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  main();
  return _;
}));

//# sourceMappingURL=Iconoplastic.js.map