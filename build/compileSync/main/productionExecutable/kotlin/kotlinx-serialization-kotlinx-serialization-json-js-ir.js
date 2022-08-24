(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var objectMeta = kotlin_kotlin.$_$.j7;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var classMeta = kotlin_kotlin.$_$.o6;
  var Annotation = kotlin_kotlin.$_$.p8;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var interfaceMeta = kotlin_kotlin.$_$.u6;
  var equals = kotlin_kotlin.$_$.p6;
  var hashCode = kotlin_kotlin.$_$.t6;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var List = kotlin_kotlin.$_$.n3;
  var Unit_getInstance = kotlin_kotlin.$_$.e3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var Map = kotlin_kotlin.$_$.p3;
  var toString = kotlin_kotlin.$_$.n7;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.s6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.o9;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var toInt = kotlin_kotlin.$_$.d8;
  var toLong = kotlin_kotlin.$_$.g8;
  var toDouble = kotlin_kotlin.$_$.b8;
  var toLongOrNull = kotlin_kotlin.$_$.f8;
  var toDoubleOrNull = kotlin_kotlin.$_$.a8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.u2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var toULongOrNull = kotlin_kotlin.$_$.j8;
  var Companion_getInstance = kotlin_kotlin.$_$.c3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.h2;
  var ULong = kotlin_kotlin.$_$.d9;
  var isInterface = kotlin_kotlin.$_$.c7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var lazy_0 = kotlin_kotlin.$_$.p9;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var KProperty1 = kotlin_kotlin.$_$.t7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.r6;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var toLong_0 = kotlin_kotlin.$_$.l7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.d2;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.f2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.g2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.i2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.a2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.c2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.j2;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.l2;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.i6;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.m6;
  var charSequenceSubSequence = kotlin_kotlin.$_$.n6;
  var coerceAtLeast = kotlin_kotlin.$_$.o7;
  var coerceAtMost = kotlin_kotlin.$_$.p7;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var singleOrNull = kotlin_kotlin.$_$.b5;
  var arrayIterator = kotlin_kotlin.$_$.g6;
  var ensureNotNull = kotlin_kotlin.$_$.k9;
  var emptyMap = kotlin_kotlin.$_$.k4;
  var getValue = kotlin_kotlin.$_$.m4;
  var copyOf = kotlin_kotlin.$_$.g4;
  var copyOf_0 = kotlin_kotlin.$_$.h4;
  var fillArrayVal = kotlin_kotlin.$_$.q6;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.r8;
  var invoke = kotlin_kotlin.$_$.l9;
  var CoroutineImpl = kotlin_kotlin.$_$.a6;
  var DeepRecursiveScope = kotlin_kotlin.$_$.s8;
  var Unit = kotlin_kotlin.$_$.f9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.l5;
  var SuspendFunction2 = kotlin_kotlin.$_$.c6;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var isObject = kotlin_kotlin.$_$.e7;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var plus = kotlin_kotlin.$_$.r9;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.v8;
  var isFinite = kotlin_kotlin.$_$.n9;
  var isFinite_0 = kotlin_kotlin.$_$.m9;
  var charSequenceGet = kotlin_kotlin.$_$.l6;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var toUInt = kotlin_kotlin.$_$.i8;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.e2;
  var toULong = kotlin_kotlin.$_$.k8;
  var toUByte = kotlin_kotlin.$_$.h8;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.b2;
  var toUShort = kotlin_kotlin.$_$.l8;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.k2;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var Char = kotlin_kotlin.$_$.q8;
  var toString_0 = kotlin_kotlin.$_$.v1;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.b3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.a3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.d3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var setOf = kotlin_kotlin.$_$.a5;
  var numberToChar = kotlin_kotlin.$_$.i7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u1;
  var equals_0 = kotlin_kotlin.$_$.v7;
  var toByte = kotlin_kotlin.$_$.k7;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.t2;
  var toShort = kotlin_kotlin.$_$.m7;
  var single = kotlin_kotlin.$_$.y7;
  var emptySet = kotlin_kotlin.$_$.l4;
  var plus_0 = kotlin_kotlin.$_$.w4;
  var toList = kotlin_kotlin.$_$.e5;
  var Enum = kotlin_kotlin.$_$.t8;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var last = kotlin_kotlin.$_$.s4;
  var removeLast = kotlin_kotlin.$_$.y4;
  var lastIndexOf$default = kotlin_kotlin.$_$.j;
  var Long = kotlin_kotlin.$_$.w8;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.t1;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.y2;
  var charArray = kotlin_kotlin.$_$.k6;
  var indexOf$default = kotlin_kotlin.$_$.i;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  //endregion
  //region block: pre-declaration
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  ComposerWithPrettyPrint.prototype = Object.create(Composer.prototype);
  ComposerWithPrettyPrint.prototype.constructor = ComposerWithPrettyPrint;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonTreeReader$readDeepRecursive$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsonTreeReader$readDeepRecursive$slambda.prototype.constructor = JsonTreeReader$readDeepRecursive$slambda;
  $readObjectCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $readObjectCOROUTINE$0.prototype.constructor = $readObjectCOROUTINE$0;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  StringJsonLexer.prototype = Object.create(AbstractJsonLexer.prototype);
  StringJsonLexer.prototype.constructor = StringJsonLexer;
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), EmptySerializersModule());
  }
  Default.$metadata$ = objectMeta('Default', undefined, undefined, undefined, undefined, Json.prototype);
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.b1f_1 = configuration;
    this.c1f_1 = serializersModule;
    this.d1f_1 = new DescriptorSchemaCache();
  }
  Json.prototype.e1f = function () {
    return this.b1f_1;
  };
  Json.prototype.sz = function () {
    return this.c1f_1;
  };
  Json.prototype.qz = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.ws();
    }
  };
  Json.prototype.rz = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.yy(), null);
    var result = input.s11(deserializer);
    lexer.s1f();
    return result;
  };
  Json.$metadata$ = classMeta('Json', [StringFormat]);
  function JsonClassDiscriminator() {
  }
  JsonClassDiscriminator.$metadata$ = classMeta('JsonClassDiscriminator', [Annotation]);
  function JsonNames() {
  }
  JsonNames.$metadata$ = classMeta('JsonNames', [Annotation]);
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.t1f_1 = encodeDefaults;
    this.u1f_1 = ignoreUnknownKeys;
    this.v1f_1 = isLenient;
    this.w1f_1 = allowStructuredMapKeys;
    this.x1f_1 = prettyPrint;
    this.y1f_1 = explicitNulls;
    this.z1f_1 = prettyPrintIndent;
    this.a1g_1 = coerceInputValues;
    this.b1g_1 = useArrayPolymorphism;
    this.c1g_1 = classDiscriminator;
    this.d1g_1 = allowSpecialFloatingPointValues;
    this.e1g_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.f1g = function () {
    return this.v1f_1;
  };
  JsonConfiguration.prototype.g1g = function () {
    return this.z1f_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.t1f_1 + ', ignoreUnknownKeys=' + this.u1f_1 + ', isLenient=' + this.v1f_1 + ', ' + ('allowStructuredMapKeys=' + this.w1f_1 + ', prettyPrint=' + this.x1f_1 + ', explicitNulls=' + this.y1f_1 + ', ') + ("prettyPrintIndent='" + this.z1f_1 + "', coerceInputValues=" + this.a1g_1 + ', useArrayPolymorphism=' + this.b1g_1 + ', ') + ("classDiscriminator='" + this.c1g_1 + "', allowSpecialFloatingPointValues=" + this.d1g_1 + ')');
  };
  JsonConfiguration.$metadata$ = classMeta('JsonConfiguration');
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = interfaceMeta('JsonDecoder', [Decoder, CompositeDecoder]);
  function Companion() {
    Companion_instance = this;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  JsonElement.$metadata$ = classMeta('JsonElement', undefined, undefined, {0: JsonElementSerializer_getInstance});
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonArray(content) {
    Companion_getInstance_6();
    JsonElement.call(this);
    this.j1g_1 = content;
  }
  JsonArray.prototype.g = function () {
    return this.j1g_1.g();
  };
  JsonArray.prototype.k1g = function (elements) {
    return this.j1g_1.h1(elements);
  };
  JsonArray.prototype.h1 = function (elements) {
    return this.k1g(elements);
  };
  JsonArray.prototype.h = function (index) {
    return this.j1g_1.h(index);
  };
  JsonArray.prototype.i = function () {
    return this.j1g_1.i();
  };
  JsonArray.prototype.d = function () {
    return this.j1g_1.d();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.j1g_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.j1g_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.j1g_1, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = classMeta('JsonArray', [List], undefined, {0: JsonArraySerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda() {
    return function (_name_for_destructuring_parameter_0__wldtmu) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.p1();
      }
      var k = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.r1();
      }
      var v = tmp$ret$1;
      var tmp$ret$3;
      {
        {
        }
        var tmp$ret$2;
        {
          var tmp0_apply = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply, k);
            tmp0_apply.r4(_Char___init__impl__6a9atx(58));
            tmp0_apply.d6(v);
          }
          tmp$ret$2 = tmp0_apply;
        }
        tmp$ret$3 = tmp$ret$2.toString();
      }
      return tmp$ret$3;
    };
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.l1g_1 = content;
  }
  JsonObject.prototype.o = function () {
    return this.l1g_1.o();
  };
  JsonObject.prototype.c2 = function () {
    return this.l1g_1.c2();
  };
  JsonObject.prototype.g = function () {
    return this.l1g_1.g();
  };
  JsonObject.prototype.qj = function (key) {
    return this.l1g_1.y1(key);
  };
  JsonObject.prototype.y1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.qj((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.rj = function (key) {
    return this.l1g_1.b2(key);
  };
  JsonObject.prototype.b2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.rj((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.i = function () {
    return this.l1g_1.i();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.l1g_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.l1g_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.l1g_1.o();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda(), 24, null);
  };
  JsonObject.$metadata$ = classMeta('JsonObject', [Map], undefined, {0: JsonObjectSerializer_getInstance}, undefined, JsonElement.prototype);
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    Companion_getInstance_8();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.m1g();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.n1g_1 = isString;
    this.o1g_1 = toString(body);
  }
  JsonLiteral.prototype.m1g = function () {
    return this.o1g_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.n1g_1) {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          var tmp0_apply = StringBuilder_init_$Create$();
          {
          }
          {
            printQuoted(tmp0_apply, this.o1g_1);
          }
          tmp$ret$0 = tmp0_apply;
        }
        tmp$ret$1 = tmp$ret$0.toString();
      }
      tmp = tmp$ret$1;
    } else {
      tmp = this.o1g_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.n1g_1 === other.n1g_1))
      return false;
    if (!(this.o1g_1 === other.o1g_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.n1g_1 | 0;
    result = imul(31, result) + getStringHashCode(this.o1g_1) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = classMeta('JsonLiteral', undefined, undefined, undefined, undefined, JsonPrimitive.prototype);
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return function () {
      return JsonNullSerializer_getInstance();
    };
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.p1g_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.q1g_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1());
  }
  JsonNull.prototype.m1g = function () {
    return this.p1g_1;
  };
  JsonNull.prototype.r1g = function () {
    return this.q1g_1.r1();
  };
  JsonNull.prototype.v18 = function (typeParamsSerializers) {
    return this.r1g();
  };
  JsonNull.$metadata$ = objectMeta('JsonNull', [SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, undefined, JsonPrimitive.prototype);
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.m1g());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.m1g());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.m1g());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp0_toFloat = _this__u8e3s4.m1g();
      var tmp$ret$1;
      {
        var tmp0_unsafeCast = toDouble(tmp0_toFloat);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_unsafeCast;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.m1g());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.m1g();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.m1g());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.m1g());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return function () {
      return JsonPrimitiveSerializer_getInstance().s1g_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return function () {
      return JsonNullSerializer_getInstance().t1g_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return function () {
      return JsonLiteralSerializer_getInstance().u1g_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return function () {
      return JsonObjectSerializer_getInstance().v1g_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return function () {
      return JsonArraySerializer_getInstance().w1g_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda() {
    return function ($this$buildSerialDescriptor) {
      var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda());
      $this$buildSerialDescriptor.jz('JsonPrimitive', tmp, null, false, 12, null);
      var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0());
      $this$buildSerialDescriptor.jz('JsonNull', tmp_0, null, false, 12, null);
      var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1());
      $this$buildSerialDescriptor.jz('JsonLiteral', tmp_1, null, false, 12, null);
      var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2());
      $this$buildSerialDescriptor.jz('JsonObject', tmp_2, null, false, 12, null);
      var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3());
      $this$buildSerialDescriptor.jz('JsonArray', tmp_3, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.x1g_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda(), 4, null);
  }
  JsonElementSerializer.prototype.yy = function () {
    return this.x1g_1;
  };
  JsonElementSerializer.prototype.y1g = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive)
      encoder.g13(JsonPrimitiveSerializer_getInstance(), value);
    else {
      if (tmp0_subject instanceof JsonObject)
        encoder.g13(JsonObjectSerializer_getInstance(), value);
      else {
        if (tmp0_subject instanceof JsonArray)
          encoder.g13(JsonArraySerializer_getInstance(), value);
      }
    }
  };
  JsonElementSerializer.prototype.zy = function (encoder, value) {
    return this.y1g(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.az = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.i1g();
  };
  JsonElementSerializer.$metadata$ = objectMeta('JsonElementSerializer', [KSerializer]);
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.z1g_1 = ListSerializer(JsonElementSerializer_getInstance()).yy();
    this.a1h_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.b10 = function () {
    return this.z1g_1.b10();
  };
  JsonArrayDescriptor.prototype.c10 = function () {
    return this.z1g_1.c10();
  };
  JsonArrayDescriptor.prototype.d10 = function () {
    return this.z1g_1.d10();
  };
  JsonArrayDescriptor.prototype.wz = function () {
    return this.z1g_1.wz();
  };
  JsonArrayDescriptor.prototype.e10 = function () {
    return this.z1g_1.e10();
  };
  JsonArrayDescriptor.prototype.f10 = function (index) {
    return this.z1g_1.f10(index);
  };
  JsonArrayDescriptor.prototype.g10 = function (index) {
    return this.z1g_1.g10(index);
  };
  JsonArrayDescriptor.prototype.h10 = function (name) {
    return this.z1g_1.h10(name);
  };
  JsonArrayDescriptor.prototype.i10 = function (index) {
    return this.z1g_1.i10(index);
  };
  JsonArrayDescriptor.prototype.j10 = function (index) {
    return this.z1g_1.j10(index);
  };
  JsonArrayDescriptor.prototype.a10 = function () {
    return this.a1h_1;
  };
  JsonArrayDescriptor.$metadata$ = objectMeta('JsonArrayDescriptor', [SerialDescriptor]);
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.w1g_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.yy = function () {
    return this.w1g_1;
  };
  JsonArraySerializer.prototype.b1h = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).zy(encoder, value);
  };
  JsonArraySerializer.prototype.zy = function (encoder, value) {
    return this.b1h(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.az = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).az(decoder));
  };
  JsonArraySerializer.$metadata$ = objectMeta('JsonArraySerializer', [KSerializer]);
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.c1h_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).yy();
    this.d1h_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.b10 = function () {
    return this.c1h_1.b10();
  };
  JsonObjectDescriptor.prototype.c10 = function () {
    return this.c1h_1.c10();
  };
  JsonObjectDescriptor.prototype.d10 = function () {
    return this.c1h_1.d10();
  };
  JsonObjectDescriptor.prototype.wz = function () {
    return this.c1h_1.wz();
  };
  JsonObjectDescriptor.prototype.e10 = function () {
    return this.c1h_1.e10();
  };
  JsonObjectDescriptor.prototype.f10 = function (index) {
    return this.c1h_1.f10(index);
  };
  JsonObjectDescriptor.prototype.g10 = function (index) {
    return this.c1h_1.g10(index);
  };
  JsonObjectDescriptor.prototype.h10 = function (name) {
    return this.c1h_1.h10(name);
  };
  JsonObjectDescriptor.prototype.i10 = function (index) {
    return this.c1h_1.i10(index);
  };
  JsonObjectDescriptor.prototype.j10 = function (index) {
    return this.c1h_1.j10(index);
  };
  JsonObjectDescriptor.prototype.a10 = function () {
    return this.d1h_1;
  };
  JsonObjectDescriptor.$metadata$ = objectMeta('JsonObjectDescriptor', [SerialDescriptor]);
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.v1g_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.yy = function () {
    return this.v1g_1;
  };
  JsonObjectSerializer.prototype.e1h = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).zy(encoder, value);
  };
  JsonObjectSerializer.prototype.zy = function (encoder, value) {
    return this.e1h(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.az = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).az(decoder));
  };
  JsonObjectSerializer.$metadata$ = objectMeta('JsonObjectSerializer', [KSerializer]);
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.s1g_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.yy = function () {
    return this.s1g_1;
  };
  JsonPrimitiveSerializer.prototype.f1h = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      tmp = encoder.g13(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      tmp = encoder.g13(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.zy = function (encoder, value) {
    return this.f1h(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.az = function (decoder) {
    var result = asJsonDecoder(decoder).i1g();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = objectMeta('JsonPrimitiveSerializer', [KSerializer]);
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.t1g_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.yy = function () {
    return this.t1g_1;
  };
  JsonNullSerializer.prototype.g1h = function (encoder, value) {
    verify(encoder);
    encoder.l12();
  };
  JsonNullSerializer.prototype.zy = function (encoder, value) {
    return this.g1h(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.az = function (decoder) {
    verify_0(decoder);
    if (decoder.f11()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.g11();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = objectMeta('JsonNullSerializer', [KSerializer]);
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.u1g_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.yy = function () {
    return this.u1g_1;
  };
  JsonLiteralSerializer.prototype.h1h = function (encoder, value) {
    verify(encoder);
    if (value.n1g_1) {
      return encoder.u12(value.o1g_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return encoder.q12(tmp0_safe_receiver);
      }
    }
    var tmp1_safe_receiver = toULongOrNull(value.o1g_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        var tmp_0 = encoder.v12(serializer_0(Companion_getInstance()).yy());
        var tmp$ret$1;
        {
          tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
        }
        tmp_0.q12(tmp$ret$1);
        return Unit_getInstance();
      }
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      {
        {
        }
        return encoder.s12(tmp2_safe_receiver);
      }
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      {
        {
        }
        return encoder.m12(tmp3_safe_receiver);
      }
    }
    encoder.u12(value.o1g_1);
  };
  JsonLiteralSerializer.prototype.zy = function (encoder, value) {
    return this.h1h(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.az = function (decoder) {
    var result = asJsonDecoder(decoder).i1g();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  JsonLiteralSerializer.$metadata$ = objectMeta('JsonLiteralSerializer', [KSerializer]);
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = original$factory();
      tmp$ret$0 = $this.i1h_1.r1();
    }
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.i1h_1 = lazy_0($deferred);
  }
  defer$1.prototype.a10 = function () {
    return _get_original__l7ku1m(this).a10();
  };
  defer$1.prototype.e10 = function () {
    return _get_original__l7ku1m(this).e10();
  };
  defer$1.prototype.c10 = function () {
    return _get_original__l7ku1m(this).c10();
  };
  defer$1.prototype.i10 = function (index) {
    return _get_original__l7ku1m(this).i10(index);
  };
  defer$1.prototype.h10 = function (name) {
    return _get_original__l7ku1m(this).h10(name);
  };
  defer$1.prototype.f10 = function (index) {
    return _get_original__l7ku1m(this).f10(index);
  };
  defer$1.prototype.g10 = function (index) {
    return _get_original__l7ku1m(this).g10(index);
  };
  defer$1.prototype.j10 = function (index) {
    return _get_original__l7ku1m(this).j10(index);
  };
  defer$1.$metadata$ = classMeta(undefined, [SerialDescriptor]);
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = interfaceMeta('JsonEncoder', [Encoder, CompositeEncoder]);
  function Composer(writer) {
    this.j1h_1 = writer;
    this.k1h_1 = true;
  }
  Composer.prototype.l1h = function (_set____db54di) {
    this.k1h_1 = _set____db54di;
  };
  Composer.prototype.m1h = function () {
    this.k1h_1 = true;
  };
  Composer.prototype.n1h = function () {
    return Unit_getInstance();
  };
  Composer.prototype.o1h = function () {
    this.k1h_1 = false;
  };
  Composer.prototype.p1h = function () {
    return Unit_getInstance();
  };
  Composer.prototype.q1h = function (v) {
    return this.j1h_1.r1h(v);
  };
  Composer.prototype.s1h = function (v) {
    return this.j1h_1.t1h(v);
  };
  Composer.prototype.u1h = function (v) {
    return this.j1h_1.t1h(v.toString());
  };
  Composer.prototype.v1h = function (v) {
    return this.j1h_1.t1h(v.toString());
  };
  Composer.prototype.w1h = function (v) {
    return this.j1h_1.x1h(toLong_0(v));
  };
  Composer.prototype.y1h = function (v) {
    return this.j1h_1.x1h(toLong_0(v));
  };
  Composer.prototype.z1h = function (v) {
    return this.j1h_1.x1h(toLong_0(v));
  };
  Composer.prototype.a1i = function (v) {
    return this.j1h_1.x1h(v);
  };
  Composer.prototype.b1i = function (v) {
    return this.j1h_1.t1h(v.toString());
  };
  Composer.prototype.c1i = function (value) {
    return this.j1h_1.d1i(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.b1f_1.x1f_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.g1i_1 = forceQuoting;
  }
  ComposerForUnsignedNumbers.prototype.z1h = function (v) {
    if (this.g1i_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      }
      this.c1i(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      }
      this.s1h(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.a1i = function (v) {
    if (this.g1i_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      }
      this.c1i(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      }
      this.s1h(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.w1h = function (v) {
    if (this.g1i_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      }
      this.c1i(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      }
      this.s1h(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.y1h = function (v) {
    if (this.g1i_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UShort___init__impl__jigrne(v);
      }
      this.c1i(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UShort___init__impl__jigrne(v);
      }
      this.s1h(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.j1i_1 = json;
    this.k1i_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.m1h = function () {
    this.l1h(true);
    var tmp0_this = this;
    var tmp1 = tmp0_this.k1i_1;
    tmp0_this.k1i_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.n1h = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.k1i_1;
    tmp0_this.k1i_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.o1h = function () {
    this.l1h(false);
    this.s1h('\n');
    {
      var tmp0_repeat = this.k1i_1;
      {
      }
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            this.s1h(this.j1i_1.b1f_1.z1f_1);
          }
        }
         while (inductionVariable < tmp0_repeat);
    }
  };
  ComposerWithPrettyPrint.prototype.p1h = function () {
    this.q1h(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.m1i_1 = !descriptor.j10(index) ? descriptor.g10(index).wz() : false;
    return $this.m1i_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.l1i_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.m1i_1 = false;
  }
  JsonElementMarker.prototype.k17 = function (index) {
    this.l1i_1.k17(index);
  };
  JsonElementMarker.prototype.l17 = function () {
    return this.l1i_1.l17();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.n1i(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.a10() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.e10() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = classMeta('JsonDecodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = classMeta('JsonException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      {
        var tmp0_substring = charSequenceLength(_this__u8e3s4);
        tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      }
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    {
      var tmp1_substring = coerceAtLeast(start_0, 0);
      var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
      tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    }
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function tryCoerceValue(_this__u8e3s4, elementDescriptor, peekNull, peekString, onEnumCoercing) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    if (!elementDescriptor.wz() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.e10(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = peekString();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, _this__u8e3s4, enumValue);
      Companion_getInstance_0();
      if (enumIndex === -3) {
        onEnumCoercing();
        return true;
      }
    }
    return false;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.h10(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.b1f_1.e1g_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.p1i(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.b2(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.c10();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        {
          var tmp0_filterIsInstance = _this__u8e3s4.f10(i);
          var tmp$ret$0;
          {
            var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
            var tmp0_iterator = tmp0_filterIsInstance.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              if (element instanceof JsonNames) {
                tmp0_filterIsInstanceTo.c(element);
              }
            }
            tmp$ret$0 = tmp0_filterIsInstanceTo;
          }
          tmp$ret$1 = tmp$ret$0;
        }
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q1i_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          {
            var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
            while (tmp0_iterator_0.e()) {
              var element_0 = tmp0_iterator_0.f();
              {
                if (builder == null)
                  builder = createMapForCache(_this__u8e3s4.c10());
                buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
              }
            }
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).y1(name);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.i10(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.i10(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    {
      _this__u8e3s4.a(name, index);
    }
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  Tombstone.$metadata$ = objectMeta('Tombstone');
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.t1i_1, 2);
    $this.r1i_1 = copyOf($this.r1i_1, newSize);
    $this.s1i_1 = copyOf_0($this.s1i_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(8), null);
    }
    tmp.r1i_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      {
        tmp$ret$1 = -1;
      }
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.s1i_1 = tmp_3;
    this.t1i_1 = -1;
  }
  JsonPath.prototype.u1i = function (sd) {
    var tmp0_this = this;
    tmp0_this.t1i_1 = tmp0_this.t1i_1 + 1 | 0;
    var depth = tmp0_this.t1i_1;
    if (depth === this.r1i_1.length) {
      resize(this);
    }
    this.r1i_1[depth] = sd;
  };
  JsonPath.prototype.v1i = function (index) {
    this.s1i_1[this.t1i_1] = index;
  };
  JsonPath.prototype.w1i = function (key) {
    var tmp;
    if (!(this.s1i_1[this.t1i_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.t1i_1 = tmp0_this.t1i_1 + 1 | 0;
      tmp = tmp0_this.t1i_1 === this.r1i_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.r1i_1[this.t1i_1] = key;
    this.s1i_1[this.t1i_1] = -2;
  };
  JsonPath.prototype.x1i = function () {
    if (this.s1i_1[this.t1i_1] === -2) {
      this.r1i_1[this.t1i_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.y1i = function () {
    var depth = this.t1i_1;
    if (this.s1i_1[depth] === -2) {
      this.s1i_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.t1i_1;
      tmp0_this.t1i_1 = tmp1 - 1 | 0;
    }
    if (!(this.t1i_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.t1i_1;
      tmp2_this.t1i_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.z1i = function () {
    var tmp$ret$1;
    {
      {
      }
      var tmp$ret$0;
      {
        var tmp0_apply = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply.e6('$');
          {
            var tmp0_repeat = this.t1i_1 + 1 | 0;
            {
            }
            var inductionVariable = 0;
            if (inductionVariable < tmp0_repeat)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                {
                  var element = this.r1i_1[index];
                  if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
                    if (equals(element.e10(), LIST_getInstance())) {
                      if (!(this.s1i_1[index] === -1)) {
                        tmp0_apply.e6('[');
                        tmp0_apply.d6(this.s1i_1[index]);
                        tmp0_apply.e6(']');
                      }
                    } else {
                      var idx = this.s1i_1[index];
                      if (idx >= 0) {
                        tmp0_apply.e6('.');
                        tmp0_apply.e6(element.i10(idx));
                      }
                    }
                  } else {
                    if (!(element === Tombstone_getInstance())) {
                      tmp0_apply.e6('[');
                      tmp0_apply.e6("'");
                      tmp0_apply.d6(element);
                      tmp0_apply.e6("'");
                      tmp0_apply.e6(']');
                    }
                  }
                }
              }
               while (inductionVariable < tmp0_repeat);
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.z1i();
  };
  JsonPath.$metadata$ = classMeta('JsonPath');
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    var tmp$ret$0;
    {
      var tmp0_arrayOfNulls = values().length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.g13(serializer, value);
  }
  function JsonWriter() {
  }
  JsonWriter.$metadata$ = interfaceMeta('JsonWriter');
  function readObject($this) {
    var tmp$ret$2;
    {
      var lastToken = $this.i1j_1.l1j(get_TC_BEGIN_OBJ());
      if ($this.i1j_1.m1j() === get_TC_COMMA()) {
        $this.i1j_1.n1i('Unexpected leading comma', 0, null, 6, null);
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
      }
      var result = tmp$ret$0;
      $l$loop: while ($this.i1j_1.n1j()) {
        var key = $this.j1j_1 ? $this.i1j_1.p1j() : $this.i1j_1.o1j();
        $this.i1j_1.l1j(get_TC_COLON());
        var tmp$ret$1;
        {
          tmp$ret$1 = $this.q1j();
        }
        var element = tmp$ret$1;
        {
          result.a(key, element);
        }
        lastToken = $this.i1j_1.r1j();
        var tmp0_subject = lastToken;
        if (tmp0_subject === get_TC_COMMA())
        ;
        else if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.i1j_1.n1i('Expected end of the object or comma', 0, null, 6, null);
        }
      }
      if (lastToken === get_TC_BEGIN_OBJ()) {
        $this.i1j_1.l1j(get_TC_END_OBJ());
      } else if (lastToken === get_TC_COMMA()) {
        $this.i1j_1.n1i('Unexpected trailing comma', 0, null, 6, null);
      }
      tmp$ret$2 = new JsonObject(result);
    }
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.ci();
  }
  function readArray($this) {
    var lastToken = $this.i1j_1.r1j();
    if ($this.i1j_1.m1j() === get_TC_COMMA()) {
      $this.i1j_1.n1i('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var result = tmp$ret$0;
    while ($this.i1j_1.n1j()) {
      var element = $this.q1j();
      result.c(element);
      lastToken = $this.i1j_1.r1j();
      if (!(lastToken === get_TC_COMMA())) {
        {
          var tmp0_require = $this.i1j_1;
          var tmp1_require = lastToken === get_TC_END_LIST();
          var tmp2_require = tmp0_require.o1f_1;
          if (!tmp1_require) {
            var tmp$ret$1;
            {
              tmp$ret$1 = 'Expected end of the array or comma';
            }
            var tmp = tmp$ret$1;
            tmp0_require.n1i(tmp, tmp2_require, null, 4, null);
          }
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.i1j_1.l1j(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.i1j_1.n1i('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.j1j_1 ? true : !isString) {
      tmp = $this.i1j_1.p1j();
    } else {
      tmp = $this.i1j_1.o1j();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.n1k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.s1k = function ($this$$receiver, it, $cont) {
    var tmp = this.t1k($this$$receiver, it, $cont);
    tmp.uh_1 = Unit_getInstance();
    tmp.vh_1 = null;
    return tmp.ci();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.u6 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.s1k(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.ci = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 3;
            this.q1k_1 = this.n1k_1.i1j_1.m1j();
            if (this.q1k_1 === get_TC_STRING()) {
              this.r1k_1 = readValue(this.n1k_1, true);
              this.sh_1 = 2;
              continue $sm;
            } else {
              if (this.q1k_1 === get_TC_OTHER()) {
                this.r1k_1 = readValue(this.n1k_1, false);
                this.sh_1 = 2;
                continue $sm;
              } else {
                if (this.q1k_1 === get_TC_BEGIN_OBJ()) {
                  this.sh_1 = 1;
                  suspendResult = readObject_0(this.o1k_1, this.n1k_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.q1k_1 === get_TC_BEGIN_LIST()) {
                    this.r1k_1 = readArray(this.n1k_1);
                    this.sh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.n1k_1.i1j_1.n1i("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.r1k_1 = suspendResult;
            this.sh_1 = 2;
            continue $sm;
          case 2:
            return this.r1k_1;
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
  JsonTreeReader$readDeepRecursive$slambda.prototype.t1k = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.n1k_1, completion);
    i.o1k_1 = $this$$receiver;
    i.p1k_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.s1k($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1k_1 = _this__u8e3s4;
    this.b1k_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.ci = function () {
    var suspendResult = this.uh_1;
    $sm: do
      try {
        var tmp = this.sh_1;
        switch (tmp) {
          case 0:
            this.th_1 = 5;
            this.c1k_1 = this.a1k_1.i1j_1.l1j(get_TC_BEGIN_OBJ());
            if (this.a1k_1.i1j_1.m1j() === get_TC_COMMA()) {
              this.a1k_1.i1j_1.n1i('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.d1k_1 = LinkedHashMap_init_$Create$();
            this.sh_1 = 1;
            continue $sm;
          case 1:
            if (!this.a1k_1.i1j_1.n1j()) {
              this.sh_1 = 4;
              continue $sm;
            }

            this.e1k_1 = this.a1k_1.j1j_1 ? this.a1k_1.i1j_1.p1j() : this.a1k_1.i1j_1.o1j();
            this.a1k_1.i1j_1.l1j(get_TC_COLON());
            ;
            this.sh_1 = 2;
            suspendResult = this.b1k_1.m6(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.d1k_1.a(this.e1k_1, element);
            ;
            this.c1k_1 = this.a1k_1.i1j_1.r1j();
            var tmp0_subject = this.c1k_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.sh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.sh_1 = 4;
                continue $sm;
              } else {
                this.a1k_1.i1j_1.n1i('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.sh_1 = 1;
            continue $sm;
          case 4:
            if (this.c1k_1 === get_TC_BEGIN_OBJ()) {
              this.a1k_1.i1j_1.l1j(get_TC_END_OBJ());
            } else if (this.c1k_1 === get_TC_COMMA()) {
              this.a1k_1.i1j_1.n1i('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.d1k_1);
          case 5:
            throw this.vh_1;
        }
      } catch ($p) {
        if (this.th_1 === 5) {
          throw $p;
        } else {
          this.sh_1 = this.th_1;
          this.vh_1 = $p;
        }
      }
     while (true);
  };
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.i1j_1 = lexer;
    this.j1j_1 = configuration.v1f_1;
    this.k1j_1 = 0;
  }
  JsonTreeReader.prototype.q1j = function () {
    var token = this.i1j_1.m1j();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.k1j_1 = tmp0_this.k1j_1 + 1 | 0;
      if (tmp0_this.k1j_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.k1j_1 = tmp1_this.k1j_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.i1j_1.n1i(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.b10().d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.u1k_1;
    }
    return json.b1f_1.c1g_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.h1g().b1f_1.b1g_1;
    }
    if (tmp) {
      return deserializer.az(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.yy(), _this__u8e3s4.h1g());
    var tmp$ret$0;
    {
      var tmp0_cast = _this__u8e3s4.i1g();
      var tmp1_cast = deserializer.yy();
      if (!(tmp0_cast instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.a10() + ', but had ' + getKClassFromExpression(tmp0_cast));
      }
      tmp$ret$0 = tmp0_cast;
    }
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.rj(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m1g();
    var tmp2_elvis_lhs = deserializer.oz(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.h1g();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.h1g().b1f_1.b1g_1;
    }
    if (tmp) {
      serializer.zy(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.yy(), _this__u8e3s4.h1g());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.yy().e10());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.zy(_this__u8e3s4, value);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.yy()).g1(classDiscriminator)) {
      var baseName = serializer.yy().a10();
      var actualName = actualSerializer.yy().a10();
      {
        var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function Key() {
  }
  Key.$metadata$ = classMeta('Key');
  function DescriptorSchemaCache() {
    this.o1i_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.v1k = function (descriptor, key, value) {
    {
      var tmp$ret$1;
      {
        var tmp0_getOrPut = this.o1i_1;
        var value_0 = tmp0_getOrPut.b2(descriptor);
        var tmp;
        if (value_0 == null) {
          var tmp$ret$0;
          {
            tmp$ret$0 = createMapForCache(1);
          }
          var answer = tmp$ret$0;
          tmp0_getOrPut.a(descriptor, answer);
          tmp = answer;
        } else {
          tmp = value_0;
        }
        tmp$ret$1 = tmp;
      }
      var tmp1_set = tmp$ret$1;
      var tmp2_set = key instanceof Key ? key : THROW_CCE();
      var tmp3_set = isObject(value) ? value : THROW_CCE();
      tmp1_set.a(tmp2_set, tmp3_set);
    }
  };
  DescriptorSchemaCache.prototype.p1i = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.w1k(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return tmp0_safe_receiver;
      }
    }
    var value = defaultValue();
    this.v1k(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.w1k = function (descriptor, key) {
    var tmp0_safe_receiver = this.o1i_1.b2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.b2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function DiscriminatorHolder(discriminatorToSkip) {
    this.x1k_1 = discriminatorToSkip;
  }
  DiscriminatorHolder.$metadata$ = classMeta('DiscriminatorHolder');
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.x1k_1 === unknownKey) {
      _this__u8e3s4.x1k_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.h12(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.i1f_1.m1j() === get_TC_COMMA()) {
      $this.i1f_1.n1i('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.k1f_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.k1f_1 === -1)) {
        hasComma = $this.i1f_1.z1k();
      }
    } else {
      $this.i1f_1.y1k(get_COLON());
    }
    var tmp;
    if ($this.i1f_1.n1j()) {
      if (decodingKey) {
        if ($this.k1f_1 === -1) {
          var tmp0_require = $this.i1f_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.o1f_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'Unexpected trailing comma';
            }
            var tmp_0 = tmp$ret$0;
            tmp0_require.n1i(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          var tmp3_require = $this.i1f_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.o1f_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            {
              tmp$ret$1 = 'Expected comma after the key-value pair';
            }
            var tmp_1 = tmp$ret$1;
            tmp3_require.n1i(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.k1f_1 = tmp0_this.k1f_1 + 1 | 0;
      tmp = tmp0_this.k1f_1;
    } else {
      if (hasComma) {
        $this.i1f_1.n1i("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_tryCoerceValue = $this.g1f_1;
      var tmp1_tryCoerceValue = descriptor.g10(index);
      var tmp;
      if (!tmp1_tryCoerceValue.wz()) {
        var tmp$ret$0;
        {
          tmp$ret$0 = !$this.i1f_1.a1l();
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.e10(), ENUM_getInstance())) {
        var tmp$ret$2;
        {
          tmp$ret$2 = $this.i1f_1.b1l($this.m1f_1.v1f_1);
        }
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          {
            $this.i1f_1.o1j();
          }
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.i1f_1.z1k();
    while ($this.i1f_1.n1j()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.i1f_1.y1k(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.g1f_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.m1f_1.a1g_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.i1f_1.z1k();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.n1f_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.k17(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.i1f_1.n1i('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.n1f_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l17();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.m1f_1.u1f_1 ? true : trySkip($this.l1f_1, $this, key)) {
      $this.i1f_1.d1l($this.m1f_1.v1f_1);
    } else {
      $this.i1f_1.c1l(key);
    }
    return $this.i1f_1.z1k();
  }
  function decodeListIndex($this) {
    var hasComma = $this.i1f_1.z1k();
    var tmp;
    if ($this.i1f_1.n1j()) {
      if (!($this.k1f_1 === -1) ? !hasComma : false) {
        $this.i1f_1.n1i('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.k1f_1 = tmp0_this.k1f_1 + 1 | 0;
      tmp = tmp0_this.k1f_1;
    } else {
      if (hasComma) {
        $this.i1f_1.n1i('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.m1f_1.v1f_1) {
      tmp = $this.i1f_1.f1l();
    } else {
      tmp = $this.i1f_1.e1l();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.g1f_1 = json;
    this.h1f_1 = mode;
    this.i1f_1 = lexer;
    this.j1f_1 = this.g1f_1.sz();
    this.k1f_1 = -1;
    this.l1f_1 = discriminatorHolder;
    this.m1f_1 = this.g1f_1.b1f_1;
    this.n1f_1 = this.m1f_1.y1f_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.h1g = function () {
    return this.g1f_1;
  };
  StreamingJsonDecoder.prototype.g1l = function () {
    return this.i1f_1;
  };
  StreamingJsonDecoder.prototype.sz = function () {
    return this.j1f_1;
  };
  StreamingJsonDecoder.prototype.i1g = function () {
    return (new JsonTreeReader(this.g1f_1.b1f_1, this.i1f_1)).q1j();
  };
  StreamingJsonDecoder.prototype.s11 = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.g1f_1.b1f_1.b1g_1;
      }
      if (tmp) {
        return deserializer.az(this);
      }
      var discriminator = classDiscriminator(deserializer.yy(), this.g1f_1);
      var type = this.i1f_1.h1l(discriminator, this.m1f_1.v1f_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.oz(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.l1f_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.az(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException($p.tz_1, plus($p.message, ' at path: ') + this.i1f_1.p1f_1.z1i(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.t11 = function (descriptor) {
    var newMode = switchMode(this.g1f_1, descriptor);
    this.i1f_1.p1f_1.u1i(descriptor);
    this.i1f_1.y1k(newMode.k1l_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.q4();
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.g1f_1, newMode, this.i1f_1, descriptor, this.l1f_1);
        break;
      default:
        var tmp_0;
        if (this.h1f_1.equals(newMode) ? this.g1f_1.b1f_1.y1f_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.g1f_1, newMode, this.i1f_1, descriptor, this.l1f_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.u11 = function (descriptor) {
    if (this.g1f_1.b1f_1.u1f_1 ? descriptor.c10() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.i1f_1.y1k(this.h1f_1.l1l_1);
    this.i1f_1.p1f_1.y1i();
  };
  StreamingJsonDecoder.prototype.f11 = function () {
    var tmp;
    var tmp0_safe_receiver = this.n1f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1i_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.i1f_1.a1l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.g11 = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.e12 = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.h1f_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.i1f_1.p1f_1.x1i();
    }
    var value = AbstractDecoder.prototype.e12.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.i1f_1.p1f_1.w1i(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.h12 = function (descriptor) {
    var tmp0_subject = this.h1f_1;
    var tmp0 = tmp0_subject.q4();
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.h1f_1.equals(WriteMode_MAP_getInstance())) {
      this.i1f_1.p1f_1.v1i(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.h11 = function () {
    var tmp;
    if (this.m1f_1.v1f_1) {
      tmp = this.i1f_1.n1l();
    } else {
      tmp = this.i1f_1.m1l();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.i11 = function () {
    var value = this.i1f_1.o1l();
    if (!value.equals(toLong_0(value.jh()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.i1f_1.n1i(tmp, 0, null, 6, null);
    }
    return value.jh();
  };
  StreamingJsonDecoder.prototype.j11 = function () {
    var value = this.i1f_1.o1l();
    if (!value.equals(toLong_0(value.kh()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.i1f_1.n1i(tmp, 0, null, 6, null);
    }
    return value.kh();
  };
  StreamingJsonDecoder.prototype.k11 = function () {
    var value = this.i1f_1.o1l();
    if (!value.equals(toLong_0(value.v5()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.i1f_1.n1i(tmp, 0, null, 6, null);
    }
    return value.v5();
  };
  StreamingJsonDecoder.prototype.l11 = function () {
    return this.i1f_1.o1l();
  };
  StreamingJsonDecoder.prototype.m11 = function () {
    var tmp$ret$4;
    $l$block: {
      var tmp0_parseString = this.i1f_1;
      var input = tmp0_parseString.p1j();
      try {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp0_unsafeCast = toDouble(input);
              var tmp$ret$0;
              {
                tmp$ret$0 = tmp0_unsafeCast;
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.n1i(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.g1f_1.b1f_1.d1g_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.i1f_1, result);
  };
  StreamingJsonDecoder.prototype.n11 = function () {
    var tmp$ret$1;
    $l$block: {
      var tmp0_parseString = this.i1f_1;
      var input = tmp0_parseString.p1j();
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = toDouble(input);
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.n1i(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.g1f_1.b1f_1.d1g_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.i1f_1, result);
  };
  StreamingJsonDecoder.prototype.o11 = function () {
    var string = this.i1f_1.p1j();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.i1f_1.n1i(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.p11 = function () {
    var tmp;
    if (this.m1f_1.v1f_1) {
      tmp = this.i1f_1.f1l();
    } else {
      tmp = this.i1f_1.o1j();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.q11 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.i1f_1, this.g1f_1) : AbstractDecoder.prototype.q11.call(this, descriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.p1j();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.n1i(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.p1l_1 = lexer;
    this.q1l_1 = json.sz();
  }
  JsonDecoderForUnsignedTypes.prototype.sz = function () {
    return this.q1l_1;
  };
  JsonDecoderForUnsignedTypes.prototype.h12 = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.k11 = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.p1l_1;
      var input = tmp0_parseString.p1j();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toInt = toUInt(input);
            tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.n1i(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.l11 = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.p1l_1;
      var input = tmp0_parseString.p1j();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toLong = toULong(input);
            tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.n1i(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.i11 = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.p1l_1;
      var input = tmp0_parseString.p1j();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toByte = toUByte(input);
            tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.n1i(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.j11 = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.p1l_1;
      var input = tmp0_parseString.p1j();
      try {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_toShort = toUShort(input);
            tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.n1i(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = classMeta('JsonDecoderForUnsignedTypes', undefined, undefined, undefined, undefined, AbstractDecoder.prototype);
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.a1j_1.o1h();
    $this.u12(ensureNotNull($this.h1j_1));
    $this.a1j_1.q1h(get_COLON());
    $this.a1j_1.p1h();
    $this.u12(descriptor.a10());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.a1j_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.a1j_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.a1j_1.j1h_1, $this.g1j_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.a1j_1 = composer;
    this.b1j_1 = json;
    this.c1j_1 = mode;
    this.d1j_1 = modeReuseCache;
    this.e1j_1 = this.b1j_1.sz();
    this.f1j_1 = this.b1j_1.b1f_1;
    this.g1j_1 = false;
    this.h1j_1 = null;
    var i = this.c1j_1.q4();
    if (!(this.d1j_1 == null)) {
      if (!(this.d1j_1[i] === null) ? true : !(this.d1j_1[i] === this))
        this.d1j_1[i] = this;
    }
  }
  StreamingJsonEncoder.prototype.h1g = function () {
    return this.b1j_1;
  };
  StreamingJsonEncoder.prototype.sz = function () {
    return this.e1j_1;
  };
  StreamingJsonEncoder.prototype.g13 = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.h1g().b1f_1.b1g_1;
      }
      if (tmp) {
        serializer.zy(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.yy(), this.h1g());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.yy().e10());
      {
        this.h1j_1 = baseClassDiscriminator;
      }
      actualSerializer.zy(this, value);
    }
  };
  StreamingJsonEncoder.prototype.t11 = function (descriptor) {
    var newMode = switchMode(this.b1j_1, descriptor);
    if (!equals(new Char(newMode.k1l_1), new Char(get_INVALID()))) {
      this.a1j_1.q1h(newMode.k1l_1);
      this.a1j_1.m1h();
    }
    if (!(this.h1j_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.h1j_1 = null;
    }
    if (this.c1j_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.d1j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.q4()];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.a1j_1, this.b1j_1, newMode, this.d1j_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.u11 = function (descriptor) {
    if (!equals(new Char(this.c1j_1.l1l_1), new Char(get_INVALID()))) {
      this.a1j_1.n1h();
      this.a1j_1.o1h();
      this.a1j_1.q1h(this.c1j_1.l1l_1);
    }
  };
  StreamingJsonEncoder.prototype.j12 = function (descriptor, index) {
    var tmp0_subject = this.c1j_1;
    var tmp0 = tmp0_subject.q4();
    switch (tmp0) {
      case 1:
        if (!this.a1j_1.k1h_1)
          this.a1j_1.q1h(get_COMMA());
        this.a1j_1.o1h();
        break;
      case 2:
        if (!this.a1j_1.k1h_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.a1j_1.q1h(get_COMMA());
            this.a1j_1.o1h();
            tmp_0 = true;
          } else {
            this.a1j_1.q1h(get_COLON());
            this.a1j_1.p1h();
            tmp_0 = false;
          }
          tmp.g1j_1 = tmp_0;
        } else {
          this.g1j_1 = true;
          this.a1j_1.o1h();
        }

        break;
      case 3:
        if (index === 0)
          this.g1j_1 = true;
        if (index === 1) {
          this.a1j_1.q1h(get_COMMA());
          this.a1j_1.p1h();
          this.g1j_1 = false;
        }

        break;
      default:
        if (!this.a1j_1.k1h_1)
          this.a1j_1.q1h(get_COMMA());
        this.a1j_1.o1h();
        this.u12(descriptor.i10(index));
        this.a1j_1.q1h(get_COLON());
        this.a1j_1.p1h();
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.v12 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.b1j_1, this.c1j_1, null) : AbstractEncoder.prototype.v12.call(this, descriptor);
  };
  StreamingJsonEncoder.prototype.l12 = function () {
    this.a1j_1.s1h(get_NULL());
  };
  StreamingJsonEncoder.prototype.m12 = function (value) {
    if (this.g1j_1)
      this.u12(value.toString());
    else
      this.a1j_1.b1i(value);
  };
  StreamingJsonEncoder.prototype.n12 = function (value) {
    if (this.g1j_1)
      this.u12(value.toString());
    else
      this.a1j_1.w1h(value);
  };
  StreamingJsonEncoder.prototype.o12 = function (value) {
    if (this.g1j_1)
      this.u12(value.toString());
    else
      this.a1j_1.y1h(value);
  };
  StreamingJsonEncoder.prototype.p12 = function (value) {
    if (this.g1j_1)
      this.u12(value.toString());
    else
      this.a1j_1.z1h(value);
  };
  StreamingJsonEncoder.prototype.q12 = function (value) {
    if (this.g1j_1)
      this.u12(value.toString());
    else
      this.a1j_1.a1i(value);
  };
  StreamingJsonEncoder.prototype.r12 = function (value) {
    if (this.g1j_1)
      this.u12(value.toString());
    else
      this.a1j_1.u1h(value);
    if (!this.f1j_1.d1g_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.a1j_1.j1h_1));
    }
  };
  StreamingJsonEncoder.prototype.s12 = function (value) {
    if (this.g1j_1)
      this.u12(value.toString());
    else
      this.a1j_1.v1h(value);
    if (!this.f1j_1.d1g_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.a1j_1.j1h_1));
    }
  };
  StreamingJsonEncoder.prototype.t12 = function (value) {
    this.u12(toString_0(value));
  };
  StreamingJsonEncoder.prototype.u12 = function (value) {
    return this.a1j_1.c1i(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.d10() ? get_unsignedNumberDescriptors().g1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).yy(), serializer_0(Companion_getInstance()).yy(), serializer_2(Companion_getInstance_2()).yy(), serializer_3(Companion_getInstance_3()).yy()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      {
        tmp$ret$0 = 48;
      }
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      {
        tmp$ret$1 = 97;
      }
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.r4(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        {
          var tmp0__get_code__88qj9g = charSequenceGet(value, i);
          tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        }
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.if(value, lastPos, i);
          _this__u8e3s4.e6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.if(value, lastPos, value.length);
    } else {
      _this__u8e3s4.e6(value);
    }
    _this__u8e3s4.r4(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = fillArrayVal(Array(93), null);
        }
        var tmp0_apply = tmp$ret$0;
        {
        }
        {
          var inductionVariable = 0;
          if (inductionVariable <= 31)
            do {
              var c = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var c1 = toHexChar(c >> 12);
              var c2 = toHexChar(c >> 8);
              var c3 = toHexChar(c >> 4);
              var c4 = toHexChar(c);
              tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
            }
             while (inductionVariable <= 31);
          var tmp$ret$1;
          {
            tmp$ret$1 = 34;
          }
          tmp0_apply[tmp$ret$1] = '\\"';
          var tmp$ret$2;
          {
            tmp$ret$2 = 92;
          }
          tmp0_apply[tmp$ret$2] = '\\\\';
          var tmp$ret$3;
          {
            tmp$ret$3 = 9;
          }
          tmp0_apply[tmp$ret$3] = '\\t';
          var tmp$ret$4;
          {
            tmp$ret$4 = 8;
          }
          tmp0_apply[tmp$ret$4] = '\\b';
          var tmp$ret$5;
          {
            tmp$ret$5 = 10;
          }
          tmp0_apply[tmp$ret$5] = '\\n';
          var tmp$ret$6;
          {
            tmp$ret$6 = 13;
          }
          tmp0_apply[tmp$ret$6] = '\\r';
          tmp0_apply[12] = '\\f';
        }
        tmp$ret$7 = tmp0_apply;
      }
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      {
        var tmp0_apply_0 = new Int8Array(93);
        {
        }
        {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 <= 31)
            do {
              var c_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              tmp0_apply_0[c_0] = 1;
            }
             while (inductionVariable_0 <= 31);
          var tmp$ret$0_0;
          {
            tmp$ret$0_0 = 34;
          }
          var tmp = tmp$ret$0_0;
          var tmp$ret$1_0;
          {
            tmp$ret$1_0 = 34;
          }
          tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
          var tmp$ret$2_0;
          {
            tmp$ret$2_0 = 92;
          }
          var tmp_0 = tmp$ret$2_0;
          var tmp$ret$3_0;
          {
            tmp$ret$3_0 = 92;
          }
          tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
          var tmp$ret$4_0;
          {
            tmp$ret$4_0 = 9;
          }
          var tmp_1 = tmp$ret$4_0;
          var tmp$ret$5_0;
          {
            tmp$ret$5_0 = 116;
          }
          tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
          var tmp$ret$6_0;
          {
            tmp$ret$6_0 = 8;
          }
          var tmp_2 = tmp$ret$6_0;
          var tmp$ret$7_0;
          {
            tmp$ret$7_0 = 98;
          }
          tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
          var tmp$ret$8;
          {
            tmp$ret$8 = 10;
          }
          var tmp_3 = tmp$ret$8;
          var tmp$ret$9;
          {
            tmp$ret$9 = 110;
          }
          tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
          var tmp$ret$10;
          {
            tmp$ret$10 = 13;
          }
          var tmp_4 = tmp$ret$10;
          var tmp$ret$11;
          {
            tmp$ret$11 = 114;
          }
          tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
          var tmp$ret$12;
          {
            tmp$ret$12 = 102;
          }
          tmp0_apply_0[12] = toByte(tmp$ret$12);
        }
        tmp$ret$13 = tmp0_apply_0;
      }
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.v1c();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          tmp$ret$0 = $this.w1l(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.r1() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.t1l_1 = json;
    this.u1l_1 = value;
    this.v1l_1 = this.h1g().b1f_1;
  }
  AbstractJsonTreeDecoder.prototype.h1g = function () {
    return this.t1l_1;
  };
  AbstractJsonTreeDecoder.prototype.r1 = function () {
    return this.u1l_1;
  };
  AbstractJsonTreeDecoder.prototype.sz = function () {
    return this.h1g().sz();
  };
  AbstractJsonTreeDecoder.prototype.e1f = function () {
    return this.v1l_1;
  };
  AbstractJsonTreeDecoder.prototype.i1g = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.s11 = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.w1c = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.t11 = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.e10();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.h1g();
      var tmp$ret$0;
      {
        if (!(currentObject_0 instanceof JsonArray)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.a10() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$0 = currentObject_0;
      }
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        {
          var tmp0_selectMapMode = this.h1g();
          var keyDescriptor = carrierDescriptor(descriptor.g10(0), tmp0_selectMapMode.sz());
          var keyKind = keyDescriptor.e10();
          var tmp_2;
          var tmp_3;
          if (keyKind instanceof PrimitiveKind) {
            tmp_3 = true;
          } else {
            tmp_3 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_3) {
            var tmp$ret$2;
            {
              var tmp_4 = this.h1g();
              var tmp$ret$1;
              {
                if (!(currentObject_0 instanceof JsonObject)) {
                  throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.a10() + ', but had ' + getKClassFromExpression(currentObject_0));
                }
                tmp$ret$1 = currentObject_0;
              }
              tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
            }
            tmp_2 = tmp$ret$2;
          } else {
            if (tmp0_selectMapMode.b1f_1.w1f_1) {
              var tmp$ret$4;
              {
                var tmp_5 = this.h1g();
                var tmp$ret$3;
                {
                  if (!(currentObject_0 instanceof JsonArray)) {
                    throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.a10() + ', but had ' + getKClassFromExpression(currentObject_0));
                  }
                  tmp$ret$3 = currentObject_0;
                }
                tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
              }
              tmp_2 = tmp$ret$4;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$5 = tmp_2;
        }
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.h1g();
        var tmp$ret$6;
        {
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.a10() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$6 = currentObject_0;
        }
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.u11 = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.f11 = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.x1l = function (tag) {
    var currentElement = this.w1l(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.y1l = function (tag) {
    return !(this.w1l(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.y1c = function (tag) {
    return this.y1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.z1l = function (tag) {
    var value = this.x1l(tag);
    if (!this.h1g().b1f_1.v1f_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.n1g_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      try {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = get_booleanOrNull(value);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            throw IllegalArgumentException_init_$Create$_0();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.z1c = function (tag) {
    return this.z1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.a1m = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.x1l(tag);
      try {
        var tmp$ret$0;
        {
          var result = get_int(tmp0_primitive);
          var tmp;
          var containsLower = ByteCompanionObject_getInstance().g9_1;
          if (result <= ByteCompanionObject_getInstance().h9_1 ? containsLower <= result : false) {
            tmp = toByte(result);
          } else {
            tmp = null;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.a1d = function (tag) {
    return this.a1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.b1m = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.x1l(tag);
      try {
        var tmp$ret$0;
        {
          var result = get_int(tmp0_primitive);
          var tmp;
          var containsLower = ShortCompanionObject_getInstance().o9_1;
          if (result <= ShortCompanionObject_getInstance().p9_1 ? containsLower <= result : false) {
            tmp = toShort(result);
          } else {
            tmp = null;
          }
          tmp$ret$0 = tmp;
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.b1d = function (tag) {
    return this.b1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.c1m = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.x1l(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_int(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.c1d = function (tag) {
    return this.c1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.d1m = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.x1l(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_long(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.d1d = function (tag) {
    return this.d1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.e1m = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.x1l(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_float(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.h1g().b1f_1.d1g_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.e1d = function (tag) {
    return this.e1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.f1m = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.x1l(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_double(tmp0_primitive);
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.h1g().b1f_1.d1g_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.f1d = function (tag) {
    return this.f1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.g1m = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.x1l(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = single(tmp0_primitive.m1g());
        }
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.g1d = function (tag) {
    return this.g1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.h1m = function (tag) {
    var value = this.x1l(tag);
    if (!this.h1g().b1f_1.v1f_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.n1g_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.m1g();
  };
  AbstractJsonTreeDecoder.prototype.h1d = function (tag) {
    return this.h1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.i1m = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.x1l(tag).m1g()), this.h1g()) : NamedValueDecoder.prototype.i1d.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.i1d = function (tag, inlineDescriptor) {
    return this.i1m((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = classMeta('AbstractJsonTreeDecoder', [JsonDecoder], undefined, undefined, undefined, NamedValueDecoder.prototype);
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_tryCoerceValue = $this.h1g();
      var tmp1_tryCoerceValue = descriptor.g10(index);
      var tmp;
      if (!tmp1_tryCoerceValue.wz()) {
        var tmp$ret$0;
        {
          var tmp_0 = $this.w1l(tag);
          tmp$ret$0 = tmp_0 instanceof JsonNull;
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.e10(), ENUM_getInstance())) {
        var tmp$ret$2;
        {
          var tmp_1 = $this.w1l(tag);
          var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
          tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        }
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          {
            tmp$ret$3 = Unit_getInstance();
          }
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.s1m_1 = (!$this.h1g().b1f_1.y1f_1 ? !descriptor.j10(index) : false) ? descriptor.g10(index).wz() : false;
    return $this.s1m_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o1m_1 = value;
    this.p1m_1 = polyDiscriminator;
    this.q1m_1 = polyDescriptor;
    this.r1m_1 = 0;
    this.s1m_1 = false;
  }
  JsonTreeDecoder.prototype.r1 = function () {
    return this.o1m_1;
  };
  JsonTreeDecoder.prototype.h12 = function (descriptor) {
    while (this.r1m_1 < descriptor.c10()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.r1m_1;
      tmp0_this.r1m_1 = tmp1 + 1 | 0;
      var name = this.q1c(descriptor, tmp1);
      var index = this.r1m_1 - 1 | 0;
      this.s1m_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      {
        var tmp0_contains = this.r1();
        var tmp$ret$0;
        {
          tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).y1(name);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.e1f().a1g_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.f11 = function () {
    return !this.s1m_1 ? AbstractJsonTreeDecoder.prototype.f11.call(this) : false;
  };
  JsonTreeDecoder.prototype.r1c = function (desc, index) {
    var mainName = desc.i10(index);
    if (!this.e1f().e1g_1)
      return mainName;
    if (this.r1().c2().g1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.h1g());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.p1i(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    {
      var tmp0_find = this.r1().c2();
      var tmp$ret$1;
      $l$block: {
        var tmp0_iterator = tmp0_find.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = alternativeNamesMap.b2(element) === index;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.w1l = function (tag) {
    return getValue(this.r1(), tag);
  };
  JsonTreeDecoder.prototype.t11 = function (descriptor) {
    if (descriptor === this.q1m_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.t11.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.u11 = function (descriptor) {
    var tmp;
    if (this.e1f().u1f_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.e10();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.e1f().e1g_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      {
        var tmp0_safe_receiver = get_schemaCache(this.h1g()).w1k(descriptor, get_JsonAlternativeNamesKey());
        var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2();
        var tmp0_elvis_lhs = tmp0_orEmpty;
        tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      }
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.r1().c2().d();
    while (tmp1_iterator.e()) {
      var key = tmp1_iterator.f();
      if (!names.g1(key) ? !(key === this.p1m_1) : false) {
        throw UnknownKeyException(key, this.r1().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.y1m_1 = value;
    this.z1m_1 = this.y1m_1.g();
    this.a1n_1 = -1;
  }
  JsonTreeListDecoder.prototype.r1 = function () {
    return this.y1m_1;
  };
  JsonTreeListDecoder.prototype.r1c = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.w1l = function (tag) {
    return this.y1m_1.h(toInt(tag));
  };
  JsonTreeListDecoder.prototype.h12 = function (descriptor) {
    while (this.a1n_1 < (this.z1m_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.a1n_1;
      tmp0_this.a1n_1 = tmp1 + 1 | 0;
      return this.a1n_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.l1n_1 = value;
    this.m1n_1 = toList(this.l1n_1.c2());
    this.n1n_1 = imul(this.m1n_1.g(), 2);
    this.o1n_1 = -1;
  }
  JsonTreeMapDecoder.prototype.r1 = function () {
    return this.l1n_1;
  };
  JsonTreeMapDecoder.prototype.r1c = function (desc, index) {
    var i = index / 2 | 0;
    return this.m1n_1.h(i);
  };
  JsonTreeMapDecoder.prototype.h12 = function (descriptor) {
    while (this.o1n_1 < (this.n1n_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.o1n_1;
      tmp0_this.o1n_1 = tmp1 + 1 | 0;
      return this.o1n_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.w1l = function (tag) {
    return (this.o1n_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.l1n_1, tag);
  };
  JsonTreeMapDecoder.prototype.u11 = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.yy())).s11(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.k1l_1 = begin;
    this.l1l_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.e10();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          {
            var keyDescriptor = carrierDescriptor(desc.g10(0), _this__u8e3s4.sz());
            var keyKind = keyDescriptor.e10();
            var tmp_0;
            var tmp_1;
            if (keyKind instanceof PrimitiveKind) {
              tmp_1 = true;
            } else {
              tmp_1 = equals(keyKind, ENUM_getInstance());
            }
            if (tmp_1) {
              var tmp$ret$0;
              {
                tmp$ret$0 = WriteMode_MAP_getInstance();
              }
              tmp_0 = tmp$ret$0;
            } else {
              if (_this__u8e3s4.b1f_1.w1f_1) {
                var tmp$ret$1;
                {
                  tmp$ret$1 = WriteMode_LIST_getInstance();
                }
                tmp_0 = tmp$ret$1;
              } else {
                throw InvalidKeyKindException(keyDescriptor);
              }
            }
            tmp$ret$2 = tmp_0;
          }
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function selectMapMode(_this__u8e3s4, mapDescriptor, ifMap, ifList) {
    var keyDescriptor = carrierDescriptor(mapDescriptor.g10(0), _this__u8e3s4.sz());
    var keyKind = keyDescriptor.e10();
    var tmp;
    var tmp_0;
    if (keyKind instanceof PrimitiveKind) {
      tmp_0 = true;
    } else {
      tmp_0 = equals(keyKind, ENUM_getInstance());
    }
    if (tmp_0) {
      tmp = ifMap();
    } else {
      if (_this__u8e3s4.b1f_1.w1f_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.e10(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.d10()) {
      tmp = carrierDescriptor(_this__u8e3s4.g10(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.p1n(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.p1n(lastPosition, currentPosition);
    var result = $this.r1f_1.toString();
    $this.r1f_1.jf(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    {
      var tmp0_also = ensureNotNull($this.q1f_1);
      {
      }
      {
        $this.q1f_1 = null;
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.q1n(), $this.o1f_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.r1n(currentPosition);
    if (currentPosition === -1) {
      $this.n1i('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.q1n();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.q1n(), currentPosition);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    }
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.n1i(tmp_0, 0, null, 6, null);
    }
    $this.r1f_1.r4(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.o1f_1 = startPos;
      $this.s1n();
      if (($this.o1f_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.n1i('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.o1f_1);
    }
    $this.r1f_1.r4(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      {
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
      }
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = 48;
      }
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      {
        tmp$ret$2 = Char__toInt_impl_vasixd(character);
      }
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = 97;
      }
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      {
        tmp$ret$4 = Char__toInt_impl_vasixd(character);
      }
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      {
        tmp$ret$5 = 65;
      }
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.n1i(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.r1n(start);
    if (current >= charSequenceLength($this.q1n()) ? true : current === -1) {
      $this.n1i('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    {
      var tmp = $this.q1n();
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    }
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    {
      tmp$ret$1 = 116;
    }
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      {
        tmp$ret$2 = 102;
      }
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.p1j() + "'";
        $this.n1i(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.q1n()) - current | 0) < literalSuffix.length) {
      $this.n1i('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.q1n(), current + i | 0);
        var tmp$ret$0;
        {
          tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        }
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.p1j() + "'";
          $this.n1i(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.o1f_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.o1f_1 = 0;
    this.p1f_1 = new JsonPath();
    this.q1f_1 = null;
    this.r1f_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.t1n = function (_set____db54di) {
    this.o1f_1 = _set____db54di;
  };
  AbstractJsonLexer.prototype.u1n = function () {
    return this.o1f_1;
  };
  AbstractJsonLexer.prototype.s1n = function () {
  };
  AbstractJsonLexer.prototype.v1n = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.s1f = function () {
    var nextToken = this.r1j();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.q1n(), this.o1f_1 - 1 | 0)) + ' instead';
      this.n1i(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.l1j = function (expected) {
    var token = this.r1j();
    if (!(token === expected)) {
      this.w1n(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.y1k = function (expected) {
    this.s1n();
    var source = this.q1n();
    var cpos = this.o1f_1;
    $l$loop_0: while (true) {
      cpos = this.r1n(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.o1f_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.x1n(expected);
    }
    this.o1f_1 = cpos;
    this.x1n(expected);
  };
  AbstractJsonLexer.prototype.x1n = function (expected) {
    var tmp0_this = this;
    tmp0_this.o1f_1 = tmp0_this.o1f_1 - 1 | 0;
    if ((this.o1f_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.p1j() === 'null' : false) {
      this.y1n("Expected string literal but 'null' literal was found", this.o1f_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.w1n(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.w1n = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.o1f_1 === charSequenceLength(this.q1n()) ? true : this.o1f_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.q1n(), this.o1f_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.o1f_1 - 1 | 0;
    this.n1i(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.m1j = function () {
    var source = this.q1n();
    var cpos = this.o1f_1;
    $l$loop_0: while (true) {
      cpos = this.r1n(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.o1f_1 = cpos;
      return charToTokenClass(ch);
    }
    this.o1f_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.a1l = function () {
    var current = this.z1n();
    current = this.r1n(current);
    var len = charSequenceLength(this.q1n()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.q1n(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.q1n(), current + 4 | 0)) === 0 : false)
      return true;
    this.o1f_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.z1n = function () {
    var current = this.o1f_1;
    $l$loop_0: while (true) {
      current = this.r1n(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.q1n(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.o1f_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.b1l = function (isLenient) {
    var token = this.m1j();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.p1j();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.o1j();
    }
    var string = tmp;
    this.q1f_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.a1o = function (startPos, endPos) {
    var tmp$ret$0;
    {
      var tmp0_substring = this.q1n();
      tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    }
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.o1j = function () {
    if (!(this.q1f_1 == null)) {
      return takePeeked(this);
    }
    return this.e1l();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.r1n(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.n1i('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.p1n(lastPosition, currentPosition);
          currentPosition = this.r1n(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.n1i('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.a1o(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.o1f_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.f1l = function () {
    var result = this.p1j();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.n1i("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.p1j = function () {
    if (!(this.q1f_1 == null)) {
      return takePeeked(this);
    }
    var current = this.z1n();
    if (current >= charSequenceLength(this.q1n()) ? true : current === -1) {
      var tmp = current;
      this.n1i('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.q1n(), current));
    if (token === 1) {
      return this.o1j();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.q1n(), current));
      this.n1i(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.q1n(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.q1n())) {
        usedAppend = true;
        this.p1n(this.o1f_1, current);
        var eof = this.r1n(current);
        if (eof === -1) {
          this.o1f_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.a1o(this.o1f_1, current);
    } else {
      tmp_1 = decodedString(this, this.o1f_1, current);
    }
    var result = tmp_1;
    this.o1f_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.p1n = function (fromIndex, toIndex) {
    this.r1f_1.if(this.q1n(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.b1o = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.n1i(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.d1l = function (allowLenientStrings) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var tokenStack = tmp$ret$0;
    var lastToken = this.m1j();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.p1j();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.m1j();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.p1j();
        } else {
          this.e1l();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.c(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.o1f_1, 'found ] instead of } at path: ' + this.p1f_1, this.q1n());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.o1f_1, 'found } instead of ] at path: ' + this.p1f_1, this.q1n());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.n1i('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.r1j();
      if (tokenStack.g() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.q1n() + "', currentPosition=" + this.o1f_1 + ')';
  };
  AbstractJsonLexer.prototype.c1l = function (key) {
    var processed = this.a1o(0, this.o1f_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.y1n("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.y1n = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(hint) === 0;
    }
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.p1f_1.z1i() + hintMessage, this.q1n());
  };
  AbstractJsonLexer.prototype.n1i = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.o1f_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.y1n(message, position, hint);
  };
  AbstractJsonLexer.prototype.o1l = function () {
    var current = this.z1n();
    current = this.r1n(current);
    if (current >= charSequenceLength(this.q1n()) ? true : current === -1) {
      this.n1i('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.q1n(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.q1n())) {
        this.n1i('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.q1n(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.n1i("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.q1n()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.n1i(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_times = accumulator;
          tmp$ret$0 = tmp0_times.u4(new Long(10, 0));
        }
        var tmp1_minus = tmp$ret$0;
        tmp$ret$1 = tmp1_minus.w4(toLong_0(digit));
      }
      accumulator = tmp$ret$1;
      if (accumulator.w(new Long(0, 0)) > 0) {
        this.n1i('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.n1i('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.n1i('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.q1n(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.n1i('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.o1f_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.s4();
      } else {
        this.n1i('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.m1l = function () {
    return consumeBoolean(this, this.z1n());
  };
  AbstractJsonLexer.prototype.n1l = function () {
    var current = this.z1n();
    if (current === charSequenceLength(this.q1n())) {
      this.n1i('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.q1n(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.o1f_1 === charSequenceLength(this.q1n())) {
        this.n1i('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.q1n(), this.o1f_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.n1i('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.o1f_1 = tmp0_this.o1f_1 + 1 | 0;
    }
    return result;
  };
  AbstractJsonLexer.$metadata$ = classMeta('AbstractJsonLexer');
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().d1o_1;
      var tmp$ret$1;
      {
        tmp$ret$1 = Char__toInt_impl_vasixd(c);
      }
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().c1o_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      {
        tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      }
      $this.c1o_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.d1o_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(c);
    }
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.c1o_1 = charArray(117);
    this.d1o_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = objectMeta('CharMappings');
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.i1o_1 = source;
  }
  StringJsonLexer.prototype.q1n = function () {
    return this.i1o_1;
  };
  StringJsonLexer.prototype.r1n = function (position) {
    return position < this.i1o_1.length ? position : -1;
  };
  StringJsonLexer.prototype.r1j = function () {
    var source = this.i1o_1;
    $l$loop: while (!(this.u1n() === -1) ? this.u1n() < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.u1n();
      tmp0_this.t1n(tmp1 + 1 | 0);
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.z1k = function () {
    var current = this.z1n();
    if (current === this.i1o_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.i1o_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.t1n(tmp0_this.u1n() + 1 | 0);
      tmp0_this.u1n();
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.n1j = function () {
    var current = this.u1n();
    if (current === -1)
      return false;
    $l$loop: while (current < this.i1o_1.length) {
      var c = charSequenceGet(this.i1o_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.t1n(current);
      return this.v1n(c);
    }
    this.t1n(current);
    return false;
  };
  StringJsonLexer.prototype.z1n = function () {
    var current = this.u1n();
    if (current === -1)
      return current;
    $l$loop: while (current < this.i1o_1.length) {
      var c = charSequenceGet(this.i1o_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.t1n(current);
    return current;
  };
  StringJsonLexer.prototype.y1k = function (expected) {
    if (this.u1n() === -1)
      this.x1n(expected);
    var source = this.i1o_1;
    $l$loop: while (this.u1n() < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.u1n();
      tmp0_this.t1n(tmp1 + 1 | 0);
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.x1n(expected);
    }
    this.x1n(expected);
  };
  StringJsonLexer.prototype.e1l = function () {
    this.y1k(get_STRING());
    var current = this.u1n();
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.i1o_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.w1n(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.i1o_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.i1o_1, this.u1n(), i);
        }
      }
       while (inductionVariable < closingQuote);
    this.t1n(closingQuote + 1 | 0);
    var tmp$ret$1;
    {
      var tmp0_substring = this.i1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_substring;
      }
      tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    }
    return tmp$ret$1;
  };
  StringJsonLexer.prototype.h1l = function (keyToMatch, isLenient) {
    var positionSnapshot = this.u1n();
    try {
      if (!(this.r1j() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.e1l() : this.f1l();
      if (firstKey === keyToMatch) {
        if (!(this.r1j() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.o1j() : this.f1l();
        return result;
      }
      return null;
    }finally {
      this.t1n(positionSnapshot);
    }
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.d1f_1;
  }
  function JsonToStringWriter() {
    this.f1f_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonToStringWriter.prototype.x1h = function (value) {
    this.f1f_1.d6(value);
  };
  JsonToStringWriter.prototype.r1h = function (char) {
    this.f1f_1.r4(char);
  };
  JsonToStringWriter.prototype.t1h = function (text) {
    this.f1f_1.e6(text);
  };
  JsonToStringWriter.prototype.d1i = function (text) {
    printQuoted(this.f1f_1, text);
  };
  JsonToStringWriter.prototype.ws = function () {
    this.f1f_1.kf();
  };
  JsonToStringWriter.prototype.toString = function () {
    return this.f1f_1.toString();
  };
  JsonToStringWriter.$metadata$ = classMeta('JsonToStringWriter', [JsonWriter]);
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.wz = get_isNullable;
  defer$1.prototype.d10 = get_isInline;
  defer$1.prototype.b10 = get_annotations;
  StreamingJsonDecoder.prototype.f12 = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.g12 = decodeSequentially;
  StreamingJsonDecoder.prototype.i12 = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.s11 = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.f12 = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.g12 = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.i12 = decodeCollectionSize;
  StreamingJsonEncoder.prototype.h13 = encodeNotNullMark;
  StreamingJsonEncoder.prototype.i13 = beginCollection;
  AbstractJsonTreeDecoder.prototype.f12 = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.g12 = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.i12 = decodeCollectionSize;
  JsonTreeDecoder.prototype.f12 = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.g12 = decodeSequentially;
  JsonTreeDecoder.prototype.i12 = decodeCollectionSize;
  JsonTreeListDecoder.prototype.f12 = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.g12 = decodeSequentially;
  JsonTreeListDecoder.prototype.i12 = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.f12 = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.g12 = decodeSequentially;
  JsonTreeMapDecoder.prototype.i12 = decodeCollectionSize;
  //endregion
  //region block: init
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map