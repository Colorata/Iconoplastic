(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin_org_jetbrains_kotlinx_kotlinx_html.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin_org_jetbrains_kotlinx_kotlinx_html.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Iconoplastic'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'Iconoplastic'.");
    }
    if (typeof kotlin_org_jetbrains_kotlinx_kotlinx_html === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlin_org_jetbrains_kotlinx_kotlinx_html' was not found. Please, check whether 'kotlin_org_jetbrains_kotlinx_kotlinx_html' is loaded prior to 'Iconoplastic'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Iconoplastic'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'Iconoplastic'.");
    }
    root.Iconoplastic = factory(typeof Iconoplastic === 'undefined' ? {} : Iconoplastic, this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], kotlin_org_jetbrains_kotlinx_kotlinx_html, this['kotlinx-serialization-kotlinx-serialization-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_html, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.r6;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var Unit_getInstance = kotlin_kotlin.$_$.z2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.h8;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var trimIndent = kotlin_kotlin.$_$.w7;
  var hashCode = kotlin_kotlin.$_$.b6;
  var equals = kotlin_kotlin.$_$.x5;
  var classMeta = kotlin_kotlin.$_$.w5;
  var split$default = kotlin_kotlin.$_$.l;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r3;
  var mapCapacity = kotlin_kotlin.$_$.r4;
  var coerceAtLeast = kotlin_kotlin.$_$.w6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var Companion_getInstance = kotlin_kotlin.$_$.u2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p1;
  var charArrayOf = kotlin_kotlin.$_$.r5;
  var split$default_0 = kotlin_kotlin.$_$.k;
  var to = kotlin_kotlin.$_$.c9;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u1;
  var createFailure = kotlin_kotlin.$_$.r8;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.v1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.w1;
  var isObject = kotlin_kotlin.$_$.m6;
  var toMap = kotlin_kotlin.$_$.f5;
  var substringAfter$default = kotlin_kotlin.$_$.m;
  var substringBefore$default = kotlin_kotlin.$_$.n;
  var replace$default = kotlin_kotlin.$_$.j;
  var mapOf = kotlin_kotlin.$_$.s4;
  var attributesMapOf = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.l;
  var DIV = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
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
  var toInt = kotlin_kotlin.$_$.n7;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.s2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s1;
  var numberToChar = kotlin_kotlin.$_$.q6;
  var toString = kotlin_kotlin.$_$.t1;
  var append = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.b;
  var get_id = kotlin_org_jetbrains_kotlinx_kotlinx_html.$_$.m;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var contains = kotlin_kotlin.$_$.d7;
  var plus = kotlin_kotlin.$_$.z8;
  var charSequenceGet = kotlin_kotlin.$_$.t5;
  var toString_0 = kotlin_kotlin.$_$.q7;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var List = kotlin_kotlin.$_$.j3;
  var getKClass = kotlin_kotlin.$_$.e;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.q2;
  var arrayOf = kotlin_kotlin.$_$.p8;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var isInterface = kotlin_kotlin.$_$.k6;
  var emptyList = kotlin_kotlin.$_$.f4;
  var Collection = kotlin_kotlin.$_$.b3;
  var plus_0 = kotlin_kotlin.$_$.w4;
  var minus = kotlin_kotlin.$_$.u4;
  var charSequenceLength = kotlin_kotlin.$_$.u5;
  var uppercaseChar = kotlin_kotlin.$_$.x7;
  //endregion
  //region block: pre-declaration
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Unicodes', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('unicodes', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [new ArrayListSerializer(StringSerializer_getInstance())];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_5lsbxj_k$(tmp0_desc, 0, new ArrayListSerializer(StringSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_5lsbxj_k$(tmp0_desc, 0, new ArrayListSerializer(StringSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return Unicodes_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.prototype.serialize_2myfpt_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_pr92am_k$(tmp0_desc, 0, new ArrayListSerializer(StringSerializer_getInstance()), value.unicodes_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_2myfpt_k$(encoder, value instanceof Unicodes ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Unicodes_init_$Init$(seen1, unicodes, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance().descriptor_1);
    $this.unicodes_1 = unicodes;
    return $this;
  }
  function Unicodes_init_$Create$(seen1, unicodes, serializationConstructorMarker) {
    return Unicodes_init_$Init$(seen1, unicodes, serializationConstructorMarker, Object.create(Unicodes.prototype));
  }
  function Unicodes$toJson$lambda() {
    return function (it) {
      return '"' + fromSymbol(it) + '"';
    };
  }
  function Unicodes(unicodes) {
    Companion_getInstance_1();
    this.unicodes_1 = unicodes;
  }
  Unicodes.prototype.get_unicodes_y5222n_k$ = function () {
    return this.unicodes_1;
  };
  Unicodes.prototype.toJson_edh1bx_k$ = function () {
    return trimIndent('\n            {\n                "unicodes": [\n                    ' + joinToString$default(this.unicodes_1, null, null, null, 0, null, Unicodes$toJson$lambda(), 31, null) + '\n                ]\n            }\n        ');
  };
  Unicodes.prototype.component1_7eebsc_k$ = function () {
    return this.unicodes_1;
  };
  Unicodes.prototype.copy_7lypfm_k$ = function (unicodes) {
    return new Unicodes(unicodes);
  };
  Unicodes.prototype.copy$default_ns4pou_k$ = function (unicodes, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      unicodes = this.unicodes_1;
    return this.copy_7lypfm_k$(unicodes);
  };
  Unicodes.prototype.toString = function () {
    return 'Unicodes(unicodes=' + this.unicodes_1 + ')';
  };
  Unicodes.prototype.hashCode = function () {
    return hashCode(this.unicodes_1);
  };
  Unicodes.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Unicodes))
      return false;
    var tmp0_other_with_cast = other instanceof Unicodes ? other : THROW_CCE();
    if (!equals(this.unicodes_1, tmp0_other_with_cast.unicodes_1))
      return false;
    return true;
  };
  Unicodes.$metadata$ = classMeta('Unicodes', undefined, undefined, {0: $serializer_getInstance});
  function Api$getCodepoints$lambda$lambda($onLoad) {
    return function (it) {
      var tmp$ret$7;
      {
        var tmp0_associate = split$default(it, ['\n'], false, 0, 6, null);
        var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associate, 10)), 16);
        var tmp$ret$6;
        {
          var tmp1_associateTo = LinkedHashMap_init_$Create$(capacity);
          var tmp0_iterator = tmp0_associate.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            {
              var tmp$ret$5;
              {
                var tmp$ret$4;
                $l$block: {
                  var tmp$ret$3;
                  {
                    var tmp;
                    try {
                      var tmp$ret$1;
                      {
                        var tmp0_success = Companion_getInstance();
                        var tmp$ret$0;
                        {
                          var tmp_0 = charArrayOf([_Char___init__impl__6a9atx(32)]);
                          var final = split$default_0(element, tmp_0, false, 0, 6, null);
                          tmp$ret$0 = to(final.get_fkrdnv_k$(0), final.get_fkrdnv_k$(1));
                        }
                        var tmp1_success = tmp$ret$0;
                        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
                      }
                      tmp = tmp$ret$1;
                    } catch ($p) {
                      var tmp_1;
                      if ($p instanceof Error) {
                        var tmp$ret$2;
                        {
                          var tmp2_failure = Companion_getInstance();
                          tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
                        }
                        tmp_1 = tmp$ret$2;
                      } else {
                        throw $p;
                      }
                      tmp = tmp_1;
                    }
                    tmp$ret$3 = tmp;
                  }
                  var tmp0_getOrDefault = tmp$ret$3;
                  var tmp1_getOrDefault = to('10mp', 'E8B8');
                  if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrDefault)) {
                    tmp$ret$4 = tmp1_getOrDefault;
                    break $l$block;
                  }
                  var tmp_2 = _Result___get_value__impl__bjfvqg(tmp0_getOrDefault);
                  tmp$ret$4 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
                }
                tmp$ret$5 = tmp$ret$4;
              }
              var tmp0_plusAssign = tmp$ret$5;
              tmp1_associateTo.put_3mhbri_k$(tmp0_plusAssign.first_1, tmp0_plusAssign.second_1);
            }
          }
          tmp$ret$6 = tmp1_associateTo;
        }
        tmp$ret$7 = tmp$ret$6;
      }
      $onLoad(toMap(tmp$ret$7));
      return Unit_getInstance();
    };
  }
  function Api$getCodepoints$lambda($onLoad) {
    return function (it) {
      var tmp = it.text();
      return tmp.then(Api$getCodepoints$lambda$lambda($onLoad));
    };
  }
  function Api$getFontUrl$lambda$lambda($onLoad) {
    return function (response) {
      console.log(response);
      var tmp = substringAfter$default(response, '{"link":"', null, 2, null);
      var tmp_0 = substringBefore$default(tmp, '"}', null, 2, null);
      $onLoad(replace$default(tmp_0, 'cache/', '', false, 4, null));
      return Unit_getInstance();
    };
  }
  function Api$getFontUrl$lambda(this$0, $onLoad) {
    return function (it) {
      console.log(this$0.baseUrl_1 + '/cache/');
      var tmp = it.text();
      return tmp.then(Api$getFontUrl$lambda$lambda($onLoad));
    };
  }
  function Api() {
    this.baseUrl_1 = 'https://iconoplastic-api.herokuapp.com';
  }
  Api.prototype.get_baseUrl_48hdl7_k$ = function () {
    return this.baseUrl_1;
  };
  Api.prototype.getCodepoints_qdvdo5_k$ = function (onLoad) {
    var tmp = window.fetch(this.baseUrl_1 + '/download/codepoints');
    tmp.then(Api$getCodepoints$lambda(onLoad));
  };
  Api.prototype.getFontUrl_p6yp0r_k$ = function (unicodes, onLoad) {
    console.log(unicodes.toJson_edh1bx_k$());
    var tmp = window;
    var tmp_0 = this.baseUrl_1 + '/icons_configure';
    var tmp$ret$0;
    {
      var tmp0_RequestInit = mapOf([to('Accept', 'application/json'), to('Content-Type', 'application/json')]);
      var tmp1_RequestInit = unicodes.toJson_edh1bx_k$();
      var tmp2_RequestInit = undefined;
      var tmp3_RequestInit = undefined;
      var tmp4_RequestInit = undefined;
      var tmp5_RequestInit = undefined;
      var tmp6_RequestInit = undefined;
      var tmp7_RequestInit = undefined;
      var tmp8_RequestInit = undefined;
      var tmp9_RequestInit = undefined;
      var tmp10_RequestInit = undefined;
      var o = {};
      o['method'] = 'POST';
      o['headers'] = tmp0_RequestInit;
      o['body'] = tmp1_RequestInit;
      o['referrer'] = tmp2_RequestInit;
      o['referrerPolicy'] = tmp3_RequestInit;
      o['mode'] = tmp4_RequestInit;
      o['credentials'] = tmp5_RequestInit;
      o['cache'] = tmp6_RequestInit;
      o['redirect'] = tmp7_RequestInit;
      o['integrity'] = tmp8_RequestInit;
      o['keepalive'] = tmp9_RequestInit;
      o['window'] = tmp10_RequestInit;
      tmp$ret$0 = o;
    }
    var tmp_1 = tmp.fetch(tmp_0, tmp$ret$0);
    tmp_1.then(Api$getFontUrl$lambda(this, onLoad));
  };
  Api.prototype.downloadToLocal_fp1ytm_k$ = function (url) {
    var tmp0_safe_receiver = window.open(this.baseUrl_1 + '/download/' + url);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.focus();
    }
  };
  Api.$metadata$ = classMeta('Api');
  function set_isBarExpanded(_set____db54di) {
    isBarExpanded = _set____db54di;
  }
  function get_isBarExpanded() {
    return isBarExpanded;
  }
  var isBarExpanded;
  function App(_this__u8e3s4) {
    var response = {_v: null};
    var tmp$ret$27;
    {
      var tmp$ret$26;
      {
        var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'row space-between'), _this__u8e3s4);
        var tmp$ret$25;
        {
          if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
            try {
              {
                {
                  var tmp = new Api();
                  tmp.getCodepoints_qdvdo5_k$(App$lambda(response));
                  var tmp$ret$16;
                  {
                    var tmp$ret$15;
                    {
                      var tmp0_visit = new DIV(attributesMapOf('class', 'row fill-max-width'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                      var tmp_0;
                      try {
                        var tmp$ret$14;
                        {
                          var tmp$ret$13;
                          {
                            var tmp0_visit_0 = new DIV(attributesMapOf('class', 'column'), tmp0_visit.get_consumer_tu5133_k$());
                            tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
                            var tmp_1;
                            try {
                              var tmp$ret$2;
                              {
                                var tmp$ret$1;
                                {
                                  var tmp0_visit_1 = new IMG(attributesMapOf_0(['alt', null, 'src', null, 'class', 'logo']), tmp0_visit_0.get_consumer_tu5133_k$());
                                  tmp0_visit_1.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_1);
                                  var tmp_2;
                                  try {
                                    var tmp$ret$0;
                                    {
                                      tmp$ret$0 = Unit_getInstance();
                                    }
                                    tmp_2 = tmp$ret$0;
                                  } catch ($p) {
                                    var tmp_3;
                                    if ($p instanceof Error) {
                                      tmp_3 = tmp0_visit_1.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_1, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_2 = tmp_3;
                                  }
                                  finally {
                                    tmp0_visit_1.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_1);
                                  }
                                  tmp$ret$1 = tmp_2;
                                }
                                tmp$ret$2 = tmp$ret$1;
                              }
                              var tmp$ret$10;
                              {
                                var tmp$ret$9;
                                {
                                  var tmp0_visit_2 = new DIV(attributesMapOf('class', 'search-box search-row'), tmp0_visit_0.get_consumer_tu5133_k$());
                                  tmp0_visit_2.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_2);
                                  var tmp_4;
                                  try {
                                    var tmp$ret$4;
                                    {
                                      var tmp$ret$3;
                                      {
                                        var tmp0_visit_3 = new SPAN(attributesMapOf('class', 'search-icon'), tmp0_visit_2.get_consumer_tu5133_k$());
                                        tmp0_visit_3.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_3);
                                        var tmp_5;
                                        try {
                                          tmp_5 = tmp0_visit_3.unaryPlus_g7ydph_k$('\uE8B6');
                                        } catch ($p) {
                                          var tmp_6;
                                          if ($p instanceof Error) {
                                            tmp_6 = tmp0_visit_3.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_3, $p);
                                          } else {
                                            throw $p;
                                          }
                                          tmp_5 = tmp_6;
                                        }
                                        finally {
                                          tmp0_visit_3.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_3);
                                        }
                                        tmp$ret$3 = tmp_5;
                                      }
                                      tmp$ret$4 = tmp$ret$3;
                                    }
                                    var tmp$ret$8;
                                    {
                                      var tmp$ret$7;
                                      {
                                        var tmp0_visit_4 = new SPAN(attributesMapOf('class', null), tmp0_visit_2.get_consumer_tu5133_k$());
                                        tmp0_visit_4.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_4);
                                        var tmp_7;
                                        try {
                                          var tmp$ret$6;
                                          {
                                            var tmp$ret$5;
                                            {
                                              var tmp0_safe_receiver = null;
                                              var tmp_8 = tmp0_safe_receiver == null ? null : enumEncode(tmp0_safe_receiver);
                                              var tmp1_safe_receiver = null;
                                              var tmp_9 = tmp1_safe_receiver == null ? null : enumEncode(tmp1_safe_receiver);
                                              var tmp2_safe_receiver = null;
                                              var tmp0_visit_5 = new INPUT(attributesMapOf_0(['type', tmp_8, 'formenctype', tmp_9, 'formmethod', tmp2_safe_receiver == null ? null : enumEncode(tmp2_safe_receiver), 'name', null, 'class', 'search']), tmp0_visit_4.get_consumer_tu5133_k$());
                                              tmp0_visit_5.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_5);
                                              var tmp_10;
                                              try {
                                                tmp0_visit_5.set_placeholder_y9dqmc_k$('Search icons');
                                                set_id(tmp0_visit_5, 'search-field');
                                                var onChange = App$lambda_0(tmp0_visit_5, response);
                                                set_onChangeFunction(tmp0_visit_5, App$lambda_1(onChange));
                                                tmp_10 = set_onKeyUpFunction(tmp0_visit_5, App$lambda_2(onChange));
                                              } catch ($p) {
                                                var tmp_11;
                                                if ($p instanceof Error) {
                                                  tmp_11 = tmp0_visit_5.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_5, $p);
                                                } else {
                                                  throw $p;
                                                }
                                                tmp_10 = tmp_11;
                                              }
                                              finally {
                                                tmp0_visit_5.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_5);
                                              }
                                              tmp$ret$5 = tmp_10;
                                            }
                                            tmp$ret$6 = tmp$ret$5;
                                          }
                                          tmp_7 = tmp$ret$6;
                                        } catch ($p) {
                                          var tmp_12;
                                          if ($p instanceof Error) {
                                            tmp_12 = tmp0_visit_4.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_4, $p);
                                          } else {
                                            throw $p;
                                          }
                                          tmp_7 = tmp_12;
                                        }
                                        finally {
                                          tmp0_visit_4.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_4);
                                        }
                                        tmp$ret$7 = tmp_7;
                                      }
                                      tmp$ret$8 = tmp$ret$7;
                                    }
                                    tmp_4 = tmp$ret$8;
                                  } catch ($p) {
                                    var tmp_13;
                                    if ($p instanceof Error) {
                                      tmp_13 = tmp0_visit_2.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_2, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_4 = tmp_13;
                                  }
                                  finally {
                                    tmp0_visit_2.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_2);
                                  }
                                  tmp$ret$9 = tmp_4;
                                }
                                tmp$ret$10 = tmp$ret$9;
                              }
                              var tmp$ret$12;
                              {
                                var tmp$ret$11;
                                {
                                  var tmp0_visit_6 = new DIV(attributesMapOf('class', 'grid'), tmp0_visit_0.get_consumer_tu5133_k$());
                                  tmp0_visit_6.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_6);
                                  var tmp_14;
                                  try {
                                    tmp_14 = set_id(tmp0_visit_6, 'grid-icons');
                                  } catch ($p) {
                                    var tmp_15;
                                    if ($p instanceof Error) {
                                      tmp_15 = tmp0_visit_6.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_6, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_14 = tmp_15;
                                  }
                                  finally {
                                    tmp0_visit_6.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_6);
                                  }
                                  tmp$ret$11 = tmp_14;
                                }
                                tmp$ret$12 = tmp$ret$11;
                              }
                              tmp_1 = tmp$ret$12;
                            } catch ($p) {
                              var tmp_16;
                              if ($p instanceof Error) {
                                tmp_16 = tmp0_visit_0.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_0, $p);
                              } else {
                                throw $p;
                              }
                              tmp_1 = tmp_16;
                            }
                            finally {
                              tmp0_visit_0.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_0);
                            }
                            tmp$ret$13 = tmp_1;
                          }
                          tmp$ret$14 = tmp$ret$13;
                        }
                        tmp_0 = tmp$ret$14;
                      } catch ($p) {
                        var tmp_17;
                        if ($p instanceof Error) {
                          tmp_17 = tmp0_visit.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit, $p);
                        } else {
                          throw $p;
                        }
                        tmp_0 = tmp_17;
                      }
                      finally {
                        tmp0_visit.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit);
                      }
                      tmp$ret$15 = tmp_0;
                    }
                    tmp$ret$16 = tmp$ret$15;
                  }
                  var tmp$ret$24;
                  {
                    var tmp$ret$23;
                    {
                      var tmp0_visit_7 = new DIV(attributesMapOf('class', 'column sticky surface-variant-background'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit_7.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_7);
                      var tmp_18;
                      try {
                        var tmp$ret$20;
                        {
                          var tmp$ret$19;
                          {
                            var tmp0_visit_8 = new DIV(attributesMapOf('class', 'picker-card'), tmp0_visit_7.get_consumer_tu5133_k$());
                            tmp0_visit_8.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_8);
                            var tmp_19;
                            try {
                              var tmp$ret$18;
                              {
                                var tmp$ret$17;
                                {
                                  var tmp0_visit_9 = new DIV(attributesMapOf('class', 'column'), tmp0_visit_8.get_consumer_tu5133_k$());
                                  tmp0_visit_9.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_9);
                                  var tmp_20;
                                  try {
                                    tmp_20 = set_id(tmp0_visit_9, 'selected-icons');
                                  } catch ($p) {
                                    var tmp_21;
                                    if ($p instanceof Error) {
                                      tmp_21 = tmp0_visit_9.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_9, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_20 = tmp_21;
                                  }
                                  finally {
                                    tmp0_visit_9.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_9);
                                  }
                                  tmp$ret$17 = tmp_20;
                                }
                                tmp$ret$18 = tmp$ret$17;
                              }
                              tmp_19 = tmp$ret$18;
                            } catch ($p) {
                              var tmp_22;
                              if ($p instanceof Error) {
                                tmp_22 = tmp0_visit_8.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_8, $p);
                              } else {
                                throw $p;
                              }
                              tmp_19 = tmp_22;
                            }
                            finally {
                              tmp0_visit_8.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_8);
                            }
                            tmp$ret$19 = tmp_19;
                          }
                          tmp$ret$20 = tmp$ret$19;
                        }
                        var tmp$ret$22;
                        {
                          var tmp$ret$21;
                          {
                            var tmp0_visit_10 = new DIV(attributesMapOf('class', 'sticky-bottom row picker-card-bottom'), tmp0_visit_7.get_consumer_tu5133_k$());
                            tmp0_visit_10.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_10);
                            var tmp_23;
                            try {
                              tmp_23 = Button(_this__u8e3s4, 'Download Font', '\uE167', App$lambda_3());
                            } catch ($p) {
                              var tmp_24;
                              if ($p instanceof Error) {
                                tmp_24 = tmp0_visit_10.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_10, $p);
                              } else {
                                throw $p;
                              }
                              tmp_23 = tmp_24;
                            }
                            finally {
                              tmp0_visit_10.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_10);
                            }
                            tmp$ret$21 = tmp_23;
                          }
                          tmp$ret$22 = tmp$ret$21;
                        }
                        tmp_18 = tmp$ret$22;
                      } catch ($p) {
                        var tmp_25;
                        if ($p instanceof Error) {
                          tmp_25 = tmp0_visit_7.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_7, $p);
                        } else {
                          throw $p;
                        }
                        tmp_18 = tmp_25;
                      }
                      finally {
                        tmp0_visit_7.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_7);
                      }
                      tmp$ret$23 = tmp_18;
                    }
                    tmp$ret$24 = tmp$ret$23;
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
          tmp$ret$25 = _this__u8e3s4.finalize_b9lof6_k$();
        }
        tmp$ret$26 = tmp$ret$25;
      }
      tmp$ret$27 = tmp$ret$26;
    }
    var tmp$ret$42;
    {
      var tmp$ret$41;
      {
        var tmp0_visitAndFinalize_0 = new FOOTER(attributesMapOf('class', null), _this__u8e3s4);
        var tmp$ret$40;
        {
          if (!(tmp0_visitAndFinalize_0.get_consumer_tu5133_k$() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize_0);
            try {
              {
                {
                  var tmp$ret$39;
                  {
                    var tmp$ret$38;
                    {
                      var tmp0_visit_11 = new DIV(attributesMapOf('class', 'column'), tmp0_visitAndFinalize_0.get_consumer_tu5133_k$());
                      tmp0_visit_11.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_11);
                      var tmp_26;
                      try {
                        set_id(tmp0_visit_11, 'footer');
                        var tmp$ret$33;
                        {
                          var tmp$ret$32;
                          {
                            var tmp0_visit_12 = new DIV(attributesMapOf('class', 'bottom-bar'), tmp0_visit_11.get_consumer_tu5133_k$());
                            tmp0_visit_12.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_12);
                            var tmp_27;
                            try {
                              var tmp$ret$29;
                              {
                                var tmp$ret$28;
                                {
                                  var tmp0_visit_13 = new DIV(attributesMapOf('class', 'row marquee'), tmp0_visit_12.get_consumer_tu5133_k$());
                                  tmp0_visit_13.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_13);
                                  var tmp_28;
                                  try {
                                    tmp_28 = set_id(tmp0_visit_13, 'bottom-bar');
                                  } catch ($p) {
                                    var tmp_29;
                                    if ($p instanceof Error) {
                                      tmp_29 = tmp0_visit_13.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_13, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_28 = tmp_29;
                                  }
                                  finally {
                                    tmp0_visit_13.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_13);
                                  }
                                  tmp$ret$28 = tmp_28;
                                }
                                tmp$ret$29 = tmp$ret$28;
                              }
                              var tmp$ret$31;
                              {
                                var tmp$ret$30;
                                {
                                  var tmp0_visit_14 = new SPAN(attributesMapOf('class', 'icon button click-pointer stick-right surface-variant-background rotate'), tmp0_visit_12.get_consumer_tu5133_k$());
                                  tmp0_visit_14.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_14);
                                  var tmp_30;
                                  try {
                                    set_id(tmp0_visit_14, 'bar-expand-button');
                                    tmp0_visit_14.unaryPlus_g7ydph_k$('\uE5CE');
                                    tmp_30 = set_onClickFunction(tmp0_visit_14, App$lambda_4());
                                  } catch ($p) {
                                    var tmp_31;
                                    if ($p instanceof Error) {
                                      tmp_31 = tmp0_visit_14.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_14, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_30 = tmp_31;
                                  }
                                  finally {
                                    tmp0_visit_14.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_14);
                                  }
                                  tmp$ret$30 = tmp_30;
                                }
                                tmp$ret$31 = tmp$ret$30;
                              }
                              tmp_27 = tmp$ret$31;
                            } catch ($p) {
                              var tmp_32;
                              if ($p instanceof Error) {
                                tmp_32 = tmp0_visit_12.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_12, $p);
                              } else {
                                throw $p;
                              }
                              tmp_27 = tmp_32;
                            }
                            finally {
                              tmp0_visit_12.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_12);
                            }
                            tmp$ret$32 = tmp_27;
                          }
                          tmp$ret$33 = tmp$ret$32;
                        }
                        var tmp$ret$37;
                        {
                          var tmp$ret$36;
                          {
                            var tmp0_visit_15 = new DIV(attributesMapOf('class', 'expanded-bottom-bar'), tmp0_visit_11.get_consumer_tu5133_k$());
                            tmp0_visit_15.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_15);
                            var tmp_33;
                            try {
                              set_id(tmp0_visit_15, 'expanded-bottom-bar');
                              var tmp$ret$35;
                              {
                                var tmp$ret$34;
                                {
                                  var tmp0_visit_16 = new DIV(attributesMapOf('class', 'column'), tmp0_visit_15.get_consumer_tu5133_k$());
                                  tmp0_visit_16.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_16);
                                  var tmp_34;
                                  try {
                                    tmp_34 = set_id(tmp0_visit_16, 'bar-selected-icons');
                                  } catch ($p) {
                                    var tmp_35;
                                    if ($p instanceof Error) {
                                      tmp_35 = tmp0_visit_16.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_16, $p);
                                    } else {
                                      throw $p;
                                    }
                                    tmp_34 = tmp_35;
                                  }
                                  finally {
                                    tmp0_visit_16.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_16);
                                  }
                                  tmp$ret$34 = tmp_34;
                                }
                                tmp$ret$35 = tmp$ret$34;
                              }
                              tmp_33 = tmp$ret$35;
                            } catch ($p) {
                              var tmp_36;
                              if ($p instanceof Error) {
                                tmp_36 = tmp0_visit_15.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_15, $p);
                              } else {
                                throw $p;
                              }
                              tmp_33 = tmp_36;
                            }
                            finally {
                              tmp0_visit_15.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_15);
                            }
                            tmp$ret$36 = tmp_33;
                          }
                          tmp$ret$37 = tmp$ret$36;
                        }
                        tmp_26 = tmp$ret$37;
                      } catch ($p) {
                        var tmp_37;
                        if ($p instanceof Error) {
                          tmp_37 = tmp0_visit_11.get_consumer_tu5133_k$().onTagError_d07vof_k$(tmp0_visit_11, $p);
                        } else {
                          throw $p;
                        }
                        tmp_26 = tmp_37;
                      }
                      finally {
                        tmp0_visit_11.get_consumer_tu5133_k$().onTagEnd_f3ehek_k$(tmp0_visit_11);
                      }
                      tmp$ret$38 = tmp_26;
                    }
                    tmp$ret$39 = tmp$ret$38;
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
          tmp$ret$40 = _this__u8e3s4.finalize_b9lof6_k$();
        }
        tmp$ret$41 = tmp$ret$40;
      }
      tmp$ret$42 = tmp$ret$41;
    }
  }
  function main() {
    var tmp = window;
    tmp.onload = main$lambda();
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
  function App$lambda$lambda($element) {
    return function ($this$append) {
      GridItem($this$append, $element);
      return Unit_getInstance();
    };
  }
  function App$lambda($response) {
    return function (it) {
      $response._v = it;
      var grid = document.getElementById('grid-icons');
      var tmp0_safe_receiver = $response._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          }
          var tmp0_iterator = tmp$ret$0;
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            {
              var tmp0_safe_receiver_0 = grid;
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                append(tmp0_safe_receiver_0, App$lambda$lambda(element));
              }
            }
          }
        }
      }
      var tmp1_safe_receiver = elementFromId('search-field');
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.focus();
      }
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_0($element) {
    return function ($this$append) {
      GridItem($this$append, $element);
      return Unit_getInstance();
    };
  }
  function App$lambda_0($tmp0_visit, $response) {
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
                append(tmp0_safe_receiver_1, App$lambda$lambda_0(element_1));
              }
            }
          }
        }
        tmp_1 = Unit_getInstance();
      }
      return tmp_1;
    };
  }
  function App$lambda_1($onChange) {
    return function (it) {
      $onChange();
      return Unit_getInstance();
    };
  }
  function App$lambda_2($onChange) {
    return function (it) {
      $onChange();
      return Unit_getInstance();
    };
  }
  function App$lambda$lambda_1() {
    return function (it) {
      var tmp0_safe_receiver = it;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = (new Api()).downloadToLocal_fp1ytm_k$(tmp0_safe_receiver);
        }
      }
      return Unit_getInstance();
    };
  }
  function App$lambda_3() {
    return function () {
      var tmp = new Api();
      var tmp_0 = new Unicodes(get_selectedListStorage());
      tmp.getFontUrl_p6yp0r_k$(tmp_0, App$lambda$lambda_1());
      return Unit_getInstance();
    };
  }
  function App$lambda_4() {
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
  function main$lambda$lambda() {
    return function ($this$append) {
      App($this$append);
      return Unit_getInstance();
    };
  }
  function main$lambda() {
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
  function fromSymbol(_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp$ret$0;
      {
        var tmp0__get_code__88qj9g = charSequenceGet(_this__u8e3s4, 0);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
      }
      var tmp1_uppercase = toString_0(tmp$ret$0, 16);
      var tmp$ret$1;
      {
        tmp$ret$1 = tmp1_uppercase;
      }
      tmp$ret$2 = tmp$ret$1.toUpperCase();
    }
    return tmp$ret$2;
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
    var tmp2_safe_receiver = document.getElementById('bar-selected-item-' + item.get_key_18j28a_k$());
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.remove();
    }
  }
  function addToBars$addRow($item, prefix) {
    var tmp0_safe_receiver = document.getElementById(prefix + 'selected-icons');
    if (tmp0_safe_receiver == null)
      null;
    else {
      append(tmp0_safe_receiver, addToBars$addRow$lambda($item, prefix));
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
  function addToBars$addRow$lambda($item, $prefix) {
    return function ($this$append) {
      SelectedIcon($this$append, $item, $prefix);
      return Unit_getInstance();
    };
  }
  function elementFromId(id) {
    var tmp = document.getElementById(id);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function Button(_this__u8e3s4, text, icon, onClick) {
    var tmp$ret$6;
    {
      var tmp$ret$5;
      {
        var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'row button'), _this__u8e3s4);
        var tmp$ret$4;
        {
          if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
            try {
              {
                {
                  set_onClickFunction(tmp0_visitAndFinalize, Button$lambda(onClick));
                  var tmp$ret$1;
                  {
                    var tmp$ret$0;
                    {
                      var tmp0_visit = new SPAN(attributesMapOf('class', 'icon button-icon'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                      var tmp;
                      try {
                        tmp = tmp0_visit.unaryPlus_g7ydph_k$(icon);
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
                      var tmp0_visit_0 = new SPAN(attributesMapOf('class', 'button-text'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit_0.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit_0);
                      var tmp_1;
                      try {
                        tmp_1 = tmp0_visit_0.unaryPlus_g7ydph_k$(text);
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
          tmp$ret$4 = _this__u8e3s4.finalize_b9lof6_k$();
        }
        tmp$ret$5 = tmp$ret$4;
      }
      tmp$ret$6 = tmp$ret$5;
    }
  }
  function Button$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
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
  function SelectedIcon(_this__u8e3s4, item, prefix) {
    var tmp$ret$6;
    {
      var tmp$ret$5;
      {
        var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', 'row row-start fill-max-width'), _this__u8e3s4);
        var tmp$ret$4;
        {
          if (!(tmp0_visitAndFinalize.get_consumer_tu5133_k$() === _this__u8e3s4)) {
            throw IllegalArgumentException_init_$Create$('Wrong exception');
          }
          {
            tmp0_visitAndFinalize.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visitAndFinalize);
            try {
              {
                {
                  set_id(tmp0_visitAndFinalize, prefix + 'selected-item-' + item.get_key_18j28a_k$());
                  var tmp$ret$1;
                  {
                    var tmp$ret$0;
                    {
                      var tmp0_visit = new SPAN(attributesMapOf('class', 'icon'), tmp0_visitAndFinalize.get_consumer_tu5133_k$());
                      tmp0_visit.get_consumer_tu5133_k$().onTagStart_jhb705_k$(tmp0_visit);
                      var tmp;
                      try {
                        tmp = tmp0_visit.unaryPlus_g7ydph_k$(toSymbol(item.get_value_j01efc_k$()));
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
                        var tmp_2 = item.get_key_18j28a_k$();
                        var tmp_3 = replace$default(tmp_2, '_', ' ', false, 4, null);
                        var tmp_4 = split$default(tmp_3, [' '], false, 0, 6, null);
                        var tmp_5 = joinToString$default(tmp_4, null, null, null, 0, null, SelectedIcon$lambda(), 31, null);
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
          tmp$ret$4 = _this__u8e3s4.finalize_b9lof6_k$();
        }
        tmp$ret$5 = tmp$ret$4;
      }
      tmp$ret$6 = tmp$ret$5;
    }
  }
  function SelectedIcon$default(_this__u8e3s4, item, prefix, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      prefix = '';
    return SelectedIcon(_this__u8e3s4, item, prefix);
  }
  function SelectedIcon$lambda() {
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
  //region block: post-declaration
  $serializer.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  isBarExpanded = false;
  _selectedListStorage = null;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=Iconoplastic.js.map