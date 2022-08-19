(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js', './ktor-ktor-client-json-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./ktor-ktor-client-json-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-serialization-js-ir'. Its dependency 'ktor-ktor-client-json-js-ir' was not found. Please, check whether 'ktor-ktor-client-json-js-ir' is loaded prior to 'ktor-ktor-client-serialization-js-ir'.");
    }
    root['ktor-ktor-client-serialization-js-ir'] = factory(typeof this['ktor-ktor-client-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['ktor-ktor-client-json-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_client_json) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var Json$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var JsonSerializer = kotlin_io_ktor_ktor_client_json.$_$.a;
  var classMeta = kotlin_kotlin.$_$.q5;
  var get_serializersStore = kotlin_io_ktor_ktor_client_json.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function KotlinxSerializer$Companion$DefaultJson$lambda() {
    return function ($this$Json) {
      $this$Json.a30_1 = false;
      $this$Json.z2z_1 = false;
      $this$Json.h30_1 = true;
      $this$Json.f30_1 = false;
      return Unit_getInstance();
    };
  }
  function KotlinxSerializer_init_$Init$(json, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      json = Companion_getInstance().d31_1;
    KotlinxSerializer.call($this, json);
    return $this;
  }
  function KotlinxSerializer_init_$Create$(json, $mask0, $marker) {
    return KotlinxSerializer_init_$Init$(json, $mask0, $marker, Object.create(KotlinxSerializer.prototype));
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.d31_1 = Json$default(null, KotlinxSerializer$Companion$DefaultJson$lambda(), 1, null);
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KotlinxSerializer(json) {
    Companion_getInstance();
    this.e31_1 = json;
  }
  KotlinxSerializer.$metadata$ = classMeta('KotlinxSerializer', [JsonSerializer]);
  var initializer;
  function SerializerInitializer() {
    SerializerInitializer_instance = this;
    {
      var tmp0_plusAssign = get_serializersStore();
      var tmp1_plusAssign = KotlinxSerializer_init_$Create$(null, 1, null);
      tmp0_plusAssign.b(tmp1_plusAssign);
    }
  }
  SerializerInitializer.$metadata$ = objectMeta('SerializerInitializer');
  var SerializerInitializer_instance;
  function SerializerInitializer_getInstance() {
    if (SerializerInitializer_instance == null)
      new SerializerInitializer();
    return SerializerInitializer_instance;
  }
  //region block: init
  initializer = SerializerInitializer_getInstance();
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-serialization-js-ir.js.map