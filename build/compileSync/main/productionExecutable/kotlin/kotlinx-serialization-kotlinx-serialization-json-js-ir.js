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
  var objectMeta = kotlin_kotlin.$_$.f6;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var classMeta = kotlin_kotlin.$_$.k5;
  var Annotation = kotlin_kotlin.$_$.m7;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var interfaceMeta = kotlin_kotlin.$_$.q5;
  var equals = kotlin_kotlin.$_$.l5;
  var hashCode = kotlin_kotlin.$_$.p5;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var List = kotlin_kotlin.$_$.c3;
  var Unit_getInstance = kotlin_kotlin.$_$.t2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.u7;
  var Map = kotlin_kotlin.$_$.e3;
  var toString = kotlin_kotlin.$_$.j6;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.o5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.i8;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var toInt = kotlin_kotlin.$_$.a7;
  var toLong = kotlin_kotlin.$_$.d7;
  var toDouble = kotlin_kotlin.$_$.y6;
  var toLongOrNull = kotlin_kotlin.$_$.c7;
  var toDoubleOrNull = kotlin_kotlin.$_$.x6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.j2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var toULongOrNull = kotlin_kotlin.$_$.g7;
  var Companion_getInstance = kotlin_kotlin.$_$.r2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y1;
  var ULong = kotlin_kotlin.$_$.y7;
  var isInterface = kotlin_kotlin.$_$.y5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var lazy_0 = kotlin_kotlin.$_$.j8;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var KProperty1 = kotlin_kotlin.$_$.p6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.n5;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var toLong_0 = kotlin_kotlin.$_$.h6;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.u1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.w1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.z1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.r1;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.t1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.a2;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.c2;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.e5;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.i5;
  var charSequenceSubSequence = kotlin_kotlin.$_$.j5;
  var coerceAtLeast = kotlin_kotlin.$_$.k6;
  var coerceAtMost = kotlin_kotlin.$_$.l6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var singleOrNull = kotlin_kotlin.$_$.p4;
  var arrayIterator = kotlin_kotlin.$_$.c5;
  var ensureNotNull = kotlin_kotlin.$_$.e8;
  var emptyMap = kotlin_kotlin.$_$.y3;
  var getValue = kotlin_kotlin.$_$.a4;
  var copyOf = kotlin_kotlin.$_$.u3;
  var copyOf_0 = kotlin_kotlin.$_$.v3;
  var fillArrayVal = kotlin_kotlin.$_$.m5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.o7;
  var invoke = kotlin_kotlin.$_$.f8;
  var CoroutineImpl = kotlin_kotlin.$_$.z4;
  var DeepRecursiveScope = kotlin_kotlin.$_$.p7;
  var Unit = kotlin_kotlin.$_$.a8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y4;
  var SuspendFunction2 = kotlin_kotlin.$_$.a5;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var isObject = kotlin_kotlin.$_$.a6;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var plus = kotlin_kotlin.$_$.k8;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.r7;
  var isFinite = kotlin_kotlin.$_$.h8;
  var isFinite_0 = kotlin_kotlin.$_$.g8;
  var charSequenceGet = kotlin_kotlin.$_$.h5;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var toUInt = kotlin_kotlin.$_$.f7;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.v1;
  var toULong = kotlin_kotlin.$_$.h7;
  var toUByte = kotlin_kotlin.$_$.e7;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.s1;
  var toUShort = kotlin_kotlin.$_$.i7;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.b2;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var Char = kotlin_kotlin.$_$.n7;
  var toString_0 = kotlin_kotlin.$_$.n1;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.p2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.s2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var setOf = kotlin_kotlin.$_$.o4;
  var numberToChar = kotlin_kotlin.$_$.e6;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m1;
  var equals_0 = kotlin_kotlin.$_$.s6;
  var toByte = kotlin_kotlin.$_$.g6;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.e2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.i2;
  var toShort = kotlin_kotlin.$_$.i6;
  var single = kotlin_kotlin.$_$.v6;
  var emptySet = kotlin_kotlin.$_$.z3;
  var plus_0 = kotlin_kotlin.$_$.k4;
  var toList = kotlin_kotlin.$_$.s4;
  var Enum = kotlin_kotlin.$_$.q7;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var last = kotlin_kotlin.$_$.g4;
  var removeLast = kotlin_kotlin.$_$.m4;
  var lastIndexOf$default = kotlin_kotlin.$_$.i;
  var Long = kotlin_kotlin.$_$.s7;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.l1;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.n2;
  var charArray = kotlin_kotlin.$_$.g5;
  var indexOf$default = kotlin_kotlin.$_$.h;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
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
    this.f13_1 = configuration;
    this.g13_1 = serializersModule;
    this.h13_1 = new DescriptorSchemaCache();
  }
  Json.prototype.i13 = function () {
    return this.f13_1;
  };
  Json.prototype.wn = function () {
    return this.g13_1;
  };
  Json.prototype.un = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.k13();
    }
  };
  Json.prototype.vn = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.cn(), null);
    var result = input.wp(deserializer);
    lexer.x13();
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
    this.y13_1 = encodeDefaults;
    this.z13_1 = ignoreUnknownKeys;
    this.a14_1 = isLenient;
    this.b14_1 = allowStructuredMapKeys;
    this.c14_1 = prettyPrint;
    this.d14_1 = explicitNulls;
    this.e14_1 = prettyPrintIndent;
    this.f14_1 = coerceInputValues;
    this.g14_1 = useArrayPolymorphism;
    this.h14_1 = classDiscriminator;
    this.i14_1 = allowSpecialFloatingPointValues;
    this.j14_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.k14 = function () {
    return this.a14_1;
  };
  JsonConfiguration.prototype.l14 = function () {
    return this.e14_1;
  };
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.y13_1 + ', ignoreUnknownKeys=' + this.z13_1 + ', isLenient=' + this.a14_1 + ', ' + ('allowStructuredMapKeys=' + this.b14_1 + ', prettyPrint=' + this.c14_1 + ', explicitNulls=' + this.d14_1 + ', ') + ("prettyPrintIndent='" + this.e14_1 + "', coerceInputValues=" + this.f14_1 + ', useArrayPolymorphism=' + this.g14_1 + ', ') + ("classDiscriminator='" + this.h14_1 + "', allowSpecialFloatingPointValues=" + this.i14_1 + ')');
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
    this.o14_1 = content;
  }
  JsonArray.prototype.g = function () {
    return this.o14_1.g();
  };
  JsonArray.prototype.p14 = function (elements) {
    return this.o14_1.j1(elements);
  };
  JsonArray.prototype.j1 = function (elements) {
    return this.p14(elements);
  };
  JsonArray.prototype.h = function (index) {
    return this.o14_1.h(index);
  };
  JsonArray.prototype.k = function () {
    return this.o14_1.k();
  };
  JsonArray.prototype.d = function () {
    return this.o14_1.d();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.o14_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.o14_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.o14_1, ',', '[', ']', 0, null, null, 56, null);
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
        tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.q1();
      }
      var k = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.s1();
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
            tmp0_apply.e4(_Char___init__impl__6a9atx(58));
            tmp0_apply.q5(v);
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
    this.q14_1 = content;
  }
  JsonObject.prototype.q = function () {
    return this.q14_1.q();
  };
  JsonObject.prototype.d2 = function () {
    return this.q14_1.d2();
  };
  JsonObject.prototype.g = function () {
    return this.q14_1.g();
  };
  JsonObject.prototype.hi = function (key) {
    return this.q14_1.z1(key);
  };
  JsonObject.prototype.z1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.hi((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.ii = function (key) {
    return this.q14_1.c2(key);
  };
  JsonObject.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ii((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.k = function () {
    return this.q14_1.k();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.q14_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.q14_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.q14_1.q();
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
    return this.r14();
  };
  JsonPrimitive.$metadata$ = classMeta('JsonPrimitive', undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, undefined, JsonElement.prototype);
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.s14_1 = isString;
    this.t14_1 = toString(body);
  }
  JsonLiteral.prototype.r14 = function () {
    return this.t14_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.s14_1) {
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
            printQuoted(tmp0_apply, this.t14_1);
          }
          tmp$ret$0 = tmp0_apply;
        }
        tmp$ret$1 = tmp$ret$0.toString();
      }
      tmp = tmp$ret$1;
    } else {
      tmp = this.t14_1;
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
    if (!(this.s14_1 === other.s14_1))
      return false;
    if (!(this.t14_1 === other.t14_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.s14_1 | 0;
    result = imul(31, result) + getStringHashCode(this.t14_1) | 0;
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
    this.u14_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v14_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1());
  }
  JsonNull.prototype.r14 = function () {
    return this.u14_1;
  };
  JsonNull.prototype.w14 = function () {
    return this.v14_1.s1();
  };
  JsonNull.prototype.zw = function (typeParamsSerializers) {
    return this.w14();
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
    return toBooleanStrictOrNull(_this__u8e3s4.r14());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.r14());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.r14());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp0_toFloat = _this__u8e3s4.r14();
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
    return toDouble(_this__u8e3s4.r14());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.r14();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.r14());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.r14());
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
      return JsonPrimitiveSerializer_getInstance().x14_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return function () {
      return JsonNullSerializer_getInstance().y14_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return function () {
      return JsonLiteralSerializer_getInstance().z14_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return function () {
      return JsonObjectSerializer_getInstance().a15_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return function () {
      return JsonArraySerializer_getInstance().b15_1;
    };
  }
  function JsonElementSerializer$descriptor$lambda() {
    return function ($this$buildSerialDescriptor) {
      var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda());
      $this$buildSerialDescriptor.nn('JsonPrimitive', tmp, null, false, 12, null);
      var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0());
      $this$buildSerialDescriptor.nn('JsonNull', tmp_0, null, false, 12, null);
      var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1());
      $this$buildSerialDescriptor.nn('JsonLiteral', tmp_1, null, false, 12, null);
      var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2());
      $this$buildSerialDescriptor.nn('JsonObject', tmp_2, null, false, 12, null);
      var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3());
      $this$buildSerialDescriptor.nn('JsonArray', tmp_3, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.c15_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda(), 4, null);
  }
  JsonElementSerializer.prototype.cn = function () {
    return this.c15_1;
  };
  JsonElementSerializer.prototype.d15 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive)
      encoder.kr(JsonPrimitiveSerializer_getInstance(), value);
    else {
      if (tmp0_subject instanceof JsonObject)
        encoder.kr(JsonObjectSerializer_getInstance(), value);
      else {
        if (tmp0_subject instanceof JsonArray)
          encoder.kr(JsonArraySerializer_getInstance(), value);
      }
    }
  };
  JsonElementSerializer.prototype.dn = function (encoder, value) {
    return this.d15(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.en = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.n14();
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
    this.e15_1 = ListSerializer(JsonElementSerializer_getInstance()).cn();
    this.f15_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.fo = function () {
    return this.e15_1.fo();
  };
  JsonArrayDescriptor.prototype.go = function () {
    return this.e15_1.go();
  };
  JsonArrayDescriptor.prototype.ho = function () {
    return this.e15_1.ho();
  };
  JsonArrayDescriptor.prototype.ao = function () {
    return this.e15_1.ao();
  };
  JsonArrayDescriptor.prototype.io = function () {
    return this.e15_1.io();
  };
  JsonArrayDescriptor.prototype.jo = function (index) {
    return this.e15_1.jo(index);
  };
  JsonArrayDescriptor.prototype.ko = function (index) {
    return this.e15_1.ko(index);
  };
  JsonArrayDescriptor.prototype.lo = function (name) {
    return this.e15_1.lo(name);
  };
  JsonArrayDescriptor.prototype.mo = function (index) {
    return this.e15_1.mo(index);
  };
  JsonArrayDescriptor.prototype.no = function (index) {
    return this.e15_1.no(index);
  };
  JsonArrayDescriptor.prototype.eo = function () {
    return this.f15_1;
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
    this.b15_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.cn = function () {
    return this.b15_1;
  };
  JsonArraySerializer.prototype.g15 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).dn(encoder, value);
  };
  JsonArraySerializer.prototype.dn = function (encoder, value) {
    return this.g15(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.en = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).en(decoder));
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
    this.h15_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).cn();
    this.i15_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.fo = function () {
    return this.h15_1.fo();
  };
  JsonObjectDescriptor.prototype.go = function () {
    return this.h15_1.go();
  };
  JsonObjectDescriptor.prototype.ho = function () {
    return this.h15_1.ho();
  };
  JsonObjectDescriptor.prototype.ao = function () {
    return this.h15_1.ao();
  };
  JsonObjectDescriptor.prototype.io = function () {
    return this.h15_1.io();
  };
  JsonObjectDescriptor.prototype.jo = function (index) {
    return this.h15_1.jo(index);
  };
  JsonObjectDescriptor.prototype.ko = function (index) {
    return this.h15_1.ko(index);
  };
  JsonObjectDescriptor.prototype.lo = function (name) {
    return this.h15_1.lo(name);
  };
  JsonObjectDescriptor.prototype.mo = function (index) {
    return this.h15_1.mo(index);
  };
  JsonObjectDescriptor.prototype.no = function (index) {
    return this.h15_1.no(index);
  };
  JsonObjectDescriptor.prototype.eo = function () {
    return this.i15_1;
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
    this.a15_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.cn = function () {
    return this.a15_1;
  };
  JsonObjectSerializer.prototype.j15 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).dn(encoder, value);
  };
  JsonObjectSerializer.prototype.dn = function (encoder, value) {
    return this.j15(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.en = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).en(decoder));
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
    tmp.x14_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.cn = function () {
    return this.x14_1;
  };
  JsonPrimitiveSerializer.prototype.k15 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      tmp = encoder.kr(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      tmp = encoder.kr(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.dn = function (encoder, value) {
    return this.k15(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.en = function (decoder) {
    var result = asJsonDecoder(decoder).n14();
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
    tmp.y14_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.cn = function () {
    return this.y14_1;
  };
  JsonNullSerializer.prototype.l15 = function (encoder, value) {
    verify(encoder);
    encoder.pq();
  };
  JsonNullSerializer.prototype.dn = function (encoder, value) {
    return this.l15(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.en = function (decoder) {
    verify_0(decoder);
    if (decoder.jp()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.kp();
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
    this.z14_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.cn = function () {
    return this.z14_1;
  };
  JsonLiteralSerializer.prototype.m15 = function (encoder, value) {
    verify(encoder);
    if (value.s14_1) {
      return encoder.yq(value.t14_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        return encoder.uq(tmp0_safe_receiver);
      }
    }
    var tmp1_safe_receiver = toULongOrNull(value.t14_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        var tmp_0 = encoder.zq(serializer_0(Companion_getInstance()).cn());
        var tmp$ret$1;
        {
          tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
        }
        tmp_0.uq(tmp$ret$1);
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
        return encoder.wq(tmp2_safe_receiver);
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
        return encoder.qq(tmp3_safe_receiver);
      }
    }
    encoder.yq(value.t14_1);
  };
  JsonLiteralSerializer.prototype.dn = function (encoder, value) {
    return this.m15(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.en = function (decoder) {
    var result = asJsonDecoder(decoder).n14();
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
      tmp$ret$0 = $this.n15_1.s1();
    }
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.n15_1 = lazy_0($deferred);
  }
  defer$1.prototype.eo = function () {
    return _get_original__l7ku1m(this).eo();
  };
  defer$1.prototype.io = function () {
    return _get_original__l7ku1m(this).io();
  };
  defer$1.prototype.go = function () {
    return _get_original__l7ku1m(this).go();
  };
  defer$1.prototype.mo = function (index) {
    return _get_original__l7ku1m(this).mo(index);
  };
  defer$1.prototype.lo = function (name) {
    return _get_original__l7ku1m(this).lo(name);
  };
  defer$1.prototype.jo = function (index) {
    return _get_original__l7ku1m(this).jo(index);
  };
  defer$1.prototype.ko = function (index) {
    return _get_original__l7ku1m(this).ko(index);
  };
  defer$1.prototype.no = function (index) {
    return _get_original__l7ku1m(this).no(index);
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
    this.o15_1 = writer;
    this.p15_1 = true;
  }
  Composer.prototype.q15 = function (_set____db54di) {
    this.p15_1 = _set____db54di;
  };
  Composer.prototype.r15 = function () {
    this.p15_1 = true;
  };
  Composer.prototype.s15 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.t15 = function () {
    this.p15_1 = false;
  };
  Composer.prototype.u15 = function () {
    return Unit_getInstance();
  };
  Composer.prototype.v15 = function (v) {
    return this.o15_1.w15(v);
  };
  Composer.prototype.x15 = function (v) {
    return this.o15_1.y15(v);
  };
  Composer.prototype.z15 = function (v) {
    return this.o15_1.y15(v.toString());
  };
  Composer.prototype.a16 = function (v) {
    return this.o15_1.y15(v.toString());
  };
  Composer.prototype.b16 = function (v) {
    return this.o15_1.c16(toLong_0(v));
  };
  Composer.prototype.d16 = function (v) {
    return this.o15_1.c16(toLong_0(v));
  };
  Composer.prototype.e16 = function (v) {
    return this.o15_1.c16(toLong_0(v));
  };
  Composer.prototype.f16 = function (v) {
    return this.o15_1.c16(v);
  };
  Composer.prototype.g16 = function (v) {
    return this.o15_1.y15(v.toString());
  };
  Composer.prototype.h16 = function (value) {
    return this.o15_1.i16(value);
  };
  Composer.$metadata$ = classMeta('Composer');
  function Composer_0(sb, json) {
    return json.f13_1.c14_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.l16_1 = forceQuoting;
  }
  ComposerForUnsignedNumbers.prototype.e16 = function (v) {
    if (this.l16_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      }
      this.h16(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      }
      this.x15(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.f16 = function (v) {
    if (this.l16_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      }
      this.h16(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      }
      this.x15(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.b16 = function (v) {
    if (this.l16_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      }
      this.h16(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      }
      this.x15(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.prototype.d16 = function (v) {
    if (this.l16_1) {
      var tmp$ret$0;
      {
        tmp$ret$0 = _UShort___init__impl__jigrne(v);
      }
      this.h16(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      var tmp$ret$1;
      {
        tmp$ret$1 = _UShort___init__impl__jigrne(v);
      }
      this.x15(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  ComposerForUnsignedNumbers.$metadata$ = classMeta('ComposerForUnsignedNumbers', undefined, undefined, undefined, undefined, Composer.prototype);
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.o16_1 = json;
    this.p16_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.r15 = function () {
    this.q15(true);
    var tmp0_this = this;
    var tmp1 = tmp0_this.p16_1;
    tmp0_this.p16_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.s15 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.p16_1;
    tmp0_this.p16_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.t15 = function () {
    this.q15(false);
    this.x15('\n');
    {
      var tmp0_repeat = this.p16_1;
      {
      }
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            this.x15(this.o16_1.f13_1.e14_1);
          }
        }
         while (inductionVariable < tmp0_repeat);
    }
  };
  ComposerWithPrettyPrint.prototype.u15 = function () {
    this.v15(_Char___init__impl__6a9atx(32));
  };
  ComposerWithPrettyPrint.$metadata$ = classMeta('ComposerWithPrettyPrint', undefined, undefined, undefined, undefined, Composer.prototype);
  function readIfAbsent($this, descriptor, index) {
    $this.r16_1 = !descriptor.no(index) ? descriptor.ko(index).ao() : false;
    return $this.r16_1;
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
    tmp.q16_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.r16_1 = false;
  }
  JsonElementMarker.prototype.ov = function (index) {
    this.q16_1.ov(index);
  };
  JsonElementMarker.prototype.pv = function () {
    return this.q16_1.pv();
  };
  JsonElementMarker.$metadata$ = classMeta('JsonElementMarker');
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.s16(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = classMeta('JsonEncodingException', undefined, undefined, undefined, undefined, JsonException.prototype);
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.eo() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.io() + "'.\n") + get_allowStructuredMapKeysHint());
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
    if (!elementDescriptor.ao() ? peekNull() : false)
      return true;
    if (equals(elementDescriptor.io(), ENUM_getInstance())) {
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
    var index = _this__u8e3s4.lo(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.f13_1.j14_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.u16(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.c2(name);
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
    var last = _this__u8e3s4.go();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        {
          var tmp0_filterIsInstance = _this__u8e3s4.jo(i);
          var tmp$ret$0;
          {
            var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
            var tmp0_iterator = tmp0_filterIsInstance.d();
            while (tmp0_iterator.e()) {
              var element = tmp0_iterator.f();
              if (element instanceof JsonNames) {
                tmp0_filterIsInstanceTo.b(element);
              }
            }
            tmp$ret$0 = tmp0_filterIsInstanceTo;
          }
          tmp$ret$1 = tmp$ret$0;
        }
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v16_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          {
            var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
            while (tmp0_iterator_0.e()) {
              var element_0 = tmp0_iterator_0.f();
              {
                if (builder == null)
                  builder = createMapForCache(_this__u8e3s4.go());
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
        tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).z1(name);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.mo(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.mo(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
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
    var newSize = imul($this.y16_1, 2);
    $this.w16_1 = copyOf($this.w16_1, newSize);
    $this.x16_1 = copyOf_0($this.x16_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(8), null);
    }
    tmp.w16_1 = tmp$ret$0;
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
    tmp_0.x16_1 = tmp_3;
    this.y16_1 = -1;
  }
  JsonPath.prototype.z16 = function (sd) {
    var tmp0_this = this;
    tmp0_this.y16_1 = tmp0_this.y16_1 + 1 | 0;
    var depth = tmp0_this.y16_1;
    if (depth === this.w16_1.length) {
      resize(this);
    }
    this.w16_1[depth] = sd;
  };
  JsonPath.prototype.a17 = function (index) {
    this.x16_1[this.y16_1] = index;
  };
  JsonPath.prototype.b17 = function (key) {
    var tmp;
    if (!(this.x16_1[this.y16_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.y16_1 = tmp0_this.y16_1 + 1 | 0;
      tmp = tmp0_this.y16_1 === this.w16_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.w16_1[this.y16_1] = key;
    this.x16_1[this.y16_1] = -2;
  };
  JsonPath.prototype.c17 = function () {
    if (this.x16_1[this.y16_1] === -2) {
      this.w16_1[this.y16_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.d17 = function () {
    var depth = this.y16_1;
    if (this.x16_1[depth] === -2) {
      this.x16_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.y16_1;
      tmp0_this.y16_1 = tmp1 - 1 | 0;
    }
    if (!(this.y16_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.y16_1;
      tmp2_this.y16_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.e17 = function () {
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
          tmp0_apply.r5('$');
          {
            var tmp0_repeat = this.y16_1 + 1 | 0;
            {
            }
            var inductionVariable = 0;
            if (inductionVariable < tmp0_repeat)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                {
                  var element = this.w16_1[index];
                  if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
                    if (equals(element.io(), LIST_getInstance())) {
                      if (!(this.x16_1[index] === -1)) {
                        tmp0_apply.r5('[');
                        tmp0_apply.q5(this.x16_1[index]);
                        tmp0_apply.r5(']');
                      }
                    } else {
                      var idx = this.x16_1[index];
                      if (idx >= 0) {
                        tmp0_apply.r5('.');
                        tmp0_apply.r5(element.mo(idx));
                      }
                    }
                  } else {
                    if (!(element === Tombstone_getInstance())) {
                      tmp0_apply.r5('[');
                      tmp0_apply.r5("'");
                      tmp0_apply.q5(element);
                      tmp0_apply.r5("'");
                      tmp0_apply.r5(']');
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
    return this.e17();
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
    encoder.kr(serializer, value);
  }
  function JsonWriter() {
  }
  JsonWriter.$metadata$ = interfaceMeta('JsonWriter');
  function readObject($this) {
    var tmp$ret$2;
    {
      var lastToken = $this.n17_1.q17(get_TC_BEGIN_OBJ());
      if ($this.n17_1.r17() === get_TC_COMMA()) {
        $this.n17_1.s16('Unexpected leading comma', 0, null, 6, null);
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
      }
      var result = tmp$ret$0;
      $l$loop: while ($this.n17_1.s17()) {
        var key = $this.o17_1 ? $this.n17_1.u17() : $this.n17_1.t17();
        $this.n17_1.q17(get_TC_COLON());
        var tmp$ret$1;
        {
          tmp$ret$1 = $this.v17();
        }
        var element = tmp$ret$1;
        {
          result.a(key, element);
        }
        lastToken = $this.n17_1.w17();
        var tmp0_subject = lastToken;
        if (tmp0_subject === get_TC_COMMA())
        ;
        else if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.n17_1.s16('Expected end of the object or comma', 0, null, 6, null);
        }
      }
      if (lastToken === get_TC_BEGIN_OBJ()) {
        $this.n17_1.q17(get_TC_END_OBJ());
      } else if (lastToken === get_TC_COMMA()) {
        $this.n17_1.s16('Unexpected trailing comma', 0, null, 6, null);
      }
      tmp$ret$2 = new JsonObject(result);
    }
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.hh_1 = Unit_getInstance();
    tmp.ih_1 = null;
    return tmp.oh();
  }
  function readArray($this) {
    var lastToken = $this.n17_1.w17();
    if ($this.n17_1.r17() === get_TC_COMMA()) {
      $this.n17_1.s16('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var result = tmp$ret$0;
    while ($this.n17_1.s17()) {
      var element = $this.v17();
      result.b(element);
      lastToken = $this.n17_1.w17();
      if (!(lastToken === get_TC_COMMA())) {
        {
          var tmp0_require = $this.n17_1;
          var tmp1_require = lastToken === get_TC_END_LIST();
          var tmp2_require = tmp0_require.t13_1;
          if (!tmp1_require) {
            var tmp$ret$1;
            {
              tmp$ret$1 = 'Expected end of the array or comma';
            }
            var tmp = tmp$ret$1;
            tmp0_require.s16(tmp, tmp2_require, null, 4, null);
          }
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.n17_1.q17(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.n17_1.s16('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.o17_1 ? true : !isString) {
      tmp = $this.n17_1.u17();
    } else {
      tmp = $this.n17_1.t17();
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
    this.s18_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.x18 = function ($this$$receiver, it, $cont) {
    var tmp = this.y18($this$$receiver, it, $cont);
    tmp.hh_1 = Unit_getInstance();
    tmp.ih_1 = null;
    return tmp.oh();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.h6 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.x18(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.oh = function () {
    var suspendResult = this.hh_1;
    $sm: do
      try {
        var tmp = this.fh_1;
        switch (tmp) {
          case 0:
            this.gh_1 = 3;
            this.v18_1 = this.s18_1.n17_1.r17();
            if (this.v18_1 === get_TC_STRING()) {
              this.w18_1 = readValue(this.s18_1, true);
              this.fh_1 = 2;
              continue $sm;
            } else {
              if (this.v18_1 === get_TC_OTHER()) {
                this.w18_1 = readValue(this.s18_1, false);
                this.fh_1 = 2;
                continue $sm;
              } else {
                if (this.v18_1 === get_TC_BEGIN_OBJ()) {
                  this.fh_1 = 1;
                  suspendResult = readObject_0(this.t18_1, this.s18_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.v18_1 === get_TC_BEGIN_LIST()) {
                    this.w18_1 = readArray(this.s18_1);
                    this.fh_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.s18_1.n17_1.s16("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.w18_1 = suspendResult;
            this.fh_1 = 2;
            continue $sm;
          case 2:
            return this.w18_1;
          case 3:
            throw this.ih_1;
        }
      } catch ($p) {
        if (this.gh_1 === 3) {
          throw $p;
        } else {
          this.fh_1 = this.gh_1;
          this.ih_1 = $p;
        }
      }
     while (true);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.y18 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.s18_1, completion);
    i.t18_1 = $this$$receiver;
    i.u18_1 = it;
    return i;
  };
  JsonTreeReader$readDeepRecursive$slambda.$metadata$ = classMeta('JsonTreeReader$readDeepRecursive$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.x18($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f18_1 = _this__u8e3s4;
    this.g18_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.oh = function () {
    var suspendResult = this.hh_1;
    $sm: do
      try {
        var tmp = this.fh_1;
        switch (tmp) {
          case 0:
            this.gh_1 = 5;
            this.h18_1 = this.f18_1.n17_1.q17(get_TC_BEGIN_OBJ());
            if (this.f18_1.n17_1.r17() === get_TC_COMMA()) {
              this.f18_1.n17_1.s16('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.i18_1 = LinkedHashMap_init_$Create$();
            this.fh_1 = 1;
            continue $sm;
          case 1:
            if (!this.f18_1.n17_1.s17()) {
              this.fh_1 = 4;
              continue $sm;
            }

            this.j18_1 = this.f18_1.o17_1 ? this.f18_1.n17_1.u17() : this.f18_1.n17_1.t17();
            this.f18_1.n17_1.q17(get_TC_COLON());
            ;
            this.fh_1 = 2;
            suspendResult = this.g18_1.z5(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.i18_1.a(this.j18_1, element);
            ;
            this.h18_1 = this.f18_1.n17_1.w17();
            var tmp0_subject = this.h18_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.fh_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.fh_1 = 4;
                continue $sm;
              } else {
                this.f18_1.n17_1.s16('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.fh_1 = 1;
            continue $sm;
          case 4:
            if (this.h18_1 === get_TC_BEGIN_OBJ()) {
              this.f18_1.n17_1.q17(get_TC_END_OBJ());
            } else if (this.h18_1 === get_TC_COMMA()) {
              this.f18_1.n17_1.s16('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.i18_1);
          case 5:
            throw this.ih_1;
        }
      } catch ($p) {
        if (this.gh_1 === 5) {
          throw $p;
        } else {
          this.fh_1 = this.gh_1;
          this.ih_1 = $p;
        }
      }
     while (true);
  };
  $readObjectCOROUTINE$0.$metadata$ = classMeta('$readObjectCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsonTreeReader(configuration, lexer) {
    this.n17_1 = lexer;
    this.o17_1 = configuration.a14_1;
    this.p17_1 = 0;
  }
  JsonTreeReader.prototype.v17 = function () {
    var token = this.n17_1.r17();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.p17_1 = tmp0_this.p17_1 + 1 | 0;
      if (tmp0_this.p17_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.p17_1 = tmp1_this.p17_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.n17_1.s16(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = classMeta('JsonTreeReader');
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.fo().d();
    while (tmp0_iterator.e()) {
      var annotation = tmp0_iterator.f();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.z18_1;
    }
    return json.f13_1.h14_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.m14().f13_1.g14_1;
    }
    if (tmp) {
      return deserializer.en(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.cn(), _this__u8e3s4.m14());
    var tmp$ret$0;
    {
      var tmp0_cast = _this__u8e3s4.n14();
      var tmp1_cast = deserializer.cn();
      if (!(tmp0_cast instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.eo() + ', but had ' + getKClassFromExpression(tmp0_cast));
      }
      tmp$ret$0 = tmp0_cast;
    }
    var jsonTree = tmp$ret$0;
    var tmp0_safe_receiver = jsonTree.ii(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r14();
    var tmp2_elvis_lhs = deserializer.sn(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.m14();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function encodePolymorphically(_this__u8e3s4, serializer, value, ifPolymorphic) {
    var tmp;
    if (!(serializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.m14().f13_1.g14_1;
    }
    if (tmp) {
      serializer.dn(_this__u8e3s4, value);
      return Unit_getInstance();
    }
    var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
    var baseClassDiscriminator = classDiscriminator(serializer.cn(), _this__u8e3s4.m14());
    var actualSerializer = findPolymorphicSerializer(casted, _this__u8e3s4, isObject(value) ? value : THROW_CCE());
    validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
    checkKind(actualSerializer.cn().io());
    ifPolymorphic(baseClassDiscriminator);
    actualSerializer.dn(_this__u8e3s4, value);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.cn()).i1(classDiscriminator)) {
      var baseName = serializer.cn().eo();
      var actualName = actualSerializer.cn().eo();
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
    this.t16_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.a19 = function (descriptor, key, value) {
    {
      var tmp$ret$1;
      {
        var tmp0_getOrPut = this.t16_1;
        var value_0 = tmp0_getOrPut.c2(descriptor);
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
  DescriptorSchemaCache.prototype.u16 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.b19(descriptor, key);
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
    this.a19(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.b19 = function (descriptor, key) {
    var tmp0_safe_receiver = this.t16_1.c2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.c2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = classMeta('DescriptorSchemaCache');
  function DiscriminatorHolder(discriminatorToSkip) {
    this.c19_1 = discriminatorToSkip;
  }
  DiscriminatorHolder.$metadata$ = classMeta('DiscriminatorHolder');
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.c19_1 === unknownKey) {
      _this__u8e3s4.c19_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.lq(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.n13_1.r17() === get_TC_COMMA()) {
      $this.n13_1.s16('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.p13_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.p13_1 === -1)) {
        hasComma = $this.n13_1.e19();
      }
    } else {
      $this.n13_1.d19(get_COLON());
    }
    var tmp;
    if ($this.n13_1.s17()) {
      if (decodingKey) {
        if ($this.p13_1 === -1) {
          var tmp0_require = $this.n13_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.t13_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'Unexpected trailing comma';
            }
            var tmp_0 = tmp$ret$0;
            tmp0_require.s16(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          var tmp3_require = $this.n13_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.t13_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            {
              tmp$ret$1 = 'Expected comma after the key-value pair';
            }
            var tmp_1 = tmp$ret$1;
            tmp3_require.s16(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.p13_1 = tmp0_this.p13_1 + 1 | 0;
      tmp = tmp0_this.p13_1;
    } else {
      if (hasComma) {
        $this.n13_1.s16("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_tryCoerceValue = $this.l13_1;
      var tmp1_tryCoerceValue = descriptor.ko(index);
      var tmp;
      if (!tmp1_tryCoerceValue.ao()) {
        var tmp$ret$0;
        {
          tmp$ret$0 = !$this.n13_1.f19();
        }
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.io(), ENUM_getInstance())) {
        var tmp$ret$2;
        {
          tmp$ret$2 = $this.n13_1.g19($this.r13_1.a14_1);
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
            $this.n13_1.t17();
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
    var hasComma = $this.n13_1.e19();
    while ($this.n13_1.s17()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.n13_1.d19(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.l13_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.r13_1.f14_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.n13_1.e19();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.s13_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.ov(index);
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
      $this.n13_1.s16('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.s13_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pv();
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
    if ($this.r13_1.z13_1 ? true : trySkip($this.q13_1, $this, key)) {
      $this.n13_1.i19($this.r13_1.a14_1);
    } else {
      $this.n13_1.h19(key);
    }
    return $this.n13_1.e19();
  }
  function decodeListIndex($this) {
    var hasComma = $this.n13_1.e19();
    var tmp;
    if ($this.n13_1.s17()) {
      if (!($this.p13_1 === -1) ? !hasComma : false) {
        $this.n13_1.s16('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.p13_1 = tmp0_this.p13_1 + 1 | 0;
      tmp = tmp0_this.p13_1;
    } else {
      if (hasComma) {
        $this.n13_1.s16('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.r13_1.a14_1) {
      tmp = $this.n13_1.k19();
    } else {
      tmp = $this.n13_1.j19();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.l13_1 = json;
    this.m13_1 = mode;
    this.n13_1 = lexer;
    this.o13_1 = this.l13_1.wn();
    this.p13_1 = -1;
    this.q13_1 = discriminatorHolder;
    this.r13_1 = this.l13_1.f13_1;
    this.s13_1 = this.r13_1.d14_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.m14 = function () {
    return this.l13_1;
  };
  StreamingJsonDecoder.prototype.l19 = function () {
    return this.n13_1;
  };
  StreamingJsonDecoder.prototype.wn = function () {
    return this.o13_1;
  };
  StreamingJsonDecoder.prototype.n14 = function () {
    return (new JsonTreeReader(this.l13_1.f13_1, this.n13_1)).v17();
  };
  StreamingJsonDecoder.prototype.wp = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.l13_1.f13_1.g14_1;
      }
      if (tmp) {
        return deserializer.en(this);
      }
      var discriminator = classDiscriminator(deserializer.cn(), this.l13_1);
      var type = this.n13_1.m19(discriminator, this.r13_1.a14_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.sn(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.q13_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.en(this);
      var result = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException($p.xn_1, plus($p.message, ' at path: ') + this.n13_1.u13_1.e17(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.xp = function (descriptor) {
    var newMode = switchMode(this.l13_1, descriptor);
    this.n13_1.u13_1.z16(descriptor);
    this.n13_1.d19(newMode.p19_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.d4();
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.l13_1, newMode, this.n13_1, descriptor, this.q13_1);
        break;
      default:
        var tmp_0;
        if (this.m13_1.equals(newMode) ? this.l13_1.f13_1.d14_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.l13_1, newMode, this.n13_1, descriptor, this.q13_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.yp = function (descriptor) {
    if (this.l13_1.f13_1.z13_1 ? descriptor.go() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.n13_1.d19(this.m13_1.q19_1);
    this.n13_1.u13_1.d17();
  };
  StreamingJsonDecoder.prototype.jp = function () {
    var tmp;
    var tmp0_safe_receiver = this.s13_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r16_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.n13_1.f19();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.kp = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.iq = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.m13_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.n13_1.u13_1.c17();
    }
    var value = AbstractDecoder.prototype.iq.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.n13_1.u13_1.b17(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.lq = function (descriptor) {
    var tmp0_subject = this.m13_1;
    var tmp0 = tmp0_subject.d4();
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
    if (!this.m13_1.equals(WriteMode_MAP_getInstance())) {
      this.n13_1.u13_1.a17(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.lp = function () {
    var tmp;
    if (this.r13_1.a14_1) {
      tmp = this.n13_1.s19();
    } else {
      tmp = this.n13_1.r19();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.mp = function () {
    var value = this.n13_1.t19();
    if (!value.equals(toLong_0(value.wg()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.n13_1.s16(tmp, 0, null, 6, null);
    }
    return value.wg();
  };
  StreamingJsonDecoder.prototype.np = function () {
    var value = this.n13_1.t19();
    if (!value.equals(toLong_0(value.xg()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.n13_1.s16(tmp, 0, null, 6, null);
    }
    return value.xg();
  };
  StreamingJsonDecoder.prototype.op = function () {
    var value = this.n13_1.t19();
    if (!value.equals(toLong_0(value.i5()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.n13_1.s16(tmp, 0, null, 6, null);
    }
    return value.i5();
  };
  StreamingJsonDecoder.prototype.pp = function () {
    return this.n13_1.t19();
  };
  StreamingJsonDecoder.prototype.qp = function () {
    var tmp$ret$4;
    $l$block: {
      var tmp0_parseString = this.n13_1;
      var input = tmp0_parseString.u17();
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
          tmp0_parseString.s16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.l13_1.f13_1.i14_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.n13_1, result);
  };
  StreamingJsonDecoder.prototype.rp = function () {
    var tmp$ret$1;
    $l$block: {
      var tmp0_parseString = this.n13_1;
      var input = tmp0_parseString.u17();
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
          tmp0_parseString.s16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.l13_1.f13_1.i14_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.n13_1, result);
  };
  StreamingJsonDecoder.prototype.sp = function () {
    var string = this.n13_1.u17();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.n13_1.s16(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.tp = function () {
    var tmp;
    if (this.r13_1.a14_1) {
      tmp = this.n13_1.k19();
    } else {
      tmp = this.n13_1.t17();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.up = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.n13_1, this.l13_1) : AbstractDecoder.prototype.up.call(this, descriptor);
  };
  StreamingJsonDecoder.$metadata$ = classMeta('StreamingJsonDecoder', [JsonDecoder], undefined, undefined, undefined, AbstractDecoder.prototype);
  function parseString(_this__u8e3s4, expectedType, block) {
    var input = _this__u8e3s4.u17();
    try {
      return block(input);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var tmp = "Failed to parse type '" + expectedType + "' for input '" + input + "'";
        _this__u8e3s4.s16(tmp, 0, null, 6, null);
      } else {
        throw $p;
      }
    }
  }
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.u19_1 = lexer;
    this.v19_1 = json.wn();
  }
  JsonDecoderForUnsignedTypes.prototype.wn = function () {
    return this.v19_1;
  };
  JsonDecoderForUnsignedTypes.prototype.lq = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.op = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.u19_1;
      var input = tmp0_parseString.u17();
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
          tmp0_parseString.s16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.pp = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.u19_1;
      var input = tmp0_parseString.u17();
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
          tmp0_parseString.s16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.mp = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.u19_1;
      var input = tmp0_parseString.u17();
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
          tmp0_parseString.s16(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.np = function () {
    var tmp$ret$2;
    $l$block: {
      var tmp0_parseString = this.u19_1;
      var input = tmp0_parseString.u17();
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
          tmp0_parseString.s16(tmp, 0, null, 6, null);
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
    $this.f17_1.t15();
    $this.yq(ensureNotNull($this.m17_1));
    $this.f17_1.v15(get_COLON());
    $this.f17_1.u15();
    $this.yq(descriptor.eo());
  }
  function composerForUnsignedNumbers($this) {
    var tmp;
    var tmp_0 = $this.f17_1;
    if (tmp_0 instanceof ComposerForUnsignedNumbers) {
      tmp = $this.f17_1;
    } else {
      tmp = new ComposerForUnsignedNumbers($this.f17_1.o15_1, $this.l17_1);
    }
    return tmp;
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.f17_1 = composer;
    this.g17_1 = json;
    this.h17_1 = mode;
    this.i17_1 = modeReuseCache;
    this.j17_1 = this.g17_1.wn();
    this.k17_1 = this.g17_1.f13_1;
    this.l17_1 = false;
    this.m17_1 = null;
    var i = this.h17_1.d4();
    if (!(this.i17_1 == null)) {
      if (!(this.i17_1[i] === null) ? true : !(this.i17_1[i] === this))
        this.i17_1[i] = this;
    }
  }
  StreamingJsonEncoder.prototype.m14 = function () {
    return this.g17_1;
  };
  StreamingJsonEncoder.prototype.wn = function () {
    return this.j17_1;
  };
  StreamingJsonEncoder.prototype.kr = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.m14().f13_1.g14_1;
      }
      if (tmp) {
        serializer.dn(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.cn(), this.m14());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.cn().io());
      {
        this.m17_1 = baseClassDiscriminator;
      }
      actualSerializer.dn(this, value);
    }
  };
  StreamingJsonEncoder.prototype.xp = function (descriptor) {
    var newMode = switchMode(this.g17_1, descriptor);
    if (!equals(new Char(newMode.p19_1), new Char(get_INVALID()))) {
      this.f17_1.v15(newMode.p19_1);
      this.f17_1.r15();
    }
    if (!(this.m17_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.m17_1 = null;
    }
    if (this.h17_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.i17_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.d4()];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.f17_1, this.g17_1, newMode, this.i17_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.yp = function (descriptor) {
    if (!equals(new Char(this.h17_1.q19_1), new Char(get_INVALID()))) {
      this.f17_1.s15();
      this.f17_1.t15();
      this.f17_1.v15(this.h17_1.q19_1);
    }
  };
  StreamingJsonEncoder.prototype.nq = function (descriptor, index) {
    var tmp0_subject = this.h17_1;
    var tmp0 = tmp0_subject.d4();
    switch (tmp0) {
      case 1:
        if (!this.f17_1.p15_1)
          this.f17_1.v15(get_COMMA());
        this.f17_1.t15();
        break;
      case 2:
        if (!this.f17_1.p15_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.f17_1.v15(get_COMMA());
            this.f17_1.t15();
            tmp_0 = true;
          } else {
            this.f17_1.v15(get_COLON());
            this.f17_1.u15();
            tmp_0 = false;
          }
          tmp.l17_1 = tmp_0;
        } else {
          this.l17_1 = true;
          this.f17_1.t15();
        }

        break;
      case 3:
        if (index === 0)
          this.l17_1 = true;
        if (index === 1) {
          this.f17_1.v15(get_COMMA());
          this.f17_1.u15();
          this.l17_1 = false;
        }

        break;
      default:
        if (!this.f17_1.p15_1)
          this.f17_1.v15(get_COMMA());
        this.f17_1.t15();
        this.yq(descriptor.mo(index));
        this.f17_1.v15(get_COLON());
        this.f17_1.u15();
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.zq = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new StreamingJsonEncoder(composerForUnsignedNumbers(this), this.g17_1, this.h17_1, null) : AbstractEncoder.prototype.zq.call(this, descriptor);
  };
  StreamingJsonEncoder.prototype.pq = function () {
    this.f17_1.x15(get_NULL());
  };
  StreamingJsonEncoder.prototype.qq = function (value) {
    if (this.l17_1)
      this.yq(value.toString());
    else
      this.f17_1.g16(value);
  };
  StreamingJsonEncoder.prototype.rq = function (value) {
    if (this.l17_1)
      this.yq(value.toString());
    else
      this.f17_1.b16(value);
  };
  StreamingJsonEncoder.prototype.sq = function (value) {
    if (this.l17_1)
      this.yq(value.toString());
    else
      this.f17_1.d16(value);
  };
  StreamingJsonEncoder.prototype.tq = function (value) {
    if (this.l17_1)
      this.yq(value.toString());
    else
      this.f17_1.e16(value);
  };
  StreamingJsonEncoder.prototype.uq = function (value) {
    if (this.l17_1)
      this.yq(value.toString());
    else
      this.f17_1.f16(value);
  };
  StreamingJsonEncoder.prototype.vq = function (value) {
    if (this.l17_1)
      this.yq(value.toString());
    else
      this.f17_1.z15(value);
    if (!this.k17_1.i14_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.f17_1.o15_1));
    }
  };
  StreamingJsonEncoder.prototype.wq = function (value) {
    if (this.l17_1)
      this.yq(value.toString());
    else
      this.f17_1.a16(value);
    if (!this.k17_1.i14_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.f17_1.o15_1));
    }
  };
  StreamingJsonEncoder.prototype.xq = function (value) {
    this.yq(toString_0(value));
  };
  StreamingJsonEncoder.prototype.yq = function (value) {
    return this.f17_1.h16(value);
  };
  StreamingJsonEncoder.$metadata$ = classMeta('StreamingJsonEncoder', [JsonEncoder], undefined, undefined, undefined, AbstractEncoder.prototype);
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.ho() ? get_unsignedNumberDescriptors().i1(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).cn(), serializer_0(Companion_getInstance()).cn(), serializer_2(Companion_getInstance_2()).cn(), serializer_3(Companion_getInstance_3()).cn()]);
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
    _this__u8e3s4.e4(get_STRING());
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
          _this__u8e3s4.ve(value, lastPos, i);
          _this__u8e3s4.r5(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.ve(value, lastPos, value.length);
    } else {
      _this__u8e3s4.r5(value);
    }
    _this__u8e3s4.e4(get_STRING());
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
    var tmp0_safe_receiver = $this.z10();
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
          tmp$ret$0 = $this.b1a(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.s1() : tmp1_elvis_lhs;
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
    this.y19_1 = json;
    this.z19_1 = value;
    this.a1a_1 = this.m14().f13_1;
  }
  AbstractJsonTreeDecoder.prototype.m14 = function () {
    return this.y19_1;
  };
  AbstractJsonTreeDecoder.prototype.s1 = function () {
    return this.z19_1;
  };
  AbstractJsonTreeDecoder.prototype.wn = function () {
    return this.m14().wn();
  };
  AbstractJsonTreeDecoder.prototype.i13 = function () {
    return this.a1a_1;
  };
  AbstractJsonTreeDecoder.prototype.n14 = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.wp = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.a11 = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.xp = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.io();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.m14();
      var tmp$ret$0;
      {
        if (!(currentObject_0 instanceof JsonArray)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.eo() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$0 = currentObject_0;
      }
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        {
          var tmp0_selectMapMode = this.m14();
          var keyDescriptor = carrierDescriptor(descriptor.ko(0), tmp0_selectMapMode.wn());
          var keyKind = keyDescriptor.io();
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
              var tmp_4 = this.m14();
              var tmp$ret$1;
              {
                if (!(currentObject_0 instanceof JsonObject)) {
                  throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.eo() + ', but had ' + getKClassFromExpression(currentObject_0));
                }
                tmp$ret$1 = currentObject_0;
              }
              tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
            }
            tmp_2 = tmp$ret$2;
          } else {
            if (tmp0_selectMapMode.f13_1.b14_1) {
              var tmp$ret$4;
              {
                var tmp_5 = this.m14();
                var tmp$ret$3;
                {
                  if (!(currentObject_0 instanceof JsonArray)) {
                    throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.eo() + ', but had ' + getKClassFromExpression(currentObject_0));
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
        var tmp_6 = this.m14();
        var tmp$ret$6;
        {
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.eo() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$6 = currentObject_0;
        }
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.yp = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.jp = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.c1a = function (tag) {
    var currentElement = this.b1a(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.d1a = function (tag) {
    return !(this.b1a(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.c11 = function (tag) {
    return this.d1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.e1a = function (tag) {
    var value = this.c1a(tag);
    if (!this.m14().f13_1.a14_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.s14_1)
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
  AbstractJsonTreeDecoder.prototype.d11 = function (tag) {
    return this.e1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.f1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        {
          var result = get_int(tmp0_primitive);
          var tmp;
          var containsLower = ByteCompanionObject_getInstance().t8_1;
          if (result <= ByteCompanionObject_getInstance().u8_1 ? containsLower <= result : false) {
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
  AbstractJsonTreeDecoder.prototype.e11 = function (tag) {
    return this.f1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.g1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        {
          var result = get_int(tmp0_primitive);
          var tmp;
          var containsLower = ShortCompanionObject_getInstance().b9_1;
          if (result <= ShortCompanionObject_getInstance().c9_1 ? containsLower <= result : false) {
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
  AbstractJsonTreeDecoder.prototype.f11 = function (tag) {
    return this.g1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.h1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.c1a(tag);
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
  AbstractJsonTreeDecoder.prototype.g11 = function (tag) {
    return this.h1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.i1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.c1a(tag);
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
  AbstractJsonTreeDecoder.prototype.h11 = function (tag) {
    return this.i1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.j1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.c1a(tag);
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
    var specialFp = this.m14().f13_1.i14_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.i11 = function (tag) {
    return this.j1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.k1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.c1a(tag);
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
    var specialFp = this.m14().f13_1.i14_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.j11 = function (tag) {
    return this.k1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.l1a = function (tag) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_primitive = this.c1a(tag);
      try {
        var tmp$ret$0;
        {
          tmp$ret$0 = single(tmp0_primitive.r14());
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
  AbstractJsonTreeDecoder.prototype.k11 = function (tag) {
    return this.l1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.m1a = function (tag) {
    var value = this.c1a(tag);
    if (!this.m14().f13_1.a14_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.s14_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.r14();
  };
  AbstractJsonTreeDecoder.prototype.l11 = function (tag) {
    return this.m1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.n1a = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.c1a(tag).r14()), this.m14()) : NamedValueDecoder.prototype.m11.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.m11 = function (tag, inlineDescriptor) {
    return this.n1a((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
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
      var tmp0_tryCoerceValue = $this.m14();
      var tmp1_tryCoerceValue = descriptor.ko(index);
      var tmp;
      if (!tmp1_tryCoerceValue.ao()) {
        var tmp$ret$0;
        {
          var tmp_0 = $this.b1a(tag);
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
      if (equals(tmp1_tryCoerceValue.io(), ENUM_getInstance())) {
        var tmp$ret$2;
        {
          var tmp_1 = $this.b1a(tag);
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
    $this.x1a_1 = (!$this.m14().f13_1.d14_1 ? !descriptor.no(index) : false) ? descriptor.ko(index).ao() : false;
    return $this.x1a_1;
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
    this.t1a_1 = value;
    this.u1a_1 = polyDiscriminator;
    this.v1a_1 = polyDescriptor;
    this.w1a_1 = 0;
    this.x1a_1 = false;
  }
  JsonTreeDecoder.prototype.s1 = function () {
    return this.t1a_1;
  };
  JsonTreeDecoder.prototype.lq = function (descriptor) {
    while (this.w1a_1 < descriptor.go()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.w1a_1;
      tmp0_this.w1a_1 = tmp1 + 1 | 0;
      var name = this.u10(descriptor, tmp1);
      var index = this.w1a_1 - 1 | 0;
      this.x1a_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      {
        var tmp0_contains = this.s1();
        var tmp$ret$0;
        {
          tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).z1(name);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.i13().f14_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
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
  JsonTreeDecoder.prototype.jp = function () {
    return !this.x1a_1 ? AbstractJsonTreeDecoder.prototype.jp.call(this) : false;
  };
  JsonTreeDecoder.prototype.v10 = function (desc, index) {
    var mainName = desc.mo(index);
    if (!this.i13().j14_1)
      return mainName;
    if (this.s1().d2().i1(mainName))
      return mainName;
    var tmp = get_schemaCache(this.m14());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.u16(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    {
      var tmp0_find = this.s1().d2();
      var tmp$ret$1;
      $l$block: {
        var tmp0_iterator = tmp0_find.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = alternativeNamesMap.c2(element) === index;
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
  JsonTreeDecoder.prototype.b1a = function (tag) {
    return getValue(this.s1(), tag);
  };
  JsonTreeDecoder.prototype.xp = function (descriptor) {
    if (descriptor === this.v1a_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.xp.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.yp = function (descriptor) {
    var tmp;
    if (this.i13().z13_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.io();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.i13().j14_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      {
        var tmp0_safe_receiver = get_schemaCache(this.m14()).b19(descriptor, get_JsonAlternativeNamesKey());
        var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d2();
        var tmp0_elvis_lhs = tmp0_orEmpty;
        tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      }
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.s1().d2().d();
    while (tmp1_iterator.e()) {
      var key = tmp1_iterator.f();
      if (!names.i1(key) ? !(key === this.u1a_1) : false) {
        throw UnknownKeyException(key, this.s1().toString());
      }
    }
  };
  JsonTreeDecoder.$metadata$ = classMeta('JsonTreeDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.d1b_1 = value;
    this.e1b_1 = this.d1b_1.g();
    this.f1b_1 = -1;
  }
  JsonTreeListDecoder.prototype.s1 = function () {
    return this.d1b_1;
  };
  JsonTreeListDecoder.prototype.v10 = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.b1a = function (tag) {
    return this.d1b_1.h(toInt(tag));
  };
  JsonTreeListDecoder.prototype.lq = function (descriptor) {
    while (this.f1b_1 < (this.e1b_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.f1b_1;
      tmp0_this.f1b_1 = tmp1 + 1 | 0;
      return this.f1b_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = classMeta('JsonTreeListDecoder', undefined, undefined, undefined, undefined, AbstractJsonTreeDecoder.prototype);
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.q1b_1 = value;
    this.r1b_1 = toList(this.q1b_1.d2());
    this.s1b_1 = imul(this.r1b_1.g(), 2);
    this.t1b_1 = -1;
  }
  JsonTreeMapDecoder.prototype.s1 = function () {
    return this.q1b_1;
  };
  JsonTreeMapDecoder.prototype.v10 = function (desc, index) {
    var i = index / 2 | 0;
    return this.r1b_1.h(i);
  };
  JsonTreeMapDecoder.prototype.lq = function (descriptor) {
    while (this.t1b_1 < (this.s1b_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.t1b_1;
      tmp0_this.t1b_1 = tmp1 + 1 | 0;
      return this.t1b_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.b1a = function (tag) {
    return (this.t1b_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.q1b_1, tag);
  };
  JsonTreeMapDecoder.prototype.yp = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = classMeta('JsonTreeMapDecoder', undefined, undefined, undefined, undefined, JsonTreeDecoder.prototype);
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.cn())).wp(deserializer);
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
    this.p19_1 = begin;
    this.q19_1 = end;
  }
  WriteMode.$metadata$ = classMeta('WriteMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.io();
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
            var keyDescriptor = carrierDescriptor(desc.ko(0), _this__u8e3s4.wn());
            var keyKind = keyDescriptor.io();
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
              if (_this__u8e3s4.f13_1.b14_1) {
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
    var keyDescriptor = carrierDescriptor(mapDescriptor.ko(0), _this__u8e3s4.wn());
    var keyKind = keyDescriptor.io();
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
      if (_this__u8e3s4.f13_1.b14_1) {
        tmp = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.io(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.ho()) {
      tmp = carrierDescriptor(_this__u8e3s4.ko(0), module_0);
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
    $this.u1b(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.u1b(lastPosition, currentPosition);
    var result = $this.w13_1.toString();
    $this.w13_1.we(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    {
      var tmp0_also = ensureNotNull($this.v13_1);
      {
      }
      {
        $this.v13_1 = null;
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.v1b(), $this.t13_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.w1b(currentPosition);
    if (currentPosition === -1) {
      $this.s16('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.v1b();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.v1b(), currentPosition);
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    }
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.s16(tmp_0, 0, null, 6, null);
    }
    $this.w13_1.e4(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.t13_1 = startPos;
      $this.x1b();
      if (($this.t13_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.s16('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.t13_1);
    }
    $this.w13_1.e4(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.s16(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.w1b(start);
    if (current >= charSequenceLength($this.v1b()) ? true : current === -1) {
      $this.s16('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    {
      var tmp = $this.v1b();
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
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.u17() + "'";
        $this.s16(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.v1b()) - current | 0) < literalSuffix.length) {
      $this.s16('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.v1b(), current + i | 0);
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
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.u17() + "'";
          $this.s16(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.t13_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.t13_1 = 0;
    this.u13_1 = new JsonPath();
    this.v13_1 = null;
    this.w13_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.y1b = function (_set____db54di) {
    this.t13_1 = _set____db54di;
  };
  AbstractJsonLexer.prototype.z1b = function () {
    return this.t13_1;
  };
  AbstractJsonLexer.prototype.x1b = function () {
  };
  AbstractJsonLexer.prototype.a1c = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.x13 = function () {
    var nextToken = this.w17();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.v1b(), this.t13_1 - 1 | 0)) + ' instead';
      this.s16(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.q17 = function (expected) {
    var token = this.w17();
    if (!(token === expected)) {
      this.b1c(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.d19 = function (expected) {
    this.x1b();
    var source = this.v1b();
    var cpos = this.t13_1;
    $l$loop_0: while (true) {
      cpos = this.w1b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.t13_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.c1c(expected);
    }
    this.t13_1 = cpos;
    this.c1c(expected);
  };
  AbstractJsonLexer.prototype.c1c = function (expected) {
    var tmp0_this = this;
    tmp0_this.t13_1 = tmp0_this.t13_1 - 1 | 0;
    if ((this.t13_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.u17() === 'null' : false) {
      this.d1c("Expected string literal but 'null' literal was found", this.t13_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.b1c(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.b1c = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "colon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.t13_1 === charSequenceLength(this.v1b()) ? true : this.t13_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.v1b(), this.t13_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.t13_1 - 1 | 0;
    this.s16(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.r17 = function () {
    var source = this.v1b();
    var cpos = this.t13_1;
    $l$loop_0: while (true) {
      cpos = this.w1b(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.t13_1 = cpos;
      return charToTokenClass(ch);
    }
    this.t13_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.f19 = function () {
    var current = this.e1c();
    current = this.w1b(current);
    var len = charSequenceLength(this.v1b()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.v1b(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.v1b(), current + 4 | 0)) === 0 : false)
      return true;
    this.t13_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.e1c = function () {
    var current = this.t13_1;
    $l$loop_0: while (true) {
      current = this.w1b(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.v1b(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.t13_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.g19 = function (isLenient) {
    var token = this.r17();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.u17();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.t17();
    }
    var string = tmp;
    this.v13_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.f1c = function (startPos, endPos) {
    var tmp$ret$0;
    {
      var tmp0_substring = this.v1b();
      tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    }
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.t17 = function () {
    if (!(this.v13_1 == null)) {
      return takePeeked(this);
    }
    return this.j19();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.w1b(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.s16('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.u1b(lastPosition, currentPosition);
          currentPosition = this.w1b(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.s16('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.f1c(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.t13_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.k19 = function () {
    var result = this.u17();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.s16("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.u17 = function () {
    if (!(this.v13_1 == null)) {
      return takePeeked(this);
    }
    var current = this.e1c();
    if (current >= charSequenceLength(this.v1b()) ? true : current === -1) {
      var tmp = current;
      this.s16('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.v1b(), current));
    if (token === 1) {
      return this.t17();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.v1b(), current));
      this.s16(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.v1b(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.v1b())) {
        usedAppend = true;
        this.u1b(this.t13_1, current);
        var eof = this.w1b(current);
        if (eof === -1) {
          this.t13_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.f1c(this.t13_1, current);
    } else {
      tmp_1 = decodedString(this, this.t13_1, current);
    }
    var result = tmp_1;
    this.t13_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.u1b = function (fromIndex, toIndex) {
    this.w13_1.ve(this.v1b(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.g1c = function (condition, position, message) {
    if (!condition) {
      var tmp = message();
      this.s16(tmp, position, null, 4, null);
    }
  };
  AbstractJsonLexer.prototype.i19 = function (allowLenientStrings) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var tokenStack = tmp$ret$0;
    var lastToken = this.r17();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.u17();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.r17();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.u17();
        } else {
          this.j19();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.b(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.t13_1, 'found ] instead of } at path: ' + this.u13_1, this.v1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.t13_1, 'found } instead of ] at path: ' + this.u13_1, this.v1b());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.s16('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.w17();
      if (tokenStack.g() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.v1b() + "', currentPosition=" + this.t13_1 + ')';
  };
  AbstractJsonLexer.prototype.h19 = function (key) {
    var processed = this.f1c(0, this.t13_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.d1c("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.d1c = function (message, position, hint) {
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
    throw JsonDecodingException_0(position, message + ' at path: ' + this.u13_1.e17() + hintMessage, this.v1b());
  };
  AbstractJsonLexer.prototype.s16 = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.t13_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.d1c(message, position, hint);
  };
  AbstractJsonLexer.prototype.t19 = function () {
    var current = this.e1c();
    current = this.w1b(current);
    if (current >= charSequenceLength(this.v1b()) ? true : current === -1) {
      this.s16('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.v1b(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.v1b())) {
        this.s16('EOF', 0, null, 6, null);
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
      var ch = charSequenceGet(this.v1b(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.s16("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.v1b()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.s16(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_times = accumulator;
          tmp$ret$0 = tmp0_times.h4(new Long(10, 0));
        }
        var tmp1_minus = tmp$ret$0;
        tmp$ret$1 = tmp1_minus.j4(toLong_0(digit));
      }
      accumulator = tmp$ret$1;
      if (accumulator.c1(new Long(0, 0)) > 0) {
        this.s16('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.s16('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.s16('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.v1b(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.s16('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.t13_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.f4();
      } else {
        this.s16('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.r19 = function () {
    return consumeBoolean(this, this.e1c());
  };
  AbstractJsonLexer.prototype.s19 = function () {
    var current = this.e1c();
    if (current === charSequenceLength(this.v1b())) {
      this.s16('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.v1b(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.t13_1 === charSequenceLength(this.v1b())) {
        this.s16('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.v1b(), this.t13_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.s16('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.t13_1 = tmp0_this.t13_1 + 1 | 0;
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
      var tmp_0 = CharMappings_getInstance().i1c_1;
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
    return c < 117 ? CharMappings_getInstance().h1c_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.h1c_1[tmp$ret$0] = numberToChar(c);
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
    $this.i1c_1[c] = cl;
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
    this.h1c_1 = charArray(117);
    this.i1c_1 = new Int8Array(126);
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
    this.n1c_1 = source;
  }
  StringJsonLexer.prototype.v1b = function () {
    return this.n1c_1;
  };
  StringJsonLexer.prototype.w1b = function (position) {
    return position < this.n1c_1.length ? position : -1;
  };
  StringJsonLexer.prototype.w17 = function () {
    var source = this.n1c_1;
    $l$loop: while (!(this.z1b() === -1) ? this.z1b() < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.z1b();
      tmp0_this.y1b(tmp1 + 1 | 0);
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
  StringJsonLexer.prototype.e19 = function () {
    var current = this.e1c();
    if (current === this.n1c_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.n1c_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.y1b(tmp0_this.z1b() + 1 | 0);
      tmp0_this.z1b();
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.s17 = function () {
    var current = this.z1b();
    if (current === -1)
      return false;
    $l$loop: while (current < this.n1c_1.length) {
      var c = charSequenceGet(this.n1c_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.y1b(current);
      return this.a1c(c);
    }
    this.y1b(current);
    return false;
  };
  StringJsonLexer.prototype.e1c = function () {
    var current = this.z1b();
    if (current === -1)
      return current;
    $l$loop: while (current < this.n1c_1.length) {
      var c = charSequenceGet(this.n1c_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.y1b(current);
    return current;
  };
  StringJsonLexer.prototype.d19 = function (expected) {
    if (this.z1b() === -1)
      this.c1c(expected);
    var source = this.n1c_1;
    $l$loop: while (this.z1b() < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.z1b();
      tmp0_this.y1b(tmp1 + 1 | 0);
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.c1c(expected);
    }
    this.c1c(expected);
  };
  StringJsonLexer.prototype.j19 = function () {
    this.d19(get_STRING());
    var current = this.z1b();
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.n1c_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.b1c(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.n1c_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.n1c_1, this.z1b(), i);
        }
      }
       while (inductionVariable < closingQuote);
    this.y1b(closingQuote + 1 | 0);
    var tmp$ret$1;
    {
      var tmp0_substring = this.n1c_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_substring;
      }
      tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    }
    return tmp$ret$1;
  };
  StringJsonLexer.prototype.m19 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.z1b();
    try {
      if (!(this.w17() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = isLenient ? this.j19() : this.k19();
      if (firstKey === keyToMatch) {
        if (!(this.w17() === get_TC_COLON()))
          return null;
        var result = isLenient ? this.t17() : this.k19();
        return result;
      }
      return null;
    }finally {
      this.y1b(positionSnapshot);
    }
  };
  StringJsonLexer.$metadata$ = classMeta('StringJsonLexer', undefined, undefined, undefined, undefined, AbstractJsonLexer.prototype);
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.h13_1;
  }
  function JsonToStringWriter() {
    this.j13_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonToStringWriter.prototype.c16 = function (value) {
    this.j13_1.q5(value);
  };
  JsonToStringWriter.prototype.w15 = function (char) {
    this.j13_1.e4(char);
  };
  JsonToStringWriter.prototype.y15 = function (text) {
    this.j13_1.r5(text);
  };
  JsonToStringWriter.prototype.i16 = function (text) {
    printQuoted(this.j13_1, text);
  };
  JsonToStringWriter.prototype.k13 = function () {
    this.j13_1.xe();
  };
  JsonToStringWriter.prototype.toString = function () {
    return this.j13_1.toString();
  };
  JsonToStringWriter.$metadata$ = classMeta('JsonToStringWriter', [JsonWriter]);
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.ao = get_isNullable;
  defer$1.prototype.ho = get_isInline;
  defer$1.prototype.fo = get_annotations;
  StreamingJsonDecoder.prototype.jq = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.kq = decodeSequentially;
  StreamingJsonDecoder.prototype.mq = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.wp = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.jq = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.kq = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.mq = decodeCollectionSize;
  StreamingJsonEncoder.prototype.lr = encodeNotNullMark;
  StreamingJsonEncoder.prototype.mr = beginCollection;
  AbstractJsonTreeDecoder.prototype.jq = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.kq = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.mq = decodeCollectionSize;
  JsonTreeDecoder.prototype.jq = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.kq = decodeSequentially;
  JsonTreeDecoder.prototype.mq = decodeCollectionSize;
  JsonTreeListDecoder.prototype.jq = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.kq = decodeSequentially;
  JsonTreeListDecoder.prototype.mq = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.jq = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.kq = decodeSequentially;
  JsonTreeMapDecoder.prototype.mq = decodeCollectionSize;
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