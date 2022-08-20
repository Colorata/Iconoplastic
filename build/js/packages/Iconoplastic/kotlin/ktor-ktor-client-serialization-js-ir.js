(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js', './ktor-ktor-http-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-client-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-client-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'ktor-ktor-client-json-js-ir' was not found. Please, check whether 'ktor-ktor-client-json-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    root['ktor-ktor-client-serialization-js-ir'] = factory(typeof this['ktor-ktor-client-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['ktor-ktor-http-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-client-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_json) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.g4;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.r9;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var ensureNotNull = kotlin_kotlin.$_$.cd;
  var write = kotlin_io_ktor_ktor_client_json.$_$.a;
  var JsonSerializer = kotlin_io_ktor_ktor_client_json.$_$.b;
  var classMeta = kotlin_kotlin.$_$.r8;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var Map = kotlin_kotlin.$_$.s4;
  var isInterface = kotlin_kotlin.$_$.i9;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Set = kotlin_kotlin.$_$.y4;
  var firstOrNull = kotlin_kotlin.$_$.y5;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.v3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var isArray = kotlin_kotlin.$_$.a9;
  var List = kotlin_kotlin.$_$.q4;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.pc;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var filterNotNull = kotlin_kotlin.$_$.w5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.e5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var singleOrNull = kotlin_kotlin.$_$.w6;
  var Collection = kotlin_kotlin.$_$.i4;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var get_serializersStore = kotlin_io_ktor_ktor_client_json.$_$.c;
  //endregion
  //region block: pre-declaration
  //endregion
  function KotlinxSerializer$Companion$DefaultJson$lambda() {
    return function ($this$Json) {
      $this$Json.isLenient_1 = false;
      $this$Json.ignoreUnknownKeys_1 = false;
      $this$Json.allowSpecialFloatingPointValues_1 = true;
      $this$Json.useArrayPolymorphism_1 = false;
      return Unit_getInstance();
    };
  }
  function KotlinxSerializer_init_$Init$(json, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      json = Companion_getInstance_0().DefaultJson_1;
    KotlinxSerializer.call($this, json);
    return $this;
  }
  function KotlinxSerializer_init_$Create$(json, $mask0, $marker) {
    return KotlinxSerializer_init_$Init$(json, $mask0, $marker, Object.create(KotlinxSerializer.prototype));
  }
  function _get_json__d8whur($this) {
    return $this.json_1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.DefaultJson_1 = Json$default(null, KotlinxSerializer$Companion$DefaultJson$lambda(), 1, null);
  }
  Companion.prototype.get_DefaultJson_y8vsqo_k$ = function () {
    return this.DefaultJson_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KotlinxSerializer(json) {
    Companion_getInstance_0();
    this.json_1 = json;
  }
  KotlinxSerializer.prototype.write_tmo8x3_k$ = function (data, contentType) {
    var tmp = this.writeContent_v4avoc_k$(data);
    return TextContent_init_$Create$(tmp, contentType, null, 4, null);
  };
  KotlinxSerializer.prototype.writeContent_v4avoc_k$ = function (data) {
    return this.json_1.encodeToString_pl8vu2_k$(buildSerializer(data, this.json_1.get_serializersModule_piitvg_k$()), data);
  };
  KotlinxSerializer.prototype.read_i3h8vj_k$ = function (type, body) {
    var text = body.readText$default_mjq276_k$(0, 0, 3, null);
    var tmp = this.json_1.get_serializersModule_piitvg_k$();
    var deserializationStrategy = tmp.getContextual$default_ocirm0_k$(type.type_1, null, 2, null);
    var tmp2_elvis_lhs = deserializationStrategy;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp0_safe_receiver = type.kotlinType_1;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        {
          {
          }
          var tmp$ret$0;
          {
            tmp$ret$0 = serializer(tmp0_safe_receiver);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp_1 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp_0 = tmp1_elvis_lhs == null ? serializer_0(type.type_1) : tmp1_elvis_lhs;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var mapper = tmp_0;
    return ensureNotNull(this.json_1.decodeFromString_ink0ik_k$(mapper, text));
  };
  KotlinxSerializer.$metadata$ = classMeta('KotlinxSerializer', [JsonSerializer]);
  function buildSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject instanceof JsonElement) {
      tmp = Companion_getInstance().serializer_9w0wvi_k$();
    } else {
      if (isInterface(tmp0_subject, List)) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (isArray(tmp0_subject)) {
          var tmp1_safe_receiver = firstOrNull(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            var tmp$ret$1;
            {
              {
              }
              var tmp$ret$0;
              {
                tmp$ret$0 = buildSerializer(tmp1_safe_receiver, module_0);
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp_0 = tmp$ret$1;
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_1(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
        } else {
          if (isInterface(tmp0_subject, Set)) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (isInterface(tmp0_subject, Map)) {
              var keySerializer = elementSerializer(value.get_keys_wop4xp_k$(), module_0);
              var valueSerializer = elementSerializer(value.get_values_ksazhn_k$(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp_1 = getKClassFromExpression(value);
              var tmp3_elvis_lhs = module_0.getContextual$default_ocirm0_k$(tmp_1, null, 2, null);
              tmp = tmp3_elvis_lhs == null ? serializer_0(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_2 = tmp;
    return isInterface(tmp_2, KSerializer) ? tmp_2 : THROW_CCE();
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    {
      var tmp$ret$2;
      {
        var tmp0_map = filterNotNull(_this__u8e3s4);
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            var tmp$ret$0;
            {
              tmp$ret$0 = buildSerializer(item, module_0);
            }
            tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp1_distinctBy = tmp$ret$2;
      var set = HashSet_init_$Create$();
      var list = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = tmp1_distinctBy.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var e = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$3;
        {
          tmp$ret$3 = e.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
        }
        var key = tmp$ret$3;
        if (set.add_1j60pz_k$(key)) {
          list.add_1j60pz_k$(e);
        }
      }
      tmp$ret$4 = list;
    }
    var serializers = tmp$ret$4;
    if (serializers.get_size_woubt6_k$() > 1) {
      {
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
            var tmp0_iterator_1 = serializers.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var item_0 = tmp0_iterator_1.next_20eer_k$();
              var tmp$ret$5;
              {
                tmp$ret$5 = item_0.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
              }
              tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$5);
            }
            tmp$ret$6 = tmp0_mapTo_0;
          }
          tmp$ret$7 = tmp$ret$6;
        }
        var tmp2_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
        throw IllegalStateException_init_$Create$(toString(tmp2_error));
      }
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_1(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_2.next_20eer_k$();
        var tmp$ret$9;
        {
          tmp$ret$9 = element == null;
        }
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  function get_initializer() {
    return initializer;
  }
  var initializer;
  function SerializerInitializer() {
    SerializerInitializer_instance = this;
    {
      var tmp0_plusAssign = get_serializersStore();
      var tmp1_plusAssign = KotlinxSerializer_init_$Create$(null, 1, null);
      tmp0_plusAssign.add_1j60pz_k$(tmp1_plusAssign);
    }
  }
  SerializerInitializer.$metadata$ = objectMeta('SerializerInitializer');
  var SerializerInitializer_instance;
  function SerializerInitializer_getInstance() {
    if (SerializerInitializer_instance == null)
      new SerializerInitializer();
    return SerializerInitializer_instance;
  }
  //region block: post-declaration
  KotlinxSerializer.prototype.write_qtfzr3_k$ = write;
  //endregion
  //region block: init
  initializer = SerializerInitializer_getInstance();
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-serialization-js-ir.js.map