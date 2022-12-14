(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlinx_kotlinx_html'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin_org_jetbrains_kotlinx_kotlinx_html'.");
    }
    root.kotlin_org_jetbrains_kotlinx_kotlinx_html = factory(typeof kotlin_org_jetbrains_kotlinx_kotlinx_html === 'undefined' ? {} : kotlin_org_jetbrains_kotlinx_kotlinx_html, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.s5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var Unit_getInstance = kotlin_kotlin.$_$.v2;
  var getProgressionLastElement = kotlin_kotlin.$_$.d5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  var setOf = kotlin_kotlin.$_$.p4;
  var THROW_CCE = kotlin_kotlin.$_$.x7;
  var getStringHashCode = kotlin_kotlin.$_$.q5;
  var Map = kotlin_kotlin.$_$.g3;
  var Entry = kotlin_kotlin.$_$.f3;
  var classMeta = kotlin_kotlin.$_$.m5;
  var emptyMap = kotlin_kotlin.$_$.a4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var joinToString$default = kotlin_kotlin.$_$.g;
  var Set = kotlin_kotlin.$_$.k3;
  var isInterface = kotlin_kotlin.$_$.a6;
  var ensureNotNull = kotlin_kotlin.$_$.h8;
  var emptySet = kotlin_kotlin.$_$.b4;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var charSequenceLength = kotlin_kotlin.$_$.k5;
  var toSet = kotlin_kotlin.$_$.y4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var MutableMap = kotlin_kotlin.$_$.i3;
  var Enum = kotlin_kotlin.$_$.t7;
  var mapCapacity = kotlin_kotlin.$_$.j4;
  var coerceAtLeast = kotlin_kotlin.$_$.m6;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var last = kotlin_kotlin.$_$.i4;
  var get_lastIndex = kotlin_kotlin.$_$.g4;
  var toString = kotlin_kotlin.$_$.l6;
  //endregion
  //region block: pre-declaration
  function unaryPlus(_this__u8e3s4) {
    this.xh(_this__u8e3s4);
  }
  function text(s) {
    this.sh().yh(s);
  }
  function onTagError(tag, exception) {
    throw exception;
  }
  StringAttribute.prototype = Object.create(Attribute.prototype);
  StringAttribute.prototype.constructor = StringAttribute;
  StringSetAttribute.prototype = Object.create(Attribute.prototype);
  StringSetAttribute.prototype.constructor = StringSetAttribute;
  BooleanAttribute.prototype = Object.create(Attribute.prototype);
  BooleanAttribute.prototype.constructor = BooleanAttribute;
  TickerAttribute.prototype = Object.create(Attribute.prototype);
  TickerAttribute.prototype.constructor = TickerAttribute;
  EnumAttribute.prototype = Object.create(Attribute.prototype);
  EnumAttribute.prototype.constructor = EnumAttribute;
  function empty(attributeName, tag) {
    throw IllegalStateException_init_$Create$('Attribute ' + attributeName + ' is not yet defined for tag ' + tag.rh());
  }
  ButtonFormEncType.prototype = Object.create(Enum.prototype);
  ButtonFormEncType.prototype.constructor = ButtonFormEncType;
  ButtonFormMethod.prototype = Object.create(Enum.prototype);
  ButtonFormMethod.prototype.constructor = ButtonFormMethod;
  ButtonType.prototype = Object.create(Enum.prototype);
  ButtonType.prototype.constructor = ButtonType;
  CommandType.prototype = Object.create(Enum.prototype);
  CommandType.prototype.constructor = CommandType;
  Dir.prototype = Object.create(Enum.prototype);
  Dir.prototype.constructor = Dir;
  Draggable.prototype = Object.create(Enum.prototype);
  Draggable.prototype.constructor = Draggable;
  FormEncType.prototype = Object.create(Enum.prototype);
  FormEncType.prototype.constructor = FormEncType;
  FormMethod.prototype = Object.create(Enum.prototype);
  FormMethod.prototype.constructor = FormMethod;
  IframeSandbox.prototype = Object.create(Enum.prototype);
  IframeSandbox.prototype.constructor = IframeSandbox;
  InputFormEncType.prototype = Object.create(Enum.prototype);
  InputFormEncType.prototype.constructor = InputFormEncType;
  InputFormMethod.prototype = Object.create(Enum.prototype);
  InputFormMethod.prototype.constructor = InputFormMethod;
  InputType.prototype = Object.create(Enum.prototype);
  InputType.prototype.constructor = InputType;
  KeyGenKeyType.prototype = Object.create(Enum.prototype);
  KeyGenKeyType.prototype.constructor = KeyGenKeyType;
  RunAt.prototype = Object.create(Enum.prototype);
  RunAt.prototype.constructor = RunAt;
  TextAreaWrap.prototype = Object.create(Enum.prototype);
  TextAreaWrap.prototype.constructor = TextAreaWrap;
  ThScope.prototype = Object.create(Enum.prototype);
  ThScope.prototype.constructor = ThScope;
  AreaShape.prototype = Object.create(Enum.prototype);
  AreaShape.prototype.constructor = AreaShape;
  DIV.prototype = Object.create(HTMLTag.prototype);
  DIV.prototype.constructor = DIV;
  FOOTER.prototype = Object.create(HTMLTag.prototype);
  FOOTER.prototype.constructor = FOOTER;
  INPUT.prototype = Object.create(HTMLTag.prototype);
  INPUT.prototype.constructor = INPUT;
  IMG.prototype = Object.create(HTMLTag.prototype);
  IMG.prototype.constructor = IMG;
  SPAN.prototype = Object.create(HTMLTag.prototype);
  SPAN.prototype.constructor = SPAN;
  //endregion
  function get_emptyMap() {
    init_properties_api_kt_ywlw3q();
    return emptyMap_0;
  }
  var emptyMap_0;
  function AttributeEnum() {
  }
  AttributeEnum.$metadata$ = interfaceMeta('AttributeEnum');
  function Tag() {
  }
  Tag.$metadata$ = interfaceMeta('Tag');
  function TagConsumer() {
  }
  TagConsumer.$metadata$ = interfaceMeta('TagConsumer');
  function visitAndFinalize(_this__u8e3s4, consumer, block) {
    init_properties_api_kt_ywlw3q();
    var tmp$ret$0;
    {
      if (!(_this__u8e3s4.sh() === consumer)) {
        throw IllegalArgumentException_init_$Create$('Wrong exception');
      }
      {
        _this__u8e3s4.sh().zh(_this__u8e3s4);
        try {
          {
            block(_this__u8e3s4);
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.sh().di(_this__u8e3s4, $p);
          } else {
            throw $p;
          }
        }
        finally {
          _this__u8e3s4.sh().ci(_this__u8e3s4);
        }
      }
      tmp$ret$0 = consumer.ei();
    }
    return tmp$ret$0;
  }
  function attributesMapOf(key, value) {
    init_properties_api_kt_ywlw3q();
    var tmp0_subject = value;
    return tmp0_subject == null ? get_emptyMap() : singletonMapOf(key, value);
  }
  function visit(_this__u8e3s4, block) {
    init_properties_api_kt_ywlw3q();
    _this__u8e3s4.sh().zh(_this__u8e3s4);
    var tmp;
    try {
      tmp = block(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = _this__u8e3s4.sh().di(_this__u8e3s4, $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    finally {
      _this__u8e3s4.sh().ci(_this__u8e3s4);
    }
    return tmp;
  }
  function attributesMapOf_0(pairs) {
    init_properties_api_kt_ywlw3q();
    var result = null;
    var nestedLast = pairs.length - 1 | 0;
    var inductionVariable = 0;
    var last = getProgressionLastElement(0, nestedLast, 2);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 2 | 0;
        var k = pairs[i];
        var v = pairs[i + 1 | 0];
        if (!(k == null) ? !(v == null) : false) {
          if (result == null) {
            var tmp$ret$0;
            {
              tmp$ret$0 = LinkedHashMap_init_$Create$();
            }
            result = tmp$ret$0;
          }
          result.a(k, v);
        }
      }
       while (!(i === last));
    var tmp1_elvis_lhs = result;
    return tmp1_elvis_lhs == null ? get_emptyMap() : tmp1_elvis_lhs;
  }
  function singletonMapOf(key, value) {
    init_properties_api_kt_ywlw3q();
    return new SingletonStringMap(key, value);
  }
  function SingletonStringMap(key, value) {
    this.fi_1 = key;
    this.gi_1 = value;
  }
  SingletonStringMap.prototype.q1 = function () {
    return this.fi_1;
  };
  SingletonStringMap.prototype.s1 = function () {
    return this.gi_1;
  };
  SingletonStringMap.prototype.q = function () {
    return setOf(this);
  };
  SingletonStringMap.prototype.d2 = function () {
    return setOf(this.fi_1);
  };
  SingletonStringMap.prototype.g = function () {
    return 1;
  };
  SingletonStringMap.prototype.hi = function (key) {
    return key === this.fi_1;
  };
  SingletonStringMap.prototype.z1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.hi((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  SingletonStringMap.prototype.ii = function (key) {
    return key === this.fi_1 ? this.gi_1 : null;
  };
  SingletonStringMap.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ii((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  SingletonStringMap.prototype.k = function () {
    return false;
  };
  SingletonStringMap.prototype.toString = function () {
    return 'SingletonStringMap(key=' + this.fi_1 + ', value=' + this.gi_1 + ')';
  };
  SingletonStringMap.prototype.hashCode = function () {
    var result = getStringHashCode(this.fi_1);
    result = imul(result, 31) + getStringHashCode(this.gi_1) | 0;
    return result;
  };
  SingletonStringMap.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SingletonStringMap))
      return false;
    var tmp0_other_with_cast = other instanceof SingletonStringMap ? other : THROW_CCE();
    if (!(this.fi_1 === tmp0_other_with_cast.fi_1))
      return false;
    if (!(this.gi_1 === tmp0_other_with_cast.gi_1))
      return false;
    return true;
  };
  SingletonStringMap.$metadata$ = classMeta('SingletonStringMap', [Map, Entry]);
  var properties_initialized_api_kt_zfwuc6;
  function init_properties_api_kt_ywlw3q() {
    if (properties_initialized_api_kt_zfwuc6) {
    } else {
      properties_initialized_api_kt_zfwuc6 = true;
      emptyMap_0 = emptyMap();
    }
  }
  function Attribute(encoder) {
    this.ji_1 = encoder;
  }
  Attribute.prototype.ki = function () {
    return this.ji_1;
  };
  Attribute.prototype.li = function (thisRef, attributeName) {
    var tmp0_safe_receiver = thisRef.uh().c2(attributeName);
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
          tmp$ret$0 = this.ji_1.mi(attributeName, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.ji_1.ni(attributeName, thisRef) : tmp1_elvis_lhs;
  };
  Attribute.prototype.oi = function (thisRef, attributeName, value) {
    thisRef.uh().a(attributeName, this.ji_1.pi(attributeName, value));
  };
  Attribute.$metadata$ = classMeta('Attribute');
  function StringAttribute() {
    Attribute.call(this, StringEncoder_getInstance());
  }
  StringAttribute.$metadata$ = classMeta('StringAttribute', undefined, undefined, undefined, undefined, Attribute.prototype);
  function StringSetAttribute() {
    Attribute.call(this, StringSetEncoder_getInstance());
  }
  StringSetAttribute.$metadata$ = classMeta('StringSetAttribute', undefined, undefined, undefined, undefined, Attribute.prototype);
  function BooleanAttribute_init_$Init$(trueValue, falseValue, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      trueValue = 'true';
    if (!(($mask0 & 2) === 0))
      falseValue = 'false';
    BooleanAttribute.call($this, trueValue, falseValue);
    return $this;
  }
  function BooleanAttribute_init_$Create$(trueValue, falseValue, $mask0, $marker) {
    return BooleanAttribute_init_$Init$(trueValue, falseValue, $mask0, $marker, Object.create(BooleanAttribute.prototype));
  }
  function BooleanAttribute(trueValue, falseValue) {
    Attribute.call(this, new BooleanEncoder(trueValue, falseValue));
  }
  BooleanAttribute.$metadata$ = classMeta('BooleanAttribute', undefined, undefined, undefined, undefined, Attribute.prototype);
  function TickerAttribute() {
    Attribute.call(this, TickerEncoder_getInstance());
  }
  TickerAttribute.prototype.ri = function (thisRef, attributeName, value) {
    if (value) {
      thisRef.uh().a(attributeName, attributeName);
    } else {
      thisRef.uh().ra(attributeName);
    }
  };
  TickerAttribute.prototype.oi = function (thisRef, attributeName, value) {
    return this.ri(thisRef, attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  TickerAttribute.$metadata$ = classMeta('TickerAttribute', undefined, undefined, undefined, undefined, Attribute.prototype);
  function EnumAttribute(values) {
    Attribute.call(this, new EnumEncoder(values));
    this.ti_1 = values;
  }
  EnumAttribute.$metadata$ = classMeta('EnumAttribute', undefined, undefined, undefined, undefined, Attribute.prototype);
  function AttributeEncoder() {
  }
  AttributeEncoder.$metadata$ = interfaceMeta('AttributeEncoder');
  function StringEncoder() {
    StringEncoder_instance = this;
  }
  StringEncoder.prototype.ui = function (attributeName, value) {
    return value;
  };
  StringEncoder.prototype.pi = function (attributeName, value) {
    return this.ui(attributeName, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringEncoder.prototype.mi = function (attributeName, value) {
    return value;
  };
  StringEncoder.$metadata$ = objectMeta('StringEncoder', [AttributeEncoder]);
  var StringEncoder_instance;
  function StringEncoder_getInstance() {
    if (StringEncoder_instance == null)
      new StringEncoder();
    return StringEncoder_instance;
  }
  function StringSetEncoder() {
    StringSetEncoder_instance = this;
  }
  StringSetEncoder.prototype.vi = function (attributeName, value) {
    return joinToString$default(value, ' ', null, null, 0, null, null, 62, null);
  };
  StringSetEncoder.prototype.pi = function (attributeName, value) {
    return this.vi(attributeName, (!(value == null) ? isInterface(value, Set) : false) ? value : THROW_CCE());
  };
  StringSetEncoder.prototype.mi = function (attributeName, value) {
    return ensureNotNull(stringSetDecode(value));
  };
  StringSetEncoder.prototype.ni = function (attributeName, tag) {
    return emptySet();
  };
  StringSetEncoder.$metadata$ = objectMeta('StringSetEncoder', [AttributeEncoder]);
  var StringSetEncoder_instance;
  function StringSetEncoder_getInstance() {
    if (StringSetEncoder_instance == null)
      new StringSetEncoder();
    return StringSetEncoder_instance;
  }
  function BooleanEncoder(trueValue, falseValue) {
    this.wi_1 = trueValue;
    this.xi_1 = falseValue;
  }
  BooleanEncoder.prototype.yi = function (attributeName, value) {
    return value ? this.wi_1 : this.xi_1;
  };
  BooleanEncoder.prototype.pi = function (attributeName, value) {
    return this.yi(attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanEncoder.prototype.mi = function (attributeName, value) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject === this.wi_1) {
      tmp = true;
    } else if (tmp0_subject === this.xi_1) {
      tmp = false;
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown value ' + value + ' for ' + attributeName);
    }
    return tmp;
  };
  BooleanEncoder.$metadata$ = classMeta('BooleanEncoder', [AttributeEncoder]);
  function TickerEncoder() {
    TickerEncoder_instance = this;
  }
  TickerEncoder.prototype.yi = function (attributeName, value) {
    return tickerEncode(value, attributeName);
  };
  TickerEncoder.prototype.pi = function (attributeName, value) {
    return this.yi(attributeName, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  TickerEncoder.prototype.mi = function (attributeName, value) {
    return value === attributeName;
  };
  TickerEncoder.$metadata$ = objectMeta('TickerEncoder', [AttributeEncoder]);
  var TickerEncoder_instance;
  function TickerEncoder_getInstance() {
    if (TickerEncoder_instance == null)
      new TickerEncoder();
    return TickerEncoder_instance;
  }
  function EnumEncoder(valuesMap) {
    this.zi_1 = valuesMap;
  }
  EnumEncoder.prototype.pi = function (attributeName, value) {
    return value.qh();
  };
  EnumEncoder.prototype.mi = function (attributeName, value) {
    var tmp0_elvis_lhs = this.zi_1.c2(value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Unknown value ' + value + ' for ' + attributeName);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  EnumEncoder.$metadata$ = classMeta('EnumEncoder', [AttributeEncoder]);
  function stringSetDecode(value) {
    var tmp0_safe_receiver = value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = Regex_init_$Create$('\\s+');
        }
        var tmp0_split = tmp$ret$0;
        tmp$ret$1 = tmp0_split.p4(tmp0_safe_receiver, 0);
      }
      tmp = tmp$ret$1;
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$5;
      {
        var tmp$ret$4;
        {
          var tmp0_filterNotTo = ArrayList_init_$Create$();
          var tmp0_iterator = tmp1_safe_receiver.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                tmp$ret$2 = charSequenceLength(element) === 0;
              }
              tmp$ret$3 = tmp$ret$2;
            }
            if (!tmp$ret$3) {
              tmp0_filterNotTo.b(element);
            }
          }
          tmp$ret$4 = tmp0_filterNotTo;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      tmp_0 = tmp$ret$5;
    }
    var tmp2_safe_receiver = tmp_0;
    return tmp2_safe_receiver == null ? null : toSet(tmp2_safe_receiver);
  }
  function tickerEncode(_this__u8e3s4, attributeName) {
    return _this__u8e3s4 ? attributeName : '';
  }
  function enumEncode(_this__u8e3s4) {
    return _this__u8e3s4.qh();
  }
  function switchToMutable($this) {
    var tmp;
    if ($this.dj_1) {
      tmp = $this.cj_1;
    } else {
      $this.dj_1 = true;
      $this.cj_1 = LinkedHashMap_init_$Create$_0($this.cj_1);
      tmp = $this.cj_1;
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, MutableMap) ? tmp_0 : THROW_CCE();
  }
  function DelegatingMap(initialValues, tag, consumer) {
    this.aj_1 = tag;
    this.bj_1 = consumer;
    this.cj_1 = initialValues;
    this.dj_1 = false;
  }
  DelegatingMap.prototype.g = function () {
    return this.cj_1.g();
  };
  DelegatingMap.prototype.k = function () {
    return this.cj_1.k();
  };
  DelegatingMap.prototype.hi = function (key) {
    return this.cj_1.z1(key);
  };
  DelegatingMap.prototype.z1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.hi((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype.ii = function (key) {
    return this.cj_1.c2(key);
  };
  DelegatingMap.prototype.c2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ii((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype.ej = function (key, value) {
    var mutable = switchToMutable(this);
    var old = mutable.a(key, value);
    if (!(old === value)) {
      this.bj_1().ai(this.aj_1, key, value);
    }
    return old;
  };
  DelegatingMap.prototype.a = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.ej(tmp, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  DelegatingMap.prototype.fj = function (key) {
    var mutable = switchToMutable(this);
    var tmp0_safe_receiver = mutable.ra(key);
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
          this.bj_1().ai(this.aj_1, key, null);
          tmp$ret$0 = tmp0_safe_receiver;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  DelegatingMap.prototype.ra = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.fj((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  DelegatingMap.prototype.gj = function () {
    return this.cj_1.q();
  };
  DelegatingMap.prototype.d2 = function () {
    return switchToMutable(this).d2();
  };
  DelegatingMap.prototype.q = function () {
    return switchToMutable(this).q();
  };
  DelegatingMap.$metadata$ = classMeta('DelegatingMap', [MutableMap]);
  function onFinalize(_this__u8e3s4, block) {
    return new FinalizeConsumer(_this__u8e3s4, onFinalize$lambda(block));
  }
  function FinalizeConsumer(downstream, block) {
    this.hj_1 = downstream;
    this.ij_1 = block;
    this.jj_1 = 0;
  }
  FinalizeConsumer.prototype.zh = function (tag) {
    this.hj_1.zh(tag);
    var tmp0_this = this;
    var tmp1 = tmp0_this.jj_1;
    tmp0_this.jj_1 = tmp1 + 1 | 0;
  };
  FinalizeConsumer.prototype.ci = function (tag) {
    this.hj_1.ci(tag);
    var tmp0_this = this;
    var tmp1 = tmp0_this.jj_1;
    tmp0_this.jj_1 = tmp1 - 1 | 0;
  };
  FinalizeConsumer.prototype.ai = function (tag, attribute, value) {
    return this.hj_1.ai(tag, attribute, value);
  };
  FinalizeConsumer.prototype.bi = function (tag, event, value) {
    return this.hj_1.bi(tag, event, value);
  };
  FinalizeConsumer.prototype.yh = function (content) {
    return this.hj_1.yh(content);
  };
  FinalizeConsumer.prototype.di = function (tag, exception) {
    return this.hj_1.di(tag, exception);
  };
  FinalizeConsumer.prototype.ei = function () {
    return this.ij_1(this.hj_1.ei(), this.jj_1 > 0);
  };
  FinalizeConsumer.$metadata$ = classMeta('FinalizeConsumer', [TagConsumer]);
  function onFinalize$lambda($block) {
    return function (to, partial) {
      $block(to, partial);
      return to;
    };
  }
  function set_id(_this__u8e3s4, newValue) {
    get_attributeStringString().oi(_this__u8e3s4, 'id', newValue);
  }
  function get_id(_this__u8e3s4) {
    return get_attributeStringString().li(_this__u8e3s4, 'id');
  }
  function CommonAttributeGroupFacade() {
  }
  CommonAttributeGroupFacade.$metadata$ = interfaceMeta('CommonAttributeGroupFacade', [Tag]);
  function get_attributeStringString() {
    init_properties_gen_attributes_kt_3p64g6();
    return attributeStringString;
  }
  var attributeStringString;
  var attributeSetStringStringSet;
  var attributeBooleanBoolean;
  var attributeBooleanBooleanOnOff;
  var attributeBooleanTicker;
  var attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  var attributeButtonFormMethodEnumButtonFormMethodValues;
  var attributeButtonTypeEnumButtonTypeValues;
  var attributeCommandTypeEnumCommandTypeValues;
  var attributeDirEnumDirValues;
  var attributeDraggableEnumDraggableValues;
  var attributeFormEncTypeEnumFormEncTypeValues;
  var attributeFormMethodEnumFormMethodValues;
  var attributeIframeSandboxEnumIframeSandboxValues;
  var attributeInputFormEncTypeEnumInputFormEncTypeValues;
  var attributeInputFormMethodEnumInputFormMethodValues;
  var attributeInputTypeEnumInputTypeValues;
  var attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  var attributeRunAtEnumRunAtValues;
  var attributeTextAreaWrapEnumTextAreaWrapValues;
  var attributeThScopeEnumThScopeValues;
  var properties_initialized_gen_attributes_kt_jgv7sa;
  function init_properties_gen_attributes_kt_3p64g6() {
    if (properties_initialized_gen_attributes_kt_jgv7sa) {
    } else {
      properties_initialized_gen_attributes_kt_jgv7sa = true;
      attributeStringString = new StringAttribute();
      attributeSetStringStringSet = new StringSetAttribute();
      attributeBooleanBoolean = BooleanAttribute_init_$Create$(null, null, 3, null);
      attributeBooleanBooleanOnOff = new BooleanAttribute('on', 'off');
      attributeBooleanTicker = new TickerAttribute();
      attributeButtonFormEncTypeEnumButtonFormEncTypeValues = new EnumAttribute(get_buttonFormEncTypeValues());
      attributeButtonFormMethodEnumButtonFormMethodValues = new EnumAttribute(get_buttonFormMethodValues());
      attributeButtonTypeEnumButtonTypeValues = new EnumAttribute(get_buttonTypeValues());
      attributeCommandTypeEnumCommandTypeValues = new EnumAttribute(get_commandTypeValues());
      attributeDirEnumDirValues = new EnumAttribute(get_dirValues());
      attributeDraggableEnumDraggableValues = new EnumAttribute(get_draggableValues());
      attributeFormEncTypeEnumFormEncTypeValues = new EnumAttribute(get_formEncTypeValues());
      attributeFormMethodEnumFormMethodValues = new EnumAttribute(get_formMethodValues());
      attributeIframeSandboxEnumIframeSandboxValues = new EnumAttribute(get_iframeSandboxValues());
      attributeInputFormEncTypeEnumInputFormEncTypeValues = new EnumAttribute(get_inputFormEncTypeValues());
      attributeInputFormMethodEnumInputFormMethodValues = new EnumAttribute(get_inputFormMethodValues());
      attributeInputTypeEnumInputTypeValues = new EnumAttribute(get_inputTypeValues());
      attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues = new EnumAttribute(get_keyGenKeyTypeValues());
      attributeRunAtEnumRunAtValues = new EnumAttribute(get_runAtValues());
      attributeTextAreaWrapEnumTextAreaWrapValues = new EnumAttribute(get_textAreaWrapValues());
      attributeThScopeEnumThScopeValues = new EnumAttribute(get_thScopeValues());
    }
  }
  function div(_this__u8e3s4, classes, block) {
    var tmp$ret$1;
    {
      var tmp0_visitAndFinalize = new DIV(attributesMapOf('class', classes), _this__u8e3s4);
      var tmp$ret$0;
      {
        if (!(tmp0_visitAndFinalize.sh() === _this__u8e3s4)) {
          throw IllegalArgumentException_init_$Create$('Wrong exception');
        }
        {
          tmp0_visitAndFinalize.sh().zh(tmp0_visitAndFinalize);
          try {
            {
              block(tmp0_visitAndFinalize);
            }
          } catch ($p) {
            if ($p instanceof Error) {
              tmp0_visitAndFinalize.sh().di(tmp0_visitAndFinalize, $p);
            } else {
              throw $p;
            }
          }
          finally {
            tmp0_visitAndFinalize.sh().ci(tmp0_visitAndFinalize);
          }
        }
        tmp$ret$0 = _this__u8e3s4.ei();
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function footer(_this__u8e3s4, classes, block) {
    var tmp$ret$1;
    {
      var tmp0_visitAndFinalize = new FOOTER(attributesMapOf('class', classes), _this__u8e3s4);
      var tmp$ret$0;
      {
        if (!(tmp0_visitAndFinalize.sh() === _this__u8e3s4)) {
          throw IllegalArgumentException_init_$Create$('Wrong exception');
        }
        {
          tmp0_visitAndFinalize.sh().zh(tmp0_visitAndFinalize);
          try {
            {
              block(tmp0_visitAndFinalize);
            }
          } catch ($p) {
            if ($p instanceof Error) {
              tmp0_visitAndFinalize.sh().di(tmp0_visitAndFinalize, $p);
            } else {
              throw $p;
            }
          }
          finally {
            tmp0_visitAndFinalize.sh().ci(tmp0_visitAndFinalize);
          }
        }
        tmp$ret$0 = _this__u8e3s4.ei();
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function get_dirValues() {
    init_properties_gen_enums_kt_tifmld();
    return dirValues;
  }
  var dirValues;
  function get_draggableValues() {
    init_properties_gen_enums_kt_tifmld();
    return draggableValues;
  }
  var draggableValues;
  function get_runAtValues() {
    init_properties_gen_enums_kt_tifmld();
    return runAtValues;
  }
  var runAtValues;
  var areaShapeValues;
  function get_buttonFormEncTypeValues() {
    init_properties_gen_enums_kt_tifmld();
    return buttonFormEncTypeValues;
  }
  var buttonFormEncTypeValues;
  function get_buttonFormMethodValues() {
    init_properties_gen_enums_kt_tifmld();
    return buttonFormMethodValues;
  }
  var buttonFormMethodValues;
  function get_buttonTypeValues() {
    init_properties_gen_enums_kt_tifmld();
    return buttonTypeValues;
  }
  var buttonTypeValues;
  function get_commandTypeValues() {
    init_properties_gen_enums_kt_tifmld();
    return commandTypeValues;
  }
  var commandTypeValues;
  function get_formEncTypeValues() {
    init_properties_gen_enums_kt_tifmld();
    return formEncTypeValues;
  }
  var formEncTypeValues;
  function get_formMethodValues() {
    init_properties_gen_enums_kt_tifmld();
    return formMethodValues;
  }
  var formMethodValues;
  function get_iframeSandboxValues() {
    init_properties_gen_enums_kt_tifmld();
    return iframeSandboxValues;
  }
  var iframeSandboxValues;
  function get_inputTypeValues() {
    init_properties_gen_enums_kt_tifmld();
    return inputTypeValues;
  }
  var inputTypeValues;
  function get_inputFormEncTypeValues() {
    init_properties_gen_enums_kt_tifmld();
    return inputFormEncTypeValues;
  }
  var inputFormEncTypeValues;
  function get_inputFormMethodValues() {
    init_properties_gen_enums_kt_tifmld();
    return inputFormMethodValues;
  }
  var inputFormMethodValues;
  function get_keyGenKeyTypeValues() {
    init_properties_gen_enums_kt_tifmld();
    return keyGenKeyTypeValues;
  }
  var keyGenKeyTypeValues;
  function get_textAreaWrapValues() {
    init_properties_gen_enums_kt_tifmld();
    return textAreaWrapValues;
  }
  var textAreaWrapValues;
  function get_thScopeValues() {
    init_properties_gen_enums_kt_tifmld();
    return thScopeValues;
  }
  var thScopeValues;
  var ButtonFormEncType_multipartFormData_instance;
  var ButtonFormEncType_applicationXWwwFormUrlEncoded_instance;
  var ButtonFormEncType_textPlain_instance;
  function values() {
    return [ButtonFormEncType_multipartFormData_getInstance(), ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance(), ButtonFormEncType_textPlain_getInstance()];
  }
  var ButtonFormEncType_entriesInitialized;
  function ButtonFormEncType_initEntries() {
    if (ButtonFormEncType_entriesInitialized)
      return Unit_getInstance();
    ButtonFormEncType_entriesInitialized = true;
    ButtonFormEncType_multipartFormData_instance = new ButtonFormEncType('multipartFormData', 0, 'multipart/form-data');
    ButtonFormEncType_applicationXWwwFormUrlEncoded_instance = new ButtonFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    ButtonFormEncType_textPlain_instance = new ButtonFormEncType('textPlain', 2, 'text/plain');
  }
  function ButtonFormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.mj_1 = realValue;
  }
  ButtonFormEncType.prototype.qh = function () {
    return this.mj_1;
  };
  ButtonFormEncType.$metadata$ = classMeta('ButtonFormEncType', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var ButtonFormMethod_get_instance;
  var ButtonFormMethod_post_instance;
  var ButtonFormMethod_put_instance;
  var ButtonFormMethod_delete_instance;
  var ButtonFormMethod_patch_instance;
  function values_0() {
    return [ButtonFormMethod_get_getInstance(), ButtonFormMethod_post_getInstance(), ButtonFormMethod_put_getInstance(), ButtonFormMethod_delete_getInstance(), ButtonFormMethod_patch_getInstance()];
  }
  var ButtonFormMethod_entriesInitialized;
  function ButtonFormMethod_initEntries() {
    if (ButtonFormMethod_entriesInitialized)
      return Unit_getInstance();
    ButtonFormMethod_entriesInitialized = true;
    ButtonFormMethod_get_instance = new ButtonFormMethod('get', 0, 'get');
    ButtonFormMethod_post_instance = new ButtonFormMethod('post', 1, 'post');
    ButtonFormMethod_put_instance = new ButtonFormMethod('put', 2, 'put');
    ButtonFormMethod_delete_instance = new ButtonFormMethod('delete', 3, 'delete');
    ButtonFormMethod_patch_instance = new ButtonFormMethod('patch', 4, 'patch');
  }
  function ButtonFormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.pj_1 = realValue;
  }
  ButtonFormMethod.prototype.qh = function () {
    return this.pj_1;
  };
  ButtonFormMethod.$metadata$ = classMeta('ButtonFormMethod', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var ButtonType_button_instance;
  var ButtonType_reset_instance;
  var ButtonType_submit_instance;
  function values_1() {
    return [ButtonType_button_getInstance(), ButtonType_reset_getInstance(), ButtonType_submit_getInstance()];
  }
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_getInstance();
    ButtonType_entriesInitialized = true;
    ButtonType_button_instance = new ButtonType('button', 0, 'button');
    ButtonType_reset_instance = new ButtonType('reset', 1, 'reset');
    ButtonType_submit_instance = new ButtonType('submit', 2, 'submit');
  }
  function ButtonType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.sj_1 = realValue;
  }
  ButtonType.prototype.qh = function () {
    return this.sj_1;
  };
  ButtonType.$metadata$ = classMeta('ButtonType', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var CommandType_command_instance;
  var CommandType_checkBox_instance;
  var CommandType_radio_instance;
  function values_2() {
    return [CommandType_command_getInstance(), CommandType_checkBox_getInstance(), CommandType_radio_getInstance()];
  }
  var CommandType_entriesInitialized;
  function CommandType_initEntries() {
    if (CommandType_entriesInitialized)
      return Unit_getInstance();
    CommandType_entriesInitialized = true;
    CommandType_command_instance = new CommandType('command', 0, 'command');
    CommandType_checkBox_instance = new CommandType('checkBox', 1, 'checkbox');
    CommandType_radio_instance = new CommandType('radio', 2, 'radio');
  }
  function CommandType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.vj_1 = realValue;
  }
  CommandType.prototype.qh = function () {
    return this.vj_1;
  };
  CommandType.$metadata$ = classMeta('CommandType', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var Dir_ltr_instance;
  var Dir_rtl_instance;
  function values_3() {
    return [Dir_ltr_getInstance(), Dir_rtl_getInstance()];
  }
  var Dir_entriesInitialized;
  function Dir_initEntries() {
    if (Dir_entriesInitialized)
      return Unit_getInstance();
    Dir_entriesInitialized = true;
    Dir_ltr_instance = new Dir('ltr', 0, 'ltr');
    Dir_rtl_instance = new Dir('rtl', 1, 'rtl');
  }
  function Dir(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.yj_1 = realValue;
  }
  Dir.prototype.qh = function () {
    return this.yj_1;
  };
  Dir.$metadata$ = classMeta('Dir', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var Draggable_htmlTrue_instance;
  var Draggable_htmlFalse_instance;
  var Draggable_auto_instance;
  function values_4() {
    return [Draggable_htmlTrue_getInstance(), Draggable_htmlFalse_getInstance(), Draggable_auto_getInstance()];
  }
  var Draggable_entriesInitialized;
  function Draggable_initEntries() {
    if (Draggable_entriesInitialized)
      return Unit_getInstance();
    Draggable_entriesInitialized = true;
    Draggable_htmlTrue_instance = new Draggable('htmlTrue', 0, 'true');
    Draggable_htmlFalse_instance = new Draggable('htmlFalse', 1, 'false');
    Draggable_auto_instance = new Draggable('auto', 2, 'auto');
  }
  function Draggable(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.bk_1 = realValue;
  }
  Draggable.prototype.qh = function () {
    return this.bk_1;
  };
  Draggable.$metadata$ = classMeta('Draggable', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var FormEncType_multipartFormData_instance;
  var FormEncType_applicationXWwwFormUrlEncoded_instance;
  var FormEncType_textPlain_instance;
  function values_5() {
    return [FormEncType_multipartFormData_getInstance(), FormEncType_applicationXWwwFormUrlEncoded_getInstance(), FormEncType_textPlain_getInstance()];
  }
  var FormEncType_entriesInitialized;
  function FormEncType_initEntries() {
    if (FormEncType_entriesInitialized)
      return Unit_getInstance();
    FormEncType_entriesInitialized = true;
    FormEncType_multipartFormData_instance = new FormEncType('multipartFormData', 0, 'multipart/form-data');
    FormEncType_applicationXWwwFormUrlEncoded_instance = new FormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    FormEncType_textPlain_instance = new FormEncType('textPlain', 2, 'text/plain');
  }
  function FormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.ek_1 = realValue;
  }
  FormEncType.prototype.qh = function () {
    return this.ek_1;
  };
  FormEncType.$metadata$ = classMeta('FormEncType', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var FormMethod_get_instance;
  var FormMethod_post_instance;
  var FormMethod_put_instance;
  var FormMethod_delete_instance;
  var FormMethod_patch_instance;
  function values_6() {
    return [FormMethod_get_getInstance(), FormMethod_post_getInstance(), FormMethod_put_getInstance(), FormMethod_delete_getInstance(), FormMethod_patch_getInstance()];
  }
  var FormMethod_entriesInitialized;
  function FormMethod_initEntries() {
    if (FormMethod_entriesInitialized)
      return Unit_getInstance();
    FormMethod_entriesInitialized = true;
    FormMethod_get_instance = new FormMethod('get', 0, 'get');
    FormMethod_post_instance = new FormMethod('post', 1, 'post');
    FormMethod_put_instance = new FormMethod('put', 2, 'put');
    FormMethod_delete_instance = new FormMethod('delete', 3, 'delete');
    FormMethod_patch_instance = new FormMethod('patch', 4, 'patch');
  }
  function FormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.hk_1 = realValue;
  }
  FormMethod.prototype.qh = function () {
    return this.hk_1;
  };
  FormMethod.$metadata$ = classMeta('FormMethod', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var IframeSandbox_allowSameOrigin_instance;
  var IframeSandbox_allowFormS_instance;
  var IframeSandbox_allowScripts_instance;
  function values_7() {
    return [IframeSandbox_allowSameOrigin_getInstance(), IframeSandbox_allowFormS_getInstance(), IframeSandbox_allowScripts_getInstance()];
  }
  var IframeSandbox_entriesInitialized;
  function IframeSandbox_initEntries() {
    if (IframeSandbox_entriesInitialized)
      return Unit_getInstance();
    IframeSandbox_entriesInitialized = true;
    IframeSandbox_allowSameOrigin_instance = new IframeSandbox('allowSameOrigin', 0, 'allow-same-origin');
    IframeSandbox_allowFormS_instance = new IframeSandbox('allowFormS', 1, 'allow-forms');
    IframeSandbox_allowScripts_instance = new IframeSandbox('allowScripts', 2, 'allow-scripts');
  }
  function IframeSandbox(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.kk_1 = realValue;
  }
  IframeSandbox.prototype.qh = function () {
    return this.kk_1;
  };
  IframeSandbox.$metadata$ = classMeta('IframeSandbox', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var InputFormEncType_multipartFormData_instance;
  var InputFormEncType_applicationXWwwFormUrlEncoded_instance;
  var InputFormEncType_textPlain_instance;
  function values_8() {
    return [InputFormEncType_multipartFormData_getInstance(), InputFormEncType_applicationXWwwFormUrlEncoded_getInstance(), InputFormEncType_textPlain_getInstance()];
  }
  var InputFormEncType_entriesInitialized;
  function InputFormEncType_initEntries() {
    if (InputFormEncType_entriesInitialized)
      return Unit_getInstance();
    InputFormEncType_entriesInitialized = true;
    InputFormEncType_multipartFormData_instance = new InputFormEncType('multipartFormData', 0, 'multipart/form-data');
    InputFormEncType_applicationXWwwFormUrlEncoded_instance = new InputFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    InputFormEncType_textPlain_instance = new InputFormEncType('textPlain', 2, 'text/plain');
  }
  function InputFormEncType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.nk_1 = realValue;
  }
  InputFormEncType.prototype.qh = function () {
    return this.nk_1;
  };
  InputFormEncType.$metadata$ = classMeta('InputFormEncType', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var InputFormMethod_get_instance;
  var InputFormMethod_post_instance;
  var InputFormMethod_put_instance;
  var InputFormMethod_delete_instance;
  var InputFormMethod_patch_instance;
  function values_9() {
    return [InputFormMethod_get_getInstance(), InputFormMethod_post_getInstance(), InputFormMethod_put_getInstance(), InputFormMethod_delete_getInstance(), InputFormMethod_patch_getInstance()];
  }
  var InputFormMethod_entriesInitialized;
  function InputFormMethod_initEntries() {
    if (InputFormMethod_entriesInitialized)
      return Unit_getInstance();
    InputFormMethod_entriesInitialized = true;
    InputFormMethod_get_instance = new InputFormMethod('get', 0, 'get');
    InputFormMethod_post_instance = new InputFormMethod('post', 1, 'post');
    InputFormMethod_put_instance = new InputFormMethod('put', 2, 'put');
    InputFormMethod_delete_instance = new InputFormMethod('delete', 3, 'delete');
    InputFormMethod_patch_instance = new InputFormMethod('patch', 4, 'patch');
  }
  function InputFormMethod(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.qk_1 = realValue;
  }
  InputFormMethod.prototype.qh = function () {
    return this.qk_1;
  };
  InputFormMethod.$metadata$ = classMeta('InputFormMethod', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var InputType_button_instance;
  var InputType_checkBox_instance;
  var InputType_color_instance;
  var InputType_date_instance;
  var InputType_dateTime_instance;
  var InputType_dateTimeLocal_instance;
  var InputType_email_instance;
  var InputType_file_instance;
  var InputType_hidden_instance;
  var InputType_image_instance;
  var InputType_month_instance;
  var InputType_number_instance;
  var InputType_password_instance;
  var InputType_radio_instance;
  var InputType_range_instance;
  var InputType_reset_instance;
  var InputType_search_instance;
  var InputType_submit_instance;
  var InputType_text_instance;
  var InputType_tel_instance;
  var InputType_time_instance;
  var InputType_url_instance;
  var InputType_week_instance;
  function values_10() {
    return [InputType_button_getInstance(), InputType_checkBox_getInstance(), InputType_color_getInstance(), InputType_date_getInstance(), InputType_dateTime_getInstance(), InputType_dateTimeLocal_getInstance(), InputType_email_getInstance(), InputType_file_getInstance(), InputType_hidden_getInstance(), InputType_image_getInstance(), InputType_month_getInstance(), InputType_number_getInstance(), InputType_password_getInstance(), InputType_radio_getInstance(), InputType_range_getInstance(), InputType_reset_getInstance(), InputType_search_getInstance(), InputType_submit_getInstance(), InputType_text_getInstance(), InputType_tel_getInstance(), InputType_time_getInstance(), InputType_url_getInstance(), InputType_week_getInstance()];
  }
  var InputType_entriesInitialized;
  function InputType_initEntries() {
    if (InputType_entriesInitialized)
      return Unit_getInstance();
    InputType_entriesInitialized = true;
    InputType_button_instance = new InputType('button', 0, 'button');
    InputType_checkBox_instance = new InputType('checkBox', 1, 'checkbox');
    InputType_color_instance = new InputType('color', 2, 'color');
    InputType_date_instance = new InputType('date', 3, 'date');
    InputType_dateTime_instance = new InputType('dateTime', 4, 'datetime');
    InputType_dateTimeLocal_instance = new InputType('dateTimeLocal', 5, 'datetime-local');
    InputType_email_instance = new InputType('email', 6, 'email');
    InputType_file_instance = new InputType('file', 7, 'file');
    InputType_hidden_instance = new InputType('hidden', 8, 'hidden');
    InputType_image_instance = new InputType('image', 9, 'image');
    InputType_month_instance = new InputType('month', 10, 'month');
    InputType_number_instance = new InputType('number', 11, 'number');
    InputType_password_instance = new InputType('password', 12, 'password');
    InputType_radio_instance = new InputType('radio', 13, 'radio');
    InputType_range_instance = new InputType('range', 14, 'range');
    InputType_reset_instance = new InputType('reset', 15, 'reset');
    InputType_search_instance = new InputType('search', 16, 'search');
    InputType_submit_instance = new InputType('submit', 17, 'submit');
    InputType_text_instance = new InputType('text', 18, 'text');
    InputType_tel_instance = new InputType('tel', 19, 'tel');
    InputType_time_instance = new InputType('time', 20, 'time');
    InputType_url_instance = new InputType('url', 21, 'url');
    InputType_week_instance = new InputType('week', 22, 'week');
  }
  function InputType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.tk_1 = realValue;
  }
  InputType.prototype.qh = function () {
    return this.tk_1;
  };
  InputType.$metadata$ = classMeta('InputType', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var KeyGenKeyType_rsa_instance;
  function values_11() {
    return [KeyGenKeyType_rsa_getInstance()];
  }
  var KeyGenKeyType_entriesInitialized;
  function KeyGenKeyType_initEntries() {
    if (KeyGenKeyType_entriesInitialized)
      return Unit_getInstance();
    KeyGenKeyType_entriesInitialized = true;
    KeyGenKeyType_rsa_instance = new KeyGenKeyType('rsa', 0, 'rsa');
  }
  function KeyGenKeyType(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.wk_1 = realValue;
  }
  KeyGenKeyType.prototype.qh = function () {
    return this.wk_1;
  };
  KeyGenKeyType.$metadata$ = classMeta('KeyGenKeyType', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var RunAt_server_instance;
  function values_12() {
    return [RunAt_server_getInstance()];
  }
  var RunAt_entriesInitialized;
  function RunAt_initEntries() {
    if (RunAt_entriesInitialized)
      return Unit_getInstance();
    RunAt_entriesInitialized = true;
    RunAt_server_instance = new RunAt('server', 0, 'server');
  }
  function RunAt(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.zk_1 = realValue;
  }
  RunAt.prototype.qh = function () {
    return this.zk_1;
  };
  RunAt.$metadata$ = classMeta('RunAt', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var TextAreaWrap_hard_instance;
  var TextAreaWrap_soft_instance;
  function values_13() {
    return [TextAreaWrap_hard_getInstance(), TextAreaWrap_soft_getInstance()];
  }
  var TextAreaWrap_entriesInitialized;
  function TextAreaWrap_initEntries() {
    if (TextAreaWrap_entriesInitialized)
      return Unit_getInstance();
    TextAreaWrap_entriesInitialized = true;
    TextAreaWrap_hard_instance = new TextAreaWrap('hard', 0, 'hard');
    TextAreaWrap_soft_instance = new TextAreaWrap('soft', 1, 'soft');
  }
  function TextAreaWrap(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.cl_1 = realValue;
  }
  TextAreaWrap.prototype.qh = function () {
    return this.cl_1;
  };
  TextAreaWrap.$metadata$ = classMeta('TextAreaWrap', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var ThScope_col_instance;
  var ThScope_colGroup_instance;
  var ThScope_row_instance;
  var ThScope_rowGroup_instance;
  function values_14() {
    return [ThScope_col_getInstance(), ThScope_colGroup_getInstance(), ThScope_row_getInstance(), ThScope_rowGroup_getInstance()];
  }
  var ThScope_entriesInitialized;
  function ThScope_initEntries() {
    if (ThScope_entriesInitialized)
      return Unit_getInstance();
    ThScope_entriesInitialized = true;
    ThScope_col_instance = new ThScope('col', 0, 'col');
    ThScope_colGroup_instance = new ThScope('colGroup', 1, 'colgroup');
    ThScope_row_instance = new ThScope('row', 2, 'row');
    ThScope_rowGroup_instance = new ThScope('rowGroup', 3, 'rowgroup');
  }
  function ThScope(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.fl_1 = realValue;
  }
  ThScope.prototype.qh = function () {
    return this.fl_1;
  };
  ThScope.$metadata$ = classMeta('ThScope', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  var AreaShape_rect_instance;
  var AreaShape_circle_instance;
  var AreaShape_poly_instance;
  var AreaShape_default_instance;
  function values_15() {
    return [AreaShape_rect_getInstance(), AreaShape_circle_getInstance(), AreaShape_poly_getInstance(), AreaShape_default_getInstance()];
  }
  var AreaShape_entriesInitialized;
  function AreaShape_initEntries() {
    if (AreaShape_entriesInitialized)
      return Unit_getInstance();
    AreaShape_entriesInitialized = true;
    AreaShape_rect_instance = new AreaShape('rect', 0, 'rect');
    AreaShape_circle_instance = new AreaShape('circle', 1, 'circle');
    AreaShape_poly_instance = new AreaShape('poly', 2, 'poly');
    AreaShape_default_instance = new AreaShape('default', 3, 'default');
  }
  function AreaShape(name, ordinal, realValue) {
    Enum.call(this, name, ordinal);
    this.il_1 = realValue;
  }
  AreaShape.prototype.qh = function () {
    return this.il_1;
  };
  AreaShape.$metadata$ = classMeta('AreaShape', [AttributeEnum], undefined, undefined, undefined, Enum.prototype);
  function ButtonFormEncType_multipartFormData_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_multipartFormData_instance;
  }
  function ButtonFormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function ButtonFormEncType_textPlain_getInstance() {
    ButtonFormEncType_initEntries();
    return ButtonFormEncType_textPlain_instance;
  }
  function ButtonFormMethod_get_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_get_instance;
  }
  function ButtonFormMethod_post_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_post_instance;
  }
  function ButtonFormMethod_put_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_put_instance;
  }
  function ButtonFormMethod_delete_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_delete_instance;
  }
  function ButtonFormMethod_patch_getInstance() {
    ButtonFormMethod_initEntries();
    return ButtonFormMethod_patch_instance;
  }
  function ButtonType_button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_button_instance;
  }
  function ButtonType_reset_getInstance() {
    ButtonType_initEntries();
    return ButtonType_reset_instance;
  }
  function ButtonType_submit_getInstance() {
    ButtonType_initEntries();
    return ButtonType_submit_instance;
  }
  function CommandType_command_getInstance() {
    CommandType_initEntries();
    return CommandType_command_instance;
  }
  function CommandType_checkBox_getInstance() {
    CommandType_initEntries();
    return CommandType_checkBox_instance;
  }
  function CommandType_radio_getInstance() {
    CommandType_initEntries();
    return CommandType_radio_instance;
  }
  function Dir_ltr_getInstance() {
    Dir_initEntries();
    return Dir_ltr_instance;
  }
  function Dir_rtl_getInstance() {
    Dir_initEntries();
    return Dir_rtl_instance;
  }
  function Draggable_htmlTrue_getInstance() {
    Draggable_initEntries();
    return Draggable_htmlTrue_instance;
  }
  function Draggable_htmlFalse_getInstance() {
    Draggable_initEntries();
    return Draggable_htmlFalse_instance;
  }
  function Draggable_auto_getInstance() {
    Draggable_initEntries();
    return Draggable_auto_instance;
  }
  function FormEncType_multipartFormData_getInstance() {
    FormEncType_initEntries();
    return FormEncType_multipartFormData_instance;
  }
  function FormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    FormEncType_initEntries();
    return FormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function FormEncType_textPlain_getInstance() {
    FormEncType_initEntries();
    return FormEncType_textPlain_instance;
  }
  function FormMethod_get_getInstance() {
    FormMethod_initEntries();
    return FormMethod_get_instance;
  }
  function FormMethod_post_getInstance() {
    FormMethod_initEntries();
    return FormMethod_post_instance;
  }
  function FormMethod_put_getInstance() {
    FormMethod_initEntries();
    return FormMethod_put_instance;
  }
  function FormMethod_delete_getInstance() {
    FormMethod_initEntries();
    return FormMethod_delete_instance;
  }
  function FormMethod_patch_getInstance() {
    FormMethod_initEntries();
    return FormMethod_patch_instance;
  }
  function IframeSandbox_allowSameOrigin_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowSameOrigin_instance;
  }
  function IframeSandbox_allowFormS_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowFormS_instance;
  }
  function IframeSandbox_allowScripts_getInstance() {
    IframeSandbox_initEntries();
    return IframeSandbox_allowScripts_instance;
  }
  function InputFormEncType_multipartFormData_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_multipartFormData_instance;
  }
  function InputFormEncType_applicationXWwwFormUrlEncoded_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_applicationXWwwFormUrlEncoded_instance;
  }
  function InputFormEncType_textPlain_getInstance() {
    InputFormEncType_initEntries();
    return InputFormEncType_textPlain_instance;
  }
  function InputFormMethod_get_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_get_instance;
  }
  function InputFormMethod_post_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_post_instance;
  }
  function InputFormMethod_put_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_put_instance;
  }
  function InputFormMethod_delete_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_delete_instance;
  }
  function InputFormMethod_patch_getInstance() {
    InputFormMethod_initEntries();
    return InputFormMethod_patch_instance;
  }
  function InputType_button_getInstance() {
    InputType_initEntries();
    return InputType_button_instance;
  }
  function InputType_checkBox_getInstance() {
    InputType_initEntries();
    return InputType_checkBox_instance;
  }
  function InputType_color_getInstance() {
    InputType_initEntries();
    return InputType_color_instance;
  }
  function InputType_date_getInstance() {
    InputType_initEntries();
    return InputType_date_instance;
  }
  function InputType_dateTime_getInstance() {
    InputType_initEntries();
    return InputType_dateTime_instance;
  }
  function InputType_dateTimeLocal_getInstance() {
    InputType_initEntries();
    return InputType_dateTimeLocal_instance;
  }
  function InputType_email_getInstance() {
    InputType_initEntries();
    return InputType_email_instance;
  }
  function InputType_file_getInstance() {
    InputType_initEntries();
    return InputType_file_instance;
  }
  function InputType_hidden_getInstance() {
    InputType_initEntries();
    return InputType_hidden_instance;
  }
  function InputType_image_getInstance() {
    InputType_initEntries();
    return InputType_image_instance;
  }
  function InputType_month_getInstance() {
    InputType_initEntries();
    return InputType_month_instance;
  }
  function InputType_number_getInstance() {
    InputType_initEntries();
    return InputType_number_instance;
  }
  function InputType_password_getInstance() {
    InputType_initEntries();
    return InputType_password_instance;
  }
  function InputType_radio_getInstance() {
    InputType_initEntries();
    return InputType_radio_instance;
  }
  function InputType_range_getInstance() {
    InputType_initEntries();
    return InputType_range_instance;
  }
  function InputType_reset_getInstance() {
    InputType_initEntries();
    return InputType_reset_instance;
  }
  function InputType_search_getInstance() {
    InputType_initEntries();
    return InputType_search_instance;
  }
  function InputType_submit_getInstance() {
    InputType_initEntries();
    return InputType_submit_instance;
  }
  function InputType_text_getInstance() {
    InputType_initEntries();
    return InputType_text_instance;
  }
  function InputType_tel_getInstance() {
    InputType_initEntries();
    return InputType_tel_instance;
  }
  function InputType_time_getInstance() {
    InputType_initEntries();
    return InputType_time_instance;
  }
  function InputType_url_getInstance() {
    InputType_initEntries();
    return InputType_url_instance;
  }
  function InputType_week_getInstance() {
    InputType_initEntries();
    return InputType_week_instance;
  }
  function KeyGenKeyType_rsa_getInstance() {
    KeyGenKeyType_initEntries();
    return KeyGenKeyType_rsa_instance;
  }
  function RunAt_server_getInstance() {
    RunAt_initEntries();
    return RunAt_server_instance;
  }
  function TextAreaWrap_hard_getInstance() {
    TextAreaWrap_initEntries();
    return TextAreaWrap_hard_instance;
  }
  function TextAreaWrap_soft_getInstance() {
    TextAreaWrap_initEntries();
    return TextAreaWrap_soft_instance;
  }
  function ThScope_col_getInstance() {
    ThScope_initEntries();
    return ThScope_col_instance;
  }
  function ThScope_colGroup_getInstance() {
    ThScope_initEntries();
    return ThScope_colGroup_instance;
  }
  function ThScope_row_getInstance() {
    ThScope_initEntries();
    return ThScope_row_instance;
  }
  function ThScope_rowGroup_getInstance() {
    ThScope_initEntries();
    return ThScope_rowGroup_instance;
  }
  function AreaShape_rect_getInstance() {
    AreaShape_initEntries();
    return AreaShape_rect_instance;
  }
  function AreaShape_circle_getInstance() {
    AreaShape_initEntries();
    return AreaShape_circle_instance;
  }
  function AreaShape_poly_getInstance() {
    AreaShape_initEntries();
    return AreaShape_poly_instance;
  }
  function AreaShape_default_getInstance() {
    AreaShape_initEntries();
    return AreaShape_default_instance;
  }
  var properties_initialized_gen_enums_kt_cpcrt1;
  function init_properties_gen_enums_kt_tifmld() {
    if (properties_initialized_gen_enums_kt_cpcrt1) {
    } else {
      properties_initialized_gen_enums_kt_cpcrt1 = true;
      var tmp$ret$2;
      {
        var tmp0_associateBy = values_3();
        var capacity = coerceAtLeast(mapCapacity(tmp0_associateBy.length), 16);
        var tmp$ret$1;
        {
          var tmp0_associateByTo = LinkedHashMap_init_$Create$_1(capacity);
          var indexedObject = tmp0_associateBy;
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var element = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$0;
            {
              tmp$ret$0 = element.yj_1;
            }
            tmp0_associateByTo.a(tmp$ret$0, element);
          }
          tmp$ret$1 = tmp0_associateByTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      dirValues = tmp$ret$2;
      var tmp$ret$2_0;
      {
        var tmp0_associateBy_0 = values_4();
        var capacity_0 = coerceAtLeast(mapCapacity(tmp0_associateBy_0.length), 16);
        var tmp$ret$1_0;
        {
          var tmp0_associateByTo_0 = LinkedHashMap_init_$Create$_1(capacity_0);
          var indexedObject_0 = tmp0_associateBy_0;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$0_0;
            {
              tmp$ret$0_0 = element_0.bk_1;
            }
            tmp0_associateByTo_0.a(tmp$ret$0_0, element_0);
          }
          tmp$ret$1_0 = tmp0_associateByTo_0;
        }
        tmp$ret$2_0 = tmp$ret$1_0;
      }
      draggableValues = tmp$ret$2_0;
      var tmp$ret$2_1;
      {
        var tmp0_associateBy_1 = values_12();
        var capacity_1 = coerceAtLeast(mapCapacity(tmp0_associateBy_1.length), 16);
        var tmp$ret$1_1;
        {
          var tmp0_associateByTo_1 = LinkedHashMap_init_$Create$_1(capacity_1);
          var indexedObject_1 = tmp0_associateBy_1;
          var inductionVariable_1 = 0;
          var last_1 = indexedObject_1.length;
          while (inductionVariable_1 < last_1) {
            var element_1 = indexedObject_1[inductionVariable_1];
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var tmp$ret$0_1;
            {
              tmp$ret$0_1 = element_1.zk_1;
            }
            tmp0_associateByTo_1.a(tmp$ret$0_1, element_1);
          }
          tmp$ret$1_1 = tmp0_associateByTo_1;
        }
        tmp$ret$2_1 = tmp$ret$1_1;
      }
      runAtValues = tmp$ret$2_1;
      var tmp$ret$2_2;
      {
        var tmp0_associateBy_2 = values_15();
        var capacity_2 = coerceAtLeast(mapCapacity(tmp0_associateBy_2.length), 16);
        var tmp$ret$1_2;
        {
          var tmp0_associateByTo_2 = LinkedHashMap_init_$Create$_1(capacity_2);
          var indexedObject_2 = tmp0_associateBy_2;
          var inductionVariable_2 = 0;
          var last_2 = indexedObject_2.length;
          while (inductionVariable_2 < last_2) {
            var element_2 = indexedObject_2[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var tmp$ret$0_2;
            {
              tmp$ret$0_2 = element_2.il_1;
            }
            tmp0_associateByTo_2.a(tmp$ret$0_2, element_2);
          }
          tmp$ret$1_2 = tmp0_associateByTo_2;
        }
        tmp$ret$2_2 = tmp$ret$1_2;
      }
      areaShapeValues = tmp$ret$2_2;
      var tmp$ret$2_3;
      {
        var tmp0_associateBy_3 = values();
        var capacity_3 = coerceAtLeast(mapCapacity(tmp0_associateBy_3.length), 16);
        var tmp$ret$1_3;
        {
          var tmp0_associateByTo_3 = LinkedHashMap_init_$Create$_1(capacity_3);
          var indexedObject_3 = tmp0_associateBy_3;
          var inductionVariable_3 = 0;
          var last_3 = indexedObject_3.length;
          while (inductionVariable_3 < last_3) {
            var element_3 = indexedObject_3[inductionVariable_3];
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var tmp$ret$0_3;
            {
              tmp$ret$0_3 = element_3.mj_1;
            }
            tmp0_associateByTo_3.a(tmp$ret$0_3, element_3);
          }
          tmp$ret$1_3 = tmp0_associateByTo_3;
        }
        tmp$ret$2_3 = tmp$ret$1_3;
      }
      buttonFormEncTypeValues = tmp$ret$2_3;
      var tmp$ret$2_4;
      {
        var tmp0_associateBy_4 = values_0();
        var capacity_4 = coerceAtLeast(mapCapacity(tmp0_associateBy_4.length), 16);
        var tmp$ret$1_4;
        {
          var tmp0_associateByTo_4 = LinkedHashMap_init_$Create$_1(capacity_4);
          var indexedObject_4 = tmp0_associateBy_4;
          var inductionVariable_4 = 0;
          var last_4 = indexedObject_4.length;
          while (inductionVariable_4 < last_4) {
            var element_4 = indexedObject_4[inductionVariable_4];
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var tmp$ret$0_4;
            {
              tmp$ret$0_4 = element_4.pj_1;
            }
            tmp0_associateByTo_4.a(tmp$ret$0_4, element_4);
          }
          tmp$ret$1_4 = tmp0_associateByTo_4;
        }
        tmp$ret$2_4 = tmp$ret$1_4;
      }
      buttonFormMethodValues = tmp$ret$2_4;
      var tmp$ret$2_5;
      {
        var tmp0_associateBy_5 = values_1();
        var capacity_5 = coerceAtLeast(mapCapacity(tmp0_associateBy_5.length), 16);
        var tmp$ret$1_5;
        {
          var tmp0_associateByTo_5 = LinkedHashMap_init_$Create$_1(capacity_5);
          var indexedObject_5 = tmp0_associateBy_5;
          var inductionVariable_5 = 0;
          var last_5 = indexedObject_5.length;
          while (inductionVariable_5 < last_5) {
            var element_5 = indexedObject_5[inductionVariable_5];
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var tmp$ret$0_5;
            {
              tmp$ret$0_5 = element_5.sj_1;
            }
            tmp0_associateByTo_5.a(tmp$ret$0_5, element_5);
          }
          tmp$ret$1_5 = tmp0_associateByTo_5;
        }
        tmp$ret$2_5 = tmp$ret$1_5;
      }
      buttonTypeValues = tmp$ret$2_5;
      var tmp$ret$2_6;
      {
        var tmp0_associateBy_6 = values_2();
        var capacity_6 = coerceAtLeast(mapCapacity(tmp0_associateBy_6.length), 16);
        var tmp$ret$1_6;
        {
          var tmp0_associateByTo_6 = LinkedHashMap_init_$Create$_1(capacity_6);
          var indexedObject_6 = tmp0_associateBy_6;
          var inductionVariable_6 = 0;
          var last_6 = indexedObject_6.length;
          while (inductionVariable_6 < last_6) {
            var element_6 = indexedObject_6[inductionVariable_6];
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var tmp$ret$0_6;
            {
              tmp$ret$0_6 = element_6.vj_1;
            }
            tmp0_associateByTo_6.a(tmp$ret$0_6, element_6);
          }
          tmp$ret$1_6 = tmp0_associateByTo_6;
        }
        tmp$ret$2_6 = tmp$ret$1_6;
      }
      commandTypeValues = tmp$ret$2_6;
      var tmp$ret$2_7;
      {
        var tmp0_associateBy_7 = values_5();
        var capacity_7 = coerceAtLeast(mapCapacity(tmp0_associateBy_7.length), 16);
        var tmp$ret$1_7;
        {
          var tmp0_associateByTo_7 = LinkedHashMap_init_$Create$_1(capacity_7);
          var indexedObject_7 = tmp0_associateBy_7;
          var inductionVariable_7 = 0;
          var last_7 = indexedObject_7.length;
          while (inductionVariable_7 < last_7) {
            var element_7 = indexedObject_7[inductionVariable_7];
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var tmp$ret$0_7;
            {
              tmp$ret$0_7 = element_7.ek_1;
            }
            tmp0_associateByTo_7.a(tmp$ret$0_7, element_7);
          }
          tmp$ret$1_7 = tmp0_associateByTo_7;
        }
        tmp$ret$2_7 = tmp$ret$1_7;
      }
      formEncTypeValues = tmp$ret$2_7;
      var tmp$ret$2_8;
      {
        var tmp0_associateBy_8 = values_6();
        var capacity_8 = coerceAtLeast(mapCapacity(tmp0_associateBy_8.length), 16);
        var tmp$ret$1_8;
        {
          var tmp0_associateByTo_8 = LinkedHashMap_init_$Create$_1(capacity_8);
          var indexedObject_8 = tmp0_associateBy_8;
          var inductionVariable_8 = 0;
          var last_8 = indexedObject_8.length;
          while (inductionVariable_8 < last_8) {
            var element_8 = indexedObject_8[inductionVariable_8];
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var tmp$ret$0_8;
            {
              tmp$ret$0_8 = element_8.hk_1;
            }
            tmp0_associateByTo_8.a(tmp$ret$0_8, element_8);
          }
          tmp$ret$1_8 = tmp0_associateByTo_8;
        }
        tmp$ret$2_8 = tmp$ret$1_8;
      }
      formMethodValues = tmp$ret$2_8;
      var tmp$ret$2_9;
      {
        var tmp0_associateBy_9 = values_7();
        var capacity_9 = coerceAtLeast(mapCapacity(tmp0_associateBy_9.length), 16);
        var tmp$ret$1_9;
        {
          var tmp0_associateByTo_9 = LinkedHashMap_init_$Create$_1(capacity_9);
          var indexedObject_9 = tmp0_associateBy_9;
          var inductionVariable_9 = 0;
          var last_9 = indexedObject_9.length;
          while (inductionVariable_9 < last_9) {
            var element_9 = indexedObject_9[inductionVariable_9];
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var tmp$ret$0_9;
            {
              tmp$ret$0_9 = element_9.kk_1;
            }
            tmp0_associateByTo_9.a(tmp$ret$0_9, element_9);
          }
          tmp$ret$1_9 = tmp0_associateByTo_9;
        }
        tmp$ret$2_9 = tmp$ret$1_9;
      }
      iframeSandboxValues = tmp$ret$2_9;
      var tmp$ret$2_10;
      {
        var tmp0_associateBy_10 = values_10();
        var capacity_10 = coerceAtLeast(mapCapacity(tmp0_associateBy_10.length), 16);
        var tmp$ret$1_10;
        {
          var tmp0_associateByTo_10 = LinkedHashMap_init_$Create$_1(capacity_10);
          var indexedObject_10 = tmp0_associateBy_10;
          var inductionVariable_10 = 0;
          var last_10 = indexedObject_10.length;
          while (inductionVariable_10 < last_10) {
            var element_10 = indexedObject_10[inductionVariable_10];
            inductionVariable_10 = inductionVariable_10 + 1 | 0;
            var tmp$ret$0_10;
            {
              tmp$ret$0_10 = element_10.tk_1;
            }
            tmp0_associateByTo_10.a(tmp$ret$0_10, element_10);
          }
          tmp$ret$1_10 = tmp0_associateByTo_10;
        }
        tmp$ret$2_10 = tmp$ret$1_10;
      }
      inputTypeValues = tmp$ret$2_10;
      var tmp$ret$2_11;
      {
        var tmp0_associateBy_11 = values_8();
        var capacity_11 = coerceAtLeast(mapCapacity(tmp0_associateBy_11.length), 16);
        var tmp$ret$1_11;
        {
          var tmp0_associateByTo_11 = LinkedHashMap_init_$Create$_1(capacity_11);
          var indexedObject_11 = tmp0_associateBy_11;
          var inductionVariable_11 = 0;
          var last_11 = indexedObject_11.length;
          while (inductionVariable_11 < last_11) {
            var element_11 = indexedObject_11[inductionVariable_11];
            inductionVariable_11 = inductionVariable_11 + 1 | 0;
            var tmp$ret$0_11;
            {
              tmp$ret$0_11 = element_11.nk_1;
            }
            tmp0_associateByTo_11.a(tmp$ret$0_11, element_11);
          }
          tmp$ret$1_11 = tmp0_associateByTo_11;
        }
        tmp$ret$2_11 = tmp$ret$1_11;
      }
      inputFormEncTypeValues = tmp$ret$2_11;
      var tmp$ret$2_12;
      {
        var tmp0_associateBy_12 = values_9();
        var capacity_12 = coerceAtLeast(mapCapacity(tmp0_associateBy_12.length), 16);
        var tmp$ret$1_12;
        {
          var tmp0_associateByTo_12 = LinkedHashMap_init_$Create$_1(capacity_12);
          var indexedObject_12 = tmp0_associateBy_12;
          var inductionVariable_12 = 0;
          var last_12 = indexedObject_12.length;
          while (inductionVariable_12 < last_12) {
            var element_12 = indexedObject_12[inductionVariable_12];
            inductionVariable_12 = inductionVariable_12 + 1 | 0;
            var tmp$ret$0_12;
            {
              tmp$ret$0_12 = element_12.qk_1;
            }
            tmp0_associateByTo_12.a(tmp$ret$0_12, element_12);
          }
          tmp$ret$1_12 = tmp0_associateByTo_12;
        }
        tmp$ret$2_12 = tmp$ret$1_12;
      }
      inputFormMethodValues = tmp$ret$2_12;
      var tmp$ret$2_13;
      {
        var tmp0_associateBy_13 = values_11();
        var capacity_13 = coerceAtLeast(mapCapacity(tmp0_associateBy_13.length), 16);
        var tmp$ret$1_13;
        {
          var tmp0_associateByTo_13 = LinkedHashMap_init_$Create$_1(capacity_13);
          var indexedObject_13 = tmp0_associateBy_13;
          var inductionVariable_13 = 0;
          var last_13 = indexedObject_13.length;
          while (inductionVariable_13 < last_13) {
            var element_13 = indexedObject_13[inductionVariable_13];
            inductionVariable_13 = inductionVariable_13 + 1 | 0;
            var tmp$ret$0_13;
            {
              tmp$ret$0_13 = element_13.wk_1;
            }
            tmp0_associateByTo_13.a(tmp$ret$0_13, element_13);
          }
          tmp$ret$1_13 = tmp0_associateByTo_13;
        }
        tmp$ret$2_13 = tmp$ret$1_13;
      }
      keyGenKeyTypeValues = tmp$ret$2_13;
      var tmp$ret$2_14;
      {
        var tmp0_associateBy_14 = values_13();
        var capacity_14 = coerceAtLeast(mapCapacity(tmp0_associateBy_14.length), 16);
        var tmp$ret$1_14;
        {
          var tmp0_associateByTo_14 = LinkedHashMap_init_$Create$_1(capacity_14);
          var indexedObject_14 = tmp0_associateBy_14;
          var inductionVariable_14 = 0;
          var last_14 = indexedObject_14.length;
          while (inductionVariable_14 < last_14) {
            var element_14 = indexedObject_14[inductionVariable_14];
            inductionVariable_14 = inductionVariable_14 + 1 | 0;
            var tmp$ret$0_14;
            {
              tmp$ret$0_14 = element_14.cl_1;
            }
            tmp0_associateByTo_14.a(tmp$ret$0_14, element_14);
          }
          tmp$ret$1_14 = tmp0_associateByTo_14;
        }
        tmp$ret$2_14 = tmp$ret$1_14;
      }
      textAreaWrapValues = tmp$ret$2_14;
      var tmp$ret$2_15;
      {
        var tmp0_associateBy_15 = values_14();
        var capacity_15 = coerceAtLeast(mapCapacity(tmp0_associateBy_15.length), 16);
        var tmp$ret$1_15;
        {
          var tmp0_associateByTo_15 = LinkedHashMap_init_$Create$_1(capacity_15);
          var indexedObject_15 = tmp0_associateBy_15;
          var inductionVariable_15 = 0;
          var last_15 = indexedObject_15.length;
          while (inductionVariable_15 < last_15) {
            var element_15 = indexedObject_15[inductionVariable_15];
            inductionVariable_15 = inductionVariable_15 + 1 | 0;
            var tmp$ret$0_15;
            {
              tmp$ret$0_15 = element_15.fl_1;
            }
            tmp0_associateByTo_15.a(tmp$ret$0_15, element_15);
          }
          tmp$ret$1_15 = tmp0_associateByTo_15;
        }
        tmp$ret$2_15 = tmp$ret$1_15;
      }
      thScopeValues = tmp$ret$2_15;
    }
  }
  function HtmlBlockTag() {
  }
  HtmlBlockTag.$metadata$ = interfaceMeta('HtmlBlockTag', [CommonAttributeGroupFacade, FlowContent]);
  function HtmlBlockInlineTag() {
  }
  HtmlBlockInlineTag.$metadata$ = interfaceMeta('HtmlBlockInlineTag', [CommonAttributeGroupFacade, FlowPhrasingContent, HtmlBlockTag, HtmlInlineTag]);
  function CommonAttributeGroupFacadeFlowInteractivePhrasingContent() {
  }
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.$metadata$ = interfaceMeta('CommonAttributeGroupFacadeFlowInteractivePhrasingContent', [CommonAttributeGroupFacade, CommonAttributeGroupFacadeFlowInteractiveContent, FlowInteractiveContent, FlowInteractivePhrasingContent, FlowPhrasingContent, HtmlBlockInlineTag, HtmlBlockTag, HtmlInlineTag]);
  function FlowPhrasingContent() {
  }
  FlowPhrasingContent.$metadata$ = interfaceMeta('FlowPhrasingContent', [FlowContent, PhrasingContent]);
  function HtmlInlineTag() {
  }
  HtmlInlineTag.$metadata$ = interfaceMeta('HtmlInlineTag', [CommonAttributeGroupFacade, PhrasingContent]);
  function CommonAttributeGroupFacadeFlowInteractiveContent() {
  }
  CommonAttributeGroupFacadeFlowInteractiveContent.$metadata$ = interfaceMeta('CommonAttributeGroupFacadeFlowInteractiveContent', [CommonAttributeGroupFacade, FlowInteractiveContent, HtmlBlockTag]);
  function FlowInteractiveContent() {
  }
  FlowInteractiveContent.$metadata$ = interfaceMeta('FlowInteractiveContent', [FlowContent, InteractiveContent]);
  function FlowInteractivePhrasingContent() {
  }
  FlowInteractivePhrasingContent.$metadata$ = interfaceMeta('FlowInteractivePhrasingContent', [FlowInteractiveContent, FlowPhrasingContent]);
  function div_0(_this__u8e3s4, classes, block) {
    var tmp$ret$0;
    {
      var tmp0_visit = new DIV(attributesMapOf('class', classes), _this__u8e3s4.sh());
      tmp0_visit.sh().zh(tmp0_visit);
      var tmp;
      try {
        tmp = block(tmp0_visit);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = tmp0_visit.sh().di(tmp0_visit, $p);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      finally {
        tmp0_visit.sh().ci(tmp0_visit);
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  function FlowContent() {
  }
  FlowContent.$metadata$ = interfaceMeta('FlowContent', [FlowOrMetaDataOrPhrasingContent, FlowOrHeadingContent, FlowOrMetaDataContent, FlowOrInteractiveContent, FlowOrPhrasingContent, SectioningOrFlowContent, FlowOrInteractiveOrPhrasingContent, Tag]);
  function PhrasingContent() {
  }
  PhrasingContent.$metadata$ = interfaceMeta('PhrasingContent', [FlowOrMetaDataOrPhrasingContent, FlowOrPhrasingContent, FlowOrInteractiveOrPhrasingContent, Tag]);
  function InteractiveContent() {
  }
  InteractiveContent.$metadata$ = interfaceMeta('InteractiveContent', [FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, Tag]);
  function img(_this__u8e3s4, alt, src, classes, block) {
    var tmp$ret$0;
    {
      var tmp0_visit = new IMG(attributesMapOf_0(['alt', alt, 'src', src, 'class', classes]), _this__u8e3s4.sh());
      tmp0_visit.sh().zh(tmp0_visit);
      var tmp;
      try {
        tmp = block(tmp0_visit);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = tmp0_visit.sh().di(tmp0_visit, $p);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      finally {
        tmp0_visit.sh().ci(tmp0_visit);
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  function span(_this__u8e3s4, classes, block) {
    var tmp$ret$0;
    {
      var tmp0_visit = new SPAN(attributesMapOf('class', classes), _this__u8e3s4.sh());
      tmp0_visit.sh().zh(tmp0_visit);
      var tmp;
      try {
        tmp = block(tmp0_visit);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = tmp0_visit.sh().di(tmp0_visit, $p);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      finally {
        tmp0_visit.sh().ci(tmp0_visit);
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  function input(_this__u8e3s4, type, formEncType, formMethod, name, classes, block) {
    var tmp$ret$0;
    {
      var tmp0_safe_receiver = type;
      var tmp = tmp0_safe_receiver == null ? null : enumEncode(tmp0_safe_receiver);
      var tmp1_safe_receiver = formEncType;
      var tmp_0 = tmp1_safe_receiver == null ? null : enumEncode(tmp1_safe_receiver);
      var tmp2_safe_receiver = formMethod;
      var tmp0_visit = new INPUT(attributesMapOf_0(['type', tmp, 'formenctype', tmp_0, 'formmethod', tmp2_safe_receiver == null ? null : enumEncode(tmp2_safe_receiver), 'name', name, 'class', classes]), _this__u8e3s4.sh());
      tmp0_visit.sh().zh(tmp0_visit);
      var tmp_1;
      try {
        tmp_1 = block(tmp0_visit);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          tmp_2 = tmp0_visit.sh().di(tmp0_visit, $p);
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      finally {
        tmp0_visit.sh().ci(tmp0_visit);
      }
      tmp$ret$0 = tmp_1;
    }
    return tmp$ret$0;
  }
  function FlowOrMetaDataOrPhrasingContent() {
  }
  FlowOrMetaDataOrPhrasingContent.$metadata$ = interfaceMeta('FlowOrMetaDataOrPhrasingContent', [Tag]);
  function FlowOrHeadingContent() {
  }
  FlowOrHeadingContent.$metadata$ = interfaceMeta('FlowOrHeadingContent', [Tag]);
  function FlowOrMetaDataContent() {
  }
  FlowOrMetaDataContent.$metadata$ = interfaceMeta('FlowOrMetaDataContent', [FlowOrMetaDataOrPhrasingContent, Tag]);
  function FlowOrInteractiveContent() {
  }
  FlowOrInteractiveContent.$metadata$ = interfaceMeta('FlowOrInteractiveContent', [FlowOrInteractiveOrPhrasingContent, Tag]);
  function FlowOrPhrasingContent() {
  }
  FlowOrPhrasingContent.$metadata$ = interfaceMeta('FlowOrPhrasingContent', [FlowOrInteractiveOrPhrasingContent, FlowOrMetaDataOrPhrasingContent, Tag]);
  function SectioningOrFlowContent() {
  }
  SectioningOrFlowContent.$metadata$ = interfaceMeta('SectioningOrFlowContent', [Tag]);
  function FlowOrInteractiveOrPhrasingContent() {
  }
  FlowOrInteractiveOrPhrasingContent.$metadata$ = interfaceMeta('FlowOrInteractiveOrPhrasingContent', [Tag]);
  function DIV(initialAttributes, consumer) {
    HTMLTag.call(this, 'div', consumer, initialAttributes, null, false, false);
    this.pl_1 = consumer;
  }
  DIV.prototype.sh = function () {
    return this.pl_1;
  };
  DIV.$metadata$ = classMeta('DIV', [HtmlBlockTag], undefined, undefined, undefined, HTMLTag.prototype);
  function FOOTER(initialAttributes, consumer) {
    HTMLTag.call(this, 'footer', consumer, initialAttributes, null, false, false);
    this.cm_1 = consumer;
  }
  FOOTER.prototype.sh = function () {
    return this.cm_1;
  };
  FOOTER.$metadata$ = classMeta('FOOTER', [HtmlBlockTag], undefined, undefined, undefined, HTMLTag.prototype);
  function INPUT(initialAttributes, consumer) {
    HTMLTag.call(this, 'input', consumer, initialAttributes, null, true, true);
    this.jm_1 = consumer;
  }
  INPUT.prototype.sh = function () {
    return this.jm_1;
  };
  INPUT.prototype.km = function (newValue) {
    get_attributeStringString().oi(this, 'placeholder', newValue);
  };
  INPUT.$metadata$ = classMeta('INPUT', [CommonAttributeGroupFacadeFlowInteractivePhrasingContent], undefined, undefined, undefined, HTMLTag.prototype);
  function IMG(initialAttributes, consumer) {
    HTMLTag.call(this, 'img', consumer, initialAttributes, null, true, true);
    this.rm_1 = consumer;
  }
  IMG.prototype.sh = function () {
    return this.rm_1;
  };
  IMG.$metadata$ = classMeta('IMG', [CommonAttributeGroupFacadeFlowInteractivePhrasingContent], undefined, undefined, undefined, HTMLTag.prototype);
  function SPAN(initialAttributes, consumer) {
    HTMLTag.call(this, 'span', consumer, initialAttributes, null, true, false);
    this.ym_1 = consumer;
  }
  SPAN.prototype.sh = function () {
    return this.ym_1;
  };
  SPAN.$metadata$ = classMeta('SPAN', [HtmlBlockInlineTag], undefined, undefined, undefined, HTMLTag.prototype);
  function HTMLTag$attributes$lambda(this$0) {
    return function () {
      return this$0.sh();
    };
  }
  function HTMLTag(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag) {
    this.ql_1 = tagName;
    this.rl_1 = consumer;
    this.sl_1 = namespace;
    this.tl_1 = inlineTag;
    this.ul_1 = emptyTag;
    var tmp = this;
    tmp.vl_1 = new DelegatingMap(initialAttributes, this, HTMLTag$attributes$lambda(this));
  }
  HTMLTag.prototype.rh = function () {
    return this.ql_1;
  };
  HTMLTag.prototype.sh = function () {
    return this.rl_1;
  };
  HTMLTag.prototype.th = function () {
    return this.sl_1;
  };
  HTMLTag.prototype.uh = function () {
    return this.vl_1;
  };
  HTMLTag.prototype.vh = function () {
    return this.uh().gj();
  };
  HTMLTag.$metadata$ = classMeta('HTMLTag', [Tag]);
  function visitTagAndFinalize(_this__u8e3s4, consumer, block) {
    if (!(_this__u8e3s4.sh() === consumer)) {
      throw IllegalArgumentException_init_$Create$('Wrong exception');
    }
    {
      _this__u8e3s4.sh().zh(_this__u8e3s4);
      try {
        block(_this__u8e3s4);
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.sh().di(_this__u8e3s4, $p);
        } else {
          throw $p;
        }
      }
      finally {
        _this__u8e3s4.sh().ci(_this__u8e3s4);
      }
    }
    return consumer.ei();
  }
  function visitTag(_this__u8e3s4, block) {
    _this__u8e3s4.sh().zh(_this__u8e3s4);
    try {
      block(_this__u8e3s4);
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.sh().di(_this__u8e3s4, $p);
      } else {
        throw $p;
      }
    }
    finally {
      _this__u8e3s4.sh().ci(_this__u8e3s4);
    }
  }
  function append(_this__u8e3s4, block) {
    var tmp$ret$1;
    {
      var tmp0_let = ArrayList_init_$Create$();
      {
      }
      var tmp$ret$0;
      {
        var tmp = createTree(get_ownerDocumentExt(_this__u8e3s4));
        block(onFinalize(tmp, append$lambda(tmp0_let, _this__u8e3s4)));
        tmp$ret$0 = tmp0_let;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function createTree(_this__u8e3s4) {
    return new JSDOMBuilder(_this__u8e3s4);
  }
  function get_ownerDocumentExt(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof Document) {
      tmp = _this__u8e3s4;
    } else {
      var tmp0_elvis_lhs = _this__u8e3s4.ownerDocument;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Node has no ownerDocument');
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function asR(_this__u8e3s4, $this) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function JSDOMBuilder(document) {
    this.zm_1 = document;
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    tmp.an_1 = tmp$ret$0;
    this.bn_1 = null;
  }
  JSDOMBuilder.prototype.zh = function (tag) {
    var tmp;
    if (!(tag.th() == null)) {
      var tmp$ret$0;
      {
        var tmp0_asDynamic = this.zm_1.createElementNS(ensureNotNull(tag.th()), tag.rh());
        tmp$ret$0 = tmp0_asDynamic;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp_0 = this.zm_1.createElement(tag.rh());
      tmp = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    }
    var element = tmp;
    {
      var tmp1_forEach = tag.vh();
      var tmp0_iterator = tmp1_forEach.d();
      while (tmp0_iterator.e()) {
        var element_0 = tmp0_iterator.f();
        {
          element.setAttribute(element_0.q1(), element_0.s1());
        }
      }
    }
    var tmp$ret$1;
    {
      var tmp2_isNotEmpty = this.an_1;
      tmp$ret$1 = !tmp2_isNotEmpty.k();
    }
    if (tmp$ret$1) {
      last(this.an_1).appendChild(element);
    }
    this.an_1.b(element);
  };
  JSDOMBuilder.prototype.ai = function (tag, attribute, value) {
    if (this.an_1.k())
      throw IllegalStateException_init_$Create$('No current tag');
    else {
      var tmp$ret$1;
      {
        var tmp0_toLowerCase = last(this.an_1).tagName;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_toLowerCase;
        }
        tmp$ret$1 = tmp$ret$0.toLowerCase();
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      {
        var tmp1_toLowerCase = tag.rh();
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_toLowerCase;
        }
        tmp$ret$3 = tmp$ret$2.toLowerCase();
      }
      if (!(tmp === tmp$ret$3))
        throw IllegalStateException_init_$Create$('Wrong current tag');
      else {
        var tmp$ret$4;
        {
          var tmp2_let = last(this.an_1);
          {
          }
          var tmp_0;
          if (value == null) {
            tmp_0 = tmp2_let.removeAttribute(attribute);
          } else {
            tmp_0 = tmp2_let.setAttribute(attribute, value);
          }
          tmp$ret$4 = tmp_0;
        }
      }
    }
  };
  JSDOMBuilder.prototype.bi = function (tag, event, value) {
    if (this.an_1.k())
      throw IllegalStateException_init_$Create$('No current tag');
    else {
      var tmp$ret$1;
      {
        var tmp0_toLowerCase = last(this.an_1).tagName;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_toLowerCase;
        }
        tmp$ret$1 = tmp$ret$0.toLowerCase();
      }
      var tmp = tmp$ret$1;
      var tmp$ret$3;
      {
        var tmp1_toLowerCase = tag.rh();
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_toLowerCase;
        }
        tmp$ret$3 = tmp$ret$2.toLowerCase();
      }
      if (!(tmp === tmp$ret$3))
        throw IllegalStateException_init_$Create$('Wrong current tag');
      else {
        var tmp2_setEvent = last(this.an_1);
        var tmp$ret$4;
        {
          tmp$ret$4 = tmp2_setEvent;
        }
        tmp$ret$4[event] = value;
      }
    }
  };
  JSDOMBuilder.prototype.ci = function (tag) {
    var tmp;
    if (this.an_1.k()) {
      tmp = true;
    } else {
      var tmp$ret$1;
      {
        var tmp0_toLowerCase = last(this.an_1).tagName;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_toLowerCase;
        }
        tmp$ret$1 = tmp$ret$0.toLowerCase();
      }
      var tmp_0 = tmp$ret$1;
      var tmp$ret$3;
      {
        var tmp1_toLowerCase = tag.rh();
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_toLowerCase;
        }
        tmp$ret$3 = tmp$ret$2.toLowerCase();
      }
      tmp = !(tmp_0 === tmp$ret$3);
    }
    if (tmp) {
      throw IllegalStateException_init_$Create$("We haven't entered tag " + tag.rh() + ' but trying to leave');
    }
    this.bn_1 = this.an_1.z2(get_lastIndex(this.an_1));
  };
  JSDOMBuilder.prototype.yh = function (content) {
    if (this.an_1.k()) {
      throw IllegalStateException_init_$Create$('No current DOM node');
    }
    last(this.an_1).appendChild(this.zm_1.createTextNode(toString(content)));
  };
  JSDOMBuilder.prototype.ei = function () {
    var tmp0_safe_receiver = this.bn_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : asR(tmp0_safe_receiver, this);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("We can't finalize as there was no tags");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  JSDOMBuilder.$metadata$ = classMeta('JSDOMBuilder', [TagConsumer]);
  function append$lambda($tmp0_let, $this_append) {
    return function (it, partial) {
      var tmp;
      if (!partial) {
        $tmp0_let.b(it);
        $this_append.appendChild(it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function set_onChangeFunction(_this__u8e3s4, newValue) {
    _this__u8e3s4.sh().bi(_this__u8e3s4, 'onchange', newValue);
  }
  function set_onKeyUpFunction(_this__u8e3s4, newValue) {
    _this__u8e3s4.sh().bi(_this__u8e3s4, 'onkeyup', newValue);
  }
  function set_onClickFunction(_this__u8e3s4, newValue) {
    _this__u8e3s4.sh().bi(_this__u8e3s4, 'onclick', newValue);
  }
  //region block: post-declaration
  StringEncoder.prototype.ni = empty;
  BooleanEncoder.prototype.ni = empty;
  TickerEncoder.prototype.ni = empty;
  EnumEncoder.prototype.ni = empty;
  HTMLTag.prototype.xh = text;
  DIV.prototype.xh = text;
  FOOTER.prototype.xh = text;
  INPUT.prototype.xh = text;
  IMG.prototype.xh = text;
  SPAN.prototype.wh = unaryPlus;
  SPAN.prototype.xh = text;
  JSDOMBuilder.prototype.di = onTagError;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = enumEncode;
  _.$_$.b = append;
  _.$_$.c = set_onChangeFunction;
  _.$_$.d = set_onClickFunction;
  _.$_$.e = set_onKeyUpFunction;
  _.$_$.f = DIV;
  _.$_$.g = FOOTER;
  _.$_$.h = IMG;
  _.$_$.i = INPUT;
  _.$_$.j = SPAN;
  _.$_$.k = attributesMapOf_0;
  _.$_$.l = attributesMapOf;
  _.$_$.m = get_id;
  _.$_$.n = set_id;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlinx_kotlinx_html.js.map