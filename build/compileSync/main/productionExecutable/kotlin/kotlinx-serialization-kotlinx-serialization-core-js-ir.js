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
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.t2;
  var Unit_getInstance = kotlin_kotlin.$_$.d3;
  var emptyList = kotlin_kotlin.$_$.i4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.o9;
  var classMeta = kotlin_kotlin.$_$.n6;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.s7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.q6;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.h6;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException = kotlin_kotlin.$_$.v8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var toString = kotlin_kotlin.$_$.m7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var isInterface = kotlin_kotlin.$_$.b7;
  var KClass = kotlin_kotlin.$_$.r7;
  var copyToArray = kotlin_kotlin.$_$.h4;
  var Triple = kotlin_kotlin.$_$.a9;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.x8;
  var Entry = kotlin_kotlin.$_$.n3;
  var LinkedHashMap = kotlin_kotlin.$_$.k3;
  var MutableMap = kotlin_kotlin.$_$.q3;
  var Map = kotlin_kotlin.$_$.o3;
  var HashMap = kotlin_kotlin.$_$.g3;
  var LinkedHashSet = kotlin_kotlin.$_$.l3;
  var MutableSet = kotlin_kotlin.$_$.r3;
  var Set = kotlin_kotlin.$_$.s3;
  var HashSet = kotlin_kotlin.$_$.h3;
  var ArrayList = kotlin_kotlin.$_$.e3;
  var MutableList = kotlin_kotlin.$_$.p3;
  var List = kotlin_kotlin.$_$.m3;
  var Collection = kotlin_kotlin.$_$.f3;
  var equals = kotlin_kotlin.$_$.o6;
  var getStringHashCode = kotlin_kotlin.$_$.r6;
  var Iterator = kotlin_kotlin.$_$.j3;
  var Iterable = kotlin_kotlin.$_$.i3;
  var isBlank = kotlin_kotlin.$_$.w7;
  var toList = kotlin_kotlin.$_$.e5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var toHashSet = kotlin_kotlin.$_$.c5;
  var toBooleanArray = kotlin_kotlin.$_$.b5;
  var withIndex = kotlin_kotlin.$_$.i5;
  var to = kotlin_kotlin.$_$.u9;
  var toMap = kotlin_kotlin.$_$.g5;
  var lazy_0 = kotlin_kotlin.$_$.p9;
  var contentEquals = kotlin_kotlin.$_$.w3;
  var until = kotlin_kotlin.$_$.q7;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.i7;
  var ensureNotNull = kotlin_kotlin.$_$.k9;
  var Long = kotlin_kotlin.$_$.w8;
  var Char = kotlin_kotlin.$_$.q8;
  var isObject = kotlin_kotlin.$_$.d7;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.q1;
  var Duration = kotlin_kotlin.$_$.o8;
  var Companion_getInstance = kotlin_kotlin.$_$.v2;
  var toIntOrNull = kotlin_kotlin.$_$.c8;
  var hashCode = kotlin_kotlin.$_$.s6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var isArray = kotlin_kotlin.$_$.u6;
  var arrayIterator = kotlin_kotlin.$_$.f6;
  var asList = kotlin_kotlin.$_$.u3;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var step = kotlin_kotlin.$_$.p7;
  var getValue = kotlin_kotlin.$_$.l4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var longArray = kotlin_kotlin.$_$.g7;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x2;
  var get_lastIndex = kotlin_kotlin.$_$.o4;
  var countTrailingZeroBits = kotlin_kotlin.$_$.i9;
  var KTypeParameter = kotlin_kotlin.$_$.t7;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.s;
  var contentHashCode = kotlin_kotlin.$_$.x3;
  var fillArrayVal = kotlin_kotlin.$_$.p6;
  var booleanArray = kotlin_kotlin.$_$.g6;
  var emptyMap = kotlin_kotlin.$_$.j4;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.w2;
  var isCharArray = kotlin_kotlin.$_$.x6;
  var charArray = kotlin_kotlin.$_$.j6;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.p2;
  var isDoubleArray = kotlin_kotlin.$_$.y6;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.q2;
  var isFloatArray = kotlin_kotlin.$_$.z6;
  var isLongArray = kotlin_kotlin.$_$.c7;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.r2;
  var isIntArray = kotlin_kotlin.$_$.a7;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.s2;
  var isShortArray = kotlin_kotlin.$_$.e7;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.o2;
  var isByteArray = kotlin_kotlin.$_$.w6;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.n2;
  var isBooleanArray = kotlin_kotlin.$_$.v6;
  var coerceAtLeast = kotlin_kotlin.$_$.n7;
  var copyOf = kotlin_kotlin.$_$.b4;
  var copyOf_0 = kotlin_kotlin.$_$.d4;
  var copyOf_1 = kotlin_kotlin.$_$.e4;
  var copyOf_2 = kotlin_kotlin.$_$.z3;
  var copyOf_3 = kotlin_kotlin.$_$.g4;
  var copyOf_4 = kotlin_kotlin.$_$.y3;
  var copyOf_5 = kotlin_kotlin.$_$.c4;
  var copyOf_6 = kotlin_kotlin.$_$.a4;
  var Unit = kotlin_kotlin.$_$.f9;
  var trimIndent = kotlin_kotlin.$_$.m8;
  var equals_0 = kotlin_kotlin.$_$.v7;
  var charSequenceLength = kotlin_kotlin.$_$.l6;
  var charSequenceGet = kotlin_kotlin.$_$.k6;
  var toString_0 = kotlin_kotlin.$_$.u1;
  var titlecase = kotlin_kotlin.$_$.z7;
  var isLowerCase = kotlin_kotlin.$_$.x7;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u2;
  var mapOf = kotlin_kotlin.$_$.t4;
  var lastOrNull = kotlin_kotlin.$_$.q4;
  var get_lastIndex_0 = kotlin_kotlin.$_$.p4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d2;
  var UInt = kotlin_kotlin.$_$.c9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.g2;
  var ULong = kotlin_kotlin.$_$.d9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.f2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.a2;
  var UByte = kotlin_kotlin.$_$.b9;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.z1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.j2;
  var UShort = kotlin_kotlin.$_$.e9;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.i2;
  var Annotation = kotlin_kotlin.$_$.p8;
  var get_indices = kotlin_kotlin.$_$.n4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var get_indices_0 = kotlin_kotlin.$_$.m4;
  var get_js = kotlin_kotlin.$_$.f7;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
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
    return deserializer.fz(this);
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
    return $handler == null ? this.j12(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.y11(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ez(this, value);
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
      var tmp = serializer_0(StringCompanionObject_getInstance()).dz();
      $this$buildSerialDescriptor.oz('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.pz_1.fd() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.oz('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.iz_1 = this$0.qz_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.pz_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.pz_1 = baseClass;
    this.qz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.rz_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.sz = function () {
    return this.pz_1;
  };
  PolymorphicSerializer.prototype.dz = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory();
      tmp$ret$0 = this.rz_1.r1();
    }
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.pz_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.uz(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.sz());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.tz(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.sz());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.dz();
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
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.yz_1 = missingFields;
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
    var isNullable = type.qd();
    var tmp$ret$4;
    {
      var tmp0_map = type.pd();
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
              var tmp0_requireNotNull = item.n4_1;
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
    if (typeArguments.i()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.zz(rootClass, null, 2, null);
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
          var tmp_2 = typeArguments.h(0).od();
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
    return tmp0_elvis_lhs == null ? _this__u8e3s4.a10(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
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
    if (_this__u8e3s4.dz().b10()) {
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
    this.c10_1 = original;
    this.d10_1 = kClass;
    this.e10_1 = this.c10_1.f10() + '<' + this.d10_1.fd() + '>';
  }
  ContextDescriptor.prototype.g10 = function () {
    return this.c10_1.g10();
  };
  ContextDescriptor.prototype.h10 = function () {
    return this.c10_1.h10();
  };
  ContextDescriptor.prototype.i10 = function () {
    return this.c10_1.i10();
  };
  ContextDescriptor.prototype.b10 = function () {
    return this.c10_1.b10();
  };
  ContextDescriptor.prototype.j10 = function () {
    return this.c10_1.j10();
  };
  ContextDescriptor.prototype.k10 = function (index) {
    return this.c10_1.k10(index);
  };
  ContextDescriptor.prototype.l10 = function (index) {
    return this.c10_1.l10(index);
  };
  ContextDescriptor.prototype.m10 = function (name) {
    return this.c10_1.m10(name);
  };
  ContextDescriptor.prototype.n10 = function (index) {
    return this.c10_1.n10(index);
  };
  ContextDescriptor.prototype.o10 = function (index) {
    return this.c10_1.o10(index);
  };
  ContextDescriptor.prototype.f10 = function () {
    return this.e10_1;
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
    return equals(this.c10_1, another.c10_1) ? another.d10_1.equals(this.d10_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.d10_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.e10_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.d10_1 + ', original: ' + this.c10_1 + ')';
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
          var tmp0_safe_receiver_0 = _this__u8e3s4.zz(tmp0_safe_receiver, null, 2, null);
          tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.dz();
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
      tmp = _this__u8e3s4.d10_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.p10_1);
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
    this.t10_1 = $this_elementDescriptors;
    this.s10_1 = $this_elementDescriptors.h10();
  }
  elementDescriptors$1$1.prototype.e = function () {
    return this.s10_1 > 0;
  };
  elementDescriptors$1$1.prototype.f = function () {
    var tmp = this.t10_1.h10();
    var tmp0_this = this;
    var tmp1 = tmp0_this.s10_1;
    tmp0_this.s10_1 = tmp1 - 1 | 0;
    return this.t10_1.l10(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.u10_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.d = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = new elementDescriptors$1$1(this.u10_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.jz_1.g(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda();
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.gz_1 = serialName;
    this.hz_1 = false;
    this.iz_1 = emptyList();
    this.jz_1 = ArrayList_init_$Create$_0();
    this.kz_1 = HashSet_init_$Create$();
    this.lz_1 = ArrayList_init_$Create$_0();
    this.mz_1 = ArrayList_init_$Create$_0();
    this.nz_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.v10 = function (elementName, descriptor, annotations, isOptional) {
    {
      var tmp0_require = this.kz_1.b(elementName);
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
      var tmp1_plusAssign = tmp0_this.jz_1;
      tmp1_plusAssign.b(elementName);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.lz_1;
      tmp2_plusAssign.b(descriptor);
    }
    var tmp2_this = this;
    {
      var tmp3_plusAssign = tmp2_this.mz_1;
      tmp3_plusAssign.b(annotations);
    }
    var tmp3_this = this;
    {
      var tmp4_plusAssign = tmp3_this.nz_1;
      tmp4_plusAssign.b(isOptional);
    }
  };
  ClassSerialDescriptorBuilder.prototype.oz = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.v10(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory();
      tmp$ret$0 = $this.h11_1.r1();
    }
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.g11_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.n10(it) + ': ' + this$0.l10(it).f10();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.w10_1 = serialName;
    this.x10_1 = kind;
    this.y10_1 = elementsCount;
    this.z10_1 = builder.iz_1;
    this.a11_1 = toHashSet(builder.jz_1);
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = builder.jz_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    tmp.b11_1 = tmp$ret$0;
    this.c11_1 = compactArray(builder.lz_1);
    var tmp_0 = this;
    var tmp$ret$1;
    {
      var tmp0_toTypedArray_0 = builder.mz_1;
      tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    }
    tmp_0.d11_1 = tmp$ret$1;
    this.e11_1 = toBooleanArray(builder.nz_1);
    var tmp_1 = this;
    var tmp$ret$4;
    {
      var tmp0_map = withIndex(this.b11_1);
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$2;
          {
            tmp$ret$2 = to(item.m2_1, item.l2_1);
          }
          tmp0_mapTo.b(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    tmp_1.f11_1 = toMap(tmp$ret$4);
    this.g11_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.h11_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.f10 = function () {
    return this.w10_1;
  };
  SerialDescriptorImpl.prototype.j10 = function () {
    return this.x10_1;
  };
  SerialDescriptorImpl.prototype.h10 = function () {
    return this.y10_1;
  };
  SerialDescriptorImpl.prototype.g10 = function () {
    return this.z10_1;
  };
  SerialDescriptorImpl.prototype.i11 = function () {
    return this.a11_1;
  };
  SerialDescriptorImpl.prototype.n10 = function (index) {
    return getChecked(this.b11_1, index);
  };
  SerialDescriptorImpl.prototype.m10 = function (name) {
    var tmp0_elvis_lhs = this.f11_1.b2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_2();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.k10 = function (index) {
    return getChecked(this.d11_1, index);
  };
  SerialDescriptorImpl.prototype.l10 = function (index) {
    return getChecked(this.c11_1, index);
  };
  SerialDescriptorImpl.prototype.o10 = function (index) {
    return getChecked_0(this.e11_1, index);
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
      if (!(this.f10() === other.f10())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.g11_1, tmp0__anonymous__q1qw7t.g11_1);
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.h10() === other.h10())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.h10();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.l10(index).f10() === other.l10(index).f10())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.l10(index).j10(), other.l10(index).j10())) {
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
    var tmp = until(0, this.y10_1);
    var tmp_0 = this.w10_1 + '(';
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.jz_1.g(), toList(typeParameters), sdBuilder);
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
    return ensureNotNull(getKClassFromExpression(this).fd());
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
  AbstractDecoder.prototype.j11 = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.k11 = function () {
    return true;
  };
  AbstractDecoder.prototype.l11 = function () {
    return null;
  };
  AbstractDecoder.prototype.m11 = function () {
    var tmp = this.j11();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.n11 = function () {
    var tmp = this.j11();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.o11 = function () {
    var tmp = this.j11();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.p11 = function () {
    var tmp = this.j11();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.q11 = function () {
    var tmp = this.j11();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.r11 = function () {
    var tmp = this.j11();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.s11 = function () {
    var tmp = this.j11();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.t11 = function () {
    var tmp = this.j11();
    return tmp instanceof Char ? tmp.d1_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.u11 = function () {
    var tmp = this.j11();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.v11 = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.w11 = function (deserializer, previousValue) {
    return this.x11(deserializer);
  };
  AbstractDecoder.prototype.y11 = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.z11 = function (descriptor) {
  };
  AbstractDecoder.prototype.a12 = function (descriptor, index) {
    return this.m11();
  };
  AbstractDecoder.prototype.b12 = function (descriptor, index) {
    return this.n11();
  };
  AbstractDecoder.prototype.c12 = function (descriptor, index) {
    return this.o11();
  };
  AbstractDecoder.prototype.d12 = function (descriptor, index) {
    return this.p11();
  };
  AbstractDecoder.prototype.e12 = function (descriptor, index) {
    return this.q11();
  };
  AbstractDecoder.prototype.f12 = function (descriptor, index) {
    return this.r11();
  };
  AbstractDecoder.prototype.g12 = function (descriptor, index) {
    return this.s11();
  };
  AbstractDecoder.prototype.h12 = function (descriptor, index) {
    return this.t11();
  };
  AbstractDecoder.prototype.i12 = function (descriptor, index) {
    return this.u11();
  };
  AbstractDecoder.prototype.j12 = function (descriptor, index, deserializer, previousValue) {
    return this.w11(deserializer, previousValue);
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.y11 = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.z11 = function (descriptor) {
  };
  AbstractEncoder.prototype.o12 = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.p12 = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.q12 = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.r12 = function (value) {
    return this.p12(value);
  };
  AbstractEncoder.prototype.s12 = function (value) {
    return this.p12(value);
  };
  AbstractEncoder.prototype.t12 = function (value) {
    return this.p12(value);
  };
  AbstractEncoder.prototype.u12 = function (value) {
    return this.p12(value);
  };
  AbstractEncoder.prototype.v12 = function (value) {
    return this.p12(value);
  };
  AbstractEncoder.prototype.w12 = function (value) {
    return this.p12(value);
  };
  AbstractEncoder.prototype.x12 = function (value) {
    return this.p12(value);
  };
  AbstractEncoder.prototype.y12 = function (value) {
    return this.p12(new Char(value));
  };
  AbstractEncoder.prototype.z12 = function (value) {
    return this.p12(value);
  };
  AbstractEncoder.prototype.a13 = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.b13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.r12(value);
  };
  AbstractEncoder.prototype.c13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.s12(value);
  };
  AbstractEncoder.prototype.d13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.t12(value);
  };
  AbstractEncoder.prototype.e13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.u12(value);
  };
  AbstractEncoder.prototype.f13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.v12(value);
  };
  AbstractEncoder.prototype.g13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.w12(value);
  };
  AbstractEncoder.prototype.h13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.x12(value);
  };
  AbstractEncoder.prototype.i13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.y12(value);
  };
  AbstractEncoder.prototype.j13 = function (descriptor, index, value) {
    if (this.o12(descriptor, index))
      this.z12(value);
  };
  AbstractEncoder.prototype.k13 = function (descriptor, index, serializer, value) {
    if (this.o12(descriptor, index))
      this.l13(serializer, value);
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.o13_1 = -1;
    this.p13_1 = -3;
  }
  Companion.prototype.q13 = function () {
    return this.o13_1;
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
    var composite = _this__u8e3s4.y11(descriptor);
    var result = block(composite);
    composite.z11(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.n13(descriptor, collectionSize);
    block(composite);
    composite.z11(descriptor);
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.y11(descriptor);
    block(composite);
    composite.z11(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.i12($this.dz(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.dz();
    return compositeDecoder.k12(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.ez = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    {
      var tmp0_encodeStructure = this.dz();
      var composite = encoder.y11(tmp0_encodeStructure);
      {
        composite.j13(this.dz(), 0, actualSerializer.dz().f10());
        var tmp = this.dz();
        var tmp$ret$0;
        {
          tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
        }
        composite.k13(tmp, 1, tmp$ret$0, value);
      }
      composite.z11(tmp0_encodeStructure);
    }
  };
  AbstractPolymorphicSerializer.prototype.fz = function (decoder) {
    var tmp$ret$5;
    {
      var tmp0_decodeStructure = this.dz();
      var composite = decoder.y11(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var klassName = null;
        var value = null;
        if (composite.l12()) {
          tmp$ret$0 = decodeSequentially_0(this, composite);
          break $l$block;
        }
        mainLoop: while (true) {
          var index = composite.m12(this.dz());
          Companion_getInstance_2();
          if (index === -1) {
            break mainLoop;
          } else {
            if (index === 0) {
              klassName = composite.i12(this.dz(), index);
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
                var tmp = this.dz();
                value = composite.k12(tmp, index, serializer, null, 8, null);
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
      composite.z11(tmp0_decodeStructure);
      tmp$ret$5 = result;
    }
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.tz = function (decoder, klassName) {
    return decoder.xz().r13(this.sz(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.uz = function (encoder, value) {
    return encoder.xz().s13(this.sz(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.fd();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.fd() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.t13_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  DurationSerializer.prototype.dz = function () {
    return this.t13_1;
  };
  DurationSerializer.prototype.u13 = function (encoder, value) {
    encoder.z12(Duration__toIsoString_impl_9h6wsm(value));
  };
  DurationSerializer.prototype.ez = function (encoder, value) {
    return this.u13(encoder, value instanceof Duration ? value.b6_1 : THROW_CCE());
  };
  DurationSerializer.prototype.v13 = function (decoder) {
    return Companion_getInstance().z5(decoder.u11());
  };
  DurationSerializer.prototype.fz = function (decoder) {
    return new Duration(this.v13(decoder));
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
    this.y13_1 = primitive.f10() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.f10 = function () {
    return this.y13_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.f10 = function () {
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
    this.z13_1 = elementDescriptor;
    this.a14_1 = 1;
  }
  ListLikeDescriptor.prototype.j10 = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.h10 = function () {
    return this.a14_1;
  };
  ListLikeDescriptor.prototype.n10 = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.m10 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.o10 = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.f10() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  ListLikeDescriptor.prototype.k10 = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.f10() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.l10 = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.f10() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return this.z13_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.z13_1, other.z13_1) ? this.f10() === other.f10() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.z13_1), 31) + getStringHashCode(this.f10()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.f10() + '(' + this.z13_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.d14_1 = serialName;
    this.e14_1 = keyDescriptor;
    this.f14_1 = valueDescriptor;
    this.g14_1 = 2;
  }
  MapLikeDescriptor.prototype.f10 = function () {
    return this.d14_1;
  };
  MapLikeDescriptor.prototype.j10 = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.h10 = function () {
    return this.g14_1;
  };
  MapLikeDescriptor.prototype.n10 = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.m10 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.o10 = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.f10() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  MapLikeDescriptor.prototype.k10 = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.f10() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.l10 = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.f10() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.e14_1;
        break;
      case 1:
        tmp = this.f14_1;
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
    if (!(this.f10() === other.f10()))
      return false;
    if (!equals(this.e14_1, other.e14_1))
      return false;
    if (!equals(this.f14_1, other.f14_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.f10());
    result = imul(31, result) + hashCode(this.e14_1) | 0;
    result = imul(31, result) + hashCode(this.f14_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.f10() + '(' + this.e14_1 + ', ' + this.f14_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.f10 = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.f10 = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.f10 = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.o14_1 = new PrimitiveArrayDescriptor(primitiveSerializer.dz());
  }
  PrimitiveArraySerializer.prototype.dz = function () {
    return this.o14_1;
  };
  PrimitiveArraySerializer.prototype.p14 = function (_this__u8e3s4) {
    return _this__u8e3s4.q14();
  };
  PrimitiveArraySerializer.prototype.r14 = function (_this__u8e3s4) {
    return _this__u8e3s4.s14();
  };
  PrimitiveArraySerializer.prototype.t14 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.fb(size);
  };
  PrimitiveArraySerializer.prototype.u14 = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.v14 = function (_this__u8e3s4) {
    return this.u14((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.w14 = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.x14 = function () {
    return this.z14(this.y14());
  };
  PrimitiveArraySerializer.prototype.d15 = function (encoder, value) {
    var size = this.e15(value);
    {
      var tmp0_encodeCollection = this.o14_1;
      var composite = encoder.n13(tmp0_encodeCollection, size);
      {
        this.c15(composite, value, size);
      }
      composite.z11(tmp0_encodeCollection);
    }
  };
  PrimitiveArraySerializer.prototype.ez = function (encoder, value) {
    return this.d15(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.f15 = function (encoder, value) {
    return this.d15(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.fz = function (decoder) {
    return this.g15(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.j15 = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.q14() + 1 | 0;
    return $handler == null ? this.fb(requiredCapacity) : $handler(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.h15_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.f15 = function (encoder, value) {
    var size = this.e15(value);
    {
      var tmp0_encodeCollection = this.dz();
      var composite = encoder.n13(tmp0_encodeCollection, size);
      {
        var iterator = this.v14(value);
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            composite.k13(this.dz(), index, this.h15_1, iterator.f());
          }
           while (inductionVariable < size);
      }
      composite.z11(tmp0_encodeCollection);
    }
  };
  CollectionLikeSerializer.prototype.ez = function (encoder, value) {
    return this.f15(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.i15 = function (decoder, builder, startIndex, size) {
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
        this.a15(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.a15 = function (decoder, index, builder, checkIndex) {
    var tmp = this.dz();
    this.w14(builder, index, decoder.k12(tmp, index, this.h15_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.n12($this.dz());
    $this.t14(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.g15 = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.z14(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.x14() : tmp1_elvis_lhs;
    var startIndex = this.p14(builder);
    var compositeDecoder = decoder.y11(this.dz());
    if (compositeDecoder.l12()) {
      this.i15(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.m12(this.dz());
        Companion_getInstance_2();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.b15(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.z11(this.dz());
    return this.r14(builder);
  };
  AbstractCollectionSerializer.prototype.fz = function (decoder) {
    return this.g15(decoder, null);
  };
  AbstractCollectionSerializer.prototype.b15 = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    return $handler == null ? this.a15(decoder, index, builder, checkIndex) : $handler(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.l15 = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  CollectionSerializer.prototype.e15 = function (_this__u8e3s4) {
    return this.l15((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.m15 = function (_this__u8e3s4) {
    return _this__u8e3s4.d();
  };
  CollectionSerializer.prototype.v14 = function (_this__u8e3s4) {
    return this.m15((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.o15_1 = kClass;
    this.p15_1 = new ArrayClassDesc(eSerializer.dz());
  }
  ReferenceArraySerializer.prototype.dz = function () {
    return this.p15_1;
  };
  ReferenceArraySerializer.prototype.q15 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.e15 = function (_this__u8e3s4) {
    return this.q15((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.r15 = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.v14 = function (_this__u8e3s4) {
    return this.r15((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.x14 = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.s15 = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ReferenceArraySerializer.prototype.p14 = function (_this__u8e3s4) {
    return this.s15(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.t15 = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.o15_1);
  };
  ReferenceArraySerializer.prototype.r14 = function (_this__u8e3s4) {
    return this.t15(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.u15 = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.z14 = function (_this__u8e3s4) {
    return this.u15((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.v15 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.fb(size);
  };
  ReferenceArraySerializer.prototype.t14 = function (_this__u8e3s4, size) {
    return this.v15(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.w15 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.qa(index, element);
  };
  ReferenceArraySerializer.prototype.w14 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.w15(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.x15_1 = keySerializer;
    this.y15_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.z15 = function () {
    return this.x15_1;
  };
  MapLikeSerializer.prototype.a16 = function () {
    return this.y15_1;
  };
  MapLikeSerializer.prototype.i15 = function (decoder, builder, startIndex, size) {
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
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    var step_0 = progression.z_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.a15(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.a15 = function (decoder, index, builder, checkIndex) {
    var tmp = this.dz();
    var key = decoder.k12(tmp, index, this.x15_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      {
        var tmp0_also = decoder.m12(this.dz());
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
    if (builder.y1(key)) {
      var tmp_3 = this.y15_1.dz().j10();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.j12(this.dz(), vIndex, this.y15_1, getValue(builder, key));
    } else {
      var tmp_4 = this.dz();
      tmp_1 = decoder.k12(tmp_4, vIndex, this.y15_1, null, 8, null);
    }
    var value = tmp_1;
    {
      builder.a(key, value);
    }
  };
  MapLikeSerializer.prototype.f15 = function (encoder, value) {
    var size = this.e15(value);
    {
      var tmp0_encodeCollection = this.dz();
      var composite = encoder.n13(tmp0_encodeCollection, size);
      {
        var iterator = this.v14(value);
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
                tmp$ret$1 = element.p1();
              }
              var k = tmp$ret$1;
              var tmp$ret$2;
              {
                tmp$ret$2 = element.r1();
              }
              var v = tmp$ret$2;
              var tmp = this.dz();
              var tmp0 = index;
              index = tmp0 + 1 | 0;
              composite.k13(tmp, tmp0, this.x15_1, k);
              var tmp_0 = this.dz();
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              composite.k13(tmp_0, tmp1, this.y15_1, v);
            }
          }
        }
      }
      composite.z11(tmp0_encodeCollection);
    }
  };
  MapLikeSerializer.prototype.ez = function (encoder, value) {
    return this.f15(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.d16_1 = new HashMapClassDesc(kSerializer.dz(), vSerializer.dz());
  }
  HashMapSerializer.prototype.dz = function () {
    return this.d16_1;
  };
  HashMapSerializer.prototype.e16 = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashMapSerializer.prototype.e15 = function (_this__u8e3s4) {
    return this.e16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.f16 = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.o().d();
    }
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.v14 = function (_this__u8e3s4) {
    return this.f16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.x14 = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.g16 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  HashMapSerializer.prototype.p14 = function (_this__u8e3s4) {
    return this.g16(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.h16 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.r14 = function (_this__u8e3s4) {
    return this.h16(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.i16 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.z14 = function (_this__u8e3s4) {
    return this.i16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.j16 = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.t14 = function (_this__u8e3s4, size) {
    return this.j16(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.m16_1 = new LinkedHashMapClassDesc(kSerializer.dz(), vSerializer.dz());
  }
  LinkedHashMapSerializer.prototype.dz = function () {
    return this.m16_1;
  };
  LinkedHashMapSerializer.prototype.e16 = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashMapSerializer.prototype.e15 = function (_this__u8e3s4) {
    return this.e16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.f16 = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.o().d();
    }
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.v14 = function (_this__u8e3s4) {
    return this.f16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.x14 = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.n16 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.g(), 2);
  };
  LinkedHashMapSerializer.prototype.p14 = function (_this__u8e3s4) {
    return this.n16(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.o16 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.r14 = function (_this__u8e3s4) {
    return this.o16(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.i16 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.z14 = function (_this__u8e3s4) {
    return this.i16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.p16 = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.t14 = function (_this__u8e3s4, size) {
    return this.p16(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.r16_1 = new ArrayListClassDesc(element.dz());
  }
  ArrayListSerializer.prototype.dz = function () {
    return this.r16_1;
  };
  ArrayListSerializer.prototype.x14 = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.s16 = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  ArrayListSerializer.prototype.p14 = function (_this__u8e3s4) {
    return this.s16(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.t16 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.r14 = function (_this__u8e3s4) {
    return this.t16(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.u16 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.z14 = function (_this__u8e3s4) {
    return this.u16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.v16 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.fb(size);
  };
  ArrayListSerializer.prototype.t14 = function (_this__u8e3s4, size) {
    return this.v16(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.w16 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.qa(index, element);
  };
  ArrayListSerializer.prototype.w14 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.w16(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.y16_1 = new HashSetClassDesc(eSerializer.dz());
  }
  HashSetSerializer.prototype.dz = function () {
    return this.y16_1;
  };
  HashSetSerializer.prototype.x14 = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.z16 = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  HashSetSerializer.prototype.p14 = function (_this__u8e3s4) {
    return this.z16(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.a17 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.r14 = function (_this__u8e3s4) {
    return this.a17(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.b17 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.z14 = function (_this__u8e3s4) {
    return this.b17((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.c17 = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.t14 = function (_this__u8e3s4, size) {
    return this.c17(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.d17 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  HashSetSerializer.prototype.w14 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.d17(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.f17_1 = new LinkedHashSetClassDesc(eSerializer.dz());
  }
  LinkedHashSetSerializer.prototype.dz = function () {
    return this.f17_1;
  };
  LinkedHashSetSerializer.prototype.x14 = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashSet_init_$Create$();
    }
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.g17 = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  LinkedHashSetSerializer.prototype.p14 = function (_this__u8e3s4) {
    return this.g17(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.h17 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.r14 = function (_this__u8e3s4) {
    return this.h17(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.b17 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.z14 = function (_this__u8e3s4) {
    return this.b17((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.i17 = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.t14 = function (_this__u8e3s4, size) {
    return this.i17(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.j17 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b(element);
  };
  LinkedHashSetSerializer.prototype.w14 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.j17(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.k17_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).j6(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.o17_1[slot] = $this.o17_1[slot].ih((new Long(1, 0)).j6(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.o17_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.o17_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.hh());
          slotMarks = slotMarks.ih((new Long(1, 0)).j6(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.m17_1($this.l17_1, index)) {
            $this.o17_1[slot] = slotMarks;
            return index;
          }
        }
        $this.o17_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_2();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_3();
    this.l17_1 = descriptor;
    this.m17_1 = readIfAbsent;
    var elementsCount = this.l17_1.h10();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).j6(elementsCount);
      }
      tmp.n17_1 = tmp_0;
      this.o17_1 = Companion_getInstance_3().k17_1;
    } else {
      this.n17_1 = new Long(0, 0);
      this.o17_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.p17 = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.n17_1 = this.n17_1.ih((new Long(1, 0)).j6(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.q17 = function () {
    var elementsCount = this.l17_1.h10();
    while (!this.n17_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.n17_1.hh());
      this.n17_1 = this.n17_1.ih((new Long(1, 0)).j6(index));
      if (this.m17_1(this.l17_1, index)) {
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
    this.d18_1 = true;
  }
  InlineClassDescriptor.prototype.i10 = function () {
    return this.d18_1;
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
      if (!(this.f10() === other.f10())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = tmp0__anonymous__q1qw7t.d18_1 ? contentEquals(this.q18(), tmp0__anonymous__q1qw7t.q18()) : false;
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.h10() === other.h10())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.h10();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.l10(index).f10() === other.l10(index).f10())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.l10(index).j10(), other.l10(index).j10())) {
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
    this.r18_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.s18 = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.r18_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.dz = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.ez = function (encoder, value) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.prototype.fz = function (decoder) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.u18_1 = serializer;
    this.v18_1 = new SerialDescriptorForNullable(this.u18_1.dz());
  }
  NullableSerializer.prototype.dz = function () {
    return this.v18_1;
  };
  NullableSerializer.prototype.w18 = function (encoder, value) {
    if (!(value == null)) {
      encoder.m13();
      encoder.l13(this.u18_1, value);
    } else {
      encoder.q12();
    }
  };
  NullableSerializer.prototype.ez = function (encoder, value) {
    return this.w18(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.fz = function (decoder) {
    return decoder.k11() ? decoder.x11(this.u18_1) : decoder.l11();
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
    if (!equals(this.u18_1, other.u18_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.u18_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function SerialDescriptorForNullable(original) {
    this.p10_1 = original;
    this.q10_1 = this.p10_1.f10() + '?';
    this.r10_1 = cachedSerialNames(this.p10_1);
  }
  SerialDescriptorForNullable.prototype.g10 = function () {
    return this.p10_1.g10();
  };
  SerialDescriptorForNullable.prototype.h10 = function () {
    return this.p10_1.h10();
  };
  SerialDescriptorForNullable.prototype.i10 = function () {
    return this.p10_1.i10();
  };
  SerialDescriptorForNullable.prototype.j10 = function () {
    return this.p10_1.j10();
  };
  SerialDescriptorForNullable.prototype.k10 = function (index) {
    return this.p10_1.k10(index);
  };
  SerialDescriptorForNullable.prototype.l10 = function (index) {
    return this.p10_1.l10(index);
  };
  SerialDescriptorForNullable.prototype.m10 = function (name) {
    return this.p10_1.m10(name);
  };
  SerialDescriptorForNullable.prototype.n10 = function (index) {
    return this.p10_1.n10(index);
  };
  SerialDescriptorForNullable.prototype.o10 = function (index) {
    return this.p10_1.o10(index);
  };
  SerialDescriptorForNullable.prototype.f10 = function () {
    return this.q10_1;
  };
  SerialDescriptorForNullable.prototype.i11 = function () {
    return this.r10_1;
  };
  SerialDescriptorForNullable.prototype.b10 = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.p10_1, other.p10_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.p10_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.p10_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.iz_1 = this$0.y18_1;
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
    this.x18_1 = objectInstance;
    this.y18_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z18_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.dz = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory_0();
      tmp$ret$0 = this.z18_1.r1();
    }
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.ez = function (encoder, value) {
    encoder.y11(this.dz()).z11(this.dz());
  };
  ObjectSerializer.prototype.fz = function (decoder) {
    var tmp$ret$1;
    {
      var tmp0_decodeStructure = this.dz();
      var composite = decoder.y11(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var index = composite.m12(this.dz());
        Companion_getInstance_2();
        if (index === -1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          throw SerializationException_init_$Create$('Unexpected index ' + index);
        }
      }
      var result = tmp$ret$0;
      composite.z11(tmp0_decodeStructure);
      tmp$ret$1 = result;
    }
    return this.x18_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.dz();
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
          tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.i();
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
    var t = _this__u8e3s4.od();
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
      return _this__u8e3s4.i11();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.h10());
    var inductionVariable = 0;
    var last = _this__u8e3s4.h10();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_plusAssign = _this__u8e3s4.n10(i);
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
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.f10());
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
                tmp$ret$0 = element.f10();
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
                tmp$ret$5 = element_0.j10();
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
      tmp$ret$0 = $this.n18_1.r1();
    }
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory_0();
      tmp$ret$0 = $this.p18_1.r1();
    }
    return tmp$ret$0;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.f18_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s18();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.f18_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t18();
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
                tmp$ret$0 = item.dz();
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
      return hashCodeImpl(this$0, this$0.q18());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.n10(i) + ': ' + this$0.l10(i).f10();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.e18_1 = serialName;
    this.f18_1 = generatedSerializer;
    this.g18_1 = elementsCount;
    this.h18_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.g18_1;
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
    tmp.i18_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    {
      var tmp0_arrayOfNulls = this.g18_1;
      tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    tmp_4.j18_1 = tmp$ret$2;
    this.k18_1 = null;
    this.l18_1 = booleanArray(this.g18_1);
    this.m18_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.n18_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.o18_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.p18_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.f10 = function () {
    return this.e18_1;
  };
  PluginGeneratedSerialDescriptor.prototype.h10 = function () {
    return this.g18_1;
  };
  PluginGeneratedSerialDescriptor.prototype.j10 = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.g10 = function () {
    var tmp0_elvis_lhs = this.k18_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.i11 = function () {
    return this.m18_1.c2();
  };
  PluginGeneratedSerialDescriptor.prototype.q18 = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = typeParameterDescriptors$factory();
      tmp$ret$0 = this.o18_1.r1();
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.l10 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).dz();
  };
  PluginGeneratedSerialDescriptor.prototype.o10 = function (index) {
    return getChecked_0(this.l18_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.k10 = function (index) {
    var tmp0_elvis_lhs = getChecked(this.j18_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.n10 = function (index) {
    return getChecked(this.i18_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.m10 = function (name) {
    var tmp0_elvis_lhs = this.m18_1.b2(name);
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
      if (!(this.f10() === other.f10())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.q18(), tmp0__anonymous__q1qw7t.q18());
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.h10() === other.h10())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.h10();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.l10(index).f10() === other.l10(index).f10())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.l10(index).j10(), other.l10(index).j10())) {
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
    var tmp = until(0, this.g18_1);
    var tmp_0 = this.f10() + '(';
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
      return receiver.q18();
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
  CharArraySerializer_0.prototype.d19 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.e15 = function (_this__u8e3s4) {
    return this.d19((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.e19 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.z14 = function (_this__u8e3s4) {
    return this.e19((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.y14 = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.f19 = function (decoder, index, builder, checkIndex) {
    builder.i19(decoder.h12(this.dz(), index));
  };
  CharArraySerializer_0.prototype.a15 = function (decoder, index, builder, checkIndex) {
    return this.f19(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.j19 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.i13(this.dz(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.c15 = function (encoder, content, size) {
    return this.j19(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  DoubleArraySerializer_0.prototype.m19 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.e15 = function (_this__u8e3s4) {
    return this.m19((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.n19 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.z14 = function (_this__u8e3s4) {
    return this.n19((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.y14 = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.o19 = function (decoder, index, builder, checkIndex) {
    builder.r19(decoder.g12(this.dz(), index));
  };
  DoubleArraySerializer_0.prototype.a15 = function (decoder, index, builder, checkIndex) {
    return this.o19(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.s19 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.h13(this.dz(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.c15 = function (encoder, content, size) {
    return this.s19(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  FloatArraySerializer_0.prototype.v19 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.e15 = function (_this__u8e3s4) {
    return this.v19((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.w19 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.z14 = function (_this__u8e3s4) {
    return this.w19((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.y14 = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.x19 = function (decoder, index, builder, checkIndex) {
    builder.a1a(decoder.f12(this.dz(), index));
  };
  FloatArraySerializer_0.prototype.a15 = function (decoder, index, builder, checkIndex) {
    return this.x19(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.b1a = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.g13(this.dz(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.c15 = function (encoder, content, size) {
    return this.b1a(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  LongArraySerializer_0.prototype.e1a = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.e15 = function (_this__u8e3s4) {
    return this.e1a((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.f1a = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.z14 = function (_this__u8e3s4) {
    return this.f1a((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.y14 = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.g1a = function (decoder, index, builder, checkIndex) {
    builder.j1a(decoder.e12(this.dz(), index));
  };
  LongArraySerializer_0.prototype.a15 = function (decoder, index, builder, checkIndex) {
    return this.g1a(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.k1a = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.f13(this.dz(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.c15 = function (encoder, content, size) {
    return this.k1a(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  IntArraySerializer_0.prototype.n1a = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.e15 = function (_this__u8e3s4) {
    return this.n1a((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.o1a = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.z14 = function (_this__u8e3s4) {
    return this.o1a((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.y14 = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.p1a = function (decoder, index, builder, checkIndex) {
    builder.s1a(decoder.d12(this.dz(), index));
  };
  IntArraySerializer_0.prototype.a15 = function (decoder, index, builder, checkIndex) {
    return this.p1a(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.t1a = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.e13(this.dz(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.c15 = function (encoder, content, size) {
    return this.t1a(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  ShortArraySerializer_0.prototype.w1a = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.e15 = function (_this__u8e3s4) {
    return this.w1a((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.x1a = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.z14 = function (_this__u8e3s4) {
    return this.x1a((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.y14 = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.y1a = function (decoder, index, builder, checkIndex) {
    builder.b1b(decoder.c12(this.dz(), index));
  };
  ShortArraySerializer_0.prototype.a15 = function (decoder, index, builder, checkIndex) {
    return this.y1a(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.c1b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.d13(this.dz(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.c15 = function (encoder, content, size) {
    return this.c1b(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  ByteArraySerializer_0.prototype.f1b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.e15 = function (_this__u8e3s4) {
    return this.f1b((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.g1b = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.z14 = function (_this__u8e3s4) {
    return this.g1b((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.y14 = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.h1b = function (decoder, index, builder, checkIndex) {
    builder.k1b(decoder.b12(this.dz(), index));
  };
  ByteArraySerializer_0.prototype.a15 = function (decoder, index, builder, checkIndex) {
    return this.h1b(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.l1b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.c13(this.dz(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.c15 = function (encoder, content, size) {
    return this.l1b(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  BooleanArraySerializer_0.prototype.o1b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.e15 = function (_this__u8e3s4) {
    return this.o1b((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.p1b = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.z14 = function (_this__u8e3s4) {
    return this.p1b((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.y14 = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.q1b = function (decoder, index, builder, checkIndex) {
    builder.t1b(decoder.a12(this.dz(), index));
  };
  BooleanArraySerializer_0.prototype.a15 = function (decoder, index, builder, checkIndex) {
    return this.q1b(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.u1b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.b13(this.dz(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.c15 = function (encoder, content, size) {
    return this.u1b(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
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
    this.g19_1 = bufferWithData;
    this.h19_1 = bufferWithData.length;
    this.fb(10);
  }
  CharArrayBuilder.prototype.q14 = function () {
    return this.h19_1;
  };
  CharArrayBuilder.prototype.fb = function (requiredCapacity) {
    if (this.g19_1.length < requiredCapacity)
      this.g19_1 = copyOf(this.g19_1, coerceAtLeast(requiredCapacity, imul(this.g19_1.length, 2)));
  };
  CharArrayBuilder.prototype.i19 = function (c) {
    this.j15(0, 1, null);
    var tmp = this.g19_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.h19_1;
    tmp0_this.h19_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.s14 = function () {
    return copyOf(this.g19_1, this.h19_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p19_1 = bufferWithData;
    this.q19_1 = bufferWithData.length;
    this.fb(10);
  }
  DoubleArrayBuilder.prototype.q14 = function () {
    return this.q19_1;
  };
  DoubleArrayBuilder.prototype.fb = function (requiredCapacity) {
    if (this.p19_1.length < requiredCapacity)
      this.p19_1 = copyOf_0(this.p19_1, coerceAtLeast(requiredCapacity, imul(this.p19_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.r19 = function (c) {
    this.j15(0, 1, null);
    var tmp = this.p19_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.q19_1;
    tmp0_this.q19_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.s14 = function () {
    return copyOf_0(this.p19_1, this.q19_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y19_1 = bufferWithData;
    this.z19_1 = bufferWithData.length;
    this.fb(10);
  }
  FloatArrayBuilder.prototype.q14 = function () {
    return this.z19_1;
  };
  FloatArrayBuilder.prototype.fb = function (requiredCapacity) {
    if (this.y19_1.length < requiredCapacity)
      this.y19_1 = copyOf_1(this.y19_1, coerceAtLeast(requiredCapacity, imul(this.y19_1.length, 2)));
  };
  FloatArrayBuilder.prototype.a1a = function (c) {
    this.j15(0, 1, null);
    var tmp = this.y19_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.z19_1;
    tmp0_this.z19_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.s14 = function () {
    return copyOf_1(this.y19_1, this.z19_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h1a_1 = bufferWithData;
    this.i1a_1 = bufferWithData.length;
    this.fb(10);
  }
  LongArrayBuilder.prototype.q14 = function () {
    return this.i1a_1;
  };
  LongArrayBuilder.prototype.fb = function (requiredCapacity) {
    if (this.h1a_1.length < requiredCapacity)
      this.h1a_1 = copyOf_2(this.h1a_1, coerceAtLeast(requiredCapacity, imul(this.h1a_1.length, 2)));
  };
  LongArrayBuilder.prototype.j1a = function (c) {
    this.j15(0, 1, null);
    var tmp = this.h1a_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.i1a_1;
    tmp0_this.i1a_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.s14 = function () {
    return copyOf_2(this.h1a_1, this.i1a_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q1a_1 = bufferWithData;
    this.r1a_1 = bufferWithData.length;
    this.fb(10);
  }
  IntArrayBuilder.prototype.q14 = function () {
    return this.r1a_1;
  };
  IntArrayBuilder.prototype.fb = function (requiredCapacity) {
    if (this.q1a_1.length < requiredCapacity)
      this.q1a_1 = copyOf_3(this.q1a_1, coerceAtLeast(requiredCapacity, imul(this.q1a_1.length, 2)));
  };
  IntArrayBuilder.prototype.s1a = function (c) {
    this.j15(0, 1, null);
    var tmp = this.q1a_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.r1a_1;
    tmp0_this.r1a_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.s14 = function () {
    return copyOf_3(this.q1a_1, this.r1a_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z1a_1 = bufferWithData;
    this.a1b_1 = bufferWithData.length;
    this.fb(10);
  }
  ShortArrayBuilder.prototype.q14 = function () {
    return this.a1b_1;
  };
  ShortArrayBuilder.prototype.fb = function (requiredCapacity) {
    if (this.z1a_1.length < requiredCapacity)
      this.z1a_1 = copyOf_4(this.z1a_1, coerceAtLeast(requiredCapacity, imul(this.z1a_1.length, 2)));
  };
  ShortArrayBuilder.prototype.b1b = function (c) {
    this.j15(0, 1, null);
    var tmp = this.z1a_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.a1b_1;
    tmp0_this.a1b_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.s14 = function () {
    return copyOf_4(this.z1a_1, this.a1b_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i1b_1 = bufferWithData;
    this.j1b_1 = bufferWithData.length;
    this.fb(10);
  }
  ByteArrayBuilder.prototype.q14 = function () {
    return this.j1b_1;
  };
  ByteArrayBuilder.prototype.fb = function (requiredCapacity) {
    if (this.i1b_1.length < requiredCapacity)
      this.i1b_1 = copyOf_5(this.i1b_1, coerceAtLeast(requiredCapacity, imul(this.i1b_1.length, 2)));
  };
  ByteArrayBuilder.prototype.k1b = function (c) {
    this.j15(0, 1, null);
    var tmp = this.i1b_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.j1b_1;
    tmp0_this.j1b_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.s14 = function () {
    return copyOf_5(this.i1b_1, this.j1b_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r1b_1 = bufferWithData;
    this.s1b_1 = bufferWithData.length;
    this.fb(10);
  }
  BooleanArrayBuilder.prototype.q14 = function () {
    return this.s1b_1;
  };
  BooleanArrayBuilder.prototype.fb = function (requiredCapacity) {
    if (this.r1b_1.length < requiredCapacity)
      this.r1b_1 = copyOf_6(this.r1b_1, coerceAtLeast(requiredCapacity, imul(this.r1b_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.t1b = function (c) {
    this.j15(0, 1, null);
    var tmp = this.r1b_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.s1b_1;
    tmp0_this.s1b_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.s14 = function () {
    return copyOf_6(this.r1b_1, this.s1b_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.v1b_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.dz = function () {
    return this.v1b_1;
  };
  StringSerializer.prototype.w1b = function (encoder, value) {
    return encoder.z12(value);
  };
  StringSerializer.prototype.ez = function (encoder, value) {
    return this.w1b(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.fz = function (decoder) {
    return decoder.u11();
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
    this.x1b_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.dz = function () {
    return this.x1b_1;
  };
  CharSerializer.prototype.y1b = function (encoder, value) {
    return encoder.y12(value);
  };
  CharSerializer.prototype.ez = function (encoder, value) {
    return this.y1b(encoder, value instanceof Char ? value.d1_1 : THROW_CCE());
  };
  CharSerializer.prototype.z1b = function (decoder) {
    return decoder.t11();
  };
  CharSerializer.prototype.fz = function (decoder) {
    return new Char(this.z1b(decoder));
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
    this.a1c_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.dz = function () {
    return this.a1c_1;
  };
  DoubleSerializer.prototype.b1c = function (encoder, value) {
    return encoder.x12(value);
  };
  DoubleSerializer.prototype.ez = function (encoder, value) {
    return this.b1c(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.fz = function (decoder) {
    return decoder.s11();
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
    this.c1c_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.dz = function () {
    return this.c1c_1;
  };
  FloatSerializer.prototype.d1c = function (encoder, value) {
    return encoder.w12(value);
  };
  FloatSerializer.prototype.ez = function (encoder, value) {
    return this.d1c(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.fz = function (decoder) {
    return decoder.r11();
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
    this.e1c_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.dz = function () {
    return this.e1c_1;
  };
  LongSerializer.prototype.f1c = function (encoder, value) {
    return encoder.v12(value);
  };
  LongSerializer.prototype.ez = function (encoder, value) {
    return this.f1c(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.fz = function (decoder) {
    return decoder.q11();
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
    this.g1c_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.dz = function () {
    return this.g1c_1;
  };
  IntSerializer.prototype.h1c = function (encoder, value) {
    return encoder.u12(value);
  };
  IntSerializer.prototype.ez = function (encoder, value) {
    return this.h1c(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.fz = function (decoder) {
    return decoder.p11();
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
    this.i1c_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.dz = function () {
    return this.i1c_1;
  };
  ShortSerializer.prototype.j1c = function (encoder, value) {
    return encoder.t12(value);
  };
  ShortSerializer.prototype.ez = function (encoder, value) {
    return this.j1c(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.fz = function (decoder) {
    return decoder.o11();
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
    this.k1c_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.dz = function () {
    return this.k1c_1;
  };
  ByteSerializer.prototype.l1c = function (encoder, value) {
    return encoder.s12(value);
  };
  ByteSerializer.prototype.ez = function (encoder, value) {
    return this.l1c(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.fz = function (decoder) {
    return decoder.n11();
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
    this.m1c_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.dz = function () {
    return this.m1c_1;
  };
  BooleanSerializer.prototype.n1c = function (encoder, value) {
    return encoder.r12(value);
  };
  BooleanSerializer.prototype.ez = function (encoder, value) {
    return this.n1c(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.fz = function (decoder) {
    return decoder.m11();
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
    this.o1c_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.dz = function () {
    return this.o1c_1.dz();
  };
  UnitSerializer.prototype.p1c = function (decoder) {
    this.o1c_1.fz(decoder);
  };
  UnitSerializer.prototype.fz = function (decoder) {
    this.p1c(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.q1c = function (encoder, value) {
    this.o1c_1.ez(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.ez = function (encoder, value) {
    return this.q1c(encoder, value instanceof Unit ? value : THROW_CCE());
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
    this.r1c_1 = serialName;
    this.s1c_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.f10 = function () {
    return this.r1c_1;
  };
  PrimitiveSerialDescriptor_0.prototype.j10 = function () {
    return this.s1c_1;
  };
  PrimitiveSerialDescriptor_0.prototype.h10 = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.n10 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.m10 = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.o10 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.l10 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.k10 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.r1c_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().b2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().c2();
    var tmp0_iterator = keys.d();
    while (tmp0_iterator.e()) {
      var primitive = tmp0_iterator.f();
      var simpleName = capitalize(ensureNotNull(primitive.fd()));
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
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().ye(), serializer_0(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().bf(), CharArraySerializer()), to(PrimitiveClasses_getInstance().we(), serializer_2(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().hf(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ve(), serializer_3(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().gf(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().ff(), LongArraySerializer()), to(PrimitiveClasses_getInstance().ue(), serializer_5(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ef(), IntArraySerializer()), to(PrimitiveClasses_getInstance().te(), serializer_6(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().df(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().se(), serializer_7(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().cf(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().re(), serializer_8(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().af(), BooleanArraySerializer()), to(getKClass(Unit), serializer_9(Unit_getInstance())), to(getKClass(Duration), serializer_10(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.v1c = function (_this__u8e3s4, index) {
    return this.x1c(this.w1c(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.x1c = function (nestedName) {
    var tmp0_elvis_lhs = this.a1d();
    return this.b1d(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.w1c = function (desc, index) {
    return desc.n10(index);
  };
  NamedValueDecoder.prototype.b1d = function (parentName, childName) {
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
    $this.o1d(tag);
    var r = block();
    if (!$this.z1c_1) {
      $this.p1d();
    }
    $this.z1c_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.w11($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    tmp.y1c_1 = tmp$ret$0;
    this.z1c_1 = false;
  }
  TaggedDecoder.prototype.xz = function () {
    return EmptySerializersModule_0();
  };
  TaggedDecoder.prototype.c1d = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.d1d = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.e1d = function (tag) {
    var tmp = this.c1d(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.f1d = function (tag) {
    var tmp = this.c1d(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.g1d = function (tag) {
    var tmp = this.c1d(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.h1d = function (tag) {
    var tmp = this.c1d(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.i1d = function (tag) {
    var tmp = this.c1d(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.j1d = function (tag) {
    var tmp = this.c1d(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.k1d = function (tag) {
    var tmp = this.c1d(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.l1d = function (tag) {
    var tmp = this.c1d(tag);
    return tmp instanceof Char ? tmp.d1_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.m1d = function (tag) {
    var tmp = this.c1d(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.n1d = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    {
      {
      }
      {
        this.o1d(tag);
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.w11 = function (deserializer, previousValue) {
    return this.x11(deserializer);
  };
  TaggedDecoder.prototype.v11 = function (descriptor) {
    return this.n1d(this.p1d(), descriptor);
  };
  TaggedDecoder.prototype.k11 = function () {
    var tmp0_elvis_lhs = this.a1d();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.d1d(currentTag);
  };
  TaggedDecoder.prototype.l11 = function () {
    return null;
  };
  TaggedDecoder.prototype.m11 = function () {
    return this.e1d(this.p1d());
  };
  TaggedDecoder.prototype.n11 = function () {
    return this.f1d(this.p1d());
  };
  TaggedDecoder.prototype.o11 = function () {
    return this.g1d(this.p1d());
  };
  TaggedDecoder.prototype.p11 = function () {
    return this.h1d(this.p1d());
  };
  TaggedDecoder.prototype.q11 = function () {
    return this.i1d(this.p1d());
  };
  TaggedDecoder.prototype.r11 = function () {
    return this.j1d(this.p1d());
  };
  TaggedDecoder.prototype.s11 = function () {
    return this.k1d(this.p1d());
  };
  TaggedDecoder.prototype.t11 = function () {
    return this.l1d(this.p1d());
  };
  TaggedDecoder.prototype.u11 = function () {
    return this.m1d(this.p1d());
  };
  TaggedDecoder.prototype.y11 = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.z11 = function (descriptor) {
  };
  TaggedDecoder.prototype.a12 = function (descriptor, index) {
    return this.e1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.b12 = function (descriptor, index) {
    return this.f1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.c12 = function (descriptor, index) {
    return this.g1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.d12 = function (descriptor, index) {
    return this.h1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.e12 = function (descriptor, index) {
    return this.i1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.f12 = function (descriptor, index) {
    return this.j1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.g12 = function (descriptor, index) {
    return this.k1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.h12 = function (descriptor, index) {
    return this.l1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.i12 = function (descriptor, index) {
    return this.m1d(this.v1c(descriptor, index));
  };
  TaggedDecoder.prototype.j12 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.v1c(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.a1d = function () {
    return lastOrNull(this.y1c_1);
  };
  TaggedDecoder.prototype.o1d = function (name) {
    this.y1c_1.b(name);
  };
  TaggedDecoder.prototype.p1d = function () {
    var r = this.y1c_1.a3(get_lastIndex_0(this.y1c_1));
    this.z1c_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.q1d_1 = key;
    this.r1d_1 = value;
  }
  MapEntry.prototype.p1 = function () {
    return this.q1d_1;
  };
  MapEntry.prototype.r1 = function () {
    return this.r1d_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.q1d_1 + ', value=' + this.r1d_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.q1d_1 == null ? 0 : hashCode(this.q1d_1);
    result = imul(result, 31) + (this.r1d_1 == null ? 0 : hashCode(this.r1d_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.q1d_1, tmp0_other_with_cast.q1d_1))
      return false;
    if (!equals(this.r1d_1, tmp0_other_with_cast.r1d_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.dz();
      $this$buildSerialDescriptor.oz('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.dz();
      $this$buildSerialDescriptor.oz('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.u1d_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.dz = function () {
    return this.u1d_1;
  };
  MapEntrySerializer_0.prototype.v1d = function (_this__u8e3s4) {
    return _this__u8e3s4.p1();
  };
  MapEntrySerializer_0.prototype.w1d = function (_this__u8e3s4) {
    return this.v1d((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.x1d = function (_this__u8e3s4) {
    return _this__u8e3s4.r1();
  };
  MapEntrySerializer_0.prototype.y1d = function (_this__u8e3s4) {
    return this.x1d((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.z1d = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.dz();
      $this$buildClassSerialDescriptor.oz('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.dz();
      $this$buildClassSerialDescriptor.oz('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.f1e_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.dz = function () {
    return this.f1e_1;
  };
  PairSerializer_0.prototype.g1e = function (_this__u8e3s4) {
    return _this__u8e3s4.w2_1;
  };
  PairSerializer_0.prototype.w1d = function (_this__u8e3s4) {
    return this.g1e(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.h1e = function (_this__u8e3s4) {
    return _this__u8e3s4.x2_1;
  };
  PairSerializer_0.prototype.y1d = function (_this__u8e3s4) {
    return this.h1e(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.z1d = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function decodeSequentially_1($this, composite) {
    var a = composite.k12($this.l1e_1, 0, $this.i1e_1, null, 8, null);
    var b = composite.k12($this.l1e_1, 1, $this.j1e_1, null, 8, null);
    var c = composite.k12($this.l1e_1, 2, $this.k1e_1, null, 8, null);
    composite.z11($this.l1e_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.m12($this.l1e_1);
      Companion_getInstance_2();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.k12($this.l1e_1, 0, $this.i1e_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.k12($this.l1e_1, 1, $this.j1e_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.k12($this.l1e_1, 2, $this.k1e_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.z11($this.l1e_1);
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
      var tmp = this$0.i1e_1.dz();
      $this$buildClassSerialDescriptor.oz('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.j1e_1.dz();
      $this$buildClassSerialDescriptor.oz('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.k1e_1.dz();
      $this$buildClassSerialDescriptor.oz('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.i1e_1 = aSerializer;
    this.j1e_1 = bSerializer;
    this.k1e_1 = cSerializer;
    var tmp = this;
    tmp.l1e_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.dz = function () {
    return this.l1e_1;
  };
  TripleSerializer_0.prototype.m1e = function (encoder, value) {
    var structuredEncoder = encoder.y11(this.l1e_1);
    structuredEncoder.k13(this.l1e_1, 0, this.i1e_1, value.d7_1);
    structuredEncoder.k13(this.l1e_1, 1, this.j1e_1, value.e7_1);
    structuredEncoder.k13(this.l1e_1, 2, this.k1e_1, value.f7_1);
    structuredEncoder.z11(this.l1e_1);
  };
  TripleSerializer_0.prototype.ez = function (encoder, value) {
    return this.m1e(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.fz = function (decoder) {
    var composite = decoder.y11(this.l1e_1);
    if (composite.l12()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.a1e_1 = keySerializer;
    this.b1e_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.c1e = function (encoder, value) {
    var structuredEncoder = encoder.y11(this.dz());
    structuredEncoder.k13(this.dz(), 0, this.a1e_1, this.w1d(value));
    structuredEncoder.k13(this.dz(), 1, this.b1e_1, this.y1d(value));
    structuredEncoder.z11(this.dz());
  };
  KeyValueSerializer.prototype.ez = function (encoder, value) {
    return this.c1e(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.fz = function (decoder) {
    var composite = decoder.y11(this.dz());
    if (composite.l12()) {
      var tmp = this.dz();
      var key = composite.k12(tmp, 0, this.a1e_1, null, 8, null);
      var tmp_0 = this.dz();
      var value = composite.k12(tmp_0, 1, this.b1e_1, null, 8, null);
      return this.z1d(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.m12(this.dz());
      Companion_getInstance_2();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.dz();
          key_0 = composite.k12(tmp_1, 0, this.a1e_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.dz();
            value_0 = composite.k12(tmp_2, 1, this.b1e_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.z11(this.dz());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.z1d(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
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
    this.n1e_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.dz = function () {
    return this.n1e_1;
  };
  UIntSerializer.prototype.o1e = function (encoder, value) {
    var tmp = encoder.a13(this.n1e_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    }
    tmp.u12(tmp$ret$0);
  };
  UIntSerializer.prototype.ez = function (encoder, value) {
    return this.o1e(encoder, value instanceof UInt ? value.q7_1 : THROW_CCE());
  };
  UIntSerializer.prototype.p1e = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUInt = decoder.v11(this.n1e_1).p11();
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    }
    return tmp$ret$0;
  };
  UIntSerializer.prototype.fz = function (decoder) {
    return new UInt(this.p1e(decoder));
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
    this.q1e_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  ULongSerializer.prototype.dz = function () {
    return this.q1e_1;
  };
  ULongSerializer.prototype.r1e = function (encoder, value) {
    var tmp = encoder.a13(this.q1e_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    }
    tmp.v12(tmp$ret$0);
  };
  ULongSerializer.prototype.ez = function (encoder, value) {
    return this.r1e(encoder, value instanceof ULong ? value.x7_1 : THROW_CCE());
  };
  ULongSerializer.prototype.s1e = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toULong = decoder.v11(this.q1e_1).q11();
      tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    }
    return tmp$ret$0;
  };
  ULongSerializer.prototype.fz = function (decoder) {
    return new ULong(this.s1e(decoder));
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
    this.t1e_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.dz = function () {
    return this.t1e_1;
  };
  UByteSerializer.prototype.u1e = function (encoder, value) {
    var tmp = encoder.a13(this.t1e_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    }
    tmp.s12(tmp$ret$0);
  };
  UByteSerializer.prototype.ez = function (encoder, value) {
    return this.u1e(encoder, value instanceof UByte ? value.k7_1 : THROW_CCE());
  };
  UByteSerializer.prototype.v1e = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUByte = decoder.v11(this.t1e_1).n11();
      tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    }
    return tmp$ret$0;
  };
  UByteSerializer.prototype.fz = function (decoder) {
    return new UByte(this.v1e(decoder));
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
    this.w1e_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_6(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.dz = function () {
    return this.w1e_1;
  };
  UShortSerializer.prototype.x1e = function (encoder, value) {
    var tmp = encoder.a13(this.w1e_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    }
    tmp.t12(tmp$ret$0);
  };
  UShortSerializer.prototype.ez = function (encoder, value) {
    return this.x1e(encoder, value instanceof UShort ? value.d8_1 : THROW_CCE());
  };
  UShortSerializer.prototype.y1e = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUShort = decoder.v11(this.w1e_1).o11();
      tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    }
    return tmp$ret$0;
  };
  UShortSerializer.prototype.fz = function (decoder) {
    return new UShort(this.y1e(decoder));
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
  SerializersModule.prototype.zz = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.a10(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.z1e_1 = class2ContextualFactory;
    this.a1f_1 = polyBase2Serializers;
    this.b1f_1 = polyBase2DefaultSerializerProvider;
    this.c1f_1 = polyBase2NamedSerializers;
    this.d1f_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.s13 = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.a1f_1.b2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.b1f_1.b2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.r13 = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.c1f_1.b2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).b2(serializedClassName);
      }
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.d1f_1.b2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.a10 = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.z1e_1.b2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1f(typeArgumentsSerializers);
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
    this.f1f_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.f1f_1.equals(tmp0_other_with_cast.f1f_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.f1f_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.f1f_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.gd(_this__u8e3s4);
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
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.fd() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
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
    return rootClass.equals(PrimitiveClasses_getInstance().xe());
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
          var tmp_1 = assocObject.a19(args.slice());
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
  SerialDescriptorImpl.prototype.b10 = get_isNullable;
  SerialDescriptorImpl.prototype.i10 = get_isInline;
  AbstractDecoder.prototype.k12 = decodeSerializableElement$default;
  AbstractDecoder.prototype.x11 = decodeSerializableValue;
  AbstractDecoder.prototype.l12 = decodeSequentially;
  AbstractDecoder.prototype.n12 = decodeCollectionSize;
  AbstractEncoder.prototype.m13 = encodeNotNullMark;
  AbstractEncoder.prototype.n13 = beginCollection;
  AbstractEncoder.prototype.l13 = encodeSerializableValue;
  ListLikeDescriptor.prototype.b10 = get_isNullable;
  ListLikeDescriptor.prototype.i10 = get_isInline;
  ListLikeDescriptor.prototype.g10 = get_annotations;
  PrimitiveArrayDescriptor.prototype.b10 = get_isNullable;
  PrimitiveArrayDescriptor.prototype.i10 = get_isInline;
  PrimitiveArrayDescriptor.prototype.g10 = get_annotations;
  ArrayClassDesc.prototype.b10 = get_isNullable;
  ArrayClassDesc.prototype.i10 = get_isInline;
  ArrayClassDesc.prototype.g10 = get_annotations;
  MapLikeDescriptor.prototype.b10 = get_isNullable;
  MapLikeDescriptor.prototype.i10 = get_isInline;
  MapLikeDescriptor.prototype.g10 = get_annotations;
  HashMapClassDesc.prototype.b10 = get_isNullable;
  HashMapClassDesc.prototype.i10 = get_isInline;
  HashMapClassDesc.prototype.g10 = get_annotations;
  LinkedHashMapClassDesc.prototype.b10 = get_isNullable;
  LinkedHashMapClassDesc.prototype.i10 = get_isInline;
  LinkedHashMapClassDesc.prototype.g10 = get_annotations;
  ArrayListClassDesc.prototype.b10 = get_isNullable;
  ArrayListClassDesc.prototype.i10 = get_isInline;
  ArrayListClassDesc.prototype.g10 = get_annotations;
  HashSetClassDesc.prototype.b10 = get_isNullable;
  HashSetClassDesc.prototype.i10 = get_isInline;
  HashSetClassDesc.prototype.g10 = get_annotations;
  LinkedHashSetClassDesc.prototype.b10 = get_isNullable;
  LinkedHashSetClassDesc.prototype.i10 = get_isInline;
  LinkedHashSetClassDesc.prototype.g10 = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.b10 = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.i10 = get_isInline;
  InlineClassDescriptor.prototype.b10 = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.t18 = typeParametersSerializers;
  PrimitiveSerialDescriptor_0.prototype.b10 = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.i10 = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.g10 = get_annotations;
  TaggedDecoder.prototype.k12 = decodeSerializableElement$default;
  TaggedDecoder.prototype.x11 = decodeSerializableValue;
  TaggedDecoder.prototype.l12 = decodeSequentially;
  TaggedDecoder.prototype.n12 = decodeCollectionSize;
  NamedValueDecoder.prototype.x11 = decodeSerializableValue;
  NamedValueDecoder.prototype.k12 = decodeSerializableElement$default;
  NamedValueDecoder.prototype.l12 = decodeSequentially;
  NamedValueDecoder.prototype.n12 = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = SEALED_getInstance;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CONTEXTUAL_getInstance;
  _.$_$.g = ENUM_getInstance;
  _.$_$.h = LIST_getInstance;
  _.$_$.i = MAP_getInstance;
  _.$_$.j = Companion_getInstance_2;
  _.$_$.k = ListSerializer;
  _.$_$.l = MapSerializer;
  _.$_$.m = serializer_0;
  _.$_$.n = serializer_14;
  _.$_$.o = serializer_11;
  _.$_$.p = serializer_13;
  _.$_$.q = serializer_12;
  _.$_$.r = PolymorphicKind;
  _.$_$.s = PrimitiveKind;
  _.$_$.t = PrimitiveSerialDescriptor;
  _.$_$.u = get_annotations;
  _.$_$.v = get_isInline;
  _.$_$.w = get_isNullable;
  _.$_$.x = SerialDescriptor;
  _.$_$.y = ENUM;
  _.$_$.z = getContextualDescriptor;
  _.$_$.a1 = AbstractDecoder;
  _.$_$.b1 = AbstractEncoder;
  _.$_$.c1 = decodeCollectionSize;
  _.$_$.d1 = decodeSequentially;
  _.$_$.e1 = CompositeDecoder;
  _.$_$.f1 = CompositeEncoder;
  _.$_$.g1 = decodeSerializableValue;
  _.$_$.h1 = Decoder;
  _.$_$.i1 = beginCollection;
  _.$_$.j1 = encodeNotNullMark;
  _.$_$.k1 = Encoder;
  _.$_$.l1 = AbstractPolymorphicSerializer;
  _.$_$.m1 = ElementMarker;
  _.$_$.n1 = NamedValueDecoder;
  _.$_$.o1 = SerializerFactory;
  _.$_$.p1 = jsonCachedSerialNames;
  _.$_$.q1 = EmptySerializersModule_0;
  _.$_$.r1 = DeserializationStrategy;
  _.$_$.s1 = KSerializer;
  _.$_$.t1 = MissingFieldException;
  _.$_$.u1 = SealedClassSerializer;
  _.$_$.v1 = SerializationException;
  _.$_$.w1 = StringFormat;
  _.$_$.x1 = findPolymorphicSerializer;
  _.$_$.y1 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map