(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.s5;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.l2;
  var Unit_getInstance = kotlin_kotlin.$_$.v2;
  var emptyList = kotlin_kotlin.$_$.z3;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.l8;
  var classMeta = kotlin_kotlin.$_$.m5;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.r6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p5;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.g1;
  var captureStack = kotlin_kotlin.$_$.g5;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.i1;
  var IllegalArgumentException = kotlin_kotlin.$_$.u7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.m3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var toString = kotlin_kotlin.$_$.l6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.x7;
  var isInterface = kotlin_kotlin.$_$.a6;
  var KClass = kotlin_kotlin.$_$.q6;
  var copyToArray = kotlin_kotlin.$_$.y3;
  var Triple = kotlin_kotlin.$_$.y7;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.w7;
  var Entry = kotlin_kotlin.$_$.f3;
  var LinkedHashMap = kotlin_kotlin.$_$.c3;
  var MutableMap = kotlin_kotlin.$_$.i3;
  var Map = kotlin_kotlin.$_$.g3;
  var HashMap = kotlin_kotlin.$_$.y2;
  var LinkedHashSet = kotlin_kotlin.$_$.d3;
  var MutableSet = kotlin_kotlin.$_$.j3;
  var Set = kotlin_kotlin.$_$.k3;
  var HashSet = kotlin_kotlin.$_$.z2;
  var ArrayList = kotlin_kotlin.$_$.w2;
  var MutableList = kotlin_kotlin.$_$.h3;
  var List = kotlin_kotlin.$_$.e3;
  var Collection = kotlin_kotlin.$_$.x2;
  var equals = kotlin_kotlin.$_$.n5;
  var getStringHashCode = kotlin_kotlin.$_$.q5;
  var Iterator = kotlin_kotlin.$_$.b3;
  var Iterable = kotlin_kotlin.$_$.a3;
  var isBlank = kotlin_kotlin.$_$.v6;
  var toList = kotlin_kotlin.$_$.v4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var toHashSet = kotlin_kotlin.$_$.t4;
  var toBooleanArray = kotlin_kotlin.$_$.s4;
  var withIndex = kotlin_kotlin.$_$.z4;
  var to = kotlin_kotlin.$_$.o8;
  var toMap = kotlin_kotlin.$_$.x4;
  var lazy_0 = kotlin_kotlin.$_$.m8;
  var contentEquals = kotlin_kotlin.$_$.n3;
  var until = kotlin_kotlin.$_$.p6;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var ensureNotNull = kotlin_kotlin.$_$.h8;
  var Long = kotlin_kotlin.$_$.v7;
  var Char = kotlin_kotlin.$_$.q7;
  var isObject = kotlin_kotlin.$_$.c6;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.l1;
  var Duration = kotlin_kotlin.$_$.o7;
  var Companion_getInstance = kotlin_kotlin.$_$.n2;
  var toIntOrNull = kotlin_kotlin.$_$.b7;
  var hashCode = kotlin_kotlin.$_$.r5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var isArray = kotlin_kotlin.$_$.t5;
  var arrayIterator = kotlin_kotlin.$_$.e5;
  var asList = kotlin_kotlin.$_$.l3;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.q;
  var step = kotlin_kotlin.$_$.o6;
  var getValue = kotlin_kotlin.$_$.c4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.a1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var longArray = kotlin_kotlin.$_$.f6;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p2;
  var get_lastIndex = kotlin_kotlin.$_$.f4;
  var countTrailingZeroBits = kotlin_kotlin.$_$.f8;
  var KTypeParameter = kotlin_kotlin.$_$.s6;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.u;
  var contentHashCode = kotlin_kotlin.$_$.o3;
  var fillArrayVal = kotlin_kotlin.$_$.o5;
  var booleanArray = kotlin_kotlin.$_$.f5;
  var emptyMap = kotlin_kotlin.$_$.a4;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.o2;
  var isCharArray = kotlin_kotlin.$_$.w5;
  var charArray = kotlin_kotlin.$_$.i5;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.h2;
  var isDoubleArray = kotlin_kotlin.$_$.x5;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.i2;
  var isFloatArray = kotlin_kotlin.$_$.y5;
  var isLongArray = kotlin_kotlin.$_$.b6;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.j2;
  var isIntArray = kotlin_kotlin.$_$.z5;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.k2;
  var isShortArray = kotlin_kotlin.$_$.d6;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.g2;
  var isByteArray = kotlin_kotlin.$_$.v5;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.f2;
  var isBooleanArray = kotlin_kotlin.$_$.u5;
  var coerceAtLeast = kotlin_kotlin.$_$.m6;
  var copyOf = kotlin_kotlin.$_$.s3;
  var copyOf_0 = kotlin_kotlin.$_$.u3;
  var copyOf_1 = kotlin_kotlin.$_$.v3;
  var copyOf_2 = kotlin_kotlin.$_$.q3;
  var copyOf_3 = kotlin_kotlin.$_$.x3;
  var copyOf_4 = kotlin_kotlin.$_$.p3;
  var copyOf_5 = kotlin_kotlin.$_$.t3;
  var copyOf_6 = kotlin_kotlin.$_$.r3;
  var Unit = kotlin_kotlin.$_$.d8;
  var trimIndent = kotlin_kotlin.$_$.m7;
  var equals_0 = kotlin_kotlin.$_$.u6;
  var charSequenceLength = kotlin_kotlin.$_$.k5;
  var charSequenceGet = kotlin_kotlin.$_$.j5;
  var toString_0 = kotlin_kotlin.$_$.p1;
  var titlecase = kotlin_kotlin.$_$.y6;
  var isLowerCase = kotlin_kotlin.$_$.w6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.m2;
  var mapOf = kotlin_kotlin.$_$.k4;
  var lastOrNull = kotlin_kotlin.$_$.h4;
  var get_lastIndex_0 = kotlin_kotlin.$_$.g4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.x1;
  var UInt = kotlin_kotlin.$_$.a8;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.a2;
  var ULong = kotlin_kotlin.$_$.b8;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.z1;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u1;
  var UByte = kotlin_kotlin.$_$.z7;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.d2;
  var UShort = kotlin_kotlin.$_$.c8;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.c2;
  var Annotation = kotlin_kotlin.$_$.p7;
  var get_indices = kotlin_kotlin.$_$.e4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var get_indices_0 = kotlin_kotlin.$_$.d4;
  var get_js = kotlin_kotlin.$_$.e6;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  function decodeSerializableValue(deserializer) {
    return deserializer.en(this);
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.iq(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.xp(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.dn(this, value);
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  CollectionSerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  CollectionSerializer.prototype.constructor = CollectionSerializer;
  ReferenceArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  ArrayListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  //endregion
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_0(StringCompanionObject_getInstance()).cn();
      $this$buildSerialDescriptor.nn('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.on_1.sc() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.nn('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.hn_1 = this$0.pn_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.on_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.on_1 = baseClass;
    this.pn_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.qn_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.rn = function () {
    return this.on_1;
  };
  PolymorphicSerializer.prototype.cn = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory();
      tmp$ret$0 = this.qn_1.s1();
    }
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.on_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.tn(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.rn());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.sn(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.rn());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.cn();
    }, null);
  }
  function SealedClassSerializer() {
  }
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function StringFormat() {
  }
  StringFormat.$metadata$ = interfaceMeta('StringFormat', [SerialFormat]);
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = interfaceMeta('SerialFormat');
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.g() === 1 ? "Field '" + missingFields.h(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.xn_1 = missingFields;
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.dd();
    var tmp$ret$4;
    {
      var tmp0_map = type.cd();
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$2;
          {
            var tmp$ret$1;
            $l$block: {
              var tmp0_requireNotNull = item.a4_1;
              {
              }
              if (tmp0_requireNotNull == null) {
                var tmp$ret$0;
                {
                  tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
                }
                var message = tmp$ret$0;
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$1 = tmp0_requireNotNull;
                break $l$block;
              }
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp0_mapTo.b(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.k()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.yn(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$5;
      {
        tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      }
      tmp_1 = tmp$ret$5;
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
          var tmp0_iterator = typeArguments.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            tmp0_mapTo.b(serializer(_this__u8e3s4, item));
          }
          tmp$ret$0 = tmp0_mapTo;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
          var tmp0_iterator_0 = typeArguments.d();
          while (tmp0_iterator_0.e()) {
            var item_0 = tmp0_iterator_0.f();
            var tmp$ret$2;
            {
              var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
              var tmp_0;
              if (tmp0_elvis_lhs == null) {
                return null;
              } else {
                tmp_0 = tmp0_elvis_lhs;
              }
              tmp$ret$2 = tmp_0;
            }
            tmp0_mapTo_0.b(tmp$ret$2);
          }
          tmp$ret$3 = tmp0_mapTo_0;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      tmp = tmp$ret$4;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.h(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.h(0), serializers.h(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp_1 = PairSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp_1 = TripleSerializer(serializers.h(0), serializers.h(1), serializers.h(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$5;
        {
          var tmp_2 = typeArguments.h(0).bd();
          var tmp0_cast = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.h(0));
          tmp$ret$5 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        }
        return tmp$ret$5;
      }
      var tmp$ret$6;
      {
        tmp$ret$6 = copyToArray(serializers);
      }
      var args = tmp$ret$6;
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this__u8e3s4, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function reflectiveOrContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull(kClass);
    return tmp0_elvis_lhs == null ? _this__u8e3s4.zn(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.cn().ao()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.bo_1 = original;
    this.co_1 = kClass;
    this.do_1 = this.bo_1.eo() + '<' + this.co_1.sc() + '>';
  }
  ContextDescriptor.prototype.fo = function () {
    return this.bo_1.fo();
  };
  ContextDescriptor.prototype.go = function () {
    return this.bo_1.go();
  };
  ContextDescriptor.prototype.ho = function () {
    return this.bo_1.ho();
  };
  ContextDescriptor.prototype.ao = function () {
    return this.bo_1.ao();
  };
  ContextDescriptor.prototype.io = function () {
    return this.bo_1.io();
  };
  ContextDescriptor.prototype.jo = function (index) {
    return this.bo_1.jo(index);
  };
  ContextDescriptor.prototype.ko = function (index) {
    return this.bo_1.ko(index);
  };
  ContextDescriptor.prototype.lo = function (name) {
    return this.bo_1.lo(name);
  };
  ContextDescriptor.prototype.mo = function (index) {
    return this.bo_1.mo(index);
  };
  ContextDescriptor.prototype.no = function (index) {
    return this.bo_1.no(index);
  };
  ContextDescriptor.prototype.eo = function () {
    return this.do_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.bo_1, another.bo_1) ? another.co_1.equals(this.co_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.co_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.do_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.co_1 + ', original: ' + this.bo_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
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
          var tmp0_safe_receiver_0 = _this__u8e3s4.yn(tmp0_safe_receiver, null, 2, null);
          tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.cn();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.co_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.oo_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.so_1 = $this_elementDescriptors;
    this.ro_1 = $this_elementDescriptors.go();
  }
  elementDescriptors$1$1.prototype.e = function () {
    return this.ro_1 > 0;
  };
  elementDescriptors$1$1.prototype.f = function () {
    var tmp = this.so_1.go();
    var tmp0_this = this;
    var tmp1 = tmp0_this.ro_1;
    tmp0_this.ro_1 = tmp1 - 1 | 0;
    return this.so_1.ko(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.to_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.d = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = new elementDescriptors$1$1(this.to_1);
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_require = !equals(kind, CLASS_getInstance());
      {
      }
      if (!tmp1_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
        }
        var message_0 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.in_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda();
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.fn_1 = serialName;
    this.gn_1 = false;
    this.hn_1 = emptyList();
    this.in_1 = ArrayList_init_$Create$_0();
    this.jn_1 = HashSet_init_$Create$();
    this.kn_1 = ArrayList_init_$Create$_0();
    this.ln_1 = ArrayList_init_$Create$_0();
    this.mn_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.uo = function (elementName, descriptor, annotations, isOptional) {
    {
      var tmp0_require = this.jn_1.b(elementName);
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_this = this;
    {
      var tmp1_plusAssign = tmp0_this.in_1;
      tmp1_plusAssign.b(elementName);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.kn_1;
      tmp2_plusAssign.b(descriptor);
    }
    var tmp2_this = this;
    {
      var tmp3_plusAssign = tmp2_this.ln_1;
      tmp3_plusAssign.b(annotations);
    }
    var tmp3_this = this;
    {
      var tmp4_plusAssign = tmp3_this.mn_1;
      tmp4_plusAssign.b(isOptional);
    }
  };
  ClassSerialDescriptorBuilder.prototype.nn = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.uo(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory();
      tmp$ret$0 = $this.gp_1.s1();
    }
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.fp_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.mo(it) + ': ' + this$0.ko(it).eo();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.vo_1 = serialName;
    this.wo_1 = kind;
    this.xo_1 = elementsCount;
    this.yo_1 = builder.hn_1;
    this.zo_1 = toHashSet(builder.in_1);
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = builder.in_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    tmp.ap_1 = tmp$ret$0;
    this.bp_1 = compactArray(builder.kn_1);
    var tmp_0 = this;
    var tmp$ret$1;
    {
      var tmp0_toTypedArray_0 = builder.ln_1;
      tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    }
    tmp_0.cp_1 = tmp$ret$1;
    this.dp_1 = toBooleanArray(builder.mn_1);
    var tmp_1 = this;
    var tmp$ret$4;
    {
      var tmp0_map = withIndex(this.ap_1);
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$2;
          {
            tmp$ret$2 = to(item.n2_1, item.m2_1);
          }
          tmp0_mapTo.b(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    tmp_1.ep_1 = toMap(tmp$ret$4);
    this.fp_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.gp_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.eo = function () {
    return this.vo_1;
  };
  SerialDescriptorImpl.prototype.io = function () {
    return this.wo_1;
  };
  SerialDescriptorImpl.prototype.go = function () {
    return this.xo_1;
  };
  SerialDescriptorImpl.prototype.fo = function () {
    return this.yo_1;
  };
  SerialDescriptorImpl.prototype.hp = function () {
    return this.zo_1;
  };
  SerialDescriptorImpl.prototype.mo = function (index) {
    return getChecked(this.ap_1, index);
  };
  SerialDescriptorImpl.prototype.lo = function (name) {
    var tmp0_elvis_lhs = this.ep_1.c2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_2();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.jo = function (index) {
    return getChecked(this.cp_1, index);
  };
  SerialDescriptorImpl.prototype.ko = function (index) {
    return getChecked(this.bp_1, index);
  };
  SerialDescriptorImpl.prototype.no = function (index) {
    return getChecked_0(this.dp_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eo() === other.eo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.fp_1, tmp0__anonymous__q1qw7t.fp_1);
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.go() === other.go())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.go();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ko(index).eo() === other.ko(index).eo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ko(index).io(), other.ko(index).io())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.xo_1);
    var tmp_0 = this.vo_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.in_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda();
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function buildClassSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).sc());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.ip = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.jp = function () {
    return true;
  };
  AbstractDecoder.prototype.kp = function () {
    return null;
  };
  AbstractDecoder.prototype.lp = function () {
    var tmp = this.ip();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.mp = function () {
    var tmp = this.ip();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.np = function () {
    var tmp = this.ip();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.op = function () {
    var tmp = this.ip();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.pp = function () {
    var tmp = this.ip();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.qp = function () {
    var tmp = this.ip();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.rp = function () {
    var tmp = this.ip();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.sp = function () {
    var tmp = this.ip();
    return tmp instanceof Char ? tmp.f1_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.tp = function () {
    var tmp = this.ip();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.up = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.vp = function (deserializer, previousValue) {
    return this.wp(deserializer);
  };
  AbstractDecoder.prototype.xp = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.yp = function (descriptor) {
  };
  AbstractDecoder.prototype.zp = function (descriptor, index) {
    return this.lp();
  };
  AbstractDecoder.prototype.aq = function (descriptor, index) {
    return this.mp();
  };
  AbstractDecoder.prototype.bq = function (descriptor, index) {
    return this.np();
  };
  AbstractDecoder.prototype.cq = function (descriptor, index) {
    return this.op();
  };
  AbstractDecoder.prototype.dq = function (descriptor, index) {
    return this.pp();
  };
  AbstractDecoder.prototype.eq = function (descriptor, index) {
    return this.qp();
  };
  AbstractDecoder.prototype.fq = function (descriptor, index) {
    return this.rp();
  };
  AbstractDecoder.prototype.gq = function (descriptor, index) {
    return this.sp();
  };
  AbstractDecoder.prototype.hq = function (descriptor, index) {
    return this.tp();
  };
  AbstractDecoder.prototype.iq = function (descriptor, index, deserializer, previousValue) {
    return this.vp(deserializer, previousValue);
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.xp = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.yp = function (descriptor) {
  };
  AbstractEncoder.prototype.nq = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.oq = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.pq = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.qq = function (value) {
    return this.oq(value);
  };
  AbstractEncoder.prototype.rq = function (value) {
    return this.oq(value);
  };
  AbstractEncoder.prototype.sq = function (value) {
    return this.oq(value);
  };
  AbstractEncoder.prototype.tq = function (value) {
    return this.oq(value);
  };
  AbstractEncoder.prototype.uq = function (value) {
    return this.oq(value);
  };
  AbstractEncoder.prototype.vq = function (value) {
    return this.oq(value);
  };
  AbstractEncoder.prototype.wq = function (value) {
    return this.oq(value);
  };
  AbstractEncoder.prototype.xq = function (value) {
    return this.oq(new Char(value));
  };
  AbstractEncoder.prototype.yq = function (value) {
    return this.oq(value);
  };
  AbstractEncoder.prototype.zq = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.ar = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.qq(value);
  };
  AbstractEncoder.prototype.br = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.rq(value);
  };
  AbstractEncoder.prototype.cr = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.sq(value);
  };
  AbstractEncoder.prototype.dr = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.tq(value);
  };
  AbstractEncoder.prototype.er = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.uq(value);
  };
  AbstractEncoder.prototype.fr = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.vq(value);
  };
  AbstractEncoder.prototype.gr = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.wq(value);
  };
  AbstractEncoder.prototype.hr = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.xq(value);
  };
  AbstractEncoder.prototype.ir = function (descriptor, index, value) {
    if (this.nq(descriptor, index))
      this.yq(value);
  };
  AbstractEncoder.prototype.jr = function (descriptor, index, serializer, value) {
    if (this.nq(descriptor, index))
      this.kr(serializer, value);
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.nr_1 = -1;
    this.or_1 = -3;
  }
  Companion.prototype.pr = function () {
    return this.nr_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.xp(descriptor);
    var result = block(composite);
    composite.yp(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.mr(descriptor, collectionSize);
    block(composite);
    composite.yp(descriptor);
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.xp(descriptor);
    block(composite);
    composite.yp(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.hq($this.cn(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.cn();
    return compositeDecoder.jq(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.dn = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    {
      var tmp0_encodeStructure = this.cn();
      var composite = encoder.xp(tmp0_encodeStructure);
      {
        composite.ir(this.cn(), 0, actualSerializer.cn().eo());
        var tmp = this.cn();
        var tmp$ret$0;
        {
          tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
        }
        composite.jr(tmp, 1, tmp$ret$0, value);
      }
      composite.yp(tmp0_encodeStructure);
    }
  };
  AbstractPolymorphicSerializer.prototype.en = function (decoder) {
    var tmp$ret$5;
    {
      var tmp0_decodeStructure = this.cn();
      var composite = decoder.xp(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var klassName = null;
        var value = null;
        if (composite.kq()) {
          tmp$ret$0 = decodeSequentially_0(this, composite);
          break $l$block;
        }
        mainLoop: while (true) {
          var index = composite.lq(this.cn());
          Companion_getInstance_2();
          if (index === -1) {
            break mainLoop;
          } else {
            if (index === 0) {
              klassName = composite.hq(this.cn(), index);
            } else {
              if (index === 1) {
                var tmp$ret$2;
                $l$block_0: {
                  var tmp0_requireNotNull = klassName;
                  {
                  }
                  if (tmp0_requireNotNull == null) {
                    var tmp$ret$1;
                    {
                      tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                    }
                    var message = tmp$ret$1;
                    throw IllegalArgumentException_init_$Create$(toString(message));
                  } else {
                    tmp$ret$2 = tmp0_requireNotNull;
                    break $l$block_0;
                  }
                }
                klassName = tmp$ret$2;
                var serializer = findPolymorphicSerializer_0(this, composite, klassName);
                var tmp = this.cn();
                value = composite.jq(tmp, index, serializer, null, 8, null);
              } else {
                var tmp0_elvis_lhs = klassName;
                throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
              }
            }
          }
        }
        var tmp$ret$4;
        $l$block_1: {
          var tmp1_requireNotNull = value;
          {
          }
          if (tmp1_requireNotNull == null) {
            var tmp$ret$3;
            {
              tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
            }
            var message_0 = tmp$ret$3;
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$4 = tmp1_requireNotNull;
            break $l$block_1;
          }
        }
        var tmp_0 = tmp$ret$4;
        tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      }
      var result = tmp$ret$0;
      composite.yp(tmp0_decodeStructure);
      tmp$ret$5 = result;
    }
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.sn = function (decoder, klassName) {
    return decoder.wn().qr(this.rn(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.tn = function (encoder, value) {
    return encoder.wn().rr(this.rn(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.sc();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.sc() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.sr_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  DurationSerializer.prototype.cn = function () {
    return this.sr_1;
  };
  DurationSerializer.prototype.tr = function (encoder, value) {
    encoder.yq(Duration__toIsoString_impl_9h6wsm(value));
  };
  DurationSerializer.prototype.dn = function (encoder, value) {
    return this.tr(encoder, value instanceof Duration ? value.o5_1 : THROW_CCE());
  };
  DurationSerializer.prototype.ur = function (decoder) {
    return Companion_getInstance().m5(decoder.tp());
  };
  DurationSerializer.prototype.en = function (decoder) {
    return new Duration(this.ur(decoder));
  };
  DurationSerializer.$metadata$ = objectMeta('DurationSerializer', [KSerializer]);
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.xr_1 = primitive.eo() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.eo = function () {
    return this.xr_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.eo = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.yr_1 = elementDescriptor;
    this.zr_1 = 1;
  }
  ListLikeDescriptor.prototype.io = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.go = function () {
    return this.zr_1;
  };
  ListLikeDescriptor.prototype.mo = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.lo = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.no = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eo() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  ListLikeDescriptor.prototype.jo = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eo() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.ko = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eo() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return this.yr_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.yr_1, other.yr_1) ? this.eo() === other.eo() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.yr_1), 31) + getStringHashCode(this.eo()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.eo() + '(' + this.yr_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.cs_1 = serialName;
    this.ds_1 = keyDescriptor;
    this.es_1 = valueDescriptor;
    this.fs_1 = 2;
  }
  MapLikeDescriptor.prototype.eo = function () {
    return this.cs_1;
  };
  MapLikeDescriptor.prototype.io = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.go = function () {
    return this.fs_1;
  };
  MapLikeDescriptor.prototype.mo = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.lo = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.no = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eo() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  MapLikeDescriptor.prototype.jo = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eo() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.ko = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.eo() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.ds_1;
        break;
      case 1:
        tmp = this.es_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.eo() === other.eo()))
      return false;
    if (!equals(this.ds_1, other.ds_1))
      return false;
    if (!equals(this.es_1, other.es_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.eo());
    result = imul(31, result) + hashCode(this.ds_1) | 0;
    result = imul(31, result) + hashCode(this.es_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.eo() + '(' + this.ds_1 + ', ' + this.es_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.eo = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.eo = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.eo = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.ns_1 = new PrimitiveArrayDescriptor(primitiveSerializer.cn());
  }
  PrimitiveArraySerializer.prototype.cn = function () {
    return this.ns_1;
  };
  PrimitiveArraySerializer.prototype.os = function (_this__u8e3s4) {
    return _this__u8e3s4.ps();
  };
  PrimitiveArraySerializer.prototype.qs = function (_this__u8e3s4) {
    return _this__u8e3s4.rs();
  };
  PrimitiveArraySerializer.prototype.ss = function (_this__u8e3s4, size) {
    return _this__u8e3s4.sa(size);
  };
  PrimitiveArraySerializer.prototype.ts = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.us = function (_this__u8e3s4) {
    return this.ts((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.vs = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.ws = function () {
    return this.ys(this.xs());
  };
  PrimitiveArraySerializer.prototype.ct = function (encoder, value) {
    var size = this.dt(value);
    {
      var tmp0_encodeCollection = this.ns_1;
      var composite = encoder.mr(tmp0_encodeCollection, size);
      {
        this.bt(composite, value, size);
      }
      composite.yp(tmp0_encodeCollection);
    }
  };
  PrimitiveArraySerializer.prototype.dn = function (encoder, value) {
    return this.ct(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.et = function (encoder, value) {
    return this.ct(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.en = function (decoder) {
    return this.ft(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.it = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.ps() + 1 | 0;
    return $handler == null ? this.sa(requiredCapacity) : $handler(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.gt_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.et = function (encoder, value) {
    var size = this.dt(value);
    {
      var tmp0_encodeCollection = this.cn();
      var composite = encoder.mr(tmp0_encodeCollection, size);
      {
        var iterator = this.us(value);
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            composite.jr(this.cn(), index, this.gt_1, iterator.f());
          }
           while (inductionVariable < size);
      }
      composite.yp(tmp0_encodeCollection);
    }
  };
  CollectionLikeSerializer.prototype.dn = function (encoder, value) {
    return this.et(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.ht = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.zs(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.zs = function (decoder, index, builder, checkIndex) {
    var tmp = this.cn();
    this.vs(builder, index, decoder.jq(tmp, index, this.gt_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.mq($this.cn());
    $this.ss(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.ft = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.ys(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.ws() : tmp1_elvis_lhs;
    var startIndex = this.os(builder);
    var compositeDecoder = decoder.xp(this.cn());
    if (compositeDecoder.kq()) {
      this.ht(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.lq(this.cn());
        Companion_getInstance_2();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.at(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.yp(this.cn());
    return this.qs(builder);
  };
  AbstractCollectionSerializer.prototype.en = function (decoder) {
    return this.ft(decoder, null);
  };
  AbstractCollectionSerializer.prototype.at = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    return $handler == null ? this.zs(decoder, index, builder, checkIndex) : $handler(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.kt = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  CollectionSerializer.prototype.dt = function (_this__u8e3s4) {
    return this.kt((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.lt = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  CollectionSerializer.prototype.us = function (_this__u8e3s4) {
    return this.lt((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.nt_1 = kClass;
    this.ot_1 = new ArrayClassDesc(eSerializer.cn());
  }
  ReferenceArraySerializer.prototype.cn = function () {
    return this.ot_1;
  };
  ReferenceArraySerializer.prototype.pt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.dt = function (_this__u8e3s4) {
    return this.pt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.qt = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.us = function (_this__u8e3s4) {
    return this.qt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.ws = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.rt = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ReferenceArraySerializer.prototype.os = function (_this__u8e3s4) {
    return this.rt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.st = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.nt_1);
  };
  ReferenceArraySerializer.prototype.qs = function (_this__u8e3s4) {
    return this.st(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.tt = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.ys = function (_this__u8e3s4) {
    return this.tt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.ut = function (_this__u8e3s4, size) {
    return _this__u8e3s4.sa(size);
  };
  ReferenceArraySerializer.prototype.ss = function (_this__u8e3s4, size) {
    return this.ut(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.vt = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.da(index, element);
  };
  ReferenceArraySerializer.prototype.vs = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.vt(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.wt_1 = keySerializer;
    this.xt_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.yt = function () {
    return this.wt_1;
  };
  MapLikeSerializer.prototype.zt = function () {
    return this.xt_1;
  };
  MapLikeSerializer.prototype.ht = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.w_1;
    var last = progression.x_1;
    var step_0 = progression.y_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.zs(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.zs = function (decoder, index, builder, checkIndex) {
    var tmp = this.cn();
    var key = decoder.jq(tmp, index, this.wt_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      {
        var tmp0_also = decoder.lq(this.cn());
        {
        }
        {
          {
            var tmp0_require = tmp0_also === (index + 1 | 0);
            {
            }
            if (!tmp0_require) {
              var tmp$ret$0;
              {
                tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
              }
              var message = tmp$ret$0;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
        tmp$ret$1 = tmp0_also;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.z1(key)) {
      var tmp_3 = this.xt_1.cn().io();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.iq(this.cn(), vIndex, this.xt_1, getValue(builder, key));
    } else {
      var tmp_4 = this.cn();
      tmp_1 = decoder.jq(tmp_4, vIndex, this.xt_1, null, 8, null);
    }
    var value = tmp_1;
    {
      builder.a(key, value);
    }
  };
  MapLikeSerializer.prototype.et = function (encoder, value) {
    var size = this.dt(value);
    {
      var tmp0_encodeCollection = this.cn();
      var composite = encoder.mr(tmp0_encodeCollection, size);
      {
        var iterator = this.us(value);
        var index = 0;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = iterator;
          }
          var tmp0_iterator = tmp$ret$0;
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            {
              var tmp$ret$1;
              {
                tmp$ret$1 = element.q1();
              }
              var k = tmp$ret$1;
              var tmp$ret$2;
              {
                tmp$ret$2 = element.s1();
              }
              var v = tmp$ret$2;
              var tmp = this.cn();
              var tmp0 = index;
              index = tmp0 + 1 | 0;
              composite.jr(tmp, tmp0, this.wt_1, k);
              var tmp_0 = this.cn();
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              composite.jr(tmp_0, tmp1, this.xt_1, v);
            }
          }
        }
      }
      composite.yp(tmp0_encodeCollection);
    }
  };
  MapLikeSerializer.prototype.dn = function (encoder, value) {
    return this.et(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.cu_1 = new HashMapClassDesc(kSerializer.cn(), vSerializer.cn());
  }
  HashMapSerializer.prototype.cn = function () {
    return this.cu_1;
  };
  HashMapSerializer.prototype.du = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashMapSerializer.prototype.dt = function (_this__u8e3s4) {
    return this.du((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.eu = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.q().d();
    }
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.us = function (_this__u8e3s4) {
    return this.eu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.ws = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.fu = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  HashMapSerializer.prototype.os = function (_this__u8e3s4) {
    return this.fu(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.gu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.qs = function (_this__u8e3s4) {
    return this.gu(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.hu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.ys = function (_this__u8e3s4) {
    return this.hu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.iu = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.ss = function (_this__u8e3s4, size) {
    return this.iu(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.lu_1 = new LinkedHashMapClassDesc(kSerializer.cn(), vSerializer.cn());
  }
  LinkedHashMapSerializer.prototype.cn = function () {
    return this.lu_1;
  };
  LinkedHashMapSerializer.prototype.du = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashMapSerializer.prototype.dt = function (_this__u8e3s4) {
    return this.du((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.eu = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.q().d();
    }
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.us = function (_this__u8e3s4) {
    return this.eu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.ws = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.mu = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  LinkedHashMapSerializer.prototype.os = function (_this__u8e3s4) {
    return this.mu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.nu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.qs = function (_this__u8e3s4) {
    return this.nu(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.hu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.ys = function (_this__u8e3s4) {
    return this.hu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.ou = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.ss = function (_this__u8e3s4, size) {
    return this.ou(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.qu_1 = new ArrayListClassDesc(element.cn());
  }
  ArrayListSerializer.prototype.cn = function () {
    return this.qu_1;
  };
  ArrayListSerializer.prototype.ws = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.ru = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ArrayListSerializer.prototype.os = function (_this__u8e3s4) {
    return this.ru(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.su = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.qs = function (_this__u8e3s4) {
    return this.su(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.tu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.ys = function (_this__u8e3s4) {
    return this.tu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.uu = function (_this__u8e3s4, size) {
    return _this__u8e3s4.sa(size);
  };
  ArrayListSerializer.prototype.ss = function (_this__u8e3s4, size) {
    return this.uu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.vu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.da(index, element);
  };
  ArrayListSerializer.prototype.vs = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.vu(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.xu_1 = new HashSetClassDesc(eSerializer.cn());
  }
  HashSetSerializer.prototype.cn = function () {
    return this.xu_1;
  };
  HashSetSerializer.prototype.ws = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.yu = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashSetSerializer.prototype.os = function (_this__u8e3s4) {
    return this.yu(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.zu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.qs = function (_this__u8e3s4) {
    return this.zu(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.av = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.ys = function (_this__u8e3s4) {
    return this.av((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.bv = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.ss = function (_this__u8e3s4, size) {
    return this.bv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.cv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  HashSetSerializer.prototype.vs = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.cv(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ev_1 = new LinkedHashSetClassDesc(eSerializer.cn());
  }
  LinkedHashSetSerializer.prototype.cn = function () {
    return this.ev_1;
  };
  LinkedHashSetSerializer.prototype.ws = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashSet_init_$Create$();
    }
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.fv = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashSetSerializer.prototype.os = function (_this__u8e3s4) {
    return this.fv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.gv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.qs = function (_this__u8e3s4) {
    return this.gv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.av = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.ys = function (_this__u8e3s4) {
    return this.av((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.hv = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.ss = function (_this__u8e3s4, size) {
    return this.hv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.iv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  LinkedHashSetSerializer.prototype.vs = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.iv(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.jv_1 = longArray(0);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).w5(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.nv_1[slot] = $this.nv_1[slot].vg((new Long(1, 0)).w5(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.nv_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.nv_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.ug());
          slotMarks = slotMarks.vg((new Long(1, 0)).w5(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.lv_1($this.kv_1, index)) {
            $this.nv_1[slot] = slotMarks;
            return index;
          }
        }
        $this.nv_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_2();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_3();
    this.kv_1 = descriptor;
    this.lv_1 = readIfAbsent;
    var elementsCount = this.kv_1.go();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).w5(elementsCount);
      }
      tmp.mv_1 = tmp_0;
      this.nv_1 = Companion_getInstance_3().jv_1;
    } else {
      this.mv_1 = new Long(0, 0);
      this.nv_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.ov = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.mv_1 = this.mv_1.vg((new Long(1, 0)).w5(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.pv = function () {
    var elementsCount = this.kv_1.go();
    while (!this.mv_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.mv_1.ug());
      this.mv_1 = this.mv_1.vg((new Long(1, 0)).w5(index));
      if (this.lv_1(this.kv_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_2();
    return -1;
  };
  ElementMarker.$metadata$ = classMeta('ElementMarker');
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.cw_1 = true;
  }
  InlineClassDescriptor.prototype.ho = function () {
    return this.cw_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eo() === other.eo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = tmp0__anonymous__q1qw7t.cw_1 ? contentEquals(this.pw(), tmp0__anonymous__q1qw7t.pw()) : false;
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.go() === other.go())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.go();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ko(index).eo() === other.ko(index).eo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ko(index).io(), other.ko(index).io())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = classMeta('InlineClassDescriptor', undefined, undefined, undefined, undefined, PluginGeneratedSerialDescriptor.prototype);
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.rw_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.sw = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.rw_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.cn = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.dn = function (encoder, value) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.prototype.en = function (decoder) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.uw_1 = serializer;
    this.vw_1 = new SerialDescriptorForNullable(this.uw_1.cn());
  }
  NullableSerializer.prototype.cn = function () {
    return this.vw_1;
  };
  NullableSerializer.prototype.ww = function (encoder, value) {
    if (!(value == null)) {
      encoder.lr();
      encoder.kr(this.uw_1, value);
    } else {
      encoder.pq();
    }
  };
  NullableSerializer.prototype.dn = function (encoder, value) {
    return this.ww(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.en = function (decoder) {
    return decoder.jp() ? decoder.wp(this.uw_1) : decoder.kp();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.uw_1, other.uw_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.uw_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function SerialDescriptorForNullable(original) {
    this.oo_1 = original;
    this.po_1 = this.oo_1.eo() + '?';
    this.qo_1 = cachedSerialNames(this.oo_1);
  }
  SerialDescriptorForNullable.prototype.fo = function () {
    return this.oo_1.fo();
  };
  SerialDescriptorForNullable.prototype.go = function () {
    return this.oo_1.go();
  };
  SerialDescriptorForNullable.prototype.ho = function () {
    return this.oo_1.ho();
  };
  SerialDescriptorForNullable.prototype.io = function () {
    return this.oo_1.io();
  };
  SerialDescriptorForNullable.prototype.jo = function (index) {
    return this.oo_1.jo(index);
  };
  SerialDescriptorForNullable.prototype.ko = function (index) {
    return this.oo_1.ko(index);
  };
  SerialDescriptorForNullable.prototype.lo = function (name) {
    return this.oo_1.lo(name);
  };
  SerialDescriptorForNullable.prototype.mo = function (index) {
    return this.oo_1.mo(index);
  };
  SerialDescriptorForNullable.prototype.no = function (index) {
    return this.oo_1.no(index);
  };
  SerialDescriptorForNullable.prototype.eo = function () {
    return this.po_1;
  };
  SerialDescriptorForNullable.prototype.hp = function () {
    return this.qo_1;
  };
  SerialDescriptorForNullable.prototype.ao = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.oo_1, other.oo_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.oo_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.oo_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.hn_1 = this$0.yw_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.xw_1 = objectInstance;
    this.yw_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.zw_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.cn = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory_0();
      tmp$ret$0 = this.zw_1.s1();
    }
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.dn = function (encoder, value) {
    encoder.xp(this.cn()).yp(this.cn());
  };
  ObjectSerializer.prototype.en = function (decoder) {
    var tmp$ret$1;
    {
      var tmp0_decodeStructure = this.cn();
      var composite = decoder.xp(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var index = composite.lq(this.cn());
        Companion_getInstance_2();
        if (index === -1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          throw SerializationException_init_$Create$('Unexpected index ' + index);
        }
      }
      var result = tmp$ret$0;
      composite.yp(tmp0_decodeStructure);
      tmp$ret$1 = result;
    }
    return this.xw_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.cn();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.k();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (!tmp$ret$1) {
        tmp = _this__u8e3s4;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      var accumulator = 1;
      var tmp0_iterator = _this__u8e3s4.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = accumulator;
          var tmp = imul(31, tmp0__anonymous__q1qw7t);
          var tmp$ret$0;
          {
            var tmp0_hashCode = selector(element);
            var tmp0_safe_receiver = tmp0_hashCode;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
            tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          }
          tmp$ret$1 = tmp + tmp$ret$0 | 0;
        }
        accumulator = tmp$ret$1;
      }
      tmp$ret$2 = accumulator;
    }
    return tmp$ret$2;
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.bd();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.hp();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.go());
    var inductionVariable = 0;
    var last = _this__u8e3s4.go();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_plusAssign = _this__u8e3s4.mo(i);
          result.b(tmp0_plusAssign);
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          {
            var tmp0_plusAssign = descriptor.mo(i);
            missingFields.b(tmp0_plusAssign);
          }
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.eo());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.eo());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var accumulator = 1;
        var tmp0_iterator = elementDescriptors.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = accumulator;
            var tmp = imul(31, tmp0__anonymous__q1qw7t);
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = element.eo();
              }
              var tmp0_hashCode = tmp$ret$0;
              var tmp0_safe_receiver = tmp0_hashCode;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
              tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
            }
            tmp$ret$2 = tmp + tmp$ret$1 | 0;
          }
          accumulator = tmp$ret$2;
        }
        tmp$ret$3 = accumulator;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    {
      var tmp$ret$8;
      {
        var accumulator_0 = 1;
        var tmp0_iterator_0 = elementDescriptors.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          var tmp$ret$7;
          {
            var tmp0__anonymous__q1qw7t_0 = accumulator_0;
            var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                tmp$ret$5 = element_0.io();
              }
              var tmp0_hashCode_0 = tmp$ret$5;
              var tmp0_safe_receiver_0 = tmp0_hashCode_0;
              var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
              tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            }
            tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
          }
          accumulator_0 = tmp$ret$7;
        }
        tmp$ret$8 = accumulator_0;
      }
      tmp$ret$9 = tmp$ret$8;
    }
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = childSerializers$factory();
      tmp$ret$0 = $this.mw_1.s1();
    }
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory_0();
      tmp$ret$0 = $this.ow_1.s1();
    }
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.hw_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_set = $this.hw_1[i];
          indices.a(tmp0_set, i);
        }
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ew_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sw();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ew_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tw();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
            var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
            while (tmp0_iterator.e()) {
              var item = tmp0_iterator.f();
              var tmp$ret$0;
              {
                tmp$ret$0 = item.cn();
              }
              tmp0_mapTo.b(tmp$ret$0);
            }
            tmp$ret$1 = tmp0_mapTo;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.pw());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.mo(i) + ': ' + this$0.ko(i).eo();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.dw_1 = serialName;
    this.ew_1 = generatedSerializer;
    this.fw_1 = elementsCount;
    this.gw_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.fw_1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      {
        tmp$ret$1 = '[UNINITIALIZED]';
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.hw_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    {
      var tmp0_arrayOfNulls = this.fw_1;
      tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    tmp_4.iw_1 = tmp$ret$2;
    this.jw_1 = null;
    this.kw_1 = booleanArray(this.fw_1);
    this.lw_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.mw_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.nw_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.ow_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.eo = function () {
    return this.dw_1;
  };
  PluginGeneratedSerialDescriptor.prototype.go = function () {
    return this.fw_1;
  };
  PluginGeneratedSerialDescriptor.prototype.io = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.fo = function () {
    var tmp0_elvis_lhs = this.jw_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.hp = function () {
    return this.lw_1.d2();
  };
  PluginGeneratedSerialDescriptor.prototype.pw = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = typeParameterDescriptors$factory();
      tmp$ret$0 = this.nw_1.s1();
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.qw = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.gw_1 = tmp0_this.gw_1 + 1 | 0;
    this.hw_1[tmp0_this.gw_1] = name;
    this.kw_1[this.gw_1] = isOptional;
    this.iw_1[this.gw_1] = null;
    if (this.gw_1 === (this.fw_1 - 1 | 0)) {
      this.lw_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.ko = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).cn();
  };
  PluginGeneratedSerialDescriptor.prototype.no = function (index) {
    return getChecked_0(this.kw_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.jo = function (index) {
    var tmp0_elvis_lhs = getChecked(this.iw_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.mo = function (index) {
    return getChecked(this.hw_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.lo = function (name) {
    var tmp0_elvis_lhs = this.lw_1.c2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_2();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.eo() === other.eo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.pw(), tmp0__anonymous__q1qw7t.pw());
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.go() === other.go())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.go();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ko(index).eo() === other.ko(index).eo())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ko(index).io(), other.ko(index).io())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.fw_1);
    var tmp_0 = this.eo() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.pw();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  CharArraySerializer_0.prototype.dx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.dt = function (_this__u8e3s4) {
    return this.dx((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.ex = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.ys = function (_this__u8e3s4) {
    return this.ex((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.xs = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.fx = function (decoder, index, builder, checkIndex) {
    builder.ix(decoder.gq(this.cn(), index));
  };
  CharArraySerializer_0.prototype.zs = function (decoder, index, builder, checkIndex) {
    return this.fx(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.jx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.hr(this.cn(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.bt = function (encoder, content, size) {
    return this.jx(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.mx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.dt = function (_this__u8e3s4) {
    return this.mx((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.nx = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.ys = function (_this__u8e3s4) {
    return this.nx((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.xs = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.ox = function (decoder, index, builder, checkIndex) {
    builder.rx(decoder.fq(this.cn(), index));
  };
  DoubleArraySerializer_0.prototype.zs = function (decoder, index, builder, checkIndex) {
    return this.ox(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.sx = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.gr(this.cn(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.bt = function (encoder, content, size) {
    return this.sx(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.vx = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.dt = function (_this__u8e3s4) {
    return this.vx((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.wx = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.ys = function (_this__u8e3s4) {
    return this.wx((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.xs = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.xx = function (decoder, index, builder, checkIndex) {
    builder.ay(decoder.eq(this.cn(), index));
  };
  FloatArraySerializer_0.prototype.zs = function (decoder, index, builder, checkIndex) {
    return this.xx(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.by = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fr(this.cn(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.bt = function (encoder, content, size) {
    return this.by(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  LongArraySerializer_0.prototype.ey = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.dt = function (_this__u8e3s4) {
    return this.ey((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.fy = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.ys = function (_this__u8e3s4) {
    return this.fy((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.xs = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.gy = function (decoder, index, builder, checkIndex) {
    builder.jy(decoder.dq(this.cn(), index));
  };
  LongArraySerializer_0.prototype.zs = function (decoder, index, builder, checkIndex) {
    return this.gy(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.ky = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.er(this.cn(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.bt = function (encoder, content, size) {
    return this.ky(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.ny = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.dt = function (_this__u8e3s4) {
    return this.ny((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.oy = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.ys = function (_this__u8e3s4) {
    return this.oy((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.xs = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.py = function (decoder, index, builder, checkIndex) {
    builder.sy(decoder.cq(this.cn(), index));
  };
  IntArraySerializer_0.prototype.zs = function (decoder, index, builder, checkIndex) {
    return this.py(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.ty = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.dr(this.cn(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.bt = function (encoder, content, size) {
    return this.ty(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.wy = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.dt = function (_this__u8e3s4) {
    return this.wy((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.xy = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.ys = function (_this__u8e3s4) {
    return this.xy((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.xs = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.yy = function (decoder, index, builder, checkIndex) {
    builder.bz(decoder.bq(this.cn(), index));
  };
  ShortArraySerializer_0.prototype.zs = function (decoder, index, builder, checkIndex) {
    return this.yy(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.cz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.cr(this.cn(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.bt = function (encoder, content, size) {
    return this.cz(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.fz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.dt = function (_this__u8e3s4) {
    return this.fz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.gz = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.ys = function (_this__u8e3s4) {
    return this.gz((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.xs = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.hz = function (decoder, index, builder, checkIndex) {
    builder.kz(decoder.aq(this.cn(), index));
  };
  ByteArraySerializer_0.prototype.zs = function (decoder, index, builder, checkIndex) {
    return this.hz(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.lz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.br(this.cn(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.bt = function (encoder, content, size) {
    return this.lz(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.oz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.dt = function (_this__u8e3s4) {
    return this.oz((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.pz = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.ys = function (_this__u8e3s4) {
    return this.pz((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.xs = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.qz = function (decoder, index, builder, checkIndex) {
    builder.tz(decoder.zp(this.cn(), index));
  };
  BooleanArraySerializer_0.prototype.zs = function (decoder, index, builder, checkIndex) {
    return this.qz(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.uz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ar(this.cn(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.bt = function (encoder, content, size) {
    return this.uz(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gx_1 = bufferWithData;
    this.hx_1 = bufferWithData.length;
    this.sa(10);
  }
  CharArrayBuilder.prototype.ps = function () {
    return this.hx_1;
  };
  CharArrayBuilder.prototype.sa = function (requiredCapacity) {
    if (this.gx_1.length < requiredCapacity)
      this.gx_1 = copyOf(this.gx_1, coerceAtLeast(requiredCapacity, imul(this.gx_1.length, 2)));
  };
  CharArrayBuilder.prototype.ix = function (c) {
    this.it(0, 1, null);
    var tmp = this.gx_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.hx_1;
    tmp0_this.hx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.rs = function () {
    return copyOf(this.gx_1, this.hx_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.px_1 = bufferWithData;
    this.qx_1 = bufferWithData.length;
    this.sa(10);
  }
  DoubleArrayBuilder.prototype.ps = function () {
    return this.qx_1;
  };
  DoubleArrayBuilder.prototype.sa = function (requiredCapacity) {
    if (this.px_1.length < requiredCapacity)
      this.px_1 = copyOf_0(this.px_1, coerceAtLeast(requiredCapacity, imul(this.px_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.rx = function (c) {
    this.it(0, 1, null);
    var tmp = this.px_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.qx_1;
    tmp0_this.qx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.rs = function () {
    return copyOf_0(this.px_1, this.qx_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.yx_1 = bufferWithData;
    this.zx_1 = bufferWithData.length;
    this.sa(10);
  }
  FloatArrayBuilder.prototype.ps = function () {
    return this.zx_1;
  };
  FloatArrayBuilder.prototype.sa = function (requiredCapacity) {
    if (this.yx_1.length < requiredCapacity)
      this.yx_1 = copyOf_1(this.yx_1, coerceAtLeast(requiredCapacity, imul(this.yx_1.length, 2)));
  };
  FloatArrayBuilder.prototype.ay = function (c) {
    this.it(0, 1, null);
    var tmp = this.yx_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.zx_1;
    tmp0_this.zx_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.rs = function () {
    return copyOf_1(this.yx_1, this.zx_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.hy_1 = bufferWithData;
    this.iy_1 = bufferWithData.length;
    this.sa(10);
  }
  LongArrayBuilder.prototype.ps = function () {
    return this.iy_1;
  };
  LongArrayBuilder.prototype.sa = function (requiredCapacity) {
    if (this.hy_1.length < requiredCapacity)
      this.hy_1 = copyOf_2(this.hy_1, coerceAtLeast(requiredCapacity, imul(this.hy_1.length, 2)));
  };
  LongArrayBuilder.prototype.jy = function (c) {
    this.it(0, 1, null);
    var tmp = this.hy_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.iy_1;
    tmp0_this.iy_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.rs = function () {
    return copyOf_2(this.hy_1, this.iy_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qy_1 = bufferWithData;
    this.ry_1 = bufferWithData.length;
    this.sa(10);
  }
  IntArrayBuilder.prototype.ps = function () {
    return this.ry_1;
  };
  IntArrayBuilder.prototype.sa = function (requiredCapacity) {
    if (this.qy_1.length < requiredCapacity)
      this.qy_1 = copyOf_3(this.qy_1, coerceAtLeast(requiredCapacity, imul(this.qy_1.length, 2)));
  };
  IntArrayBuilder.prototype.sy = function (c) {
    this.it(0, 1, null);
    var tmp = this.qy_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.ry_1;
    tmp0_this.ry_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.rs = function () {
    return copyOf_3(this.qy_1, this.ry_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zy_1 = bufferWithData;
    this.az_1 = bufferWithData.length;
    this.sa(10);
  }
  ShortArrayBuilder.prototype.ps = function () {
    return this.az_1;
  };
  ShortArrayBuilder.prototype.sa = function (requiredCapacity) {
    if (this.zy_1.length < requiredCapacity)
      this.zy_1 = copyOf_4(this.zy_1, coerceAtLeast(requiredCapacity, imul(this.zy_1.length, 2)));
  };
  ShortArrayBuilder.prototype.bz = function (c) {
    this.it(0, 1, null);
    var tmp = this.zy_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.az_1;
    tmp0_this.az_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.rs = function () {
    return copyOf_4(this.zy_1, this.az_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.iz_1 = bufferWithData;
    this.jz_1 = bufferWithData.length;
    this.sa(10);
  }
  ByteArrayBuilder.prototype.ps = function () {
    return this.jz_1;
  };
  ByteArrayBuilder.prototype.sa = function (requiredCapacity) {
    if (this.iz_1.length < requiredCapacity)
      this.iz_1 = copyOf_5(this.iz_1, coerceAtLeast(requiredCapacity, imul(this.iz_1.length, 2)));
  };
  ByteArrayBuilder.prototype.kz = function (c) {
    this.it(0, 1, null);
    var tmp = this.iz_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.jz_1;
    tmp0_this.jz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.rs = function () {
    return copyOf_5(this.iz_1, this.jz_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rz_1 = bufferWithData;
    this.sz_1 = bufferWithData.length;
    this.sa(10);
  }
  BooleanArrayBuilder.prototype.ps = function () {
    return this.sz_1;
  };
  BooleanArrayBuilder.prototype.sa = function (requiredCapacity) {
    if (this.rz_1.length < requiredCapacity)
      this.rz_1 = copyOf_6(this.rz_1, coerceAtLeast(requiredCapacity, imul(this.rz_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.tz = function (c) {
    this.it(0, 1, null);
    var tmp = this.rz_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.sz_1;
    tmp0_this.sz_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.rs = function () {
    return copyOf_6(this.rz_1, this.sz_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.vz_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.cn = function () {
    return this.vz_1;
  };
  StringSerializer.prototype.wz = function (encoder, value) {
    return encoder.yq(value);
  };
  StringSerializer.prototype.dn = function (encoder, value) {
    return this.wz(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.en = function (decoder) {
    return decoder.tp();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.xz_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.cn = function () {
    return this.xz_1;
  };
  CharSerializer.prototype.yz = function (encoder, value) {
    return encoder.xq(value);
  };
  CharSerializer.prototype.dn = function (encoder, value) {
    return this.yz(encoder, value instanceof Char ? value.f1_1 : THROW_CCE());
  };
  CharSerializer.prototype.zz = function (decoder) {
    return decoder.sp();
  };
  CharSerializer.prototype.en = function (decoder) {
    return new Char(this.zz(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.a10_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.cn = function () {
    return this.a10_1;
  };
  DoubleSerializer.prototype.b10 = function (encoder, value) {
    return encoder.wq(value);
  };
  DoubleSerializer.prototype.dn = function (encoder, value) {
    return this.b10(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.en = function (decoder) {
    return decoder.rp();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.c10_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.cn = function () {
    return this.c10_1;
  };
  FloatSerializer.prototype.d10 = function (encoder, value) {
    return encoder.vq(value);
  };
  FloatSerializer.prototype.dn = function (encoder, value) {
    return this.d10(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.en = function (decoder) {
    return decoder.qp();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.e10_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.cn = function () {
    return this.e10_1;
  };
  LongSerializer.prototype.f10 = function (encoder, value) {
    return encoder.uq(value);
  };
  LongSerializer.prototype.dn = function (encoder, value) {
    return this.f10(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.en = function (decoder) {
    return decoder.pp();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.g10_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.cn = function () {
    return this.g10_1;
  };
  IntSerializer.prototype.h10 = function (encoder, value) {
    return encoder.tq(value);
  };
  IntSerializer.prototype.dn = function (encoder, value) {
    return this.h10(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.en = function (decoder) {
    return decoder.op();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.i10_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.cn = function () {
    return this.i10_1;
  };
  ShortSerializer.prototype.j10 = function (encoder, value) {
    return encoder.sq(value);
  };
  ShortSerializer.prototype.dn = function (encoder, value) {
    return this.j10(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.en = function (decoder) {
    return decoder.np();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.k10_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.cn = function () {
    return this.k10_1;
  };
  ByteSerializer.prototype.l10 = function (encoder, value) {
    return encoder.rq(value);
  };
  ByteSerializer.prototype.dn = function (encoder, value) {
    return this.l10(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.en = function (decoder) {
    return decoder.mp();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.m10_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.cn = function () {
    return this.m10_1;
  };
  BooleanSerializer.prototype.n10 = function (encoder, value) {
    return encoder.qq(value);
  };
  BooleanSerializer.prototype.dn = function (encoder, value) {
    return this.n10(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.en = function (decoder) {
    return decoder.lp();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.o10_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.cn = function () {
    return this.o10_1.cn();
  };
  UnitSerializer.prototype.p10 = function (decoder) {
    this.o10_1.en(decoder);
  };
  UnitSerializer.prototype.en = function (decoder) {
    this.p10(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.q10 = function (encoder, value) {
    this.o10_1.dn(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.dn = function (encoder, value) {
    return this.q10(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.r10_1 = serialName;
    this.s10_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.eo = function () {
    return this.r10_1;
  };
  PrimitiveSerialDescriptor_0.prototype.io = function () {
    return this.s10_1;
  };
  PrimitiveSerialDescriptor_0.prototype.go = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.mo = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.lo = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.no = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.ko = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.jo = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.r10_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().c2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().d2();
    var tmp0_iterator = keys.d();
    while (tmp0_iterator.e()) {
      var primitive = tmp0_iterator.f();
      var simpleName = capitalize(ensureNotNull(primitive.sc()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    {
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
      }
      if (tmp$ret$0) {
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
          tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
        }
        var tmp_0 = toString(tmp$ret$1);
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = _this__u8e3s4;
          }
          tmp$ret$3 = tmp$ret$2.substring(1);
        }
        tmp = tmp_0 + tmp$ret$3;
      } else {
        tmp = _this__u8e3s4;
      }
      tmp$ret$4 = tmp;
    }
    return tmp$ret$4;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().le(), serializer_0(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().oe(), CharArraySerializer()), to(PrimitiveClasses_getInstance().je(), serializer_2(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ue(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ie(), serializer_3(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().te(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().se(), LongArraySerializer()), to(PrimitiveClasses_getInstance().he(), serializer_5(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().re(), IntArraySerializer()), to(PrimitiveClasses_getInstance().ge(), serializer_6(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().qe(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().fe(), serializer_7(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().pe(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().ee(), serializer_8(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ne(), BooleanArraySerializer()), to(getKClass(Unit), serializer_9(Unit_getInstance())), to(getKClass(Duration), serializer_10(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.v10 = function (_this__u8e3s4, index) {
    return this.x10(this.w10(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.x10 = function (nestedName) {
    var tmp0_elvis_lhs = this.a11();
    return this.b11(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.w10 = function (desc, index) {
    return desc.mo(index);
  };
  NamedValueDecoder.prototype.b11 = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(parentName) === 0;
    }
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = classMeta('NamedValueDecoder', undefined, undefined, undefined, undefined, TaggedDecoder.prototype);
  function tagBlock($this, tag, block) {
    $this.o11(tag);
    var r = block();
    if (!$this.z10_1) {
      $this.p11();
    }
    $this.z10_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.vp($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    tmp.y10_1 = tmp$ret$0;
    this.z10_1 = false;
  }
  TaggedDecoder.prototype.wn = function () {
    return EmptySerializersModule_0();
  };
  TaggedDecoder.prototype.c11 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.d11 = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.e11 = function (tag) {
    var tmp = this.c11(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.f11 = function (tag) {
    var tmp = this.c11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.g11 = function (tag) {
    var tmp = this.c11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.h11 = function (tag) {
    var tmp = this.c11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.i11 = function (tag) {
    var tmp = this.c11(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.j11 = function (tag) {
    var tmp = this.c11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.k11 = function (tag) {
    var tmp = this.c11(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.l11 = function (tag) {
    var tmp = this.c11(tag);
    return tmp instanceof Char ? tmp.f1_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.m11 = function (tag) {
    var tmp = this.c11(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.n11 = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    {
      {
      }
      {
        this.o11(tag);
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.vp = function (deserializer, previousValue) {
    return this.wp(deserializer);
  };
  TaggedDecoder.prototype.up = function (descriptor) {
    return this.n11(this.p11(), descriptor);
  };
  TaggedDecoder.prototype.jp = function () {
    var tmp0_elvis_lhs = this.a11();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.d11(currentTag);
  };
  TaggedDecoder.prototype.kp = function () {
    return null;
  };
  TaggedDecoder.prototype.lp = function () {
    return this.e11(this.p11());
  };
  TaggedDecoder.prototype.mp = function () {
    return this.f11(this.p11());
  };
  TaggedDecoder.prototype.np = function () {
    return this.g11(this.p11());
  };
  TaggedDecoder.prototype.op = function () {
    return this.h11(this.p11());
  };
  TaggedDecoder.prototype.pp = function () {
    return this.i11(this.p11());
  };
  TaggedDecoder.prototype.qp = function () {
    return this.j11(this.p11());
  };
  TaggedDecoder.prototype.rp = function () {
    return this.k11(this.p11());
  };
  TaggedDecoder.prototype.sp = function () {
    return this.l11(this.p11());
  };
  TaggedDecoder.prototype.tp = function () {
    return this.m11(this.p11());
  };
  TaggedDecoder.prototype.xp = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.yp = function (descriptor) {
  };
  TaggedDecoder.prototype.zp = function (descriptor, index) {
    return this.e11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.aq = function (descriptor, index) {
    return this.f11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.bq = function (descriptor, index) {
    return this.g11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.cq = function (descriptor, index) {
    return this.h11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.dq = function (descriptor, index) {
    return this.i11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.eq = function (descriptor, index) {
    return this.j11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.fq = function (descriptor, index) {
    return this.k11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.gq = function (descriptor, index) {
    return this.l11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.hq = function (descriptor, index) {
    return this.m11(this.v10(descriptor, index));
  };
  TaggedDecoder.prototype.iq = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.v10(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.a11 = function () {
    return lastOrNull(this.y10_1);
  };
  TaggedDecoder.prototype.o11 = function (name) {
    this.y10_1.b(name);
  };
  TaggedDecoder.prototype.p11 = function () {
    var r = this.y10_1.z2(get_lastIndex_0(this.y10_1));
    this.z10_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.q11_1 = key;
    this.r11_1 = value;
  }
  MapEntry.prototype.q1 = function () {
    return this.q11_1;
  };
  MapEntry.prototype.s1 = function () {
    return this.r11_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.q11_1 + ', value=' + this.r11_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.q11_1 == null ? 0 : hashCode(this.q11_1);
    result = imul(result, 31) + (this.r11_1 == null ? 0 : hashCode(this.r11_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.q11_1, tmp0_other_with_cast.q11_1))
      return false;
    if (!equals(this.r11_1, tmp0_other_with_cast.r11_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.cn();
      $this$buildSerialDescriptor.nn('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.cn();
      $this$buildSerialDescriptor.nn('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.u11_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.cn = function () {
    return this.u11_1;
  };
  MapEntrySerializer_0.prototype.v11 = function (_this__u8e3s4) {
    return _this__u8e3s4.q1();
  };
  MapEntrySerializer_0.prototype.w11 = function (_this__u8e3s4) {
    return this.v11((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.x11 = function (_this__u8e3s4) {
    return _this__u8e3s4.s1();
  };
  MapEntrySerializer_0.prototype.y11 = function (_this__u8e3s4) {
    return this.x11((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.z11 = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.cn();
      $this$buildClassSerialDescriptor.nn('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.cn();
      $this$buildClassSerialDescriptor.nn('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.f12_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.cn = function () {
    return this.f12_1;
  };
  PairSerializer_0.prototype.g12 = function (_this__u8e3s4) {
    return _this__u8e3s4.i_1;
  };
  PairSerializer_0.prototype.w11 = function (_this__u8e3s4) {
    return this.g12(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.h12 = function (_this__u8e3s4) {
    return _this__u8e3s4.j_1;
  };
  PairSerializer_0.prototype.y11 = function (_this__u8e3s4) {
    return this.h12(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.z11 = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function decodeSequentially_1($this, composite) {
    var a = composite.jq($this.l12_1, 0, $this.i12_1, null, 8, null);
    var b = composite.jq($this.l12_1, 1, $this.j12_1, null, 8, null);
    var c = composite.jq($this.l12_1, 2, $this.k12_1, null, 8, null);
    composite.yp($this.l12_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.lq($this.l12_1);
      Companion_getInstance_2();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.jq($this.l12_1, 0, $this.i12_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.jq($this.l12_1, 1, $this.j12_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.jq($this.l12_1, 2, $this.k12_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.yp($this.l12_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.i12_1.cn();
      $this$buildClassSerialDescriptor.nn('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.j12_1.cn();
      $this$buildClassSerialDescriptor.nn('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.k12_1.cn();
      $this$buildClassSerialDescriptor.nn('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.i12_1 = aSerializer;
    this.j12_1 = bSerializer;
    this.k12_1 = cSerializer;
    var tmp = this;
    tmp.l12_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.cn = function () {
    return this.l12_1;
  };
  TripleSerializer_0.prototype.m12 = function (encoder, value) {
    var structuredEncoder = encoder.xp(this.l12_1);
    structuredEncoder.jr(this.l12_1, 0, this.i12_1, value.q6_1);
    structuredEncoder.jr(this.l12_1, 1, this.j12_1, value.r6_1);
    structuredEncoder.jr(this.l12_1, 2, this.k12_1, value.s6_1);
    structuredEncoder.yp(this.l12_1);
  };
  TripleSerializer_0.prototype.dn = function (encoder, value) {
    return this.m12(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.en = function (decoder) {
    var composite = decoder.xp(this.l12_1);
    if (composite.kq()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.a12_1 = keySerializer;
    this.b12_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.c12 = function (encoder, value) {
    var structuredEncoder = encoder.xp(this.cn());
    structuredEncoder.jr(this.cn(), 0, this.a12_1, this.w11(value));
    structuredEncoder.jr(this.cn(), 1, this.b12_1, this.y11(value));
    structuredEncoder.yp(this.cn());
  };
  KeyValueSerializer.prototype.dn = function (encoder, value) {
    return this.c12(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.en = function (decoder) {
    var composite = decoder.xp(this.cn());
    if (composite.kq()) {
      var tmp = this.cn();
      var key = composite.jq(tmp, 0, this.a12_1, null, 8, null);
      var tmp_0 = this.cn();
      var value = composite.jq(tmp_0, 1, this.b12_1, null, 8, null);
      return this.z11(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.lq(this.cn());
      Companion_getInstance_2();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.cn();
          key_0 = composite.jq(tmp_1, 0, this.a12_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.cn();
            value_0 = composite.jq(tmp_2, 1, this.b12_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.yp(this.cn());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.z11(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = classMeta('KeyValueSerializer', [KSerializer]);
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.n12_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.cn = function () {
    return this.n12_1;
  };
  UIntSerializer.prototype.o12 = function (encoder, value) {
    var tmp = encoder.zq(this.n12_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    }
    tmp.tq(tmp$ret$0);
  };
  UIntSerializer.prototype.dn = function (encoder, value) {
    return this.o12(encoder, value instanceof UInt ? value.d7_1 : THROW_CCE());
  };
  UIntSerializer.prototype.p12 = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUInt = decoder.up(this.n12_1).op();
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    }
    return tmp$ret$0;
  };
  UIntSerializer.prototype.en = function (decoder) {
    return new UInt(this.p12(decoder));
  };
  UIntSerializer.$metadata$ = objectMeta('UIntSerializer', [KSerializer]);
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.q12_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  ULongSerializer.prototype.cn = function () {
    return this.q12_1;
  };
  ULongSerializer.prototype.r12 = function (encoder, value) {
    var tmp = encoder.zq(this.q12_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    }
    tmp.uq(tmp$ret$0);
  };
  ULongSerializer.prototype.dn = function (encoder, value) {
    return this.r12(encoder, value instanceof ULong ? value.k7_1 : THROW_CCE());
  };
  ULongSerializer.prototype.s12 = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toULong = decoder.up(this.q12_1).pp();
      tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    }
    return tmp$ret$0;
  };
  ULongSerializer.prototype.en = function (decoder) {
    return new ULong(this.s12(decoder));
  };
  ULongSerializer.$metadata$ = objectMeta('ULongSerializer', [KSerializer]);
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.t12_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.cn = function () {
    return this.t12_1;
  };
  UByteSerializer.prototype.u12 = function (encoder, value) {
    var tmp = encoder.zq(this.t12_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    }
    tmp.rq(tmp$ret$0);
  };
  UByteSerializer.prototype.dn = function (encoder, value) {
    return this.u12(encoder, value instanceof UByte ? value.x6_1 : THROW_CCE());
  };
  UByteSerializer.prototype.v12 = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUByte = decoder.up(this.t12_1).mp();
      tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    }
    return tmp$ret$0;
  };
  UByteSerializer.prototype.en = function (decoder) {
    return new UByte(this.v12(decoder));
  };
  UByteSerializer.$metadata$ = objectMeta('UByteSerializer', [KSerializer]);
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.w12_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_6(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.cn = function () {
    return this.w12_1;
  };
  UShortSerializer.prototype.x12 = function (encoder, value) {
    var tmp = encoder.zq(this.w12_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    }
    tmp.sq(tmp$ret$0);
  };
  UShortSerializer.prototype.dn = function (encoder, value) {
    return this.x12(encoder, value instanceof UShort ? value.q7_1 : THROW_CCE());
  };
  UShortSerializer.prototype.y12 = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUShort = decoder.up(this.w12_1).np();
      tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    }
    return tmp$ret$0;
  };
  UShortSerializer.prototype.en = function (decoder) {
    return new UShort(this.y12(decoder));
  };
  UShortSerializer.$metadata$ = objectMeta('UShortSerializer', [KSerializer]);
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.yn = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.zn(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.z12_1 = class2ContextualFactory;
    this.a13_1 = polyBase2Serializers;
    this.b13_1 = polyBase2DefaultSerializerProvider;
    this.c13_1 = polyBase2NamedSerializers;
    this.d13_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.rr = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.a13_1.c2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.b13_1.c2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.qr = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.c13_1.c2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).c2(serializedClassName);
      }
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.d13_1.c2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.zn = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.z12_1.c2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e13(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializableWith(serializer) {
    this.f13_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.f13_1.equals(tmp0_other_with_cast.f13_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.f13_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.f13_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.tc(_this__u8e3s4);
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    {
      tmp$ret$0 = copyToArray(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.sc() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_asDynamic = get_js(_this__u8e3s4);
        tmp$ret$0 = tmp0_asDynamic;
      }
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ke());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      {
        tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      }
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.ax(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    {
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
    }
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.ao = get_isNullable;
  SerialDescriptorImpl.prototype.ho = get_isInline;
  AbstractDecoder.prototype.jq = decodeSerializableElement$default;
  AbstractDecoder.prototype.wp = decodeSerializableValue;
  AbstractDecoder.prototype.kq = decodeSequentially;
  AbstractDecoder.prototype.mq = decodeCollectionSize;
  AbstractEncoder.prototype.lr = encodeNotNullMark;
  AbstractEncoder.prototype.mr = beginCollection;
  AbstractEncoder.prototype.kr = encodeSerializableValue;
  ListLikeDescriptor.prototype.ao = get_isNullable;
  ListLikeDescriptor.prototype.ho = get_isInline;
  ListLikeDescriptor.prototype.fo = get_annotations;
  PrimitiveArrayDescriptor.prototype.ao = get_isNullable;
  PrimitiveArrayDescriptor.prototype.ho = get_isInline;
  PrimitiveArrayDescriptor.prototype.fo = get_annotations;
  ArrayClassDesc.prototype.ao = get_isNullable;
  ArrayClassDesc.prototype.ho = get_isInline;
  ArrayClassDesc.prototype.fo = get_annotations;
  MapLikeDescriptor.prototype.ao = get_isNullable;
  MapLikeDescriptor.prototype.ho = get_isInline;
  MapLikeDescriptor.prototype.fo = get_annotations;
  HashMapClassDesc.prototype.ao = get_isNullable;
  HashMapClassDesc.prototype.ho = get_isInline;
  HashMapClassDesc.prototype.fo = get_annotations;
  LinkedHashMapClassDesc.prototype.ao = get_isNullable;
  LinkedHashMapClassDesc.prototype.ho = get_isInline;
  LinkedHashMapClassDesc.prototype.fo = get_annotations;
  ArrayListClassDesc.prototype.ao = get_isNullable;
  ArrayListClassDesc.prototype.ho = get_isInline;
  ArrayListClassDesc.prototype.fo = get_annotations;
  HashSetClassDesc.prototype.ao = get_isNullable;
  HashSetClassDesc.prototype.ho = get_isInline;
  HashSetClassDesc.prototype.fo = get_annotations;
  LinkedHashSetClassDesc.prototype.ao = get_isNullable;
  LinkedHashSetClassDesc.prototype.ho = get_isInline;
  LinkedHashSetClassDesc.prototype.fo = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.ao = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.ho = get_isInline;
  InlineClassDescriptor.prototype.ao = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.tw = typeParametersSerializers;
  PrimitiveSerialDescriptor_0.prototype.ao = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.ho = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.fo = get_annotations;
  TaggedDecoder.prototype.jq = decodeSerializableElement$default;
  TaggedDecoder.prototype.wp = decodeSerializableValue;
  TaggedDecoder.prototype.kq = decodeSequentially;
  TaggedDecoder.prototype.mq = decodeCollectionSize;
  NamedValueDecoder.prototype.wp = decodeSerializableValue;
  NamedValueDecoder.prototype.jq = decodeSerializableElement$default;
  NamedValueDecoder.prototype.kq = decodeSequentially;
  NamedValueDecoder.prototype.mq = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = SEALED_getInstance;
  _.$_$.f = STRING_getInstance;
  _.$_$.g = CONTEXTUAL_getInstance;
  _.$_$.h = ENUM_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = Companion_getInstance_2;
  _.$_$.l = StringSerializer_getInstance;
  _.$_$.m = ListSerializer;
  _.$_$.n = MapSerializer;
  _.$_$.o = serializer_0;
  _.$_$.p = serializer_14;
  _.$_$.q = serializer_11;
  _.$_$.r = serializer_13;
  _.$_$.s = serializer_12;
  _.$_$.t = PolymorphicKind;
  _.$_$.u = PrimitiveKind;
  _.$_$.v = PrimitiveSerialDescriptor;
  _.$_$.w = get_annotations;
  _.$_$.x = get_isInline;
  _.$_$.y = get_isNullable;
  _.$_$.z = SerialDescriptor;
  _.$_$.a1 = ENUM;
  _.$_$.b1 = getContextualDescriptor;
  _.$_$.c1 = AbstractDecoder;
  _.$_$.d1 = AbstractEncoder;
  _.$_$.e1 = decodeCollectionSize;
  _.$_$.f1 = decodeSequentially;
  _.$_$.g1 = CompositeDecoder;
  _.$_$.h1 = CompositeEncoder;
  _.$_$.i1 = decodeSerializableValue;
  _.$_$.j1 = Decoder;
  _.$_$.k1 = beginCollection;
  _.$_$.l1 = encodeNotNullMark;
  _.$_$.m1 = Encoder;
  _.$_$.n1 = AbstractPolymorphicSerializer;
  _.$_$.o1 = ArrayListSerializer;
  _.$_$.p1 = ElementMarker;
  _.$_$.q1 = typeParametersSerializers;
  _.$_$.r1 = GeneratedSerializer;
  _.$_$.s1 = NamedValueDecoder;
  _.$_$.t1 = PluginGeneratedSerialDescriptor;
  _.$_$.u1 = SerializerFactory;
  _.$_$.v1 = jsonCachedSerialNames;
  _.$_$.w1 = throwMissingFieldException;
  _.$_$.x1 = EmptySerializersModule_0;
  _.$_$.y1 = DeserializationStrategy;
  _.$_$.z1 = KSerializer;
  _.$_$.a2 = MissingFieldException;
  _.$_$.b2 = SealedClassSerializer;
  _.$_$.c2 = SerializationException;
  _.$_$.d2 = StringFormat;
  _.$_$.e2 = findPolymorphicSerializer;
  _.$_$.f2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map