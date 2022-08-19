(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    root['ktor-ktor-http-js-ir'] = factory(typeof this['ktor-ktor-http-js-ir'] === 'undefined' ? {} : this['ktor-ktor-http-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var encode$default = kotlin_io_ktor_ktor_io.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var prepareReadFirstHead = kotlin_io_ktor_ktor_io.$_$.u;
  var prepareReadNextHead = kotlin_io_ktor_ktor_io.$_$.v;
  var completeReadHead = kotlin_io_ktor_ktor_io.$_$.t;
  var charArray = kotlin_kotlin.$_$.m5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a2;
  var concatToString = kotlin_kotlin.$_$.w6;
  var charSequenceGet = kotlin_kotlin.$_$.n5;
  var Char = kotlin_kotlin.$_$.q7;
  var equals = kotlin_kotlin.$_$.s5;
  var toString = kotlin_kotlin.$_$.l6;
  var isSurrogate = kotlin_kotlin.$_$.e7;
  var encode = kotlin_io_ktor_ktor_io.$_$.r;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.e2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.d2;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var charSequenceLength = kotlin_kotlin.$_$.o5;
  var charSequenceSubSequence = kotlin_kotlin.$_$.p5;
  var toByte = kotlin_kotlin.$_$.i6;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.z;
  var Exception = kotlin_kotlin.$_$.v7;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.k5;
  var classMeta = kotlin_kotlin.$_$.q5;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.c2;
  var numberToChar = kotlin_kotlin.$_$.f6;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.f2;
  var plus = kotlin_kotlin.$_$.a4;
  var plus_0 = kotlin_kotlin.$_$.b4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.k3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g2;
  var toSet = kotlin_kotlin.$_$.l4;
  var setOf = kotlin_kotlin.$_$.f4;
  var plus_1 = kotlin_kotlin.$_$.z3;
  var listOf = kotlin_kotlin.$_$.w3;
  var emptyList = kotlin_kotlin.$_$.m3;
  var equals_0 = kotlin_kotlin.$_$.z6;
  var Collection = kotlin_kotlin.$_$.y2;
  var isInterface = kotlin_kotlin.$_$.b6;
  var isBlank = kotlin_kotlin.$_$.b7;
  var last = kotlin_kotlin.$_$.u3;
  var indexOf$default = kotlin_kotlin.$_$.k;
  var THROW_CCE = kotlin_kotlin.$_$.b8;
  var isCharSequence = kotlin_kotlin.$_$.a6;
  var trim = kotlin_kotlin.$_$.o7;
  var contains$default = kotlin_kotlin.$_$.h;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var plus_2 = kotlin_kotlin.$_$.c4;
  var getStringHashCode = kotlin_kotlin.$_$.w5;
  var hashCode = kotlin_kotlin.$_$.x5;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.n;
  var IllegalArgumentException = kotlin_kotlin.$_$.w7;
  var get_name = kotlin_io_ktor_ktor_io.$_$.s;
  var get_lastIndex = kotlin_kotlin.$_$.s3;
  var last_0 = kotlin_kotlin.$_$.h7;
  var first = kotlin_kotlin.$_$.a7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.g7;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.s;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.p;
  var emptySet = kotlin_kotlin.$_$.o3;
  var get = kotlin_io_ktor_ktor_utils.$_$.o;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.n;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.r;
  var toDoubleOrNull = kotlin_kotlin.$_$.j7;
  var rangeTo = kotlin_kotlin.$_$.s6;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.j8;
  var to = kotlin_kotlin.$_$.p8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var asList = kotlin_kotlin.$_$.j3;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.b2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var toLong = kotlin_kotlin.$_$.n7;
  var mapCapacity = kotlin_kotlin.$_$.x3;
  var coerceAtLeast = kotlin_kotlin.$_$.n6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var StringValuesBuilder = kotlin_io_ktor_ktor_utils.$_$.q;
  var isWhitespace = kotlin_kotlin.$_$.f7;
  var startsWith$default = kotlin_kotlin.$_$.q;
  var charArrayOf = kotlin_kotlin.$_$.l5;
  var split$default = kotlin_kotlin.$_$.n;
  var toMutableList = kotlin_kotlin.$_$.k4;
  var first_0 = kotlin_kotlin.$_$.r3;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.x;
  var indexOfAny$default = kotlin_kotlin.$_$.i;
  var dropLast = kotlin_kotlin.$_$.l3;
  var IllegalStateException = kotlin_kotlin.$_$.x7;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q1;
  var indexOf$default_0 = kotlin_kotlin.$_$.j;
  var toInt = kotlin_kotlin.$_$.k7;
  var listOf_0 = kotlin_kotlin.$_$.v3;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.y;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.v;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var startsWith$default_0 = kotlin_kotlin.$_$.p;
  var addAll = kotlin_kotlin.$_$.h3;
  var joinTo$default = kotlin_kotlin.$_$.g;
  var toString_0 = kotlin_kotlin.$_$.o8;
  var lazy_0 = kotlin_kotlin.$_$.k8;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var KProperty1 = kotlin_kotlin.$_$.u6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.v5;
  var encodeToByteArray = kotlin_kotlin.$_$.y6;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.q;
  var toLong_0 = kotlin_kotlin.$_$.j6;
  var take = kotlin_kotlin.$_$.i7;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  //endregion
  //region block: pre-declaration
  URLDecodeException.prototype = Object.create(Exception.prototype);
  URLDecodeException.prototype.constructor = URLDecodeException;
  ContentType.prototype = Object.create(HeaderValueWithParameters.prototype);
  ContentType.prototype.constructor = ContentType;
  BadContentTypeFormatException.prototype = Object.create(Exception.prototype);
  BadContentTypeFormatException.prototype.constructor = BadContentTypeFormatException;
  HeadersBuilder.prototype = Object.create(StringValuesBuilderImpl.prototype);
  HeadersBuilder.prototype.constructor = HeadersBuilder;
  HeadersImpl.prototype = Object.create(StringValuesImpl.prototype);
  HeadersImpl.prototype.constructor = HeadersImpl;
  IllegalHeaderNameException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalHeaderNameException.prototype.constructor = IllegalHeaderNameException;
  IllegalHeaderValueException.prototype = Object.create(IllegalArgumentException.prototype);
  IllegalHeaderValueException.prototype.constructor = IllegalHeaderValueException;
  UnsafeHeaderException.prototype = Object.create(IllegalArgumentException.prototype);
  UnsafeHeaderException.prototype.constructor = UnsafeHeaderException;
  ParametersBuilderImpl.prototype = Object.create(StringValuesBuilderImpl.prototype);
  ParametersBuilderImpl.prototype.constructor = ParametersBuilderImpl;
  ParametersImpl.prototype = Object.create(StringValuesImpl.prototype);
  ParametersImpl.prototype.constructor = ParametersImpl;
  URLParserException.prototype = Object.create(IllegalStateException.prototype);
  URLParserException.prototype.constructor = URLParserException;
  NoContent.prototype = Object.create(OutgoingContent.prototype);
  NoContent.prototype.constructor = NoContent;
  ReadChannelContent.prototype = Object.create(OutgoingContent.prototype);
  ReadChannelContent.prototype.constructor = ReadChannelContent;
  WriteChannelContent.prototype = Object.create(OutgoingContent.prototype);
  WriteChannelContent.prototype.constructor = WriteChannelContent;
  ByteArrayContent.prototype = Object.create(OutgoingContent.prototype);
  ByteArrayContent.prototype.constructor = ByteArrayContent;
  ProtocolUpgrade.prototype = Object.create(OutgoingContent.prototype);
  ProtocolUpgrade.prototype.constructor = ProtocolUpgrade;
  TextContent.prototype = Object.create(ByteArrayContent.prototype);
  TextContent.prototype.constructor = TextContent;
  //endregion
  function get_URL_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_URL_ALPHABET_CHARS() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET_CHARS;
  }
  var URL_ALPHABET_CHARS;
  function get_HEX_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  var ATTRIBUTE_CHARACTERS;
  function get_OAUTH_SYMBOLS() {
    init_properties_Codecs_kt_hjkt7n();
    return OAUTH_SYMBOLS;
  }
  var OAUTH_SYMBOLS;
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    init_properties_Codecs_kt_hjkt7n();
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
          var tmp = Charsets_getInstance().w1e_1.z1e();
          var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
          forEach_0(content, encodeURLParameter$lambda(tmp0_apply, spaceToPlus));
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function encodeURLParameter$default(_this__u8e3s4, spaceToPlus, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      spaceToPlus = false;
    return encodeURLParameter(_this__u8e3s4, spaceToPlus);
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function decodeURLPart$default(_this__u8e3s4, start, end, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().w1e_1;
    return decodeURLPart(_this__u8e3s4, start, end, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    init_properties_Codecs_kt_hjkt7n();
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
          var tmp = charset.z1e();
          var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
          forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, tmp0_apply, encodeFull));
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function encodeURLQueryComponent$default(_this__u8e3s4, encodeFull, spaceToPlus, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      encodeFull = false;
    if (!(($mask0 & 2) === 0))
      spaceToPlus = false;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().w1e_1;
    return encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset);
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function decodeURLQueryComponent$default(_this__u8e3s4, start, end, plusIsSpace, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      plusIsSpace = false;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().w1e_1;
    return decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPathPart(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLPath(_this__u8e3s4, true);
  }
  function forEach_0(_this__u8e3s4, block) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$0;
    $l$block: {
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_1: do {
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = current;
            $l$loop: while (true) {
              var tmp$ret$1;
              {
                tmp$ret$1 = tmp0__anonymous__q1qw7t.s15_1 > tmp0__anonymous__q1qw7t.r15_1;
              }
              if (!tmp$ret$1) {
                break $l$loop;
              }
              block(tmp0__anonymous__q1qw7t.l1c());
            }
            tmp$ret$2 = true;
          }
          if (!tmp$ret$2) {
            break $l$loop_1;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_1;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
  }
  function percentEncode(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    var code = _this__u8e3s4 & 255;
    var array = charArray(3);
    array[0] = _Char___init__impl__6a9atx(37);
    array[1] = hexDigitToChar(code >> 4);
    array[2] = hexDigitToChar(code & 15);
    return concatToString(array);
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(37))) ? true : plusIsSpace ? equals(new Char(ch), new Char(_Char___init__impl__6a9atx(43))) : false) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    var tmp;
    if (start === 0 ? end === _this__u8e3s4.length : false) {
      tmp = toString(_this__u8e3s4);
    } else {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = _this__u8e3s4;
        }
        tmp$ret$1 = tmp$ret$0.substring(start, end);
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function encodeURLPath(_this__u8e3s4, encodeSlash) {
    init_properties_Codecs_kt_hjkt7n();
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
          var charset = Charsets_getInstance().w1e_1;
          var index = 0;
          $l$loop_0: while (index < _this__u8e3s4.length) {
            var current = charSequenceGet(_this__u8e3s4, index);
            if (((!encodeSlash ? equals(new Char(current), new Char(_Char___init__impl__6a9atx(47))) : false) ? true : get_URL_ALPHABET_CHARS().h1(new Char(current))) ? true : get_VALID_PATH_PART().h1(new Char(current))) {
              tmp0_apply.x3(current);
              var tmp0 = index;
              index = tmp0 + 1 | 0;
              continue $l$loop_0;
            }
            if (((equals(new Char(current), new Char(_Char___init__impl__6a9atx(37))) ? (index + 2 | 0) < _this__u8e3s4.length : false) ? get_HEX_ALPHABET().h1(new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0))) : false) ? get_HEX_ALPHABET().h1(new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0))) : false) {
              tmp0_apply.x3(current);
              tmp0_apply.x3(charSequenceGet(_this__u8e3s4, index + 1 | 0));
              tmp0_apply.x3(charSequenceGet(_this__u8e3s4, index + 2 | 0));
              index = index + 3 | 0;
              continue $l$loop_0;
            }
            var symbolSize = isSurrogate(current) ? 2 : 1;
            var tmp = encode(charset.z1e(), _this__u8e3s4, index, index + symbolSize | 0);
            forEach_0(tmp, encodeURLPath$lambda(tmp0_apply));
            index = index + symbolSize | 0;
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function hexDigitToChar(digit) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = digit;
    return (0 <= tmp0_subject ? tmp0_subject <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$_0(sbSize);
    if (prefixEnd > start) {
      sb.cc(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace ? equals(new Char(c), new Char(_Char___init__impl__6a9atx(43))) : false) {
        sb.x3(_Char___init__impl__6a9atx(32));
        var tmp0 = index;
        index = tmp0 + 1 | 0;
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(37)))) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end ? equals(new Char(charSequenceGet(_this__u8e3s4, index)), new Char(_Char___init__impl__6a9atx(37))) : false) {
          if ((index + 2 | 0) >= end) {
            var tmp$ret$0;
            {
              var tmp0_substring = index;
              var tmp1_substring = charSequenceLength(_this__u8e3s4);
              tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
            }
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + _this__u8e3s4 + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 ? true : digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + _this__u8e3s4 + ', at ' + index);
          }
          var tmp = bytes;
          var tmp1 = count;
          count = tmp1 + 1 | 0;
          tmp[tmp1] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.fc(String_0(bytes, 0, count, charset));
      } else {
        sb.x3(c);
        var tmp2 = index;
        index = tmp2 + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  URLDecodeException.$metadata$ = classMeta('URLDecodeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function charToHexDigit(c2) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = c2;
    return (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function encodeURLParameter$lambda($tmp0_apply, $spaceToPlus) {
    return function (it) {
      var tmp;
      if (get_URL_ALPHABET().h1(it) ? true : get_OAUTH_SYMBOLS().h1(it)) {
        $tmp0_apply.x3(numberToChar(it));
        tmp = Unit_getInstance();
      } else {
        var tmp_0;
        if ($spaceToPlus) {
          var tmp_1 = it;
          var tmp$ret$0;
          {
            tmp$ret$0 = 32;
          }
          tmp_0 = tmp_1 === toByte(tmp$ret$0);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          $tmp0_apply.x3(_Char___init__impl__6a9atx(43));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.fc(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $tmp0_apply, $encodeFull) {
    return function (it) {
      var tmp;
      var tmp_0 = it;
      var tmp$ret$0;
      {
        tmp$ret$0 = 32;
      }
      if (tmp_0 === toByte(tmp$ret$0)) {
        var tmp_1;
        if ($spaceToPlus) {
          $tmp0_apply.x3(_Char___init__impl__6a9atx(43));
          tmp_1 = Unit_getInstance();
        } else {
          $tmp0_apply.fc('%20');
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        if (get_URL_ALPHABET().h1(it) ? true : !$encodeFull ? get_URL_PROTOCOL_PART().h1(it) : false) {
          $tmp0_apply.x3(numberToChar(it));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.fc(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLPath$lambda($tmp0_apply) {
    return function (it) {
      $tmp0_apply.fc(percentEncode(it));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function init_properties_Codecs_kt_hjkt7n() {
    if (properties_initialized_Codecs_kt_hkj9s1) {
    } else {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      var tmp$ret$3;
      {
        var tmp0_map = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
        var tmp$ret$2;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
          var tmp0_iterator = tmp0_map.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f().e1_1;
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = Char__toInt_impl_vasixd(item);
              }
              tmp$ret$1 = toByte(tmp$ret$0);
            }
            tmp0_mapTo.b(tmp$ret$1);
          }
          tmp$ret$2 = tmp0_mapTo;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      URL_ALPHABET = toSet(tmp$ret$3);
      URL_ALPHABET_CHARS = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      var tmp$ret$3_0;
      {
        var tmp0_map_0 = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
        var tmp$ret$2_0;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
          var tmp0_iterator_0 = tmp0_map_0.d();
          while (tmp0_iterator_0.e()) {
            var item_0 = tmp0_iterator_0.f().e1_1;
            var tmp$ret$1_0;
            {
              var tmp$ret$0_0;
              {
                tmp$ret$0_0 = Char__toInt_impl_vasixd(item_0);
              }
              tmp$ret$1_0 = toByte(tmp$ret$0_0);
            }
            tmp0_mapTo_0.b(tmp$ret$1_0);
          }
          tmp$ret$2_0 = tmp0_mapTo_0;
        }
        tmp$ret$3_0 = tmp$ret$2_0;
      }
      URL_PROTOCOL_PART = tmp$ret$3_0;
      VALID_PATH_PART = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      ATTRIBUTE_CHARACTERS = plus_1(get_URL_ALPHABET_CHARS(), setOf([new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(94)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(96)), new Char(_Char___init__impl__6a9atx(124)), new Char(_Char___init__impl__6a9atx(126))]));
      var tmp$ret$3_1;
      {
        var tmp0_map_1 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
        var tmp$ret$2_1;
        {
          var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_1, 10));
          var tmp0_iterator_1 = tmp0_map_1.d();
          while (tmp0_iterator_1.e()) {
            var item_1 = tmp0_iterator_1.f().e1_1;
            var tmp$ret$1_1;
            {
              var tmp$ret$0_1;
              {
                tmp$ret$0_1 = Char__toInt_impl_vasixd(item_1);
              }
              tmp$ret$1_1 = toByte(tmp$ret$0_1);
            }
            tmp0_mapTo_1.b(tmp$ret$1_1);
          }
          tmp$ret$2_1 = tmp0_mapTo_1;
        }
        tmp$ret$3_1 = tmp$ret$2_1;
      }
      OAUTH_SYMBOLS = tmp$ret$3_1;
    }
  }
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, Object.create(ContentType.prototype));
  }
  function ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      parameters = emptyList();
    ContentType_init_$Init$(contentType, contentSubtype, parameters, $this);
    return $this;
  }
  function ContentType_init_$Create$_0(contentType, contentSubtype, parameters, $mask0, $marker) {
    return ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, Object.create(ContentType.prototype));
  }
  function hasParameter($this, name, value) {
    var tmp0_subject = $this.l1o().g();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = false;
        break;
      case 1:
        var tmp$ret$1;
        {
          var tmp0_let = $this.l1o().h(0);
          {
          }
          var tmp$ret$0;
          {
            tmp$ret$0 = equals_0(tmp0_let.m1o_1, name, true) ? equals_0(tmp0_let.n1o_1, value, true) : false;
          }
          tmp$ret$1 = tmp$ret$0;
        }

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$2;
        $l$block_0: {
          var tmp1_any = $this.l1o();
          var tmp_0;
          if (isInterface(tmp1_any, Collection)) {
            tmp_0 = tmp1_any.m();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp1_any.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            var tmp$ret$3;
            {
              tmp$ret$3 = equals_0(element.m1o_1, name, true) ? equals_0(element.n1o_1, value, true) : false;
            }
            if (tmp$ret$3) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.p1o_1 = ContentType_init_$Create$_0('*', '*', null, 4, null);
  }
  Companion.prototype.q1o = function (value) {
    if (isBlank(value))
      return this.p1o_1;
    var tmp$ret$10;
    {
      var tmp0_parse = Companion_getInstance_1();
      var headerValue = last(parseHeaderValue(value));
      var tmp$ret$9;
      {
        var tmp1__anonymous__uwfjfc = headerValue.r1o_1;
        var tmp2__anonymous__z9zvc9 = headerValue.s1o_1;
        var tmp = _Char___init__impl__6a9atx(47);
        var slash = indexOf$default(tmp1__anonymous__uwfjfc, tmp, 0, false, 6, null);
        if (slash === -1) {
          var tmp$ret$0;
          {
            tmp$ret$0 = toString(trim(isCharSequence(tmp1__anonymous__uwfjfc) ? tmp1__anonymous__uwfjfc : THROW_CCE()));
          }
          if (tmp$ret$0 === '*')
            return Companion_getInstance_0().p1o_1;
          throw new BadContentTypeFormatException(value);
        }
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              tmp$ret$1 = tmp1__anonymous__uwfjfc;
            }
            tmp$ret$2 = tmp$ret$1.substring(0, slash);
          }
          var tmp0_trim = tmp$ret$2;
          tmp$ret$3 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
        }
        var type = tmp$ret$3;
        var tmp$ret$4;
        {
          tmp$ret$4 = charSequenceLength(type) === 0;
        }
        if (tmp$ret$4) {
          throw new BadContentTypeFormatException(value);
        }
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            var tmp1_substring = slash + 1 | 0;
            var tmp$ret$5;
            {
              tmp$ret$5 = tmp1__anonymous__uwfjfc;
            }
            tmp$ret$6 = tmp$ret$5.substring(tmp1_substring);
          }
          var tmp2_trim = tmp$ret$6;
          tmp$ret$7 = toString(trim(isCharSequence(tmp2_trim) ? tmp2_trim : THROW_CCE()));
        }
        var subtype = tmp$ret$7;
        var tmp_0;
        var tmp_1 = _Char___init__impl__6a9atx(32);
        if (contains$default(type, tmp_1, false, 2, null)) {
          tmp_0 = true;
        } else {
          var tmp_2 = _Char___init__impl__6a9atx(32);
          tmp_0 = contains$default(subtype, tmp_2, false, 2, null);
        }
        if (tmp_0) {
          throw new BadContentTypeFormatException(value);
        }
        var tmp_3;
        var tmp$ret$8;
        {
          tmp$ret$8 = charSequenceLength(subtype) === 0;
        }
        if (tmp$ret$8) {
          tmp_3 = true;
        } else {
          var tmp_4 = _Char___init__impl__6a9atx(47);
          tmp_3 = contains$default(subtype, tmp_4, false, 2, null);
        }
        if (tmp_3) {
          throw new BadContentTypeFormatException(value);
        }
        tmp$ret$9 = ContentType_init_$Create$(type, subtype, tmp2__anonymous__z9zvc9);
      }
      tmp$ret$10 = tmp$ret$9;
    }
    return tmp$ret$10;
  };
  Companion.prototype.u1o = function () {
    return this.p1o_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Application() {
    Application_instance = this;
    var tmp = this;
    tmp.v1o_1 = ContentType_init_$Create$_0('application', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.w1o_1 = ContentType_init_$Create$_0('application', 'atom+xml', null, 4, null);
    var tmp_1 = this;
    tmp_1.x1o_1 = ContentType_init_$Create$_0('application', 'cbor', null, 4, null);
    var tmp_2 = this;
    tmp_2.y1o_1 = ContentType_init_$Create$_0('application', 'json', null, 4, null);
    var tmp_3 = this;
    tmp_3.z1o_1 = ContentType_init_$Create$_0('application', 'hal+json', null, 4, null);
    var tmp_4 = this;
    tmp_4.a1p_1 = ContentType_init_$Create$_0('application', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.b1p_1 = ContentType_init_$Create$_0('application', 'octet-stream', null, 4, null);
    var tmp_6 = this;
    tmp_6.c1p_1 = ContentType_init_$Create$_0('application', 'font-woff', null, 4, null);
    var tmp_7 = this;
    tmp_7.d1p_1 = ContentType_init_$Create$_0('application', 'rss+xml', null, 4, null);
    var tmp_8 = this;
    tmp_8.e1p_1 = ContentType_init_$Create$_0('application', 'xml', null, 4, null);
    var tmp_9 = this;
    tmp_9.f1p_1 = ContentType_init_$Create$_0('application', 'xml-dtd', null, 4, null);
    var tmp_10 = this;
    tmp_10.g1p_1 = ContentType_init_$Create$_0('application', 'zip', null, 4, null);
    var tmp_11 = this;
    tmp_11.h1p_1 = ContentType_init_$Create$_0('application', 'gzip', null, 4, null);
    var tmp_12 = this;
    tmp_12.i1p_1 = ContentType_init_$Create$_0('application', 'x-www-form-urlencoded', null, 4, null);
    var tmp_13 = this;
    tmp_13.j1p_1 = ContentType_init_$Create$_0('application', 'pdf', null, 4, null);
    var tmp_14 = this;
    tmp_14.k1p_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', null, 4, null);
    var tmp_15 = this;
    tmp_15.l1p_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document', null, 4, null);
    var tmp_16 = this;
    tmp_16.m1p_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.presentationml.presentation', null, 4, null);
    var tmp_17 = this;
    tmp_17.n1p_1 = ContentType_init_$Create$_0('application', 'protobuf', null, 4, null);
    var tmp_18 = this;
    tmp_18.o1p_1 = ContentType_init_$Create$_0('application', 'wasm', null, 4, null);
    var tmp_19 = this;
    tmp_19.p1p_1 = ContentType_init_$Create$_0('application', 'problem+json', null, 4, null);
    var tmp_20 = this;
    tmp_20.q1p_1 = ContentType_init_$Create$_0('application', 'problem+xml', null, 4, null);
  }
  Application.$metadata$ = objectMeta('Application');
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Text() {
    Text_instance = this;
    var tmp = this;
    tmp.r1p_1 = ContentType_init_$Create$_0('text', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.s1p_1 = ContentType_init_$Create$_0('text', 'plain', null, 4, null);
    var tmp_1 = this;
    tmp_1.t1p_1 = ContentType_init_$Create$_0('text', 'css', null, 4, null);
    var tmp_2 = this;
    tmp_2.u1p_1 = ContentType_init_$Create$_0('text', 'csv', null, 4, null);
    var tmp_3 = this;
    tmp_3.v1p_1 = ContentType_init_$Create$_0('text', 'html', null, 4, null);
    var tmp_4 = this;
    tmp_4.w1p_1 = ContentType_init_$Create$_0('text', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.x1p_1 = ContentType_init_$Create$_0('text', 'vcard', null, 4, null);
    var tmp_6 = this;
    tmp_6.y1p_1 = ContentType_init_$Create$_0('text', 'xml', null, 4, null);
    var tmp_7 = this;
    tmp_7.z1p_1 = ContentType_init_$Create$_0('text', 'event-stream', null, 4, null);
  }
  Text.$metadata$ = objectMeta('Text');
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_0();
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.c1q_1 = contentType;
    this.d1q_1 = contentSubtype;
  }
  ContentType.prototype.e1q = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.c1q_1, this.d1q_1, this.f1q(), plus_2(this.l1o(), HeaderValueParam_init_$Create$(name, value)));
  };
  ContentType.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals_0(this.c1q_1, other.c1q_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals_0(this.d1q_1, other.d1q_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.l1o(), other.l1o());
    } else {
      tmp = false;
    }
    return tmp;
  };
  ContentType.prototype.hashCode = function () {
    var tmp$ret$1;
    {
      var tmp0_lowercase = this.c1q_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_lowercase;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
    }
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    {
      var tmp1_lowercase = this.d1q_1;
      var tmp$ret$2;
      {
        tmp$ret$2 = tmp1_lowercase;
      }
      tmp$ret$3 = tmp$ret$2.toLowerCase();
    }
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.l1o())) | 0;
    return result;
  };
  ContentType.$metadata$ = classMeta('ContentType', undefined, undefined, undefined, undefined, HeaderValueWithParameters.prototype);
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  BadContentTypeFormatException.$metadata$ = classMeta('BadContentTypeFormatException', undefined, undefined, undefined, undefined, Exception.prototype);
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.g1q('charset');
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
          var tmp_0;
          try {
            tmp_0 = Companion_getInstance().d1i(tmp0_safe_receiver);
          } catch ($p) {
            var tmp_1;
            if ($p instanceof IllegalArgumentException) {
              tmp_1 = null;
            } else {
              throw $p;
            }
            tmp_0 = tmp_1;
          }
          tmp$ret$0 = tmp_0;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    return _this__u8e3s4.e1q('charset', get_name(charset));
  }
  function get_HeaderFieldValueSeparators() {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.h1q = function (value, init) {
    var headerValue = last(parseHeaderValue(value));
    return init(headerValue.r1o_1, headerValue.s1o_1);
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HeaderValueWithParameters(content, parameters) {
    Companion_getInstance_1();
    this.j1o_1 = content;
    this.k1o_1 = parameters;
  }
  HeaderValueWithParameters.prototype.f1q = function () {
    return this.j1o_1;
  };
  HeaderValueWithParameters.prototype.l1o = function () {
    return this.k1o_1;
  };
  HeaderValueWithParameters.prototype.g1q = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.k1o_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.k1o_1.h(index);
        if (equals_0(parameter.m1o_1, name, true)) {
          return parameter.n1o_1;
        }
      }
       while (!(index === last));
    return null;
  };
  HeaderValueWithParameters.prototype.toString = function () {
    var tmp;
    if (this.k1o_1.m()) {
      tmp = this.j1o_1;
    } else {
      var tmp_0 = this.j1o_1.length;
      var tmp$ret$1;
      {
        var tmp0_sumOf = this.k1o_1;
        var sum = 0;
        var tmp0_iterator = tmp0_sumOf.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp_1 = sum;
          var tmp$ret$0;
          {
            tmp$ret$0 = (element.m1o_1.length + element.n1o_1.length | 0) + 3 | 0;
          }
          sum = tmp_1 + tmp$ret$0 | 0;
        }
        tmp$ret$1 = sum;
      }
      var size = tmp_0 + tmp$ret$1 | 0;
      var tmp$ret$2;
      {
        var tmp1_apply = StringBuilder_init_$Create$_0(size);
        {
        }
        {
          tmp1_apply.fc(this.j1o_1);
          var inductionVariable = 0;
          var last = get_lastIndex(this.k1o_1);
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var element_0 = this.k1o_1.h(index);
              tmp1_apply.fc('; ');
              tmp1_apply.fc(element_0.m1o_1);
              tmp1_apply.fc('=');
              {
                var tmp0_escapeIfNeededTo = element_0.n1o_1;
                if (needQuotes$accessor$vynnj(tmp0_escapeIfNeededTo)) {
                  tmp1_apply.fc(quote(tmp0_escapeIfNeededTo));
                } else {
                  tmp1_apply.fc(tmp0_escapeIfNeededTo);
                }
              }
            }
             while (!(index === last));
        }
        tmp$ret$2 = tmp1_apply;
      }
      tmp = tmp$ret$2.toString();
    }
    return tmp;
  };
  HeaderValueWithParameters.$metadata$ = classMeta('HeaderValueWithParameters');
  function escapeIfNeededTo(_this__u8e3s4, out) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    if (needQuotes$accessor$vynnj(_this__u8e3s4)) {
      out.fc(quote(_this__u8e3s4));
    } else {
      out.fc(_this__u8e3s4);
    }
  }
  function needQuotes(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(_this__u8e3s4) === 0;
    }
    if (tmp$ret$0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (get_HeaderFieldValueSeparators().h1(new Char(charSequenceGet(_this__u8e3s4, index))))
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function quote(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
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
          quoteTo(_this__u8e3s4, tmp0_apply);
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function isQuoted(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!equals(new Char(first(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34))) ? true : !equals(new Char(last_0(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34)))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var tmp = _Char___init__impl__6a9atx(34);
      var tmp_0 = startIndex;
      var index = indexOf$default(_this__u8e3s4, tmp, tmp_0, false, 4, null);
      if (index === get_lastIndex_0(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (equals(new Char(charSequenceGet(_this__u8e3s4, slashIndex)), new Char(_Char___init__impl__6a9atx(92)))) {
        var tmp0 = slashesCount;
        slashesCount = tmp0 + 1 | 0;
        var tmp1 = slashIndex;
        slashIndex = tmp1 - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quoteTo(_this__u8e3s4, out) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    out.fc('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, i);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(92)))) {
          out.fc('\\\\');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) {
          out.fc('\\n');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) {
          out.fc('\\r');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
          out.fc('\\t');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(34)))) {
          out.fc('\\"');
        } else {
          out.x3(ch);
        }
      }
       while (inductionVariable < last);
    out.fc('"');
  }
  function needQuotes$accessor$vynnj(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return needQuotes(_this__u8e3s4);
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function init_properties_HeaderValueWithParameters_kt_2dfzmo() {
    if (properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
    } else {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = setOf([new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(60)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(92)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13))]);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.i1q_1 = EmptyHeaders_getInstance();
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Headers() {
  }
  Headers.$metadata$ = interfaceMeta('Headers', [StringValues]);
  function HeadersBuilder_init_$Init$(size, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    HeadersBuilder.call($this, size);
    return $this;
  }
  function HeadersBuilder_init_$Create$(size, $mask0, $marker) {
    return HeadersBuilder_init_$Init$(size, $mask0, $marker, Object.create(HeadersBuilder.prototype));
  }
  function HeadersBuilder(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  HeadersBuilder.prototype.l17 = function () {
    return new HeadersImpl(this.a8());
  };
  HeadersBuilder.prototype.q1k = function (name) {
    StringValuesBuilderImpl.prototype.q1k.call(this, name);
    HttpHeaders_getInstance().h1u(name);
  };
  HeadersBuilder.prototype.t1k = function (value) {
    StringValuesBuilderImpl.prototype.t1k.call(this, value);
    HttpHeaders_getInstance().i1u(value);
  };
  HeadersBuilder.$metadata$ = classMeta('HeadersBuilder', undefined, undefined, undefined, undefined, StringValuesBuilderImpl.prototype);
  function EmptyHeaders() {
    EmptyHeaders_instance = this;
  }
  EmptyHeaders.prototype.j1k = function () {
    return true;
  };
  EmptyHeaders.prototype.k1k = function (name) {
    return null;
  };
  EmptyHeaders.prototype.l1k = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.m1k = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.toString = function () {
    return 'Headers ' + this.m1k();
  };
  EmptyHeaders.$metadata$ = objectMeta('EmptyHeaders', [Headers]);
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    if (EmptyHeaders_instance == null)
      new EmptyHeaders();
    return EmptyHeaders_instance;
  }
  function HeadersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  HeadersImpl.prototype.toString = function () {
    return 'Headers ' + this.m1k();
  };
  HeadersImpl.$metadata$ = classMeta('HeadersImpl', [Headers], undefined, undefined, undefined, StringValuesImpl.prototype);
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, Object.create(HeaderValueParam.prototype));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.m1o_1 = name;
    this.n1o_1 = value;
    this.o1o_1 = escapeValue;
  }
  HeaderValueParam.prototype.j1u = function () {
    return this.m1o_1;
  };
  HeaderValueParam.prototype.s = function () {
    return this.n1o_1;
  };
  HeaderValueParam.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other.m1o_1, this.m1o_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.n1o_1, this.n1o_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  HeaderValueParam.prototype.hashCode = function () {
    var tmp$ret$1;
    {
      var tmp0_lowercase = this.m1o_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_lowercase;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
    }
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    {
      var tmp1_lowercase = this.n1o_1;
      var tmp$ret$2;
      {
        tmp$ret$2 = tmp1_lowercase;
      }
      tmp$ret$3 = tmp$ret$2.toLowerCase();
    }
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  HeaderValueParam.prototype.toString = function () {
    return 'HeaderValueParam(name=' + this.m1o_1 + ', value=' + this.n1o_1 + ', escapeValue=' + this.o1o_1 + ')';
  };
  HeaderValueParam.$metadata$ = classMeta('HeaderValueParam');
  function HeaderValue(value, params) {
    this.r1o_1 = value;
    this.s1o_1 = params;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      var tmp0_firstOrNull = this.s1o_1;
      var tmp0_iterator = tmp0_firstOrNull.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$0;
        {
          tmp$ret$0 = element.m1o_1 === 'q';
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1o_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        {
        }
        var tmp_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = rangeTo(0.0, 1.0).c1(tmp2_safe_receiver);
        }
        if (tmp$ret$2) {
          tmp_1 = tmp2_safe_receiver;
        } else {
          tmp_1 = null;
        }
        tmp$ret$3 = tmp_1;
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.t1o_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  HeaderValue.prototype.toString = function () {
    return 'HeaderValue(value=' + this.r1o_1 + ', params=' + this.s1o_1 + ')';
  };
  HeaderValue.prototype.hashCode = function () {
    var result = getStringHashCode(this.r1o_1);
    result = imul(result, 31) + hashCode(this.s1o_1) | 0;
    return result;
  };
  HeaderValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this.r1o_1 === tmp0_other_with_cast.r1o_1))
      return false;
    if (!equals(this.s1o_1, tmp0_other_with_cast.s1o_1))
      return false;
    return true;
  };
  HeaderValue.$metadata$ = classMeta('HeaderValue');
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda());
    while (position <= get_lastIndex_0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda());
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        var tmp_0 = items.s();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.b(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59)))) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.s();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.b(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.x4() ? _this__u8e3s4.s() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = _this__u8e3s4;
        }
        tmp$ret$1 = tmp$ret$0.substring(start, end);
      }
      var tmp0_trim = tmp$ret$1;
      tmp$ret$2 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    }
    return tmp$ret$2;
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(61)))) {
        var tmp1_container = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = tmp1_container.s4();
        var paramValue = tmp1_container.t4();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        var tmp2 = position;
        position = tmp2 + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (equals(new Char(charSequenceGet(value, start)), new Char(_Char___init__impl__6a9atx(34)))) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex_0(value)) {
      var tmp0_subject = charSequenceGet(value, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44))))
        return to(position, subtrim(value, start, position));
      else {
        var tmp1 = position;
        position = tmp1 + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$();
    loop: while (position <= get_lastIndex_0(value)) {
      var currentChar = charSequenceGet(value, position);
      if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(34))) ? nextIsSemicolonOrEnd(value, position) : false) {
        return to(position + 1 | 0, builder.toString());
      } else if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(92))) ? position < (get_lastIndex_0(value) - 2 | 0) : false) {
        builder.x3(charSequenceGet(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.x3(currentChar);
      var tmp0 = position;
      position = tmp0 + 1 | 0;
    }
    var tmp = position;
    var tmp$ret$0;
    {
      var tmp0_plus = builder.toString();
      tmp$ret$0 = '"' + tmp0_plus;
    }
    return to(tmp, tmp$ret$0);
  }
  function nextIsSemicolonOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length ? equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(32))) : false) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length ? true : equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(59)));
  }
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(name) === 0;
    }
    if (tmp$ret$0) {
      return Unit_getInstance();
    }
    $parameters.s().b(HeaderValueParam_init_$Create$(name, value));
  }
  function parseHeaderValue$lambda() {
    return function () {
      var tmp$ret$0;
      {
        tmp$ret$0 = ArrayList_init_$Create$_0();
      }
      return tmp$ret$0;
    };
  }
  function parseHeaderValueItem$lambda() {
    return function () {
      var tmp$ret$0;
      {
        tmp$ret$0 = ArrayList_init_$Create$_0();
      }
      return tmp$ret$0;
    };
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.l1q_1 = 'Accept';
    this.m1q_1 = 'Accept-Charset';
    this.n1q_1 = 'Accept-Encoding';
    this.o1q_1 = 'Accept-Language';
    this.p1q_1 = 'Accept-Ranges';
    this.q1q_1 = 'Age';
    this.r1q_1 = 'Allow';
    this.s1q_1 = 'ALPN';
    this.t1q_1 = 'Authentication-Info';
    this.u1q_1 = 'Authorization';
    this.v1q_1 = 'Cache-Control';
    this.w1q_1 = 'Connection';
    this.x1q_1 = 'Content-Disposition';
    this.y1q_1 = 'Content-Encoding';
    this.z1q_1 = 'Content-Language';
    this.a1r_1 = 'Content-Length';
    this.b1r_1 = 'Content-Location';
    this.c1r_1 = 'Content-Range';
    this.d1r_1 = 'Content-Type';
    this.e1r_1 = 'Cookie';
    this.f1r_1 = 'DASL';
    this.g1r_1 = 'Date';
    this.h1r_1 = 'DAV';
    this.i1r_1 = 'Depth';
    this.j1r_1 = 'Destination';
    this.k1r_1 = 'ETag';
    this.l1r_1 = 'Expect';
    this.m1r_1 = 'Expires';
    this.n1r_1 = 'From';
    this.o1r_1 = 'Forwarded';
    this.p1r_1 = 'Host';
    this.q1r_1 = 'HTTP2-Settings';
    this.r1r_1 = 'If';
    this.s1r_1 = 'If-Match';
    this.t1r_1 = 'If-Modified-Since';
    this.u1r_1 = 'If-None-Match';
    this.v1r_1 = 'If-Range';
    this.w1r_1 = 'If-Schedule-Tag-Match';
    this.x1r_1 = 'If-Unmodified-Since';
    this.y1r_1 = 'Last-Modified';
    this.z1r_1 = 'Location';
    this.a1s_1 = 'Lock-Token';
    this.b1s_1 = 'Link';
    this.c1s_1 = 'Max-Forwards';
    this.d1s_1 = 'MIME-Version';
    this.e1s_1 = 'Ordering-Type';
    this.f1s_1 = 'Origin';
    this.g1s_1 = 'Overwrite';
    this.h1s_1 = 'Position';
    this.i1s_1 = 'Pragma';
    this.j1s_1 = 'Prefer';
    this.k1s_1 = 'Preference-Applied';
    this.l1s_1 = 'Proxy-Authenticate';
    this.m1s_1 = 'Proxy-Authentication-Info';
    this.n1s_1 = 'Proxy-Authorization';
    this.o1s_1 = 'Public-Key-Pins';
    this.p1s_1 = 'Public-Key-Pins-Report-Only';
    this.q1s_1 = 'Range';
    this.r1s_1 = 'Referer';
    this.s1s_1 = 'Retry-After';
    this.t1s_1 = 'Schedule-Reply';
    this.u1s_1 = 'Schedule-Tag';
    this.v1s_1 = 'Sec-WebSocket-Accept';
    this.w1s_1 = 'Sec-WebSocket-Extensions';
    this.x1s_1 = 'Sec-WebSocket-Key';
    this.y1s_1 = 'Sec-WebSocket-Protocol';
    this.z1s_1 = 'Sec-WebSocket-Version';
    this.a1t_1 = 'Server';
    this.b1t_1 = 'Set-Cookie';
    this.c1t_1 = 'SLUG';
    this.d1t_1 = 'Strict-Transport-Security';
    this.e1t_1 = 'TE';
    this.f1t_1 = 'Timeout';
    this.g1t_1 = 'Trailer';
    this.h1t_1 = 'Transfer-Encoding';
    this.i1t_1 = 'Upgrade';
    this.j1t_1 = 'User-Agent';
    this.k1t_1 = 'Vary';
    this.l1t_1 = 'Via';
    this.m1t_1 = 'Warning';
    this.n1t_1 = 'WWW-Authenticate';
    this.o1t_1 = 'Access-Control-Allow-Origin';
    this.p1t_1 = 'Access-Control-Allow-Methods';
    this.q1t_1 = 'Access-Control-Allow-Credentials';
    this.r1t_1 = 'Access-Control-Allow-Headers';
    this.s1t_1 = 'Access-Control-Request-Method';
    this.t1t_1 = 'Access-Control-Request-Headers';
    this.u1t_1 = 'Access-Control-Expose-Headers';
    this.v1t_1 = 'Access-Control-Max-Age';
    this.w1t_1 = 'X-Http-Method-Override';
    this.x1t_1 = 'X-Forwarded-Host';
    this.y1t_1 = 'X-Forwarded-Server';
    this.z1t_1 = 'X-Forwarded-Proto';
    this.a1u_1 = 'X-Forwarded-For';
    this.b1u_1 = 'X-Forwarded-Port';
    this.c1u_1 = 'X-Request-ID';
    this.d1u_1 = 'X-Correlation-ID';
    this.e1u_1 = 'X-Total-Count';
    var tmp = this;
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [this.h1t_1, this.i1t_1];
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
    tmp.f1u_1 = tmp$ret$2;
    this.g1u_1 = asList(this.f1u_1);
  }
  HttpHeaders.prototype.k1u = function () {
    return this.g1u_1;
  };
  HttpHeaders.prototype.h1u = function (name) {
    {
      var index = 0;
      var indexedObject = name;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp0__anonymous__q1qw7t = tmp1;
          if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) <= 0 ? true : isDelimiter(item)) {
            throw new IllegalHeaderNameException(name, tmp0__anonymous__q1qw7t);
          }
        }
      }
    }
  };
  HttpHeaders.prototype.i1u = function (value) {
    {
      var index = 0;
      var indexedObject = value;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp0__anonymous__q1qw7t = tmp1;
          if (equals(new Char(item), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(item), new Char(_Char___init__impl__6a9atx(9)))) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0) {
            throw new IllegalHeaderValueException(value, tmp0__anonymous__q1qw7t);
          }
        }
      }
    }
  };
  HttpHeaders.$metadata$ = objectMeta('HttpHeaders');
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function isDelimiter(ch) {
    return contains$default('"(),/:;<=>?@[\\]{}', ch, false, 2, null);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + new Char(charSequenceGet(headerName, position)) + "'";
    var tmp$ret$0;
    {
      var tmp0__get_code__88qj9g = charSequenceGet(headerName, position);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    }
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.l1u_1 = headerName;
    this.m1u_1 = position;
    captureStack(this, IllegalHeaderNameException);
  }
  IllegalHeaderNameException.$metadata$ = classMeta('IllegalHeaderNameException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + new Char(charSequenceGet(headerValue, position)) + "'";
    var tmp$ret$0;
    {
      var tmp0__get_code__88qj9g = charSequenceGet(headerValue, position);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    }
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.n1u_1 = headerValue;
    this.o1u_1 = position;
    captureStack(this, IllegalHeaderValueException);
  }
  IllegalHeaderValueException.$metadata$ = classMeta('IllegalHeaderValueException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  UnsafeHeaderException.$metadata$ = classMeta('UnsafeHeaderException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function HttpMessage() {
  }
  HttpMessage.$metadata$ = interfaceMeta('HttpMessage');
  function HttpMessageBuilder() {
  }
  HttpMessageBuilder.$metadata$ = interfaceMeta('HttpMessageBuilder');
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.p1u().qf(HttpHeaders_getInstance().d1r_1);
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
          tmp$ret$0 = Companion_getInstance_0().q1o(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.p1u().qf(HttpHeaders_getInstance().a1r_1);
    return tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_0(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.p1u().qf(HttpHeaders_getInstance().d1r_1);
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
          tmp$ret$0 = Companion_getInstance_0().q1o(tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.q1u_1 = new HttpMethod('GET');
    this.r1u_1 = new HttpMethod('POST');
    this.s1u_1 = new HttpMethod('PUT');
    this.t1u_1 = new HttpMethod('PATCH');
    this.u1u_1 = new HttpMethod('DELETE');
    this.v1u_1 = new HttpMethod('HEAD');
    this.w1u_1 = new HttpMethod('OPTIONS');
    this.x1u_1 = listOf([this.q1u_1, this.r1u_1, this.s1u_1, this.t1u_1, this.u1u_1, this.v1u_1, this.w1u_1]);
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpMethod(value) {
    Companion_getInstance_3();
    this.y1u_1 = value;
  }
  HttpMethod.prototype.toString = function () {
    return 'HttpMethod(value=' + this.y1u_1 + ')';
  };
  HttpMethod.prototype.hashCode = function () {
    return getStringHashCode(this.y1u_1);
  };
  HttpMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this.y1u_1 === tmp0_other_with_cast.y1u_1))
      return false;
    return true;
  };
  HttpMethod.$metadata$ = classMeta('HttpMethod');
  function Companion_3() {
    Companion_instance_3 = this;
    this.z1u_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.a1v_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.b1v_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.c1v_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.d1v_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_4();
    this.e1v_1 = name;
    this.f1v_1 = major;
    this.g1v_1 = minor;
  }
  HttpProtocolVersion.prototype.toString = function () {
    return this.e1v_1 + '/' + this.f1v_1 + '.' + this.g1v_1;
  };
  HttpProtocolVersion.prototype.hashCode = function () {
    var result = getStringHashCode(this.e1v_1);
    result = imul(result, 31) + this.f1v_1 | 0;
    result = imul(result, 31) + this.g1v_1 | 0;
    return result;
  };
  HttpProtocolVersion.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    var tmp0_other_with_cast = other instanceof HttpProtocolVersion ? other : THROW_CCE();
    if (!(this.e1v_1 === tmp0_other_with_cast.e1v_1))
      return false;
    if (!(this.f1v_1 === tmp0_other_with_cast.f1v_1))
      return false;
    if (!(this.g1v_1 === tmp0_other_with_cast.g1v_1))
      return false;
    return true;
  };
  HttpProtocolVersion.$metadata$ = classMeta('HttpProtocolVersion');
  function Companion_4() {
    Companion_instance_4 = this;
    this.h1v_1 = new HttpStatusCode(100, 'Continue');
    this.i1v_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.j1v_1 = new HttpStatusCode(102, 'Processing');
    this.k1v_1 = new HttpStatusCode(200, 'OK');
    this.l1v_1 = new HttpStatusCode(201, 'Created');
    this.m1v_1 = new HttpStatusCode(202, 'Accepted');
    this.n1v_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.o1v_1 = new HttpStatusCode(204, 'No Content');
    this.p1v_1 = new HttpStatusCode(205, 'Reset Content');
    this.q1v_1 = new HttpStatusCode(206, 'Partial Content');
    this.r1v_1 = new HttpStatusCode(207, 'Multi-Status');
    this.s1v_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.t1v_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.u1v_1 = new HttpStatusCode(302, 'Found');
    this.v1v_1 = new HttpStatusCode(303, 'See Other');
    this.w1v_1 = new HttpStatusCode(304, 'Not Modified');
    this.x1v_1 = new HttpStatusCode(305, 'Use Proxy');
    this.y1v_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.z1v_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.a1w_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.b1w_1 = new HttpStatusCode(400, 'Bad Request');
    this.c1w_1 = new HttpStatusCode(401, 'Unauthorized');
    this.d1w_1 = new HttpStatusCode(402, 'Payment Required');
    this.e1w_1 = new HttpStatusCode(403, 'Forbidden');
    this.f1w_1 = new HttpStatusCode(404, 'Not Found');
    this.g1w_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.h1w_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.i1w_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.j1w_1 = new HttpStatusCode(408, 'Request Timeout');
    this.k1w_1 = new HttpStatusCode(409, 'Conflict');
    this.l1w_1 = new HttpStatusCode(410, 'Gone');
    this.m1w_1 = new HttpStatusCode(411, 'Length Required');
    this.n1w_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.o1w_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.p1w_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.q1w_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.r1w_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.s1w_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.t1w_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.u1w_1 = new HttpStatusCode(423, 'Locked');
    this.v1w_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.w1w_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.x1w_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.y1w_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.z1w_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.a1x_1 = new HttpStatusCode(501, 'Not Implemented');
    this.b1x_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.c1x_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.d1x_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.e1x_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.f1x_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.g1x_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.h1x_1 = allStatusCodes();
    var tmp = this;
    var tmp$ret$2;
    {
      var tmp0_associateBy = this.h1x_1;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
      var tmp$ret$1;
      {
        var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
        var tmp0_iterator = tmp0_associateBy.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = element.j1x_1;
          }
          tmp0_associateByTo.a(tmp$ret$0, element);
        }
        tmp$ret$1 = tmp0_associateByTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    tmp.i1x_1 = tmp$ret$2;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_5();
    this.j1x_1 = value;
    this.k1x_1 = description;
  }
  HttpStatusCode.prototype.s = function () {
    return this.j1x_1;
  };
  HttpStatusCode.prototype.toString = function () {
    return '' + this.j1x_1 + ' ' + this.k1x_1;
  };
  HttpStatusCode.prototype.equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.j1x_1 === this.j1x_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  HttpStatusCode.prototype.hashCode = function () {
    return this.j1x_1;
  };
  HttpStatusCode.$metadata$ = classMeta('HttpStatusCode');
  function allStatusCodes() {
    return listOf([Companion_getInstance_5().h1v_1, Companion_getInstance_5().i1v_1, Companion_getInstance_5().j1v_1, Companion_getInstance_5().k1v_1, Companion_getInstance_5().l1v_1, Companion_getInstance_5().m1v_1, Companion_getInstance_5().n1v_1, Companion_getInstance_5().o1v_1, Companion_getInstance_5().p1v_1, Companion_getInstance_5().q1v_1, Companion_getInstance_5().r1v_1, Companion_getInstance_5().s1v_1, Companion_getInstance_5().t1v_1, Companion_getInstance_5().u1v_1, Companion_getInstance_5().v1v_1, Companion_getInstance_5().w1v_1, Companion_getInstance_5().x1v_1, Companion_getInstance_5().y1v_1, Companion_getInstance_5().z1v_1, Companion_getInstance_5().a1w_1, Companion_getInstance_5().b1w_1, Companion_getInstance_5().c1w_1, Companion_getInstance_5().d1w_1, Companion_getInstance_5().e1w_1, Companion_getInstance_5().f1w_1, Companion_getInstance_5().g1w_1, Companion_getInstance_5().h1w_1, Companion_getInstance_5().i1w_1, Companion_getInstance_5().j1w_1, Companion_getInstance_5().k1w_1, Companion_getInstance_5().l1w_1, Companion_getInstance_5().m1w_1, Companion_getInstance_5().n1w_1, Companion_getInstance_5().o1w_1, Companion_getInstance_5().p1w_1, Companion_getInstance_5().q1w_1, Companion_getInstance_5().r1w_1, Companion_getInstance_5().s1w_1, Companion_getInstance_5().t1w_1, Companion_getInstance_5().u1w_1, Companion_getInstance_5().v1w_1, Companion_getInstance_5().w1w_1, Companion_getInstance_5().x1w_1, Companion_getInstance_5().y1w_1, Companion_getInstance_5().z1w_1, Companion_getInstance_5().a1x_1, Companion_getInstance_5().b1x_1, Companion_getInstance_5().c1x_1, Companion_getInstance_5().d1x_1, Companion_getInstance_5().e1x_1, Companion_getInstance_5().f1x_1, Companion_getInstance_5().g1x_1]);
  }
  function ParametersBuilder() {
  }
  ParametersBuilder.$metadata$ = interfaceMeta('ParametersBuilder', [StringValuesBuilder]);
  function Companion_5() {
    Companion_instance_5 = this;
    this.l1x_1 = EmptyParameters_getInstance();
  }
  Companion_5.prototype.m1x = function (builder) {
    var tmp$ret$0;
    {
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      {
      }
      builder(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0.l17();
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Parameters() {
  }
  Parameters.$metadata$ = interfaceMeta('Parameters', [StringValues]);
  function ParametersBuilder_0(size) {
    return new ParametersBuilderImpl(size);
  }
  function ParametersBuilder$default(size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    return ParametersBuilder_0(size);
  }
  function EmptyParameters() {
    EmptyParameters_instance = this;
  }
  EmptyParameters.prototype.j1k = function () {
    return true;
  };
  EmptyParameters.prototype.k1k = function (name) {
    return null;
  };
  EmptyParameters.prototype.l1k = function () {
    return emptySet();
  };
  EmptyParameters.prototype.m1k = function () {
    return emptySet();
  };
  EmptyParameters.prototype.m = function () {
    return true;
  };
  EmptyParameters.prototype.toString = function () {
    return 'Parameters ' + this.m1k();
  };
  EmptyParameters.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.m();
    } else {
      tmp = false;
    }
    return tmp;
  };
  EmptyParameters.$metadata$ = objectMeta('EmptyParameters', [Parameters]);
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    if (EmptyParameters_instance == null)
      new EmptyParameters();
    return EmptyParameters_instance;
  }
  function ParametersBuilderImpl(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  ParametersBuilderImpl.prototype.l17 = function () {
    return new ParametersImpl(this.a8());
  };
  ParametersBuilderImpl.$metadata$ = classMeta('ParametersBuilderImpl', [ParametersBuilder], undefined, undefined, undefined, StringValuesBuilderImpl.prototype);
  function ParametersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  ParametersImpl.prototype.toString = function () {
    return 'Parameters ' + this.m1k();
  };
  ParametersImpl.$metadata$ = classMeta('ParametersImpl', [Parameters], undefined, undefined, undefined, StringValuesImpl.prototype);
  function parseQueryString(query, startIndex, limit, decode) {
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_6().l1x_1;
    } else {
      var tmp$ret$1;
      {
        var tmp0_build = Companion_getInstance_6();
        var tmp$ret$0;
        {
          var tmp0_apply = ParametersBuilder$default(0, 1, null);
          {
          }
          {
            parse(tmp0_apply, query, startIndex, limit, decode);
          }
          tmp$ret$0 = tmp0_apply;
        }
        tmp$ret$1 = tmp$ret$0.l17();
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function parseQueryString$default(query, startIndex, limit, decode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      limit = 1000;
    if (!(($mask0 & 8) === 0))
      decode = true;
    return parseQueryString(query, startIndex, limit, decode);
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex_0(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_getInstance();
        }
        var tmp1_subject = charSequenceGet(query, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(38)))) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          var tmp2 = count;
          count = tmp2 + 1 | 0;
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(61)))) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_getInstance();
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var tmp;
        if (decode) {
          tmp = decodeURLQueryComponent$default(query, spaceNameIndex, spaceEndIndex, false, null, 12, null);
        } else {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = query;
            }
            tmp$ret$1 = tmp$ret$0.substring(spaceNameIndex, spaceEndIndex);
          }
          tmp = tmp$ret$1;
        }
        var name = tmp;
        _this__u8e3s4.r1k(name, emptyList());
      }
      return Unit_getInstance();
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var tmp_0;
      if (decode) {
        tmp_0 = decodeURLQueryComponent$default(query, spaceNameIndex_0, spaceEqualIndex, false, null, 12, null);
      } else {
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = query;
          }
          tmp$ret$3 = tmp$ret$2.substring(spaceNameIndex_0, spaceEqualIndex);
        }
        tmp_0 = tmp$ret$3;
      }
      var name_0 = tmp_0;
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var tmp_1;
      if (decode) {
        tmp_1 = decodeURLQueryComponent$default(query, spaceValueIndex, spaceEndIndex_0, true, null, 8, null);
      } else {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = query;
          }
          tmp$ret$5 = tmp$ret$4.substring(spaceValueIndex, spaceEndIndex_0);
        }
        tmp_1 = tmp$ret$5;
      }
      var value = tmp_1;
      _this__u8e3s4.u1k(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end ? isWhitespace(charSequenceGet(query, spaceIndex)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start ? isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 - 1 | 0;
    }
    return spaceIndex;
  }
  function URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      protocol = Companion_getInstance_8().p1x_1;
    if (!(($mask0 & 2) === 0))
      host = '';
    if (!(($mask0 & 4) === 0))
      port = 0;
    if (!(($mask0 & 8) === 0))
      user = null;
    if (!(($mask0 & 16) === 0))
      password = null;
    if (!(($mask0 & 32) === 0))
      pathSegments = emptyList();
    if (!(($mask0 & 64) === 0))
      parameters = Companion_getInstance_6().l1x_1;
    if (!(($mask0 & 128) === 0))
      fragment = '';
    if (!(($mask0 & 256) === 0))
      trailingQuery = false;
    URLBuilder.call($this, protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery);
    return $this;
  }
  function URLBuilder_init_$Create$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker) {
    return URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, Object.create(URLBuilder.prototype));
  }
  function applyOrigin($this) {
    var tmp;
    var tmp$ret$0;
    {
      var tmp0_isNotEmpty = $this.w1x_1;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    }
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.v1x_1.f1y_1 === 'file';
    }
    if (tmp)
      return Unit_getInstance();
    $this.w1x_1 = Companion_getInstance_7().x1y_1.i1y_1;
    if ($this.v1x_1.equals(Companion_getInstance_8().p1x_1))
      $this.v1x_1 = Companion_getInstance_7().x1y_1.h1y_1;
    if ($this.x1x_1 === 0)
      $this.x1x_1 = Companion_getInstance_7().x1y_1.j1y_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.x1y_1 = Url(get_origin(this));
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_7();
    this.v1x_1 = protocol;
    this.w1x_1 = host;
    this.x1x_1 = port;
    this.y1x_1 = trailingQuery;
    var tmp = this;
    var tmp0_safe_receiver = user;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.z1x_1 = tmp_0;
    var tmp_1 = this;
    var tmp0_safe_receiver_0 = password;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      tmp_2 = encodeURLParameter$default(tmp0_safe_receiver_0, false, 1, null);
    }
    tmp_1.a1y_1 = tmp_2;
    var tmp_3 = this;
    tmp_3.b1y_1 = encodeURLQueryComponent$default(fragment, false, false, null, 7, null);
    var tmp_4 = this;
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
        var tmp0_iterator = pathSegments.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = encodeURLPathPart(item);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    tmp_4.c1y_1 = tmp$ret$2;
    this.d1y_1 = encodeParameters(parameters);
    this.e1y_1 = new UrlDecodedParametersBuilder(this.d1y_1);
  }
  URLBuilder.prototype.y1y = function () {
    return this.v1x_1;
  };
  URLBuilder.prototype.z1y = function () {
    return this.w1x_1;
  };
  URLBuilder.prototype.a1z = function () {
    return this.x1x_1;
  };
  URLBuilder.prototype.b1z = function () {
    return this.z1x_1;
  };
  URLBuilder.prototype.c1z = function (value) {
    var tmp = this;
    var tmp0_safe_receiver = value;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.z1x_1 = tmp_0;
  };
  URLBuilder.prototype.d1z = function () {
    var tmp0_safe_receiver = this.z1x_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.e1z = function () {
    return this.a1y_1;
  };
  URLBuilder.prototype.f1z = function () {
    var tmp0_safe_receiver = this.a1y_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.g1z = function () {
    var tmp = this.b1y_1;
    return decodeURLQueryComponent$default(tmp, 0, 0, false, null, 15, null);
  };
  URLBuilder.prototype.h1z = function () {
    var tmp$ret$2;
    {
      var tmp0_map = this.c1y_1;
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = decodeURLPart$default(item, 0, 0, null, 7, null);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  URLBuilder.prototype.i1z = function (value) {
    this.d1y_1 = value;
    this.e1y_1 = new UrlDecodedParametersBuilder(value);
  };
  URLBuilder.prototype.j1z = function () {
    return this.d1y_1;
  };
  URLBuilder.prototype.k1z = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  URLBuilder.prototype.l17 = function () {
    applyOrigin(this);
    return new Url_0(this.v1x_1, this.w1x_1, this.x1x_1, this.h1z(), this.e1y_1.l17(), this.g1z(), this.d1z(), this.f1z(), this.y1x_1, this.k1z());
  };
  URLBuilder.$metadata$ = classMeta('URLBuilder');
  function get_authority(_this__u8e3s4) {
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
          tmp0_apply.fc(get_encodedUserAndPassword(_this__u8e3s4));
          tmp0_apply.fc(_this__u8e3s4.w1x_1);
          if (!(_this__u8e3s4.x1x_1 === 0) ? !(_this__u8e3s4.x1x_1 === _this__u8e3s4.v1x_1.g1y_1) : false) {
            tmp0_apply.fc(':');
            tmp0_apply.fc(_this__u8e3s4.x1x_1.toString());
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function get_DEFAULT_PORT() {
    return DEFAULT_PORT;
  }
  var DEFAULT_PORT;
  function appendTo(_this__u8e3s4, out) {
    out.c(_this__u8e3s4.v1x_1.f1y_1);
    var tmp0_subject = _this__u8e3s4.v1x_1.f1y_1;
    if (tmp0_subject === 'file') {
      appendFile(out, _this__u8e3s4.w1x_1, get_encodedPath(_this__u8e3s4));
      return out;
    } else if (tmp0_subject === 'mailto') {
      appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.w1x_1);
      return out;
    }
    out.c('://');
    out.c(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.d1y_1, _this__u8e3s4.y1x_1);
    var tmp$ret$0;
    {
      var tmp0_isNotEmpty = _this__u8e3s4.b1y_1;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    }
    if (tmp$ret$0) {
      out.x3(_Char___init__impl__6a9atx(35));
      out.c(_this__u8e3s4.b1y_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
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
          appendUserAndPassword(tmp0_apply, _this__u8e3s4.z1x_1, _this__u8e3s4.a1y_1);
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.c('://');
    _this__u8e3s4.c(host);
    var tmp = _Char___init__impl__6a9atx(47);
    if (!startsWith$default(encodedPath, tmp, false, 2, null)) {
      _this__u8e3s4.x3(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    var tmp = _this__u8e3s4;
    var tmp_0;
    if (isBlank(value)) {
      tmp_0 = emptyList();
    } else if (value === '/') {
      tmp_0 = get_ROOT_PATH();
    } else {
      var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(47)]);
      tmp_0 = toMutableList(split$default(value, tmp_1, false, 0, 6, null));
    }
    tmp.c1y_1 = tmp_0;
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.c1y_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.c(':');
    _this__u8e3s4.c(encodedUser);
    _this__u8e3s4.c(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.m())
      return '';
    if (_this__u8e3s4.g() === 1) {
      var tmp$ret$0;
      {
        var tmp0_isEmpty = first_0(_this__u8e3s4);
        tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      }
      if (tmp$ret$0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString$default(_this__u8e3s4, '/', null, null, 0, null, null, 62, null);
  }
  function get_ROOT_PATH() {
    init_properties_URLParser_kt_jyldy();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        throw new URLParserException(urlString, $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    $l$block: {
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          {
            var tmp0__anonymous__q1qw7t = charSequenceGet(urlString, index);
            tmp$ret$0 = !isWhitespace(tmp0__anonymous__q1qw7t);
          }
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var startIndex = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var tmp$ret$2;
          {
            var tmp1__anonymous__uwfjfc = charSequenceGet(urlString, index_0);
            tmp$ret$2 = !isWhitespace(tmp1__anonymous__uwfjfc);
          }
          if (tmp$ret$2) {
            tmp$ret$3 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$3 = -1;
    }
    var endIndex = tmp$ret$3 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      var tmp$ret$5;
      {
        var tmp2_substring = startIndex;
        var tmp3_substring = startIndex + schemeLength | 0;
        var tmp$ret$4;
        {
          tmp$ret$4 = urlString;
        }
        tmp$ret$5 = tmp$ret$4.substring(tmp2_substring, tmp3_substring);
      }
      var scheme = tmp$ret$5;
      _this__u8e3s4.v1x_1 = Companion_getInstance_8().l1z(scheme);
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.v1x_1.f1y_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.v1x_1.f1y_1 === 'mailto') {
      {
        var tmp4_require = slashCount === 0;
        {
        }
        {
          {
          }
          if (!tmp4_require) {
            var tmp$ret$6;
            {
              tmp$ret$6 = 'Failed requirement.';
            }
            var message = tmp$ret$6;
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
        }
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        var tmp$ret$8;
        {
          var tmp = toCharArray('@/\\?#');
          var tmp_0 = startIndex;
          var tmp5_takeIf = indexOfAny$default(urlString, tmp, tmp_0, false, 4, null);
          {
          }
          var tmp_1;
          var tmp$ret$7;
          {
            tmp$ret$7 = tmp5_takeIf > 0;
          }
          if (tmp$ret$7) {
            tmp_1 = tmp5_takeIf;
          } else {
            tmp_1 = null;
          }
          tmp$ret$8 = tmp_1;
        }
        var tmp0_elvis_lhs = tmp$ret$8;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex ? equals(new Char(charSequenceGet(urlString, delimiter)), new Char(_Char___init__impl__6a9atx(64))) : false) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            var tmp_2 = _this__u8e3s4;
            var tmp$ret$10;
            {
              var tmp6_substring = startIndex;
              var tmp$ret$9;
              {
                tmp$ret$9 = urlString;
              }
              tmp$ret$10 = tmp$ret$9.substring(tmp6_substring, passwordIndex);
            }
            tmp_2.z1x_1 = tmp$ret$10;
            var tmp_3 = _this__u8e3s4;
            var tmp$ret$12;
            {
              var tmp7_substring = passwordIndex + 1 | 0;
              var tmp$ret$11;
              {
                tmp$ret$11 = urlString;
              }
              tmp$ret$12 = tmp$ret$11.substring(tmp7_substring, delimiter);
            }
            tmp_3.a1y_1 = tmp$ret$12;
          } else {
            var tmp_4 = _this__u8e3s4;
            var tmp$ret$14;
            {
              var tmp8_substring = startIndex;
              var tmp$ret$13;
              {
                tmp$ret$13 = urlString;
              }
              tmp$ret$14 = tmp$ret$13.substring(tmp8_substring, delimiter);
            }
            tmp_4.z1x_1 = tmp$ret$14;
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.c1y_1 = equals(new Char(charSequenceGet(urlString, endIndex - 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_5 = _this__u8e3s4;
    var tmp_6;
    if (slashCount === 0) {
      tmp_6 = dropLast(_this__u8e3s4.c1y_1, 1);
    } else {
      tmp_6 = emptyList();
    }
    tmp_5.c1y_1 = tmp_6;
    var tmp$ret$16;
    {
      var tmp_7 = toCharArray('?#');
      var tmp_8 = startIndex;
      var tmp9_takeIf = indexOfAny$default(urlString, tmp_7, tmp_8, false, 4, null);
      {
      }
      var tmp_9;
      var tmp$ret$15;
      {
        tmp$ret$15 = tmp9_takeIf > 0;
      }
      if (tmp$ret$15) {
        tmp_9 = tmp9_takeIf;
      } else {
        tmp_9 = null;
      }
      tmp$ret$16 = tmp_9;
    }
    var tmp1_elvis_lhs = tmp$ret$16;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      var tmp$ret$18;
      {
        var tmp10_substring = startIndex;
        var tmp$ret$17;
        {
          tmp$ret$17 = urlString;
        }
        tmp$ret$18 = tmp$ret$17.substring(tmp10_substring, pathEnd);
      }
      var rawPath = tmp$ret$18;
      var tmp_10;
      var tmp_11;
      if (_this__u8e3s4.c1y_1.g() === 1) {
        var tmp$ret$19;
        {
          var tmp11_isEmpty = first_0(_this__u8e3s4.c1y_1);
          tmp$ret$19 = charSequenceLength(tmp11_isEmpty) === 0;
        }
        tmp_11 = tmp$ret$19;
      } else {
        tmp_11 = false;
      }
      if (tmp_11) {
        tmp_10 = emptyList();
      } else {
        tmp_10 = _this__u8e3s4.c1y_1;
      }
      var basePath = tmp_10;
      var tmp_12;
      if (rawPath === '/') {
        tmp_12 = get_ROOT_PATH();
      } else {
        var tmp_13 = charArrayOf([_Char___init__impl__6a9atx(47)]);
        tmp_12 = split$default(rawPath, tmp_13, false, 0, 6, null);
      }
      var rawChunks = tmp_12;
      var tmp2_subject = slashCount;
      var relativePath = plus_0(tmp2_subject === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.c1y_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    }
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(63))) : false) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  URLParserException.$metadata$ = classMeta('URLParserException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function findScheme(urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charSequenceGet(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) ? !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false) : false) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charSequenceGet(urlString, current);
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(58)))) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if ((equals(new Char(char), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(63)))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(35))))
        return -1;
      if ((((((incorrectSchemePosition === -1 ? !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) : false) ? !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) : false) ? !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(46))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(43))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(45))) : false) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    init_properties_URLParser_kt_jyldy();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex) {
      if (!equals(new Char(charSequenceGet(urlString, startIndex + result | 0)), new Char(char)))
        break $l$loop;
      var tmp0 = result;
      result = tmp0 + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    init_properties_URLParser_kt_jyldy();
    var tmp0_subject = slashCount;
    switch (tmp0_subject) {
      case 2:
        var tmp = _Char___init__impl__6a9atx(47);
        var nextSlash = indexOf$default(urlString, tmp, startIndex, false, 4, null);
        if (nextSlash === -1 ? true : nextSlash === endIndex) {
          var tmp_0 = _this__u8e3s4;
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = urlString;
            }
            tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
          }
          tmp_0.w1x_1 = tmp$ret$1;
          return Unit_getInstance();
        }

        var tmp_1 = _this__u8e3s4;
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = urlString;
          }
          tmp$ret$3 = tmp$ret$2.substring(startIndex, nextSlash);
        }

        tmp_1.w1x_1 = tmp$ret$3;
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = urlString;
          }
          tmp$ret$5 = tmp$ret$4.substring(nextSlash, endIndex);
        }

        set_encodedPath(_this__u8e3s4, tmp$ret$5);
        break;
      case 3:
        _this__u8e3s4.w1x_1 = '';
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            tmp$ret$6 = urlString;
          }
          tmp$ret$7 = tmp$ret$6.substring(startIndex, endIndex);
        }

        set_encodedPath(_this__u8e3s4, '/' + tmp$ret$7);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var delimiter = indexOf$default_0(urlString, '@', startIndex, false, 4, null);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = urlString;
      }
      tmp$ret$1 = tmp$ret$0.substring(startIndex, delimiter);
    }
    var tmp = tmp$ret$1;
    _this__u8e3s4.c1z(decodeURLPart$default(tmp, 0, 0, null, 7, null));
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    {
      var tmp0_substring = delimiter + 1 | 0;
      var tmp$ret$2;
      {
        tmp$ret$2 = urlString;
      }
      tmp$ret$3 = tmp$ret$2.substring(tmp0_substring, endIndex);
    }
    tmp_0.w1x_1 = tmp$ret$3;
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_subject = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(91))))
          skip = true;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(93))))
          skip = false;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(58))))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    {
      var tmp0_takeIf = indexOfColonInHostPort(urlString, startIndex, endIndex);
      {
      }
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_takeIf > 0;
      }
      if (tmp$ret$0) {
        tmp = tmp0_takeIf;
      } else {
        tmp = null;
      }
      tmp$ret$1 = tmp;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        tmp$ret$2 = urlString;
      }
      tmp$ret$3 = tmp$ret$2.substring(startIndex, colonIndex);
    }
    tmp_0.w1x_1 = tmp$ret$3;
    if ((colonIndex + 1 | 0) < endIndex) {
      var tmp_1 = _this__u8e3s4;
      var tmp$ret$5;
      {
        var tmp1_substring = colonIndex + 1 | 0;
        var tmp$ret$4;
        {
          tmp$ret$4 = urlString;
        }
        tmp$ret$5 = tmp$ret$4.substring(tmp1_substring, endIndex);
      }
      tmp_1.x1x_1 = toInt(tmp$ret$5);
    } else {
      _this__u8e3s4.x1x_1 = get_DEFAULT_PORT();
    }
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.y1x_1 = true;
      return endIndex;
    }
    var tmp$ret$1;
    {
      var tmp = _Char___init__impl__6a9atx(35);
      var tmp_0 = startIndex + 1 | 0;
      var tmp0_takeIf = indexOf$default(urlString, tmp, tmp_0, false, 4, null);
      {
      }
      var tmp_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_takeIf > 0;
      }
      if (tmp$ret$0) {
        tmp_1 = tmp0_takeIf;
      } else {
        tmp_1 = null;
      }
      tmp$ret$1 = tmp_1;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp$ret$3;
    {
      var tmp1_substring = startIndex + 1 | 0;
      var tmp$ret$2;
      {
        tmp$ret$2 = urlString;
      }
      tmp$ret$3 = tmp$ret$2.substring(tmp1_substring, fragmentStart);
    }
    var tmp_2 = tmp$ret$3;
    var rawParameters = parseQueryString$default(tmp_2, 0, 0, false, 6, null);
    rawParameters.n1k(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(35))) : false) {
      var tmp = _this__u8e3s4;
      var tmp$ret$1;
      {
        var tmp0_substring = startIndex + 1 | 0;
        var tmp$ret$0;
        {
          tmp$ret$0 = urlString;
        }
        tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, endIndex);
      }
      tmp.b1y_1 = tmp$ret$1;
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.d1y_1.r1k(key, values);
      return Unit_getInstance();
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function init_properties_URLParser_kt_jyldy() {
    if (properties_initialized_URLParser_kt_hd1g6a) {
    } else {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf_0('');
    }
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.f1y_1 === 'ws' ? true : _this__u8e3s4.f1y_1 === 'wss';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.p1x_1 = new URLProtocol('http', 80);
    this.q1x_1 = new URLProtocol('https', 443);
    this.r1x_1 = new URLProtocol('ws', 80);
    this.s1x_1 = new URLProtocol('wss', 443);
    this.t1x_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    var tmp$ret$2;
    {
      var tmp0_associateBy = listOf([this.p1x_1, this.q1x_1, this.r1x_1, this.s1x_1, this.t1x_1]);
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
      var tmp$ret$1;
      {
        var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
        var tmp0_iterator = tmp0_associateBy.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = element.f1y_1;
          }
          tmp0_associateByTo.a(tmp$ret$0, element);
        }
        tmp$ret$1 = tmp0_associateByTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    tmp.u1x_1 = tmp$ret$2;
  }
  Companion_7.prototype.m1z = function () {
    return this.u1x_1;
  };
  Companion_7.prototype.l1z = function (name) {
    var tmp$ret$1;
    {
      var tmp0_let = toLowerCasePreservingASCIIRules(name);
      {
      }
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs = Companion_getInstance_8().u1x_1.b2(tmp0_let);
        tmp$ret$0 = tmp0_elvis_lhs == null ? new URLProtocol(tmp0_let, get_DEFAULT_PORT()) : tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_8();
    this.f1y_1 = name;
    this.g1y_1 = defaultPort;
    {
      var tmp$ret$1;
      $l$block: {
        var tmp0_all = this.f1y_1;
        var indexedObject = tmp0_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          {
            tmp$ret$0 = isLowerCase(element);
          }
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      var tmp1_require = tmp$ret$1;
      {
      }
      if (!tmp1_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = 'All characters should be lower case';
        }
        var message = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  URLProtocol.prototype.j1u = function () {
    return this.f1y_1;
  };
  URLProtocol.prototype.n1z = function () {
    return this.g1y_1;
  };
  URLProtocol.prototype.toString = function () {
    return 'URLProtocol(name=' + this.f1y_1 + ', defaultPort=' + this.g1y_1 + ')';
  };
  URLProtocol.prototype.hashCode = function () {
    var result = getStringHashCode(this.f1y_1);
    result = imul(result, 31) + this.g1y_1 | 0;
    return result;
  };
  URLProtocol.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof URLProtocol ? other : THROW_CCE();
    if (!(this.f1y_1 === tmp0_other_with_cast.f1y_1))
      return false;
    if (!(this.g1y_1 === tmp0_other_with_cast.g1y_1))
      return false;
    return true;
  };
  URLProtocol.$metadata$ = classMeta('URLProtocol');
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.f1y_1 === 'https' ? true : _this__u8e3s4.f1y_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.v1x_1 = url.v1x_1;
    _this__u8e3s4.w1x_1 = url.w1x_1;
    _this__u8e3s4.x1x_1 = url.x1x_1;
    _this__u8e3s4.c1y_1 = url.c1y_1;
    _this__u8e3s4.z1x_1 = url.z1x_1;
    _this__u8e3s4.a1y_1 = url.a1y_1;
    var tmp$ret$0;
    {
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      {
      }
      {
        appendAll(tmp0_apply, url.d1y_1);
      }
      tmp$ret$0 = tmp0_apply;
    }
    _this__u8e3s4.i1z(tmp$ret$0);
    _this__u8e3s4.b1y_1 = url.b1y_1;
    _this__u8e3s4.y1x_1 = url.y1x_1;
    return _this__u8e3s4;
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).l17();
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = !isBlank(encodedPath);
    }
    if (tmp$ret$0) {
      tmp = !startsWith$default_0(encodedPath, '/', false, 2, null);
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.x3(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.c(encodedPath);
    if (!encodedQueryParameters.m() ? true : trailingQuery) {
      _this__u8e3s4.c('?');
    }
    var tmp$ret$8;
    {
      var tmp0_flatMap = encodedQueryParameters.m1k();
      var tmp$ret$7;
      {
        var tmp0_flatMapTo = ArrayList_init_$Create$_0();
        var tmp0_iterator = tmp0_flatMap.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$6;
          {
            var tmp$ret$1;
            {
              tmp$ret$1 = element.r();
            }
            var key = tmp$ret$1;
            var tmp$ret$2;
            {
              tmp$ret$2 = element.s();
            }
            var value = tmp$ret$2;
            var tmp_0;
            if (value.m()) {
              tmp_0 = listOf_0(to(key, null));
            } else {
              var tmp$ret$5;
              {
                var tmp$ret$4;
                {
                  var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
                  var tmp0_iterator_0 = value.d();
                  while (tmp0_iterator_0.e()) {
                    var item = tmp0_iterator_0.f();
                    var tmp$ret$3;
                    {
                      tmp$ret$3 = to(key, item);
                    }
                    tmp0_mapTo.b(tmp$ret$3);
                  }
                  tmp$ret$4 = tmp0_mapTo;
                }
                tmp$ret$5 = tmp$ret$4;
              }
              tmp_0 = tmp$ret$5;
            }
            tmp$ret$6 = tmp_0;
          }
          var list = tmp$ret$6;
          addAll(tmp0_flatMapTo, list);
        }
        tmp$ret$7 = tmp0_flatMapTo;
      }
      tmp$ret$8 = tmp$ret$7;
    }
    var tmp_1 = tmp$ret$8;
    joinTo$default(tmp_1, _this__u8e3s4, '&', null, null, 0, null, appendUrlFullPath$lambda(), 60, null);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_getInstance();
    }
    _this__u8e3s4.fc(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.x3(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.fc(encodedPassword);
    }
    _this__u8e3s4.fc('@');
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.i1y_1 + ':' + _this__u8e3s4.a1z();
  }
  function URLBuilder_0(urlString) {
    return takeFrom(URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null), urlString);
  }
  function appendUrlFullPath$lambda() {
    return function (it) {
      var key = it.q4_1;
      var tmp;
      if (it.r4_1 == null) {
        tmp = key;
      } else {
        var value = toString_0(it.r4_1);
        tmp = key + '=' + value;
      }
      return tmp;
    };
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Url$encodedPath$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.k1y_1.m()) {
        return '';
      }
      var tmp_0 = _Char___init__impl__6a9atx(47);
      var tmp_1 = this$0.h1y_1.f1y_1.length + 3 | 0;
      var pathStartIndex = indexOf$default(this$0.q1y_1, tmp_0, tmp_1, false, 4, null);
      var tmp_2;
      if (pathStartIndex === -1) {
        return '';
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      }
      var tmp_3 = tmp$ret$0;
      var pathEndIndex = indexOfAny$default(this$0.q1y_1, tmp_3, pathStartIndex, false, 4, null);
      var tmp_4;
      if (pathEndIndex === -1) {
        var tmp$ret$2;
        {
          var tmp0_substring = this$0.q1y_1;
          var tmp$ret$1;
          {
            tmp$ret$1 = tmp0_substring;
          }
          tmp$ret$2 = tmp$ret$1.substring(pathStartIndex);
        }
        return tmp$ret$2;
      }
      var tmp$ret$4;
      {
        var tmp1_substring = this$0.q1y_1;
        var tmp$ret$3;
        {
          tmp$ret$3 = tmp1_substring;
        }
        tmp$ret$4 = tmp$ret$3.substring(pathStartIndex, pathEndIndex);
      }
      return tmp$ret$4;
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(63);
      var queryStart = indexOf$default(this$0.q1y_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (queryStart === 0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.q1y_1, tmp_1, queryStart, false, 4, null);
      var tmp_2;
      if (queryEnd === -1) {
        var tmp$ret$1;
        {
          var tmp0_substring = this$0.q1y_1;
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0_substring;
          }
          tmp$ret$1 = tmp$ret$0.substring(queryStart);
        }
        return tmp$ret$1;
      }
      var tmp$ret$3;
      {
        var tmp1_substring = this$0.q1y_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_substring;
        }
        tmp$ret$3 = tmp$ret$2.substring(queryStart, queryEnd);
      }
      return tmp$ret$3;
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(47);
      var tmp_0 = this$0.h1y_1.f1y_1.length + 3 | 0;
      var pathStart = indexOf$default(this$0.q1y_1, tmp, tmp_0, false, 4, null);
      var tmp_1;
      if (pathStart === -1) {
        return '';
      }
      var tmp_2 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.q1y_1, tmp_2, pathStart, false, 4, null);
      var tmp_3;
      if (queryEnd === -1) {
        var tmp$ret$1;
        {
          var tmp0_substring = this$0.q1y_1;
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0_substring;
          }
          tmp$ret$1 = tmp$ret$0.substring(pathStart);
        }
        return tmp$ret$1;
      }
      var tmp$ret$3;
      {
        var tmp1_substring = this$0.q1y_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_substring;
        }
        tmp$ret$3 = tmp$ret$2.substring(pathStart, queryEnd);
      }
      return tmp$ret$3;
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.n1y_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      {
        var tmp0_isEmpty = this$0.n1y_1;
        tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      }
      if (tmp$ret$0) {
        return '';
      }
      var usernameStart = this$0.h1y_1.f1y_1.length + 3 | 0;
      var tmp$ret$1;
      {
        tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      }
      var tmp_1 = tmp$ret$1;
      var usernameEnd = indexOfAny$default(this$0.q1y_1, tmp_1, usernameStart, false, 4, null);
      var tmp$ret$3;
      {
        var tmp1_substring = this$0.q1y_1;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp1_substring;
        }
        tmp$ret$3 = tmp$ret$2.substring(usernameStart, usernameEnd);
      }
      return tmp$ret$3;
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.o1y_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      {
        var tmp0_isEmpty = this$0.o1y_1;
        tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      }
      if (tmp$ret$0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(58);
      var tmp_2 = this$0.h1y_1.f1y_1.length + 3 | 0;
      var passwordStart = indexOf$default(this$0.q1y_1, tmp_1, tmp_2, false, 4, null) + 1 | 0;
      var tmp_3 = _Char___init__impl__6a9atx(64);
      var passwordEnd = indexOf$default(this$0.q1y_1, tmp_3, 0, false, 6, null);
      var tmp$ret$2;
      {
        var tmp1_substring = this$0.q1y_1;
        var tmp$ret$1;
        {
          tmp$ret$1 = tmp1_substring;
        }
        tmp$ret$2 = tmp$ret$1.substring(passwordStart, passwordEnd);
      }
      return tmp$ret$2;
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(35);
      var fragmentStart = indexOf$default(this$0.q1y_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (fragmentStart === 0) {
        return '';
      }
      var tmp$ret$1;
      {
        var tmp0_substring = this$0.q1y_1;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_substring;
        }
        tmp$ret$1 = tmp$ret$0.substring(fragmentStart);
      }
      return tmp$ret$1;
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    Companion_getInstance_9();
    this.h1y_1 = protocol;
    this.i1y_1 = host;
    this.j1y_1 = specifiedPort;
    this.k1y_1 = pathSegments;
    this.l1y_1 = parameters;
    this.m1y_1 = fragment;
    this.n1y_1 = user;
    this.o1y_1 = password;
    this.p1y_1 = trailingQuery;
    this.q1y_1 = urlString;
    {
      var tmp;
      var containsArg = this.j1y_1;
      if (0 <= containsArg ? containsArg <= 65535 : false) {
        tmp = true;
      } else {
        tmp = this.j1y_1 === get_DEFAULT_PORT();
      }
      var tmp0_require = tmp;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'port must be between 0 and 65535, or ' + get_DEFAULT_PORT() + ' if not set';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp_0 = this;
    tmp_0.r1y_1 = lazy_0(Url$encodedPath$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.s1y_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.t1y_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.u1y_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.v1y_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.w1y_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  Url_0.prototype.y1y = function () {
    return this.h1y_1;
  };
  Url_0.prototype.z1y = function () {
    return this.i1y_1;
  };
  Url_0.prototype.o1z = function () {
    return this.j1y_1;
  };
  Url_0.prototype.a1z = function () {
    var tmp$ret$1;
    {
      var tmp0_takeUnless = this.j1y_1;
      {
      }
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_takeUnless === get_DEFAULT_PORT();
      }
      if (!tmp$ret$0) {
        tmp = tmp0_takeUnless;
      } else {
        tmp = null;
      }
      tmp$ret$1 = tmp;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? this.h1y_1.g1y_1 : tmp0_elvis_lhs;
  };
  Url_0.prototype.b1z = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = encodedUser$factory();
      tmp$ret$0 = this.u1y_1.s();
    }
    return tmp$ret$0;
  };
  Url_0.prototype.e1z = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = encodedPassword$factory();
      tmp$ret$0 = this.v1y_1.s();
    }
    return tmp$ret$0;
  };
  Url_0.prototype.toString = function () {
    return this.q1y_1;
  };
  Url_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Url_0)
      other;
    else
      THROW_CCE();
    if (!(this.q1y_1 === other.q1y_1))
      return false;
    return true;
  };
  Url_0.prototype.hashCode = function () {
    return getStringHashCode(this.q1y_1);
  };
  Url_0.$metadata$ = classMeta('Url');
  function get_authority_0(_this__u8e3s4) {
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
          tmp0_apply.fc(get_encodedUserAndPassword_0(_this__u8e3s4));
          if (_this__u8e3s4.j1y_1 === get_DEFAULT_PORT() ? true : _this__u8e3s4.j1y_1 === _this__u8e3s4.h1y_1.g1y_1) {
            tmp0_apply.fc(_this__u8e3s4.i1y_1);
          } else {
            tmp0_apply.fc(get_hostWithPort(_this__u8e3s4));
          }
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
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
          appendUserAndPassword(tmp0_apply, _this__u8e3s4.b1z(), _this__u8e3s4.e1z());
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  }
  function encodedUser$factory() {
    return getPropertyCallableRef('encodedUser', 1, KProperty1, function (receiver) {
      return receiver.b1z();
    }, null);
  }
  function encodedPassword$factory() {
    return getPropertyCallableRef('encodedPassword', 1, KProperty1, function (receiver) {
      return receiver.e1z();
    }, null);
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.p1z_1 = encodedParametersBuilder;
    this.q1z_1 = this.p1z_1.j1k();
  }
  UrlDecodedParametersBuilder.prototype.l17 = function () {
    return decodeParameters(this.p1z_1);
  };
  UrlDecodedParametersBuilder.prototype.j1k = function () {
    return this.q1z_1;
  };
  UrlDecodedParametersBuilder.prototype.k1k = function (name) {
    var tmp0_safe_receiver = this.p1z_1.k1k(encodeURLParameter$default(name, false, 1, null));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
          var tmp0_iterator = tmp0_safe_receiver.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            var tmp$ret$0;
            {
              tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
            }
            tmp0_mapTo.b(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  UrlDecodedParametersBuilder.prototype.l1k = function () {
    var tmp$ret$2;
    {
      var tmp0_map = this.p1z_1.l1k();
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, false, null, 15, null);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return toSet(tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.m = function () {
    return this.p1z_1.m();
  };
  UrlDecodedParametersBuilder.prototype.m1k = function () {
    return decodeParameters(this.p1z_1).m1k();
  };
  UrlDecodedParametersBuilder.prototype.u1k = function (name, value) {
    return this.p1z_1.u1k(encodeURLParameter$default(name, false, 1, null), encodeURLParameterValue(value));
  };
  UrlDecodedParametersBuilder.prototype.r1k = function (name, values) {
    var tmp = encodeURLParameter$default(name, false, 1, null);
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
        var tmp0_iterator = values.d();
        while (tmp0_iterator.e()) {
          var item = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = encodeURLParameterValue(item);
          }
          tmp0_mapTo.b(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return this.p1z_1.r1k(tmp, tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.u6 = function () {
    return this.p1z_1.u6();
  };
  UrlDecodedParametersBuilder.$metadata$ = classMeta('UrlDecodedParametersBuilder', [ParametersBuilder]);
  function encodeParameters(parameters) {
    var tmp$ret$0;
    {
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      {
      }
      {
        appendAllEncoded(tmp0_apply, parameters);
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function decodeParameters(parameters) {
    var tmp$ret$0;
    {
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      {
      }
      {
        appendAllDecoded(tmp0_apply, parameters);
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0.l17();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    {
      var tmp0_forEach = parameters.l1k();
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        {
          var tmp0_elvis_lhs = parameters.k1k(element);
          var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
          var tmp = encodeURLParameter$default(element, false, 1, null);
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
              var tmp0_iterator_0 = values.d();
              while (tmp0_iterator_0.e()) {
                var item = tmp0_iterator_0.f();
                var tmp$ret$0;
                {
                  tmp$ret$0 = encodeURLParameterValue(item);
                }
                tmp0_mapTo.b(tmp$ret$0);
              }
              tmp$ret$1 = tmp0_mapTo;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          _this__u8e3s4.r1k(tmp, tmp$ret$2);
        }
      }
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    {
      var tmp0_forEach = parameters.l1k();
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        {
          var tmp0_elvis_lhs = parameters.k1k(element);
          var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
          var tmp = decodeURLQueryComponent$default(element, 0, 0, false, null, 15, null);
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
              var tmp0_iterator_0 = values.d();
              while (tmp0_iterator_0.e()) {
                var item = tmp0_iterator_0.f();
                var tmp$ret$0;
                {
                  tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
                }
                tmp0_mapTo.b(tmp$ret$0);
              }
              tmp$ret$1 = tmp0_mapTo;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          _this__u8e3s4.r1k(tmp, tmp$ret$2);
        }
      }
    }
  }
  function NoContent() {
    OutgoingContent.call(this);
  }
  NoContent.$metadata$ = classMeta('NoContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  ReadChannelContent.$metadata$ = classMeta('ReadChannelContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function WriteChannelContent() {
  }
  WriteChannelContent.$metadata$ = classMeta('WriteChannelContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ByteArrayContent() {
    OutgoingContent.call(this);
  }
  ByteArrayContent.$metadata$ = classMeta('ByteArrayContent', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function ProtocolUpgrade() {
  }
  ProtocolUpgrade.$metadata$ = classMeta('ProtocolUpgrade', undefined, undefined, undefined, undefined, OutgoingContent.prototype);
  function OutgoingContent() {
    this.r1z_1 = null;
  }
  OutgoingContent.prototype.s1z = function () {
    return null;
  };
  OutgoingContent.prototype.t1z = function () {
    return null;
  };
  OutgoingContent.prototype.p1u = function () {
    return Companion_getInstance_2().i1q_1;
  };
  OutgoingContent.$metadata$ = classMeta('OutgoingContent');
  function NullBody() {
    NullBody_instance = this;
  }
  NullBody.$metadata$ = objectMeta('NullBody');
  var NullBody_instance;
  function NullBody_getInstance() {
    if (NullBody_instance == null)
      new NullBody();
    return NullBody_instance;
  }
  function TextContent_init_$Init$(text, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      status = null;
    TextContent.call($this, text, contentType, status);
    return $this;
  }
  function TextContent_init_$Create$(text, contentType, status, $mask0, $marker) {
    return TextContent_init_$Init$(text, contentType, status, $mask0, $marker, Object.create(TextContent.prototype));
  }
  function TextContent(text, contentType, status) {
    ByteArrayContent.call(this);
    this.b20_1 = text;
    this.c20_1 = contentType;
    this.d20_1 = status;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_toByteArray = this.b20_1;
      var tmp0_elvis_lhs = charset(this.c20_1);
      var tmp1_toByteArray = tmp0_elvis_lhs == null ? Charsets_getInstance().w1e_1 : tmp0_elvis_lhs;
      if (tmp1_toByteArray.equals(Charsets_getInstance().w1e_1)) {
        tmp$ret$0 = encodeToByteArray(tmp0_toByteArray);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp1_toByteArray.z1e(), tmp0_toByteArray, 0, tmp0_toByteArray.length);
    }
    tmp.e20_1 = tmp$ret$0;
  }
  TextContent.prototype.s1z = function () {
    return this.c20_1;
  };
  TextContent.prototype.t1z = function () {
    return toLong_0(this.e20_1.length);
  };
  TextContent.prototype.z1z = function () {
    return this.e20_1;
  };
  TextContent.prototype.toString = function () {
    return 'TextContent[' + this.c20_1 + '] "' + take(this.b20_1, 30) + '"';
  };
  TextContent.$metadata$ = classMeta('TextContent', undefined, undefined, undefined, undefined, ByteArrayContent.prototype);
  function get_origin(_this__u8e3s4) {
    var tmp;
    if (PlatformUtils_getInstance().c1o_1) {
      var tmp_0;
      if (!(window === undefined)) {
        tmp_0 = window.location.origin;
      } else {
        var tmp_1 = self.location.origin;
        tmp_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = 'http://localhost';
    }
    return tmp;
  }
  //region block: post-declaration
  EmptyHeaders.prototype.qf = get;
  EmptyHeaders.prototype.n1k = forEach;
  EmptyParameters.prototype.n1k = forEach;
  //endregion
  //region block: init
  DEFAULT_PORT = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = TextContent_init_$Create$;
  _.$_$.b = HeadersBuilder_init_$Create$;
  _.$_$.c = URLBuilder_init_$Create$;
  _.$_$.d = NullBody_getInstance;
  _.$_$.e = Application_getInstance;
  _.$_$.f = Text_getInstance;
  _.$_$.g = Companion_getInstance_2;
  _.$_$.h = HttpHeaders_getInstance;
  _.$_$.i = Companion_getInstance_3;
  _.$_$.j = Companion_getInstance_4;
  _.$_$.k = Companion_getInstance_5;
  _.$_$.l = ByteArrayContent;
  _.$_$.m = NoContent;
  _.$_$.n = ProtocolUpgrade;
  _.$_$.o = ReadChannelContent;
  _.$_$.p = WriteChannelContent;
  _.$_$.q = OutgoingContent;
  _.$_$.r = HttpMessageBuilder;
  _.$_$.s = HttpMessage;
  _.$_$.t = HttpStatusCode;
  _.$_$.u = UnsafeHeaderException;
  _.$_$.v = get_authority;
  _.$_$.w = get_authority_0;
  _.$_$.x = charset_0;
  _.$_$.y = charset;
  _.$_$.z = contentLength;
  _.$_$.a1 = contentType;
  _.$_$.b1 = isSecure;
  _.$_$.c1 = isWebsocket;
  _.$_$.d1 = takeFrom_0;
  _.$_$.e1 = takeFrom;
  _.$_$.f1 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http-js-ir.js.map