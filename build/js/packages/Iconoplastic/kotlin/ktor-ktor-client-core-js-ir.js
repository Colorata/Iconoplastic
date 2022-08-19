(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './ktor-ktor-events-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-websockets-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./ktor-ktor-events-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-websockets-js-ir.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-events-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-events-js-ir' was not found. Please, check whether 'ktor-ktor-events-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-websockets-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-websockets-js-ir' was not found. Please, check whether 'ktor-ktor-websockets-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    root['ktor-ktor-client-core-js-ir'] = factory(typeof this['ktor-ktor-client-core-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['ktor-ktor-events-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-websockets-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var CoroutineImpl = kotlin_kotlin.$_$.e5;
  var THROW_CCE = kotlin_kotlin.$_$.b8;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.c6;
  var toString = kotlin_kotlin.$_$.l6;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p4;
  var classMeta = kotlin_kotlin.$_$.q5;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.m;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.x;
  var isInterface = kotlin_kotlin.$_$.b6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var ensureNotNull = kotlin_kotlin.$_$.h8;
  var SuspendFunction2 = kotlin_kotlin.$_$.g5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.f1;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.j;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var equals = kotlin_kotlin.$_$.s5;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.n8;
  var IllegalStateException = kotlin_kotlin.$_$.x7;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.k5;
  var UnsupportedOperationException = kotlin_kotlin.$_$.d8;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.u;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var trimMargin$default = kotlin_kotlin.$_$.r;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.e1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Long = kotlin_kotlin.$_$.y7;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.o1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.g1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.o;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.l8;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var writer = kotlin_io_ktor_ktor_io.$_$.i1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.p;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.p;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.m;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.n;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.l;
  var SuspendFunction1 = kotlin_kotlin.$_$.f5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.r2;
  var arrayOf = kotlin_kotlin.$_$.f8;
  var createKType = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.q;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var emptySet = kotlin_kotlin.$_$.o3;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.u;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var SilentSupervisor$default = kotlin_io_ktor_ktor_utils.$_$.c;
  var lazy = kotlin_kotlin.$_$.k8;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CloseableCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var KProperty1 = kotlin_kotlin.$_$.u6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.v5;
  var setOf = kotlin_kotlin.$_$.e4;
  var Key = kotlin_kotlin.$_$.c5;
  var get = kotlin_kotlin.$_$.z4;
  var fold = kotlin_kotlin.$_$.y4;
  var minusKey = kotlin_kotlin.$_$.a5;
  var plus = kotlin_kotlin.$_$.d5;
  var Element = kotlin_kotlin.$_$.b5;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.h;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.z;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var toLong = kotlin_kotlin.$_$.j6;
  var toLong_0 = kotlin_kotlin.$_$.n7;
  var contentType = kotlin_io_ktor_ktor_http.$_$.a1;
  var isByteArray = kotlin_kotlin.$_$.z5;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t2;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var CancellationException = kotlin_kotlin.$_$.o4;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.h1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClass = kotlin_kotlin.$_$.c;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.k;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.y;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.w;
  var Unit = kotlin_kotlin.$_$.c8;
  var toString_0 = kotlin_kotlin.$_$.o8;
  var toInt = kotlin_kotlin.$_$.k7;
  var reversed = kotlin_kotlin.$_$.d4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var charset = kotlin_io_ktor_ktor_http.$_$.y;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.f1;
  var Comparator = kotlin_kotlin.$_$.s7;
  var compareValues = kotlin_kotlin.$_$.n4;
  var get_name = kotlin_io_ktor_ktor_io.$_$.s;
  var toList = kotlin_kotlin.$_$.h4;
  var sortedWith = kotlin_kotlin.$_$.g4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var charSequenceLength = kotlin_kotlin.$_$.o5;
  var roundToInt = kotlin_kotlin.$_$.m6;
  var firstOrNull = kotlin_kotlin.$_$.q3;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.x;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.w;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.e1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.b1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.v;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.k;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.i;
  var setOf_0 = kotlin_kotlin.$_$.f4;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var get_lastIndex = kotlin_kotlin.$_$.s3;
  var downTo = kotlin_kotlin.$_$.r6;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.c1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var IOException = kotlin_io_ktor_ktor_io.$_$.c1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.m;
  var HttpMessage = kotlin_io_ktor_ktor_http.$_$.s;
  var URLBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.d1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.w;
  var HttpMessageBuilder = kotlin_io_ktor_ktor_http.$_$.r;
  var GMTDate$default = kotlin_io_ktor_ktor_utils.$_$.b;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.i;
  var decode$default = kotlin_io_ktor_ktor_io.$_$.d;
  var hashCode = kotlin_kotlin.$_$.x5;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.d1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.j;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.g;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var intercepted = kotlin_kotlin.$_$.r4;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var extendThrowable = kotlin_kotlin.$_$.t5;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.g8;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i2;
  var toTypedArray = kotlin_kotlin.$_$.m4;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var String$default = kotlin_io_ktor_ktor_io.$_$.f;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.l;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.i;
  var readShort = kotlin_io_ktor_ktor_io.$_$.a1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Codes_INTERNAL_ERROR_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.h;
  //endregion
  //region block: pre-declaration
  HttpClient$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClient$slambda.prototype.constructor = HttpClient$slambda;
  HttpClient$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpClient$slambda_1.prototype.constructor = HttpClient$slambda_1;
  $executeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$0.prototype.constructor = $executeCOROUTINE$0;
  $bodyNullableCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $bodyNullableCOROUTINE$1.prototype.constructor = $bodyNullableCOROUTINE$1;
  DoubleReceiveException.prototype = Object.create(IllegalStateException.prototype);
  DoubleReceiveException.prototype.constructor = DoubleReceiveException;
  NoTransformationFoundException.prototype = Object.create(UnsupportedOperationException.prototype);
  NoTransformationFoundException.prototype.constructor = NoTransformationFoundException;
  SavedHttpCall.prototype = Object.create(HttpClientCall.prototype);
  SavedHttpCall.prototype.constructor = SavedHttpCall;
  function get_coroutineContext() {
    return this.a27().qk();
  }
  SavedHttpResponse.prototype = Object.create(HttpResponse.prototype);
  SavedHttpResponse.prototype.constructor = SavedHttpResponse;
  $saveCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $saveCOROUTINE$3.prototype.constructor = $saveCOROUTINE$3;
  UnsupportedContentTypeException.prototype = Object.create(IllegalStateException.prototype);
  UnsupportedContentTypeException.prototype.constructor = UnsupportedContentTypeException;
  ObservableContent$content$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ObservableContent$content$slambda.prototype.constructor = ObservableContent$content$slambda;
  ObservableContent.prototype = Object.create(ReadChannelContent.prototype);
  ObservableContent.prototype.constructor = ObservableContent;
  HttpClientEngine$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClientEngine$install$slambda.prototype.constructor = HttpClientEngine$install$slambda;
  HttpClientEngine$executeWithinCallContext$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClientEngine$executeWithinCallContext$slambda.prototype.constructor = HttpClientEngine$executeWithinCallContext$slambda;
  $executeWithinCallContextCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $executeWithinCallContextCOROUTINE$4.prototype.constructor = $executeWithinCallContextCOROUTINE$4;
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().k24_1;
    client.t21_1.k1n(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  ClientEngineClosedException.prototype = Object.create(IllegalStateException.prototype);
  ClientEngineClosedException.prototype.constructor = ClientEngineClosedException;
  BodyProgress$handle$slambda.prototype = Object.create(CoroutineImpl.prototype);
  BodyProgress$handle$slambda.prototype.constructor = BodyProgress$handle$slambda;
  BodyProgress$handle$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  BodyProgress$handle$slambda_1.prototype.constructor = BodyProgress$handle$slambda_1;
  ResponseException.prototype = Object.create(IllegalStateException.prototype);
  ResponseException.prototype.constructor = ResponseException;
  RedirectResponseException.prototype = Object.create(ResponseException.prototype);
  RedirectResponseException.prototype.constructor = RedirectResponseException;
  ClientRequestException.prototype = Object.create(ResponseException.prototype);
  ClientRequestException.prototype.constructor = ClientRequestException;
  ServerResponseException.prototype = Object.create(ResponseException.prototype);
  ServerResponseException.prototype.constructor = ServerResponseException;
  addDefaultResponseValidation$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  addDefaultResponseValidation$lambda$slambda.prototype.constructor = addDefaultResponseValidation$lambda$slambda;
  defaultTransformers$1$content$1.prototype = Object.create(ByteArrayContent.prototype);
  defaultTransformers$1$content$1.prototype.constructor = defaultTransformers$1$content$1;
  defaultTransformers$1$content$2.prototype = Object.create(ReadChannelContent.prototype);
  defaultTransformers$1$content$2.prototype.constructor = defaultTransformers$1$content$2;
  defaultTransformers$slambda.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda.prototype.constructor = defaultTransformers$slambda;
  defaultTransformers$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda$slambda.prototype.constructor = defaultTransformers$slambda$slambda;
  defaultTransformers$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda_1.prototype.constructor = defaultTransformers$slambda_1;
  HttpCallValidator$Companion$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda.prototype.constructor = HttpCallValidator$Companion$install$slambda;
  HttpCallValidator$Companion$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda_1.prototype.constructor = HttpCallValidator$Companion$install$slambda_1;
  HttpCallValidator$Companion$install$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda_3.prototype.constructor = HttpCallValidator$Companion$install$slambda_3;
  $validateResponseCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $validateResponseCOROUTINE$5.prototype.constructor = $validateResponseCOROUTINE$5;
  $processExceptionCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $processExceptionCOROUTINE$6.prototype.constructor = $processExceptionCOROUTINE$6;
  HttpPlainText$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpPlainText$Plugin$install$slambda.prototype.constructor = HttpPlainText$Plugin$install$slambda;
  HttpPlainText$Plugin$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpPlainText$Plugin$install$slambda_1.prototype.constructor = HttpPlainText$Plugin$install$slambda_1;
  HttpRedirect$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpRedirect$Plugin$install$slambda.prototype.constructor = HttpRedirect$Plugin$install$slambda;
  $handleCallCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $handleCallCOROUTINE$7.prototype.constructor = $handleCallCOROUTINE$7;
  HttpRequestLifecycle$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpRequestLifecycle$Plugin$install$slambda.prototype.constructor = HttpRequestLifecycle$Plugin$install$slambda;
  HttpSend$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpSend$Plugin$install$slambda.prototype.constructor = HttpSend$Plugin$install$slambda;
  $executeCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$8.prototype.constructor = $executeCOROUTINE$8;
  SendCountExceedException.prototype = Object.create(IllegalStateException.prototype);
  SendCountExceedException.prototype.constructor = SendCountExceedException;
  HttpTimeout$Plugin$install$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpTimeout$Plugin$install$slambda$slambda.prototype.constructor = HttpTimeout$Plugin$install$slambda$slambda;
  HttpTimeout$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpTimeout$Plugin$install$slambda.prototype.constructor = HttpTimeout$Plugin$install$slambda;
  HttpRequestTimeoutException.prototype = Object.create(IOException.prototype);
  HttpRequestTimeoutException.prototype.constructor = HttpRequestTimeoutException;
  DelegatedResponse.prototype = Object.create(HttpResponse.prototype);
  DelegatedResponse.prototype.constructor = DelegatedResponse;
  WebSocketException.prototype = Object.create(IllegalStateException.prototype);
  WebSocketException.prototype.constructor = WebSocketException;
  ClientUpgradeContent.prototype = Object.create(NoContent.prototype);
  ClientUpgradeContent.prototype.constructor = ClientUpgradeContent;
  HttpRequestPipeline.prototype = Object.create(Pipeline.prototype);
  HttpRequestPipeline.prototype.constructor = HttpRequestPipeline;
  HttpSendPipeline.prototype = Object.create(Pipeline.prototype);
  HttpSendPipeline.prototype.constructor = HttpSendPipeline;
  DefaultHttpResponse.prototype = Object.create(HttpResponse.prototype);
  DefaultHttpResponse.prototype.constructor = DefaultHttpResponse;
  $bodyAsTextCOROUTINE$12.prototype = Object.create(CoroutineImpl.prototype);
  $bodyAsTextCOROUTINE$12.prototype.constructor = $bodyAsTextCOROUTINE$12;
  HttpResponsePipeline.prototype = Object.create(Pipeline.prototype);
  HttpResponsePipeline.prototype.constructor = HttpResponsePipeline;
  HttpReceivePipeline.prototype = Object.create(Pipeline.prototype);
  HttpReceivePipeline.prototype.constructor = HttpReceivePipeline;
  HttpStatement$execute$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpStatement$execute$slambda.prototype.constructor = HttpStatement$execute$slambda;
  $executeCOROUTINE$13.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$13.prototype.constructor = $executeCOROUTINE$13;
  $executeUnsafeCOROUTINE$14.prototype = Object.create(CoroutineImpl.prototype);
  $executeUnsafeCOROUTINE$14.prototype.constructor = $executeUnsafeCOROUTINE$14;
  $cleanupCOROUTINE$15.prototype = Object.create(CoroutineImpl.prototype);
  $cleanupCOROUTINE$15.prototype.constructor = $cleanupCOROUTINE$15;
  observable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  observable$slambda.prototype.constructor = observable$slambda;
  EmptyContent.prototype = Object.create(NoContent.prototype);
  EmptyContent.prototype.constructor = EmptyContent;
  $executeCOROUTINE$16.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$16.prototype.constructor = $executeCOROUTINE$16;
  $executeWebSocketRequestCOROUTINE$17.prototype = Object.create(CoroutineImpl.prototype);
  $executeWebSocketRequestCOROUTINE$17.prototype.constructor = $executeWebSocketRequestCOROUTINE$17;
  JsClientEngine.prototype = Object.create(HttpClientEngineBase.prototype);
  JsClientEngine.prototype.constructor = JsClientEngine;
  JsError.prototype = Object.create(Error.prototype);
  JsError.prototype.constructor = JsError;
  toRaw$slambda.prototype = Object.create(CoroutineImpl.prototype);
  toRaw$slambda.prototype.constructor = toRaw$slambda;
  $toRawCOROUTINE$18.prototype = Object.create(CoroutineImpl.prototype);
  $toRawCOROUTINE$18.prototype.constructor = $toRawCOROUTINE$18;
  channelFromStream$slambda.prototype = Object.create(CoroutineImpl.prototype);
  channelFromStream$slambda.prototype.constructor = channelFromStream$slambda;
  readBodyNode$slambda.prototype = Object.create(CoroutineImpl.prototype);
  readBodyNode$slambda.prototype.constructor = readBodyNode$slambda;
  JsWebSocketSession$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsWebSocketSession$slambda.prototype.constructor = JsWebSocketSession$slambda;
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.n21_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, Object.create(HttpClient.prototype));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        tmp = cancel$default(this$0.l21_1, null, 1, null);
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.h22_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda.prototype.l22 = function ($this$intercept, call, $cont) {
    var tmp = this.m22($this$intercept, call, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpClient$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            var tmp_0 = this.j22_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.j22_1) + '(' + getKClassFromExpression(this.j22_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.pd_1 = 1;
            suspendResult = this.h22_1.u21_1.f1n(Unit_getInstance(), this.j22_1.s22(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k22_1 = suspendResult;
            this.j22_1.t22(this.k22_1);
            this.pd_1 = 2;
            suspendResult = this.i22_1.k1m(this.j22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpClient$slambda.prototype.m22 = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.h22_1, completion);
    i.i22_1 = $this$intercept;
    i.j22_1 = call;
    return i;
  };
  HttpClient$slambda.$metadata$ = classMeta('HttpClient$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $cont) {
      return i.l22($this$intercept, call, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0() {
    return function ($this$install) {
      defaultTransformers($this$install);
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.c23_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda_1.prototype.f23 = function ($this$intercept, it, $cont) {
    var tmp = this.g23($this$intercept, it, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpClient$slambda_1.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.f23(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda_1.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            this.qd_1 = 2;
            this.pd_1 = 1;
            suspendResult = this.d23_1.l1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.qd_1 = 3;
            this.pd_1 = 4;
            continue $sm;
          case 2:
            this.qd_1 = 3;
            var tmp_0 = this.sd_1;
            if (tmp_0 instanceof Error) {
              var cause = this.sd_1;
              this.c23_1.x21_1.l20(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.d23_1.g1n_1.s22(), cause));
              throw cause;
            } else {
              throw this.sd_1;
            }

            break;
          case 3:
            throw this.sd_1;
          case 4:
            this.qd_1 = 3;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpClient$slambda_1.prototype.g23 = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.c23_1, completion);
    i.d23_1 = $this$intercept;
    i.e23_1 = it;
    return i;
  };
  HttpClient$slambda_1.$metadata$ = classMeta('HttpClient$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.f23($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p23_1 = _this__u8e3s4;
    this.q23_1 = builder;
  }
  $executeCOROUTINE$0.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.p23_1.x21_1.l20(get_HttpRequestCreated(), this.q23_1);
            this.pd_1 = 1;
            suspendResult = this.p23_1.r21_1.f1n(this.q23_1, this.q23_1.u23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$0.$metadata$ = classMeta('$executeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClient(engine, userConfig) {
    this.l21_1 = engine;
    this.m21_1 = userConfig;
    this.n21_1 = false;
    this.o21_1 = atomic$boolean$1(false);
    this.p21_1 = Job(this.l21_1.qk().b3(Key_getInstance()));
    this.q21_1 = this.l21_1.qk().i3(this.p21_1);
    this.r21_1 = new HttpRequestPipeline(this.m21_1.e24_1);
    this.s21_1 = new HttpResponsePipeline(this.m21_1.e24_1);
    this.t21_1 = new HttpSendPipeline(this.m21_1.e24_1);
    this.u21_1 = new HttpReceivePipeline(this.m21_1.e24_1);
    this.v21_1 = Attributes(true);
    this.w21_1 = this.l21_1.f24();
    this.x21_1 = new Events();
    this.y21_1 = new HttpClientConfig();
    if (this.n21_1) {
      this.p21_1.rl(HttpClient$lambda(this));
    }
    this.l21_1.g24(this);
    var tmp = Phases_getInstance_0().l24_1;
    this.t21_1.k1n(tmp, HttpClient$slambda_0(this, null));
    var tmp$ret$0;
    {
      var tmp0_with = this.m21_1;
      {
      }
      var tmp_0 = Plugin_getInstance_2();
      this.y21_1.m24(tmp_0, null, 2, null);
      var tmp_1 = Plugin_getInstance();
      this.y21_1.m24(tmp_1, null, 2, null);
      if (tmp0_with.c24_1) {
        this.y21_1.n24('DefaultTransformers', HttpClient$lambda_0());
      }
      var tmp_2 = Plugin_getInstance_3();
      this.y21_1.m24(tmp_2, null, 2, null);
      var tmp_3 = Companion_getInstance_9();
      this.y21_1.m24(tmp_3, null, 2, null);
      if (tmp0_with.b24_1) {
        var tmp_4 = Plugin_getInstance_1();
        this.y21_1.m24(tmp_4, null, 2, null);
      }
      var tmp0_this = this;
      tmp0_this.y21_1.o24(tmp0_with);
      if (tmp0_with.c24_1) {
        var tmp_5 = Plugin_getInstance_0();
        this.y21_1.m24(tmp_5, null, 2, null);
      }
      addDefaultResponseValidation(this.y21_1);
      tmp$ret$0 = this.y21_1.g24(this);
    }
    var tmp_6 = Phases_getInstance_1().p24_1;
    this.s21_1.k1n(tmp_6, HttpClient$slambda_2(this, null));
  }
  HttpClient.prototype.qk = function () {
    return this.q21_1;
  };
  HttpClient.prototype.u24 = function (builder, $cont) {
    var tmp = new $executeCOROUTINE$0(this, builder, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpClient.prototype.i10 = function () {
    var success = this.o21_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.v21_1.y1i(get_PLUGIN_INSTALLED_LIST());
    {
      var tmp0_forEach = installedFeatures.e1j();
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        {
          var plugin = installedFeatures.y1i(element instanceof AttributeKey ? element : THROW_CCE());
          if (isInterface(plugin, Closeable)) {
            plugin.i10();
          }
        }
      }
    }
    this.p21_1.kq();
    if (this.n21_1) {
      this.l21_1.i10();
    }
  };
  HttpClient.prototype.toString = function () {
    return 'HttpClient[' + this.l21_1 + ']';
  };
  HttpClient.$metadata$ = classMeta('HttpClient', [CoroutineScope, Closeable]);
  function HttpClient_0(engineFactory, block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new HttpClientConfig();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    var engine = engineFactory.v24(config.a24_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp = ensureNotNull(client.q21_1.b3(Key_getInstance()));
    tmp.rl(HttpClient$lambda_1(engine));
    return client;
  }
  function HttpClient$lambda_1($engine) {
    return function (it) {
      $engine.i10();
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$engineConfig$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(isObject($this$null) ? $this$null : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return function () {
      return Attributes(true);
    };
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.v21_1.d1j(tmp, HttpClientConfig$install$lambda$lambda());
      var config = ensureNotNull(scope.y21_1.y23_1.b2($plugin.r()));
      var pluginData = $plugin.w24(config);
      $plugin.x24(pluginData, scope);
      attributes.b1j($plugin.r(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
    }
    tmp.x23_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    {
      tmp$ret$1 = LinkedHashMap_init_$Create$();
    }
    tmp_0.y23_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    {
      tmp$ret$2 = LinkedHashMap_init_$Create$();
    }
    tmp_1.z23_1 = tmp$ret$2;
    var tmp_2 = this;
    tmp_2.a24_1 = HttpClientConfig$engineConfig$lambda();
    this.b24_1 = true;
    this.c24_1 = true;
    this.d24_1 = false;
    this.e24_1 = PlatformUtils_getInstance().g1o_1;
  }
  HttpClientConfig.prototype.y24 = function (plugin, configure) {
    var previousConfigBlock = this.y23_1.b2(plugin.r());
    {
      var tmp0_set = this.y23_1;
      var tmp1_set = plugin.r();
      tmp0_set.a(tmp1_set, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    }
    if (this.x23_1.x1(plugin.r()))
      return Unit_getInstance();
    {
      var tmp2_set = this.x23_1;
      var tmp3_set = plugin.r();
      tmp2_set.a(tmp3_set, HttpClientConfig$install$lambda_1(plugin));
    }
  };
  HttpClientConfig.prototype.m24 = function (plugin, configure, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      configure = HttpClientConfig$install$lambda();
    }
    return this.y24(plugin, configure);
  };
  HttpClientConfig.prototype.n24 = function (key, block) {
    {
      var tmp0_set = this.z23_1;
      tmp0_set.a(key, block);
    }
  };
  HttpClientConfig.prototype.g24 = function (client) {
    {
      var tmp0_forEach = this.x23_1.a8();
      var tmp0_iterator = tmp0_forEach.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        {
          var tmp$ret$0;
          {
            {
            }
            element(client);
            tmp$ret$0 = client;
          }
        }
      }
    }
    {
      var tmp1_forEach = this.z23_1.a8();
      var tmp0_iterator_0 = tmp1_forEach.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        {
          var tmp$ret$1;
          {
            {
            }
            element_0(client);
            tmp$ret$1 = client;
          }
        }
      }
    }
  };
  HttpClientConfig.prototype.o24 = function (other) {
    this.b24_1 = other.b24_1;
    this.c24_1 = other.c24_1;
    this.d24_1 = other.d24_1;
    var tmp0_this = this;
    {
      var tmp0_plusAssign = tmp0_this.x23_1;
      var tmp1_plusAssign = other.x23_1;
      tmp0_plusAssign.m2(tmp1_plusAssign);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.y23_1;
      var tmp3_plusAssign = other.y23_1;
      tmp2_plusAssign.m2(tmp3_plusAssign);
    }
    var tmp2_this = this;
    {
      var tmp4_plusAssign = tmp2_this.z23_1;
      var tmp5_plusAssign = other.z23_1;
      tmp4_plusAssign.m2(tmp5_plusAssign);
    }
  };
  HttpClientConfig.$metadata$ = classMeta('HttpClientConfig');
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.p22_1 = new DefaultHttpRequest($this, requestData);
    $this.q22_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.d25_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.cf().b1j(Companion_getInstance_7().g25_1, responseData.d25_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, Object.create(HttpClientCall.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.g25_1 = new AttributeKey('CustomResponse');
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p25_1 = _this__u8e3s4;
    this.q25_1 = info;
  }
  $bodyNullableCOROUTINE$1.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 10;
            this.pd_1 = 1;
            continue $sm;
          case 1:
            this.pd_1 = 2;
            continue $sm;
          case 2:
            this.qd_1 = 9;
            this.qd_1 = 8;
            if (instanceOf(this.p25_1.s22(), this.q25_1.y1n_1)) {
              this.r25_1 = this.p25_1.s22();
              this.qd_1 = 10;
              this.pd_1 = 7;
              continue $sm;
            } else {
              this.pd_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            if (!this.p25_1.w25() ? !this.p25_1.o22_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.p25_1);
            }

            this.s25_1 = this.p25_1.cf().z1i(Companion_getInstance_7().g25_1);
            if (this.s25_1 == null) {
              this.pd_1 = 4;
              suspendResult = this.p25_1.x25(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.t25_1 = this.s25_1;
              this.pd_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.t25_1 = suspendResult;
            this.pd_1 = 5;
            continue $sm;
          case 5:
            this.u25_1 = this.t25_1;
            this.v25_1 = new HttpResponseContainer(this.q25_1, this.u25_1);
            this.pd_1 = 6;
            suspendResult = this.p25_1.n22_1.s21_1.f1n(this.p25_1, this.v25_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var tmp0_takeIf = ARGUMENT.z25_1;
            var tmp_0;
            if (!equals(tmp0_takeIf, NullBody_getInstance())) {
              tmp_0 = tmp0_takeIf;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.q25_1.y1n_1) : false) {
              var from = getKClassFromExpression(result);
              var to = this.q25_1.y1n_1;
              throw new NoTransformationFoundException(this.p25_1.s22(), from, to);
            }

            this.r25_1 = result;
            this.qd_1 = 10;
            this.pd_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.r25_1;
            complete(this.p25_1.s22());
            return tmp_2;
          case 8:
            this.qd_1 = 9;
            var tmp_3 = this.sd_1;
            if (tmp_3 instanceof Error) {
              var cause = this.sd_1;
              var tmp_4 = this;
              cancel(this.p25_1.s22(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.sd_1;
            }

            break;
          case 9:
            this.qd_1 = 10;
            var t = this.sd_1;
            complete(this.p25_1.s22());
            throw t;
          case 10:
            throw this.sd_1;
          case 11:
            complete(this.p25_1.s22());
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.qd_1 === 10) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $bodyNullableCOROUTINE$1.$metadata$ = classMeta('$bodyNullableCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.n22_1 = client;
    this.o22_1 = atomic$boolean$1(false);
    this.r22_1 = false;
  }
  HttpClientCall.prototype.qk = function () {
    return this.s22().qk();
  };
  HttpClientCall.prototype.cf = function () {
    return this.a26().cf();
  };
  HttpClientCall.prototype.b26 = function (_set____db54di) {
    this.p22_1 = _set____db54di;
  };
  HttpClientCall.prototype.a26 = function () {
    var tmp = this.p22_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  HttpClientCall.prototype.c26 = function (_set____db54di) {
    this.q22_1 = _set____db54di;
  };
  HttpClientCall.prototype.s22 = function () {
    var tmp = this.q22_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  HttpClientCall.prototype.w25 = function () {
    return this.r22_1;
  };
  HttpClientCall.prototype.x25 = function ($cont) {
    return this.s22().f1q();
  };
  HttpClientCall.prototype.d26 = function (info, $cont) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.a26().e26() + ', ' + this.s22().f26() + ']';
  };
  HttpClientCall.prototype.t22 = function (response) {
    this.q22_1 = response;
  };
  HttpClientCall.$metadata$ = classMeta('HttpClientCall', [CoroutineScope]);
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    this.g26_1 = 'Response already received: ' + call;
    captureStack(this, DoubleReceiveException);
  }
  DoubleReceiveException.prototype.f1 = function () {
    return this.g26_1;
  };
  DoubleReceiveException.$metadata$ = classMeta('DoubleReceiveException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f1();
    }
  });
  function NoTransformationFoundException$message$lambda() {
    return function (_name_for_destructuring_parameter_0__wldtmu) {
      var key = _name_for_destructuring_parameter_0__wldtmu.s4();
      var value = _name_for_destructuring_parameter_0__wldtmu.t4();
      return key + ': ' + value + '\n';
    };
  }
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    var tmp = this;
    var tmp_0 = get_request(response).e26();
    var tmp_1 = response.f26();
    var tmp_2 = flattenEntries(response.p1u());
    var tmp_3 = 'No transformation found: ' + from + ' -> ' + to + '\n        |with response from ' + tmp_0 + ':\n        |status: ' + tmp_1 + '\n        |response headers: \n        |' + joinToString$default(tmp_2, null, null, null, 0, null, NoTransformationFoundException$message$lambda(), 31, null) + '\n    ';
    tmp.h26_1 = trimMargin$default(tmp_3, null, 1, null);
    captureStack(this, NoTransformationFoundException);
  }
  NoTransformationFoundException.prototype.f1 = function () {
    return this.h26_1;
  };
  NoTransformationFoundException.$metadata$ = classMeta('NoTransformationFoundException', undefined, undefined, undefined, undefined, UnsupportedOperationException.prototype);
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f1();
    }
  });
  function save(_this__u8e3s4, $cont) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.w26_1 = responseBody;
    this.b26(new SavedHttpRequest(this, request));
    this.c26(new SavedHttpResponse(this, this.w26_1, response));
    this.x26_1 = true;
  }
  SavedHttpCall.prototype.x25 = function ($cont) {
    return ByteReadChannel_0(this.w26_1);
  };
  SavedHttpCall.prototype.w25 = function () {
    return this.x26_1;
  };
  SavedHttpCall.$metadata$ = classMeta('SavedHttpCall', undefined, undefined, undefined, undefined, HttpClientCall.prototype);
  function SavedHttpRequest(call, origin) {
    this.y26_1 = call;
    this.z26_1 = origin;
  }
  SavedHttpRequest.prototype.a27 = function () {
    return this.y26_1;
  };
  SavedHttpRequest.prototype.cf = function () {
    return this.z26_1.cf();
  };
  SavedHttpRequest.prototype.qk = function () {
    return this.z26_1.qk();
  };
  SavedHttpRequest.prototype.p1u = function () {
    return this.z26_1.p1u();
  };
  SavedHttpRequest.prototype.b27 = function () {
    return this.z26_1.b27();
  };
  SavedHttpRequest.prototype.e26 = function () {
    return this.z26_1.e26();
  };
  SavedHttpRequest.$metadata$ = classMeta('SavedHttpRequest', [HttpRequest_0]);
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.c27_1 = call;
    var tmp = this;
    tmp.d27_1 = Job$default(null, 1, null);
    this.e27_1 = origin.f26();
    this.f27_1 = origin.l27();
    this.g27_1 = origin.m27();
    this.h27_1 = origin.n27();
    this.i27_1 = origin.p1u();
    this.j27_1 = origin.qk().i3(this.d27_1);
    this.k27_1 = ByteReadChannel_0(body);
  }
  SavedHttpResponse.prototype.a27 = function () {
    return this.c27_1;
  };
  SavedHttpResponse.prototype.f26 = function () {
    return this.e27_1;
  };
  SavedHttpResponse.prototype.l27 = function () {
    return this.f27_1;
  };
  SavedHttpResponse.prototype.m27 = function () {
    return this.g27_1;
  };
  SavedHttpResponse.prototype.n27 = function () {
    return this.h27_1;
  };
  SavedHttpResponse.prototype.p1u = function () {
    return this.i27_1;
  };
  SavedHttpResponse.prototype.qk = function () {
    return this.j27_1;
  };
  SavedHttpResponse.prototype.f1q = function () {
    return this.k27_1;
  };
  SavedHttpResponse.$metadata$ = classMeta('SavedHttpResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q26_1 = _this__u8e3s4;
  }
  $saveCOROUTINE$3.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.pd_1 = 1;
            var tmp_0 = this.q26_1.s22().f1q();
            suspendResult = tmp_0.q19(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes$default(ARGUMENT, 0, 1, null);
            return new SavedHttpCall(this.q26_1.n22_1, this.q26_1.a26(), this.q26_1.s22(), responseBody);
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $saveCOROUTINE$3.$metadata$ = classMeta('$saveCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  UnsupportedContentTypeException.$metadata$ = classMeta('UnsupportedContentTypeException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.w27_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ObservableContent$content$slambda.prototype.y27 = function ($this$writer, $cont) {
    var tmp = this.z27($this$writer, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  ObservableContent$content$slambda.prototype.ae = function (p1, $cont) {
    return this.y27((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ObservableContent$content$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.pd_1 = 1;
            suspendResult = this.w27_1.x1z(this.x27_1.rw(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  ObservableContent$content$slambda.prototype.z27 = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.w27_1, completion);
    i.x27_1 = $this$writer;
    return i;
  };
  ObservableContent$content$slambda.$metadata$ = classMeta('ObservableContent$content$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.y27($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.b28_1 = callContext;
    this.c28_1 = listener;
    var tmp = this;
    var tmp0_subject = delegate;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.z1z());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().n1b();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = delegate.v1z();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.b28_1, true, ObservableContent$content$slambda_0(delegate, null)).rw();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.d28_1 = tmp_0;
    this.e28_1 = delegate;
  }
  ObservableContent.prototype.s1z = function () {
    return this.e28_1.s1z();
  };
  ObservableContent.prototype.t1z = function () {
    return this.e28_1.t1z();
  };
  ObservableContent.prototype.p1u = function () {
    return this.e28_1.p1u();
  };
  ObservableContent.prototype.v1z = function () {
    return observable(this.d28_1, this.b28_1, this.t1z(), this.c28_1);
  };
  ObservableContent.$metadata$ = classMeta('ObservableContent', undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function get_CALL_COROUTINE() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        tmp = $client.x21_1.l20(get_HttpResponseCancelled(), $response);
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.qk().b3(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rk();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $cont) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.x28_1.d();
    while (tmp0_iterator.e()) {
      var requestedExtension = tmp0_iterator.f();
      {
        var tmp0_require = $this.y28().h1(requestedExtension);
        {
        }
        if (!tmp0_require) {
          var tmp$ret$0;
          {
            tmp$ret$0 = "Engine doesn't support " + requestedExtension;
          }
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.h29_1 = $client;
    this.i29_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$install$slambda.prototype.l22 = function ($this$intercept, content, $cont) {
    var tmp = this.m22($this$intercept, content, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpClientEngine$install$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClientEngine$install$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.l29_1 = new HttpRequestBuilder();
            this.l29_1.s29(this.j29_1.g1n_1);
            ;
            var tmp0_subject = this.k29_1;
            if (tmp0_subject == null) {
              this.l29_1.u23_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = PrimitiveClasses_getInstance().hb();
              var tmp_4;
              try {
                tmp_4 = createKType(PrimitiveClasses_getInstance().hb(), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              this.l29_1.t29(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                this.l29_1.u23_1 = this.k29_1;
                this.l29_1.t29(null);
              } else {
                this.l29_1.u23_1 = this.k29_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = PrimitiveClasses_getInstance().hb();
                var tmp_8;
                try {
                  tmp_8 = createKType(PrimitiveClasses_getInstance().hb(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                this.l29_1.t29(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_0.m29_1 = this.l29_1;
            this.h29_1.x21_1.l20(get_HttpRequestIsReadyForSending(), this.m29_1);
            var tmp_10 = this;
            var tmp_11 = this;
            tmp_11.n29_1 = this.m29_1.l17();
            this.n29_1.w28_1.b1j(get_CLIENT_CONFIG(), this.h29_1.y21_1);
            tmp_10.o29_1 = this.n29_1;
            validateHeaders(this.o29_1);
            checkExtensions(this.i29_1, this.o29_1);
            this.pd_1 = 1;
            suspendResult = executeWithinCallContext(this.i29_1, this.o29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p29_1 = suspendResult;
            this.q29_1 = HttpClientCall_init_$Create$(this.h29_1, this.o29_1, this.p29_1);
            this.r29_1 = this.q29_1.s22();
            this.h29_1.x21_1.l20(get_HttpResponseReceived(), this.r29_1);
            var tmp_12 = get_job(this.r29_1.qk());
            tmp_12.rl(HttpClientEngine$install$slambda$lambda(this.h29_1, this.r29_1));
            ;
            this.pd_1 = 2;
            suspendResult = this.j29_1.k1m(this.q29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpClientEngine$install$slambda.prototype.m22 = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.h29_1, this.i29_1, completion);
    i.j29_1 = $this$intercept;
    i.k29_1 = content;
    return i;
  };
  HttpClientEngine$install$slambda.$metadata$ = classMeta('HttpClientEngine$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.l22($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.c2a_1 = this$0;
    this.d2a_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$executeWithinCallContext$slambda.prototype.f2a = function ($this$async, $cont) {
    var tmp = this.r1a($this$async, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.ae = function (p1, $cont) {
    return this.f2a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            if (_get_closed__iwkfs1(this.c2a_1)) {
              throw ClientEngineClosedException_init_$Create$(null, 1, null);
            }

            this.pd_1 = 1;
            suspendResult = this.c2a_1.g2a(this.d2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.r1a = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.c2a_1, this.d2a_1, completion);
    i.e2a_1 = $this$async;
    return i;
  };
  HttpClientEngine$executeWithinCallContext$slambda.$metadata$ = classMeta('HttpClientEngine$executeWithinCallContext$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.f2a($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n28_1 = _this__u8e3s4;
    this.o28_1 = requestData;
  }
  $executeWithinCallContextCOROUTINE$4.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            this.pd_1 = 1;
            suspendResult = createCallContext(this.n28_1, this.o28_1.v28_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p28_1 = suspendResult;
            this.q28_1 = this.p28_1.i3(new KtorCallContextElement(this.p28_1));
            this.pd_1 = 2;
            suspendResult = async$default(this.n28_1, this.q28_1, null, HttpClientEngine$executeWithinCallContext$slambda_0(this.n28_1, this.o28_1, null), 2, null).fn(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $executeWithinCallContextCOROUTINE$4.$metadata$ = classMeta('$executeWithinCallContextCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientEngine() {
  }
  HttpClientEngine.$metadata$ = interfaceMeta('HttpClientEngine', [CoroutineScope, Closeable]);
  function validateHeaders(request) {
    init_properties_HttpClientEngine_kt_umcrvf();
    var requestHeaders = request.t28_1;
    var tmp$ret$2;
    {
      var tmp0_filter = requestHeaders.l1k();
      var tmp$ret$1;
      {
        var tmp0_filterTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filter.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          var tmp$ret$0;
          {
            tmp$ret$0 = HttpHeaders_getInstance().g1u_1.h1(element);
          }
          if (tmp$ret$0) {
            tmp0_filterTo.b(element);
          }
        }
        tmp$ret$1 = tmp0_filterTo;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    var unsafeRequestHeaders = tmp$ret$2;
    var tmp$ret$3;
    {
      tmp$ret$3 = !unsafeRequestHeaders.m();
    }
    if (tmp$ret$3) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $cont) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.qk().i3(callJob).i3(get_CALL_COROUTINE());
    var tmp$ret$1;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = $cont.x2();
      }
      var tmp0_elvis_lhs = tmp$ret$0.b3(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.tl(true, false, createCallContext$lambda(callJob), 2, null);
      callJob.rl(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function HttpClientEngineFactory() {
  }
  HttpClientEngineFactory.$metadata$ = interfaceMeta('HttpClientEngineFactory');
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.wl(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.vn();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function init_properties_HttpClientEngine_kt_umcrvf() {
    if (properties_initialized_HttpClientEngine_kt_5uiebb) {
    } else {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    ClientEngineClosedException.call($this, cause);
    return $this;
  }
  function ClientEngineClosedException_init_$Create$(cause, $mask0, $marker) {
    var tmp = ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, Object.create(ClientEngineClosedException.prototype));
    captureStack(tmp, ClientEngineClosedException_init_$Create$);
    return tmp;
  }
  function ClientEngineClosedException(cause) {
    IllegalStateException_init_$Init$_0('Client already closed', this);
    this.h2a_1 = cause;
    captureStack(this, ClientEngineClosedException);
  }
  ClientEngineClosedException.prototype.g1 = function () {
    return this.h2a_1;
  };
  ClientEngineClosedException.$metadata$ = classMeta('ClientEngineClosedException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.g1();
    }
  });
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor$default(null, 1, null).i3(this$0.i2a()).i3(new CoroutineName(this$0.j2a_1 + '-context'));
    };
  }
  function HttpClientEngineBase$close$lambda(this$0) {
    return function (it) {
      close(this$0.i2a());
      return Unit_getInstance();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.j2a_1 = engineName;
    this.k2a_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.l2a_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  HttpClientEngineBase.prototype.qk = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = coroutineContext$factory();
      tmp$ret$0 = this.l2a_1.s();
    }
    return tmp$ret$0;
  };
  HttpClientEngineBase.prototype.i10 = function () {
    if (!this.k2a_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.qk().b3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.kq();
    requestJob.rl(HttpClientEngineBase$close$lambda(this));
  };
  HttpClientEngineBase.$metadata$ = classMeta('HttpClientEngineBase', [HttpClientEngine]);
  function close(_this__u8e3s4) {
    try {
      var tmp0_subject = _this__u8e3s4;
      if (tmp0_subject instanceof CloseableCoroutineDispatcher)
        _this__u8e3s4.i10();
      else {
        if (isInterface(tmp0_subject, Closeable))
          _this__u8e3s4.i10();
      }
    } catch ($p) {
      if ($p instanceof Error) {
      } else {
        throw $p;
      }
    }
  }
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.qk();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  HttpClientEngineCapability.$metadata$ = interfaceMeta('HttpClientEngineCapability');
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function init_properties_HttpClientEngineCapability_kt_68uqzx() {
    if (properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
    } else {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_4());
    }
  }
  function HttpClientEngineConfig() {
    this.m2a_1 = 4;
    this.n2a_1 = false;
    this.o2a_1 = null;
  }
  HttpClientEngineConfig.$metadata$ = classMeta('HttpClientEngineConfig');
  var KTOR_DEFAULT_USER_AGENT;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion', [Key]);
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KtorCallContextElement(callContext) {
    Companion_getInstance_8();
    this.p2a_1 = callContext;
  }
  KtorCallContextElement.prototype.r = function () {
    return Companion_getInstance_8();
  };
  KtorCallContextElement.$metadata$ = classMeta('KtorCallContextElement', [Element]);
  function callContext($cont) {
    var tmp$ret$0;
    {
      tmp$ret$0 = $cont.x2();
    }
    return ensureNotNull(tmp$ret$0.b3(Companion_getInstance_8())).p2a_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.n1k(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.qf(HttpHeaders_getInstance().j1t_1) == null ? content.p1u().qf(HttpHeaders_getInstance().j1t_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().j1t_1, KTOR_DEFAULT_USER_AGENT);
    }
    var tmp0_safe_receiver = content.s1z();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var type = tmp1_elvis_lhs == null ? content.p1u().qf(HttpHeaders_getInstance().d1r_1) : tmp1_elvis_lhs;
    var tmp2_safe_receiver = content.t1z();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString();
    var length = tmp3_elvis_lhs == null ? content.p1u().qf(HttpHeaders_getInstance().a1r_1) : tmp3_elvis_lhs;
    var tmp4_safe_receiver = type;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = block(HttpHeaders_getInstance().d1r_1, tmp4_safe_receiver);
      }
    }
    var tmp5_safe_receiver = length;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = block(HttpHeaders_getInstance().a1r_1, tmp5_safe_receiver);
      }
    }
  }
  function needUserAgent() {
    return !PlatformUtils_getInstance().c1o_1;
  }
  function attachToUserJob$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.wl(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function attachToUserJob$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.vn();
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.v1k($requestHeaders);
      $this$buildHeaders.v1k($content.p1u());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().a1r_1 === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().d1r_1 === key) {
        return Unit_getInstance();
      }
      $block(key, joinToString$default(values, ',', null, null, 0, null, null, 62, null));
      return Unit_getInstance();
    };
  }
  function get_UploadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.r21_1.h1n(Phases_getInstance().t2a_1, observableContentPhase);
    scope.r21_1.k1n(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().x2a_1;
    scope.u21_1.k1n(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.y2a_1 = new AttributeKey('BodyProgress');
  }
  Plugin.prototype.r = function () {
    return this.y2a_1;
  };
  Plugin.prototype.z2a = function (block) {
    return new BodyProgress();
  };
  Plugin.prototype.w24 = function (block) {
    return this.z2a(block);
  };
  Plugin.prototype.a2b = function (plugin, scope) {
    handle(plugin, scope);
  };
  Plugin.prototype.x24 = function (plugin, scope) {
    return this.a2b(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  Plugin.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda.prototype.l22 = function ($this$intercept, content, $cont) {
    var tmp = this.m22($this$intercept, content, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  BodyProgress$handle$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.j2b_1.g1n_1.w23_1.z1i(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.l2b_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.k2b_1;
            tmp_2.m2b_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.j2b_1.g1n_1.v23_1, this.l2b_1);
            this.pd_1 = 1;
            suspendResult = this.j2b_1.k1m(this.m2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  BodyProgress$handle$slambda.prototype.m22 = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.j2b_1 = $this$intercept;
    i.k2b_1 = content;
    return i;
  };
  BodyProgress$handle$slambda.$metadata$ = classMeta('BodyProgress$handle$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.l22($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda_1.prototype.z2b = function ($this$intercept, response, $cont) {
    var tmp = this.a2c($this$intercept, response, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  BodyProgress$handle$slambda_1.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.z2b(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda_1.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.w2b_1.a27().a26().cf().z1i(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.x2b_1 = tmp_1;
            this.y2b_1 = withObservableDownload(this.w2b_1, this.x2b_1);
            this.pd_1 = 1;
            suspendResult = this.v2b_1.k1m(this.y2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  BodyProgress$handle$slambda_1.prototype.a2c = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.v2b_1 = $this$intercept;
    i.w2b_1 = response;
    return i;
  };
  BodyProgress$handle$slambda_1.$metadata$ = classMeta('BodyProgress$handle$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.z2b($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  BodyProgress.$metadata$ = classMeta('BodyProgress');
  function withObservableDownload(_this__u8e3s4, listener) {
    init_properties_BodyProgress_kt_2jnetn();
    var observableByteChannel = observable(_this__u8e3s4.f1q(), _this__u8e3s4.qk(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4, observableByteChannel);
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function init_properties_BodyProgress_kt_2jnetn() {
    if (properties_initialized_BodyProgress_kt_pmfrhr) {
    } else {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_ValidateMark() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return ValidateMark;
  }
  var ValidateMark;
  function addDefaultResponseValidation(_this__u8e3s4) {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.c2c_1 = 'Unhandled redirect: ' + response.a27().a26().b27().y1u_1 + ' ' + response.a27().a26().e26() + '. ' + ('Status: ' + response.f26() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, RedirectResponseException);
  }
  RedirectResponseException.prototype.f1 = function () {
    return this.c2c_1;
  };
  RedirectResponseException.$metadata$ = classMeta('RedirectResponseException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f1();
    }
  });
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.e2c_1 = 'Client request(' + response.a27().a26().b27().y1u_1 + ' ' + response.a27().a26().e26() + ') ' + ('invalid: ' + response.f26() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ClientRequestException);
  }
  ClientRequestException.prototype.f1 = function () {
    return this.e2c_1;
  };
  ClientRequestException.$metadata$ = classMeta('ClientRequestException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f1();
    }
  });
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.g2c_1 = 'Server error(' + response.a27().a26().b27().y1u_1 + ' ' + response.a27().a26().e26() + ': ' + ('' + response.f26() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ServerResponseException);
  }
  ServerResponseException.prototype.f1 = function () {
    return this.g2c_1;
  };
  ServerResponseException.$metadata$ = classMeta('ServerResponseException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f1();
    }
  });
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    this.h2c_1 = response;
    captureStack(this, ResponseException);
  }
  ResponseException.$metadata$ = classMeta('ResponseException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  addDefaultResponseValidation$lambda$slambda.prototype.x2c = function (response, $cont) {
    var tmp = this.y2c(response, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  addDefaultResponseValidation$lambda$slambda.prototype.ae = function (p1, $cont) {
    return this.x2c(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            this.r2c_1 = this.q2c_1.a27().cf().y1i(get_ExpectSuccessAttributeKey());
            if (!this.r2c_1) {
              return Unit_getInstance();
            }

            this.s2c_1 = this.q2c_1.f26().j1x_1;
            this.t2c_1 = this.q2c_1.a27();
            if (this.s2c_1 < 300 ? true : this.t2c_1.cf().a1j(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.pd_1 = 1;
            suspendResult = save(this.t2c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u2c_1 = suspendResult;
            this.u2c_1.cf().b1j(get_ValidateMark(), Unit_getInstance());
            this.v2c_1 = this.u2c_1;
            this.w2c_1 = this.v2c_1.s22();
            this.pd_1 = 2;
            suspendResult = bodyAsText$default(this.w2c_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var exceptionResponseText = suspendResult;
            var tmp0_subject = this.s2c_1;
            if (300 <= tmp0_subject ? tmp0_subject <= 399 : false)
              throw new RedirectResponseException(this.w2c_1, exceptionResponseText);
            else if (400 <= tmp0_subject ? tmp0_subject <= 499 : false)
              throw new ClientRequestException(this.w2c_1, exceptionResponseText);
            else if (500 <= tmp0_subject ? tmp0_subject <= 599 : false)
              throw new ServerResponseException(this.w2c_1, exceptionResponseText);
            else
              throw new ResponseException(this.w2c_1, exceptionResponseText);
            return Unit_getInstance();
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.y2c = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.q2c_1 = response;
    return i;
  };
  addDefaultResponseValidation$lambda$slambda.$metadata$ = classMeta('addDefaultResponseValidation$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.x2c(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.b2d_1 = $this_addDefaultResponseValidation.d24_1;
      $this$HttpResponseValidator.c2d(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function init_properties_DefaultResponseValidation_kt_dx65ax() {
    if (properties_initialized_DefaultResponseValidation_kt_akvzqt) {
    } else {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
    }
  }
  function defaultTransformers(_this__u8e3s4) {
    var tmp = Phases_getInstance().t2a_1;
    _this__u8e3s4.r21_1.k1n(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().q24_1;
    _this__u8e3s4.s21_1.k1n(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.g2d_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    var tmp0_elvis_lhs = $contentType;
    tmp.e2d_1 = tmp0_elvis_lhs == null ? Application_getInstance().b1p_1 : tmp0_elvis_lhs;
    this.f2d_1 = toLong($body.length);
  }
  defaultTransformers$1$content$1.prototype.s1z = function () {
    return this.e2d_1;
  };
  defaultTransformers$1$content$1.prototype.t1z = function () {
    return this.f2d_1;
  };
  defaultTransformers$1$content$1.prototype.z1z = function () {
    return this.g2d_1;
  };
  defaultTransformers$1$content$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, ByteArrayContent.prototype);
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.k2d_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.g1n_1.t23_1.qf(HttpHeaders_getInstance().a1r_1);
    tmp.i2d_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_elvis_lhs = $contentType;
    tmp_0.j2d_1 = tmp0_elvis_lhs == null ? Application_getInstance().b1p_1 : tmp0_elvis_lhs;
  }
  defaultTransformers$1$content$2.prototype.t1z = function () {
    return this.i2d_1;
  };
  defaultTransformers$1$content$2.prototype.s1z = function () {
    return this.j2d_1;
  };
  defaultTransformers$1$content$2.prototype.v1z = function () {
    return this.k2d_1;
  };
  defaultTransformers$1$content$2.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda.prototype.l22 = function ($this$intercept, body, $cont) {
    var tmp = this.m22($this$intercept, body, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  defaultTransformers$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            if (this.t2d_1.g1n_1.t23_1.qf(HttpHeaders_getInstance().l1q_1) == null) {
              this.t2d_1.g1n_1.t23_1.u1k(HttpHeaders_getInstance().l1q_1, '*/*');
            }

            this.v2d_1 = contentType(this.t2d_1.g1n_1);
            var tmp_0 = this;
            var tmp0_subject = this.u2d_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.v2d_1;
              var tmp_2 = tmp1_elvis_lhs == null ? Text_getInstance().s1p_1 : tmp1_elvis_lhs;
              tmp_1 = TextContent_init_$Create$(this.u2d_1, tmp_2, null, 4, null);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.v2d_1, this.u2d_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.t2d_1, this.v2d_1, this.u2d_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.u2d_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.v2d_1, this.t2d_1.g1n_1, this.u2d_1);
                  }
                }
              }
            }

            tmp_0.w2d_1 = tmp_1;
            if (!(this.w2d_1 == null)) {
              this.t2d_1.g1n_1.t23_1.w1k(HttpHeaders_getInstance().d1r_1);
              this.pd_1 = 1;
              suspendResult = this.t2d_1.k1m(this.w2d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pd_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.pd_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda.prototype.m22 = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.t2d_1 = $this$intercept;
    i.u2d_1 = body;
    return i;
  };
  defaultTransformers$slambda.$metadata$ = classMeta('defaultTransformers$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $cont) {
      return i.l22($this$intercept, body, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.f2e_1 = $body;
    this.g2e_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda$slambda.prototype.y27 = function ($this$writer, $cont) {
    var tmp = this.z27($this$writer, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  defaultTransformers$slambda$slambda.prototype.ae = function (p1, $cont) {
    return this.y27((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 5;
            this.pd_1 = 1;
            continue $sm;
          case 1:
            this.qd_1 = 4;
            this.qd_1 = 3;
            this.pd_1 = 2;
            var tmp_0 = this.h2e_1.rw();
            Companion_getInstance_0();
            suspendResult = copyTo(this.f2e_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.i2e_1 = Unit_getInstance();
            this.qd_1 = 5;
            this.pd_1 = 6;
            continue $sm;
          case 3:
            this.qd_1 = 4;
            var tmp_2 = this.sd_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.sd_1;
              var tmp_3 = this;
              cancel_0(this.g2e_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.sd_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.sd_1;
                var tmp_5 = this;
                cancel(this.g2e_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.sd_1;
              }
            }

            break;
          case 4:
            this.qd_1 = 5;
            var t = this.sd_1;
            complete(this.g2e_1);
            throw t;
          case 5:
            throw this.sd_1;
          case 6:
            complete(this.g2e_1);
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.qd_1 === 5) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda$slambda.prototype.z27 = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.f2e_1, this.g2e_1, completion);
    i.h2e_1 = $this$writer;
    return i;
  };
  defaultTransformers$slambda$slambda.$metadata$ = classMeta('defaultTransformers$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.y27($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.kq();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda_1.prototype.f23 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.g23($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  defaultTransformers$slambda_1.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.f23(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda_1.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 11;
            this.t2e_1 = this.s2e_1.s4();
            this.u2e_1 = this.s2e_1.t4();
            var tmp_0 = this.u2e_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.v2e_1 = this.r2e_1.g1n_1.s22();
            this.w2e_1 = this.t2e_1.y1n_1;
            if (this.w2e_1.equals(getKClass(Unit))) {
              cancel_1(this.u2e_1);
              this.pd_1 = 9;
              suspendResult = this.r2e_1.k1m(new HttpResponseContainer(this.t2e_1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.w2e_1.equals(PrimitiveClasses_getInstance().nb())) {
                this.pd_1 = 7;
                suspendResult = this.u2e_1.q19(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.w2e_1.equals(getKClass(ByteReadPacket)) ? true : this.w2e_1.equals(getKClass(Input))) {
                  this.pd_1 = 5;
                  suspendResult = this.u2e_1.q19(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.w2e_1.equals(PrimitiveClasses_getInstance().vb())) {
                    this.pd_1 = 3;
                    suspendResult = toByteArray(this.u2e_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.w2e_1.equals(getKClass(ByteReadChannel))) {
                      this.x2e_1 = Job(this.v2e_1.qk().b3(Key_getInstance()));
                      var tmp_1 = this;
                      var tmp_2 = this;
                      var tmp_3 = this.v2e_1.qk();
                      tmp_2.y2e_1 = writer$default(this.r2e_1, tmp_3, false, defaultTransformers$slambda$slambda_0(this.u2e_1, this.v2e_1, null), 2, null);
                      this.y2e_1.rl(defaultTransformers$slambda$lambda(this.x2e_1));
                      tmp_1.z2e_1 = this.y2e_1.rw();
                      this.pd_1 = 2;
                      suspendResult = this.r2e_1.k1m(new HttpResponseContainer(this.t2e_1, this.z2e_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.w2e_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.u2e_1);
                        this.pd_1 = 1;
                        suspendResult = this.r2e_1.k1m(new HttpResponseContainer(this.t2e_1, this.v2e_1.f26()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.pd_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            ;
            this.pd_1 = 10;
            continue $sm;
          case 2:
            ;
            this.pd_1 = 10;
            continue $sm;
          case 3:
            this.a2f_1 = suspendResult;
            this.b2f_1 = contentLength(this.v2e_1);
            this.c2f_1 = this.v2e_1.p1u().qf(HttpHeaders_getInstance().y1q_1);
            if ((this.c2f_1 == null ? !(this.b2f_1 == null) : false) ? this.b2f_1.a1(new Long(0, 0)) > 0 : false) {
              var tmp0_check = this.a2f_1.length === this.b2f_1.md();
              if (!tmp0_check) {
                var message = 'Expected ' + toString_0(this.b2f_1) + ', actual ' + this.a2f_1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.pd_1 = 4;
            suspendResult = this.r2e_1.k1m(new HttpResponseContainer(this.t2e_1, this.a2f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            ;
            this.pd_1 = 10;
            continue $sm;
          case 5:
            this.d2f_1 = suspendResult;
            this.e2f_1 = new HttpResponseContainer(this.t2e_1, this.d2f_1);
            this.pd_1 = 6;
            suspendResult = this.r2e_1.k1m(this.e2f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            ;
            this.pd_1 = 10;
            continue $sm;
          case 7:
            this.f2f_1 = suspendResult;
            var tmp_4 = this;
            tmp_4.g2f_1 = this.f2f_1.n1e(0, 0, 3, null);
            this.h2f_1 = toInt(this.g2f_1);
            this.i2f_1 = new HttpResponseContainer(this.t2e_1, this.h2f_1);
            this.pd_1 = 8;
            suspendResult = this.r2e_1.k1m(this.i2f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            ;
            this.pd_1 = 10;
            continue $sm;
          case 9:
            ;
            this.pd_1 = 10;
            continue $sm;
          case 10:
            return Unit_getInstance();
          case 11:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 11) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda_1.prototype.g23 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.r2e_1 = $this$intercept;
    i.s2e_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  defaultTransformers$slambda_1.$metadata$ = classMeta('defaultTransformers$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.f23($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function get_ExpectSuccessAttributeKey() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.l2f_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.u2f_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda.prototype.l22 = function ($this$intercept, it, $cont) {
    var tmp = this.m22($this$intercept, it, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpCallValidator$Companion$install$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 5;
            this.qd_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.v2f_1.g1n_1.w23_1.d1j(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.u2f_1));
            ;
            this.pd_1 = 1;
            suspendResult = this.v2f_1.k1m(this.w2f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.qd_1 = 5;
            this.pd_1 = 2;
            continue $sm;
          case 2:
            this.qd_1 = 5;
            return Unit_getInstance();
          case 3:
            this.qd_1 = 5;
            var tmp_1 = this.sd_1;
            if (tmp_1 instanceof Error) {
              this.x2f_1 = this.sd_1;
              this.y2f_1 = unwrapCancellationException(this.x2f_1);
              this.pd_1 = 4;
              suspendResult = processException(this.u2f_1, this.y2f_1, HttpRequest(this.v2f_1.g1n_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.sd_1;
            }

            break;
          case 4:
            throw this.y2f_1;
          case 5:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 5) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda.prototype.m22 = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.u2f_1, completion);
    i.v2f_1 = $this$intercept;
    i.w2f_1 = it;
    return i;
  };
  HttpCallValidator$Companion$install$slambda.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.l22($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.h2g_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_1.prototype.f23 = function ($this$intercept, container, $cont) {
    var tmp = this.g23($this$intercept, container, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.f23(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 5;
            this.qd_1 = 3;
            this.pd_1 = 1;
            suspendResult = this.i2g_1.k1m(this.j2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.qd_1 = 5;
            this.pd_1 = 2;
            continue $sm;
          case 2:
            this.qd_1 = 5;
            return Unit_getInstance();
          case 3:
            this.qd_1 = 5;
            var tmp_0 = this.sd_1;
            if (tmp_0 instanceof Error) {
              this.k2g_1 = this.sd_1;
              this.l2g_1 = unwrapCancellationException(this.k2g_1);
              this.pd_1 = 4;
              suspendResult = processException(this.h2g_1, this.l2g_1, this.i2g_1.g1n_1.a26(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.sd_1;
            }

            break;
          case 4:
            throw this.l2g_1;
          case 5:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 5) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.g23 = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.h2g_1, completion);
    i.i2g_1 = $this$intercept;
    i.j2g_1 = container;
    return i;
  };
  HttpCallValidator$Companion$install$slambda_1.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $cont) {
      return i.f23($this$intercept, container, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.u2g_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_3.prototype.y2g = function ($this$intercept, request, $cont) {
    var tmp = this.z2g($this$intercept, request, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.xe = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.y2g(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            this.pd_1 = 1;
            suspendResult = this.v2g_1.u24(this.w2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x2g_1 = suspendResult;
            this.pd_1 = 2;
            suspendResult = validateResponse(this.u2g_1, this.x2g_1.s22(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.x2g_1;
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.z2g = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.u2g_1, completion);
    i.v2g_1 = $this$intercept;
    i.w2g_1 = request;
    return i;
  };
  HttpCallValidator$Companion$install$slambda_3.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.y2g($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $cont) {
    var tmp = new $validateResponseCOROUTINE$5($this, response, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  }
  function processException($this, cause, request, $cont) {
    var tmp = new $processExceptionCOROUTINE$6($this, cause, request, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    tmp.z2c_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    {
      tmp$ret$1 = ArrayList_init_$Create$();
    }
    tmp_0.a2d_1 = tmp$ret$1;
    this.b2d_1 = true;
  }
  Config.prototype.c2d = function (block) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign = tmp0_this.z2c_1;
      tmp0_plusAssign.b(block);
    }
  };
  Config.$metadata$ = classMeta('Config');
  function Companion_1() {
    Companion_instance_1 = this;
    this.c2i_1 = new AttributeKey('HttpResponseValidator');
  }
  Companion_1.prototype.r = function () {
    return this.c2i_1;
  };
  Companion_1.prototype.d2i = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    return new HttpCallValidator(reversed(config.z2c_1), reversed(config.a2d_1), config.b2d_1);
  };
  Companion_1.prototype.w24 = function (block) {
    return this.d2i(block);
  };
  Companion_1.prototype.e2i = function (plugin_0, scope) {
    var tmp = Phases_getInstance().q2a_1;
    scope.r21_1.k1n(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.s21_1.j1n(Phases_getInstance_1().p24_1, BeforeReceive);
    scope.s21_1.k1n(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_3());
    tmp_0.h2i(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  Companion_1.prototype.x24 = function (plugin, scope) {
    return this.e2i(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  Companion_1.$metadata$ = objectMeta('Companion', [HttpClientPlugin]);
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$5(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i2h_1 = _this__u8e3s4;
    this.j2h_1 = response;
  }
  $validateResponseCOROUTINE$5.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 4;
            var tmp_0 = this;
            tmp_0.k2h_1 = this.i2h_1.j2f_1;
            this.l2h_1 = this.k2h_1.d();
            this.pd_1 = 1;
            continue $sm;
          case 1:
            if (!this.l2h_1.e()) {
              this.pd_1 = 3;
              continue $sm;
            }

            this.m2h_1 = this.l2h_1.f();
            this.pd_1 = 2;
            suspendResult = this.m2h_1(this.j2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.pd_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 4) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $validateResponseCOROUTINE$5.$metadata$ = classMeta('$validateResponseCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $processExceptionCOROUTINE$6(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2h_1 = _this__u8e3s4;
    this.w2h_1 = cause;
    this.x2h_1 = request;
  }
  $processExceptionCOROUTINE$6.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 6;
            var tmp_0 = this;
            tmp_0.y2h_1 = this.v2h_1.k2f_1;
            this.z2h_1 = this.y2h_1.d();
            this.pd_1 = 1;
            continue $sm;
          case 1:
            if (!this.z2h_1.e()) {
              this.pd_1 = 5;
              continue $sm;
            }

            this.a2i_1 = this.z2h_1.f();
            this.b2i_1 = this.a2i_1;
            var tmp_1 = this.b2i_1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.pd_1 = 3;
              suspendResult = this.a2i_1.j2i_1(this.w2h_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.b2i_1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.pd_1 = 2;
                suspendResult = this.a2i_1.i2i_1(this.w2h_1, this.x2h_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.pd_1 = 4;
                continue $sm;
              }
            }

            break;
          case 2:
            this.pd_1 = 4;
            continue $sm;
          case 3:
            this.pd_1 = 4;
            continue $sm;
          case 4:
            this.pd_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 6) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $processExceptionCOROUTINE$6.$metadata$ = classMeta('$processExceptionCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_9();
    this.j2f_1 = responseValidators;
    this.k2f_1 = callExceptionHandlers;
    this.l2f_1 = expectSuccess;
  }
  HttpCallValidator.$metadata$ = classMeta('HttpCallValidator');
  function HandlerWrapper() {
  }
  HandlerWrapper.$metadata$ = interfaceMeta('HandlerWrapper');
  function ExceptionHandlerWrapper() {
  }
  ExceptionHandlerWrapper.$metadata$ = classMeta('ExceptionHandlerWrapper', [HandlerWrapper]);
  function RequestExceptionHandlerWrapper() {
  }
  RequestExceptionHandlerWrapper.$metadata$ = classMeta('RequestExceptionHandlerWrapper', [HandlerWrapper]);
  function HttpRequest(builder) {
    init_properties_HttpCallValidator_kt_nw40ag();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    init_properties_HttpCallValidator_kt_nw40ag();
    _this__u8e3s4.y24(Companion_getInstance_9(), block);
  }
  function HttpRequest$1($builder) {
    this.o2i_1 = $builder;
    this.k2i_1 = $builder.s23_1;
    this.l2i_1 = $builder.r23_1.l17();
    this.m2i_1 = $builder.w23_1;
    this.n2i_1 = $builder.t23_1.l17();
  }
  HttpRequest$1.prototype.a27 = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  HttpRequest$1.prototype.b27 = function () {
    return this.k2i_1;
  };
  HttpRequest$1.prototype.e26 = function () {
    return this.l2i_1;
  };
  HttpRequest$1.prototype.cf = function () {
    return this.m2i_1;
  };
  HttpRequest$1.prototype.p1u = function () {
    return this.n2i_1;
  };
  HttpRequest$1.$metadata$ = classMeta(undefined, [HttpRequest_0]);
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function init_properties_HttpCallValidator_kt_nw40ag() {
    if (properties_initialized_HttpCallValidator_kt_xrx49w) {
    } else {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    init_properties_HttpClientPlugin_kt_hdphw();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.r() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  HttpClientPlugin.$metadata$ = interfaceMeta('HttpClientPlugin');
  function pluginOrNull(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_safe_receiver = _this__u8e3s4.v21_1.z1i(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1i(plugin.r());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function init_properties_HttpClientPlugin_kt_hdphw() {
    if (properties_initialized_HttpClientPlugin_kt_p98320) {
    } else {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.x2i_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda.prototype.l22 = function ($this$intercept, content, $cont) {
    var tmp = this.m22($this$intercept, content, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpPlainText$Plugin$install$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.x2i_1.e2j(this.y2i_1.g1n_1);
            var tmp_0 = this.z2i_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.a2j_1 = contentType(this.y2i_1.g1n_1);
            if (!(this.a2j_1 == null) ? !(this.a2j_1.c1q_1 === Text_getInstance().s1p_1.c1q_1) : false) {
              return Unit_getInstance();
            }

            this.pd_1 = 1;
            suspendResult = this.y2i_1.k1m(wrapContent(this.x2i_1, this.z2i_1, this.a2j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpPlainText$Plugin$install$slambda.prototype.m22 = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.x2i_1, completion);
    i.y2i_1 = $this$intercept;
    i.z2i_1 = content;
    return i;
  };
  HttpPlainText$Plugin$install$slambda.$metadata$ = classMeta('HttpPlainText$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.l22($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.n2j_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda_1.prototype.f23 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.g23($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.f23(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            this.q2j_1 = this.p2j_1.s4();
            this.r2j_1 = this.p2j_1.t4();
            var tmp_0;
            if (!this.q2j_1.y1n_1.equals(PrimitiveClasses_getInstance().rb())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.r2j_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.pd_1 = 1;
            suspendResult = this.r2j_1.q19(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s2j_1 = suspendResult;
            this.t2j_1 = this.n2j_1.u2j(this.o2j_1.g1n_1, this.s2j_1);
            this.pd_1 = 2;
            suspendResult = this.o2j_1.k1m(new HttpResponseContainer(this.q2j_1, this.t2j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.g23 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.n2j_1, completion);
    i.o2j_1 = $this$intercept;
    i.p2j_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  HttpPlainText$Plugin$install$slambda_1.$metadata$ = classMeta('HttpPlainText$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.f23($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashSet_init_$Create$();
    }
    tmp.v2j_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    {
      tmp$ret$1 = LinkedHashMap_init_$Create$();
    }
    tmp_0.w2j_1 = tmp$ret$1;
    this.x2j_1 = null;
    this.y2j_1 = Charsets_getInstance().w1e_1;
  }
  Config_0.$metadata$ = classMeta('Config');
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.z2j_1 = new AttributeKey('HttpPlainText');
  }
  Plugin_0.prototype.r = function () {
    return this.z2j_1;
  };
  Plugin_0.prototype.d2i = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config_0();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    var tmp$ret$1;
    {
      {
      }
      return new HttpPlainText(config.v2j_1, config.w2j_1, config.x2j_1, config.y2j_1);
    }
  };
  Plugin_0.prototype.w24 = function (block) {
    return this.d2i(block);
  };
  Plugin_0.prototype.a2k = function (plugin, scope) {
    var tmp = Phases_getInstance().t2a_1;
    scope.r21_1.k1n(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().r24_1;
    scope.s21_1.k1n(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  Plugin_0.prototype.x24 = function (plugin, scope) {
    return this.a2k(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  Plugin_0.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function wrapContent($this, content, requestContentType) {
    var tmp0_elvis_lhs = requestContentType;
    var contentType = tmp0_elvis_lhs == null ? Text_getInstance().s1p_1 : tmp0_elvis_lhs;
    var tmp1_safe_receiver = requestContentType;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : charset(tmp1_safe_receiver);
    var charset_0 = tmp2_elvis_lhs == null ? $this.c2j_1 : tmp2_elvis_lhs;
    var tmp = withCharset(contentType, charset_0);
    return TextContent_init_$Create$(content, tmp, null, 4, null);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.b2k_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.o = function (a, b) {
    return this.b2k_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.o(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function HttpPlainText$lambda() {
    return function (a, b) {
      var tmp$ret$2;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = b.r4_1;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = a.r4_1;
        }
        tmp$ret$2 = compareValues(tmp, tmp$ret$1);
      }
      return tmp$ret$2;
    };
  }
  function HttpPlainText$lambda_0() {
    return function (a, b) {
      var tmp$ret$2;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = get_name(a);
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        {
          tmp$ret$1 = get_name(b);
        }
        tmp$ret$2 = compareValues(tmp, tmp$ret$1);
      }
      return tmp$ret$2;
    };
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_0();
    this.b2j_1 = responseCharsetFallback;
    var tmp$ret$1;
    {
      var tmp0_sortedByDescending = toList(charsetQuality);
      var tmp$ret$0;
      {
        var tmp = HttpPlainText$lambda();
        tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      }
      tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    }
    var withQuality = tmp$ret$1;
    var tmp$ret$6;
    {
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_filterTo = ArrayList_init_$Create$();
          var tmp0_iterator = charsets.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            var tmp$ret$2;
            {
              tmp$ret$2 = !charsetQuality.x1(element);
            }
            if (tmp$ret$2) {
              tmp0_filterTo.b(element);
            }
          }
          tmp$ret$3 = tmp0_filterTo;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      var tmp1_sortedBy = tmp$ret$4;
      var tmp$ret$5;
      {
        var tmp_0 = HttpPlainText$lambda_0();
        tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
      }
      tmp$ret$6 = sortedWith(tmp1_sortedBy, tmp$ret$5);
    }
    var withoutQuality = tmp$ret$6;
    var tmp_1 = this;
    var tmp$ret$13;
    {
      {
      }
      var tmp$ret$12;
      {
        var tmp0_apply = StringBuilder_init_$Create$();
        {
        }
        {
          {
            var tmp0_iterator_0 = withoutQuality.d();
            while (tmp0_iterator_0.e()) {
              var element_0 = tmp0_iterator_0.f();
              {
                var tmp$ret$7;
                {
                  tmp$ret$7 = charSequenceLength(tmp0_apply) > 0;
                }
                if (tmp$ret$7) {
                  tmp0_apply.fc(',');
                }
                tmp0_apply.fc(get_name(element_0));
              }
            }
          }
          {
            var tmp0_iterator_1 = withQuality.d();
            while (tmp0_iterator_1.e()) {
              var element_1 = tmp0_iterator_1.f();
              {
                var charset = element_1.s4();
                var quality = element_1.t4();
                var tmp$ret$8;
                {
                  tmp$ret$8 = charSequenceLength(tmp0_apply) > 0;
                }
                if (tmp$ret$8) {
                  tmp0_apply.fc(',');
                }
                {
                  var containsArg = quality;
                  var tmp0_check = 0.0 <= containsArg ? containsArg <= 1.0 : false;
                  {
                  }
                  {
                    {
                    }
                    if (!tmp0_check) {
                      var tmp$ret$9;
                      {
                        tmp$ret$9 = 'Check failed.';
                      }
                      var message = tmp$ret$9;
                      throw IllegalStateException_init_$Create$(toString(message));
                    }
                  }
                }
                var tmp$ret$10;
                {
                  var tmp1_roundToInt = 100 * quality;
                  tmp$ret$10 = roundToInt(tmp1_roundToInt);
                }
                var truncatedQuality = tmp$ret$10 / 100.0;
                tmp0_apply.fc(get_name(charset) + ';q=' + truncatedQuality);
              }
            }
          }
          var tmp$ret$11;
          {
            tmp$ret$11 = charSequenceLength(tmp0_apply) === 0;
          }
          if (tmp$ret$11) {
            tmp0_apply.fc(get_name(this.b2j_1));
          }
        }
        tmp$ret$12 = tmp0_apply;
      }
      tmp$ret$13 = tmp$ret$12.toString();
    }
    tmp_1.d2j_1 = tmp$ret$13;
    var tmp_2 = this;
    var tmp0_elvis_lhs = sendCharset;
    var tmp2_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.c2j_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().w1e_1 : tmp3_elvis_lhs;
  }
  HttpPlainText.prototype.u2j = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.s22());
    var actualCharset = tmp0_elvis_lhs == null ? this.b2j_1 : tmp0_elvis_lhs;
    return readText$default(body, actualCharset, 0, 2, null);
  };
  HttpPlainText.prototype.e2j = function (context) {
    if (!(context.t23_1.qf(HttpHeaders_getInstance().m1q_1) == null))
      return Unit_getInstance();
    context.t23_1.s1k(HttpHeaders_getInstance().m1q_1, this.d2j_1);
  };
  HttpPlainText.$metadata$ = classMeta('HttpPlainText');
  function get_ALLOWED_FOR_REDIRECT() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $cont) {
    var tmp = new $handleCallCOROUTINE$7($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.e2l_1 = $plugin;
    this.f2l_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRedirect$Plugin$install$slambda.prototype.y2g = function ($this$intercept, context, $cont) {
    var tmp = this.z2g($this$intercept, context, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpRedirect$Plugin$install$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.y2g(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRedirect$Plugin$install$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            this.pd_1 = 1;
            suspendResult = this.g2l_1.u24(this.h2l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i2l_1 = suspendResult;
            if (this.e2l_1.j2l_1 ? !get_ALLOWED_FOR_REDIRECT().h1(this.i2l_1.a26().b27()) : false) {
              return this.i2l_1;
            }

            this.pd_1 = 2;
            suspendResult = handleCall(this.g2l_1, Plugin_getInstance_1(), this.h2l_1, this.i2l_1, this.e2l_1.k2l_1, this.f2l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpRedirect$Plugin$install$slambda.prototype.z2g = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.e2l_1, this.f2l_1, completion);
    i.g2l_1 = $this$intercept;
    i.h2l_1 = context;
    return i;
  };
  HttpRedirect$Plugin$install$slambda.$metadata$ = classMeta('HttpRedirect$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $cont) {
      return i.y2g($this$intercept, context, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k2k_1 = _this__u8e3s4;
    this.l2k_1 = _this__u8e3s4_0;
    this.m2k_1 = context;
    this.n2k_1 = origin;
    this.o2k_1 = allowHttpsDowngrade;
    this.p2k_1 = client;
  }
  $handleCallCOROUTINE$7.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            if (!isRedirect(this.n2k_1.s22().f26()))
              return this.n2k_1;
            this.q2k_1 = this.n2k_1;
            this.r2k_1 = this.m2k_1;
            this.s2k_1 = this.n2k_1.a26().e26().h1y_1;
            this.t2k_1 = get_authority(this.n2k_1.a26().e26());
            this.pd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.pd_1 = 4;
              continue $sm;
            }

            this.p2k_1.x21_1.l20(this.k2k_1.m2l_1, this.q2k_1.s22());
            this.u2k_1 = this.q2k_1.s22().p1u().qf(HttpHeaders_getInstance().z1r_1);
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.v2k_1 = new HttpRequestBuilder();
            this.v2k_1.s29(this.r2k_1);
            ;
            this.v2k_1.r23_1.e1y_1.u6();
            var tmp0_safe_receiver = this.u2k_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(this.v2k_1.r23_1, tmp0_safe_receiver);
            }

            ;
            if ((!this.o2k_1 ? isSecure(this.s2k_1) : false) ? !isSecure(this.v2k_1.r23_1.v1x_1) : false) {
              return this.q2k_1;
            }

            if (!(this.t2k_1 === get_authority_0(this.v2k_1.r23_1))) {
              this.v2k_1.t23_1.w1k(HttpHeaders_getInstance().u1q_1);
            }

            tmp_0.r2k_1 = this.v2k_1;
            this.pd_1 = 2;
            suspendResult = this.l2k_1.u24(this.r2k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q2k_1 = suspendResult;
            if (!isRedirect(this.q2k_1.s22().f26()))
              return this.q2k_1;
            this.pd_1 = 1;
            continue $sm;
          case 3:
            throw this.sd_1;
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $handleCallCOROUTINE$7.$metadata$ = classMeta('$handleCallCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Config_1() {
    this.n2l_1 = true;
    this.o2l_1 = false;
  }
  Config_1.$metadata$ = classMeta('Config');
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.l2l_1 = new AttributeKey('HttpRedirect');
    this.m2l_1 = new EventDefinition();
  }
  Plugin_1.prototype.r = function () {
    return this.l2l_1;
  };
  Plugin_1.prototype.d2i = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config_1();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    return new HttpRedirect(config.n2l_1, config.o2l_1);
  };
  Plugin_1.prototype.w24 = function (block) {
    return this.d2i(block);
  };
  Plugin_1.prototype.p2l = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.h2i(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_1.prototype.x24 = function (plugin, scope) {
    return this.p2l(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  Plugin_1.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_1();
    this.j2l_1 = checkHttpMethod;
    this.k2l_1 = allowHttpsDowngrade;
  }
  HttpRedirect.$metadata$ = classMeta('HttpRedirect');
  function isRedirect(_this__u8e3s4) {
    init_properties_HttpRedirect_kt_rcsi6u();
    var tmp0_subject = _this__u8e3s4.j1x_1;
    return ((((tmp0_subject === Companion_getInstance_1().t1v_1.j1x_1 ? true : tmp0_subject === Companion_getInstance_1().u1v_1.j1x_1) ? true : tmp0_subject === Companion_getInstance_1().z1v_1.j1x_1) ? true : tmp0_subject === Companion_getInstance_1().a1w_1.j1x_1) ? true : tmp0_subject === Companion_getInstance_1().v1v_1.j1x_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function init_properties_HttpRedirect_kt_rcsi6u() {
    if (properties_initialized_HttpRedirect_kt_klj746) {
    } else {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().q1u_1, Companion_getInstance_2().v1u_1]);
    }
  }
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.y2l_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestLifecycle$Plugin$install$slambda.prototype.l22 = function ($this$intercept, it, $cont) {
    var tmp = this.m22($this$intercept, it, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 6;
            this.b2m_1 = Job(this.z2l_1.g1n_1.v23_1);
            attachToClientEngineJob(this.b2m_1, ensureNotNull(this.y2l_1.q21_1.b3(Key_getInstance())));
            this.pd_1 = 1;
            continue $sm;
          case 1:
            this.qd_1 = 4;
            this.qd_1 = 3;
            this.z2l_1.g1n_1.v23_1 = this.b2m_1;
            this.pd_1 = 2;
            suspendResult = this.z2l_1.l1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.c2m_1 = Unit_getInstance();
            this.qd_1 = 6;
            this.pd_1 = 5;
            continue $sm;
          case 3:
            this.qd_1 = 4;
            var tmp_1 = this.sd_1;
            if (tmp_1 instanceof Error) {
              var cause = this.sd_1;
              var tmp_2 = this;
              this.b2m_1.xp(cause);
              throw cause;
            } else {
              throw this.sd_1;
            }

            break;
          case 4:
            this.qd_1 = 6;
            var t = this.sd_1;
            this.b2m_1.kq();
            ;
            throw t;
          case 5:
            this.b2m_1.kq();
            ;
            return Unit_getInstance();
          case 6:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 6) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.m22 = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.y2l_1, completion);
    i.z2l_1 = $this$intercept;
    i.a2m_1 = it;
    return i;
  };
  HttpRequestLifecycle$Plugin$install$slambda.$metadata$ = classMeta('HttpRequestLifecycle$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.l22($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.d2m_1 = new AttributeKey('RequestLifecycle');
  }
  Plugin_2.prototype.r = function () {
    return this.d2m_1;
  };
  Plugin_2.prototype.z2a = function (block) {
    return new HttpRequestLifecycle();
  };
  Plugin_2.prototype.w24 = function (block) {
    return this.z2a(block);
  };
  Plugin_2.prototype.e2m = function (plugin, scope) {
    var tmp = Phases_getInstance().q2a_1;
    scope.r21_1.k1n(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  Plugin_2.prototype.x24 = function (plugin, scope) {
    return this.e2m(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  Plugin_2.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_2();
  }
  HttpRequestLifecycle.$metadata$ = classMeta('HttpRequestLifecycle');
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    var handler = clientEngineJob.rl(attachToClientEngineJob$lambda(requestJob));
    requestJob.rl(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        tmp = cancel_2($requestJob, 'Engine failed', cause);
      } else {
        $requestJob.kq();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.vn();
      return Unit_getInstance();
    };
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.n2m_1 = $plugin;
    this.o2m_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpSend$Plugin$install$slambda.prototype.l22 = function ($this$intercept, content, $cont) {
    var tmp = this.m22($this$intercept, content, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpSend$Plugin$install$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpSend$Plugin$install$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 3;
            var tmp_0 = this.q2m_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var tmp_1 = '\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.q2m_1) + ', with Content-Type: ' + contentType(this.p2m_1.g1n_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.';
              var message = trimMargin$default(tmp_1, null, 1, null);
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp_2 = this;
            tmp_2.r2m_1 = this.p2m_1.g1n_1;
            var tmp_3 = this;
            tmp_3.s2m_1 = this.q2m_1;
            var tmp0_subject = this.s2m_1;
            if (tmp0_subject == null) {
              this.r2m_1.u23_1 = NullBody_getInstance();
              var tmp_4 = JsType_getInstance();
              var tmp_5 = getKClass(OutgoingContent);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_7;
                if ($p instanceof Error) {
                  tmp_7 = null;
                } else {
                  throw $p;
                }
                tmp_6 = tmp_7;
              }
              this.r2m_1.t29(typeInfoImpl(tmp_4, tmp_5, tmp_6));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                this.r2m_1.u23_1 = this.s2m_1;
                this.r2m_1.t29(null);
              } else {
                this.r2m_1.u23_1 = this.s2m_1;
                var tmp_8 = JsType_getInstance();
                var tmp_9 = getKClass(OutgoingContent);
                var tmp_10;
                try {
                  tmp_10 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_11;
                  if ($p instanceof Error) {
                    tmp_11 = null;
                  } else {
                    throw $p;
                  }
                  tmp_10 = tmp_11;
                }
                this.r2m_1.t29(typeInfoImpl(tmp_8, tmp_9, tmp_10));
              }
            }

            this.t2m_1 = new DefaultSender(this.n2m_1.f2i_1, this.o2m_1);
            this.u2m_1 = this.t2m_1;
            var tmp_12 = this;
            tmp_12.v2m_1 = downTo(get_lastIndex(this.n2m_1.g2i_1), 0);
            var progression = this.v2m_1;
            var inductionVariable = progression.u4_1;
            var last = progression.v4_1;
            var step = progression.w4_1;
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.n2m_1.g2i_1.h(element);
                this.u2m_1 = new InterceptedSender(interceptor, this.u2m_1);
              }
               while (!(element === last));
            this.pd_1 = 1;
            suspendResult = this.u2m_1.u24(this.p2m_1.g1n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w2m_1 = suspendResult;
            this.pd_1 = 2;
            suspendResult = this.p2m_1.k1m(this.w2m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
            return Unit_getInstance();
          case 3:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 3) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpSend$Plugin$install$slambda.prototype.m22 = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.n2m_1, this.o2m_1, completion);
    i.p2m_1 = $this$intercept;
    i.q2m_1 = content;
    return i;
  };
  HttpSend$Plugin$install$slambda.$metadata$ = classMeta('HttpSend$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.l22($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$8(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2n_1 = _this__u8e3s4;
    this.g2n_1 = requestBuilder;
  }
  $executeCOROUTINE$8.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            var tmp0_safe_receiver = this.f2n_1.k2n_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel$default(tmp0_safe_receiver, null, 1, null);
            }

            ;
            if (this.f2n_1.j2n_1 >= this.f2n_1.h2n_1) {
              throw new SendCountExceedException('Max send count ' + this.f2n_1.h2n_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.f2n_1;
            var tmp2 = tmp1_this.j2n_1;
            tmp1_this.j2n_1 = tmp2 + 1 | 0;
            ;
            this.pd_1 = 1;
            suspendResult = this.f2n_1.i2n_1.t21_1.f1n(this.g2n_1, this.g2n_1.u23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var tmp0_error = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this.f2n_1.k2n_1 = call;
            return call;
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$8.$metadata$ = classMeta('$executeCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Config_2() {
    this.l2n_1 = 20;
  }
  Config_2.$metadata$ = classMeta('Config');
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.m2n_1 = new AttributeKey('HttpSend');
  }
  Plugin_3.prototype.r = function () {
    return this.m2n_1;
  };
  Plugin_3.prototype.d2i = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new Config_2();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    var config = tmp$ret$0;
    return new HttpSend(config.l2n_1);
  };
  Plugin_3.prototype.w24 = function (block) {
    return this.d2i(block);
  };
  Plugin_3.prototype.n2n = function (plugin, scope) {
    var tmp = Phases_getInstance().u2a_1;
    scope.r21_1.k1n(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_3.prototype.x24 = function (plugin, scope) {
    return this.n2n(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  Plugin_3.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.o2n_1 = interceptor;
    this.p2n_1 = nextSender;
  }
  InterceptedSender.prototype.u24 = function (requestBuilder, $cont) {
    return this.o2n_1(this.p2n_1, requestBuilder, $cont);
  };
  InterceptedSender.$metadata$ = classMeta('InterceptedSender', [Sender]);
  function DefaultSender(maxSendCount, client) {
    this.h2n_1 = maxSendCount;
    this.i2n_1 = client;
    this.j2n_1 = 0;
    this.k2n_1 = null;
  }
  DefaultSender.prototype.u24 = function (requestBuilder, $cont) {
    var tmp = new $executeCOROUTINE$8(this, requestBuilder, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  DefaultSender.$metadata$ = classMeta('DefaultSender', [Sender]);
  function HttpSend(maxSendCount) {
    Plugin_getInstance_3();
    this.f2i_1 = maxSendCount;
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    tmp.g2i_1 = tmp$ret$0;
  }
  HttpSend.prototype.h2i = function (block) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign = tmp0_this.g2i_1;
      tmp0_plusAssign.b(block);
    }
  };
  HttpSend.$metadata$ = classMeta('HttpSend');
  function Sender() {
  }
  Sender.$metadata$ = interfaceMeta('Sender');
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  SendCountExceedException.$metadata$ = classMeta('SendCountExceedException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.t2n(requestTimeoutMillis);
    $this.u2n(connectTimeoutMillis);
    $this.v2n(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      requestTimeoutMillis = null;
    if (!(($mask0 & 2) === 0))
      connectTimeoutMillis = null;
    if (!(($mask0 & 4) === 0))
      socketTimeoutMillis = null;
    HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function checkTimeoutValue($this, value) {
    {
      var tmp0_require = value == null ? true : value.a1(new Long(0, 0)) > 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.w2n_1 = new AttributeKey('TimeoutConfiguration');
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $context, $executionContext, resultContinuation) {
    this.f2o_1 = $requestTimeout;
    this.g2o_1 = $context;
    this.h2o_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda$slambda.prototype.q1a = function ($this$launch, $cont) {
    var tmp = this.r1a($this$launch, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.ae = function (p1, $cont) {
    return this.q1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.pd_1 = 1;
            suspendResult = delay(this.f2o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.g2o_1);
            cancel_2(this.h2o_1, ensureNotNull(cause.message), cause);
            return Unit_getInstance();
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.r1a = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.f2o_1, this.g2o_1, this.h2o_1, completion);
    i.i2o_1 = $this$launch;
    return i;
  };
  HttpTimeout$Plugin$install$slambda$slambda.$metadata$ = classMeta('HttpTimeout$Plugin$install$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $context, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $context, $executionContext, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.q1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.xl(null, 1, null);
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.r2o_1 = $plugin;
    this.s2o_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda.prototype.l22 = function ($this$intercept, it, $cont) {
    var tmp = this.m22($this$intercept, it, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpTimeout$Plugin$install$slambda.prototype.xe = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l22(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        if (tmp === 0) {
          this.qd_1 = 1;
          var isWebSocket = isWebsocket(this.t2o_1.g1n_1.r23_1.v1x_1);
          var tmp_0;
          if (isWebSocket) {
            tmp_0 = true;
          } else {
            var tmp_1 = this.t2o_1.g1n_1.u23_1;
            tmp_0 = tmp_1 instanceof ClientUpgradeContent;
          }
          if (tmp_0)
            return Unit_getInstance();
          var configuration = this.t2o_1.g1n_1.v2o(Plugin_getInstance_4());
          if (configuration == null ? hasNotNullTimeouts(this.r2o_1) : false) {
            configuration = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
            this.t2o_1.g1n_1.w2o(Plugin_getInstance_4(), configuration);
          }
          var tmp0_safe_receiver = configuration;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$0;
            l$ret$1: do {
              var context = this.t2o_1.g1n_1;
              var tmp0_elvis_lhs = tmp0_safe_receiver.x2o();
              tmp0_safe_receiver.u2n(tmp0_elvis_lhs == null ? this.r2o_1.z2o_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.b2p();
              tmp0_safe_receiver.v2n(tmp1_elvis_lhs == null ? this.r2o_1.a2p_1 : tmp1_elvis_lhs);
              var tmp2_elvis_lhs = tmp0_safe_receiver.c2p();
              tmp0_safe_receiver.t2n(tmp2_elvis_lhs == null ? this.r2o_1.y2o_1 : tmp2_elvis_lhs);
              var tmp3_elvis_lhs = tmp0_safe_receiver.c2p();
              var requestTimeout = tmp3_elvis_lhs == null ? this.r2o_1.y2o_1 : tmp3_elvis_lhs;
              var tmp_2;
              if (requestTimeout == null) {
                tmp_2 = true;
              } else {
                Plugin_getInstance_4();
                tmp_2 = equals(requestTimeout, new Long(-1, 2147483647));
              }
              if (tmp_2) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              }
              var executionContext = context.v23_1;
              var killer = launch$default(this.s2o_1, null, null, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, context, executionContext, null), 3, null);
              var tmp_3 = context.v23_1;
              tmp_3.rl(HttpTimeout$Plugin$install$slambda$lambda(killer));
            }
             while (false);
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.sd_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  HttpTimeout$Plugin$install$slambda.prototype.m22 = function ($this$intercept, it, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.r2o_1, this.s2o_1, completion);
    i.t2o_1 = $this$intercept;
    i.u2o_1 = it;
    return i;
  };
  HttpTimeout$Plugin$install$slambda.$metadata$ = classMeta('HttpTimeout$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.l22($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  HttpTimeoutCapabilityConfiguration.prototype.t2n = function (value) {
    this.q2n_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.c2p = function () {
    return this.q2n_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.u2n = function (value) {
    this.r2n_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.x2o = function () {
    return this.r2n_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.v2n = function (value) {
    this.s2n_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.b2p = function () {
    return this.s2n_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.l17 = function () {
    return new HttpTimeout(this.c2p(), this.x2o(), this.b2p());
  };
  HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof HttpTimeoutCapabilityConfiguration)
      other;
    else
      THROW_CCE();
    if (!equals(this.q2n_1, other.q2n_1))
      return false;
    if (!equals(this.r2n_1, other.r2n_1))
      return false;
    if (!equals(this.s2n_1, other.s2n_1))
      return false;
    return true;
  };
  HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.q2n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.r2n_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.s2n_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_10();
    this.q2n_1 = new Long(0, 0);
    this.r2n_1 = new Long(0, 0);
    this.s2n_1 = new Long(0, 0);
  }
  HttpTimeoutCapabilityConfiguration.$metadata$ = classMeta('HttpTimeoutCapabilityConfiguration');
  function hasNotNullTimeouts($this) {
    return (!($this.y2o_1 == null) ? true : !($this.z2o_1 == null)) ? true : !($this.a2p_1 == null);
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.d2p_1 = new AttributeKey('TimeoutPlugin');
    this.e2p_1 = new Long(-1, 2147483647);
  }
  Plugin_4.prototype.r = function () {
    return this.d2p_1;
  };
  Plugin_4.prototype.f2p = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0.l17();
  };
  Plugin_4.prototype.w24 = function (block) {
    return this.f2p(block);
  };
  Plugin_4.prototype.g2p = function (plugin, scope) {
    var tmp = Phases_getInstance().q2a_1;
    scope.r21_1.k1n(tmp, HttpTimeout$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_4.prototype.x24 = function (plugin, scope) {
    return this.g2p(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  Plugin_4.$metadata$ = objectMeta('Plugin', [HttpClientPlugin, HttpClientEngineCapability]);
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_4();
    this.y2o_1 = requestTimeoutMillis;
    this.z2o_1 = connectTimeoutMillis;
    this.a2p_1 = socketTimeoutMillis;
  }
  HttpTimeout.$metadata$ = classMeta('HttpTimeout');
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.r23_1.k1z();
    var tmp0_safe_receiver = request.v2o(Plugin_getInstance_4());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2p());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    var tmp0_elvis_lhs = timeoutMillis;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  HttpRequestTimeoutException.$metadata$ = classMeta('HttpRequestTimeoutException', undefined, undefined, undefined, undefined, IOException.prototype);
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedResponse(_this__u8e3s4.a27(), content, _this__u8e3s4);
  }
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.h2p_1 = call;
    this.i2p_1 = content;
    this.j2p_1 = origin;
    this.k2p_1 = this.j2p_1.qk();
  }
  DelegatedResponse.prototype.a27 = function () {
    return this.h2p_1;
  };
  DelegatedResponse.prototype.f1q = function () {
    return this.i2p_1;
  };
  DelegatedResponse.prototype.qk = function () {
    return this.k2p_1;
  };
  DelegatedResponse.prototype.f26 = function () {
    return this.j2p_1.f26();
  };
  DelegatedResponse.prototype.l27 = function () {
    return this.j2p_1.l27();
  };
  DelegatedResponse.prototype.m27 = function () {
    return this.j2p_1.m27();
  };
  DelegatedResponse.prototype.n27 = function () {
    return this.j2p_1.n27();
  };
  DelegatedResponse.prototype.p1u = function () {
    return this.j2p_1.p1u();
  };
  DelegatedResponse.$metadata$ = classMeta('DelegatedResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.prototype.toString = function () {
    return 'WebSocketCapability';
  };
  WebSocketCapability.$metadata$ = objectMeta('WebSocketCapability', [HttpClientEngineCapability]);
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance == null)
      new WebSocketCapability();
    return WebSocketCapability_instance;
  }
  function WebSocketException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, WebSocketException);
  }
  WebSocketException.$metadata$ = classMeta('WebSocketException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ClientUpgradeContent() {
  }
  ClientUpgradeContent.$metadata$ = classMeta('ClientUpgradeContent', undefined, undefined, undefined, undefined, NoContent.prototype);
  function DefaultHttpRequest(call, data) {
    this.l2p_1 = call;
    this.m2p_1 = data.s28_1;
    this.n2p_1 = data.r28_1;
    this.o2p_1 = data.u28_1;
    this.p2p_1 = data.t28_1;
    this.q2p_1 = data.w28_1;
  }
  DefaultHttpRequest.prototype.a27 = function () {
    return this.l2p_1;
  };
  DefaultHttpRequest.prototype.qk = function () {
    return this.a27().qk();
  };
  DefaultHttpRequest.prototype.b27 = function () {
    return this.m2p_1;
  };
  DefaultHttpRequest.prototype.e26 = function () {
    return this.n2p_1;
  };
  DefaultHttpRequest.prototype.p1u = function () {
    return this.p2p_1;
  };
  DefaultHttpRequest.prototype.cf = function () {
    return this.q2p_1;
  };
  DefaultHttpRequest.$metadata$ = classMeta('DefaultHttpRequest', [HttpRequest_0]);
  function HttpRequest_0() {
  }
  HttpRequest_0.$metadata$ = interfaceMeta('HttpRequest', [HttpMessage, CoroutineScope]);
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    return function () {
      var tmp$ret$0;
      {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
      }
      return tmp$ret$0;
    };
  }
  function HttpRequestBuilder() {
    Companion_getInstance_11();
    var tmp = this;
    tmp.r23_1 = URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null);
    this.s23_1 = Companion_getInstance_2().q1u_1;
    var tmp_0 = this;
    tmp_0.t23_1 = HeadersBuilder_init_$Create$(0, 1, null);
    this.u23_1 = EmptyContent_getInstance();
    var tmp_1 = this;
    tmp_1.v23_1 = SupervisorJob$default(null, 1, null);
    this.w23_1 = Attributes(true);
  }
  HttpRequestBuilder.prototype.p1u = function () {
    return this.t23_1;
  };
  HttpRequestBuilder.prototype.t29 = function (value) {
    if (!(value == null)) {
      this.w23_1.b1j(get_BodyTypeAttributeKey(), value);
    } else {
      this.w23_1.c1j(get_BodyTypeAttributeKey());
    }
  };
  HttpRequestBuilder.prototype.r2p = function () {
    return this.w23_1.z1i(get_BodyTypeAttributeKey());
  };
  HttpRequestBuilder.prototype.l17 = function () {
    var tmp = this.r23_1.l17();
    var tmp_0 = this.s23_1;
    var tmp_1 = this.t23_1.l17();
    var tmp_2 = this.u23_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.u23_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.v23_1, this.w23_1);
  };
  HttpRequestBuilder.prototype.s29 = function (builder) {
    this.v23_1 = builder.v23_1;
    return this.s2p(builder);
  };
  HttpRequestBuilder.prototype.s2p = function (builder) {
    this.s23_1 = builder.s23_1;
    this.u23_1 = builder.u23_1;
    this.t29(builder.r2p());
    takeFrom_0(this.r23_1, builder.r23_1);
    this.r23_1.c1y_1 = this.r23_1.c1y_1;
    appendAll(this.t23_1, builder.t23_1);
    putAll(this.w23_1, builder.w23_1);
    return this;
  };
  HttpRequestBuilder.prototype.w2o = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.w23_1.d1j(tmp, HttpRequestBuilder$setCapability$lambda());
    {
      capabilities.a(key, capability);
    }
  };
  HttpRequestBuilder.prototype.v2o = function (key) {
    var tmp0_safe_receiver = this.w23_1.z1i(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  HttpRequestBuilder.$metadata$ = classMeta('HttpRequestBuilder', [HttpMessageBuilder]);
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.r28_1 = url;
    this.s28_1 = method;
    this.t28_1 = headers;
    this.u28_1 = body;
    this.v28_1 = executionContext;
    this.w28_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.w28_1.z1i(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2();
    tmp.x28_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.r28_1 + ', method=' + this.s28_1 + ')';
  };
  HttpRequestData.$metadata$ = classMeta('HttpRequestData');
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.z24_1 = statusCode;
    this.a25_1 = requestTime;
    this.b25_1 = headers;
    this.c25_1 = version;
    this.d25_1 = body;
    this.e25_1 = callContext;
    var tmp = this;
    tmp.f25_1 = GMTDate$default(null, 1, null);
  }
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.z24_1 + ')';
  };
  HttpResponseData.$metadata$ = classMeta('HttpResponseData');
  function url(_this__u8e3s4, urlString) {
    takeFrom(_this__u8e3s4.r23_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.u28_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function Phases() {
    Phases_instance = this;
    this.q2a_1 = new PipelinePhase('Before');
    this.r2a_1 = new PipelinePhase('State');
    this.s2a_1 = new PipelinePhase('Transform');
    this.t2a_1 = new PipelinePhase('Render');
    this.u2a_1 = new PipelinePhase('Send');
  }
  Phases.$metadata$ = objectMeta('Phases');
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    Pipeline.call(this, [Phases_getInstance().q2a_1, Phases_getInstance().r2a_1, Phases_getInstance().s2a_1, Phases_getInstance().t2a_1, Phases_getInstance().u2a_1]);
    this.a2q_1 = developmentMode;
  }
  HttpRequestPipeline.prototype.e1n = function () {
    return this.a2q_1;
  };
  HttpRequestPipeline.$metadata$ = classMeta('HttpRequestPipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function Phases_0() {
    Phases_instance_0 = this;
    this.h24_1 = new PipelinePhase('Before');
    this.i24_1 = new PipelinePhase('State');
    this.j24_1 = new PipelinePhase('Monitoring');
    this.k24_1 = new PipelinePhase('Engine');
    this.l24_1 = new PipelinePhase('Receive');
  }
  Phases_0.$metadata$ = objectMeta('Phases');
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    Pipeline.call(this, [Phases_getInstance_0().h24_1, Phases_getInstance_0().i24_1, Phases_getInstance_0().j24_1, Phases_getInstance_0().k24_1, Phases_getInstance_0().l24_1]);
    this.i2q_1 = developmentMode;
  }
  HttpSendPipeline.prototype.e1n = function () {
    return this.i2q_1;
  };
  HttpSendPipeline.$metadata$ = classMeta('HttpSendPipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function get_BodyTypeAttributeKey() {
    init_properties_RequestBody_kt_hroiwt();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function init_properties_RequestBody_kt_hroiwt() {
    if (properties_initialized_RequestBody_kt_agyv1b) {
    } else {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.j2q_1 = call;
    this.k2q_1 = responseData.e25_1;
    this.l2q_1 = responseData.z24_1;
    this.m2q_1 = responseData.c25_1;
    this.n2q_1 = responseData.a25_1;
    this.o2q_1 = responseData.f25_1;
    var tmp = this;
    var tmp_0 = responseData.d25_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.p2q_1 = tmp0_elvis_lhs == null ? Companion_getInstance().n1b() : tmp0_elvis_lhs;
    this.q2q_1 = responseData.b25_1;
  }
  DefaultHttpResponse.prototype.a27 = function () {
    return this.j2q_1;
  };
  DefaultHttpResponse.prototype.qk = function () {
    return this.k2q_1;
  };
  DefaultHttpResponse.prototype.f26 = function () {
    return this.l2q_1;
  };
  DefaultHttpResponse.prototype.l27 = function () {
    return this.m2q_1;
  };
  DefaultHttpResponse.prototype.m27 = function () {
    return this.n2q_1;
  };
  DefaultHttpResponse.prototype.n27 = function () {
    return this.o2q_1;
  };
  DefaultHttpResponse.prototype.f1q = function () {
    return this.p2q_1;
  };
  DefaultHttpResponse.prototype.p1u = function () {
    return this.q2q_1;
  };
  DefaultHttpResponse.$metadata$ = classMeta('DefaultHttpResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).e26() + ', ' + this.f26() + ']';
  };
  HttpResponse.$metadata$ = classMeta('HttpResponse', [HttpMessage, CoroutineScope]);
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.a27().a26();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.qk().b3(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.kq();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $cont) {
    var tmp = new $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  }
  function bodyAsText$default(_this__u8e3s4, fallbackCharset, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fallbackCharset = Charsets_getInstance().w1e_1;
    return bodyAsText(_this__u8e3s4, fallbackCharset, $cont);
  }
  function $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z2q_1 = _this__u8e3s4;
    this.a2r_1 = fallbackCharset;
  }
  $bodyAsTextCOROUTINE$12.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.z2q_1);
            tmp_0.b2r_1 = tmp0_elvis_lhs == null ? this.a2r_1 : tmp0_elvis_lhs;
            this.c2r_1 = this.b2r_1.a1f();
            this.pd_1 = 1;
            var tmp_1 = this.z2q_1.a27();
            var tmp_2 = JsType_getInstance();
            var tmp_3 = getKClass(Input);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(Input), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_1.d26(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof Input ? suspendResult : THROW_CCE();
            return decode$default(this.c2r_1, input, 0, 2, null);
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $bodyAsTextCOROUTINE$12.$metadata$ = classMeta('$bodyAsTextCOROUTINE$12', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Phases_1() {
    Phases_instance_1 = this;
    this.p24_1 = new PipelinePhase('Receive');
    this.q24_1 = new PipelinePhase('Parse');
    this.r24_1 = new PipelinePhase('Transform');
    this.s24_1 = new PipelinePhase('State');
    this.t24_1 = new PipelinePhase('After');
  }
  Phases_1.$metadata$ = objectMeta('Phases');
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    Pipeline.call(this, [Phases_getInstance_1().p24_1, Phases_getInstance_1().q24_1, Phases_getInstance_1().r24_1, Phases_getInstance_1().s24_1, Phases_getInstance_1().t24_1]);
    this.k2r_1 = developmentMode;
  }
  HttpResponsePipeline.prototype.e1n = function () {
    return this.k2r_1;
  };
  HttpResponsePipeline.$metadata$ = classMeta('HttpResponsePipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function Phases_2() {
    Phases_instance_2 = this;
    this.v2a_1 = new PipelinePhase('Before');
    this.w2a_1 = new PipelinePhase('State');
    this.x2a_1 = new PipelinePhase('After');
  }
  Phases_2.$metadata$ = objectMeta('Phases');
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    Pipeline.call(this, [Phases_getInstance_2().v2a_1, Phases_getInstance_2().w2a_1, Phases_getInstance_2().x2a_1]);
    this.s2r_1 = developmentMode;
  }
  HttpReceivePipeline.prototype.e1n = function () {
    return this.s2r_1;
  };
  HttpReceivePipeline.$metadata$ = classMeta('HttpReceivePipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function HttpResponseContainer(expectedType, response) {
    this.y25_1 = expectedType;
    this.z25_1 = response;
  }
  HttpResponseContainer.prototype.s4 = function () {
    return this.y25_1;
  };
  HttpResponseContainer.prototype.t4 = function () {
    return this.z25_1;
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.y25_1 + ', response=' + toString(this.z25_1) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = this.y25_1.hashCode();
    result = imul(result, 31) + hashCode(this.z25_1) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.y25_1.equals(tmp0_other_with_cast.y25_1))
      return false;
    if (!equals(this.z25_1, tmp0_other_with_cast.z25_1))
      return false;
    return true;
  };
  HttpResponseContainer.$metadata$ = classMeta('HttpResponseContainer');
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.t2r_1.w23_1.z1i(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
          var tmp0_iterator = tmp1_safe_receiver.d();
          while (tmp0_iterator.e()) {
            var element = tmp0_iterator.f();
            if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
              tmp0_filterIsInstanceTo.b(element);
            }
          }
          tmp$ret$0 = tmp0_filterIsInstanceTo;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      {
        var tmp0_iterator_0 = tmp2_safe_receiver.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          {
            var tmp$ret$3;
            $l$block: {
              var tmp0_requireNotNull = pluginOrNull($this.u2r_1, element_0);
              {
              }
              if (tmp0_requireNotNull == null) {
                var tmp$ret$2;
                {
                  tmp$ret$2 = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
                }
                var message = tmp$ret$2;
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$3 = tmp0_requireNotNull;
                break $l$block;
              }
            }
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpStatement$execute$slambda.prototype.e2s = function (it, $cont) {
    var tmp = this.y2c(it, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpStatement$execute$slambda.prototype.ae = function (p1, $cont) {
    return this.e2s(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpStatement$execute$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.pd_1 = 1;
            suspendResult = save(this.d2s_1.a27(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.s22();
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  HttpStatement$execute$slambda.prototype.y2c = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.d2s_1 = it;
    return i;
  };
  HttpStatement$execute$slambda.$metadata$ = classMeta('HttpStatement$execute$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.e2s(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$13(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n2s_1 = _this__u8e3s4;
    this.o2s_1 = block;
  }
  $executeCOROUTINE$13.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 13;
            this.pd_1 = 1;
            continue $sm;
          case 1:
            this.qd_1 = 12;
            this.pd_1 = 2;
            suspendResult = this.n2s_1.u2s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q2s_1 = suspendResult;
            this.pd_1 = 3;
            continue $sm;
          case 3:
            this.pd_1 = 4;
            continue $sm;
          case 4:
            this.qd_1 = 10;
            this.pd_1 = 5;
            suspendResult = this.o2s_1(this.q2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.r2s_1 = suspendResult;
            this.pd_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.s2s_1 = this.r2s_1;
            this.pd_1 = 7;
            suspendResult = this.n2s_1.v2s(this.q2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.s2s_1;
          case 8:
            this.pd_1 = 9;
            suspendResult = this.n2s_1.v2s(this.q2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.p2s_1 = Unit_getInstance();
            this.qd_1 = 13;
            this.pd_1 = 15;
            continue $sm;
          case 10:
            this.qd_1 = 12;
            this.t2s_1 = this.sd_1;
            this.pd_1 = 11;
            suspendResult = this.n2s_1.v2s(this.q2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.t2s_1;
          case 12:
            this.qd_1 = 13;
            var tmp_2 = this.sd_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.sd_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.sd_1;
            }

            break;
          case 13:
            throw this.sd_1;
          case 14:
            this.qd_1 = 13;
            if (false) {
              this.pd_1 = 1;
              continue $sm;
            }

            this.pd_1 = 15;
            continue $sm;
          case 15:
            return this.p2s_1;
        }
      } catch ($p) {
        if (this.qd_1 === 13) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$13.$metadata$ = classMeta('$executeCOROUTINE$13', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $executeUnsafeCOROUTINE$14(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2t_1 = _this__u8e3s4;
  }
  $executeUnsafeCOROUTINE$14.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 4;
            this.pd_1 = 1;
            continue $sm;
          case 1:
            this.qd_1 = 3;
            this.g2t_1 = (new HttpRequestBuilder()).s29(this.e2t_1.t2r_1);
            this.pd_1 = 2;
            suspendResult = this.e2t_1.u2r_1.u24(this.g2t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.s22();
          case 3:
            this.qd_1 = 4;
            var tmp_1 = this.sd_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.sd_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.sd_1;
            }

            break;
          case 4:
            throw this.sd_1;
          case 5:
            this.qd_1 = 4;
            if (false) {
              this.pd_1 = 1;
              continue $sm;
            }

            this.pd_1 = 6;
            continue $sm;
          case 6:
            return this.f2t_1;
        }
      } catch ($p) {
        if (this.qd_1 === 4) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $executeUnsafeCOROUTINE$14.$metadata$ = classMeta('$executeUnsafeCOROUTINE$14', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $cleanupCOROUTINE$15(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p2t_1 = _this__u8e3s4;
    this.q2t_1 = _this__u8e3s4_0;
  }
  $cleanupCOROUTINE$15.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.q2t_1.qk().b3(Key_getInstance()));
            tmp_0.r2t_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.r2t_1.kq();
            ;
            this.qd_1 = 1;
            cancel_1(this.q2t_1.f1q());
            ;
            this.qd_1 = 4;
            this.pd_1 = 2;
            continue $sm;
          case 1:
            this.qd_1 = 4;
            var tmp_2 = this.sd_1;
            if (tmp_2 instanceof Error) {
              this.s2t_1 = this.sd_1;
              this.pd_1 = 2;
              continue $sm;
            } else {
              throw this.sd_1;
            }

            break;
          case 2:
            this.qd_1 = 4;
            this.pd_1 = 3;
            suspendResult = this.r2t_1.lq(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            return Unit_getInstance();
          case 4:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 4) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $cleanupCOROUTINE$15.$metadata$ = classMeta('$cleanupCOROUTINE$15', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpStatement(builder, client) {
    this.t2r_1 = builder;
    this.u2r_1 = client;
    checkCapabilities(this);
  }
  HttpStatement.prototype.t2t = function () {
    return this.u2r_1;
  };
  HttpStatement.prototype.u2t = function (block, $cont) {
    var tmp = new $executeCOROUTINE$13(this, block, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpStatement.prototype.v2t = function ($cont) {
    return this.u2t(HttpStatement$execute$slambda_0(null), $cont);
  };
  HttpStatement.prototype.u2s = function ($cont) {
    var tmp = new $executeUnsafeCOROUTINE$14(this, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpStatement.prototype.v2s = function (_this__u8e3s4, $cont) {
    var tmp = new $cleanupCOROUTINE$15(this, _this__u8e3s4, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.t2r_1.r23_1.k1z() + ']';
  };
  HttpStatement.$metadata$ = classMeta('HttpStatement');
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).rw();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.e2u_1 = $contentLength;
    this.f2u_1 = $this_observable;
    this.g2u_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  observable$slambda.prototype.y27 = function ($this$writer, $cont) {
    var tmp = this.z27($this$writer, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  observable$slambda.prototype.ae = function (p1, $cont) {
    return this.y27((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  observable$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 15;
            this.pd_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.j2u_1 = get_ByteArrayPool();
            this.k2u_1 = this.j2u_1.w1a();
            this.pd_1 = 2;
            continue $sm;
          case 2:
            this.pd_1 = 3;
            continue $sm;
          case 3:
            this.qd_1 = 14;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.e2u_1;
            tmp_1.m2u_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.n2u_1 = new Long(0, 0);
            this.pd_1 = 4;
            continue $sm;
          case 4:
            if (!!this.f2u_1.j14()) {
              this.pd_1 = 8;
              continue $sm;
            }

            this.pd_1 = 5;
            suspendResult = readAvailable(this.f2u_1, this.k2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.o2u_1 = suspendResult;
            this.pd_1 = 6;
            suspendResult = this.h2u_1.rw().o19(this.k2u_1, 0, this.o2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            var tmp_3 = this;
            tmp_3.p2u_1 = this.n2u_1;
            tmp_2.n2u_1 = this.p2u_1.b4(toLong(this.o2u_1));
            this.pd_1 = 7;
            suspendResult = this.g2u_1(this.n2u_1, this.m2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.pd_1 = 4;
            continue $sm;
          case 8:
            this.q2u_1 = this.f2u_1.r13();
            this.h2u_1.rw().zx(this.q2u_1);
            ;
            if (this.q2u_1 == null ? this.n2u_1.equals(new Long(0, 0)) : false) {
              this.pd_1 = 9;
              suspendResult = this.g2u_1(this.n2u_1, this.m2u_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pd_1 = 10;
              continue $sm;
            }

            break;
          case 9:
            this.pd_1 = 10;
            continue $sm;
          case 10:
            this.l2u_1 = Unit_getInstance();
            this.qd_1 = 15;
            this.pd_1 = 11;
            var tmp_4 = this;
            continue $sm;
          case 11:
            var tmp_5 = this;
            tmp_5.i2u_1 = this.j2u_1.h1d(this.k2u_1);
            this.pd_1 = 13;
            continue $sm;
          case 12:
            this.j2u_1.h1d(this.k2u_1);
            if (false) {
              this.pd_1 = 1;
              continue $sm;
            }

            this.pd_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.qd_1 = 15;
            var t = this.sd_1;
            this.j2u_1.h1d(this.k2u_1);
            throw t;
          case 15:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 15) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  observable$slambda.prototype.z27 = function ($this$writer, completion) {
    var i = new observable$slambda(this.e2u_1, this.f2u_1, this.g2u_1, completion);
    i.h2u_1 = $this$writer;
    return i;
  };
  observable$slambda.$metadata$ = classMeta('observable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.y27($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.r2u_1 = response;
    this.s2u_1 = cause;
  }
  HttpResponseReceiveFail.$metadata$ = classMeta('HttpResponseReceiveFail');
  var properties_initialized_ClientEvents_kt_rdee4m;
  function init_properties_ClientEvents_kt_kkxb6e() {
    if (properties_initialized_ClientEvents_kt_rdee4m) {
    } else {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.u2u_1 = new Long(0, 0);
  }
  EmptyContent.prototype.t1z = function () {
    return this.u2u_1;
  };
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  EmptyContent.$metadata$ = objectMeta('EmptyContent', undefined, undefined, undefined, undefined, NoContent.prototype);
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp$ret$0;
    {
      var tmp0_apply = HeadersBuilder_init_$Create$(0, 1, null);
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0.l17();
  }
  function HttpClient_1(block) {
    return HttpClient_0(JsClient(), block);
  }
  function HttpClient$default(block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      block = HttpClient$lambda_2();
    }
    return HttpClient_1(block);
  }
  function HttpClient$lambda_2() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function JsClient() {
    return Js_getInstance();
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.v2u = function (block) {
    var tmp$ret$0;
    {
      var tmp0_apply = new HttpClientEngineConfig();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return new JsClientEngine(tmp$ret$0);
  };
  Js.prototype.v24 = function (block) {
    return this.v2u(block);
  };
  Js.$metadata$ = objectMeta('Js', [HttpClientEngineFactory]);
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (PlatformUtils_getInstance().d1o_1) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.n1k(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack);
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $cont) {
    var tmp = new $executeWebSocketRequestCOROUTINE$17($this, request, callContext, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  JsClientEngine$createWebSocket$headers_capturingHack$1.$metadata$ = classMeta();
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString$default(values, ',', null, null, 0, null, null, 62, null);
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$16(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2v_1 = _this__u8e3s4;
    this.t2v_1 = data;
  }
  $executeCOROUTINE$16.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 6;
            this.pd_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u2v_1 = suspendResult;
            this.v2v_1 = this.t2v_1.w28_1.y1i(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.t2v_1)) {
              this.pd_1 = 5;
              suspendResult = executeWebSocketRequest(this.s2v_1, this.t2v_1, this.u2v_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.pd_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var tmp_0 = this;
            tmp_0.w2v_1 = GMTDate$default(null, 1, null);
            this.pd_1 = 3;
            suspendResult = toRaw(this.t2v_1, this.v2v_1, this.u2v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.x2v_1 = suspendResult;
            this.pd_1 = 4;
            suspendResult = commonFetch(this.t2v_1.r28_1.toString(), this.x2v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_3().a1v_1;
            var body = readBody(CoroutineScope_0(this.u2v_1), rawResponse);
            return new HttpResponseData(status, this.w2v_1, headers, version, body, this.u2v_1);
          case 5:
            return suspendResult;
          case 6:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 6) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$16.$metadata$ = classMeta('$executeCOROUTINE$16', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $executeWebSocketRequestCOROUTINE$17(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2v_1 = _this__u8e3s4;
    this.f2v_1 = request;
    this.g2v_1 = callContext;
  }
  $executeWebSocketRequestCOROUTINE$17.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 4;
            var tmp_0 = this;
            tmp_0.h2v_1 = GMTDate$default(null, 1, null);
            this.i2v_1 = this.f2v_1.r28_1.toString();
            this.j2v_1 = createWebSocket(this.e2v_1, this.i2v_1, this.f2v_1.t28_1);
            this.qd_1 = 2;
            this.pd_1 = 1;
            suspendResult = awaitConnection(this.j2v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.qd_1 = 4;
            this.pd_1 = 3;
            continue $sm;
          case 2:
            this.qd_1 = 4;
            var tmp_1 = this.sd_1;
            if (tmp_1 instanceof Error) {
              var cause = this.sd_1;
              cancel_3(this.g2v_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.i2v_1, cause));
              throw cause;
            } else {
              throw this.sd_1;
            }

            break;
          case 3:
            this.qd_1 = 4;
            var session = new JsWebSocketSession(this.g2v_1, this.j2v_1);
            return new HttpResponseData(Companion_getInstance_1().k1v_1, this.h2v_1, Companion_getInstance_4().i1q_1, Companion_getInstance_3().a1v_1, session, this.g2v_1);
          case 4:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 4) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $executeWebSocketRequestCOROUTINE$17.$metadata$ = classMeta('$executeWebSocketRequestCOROUTINE$17', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.b2w_1 = config;
    this.c2w_1 = Dispatchers_getInstance().mv_1;
    this.d2w_1 = setOf_0([Plugin_getInstance_4(), WebSocketCapability_getInstance()]);
    {
      var tmp0_check = this.b2w_1.o2a_1 == null;
      {
      }
      if (!tmp0_check) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Proxy unsupported in Js engine.';
        }
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  JsClientEngine.prototype.f24 = function () {
    return this.b2w_1;
  };
  JsClientEngine.prototype.i2a = function () {
    return this.c2w_1;
  };
  JsClientEngine.prototype.y28 = function () {
    return this.d2w_1;
  };
  JsClientEngine.prototype.g2a = function (data, $cont) {
    var tmp = new $executeCOROUTINE$16(this, data, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  JsClientEngine.$metadata$ = classMeta('JsClientEngine', undefined, undefined, undefined, undefined, HttpClientEngineBase.prototype);
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $cont) {
    var tmp$ret$1;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.cp();
      var tmp$ret$0;
      $l$block: {
        if (cancellable.kn()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
        _this__u8e3s4.addEventListener('open', eventListener);
        _this__u8e3s4.addEventListener('error', eventListener);
        cancellable.qn(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
      }
      tmp$ret$1 = cancellable.lp();
    }
    return tmp$ret$1;
  }
  function asString(_this__u8e3s4) {
    var tmp$ret$4;
    {
      {
      }
      var tmp$ret$3;
      {
        var tmp0_apply = StringBuilder_init_$Create$();
        {
        }
        {
          var tmp = JSON;
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
              }
              tmp$ret$1 = tmp$ret$0;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp0_apply.fc(tmp.stringify(_this__u8e3s4, tmp$ret$2));
        }
        tmp$ret$3 = tmp0_apply;
      }
      tmp$ret$4 = tmp$ret$3.toString();
    }
    return tmp$ret$4;
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].', void 1);
    this.e2w_1 = origin;
    captureStack(this, JsError);
  }
  JsError.$metadata$ = classMeta('JsError', undefined, undefined, undefined, undefined, Error.prototype);
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.u1k(key, value);
      return Unit_getInstance();
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      var tmp$ret$0;
      {
        tmp$ret$0 = $this_mapToKtor;
      }
      tmp$ret$0.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda($cancellable, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_success = Companion_getInstance_5();
            tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
          }
          tmp$ret$1 = $cancellable.y2(tmp$ret$0);
        }
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        {
          var tmp0_resumeWithException = new WebSocketException(asString(event));
          var tmp$ret$2;
          {
            var tmp0_failure = Companion_getInstance_5();
            tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
          }
          tmp$ret$3 = $cancellable.y2(tmp$ret$2);
        }
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        tmp = $this_awaitConnection.close();
      }
      return Unit_getInstance();
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $cont) {
    var tmp = new $toRawCOROUTINE$18(_this__u8e3s4, clientConfig, callContext, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  }
  function buildObject(block) {
    var tmp$ret$0;
    {
      var tmp = {};
      var tmp0_apply = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      {
      }
      block(tmp0_apply);
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_getInstance();
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.b2x_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  toRaw$slambda.prototype.y27 = function ($this$writer, $cont) {
    var tmp = this.z27($this$writer, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  toRaw$slambda.prototype.ae = function (p1, $cont) {
    return this.y27((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toRaw$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.pd_1 = 1;
            suspendResult = this.b2x_1.x1z(this.c2x_1.rw(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 2) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  toRaw$slambda.prototype.z27 = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.b2x_1, completion);
    i.c2x_1 = $this$writer;
    return i;
  };
  toRaw$slambda.$metadata$ = classMeta('toRaw$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.y27($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.s28_1.y1u_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.b24_1) {
        var tmp$ret$2;
        {
          var tmp0__get_FOLLOW__lsxog0 = null;
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'follow';
            }
            var tmp0_unsafeCast = tmp$ret$0;
            tmp$ret$1 = tmp0_unsafeCast;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp = tmp$ret$2;
      } else {
        var tmp$ret$5;
        {
          var tmp1__get_MANUAL__wgvzkm = null;
          var tmp$ret$4;
          {
            var tmp$ret$3;
            {
              tmp$ret$3 = 'manual';
            }
            var tmp0_unsafeCast_0 = tmp$ret$3;
            tmp$ret$4 = tmp0_unsafeCast_0;
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp = tmp$ret$5;
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        {
          {
          }
          tmp$ret$6 = $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
        }
      }
      return Unit_getInstance();
    };
  }
  function $toRawCOROUTINE$18(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n2w_1 = _this__u8e3s4;
    this.o2w_1 = clientConfig;
    this.p2w_1 = callContext;
  }
  $toRawCOROUTINE$18.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 4;
            this.q2w_1 = {};
            mergeHeaders(this.n2w_1.t28_1, this.n2w_1.u28_1, toRaw$lambda(this.q2w_1));
            this.r2w_1 = this.n2w_1.u28_1;
            var tmp_0 = this.r2w_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.s2w_1 = this.r2w_1.z1z();
              this.pd_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.r2w_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.pd_1 = 2;
                var tmp_2 = this.r2w_1.v1z();
                suspendResult = tmp_2.q19(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.r2w_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  this.pd_1 = 1;
                  var tmp_4 = GlobalScope_getInstance();
                  var tmp_5 = writer$default(tmp_4, this.p2w_1, false, toRaw$slambda_0(this.r2w_1, null), 2, null).rw();
                  suspendResult = tmp_5.q19(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.s2w_1 = null;
                  this.pd_1 = 3;
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_6 = this;
            tmp_6.s2w_1 = readBytes$default(ARGUMENT, 0, 1, null);
            this.pd_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            var tmp_7 = this;
            tmp_7.s2w_1 = readBytes$default(ARGUMENT_0, 0, 1, null);
            this.pd_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.s2w_1;
            return buildObject(toRaw$lambda_0(this.n2w_1, this.q2w_1, this.o2w_1, bodyBytes));
          case 4:
            throw this.sd_1;
        }
      } catch ($p) {
        if (this.qd_1 === 4) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  $toRawCOROUTINE$18.$metadata$ = classMeta('$toRawCOROUTINE$18', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function asByteArray(_this__u8e3s4) {
    var tmp$ret$0;
    {
      var tmp0_asDynamic = new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
      tmp$ret$0 = tmp0_asDynamic;
    }
    return tmp$ret$0;
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().n1b();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer$default(_this__u8e3s4, null, false, channelFromStream$slambda_0(stream, null), 3, null).rw();
  }
  function readChunk(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.cp();
      {
        var tmp = _this__u8e3s4.read();
        var tmp_0 = tmp.then(readChunk$lambda(cancellable));
        tmp_0.catch(readChunk$lambda_0(cancellable));
      }
      tmp$ret$0 = cancellable.lp();
    }
    return tmp$ret$0;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.l2x_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  channelFromStream$slambda.prototype.y27 = function ($this$writer, $cont) {
    var tmp = this.z27($this$writer, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  channelFromStream$slambda.prototype.ae = function (p1, $cont) {
    return this.y27((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  channelFromStream$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 6;
            this.n2x_1 = this.l2x_1.getReader();
            this.pd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.pd_1 = 8;
              continue $sm;
            }

            this.qd_1 = 5;
            this.pd_1 = 2;
            suspendResult = readChunk(this.n2x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o2x_1 = suspendResult;
            if (this.o2x_1 == null) {
              this.qd_1 = 6;
              this.pd_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.p2x_1 = this.o2x_1;
              this.pd_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.q2x_1 = this.p2x_1;
            this.pd_1 = 4;
            suspendResult = writeFully(this.m2x_1.rw(), asByteArray(this.q2x_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.qd_1 = 6;
            this.pd_1 = 7;
            continue $sm;
          case 5:
            this.qd_1 = 6;
            var tmp_1 = this.sd_1;
            if (tmp_1 instanceof Error) {
              var cause = this.sd_1;
              this.n2x_1.cancel(cause);
              throw cause;
            } else {
              throw this.sd_1;
            }

            break;
          case 6:
            throw this.sd_1;
          case 7:
            this.qd_1 = 6;
            this.pd_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.qd_1 === 6) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  channelFromStream$slambda.prototype.z27 = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.l2x_1, completion);
    i.m2x_1 = $this$writer;
    return i;
  };
  channelFromStream$slambda.$metadata$ = classMeta('channelFromStream$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.y27($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($cancellable) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_5();
        tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      }
      $cancellable.y2(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readChunk$lambda_0($cancellable) {
    return function (cause) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance_5();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        }
        tmp$ret$1 = $cancellable.y2(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $cont) {
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.cp();
      {
        var controller = AbortController_0();
        init.signal = controller.signal;
        cancellable.qn(commonFetch$lambda(controller));
        var tmp;
        if (PlatformUtils_getInstance().c1o_1) {
          tmp = fetch(input, init);
        } else {
          tmp = jsRequireNodeFetch()(input, init);
        }
        var promise = tmp;
        var tmp_0 = commonFetch$lambda_0(cancellable);
        promise.then(tmp_0, commonFetch$lambda_1(cancellable));
      }
      tmp$ret$0 = cancellable.lp();
    }
    return tmp$ret$0;
  }
  function readBody(_this__u8e3s4, response) {
    var tmp;
    if (PlatformUtils_getInstance().c1o_1) {
      tmp = readBodyBrowser(_this__u8e3s4, response);
    } else {
      tmp = readBodyNode(_this__u8e3s4, response);
    }
    return tmp;
  }
  function AbortController_0() {
    var tmp;
    if (PlatformUtils_getInstance().c1o_1) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      {
        throw Error_init_$Create$("Error loading module 'node-fetch': " + $p);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_5();
        tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      }
      $cancellable.y2(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_1($cancellable) {
    return function (it) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance_5();
        var tmp1_failure = Error_init_$Create$_0('Fail to fetch', it);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      }
      $cancellable.y2(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer$default(_this__u8e3s4, null, false, readBodyNode$slambda_0(response, null), 3, null).rw();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.gy(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.zx(cause);
      return $this_writer.rw().zx(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.hy(null, 1, null);
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.z2x_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  readBodyNode$slambda.prototype.y27 = function ($this$writer, $cont) {
    var tmp = this.z27($this$writer, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  readBodyNode$slambda.prototype.ae = function (p1, $cont) {
    return this.y27((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  readBodyNode$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.z2x_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.b2y_1 = tmp_1;
            var tmp_2 = this;
            tmp_2.c2y_1 = Channel$default(1, null, null, 6, null);
            this.b2y_1.on('data', readBodyNode$slambda$lambda(this.c2y_1, this.b2y_1));
            this.b2y_1.on('error', readBodyNode$slambda$lambda_0(this.c2y_1, this.a2y_1));
            this.b2y_1.on('end', readBodyNode$slambda$lambda_1(this.c2y_1));
            this.qd_1 = 5;
            this.d2y_1 = this.c2y_1.d();
            this.pd_1 = 1;
            continue $sm;
          case 1:
            this.pd_1 = 2;
            suspendResult = this.d2y_1.tw(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.pd_1 = 4;
              continue $sm;
            }

            this.e2y_1 = this.d2y_1.f();
            this.pd_1 = 3;
            suspendResult = writeFully(this.a2y_1.rw(), this.e2y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.b2y_1.resume();
            this.pd_1 = 1;
            continue $sm;
          case 4:
            this.qd_1 = 6;
            this.pd_1 = 7;
            continue $sm;
          case 5:
            this.qd_1 = 6;
            var tmp_3 = this.sd_1;
            if (tmp_3 instanceof Error) {
              var cause = this.sd_1;
              this.b2y_1.destroy(cause);
              throw cause;
            } else {
              throw this.sd_1;
            }

            break;
          case 6:
            throw this.sd_1;
          case 7:
            this.qd_1 = 6;
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.qd_1 === 6) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  readBodyNode$slambda.prototype.z27 = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.z2x_1, completion);
    i.a2y_1 = $this$writer;
    return i;
  };
  readBodyNode$slambda.$metadata$ = classMeta('readBodyNode$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.y27($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    var tmp$ret$1;
    {
      var tmp0_let = Companion_getInstance_6().r20(_this__u8e3s4);
      {
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_let == null ? true : equals(tmp0_let, Codes_CLOSED_ABNORMALLY_getInstance());
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = it;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      var event = tmp$ret$1;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        var tmp$ret$3;
        {
          var tmp0_unsafeCast = new Int8Array(data);
          var tmp$ret$2;
          {
            tmp$ret$2 = tmp0_unsafeCast;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.h2y_1.xp(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.i2y_1.gy(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = new WebSocketException('' + it);
      this$0.h2y_1.xp(cause);
      this$0.i2y_1.zx(cause);
      this$0.j2y_1.xl(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.h2y_1.wp(reason);
      this$0.i2y_1.gy(Close_init_$Create$(reason));
      this$0.i2y_1.hy(null, 1, null);
      this$0.j2y_1.xl(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.v2y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsWebSocketSession$slambda.prototype.q1a = function ($this$launch, $cont) {
    var tmp = this.r1a($this$launch, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  JsWebSocketSession$slambda.prototype.ae = function (p1, $cont) {
    return this.q1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  JsWebSocketSession$slambda.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 10;
            var tmp_0 = this;
            tmp_0.x2y_1 = this.v2y_1.j2y_1;
            this.pd_1 = 1;
            continue $sm;
          case 1:
            this.z2y_1 = null;
            this.pd_1 = 2;
            continue $sm;
          case 2:
            this.pd_1 = 3;
            continue $sm;
          case 3:
            this.qd_1 = 9;
            this.qd_1 = 8;
            this.b2z_1 = this.x2y_1.d();
            this.pd_1 = 4;
            continue $sm;
          case 4:
            this.pd_1 = 5;
            suspendResult = this.b2z_1.tw(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.pd_1 = 6;
              continue $sm;
            }

            var e = this.b2z_1.f();
            var tmp0_subject = e.f21_1;
            var tmp0 = tmp0_subject.xc();
            switch (tmp0) {
              case 0:
                var text = e.g21_1;
                this.v2y_1.g2y_1.send(String$default(text, 0, 0, null, 14, null));
                break;
              case 1:
                var tmp_1 = e.g21_1;
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.v2y_1.g2y_1.send(frameData);
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = BytePacketBuilder_init_$Create$(null, 1, null);
                  try {
                    writeFully$default(builder, e.g21_1, 0, 0, 6, null);
                    tmp$ret$0 = builder.l17();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      builder.rq();
                      throw $p;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.n1e(0, 0, 3, null);
                this.v2y_1.h2y_1.wp(new CloseReason(code, reason));
                ;
                if (isReservedStatusCode(code, this.v2y_1)) {
                  this.v2y_1.g2y_1.close();
                } else {
                  this.v2y_1.g2y_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.pd_1 = 4;
            continue $sm;
          case 6:
            this.a2z_1 = Unit_getInstance();
            this.qd_1 = 10;
            this.pd_1 = 7;
            var tmp_2 = this;
            continue $sm;
          case 7:
            var tmp_3 = this;
            tmp_3.y2y_1 = cancelConsumed(this.x2y_1, this.z2y_1);
            this.pd_1 = 12;
            continue $sm;
          case 8:
            this.qd_1 = 9;
            var tmp_4 = this.sd_1;
            if (tmp_4 instanceof Error) {
              var e_0 = this.sd_1;
              var tmp_5 = this;
              this.z2y_1 = e_0;
              throw e_0;
            } else {
              throw this.sd_1;
            }

            break;
          case 9:
            this.qd_1 = 10;
            var t = this.sd_1;
            cancelConsumed(this.x2y_1, this.z2y_1);
            throw t;
          case 10:
            throw this.sd_1;
          case 11:
            cancelConsumed(this.x2y_1, this.z2y_1);
            if (false) {
              this.pd_1 = 1;
              continue $sm;
            }

            this.pd_1 = 12;
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.qd_1 === 10) {
          throw $p;
        } else {
          this.pd_1 = this.qd_1;
          this.sd_1 = $p;
        }
      }
     while (true);
  };
  JsWebSocketSession$slambda.prototype.r1a = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.v2y_1, completion);
    i.w2y_1 = $this$launch;
    return i;
  };
  JsWebSocketSession$slambda.$metadata$ = classMeta('JsWebSocketSession$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.q1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        tmp = this$0.g2y_1.close();
      } else {
        tmp = this$0.g2y_1.close(Codes_INTERNAL_ERROR_getInstance().o20_1, 'Client failed');
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.f2y_1 = coroutineContext;
    this.g2y_1 = websocket;
    var tmp = this;
    tmp.h2y_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.i2y_1 = Channel$default(2147483647, null, null, 6, null);
    var tmp_1 = this;
    Factory_getInstance();
    tmp_1.j2y_1 = Channel$default(2147483647, null, null, 6, null);
    this.k2y_1 = this.i2y_1;
    this.l2y_1 = this.j2y_1;
    this.m2y_1 = this.h2y_1;
    var tmp$ret$2;
    {
      var tmp0__get_ARRAYBUFFER__ua4cvm = null;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'arraybuffer';
        }
        var tmp0_unsafeCast = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    this.g2y_1.binaryType = tmp$ret$2;
    this.g2y_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.g2y_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.g2y_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch$default(this, null, null, JsWebSocketSession$slambda_0(this, null), 3, null);
    var tmp0_safe_receiver = this.f2y_1.b3(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.rl(JsWebSocketSession$lambda_2(this));
    }
  }
  JsWebSocketSession.prototype.qk = function () {
    return this.f2y_1;
  };
  JsWebSocketSession.$metadata$ = classMeta('JsWebSocketSession', [DefaultWebSocketSession]);
  function unwrapCancellationException(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  HttpClientEngineBase.prototype.y28 = get_supportedCapabilities;
  HttpClientEngineBase.prototype.g24 = install;
  KtorCallContextElement.prototype.b3 = get;
  KtorCallContextElement.prototype.h3 = fold;
  KtorCallContextElement.prototype.g3 = minusKey;
  KtorCallContextElement.prototype.i3 = plus;
  HttpRequest$1.prototype.qk = get_coroutineContext;
  JsClientEngine.prototype.g24 = install;
  //endregion
  //region block: init
  KTOR_DEFAULT_USER_AGENT = 'Ktor client';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HttpClient$default;
  _.$_$.b = HttpRequestBuilder;
  _.$_$.c = url;
  _.$_$.d = HttpStatement;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-ir.js.map