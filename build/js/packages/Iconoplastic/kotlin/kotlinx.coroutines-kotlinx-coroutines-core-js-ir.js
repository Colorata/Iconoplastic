(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.b8;
  var isObject = kotlin_kotlin.$_$.c6;
  var Unit_getInstance = kotlin_kotlin.$_$.w2;
  var plus = kotlin_kotlin.$_$.d5;
  var get = kotlin_kotlin.$_$.z4;
  var fold = kotlin_kotlin.$_$.y4;
  var minusKey = kotlin_kotlin.$_$.a5;
  var Continuation = kotlin_kotlin.$_$.x4;
  var classMeta = kotlin_kotlin.$_$.q5;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.p2;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.q4;
  var CoroutineImpl = kotlin_kotlin.$_$.e5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p4;
  var interfaceMeta = kotlin_kotlin.$_$.y5;
  var isInterface = kotlin_kotlin.$_$.b6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var toString = kotlin_kotlin.$_$.o8;
  var toString_0 = kotlin_kotlin.$_$.l6;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var hashCode = kotlin_kotlin.$_$.x5;
  var equals = kotlin_kotlin.$_$.s5;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.j2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.l2;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.t4;
  var Key_getInstance = kotlin_kotlin.$_$.o2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.s4;
  var get_0 = kotlin_kotlin.$_$.u4;
  var minusKey_0 = kotlin_kotlin.$_$.v4;
  var ContinuationInterceptor = kotlin_kotlin.$_$.w4;
  var Key = kotlin_kotlin.$_$.c5;
  var Element = kotlin_kotlin.$_$.b5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var getStringHashCode = kotlin_kotlin.$_$.w5;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var Enum = kotlin_kotlin.$_$.t7;
  var startCoroutine = kotlin_kotlin.$_$.h5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.l8;
  var Long = kotlin_kotlin.$_$.y7;
  var intercepted = kotlin_kotlin.$_$.r4;
  var Companion_getInstance = kotlin_kotlin.$_$.t2;
  var RuntimeException = kotlin_kotlin.$_$.a8;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.k5;
  var Error_0 = kotlin_kotlin.$_$.u7;
  var Error_init_$Init$ = kotlin_kotlin.$_$.h1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var anyToString = kotlin_kotlin.$_$.j5;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.n8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var CancellationException = kotlin_kotlin.$_$.o4;
  var ArrayList = kotlin_kotlin.$_$.x2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i2;
  var createFailure = kotlin_kotlin.$_$.g8;
  var UnsupportedOperationException = kotlin_kotlin.$_$.d8;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var fillArrayVal = kotlin_kotlin.$_$.u5;
  var fill = kotlin_kotlin.$_$.p3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var fill$default = kotlin_kotlin.$_$.e;
  var ensureNotNull = kotlin_kotlin.$_$.h8;
  var NoSuchElementException = kotlin_kotlin.$_$.z7;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var IllegalStateException = kotlin_kotlin.$_$.x7;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.o1;
  var arrayCopy = kotlin_kotlin.$_$.i3;
  var toLong = kotlin_kotlin.$_$.j6;
  var toLongOrNull = kotlin_kotlin.$_$.m7;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.c1;
  var coerceIn = kotlin_kotlin.$_$.q6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.wl(cause) : $handler(cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.sl(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  $awaitCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$0.prototype.constructor = $awaitCOROUTINE$0;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.ln(value, idempotent) : $handler(value, idempotent);
  }
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  $awaitCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$1.prototype.constructor = $awaitCOROUTINE$1;
  CompletableDeferredImpl.prototype = Object.create(JobSupport.prototype);
  CompletableDeferredImpl.prototype.constructor = CompletableDeferredImpl;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  CoroutineName.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineName.prototype.constructor = CoroutineName;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  AwaitContinuation.prototype.constructor = AwaitContinuation;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  SupervisorJobImpl.prototype = Object.create(JobImpl.prototype);
  SupervisorJobImpl.prototype.constructor = SupervisorJobImpl;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveReceiveOnCancel.prototype.constructor = RemoveReceiveOnCancel;
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  ReceiveHasNext.prototype = Object.create(Receive.prototype);
  ReceiveHasNext.prototype.constructor = ReceiveHasNext;
  function close$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.zx(cause) : $handler(cause);
  }
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.wl(cause) : $handler(cause);
  }
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  SendBuffered.prototype = Object.create(Send.prototype);
  SendBuffered.prototype.constructor = SendBuffered;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  Closed_0.prototype = Object.create(Failed.prototype);
  Closed_0.prototype.constructor = Closed_0;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  CloseableCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  CloseableCoroutineDispatcher.prototype.constructor = CloseableCoroutineDispatcher;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob)
      this.mk(parentContext.b3(Key_getInstance_3()));
    this.pk_1 = parentContext.i3(this);
  }
  AbstractCoroutine.prototype.x2 = function () {
    return this.pk_1;
  };
  AbstractCoroutine.prototype.qk = function () {
    return this.pk_1;
  };
  AbstractCoroutine.prototype.rk = function () {
    return JobSupport.prototype.rk.call(this);
  };
  AbstractCoroutine.prototype.sk = function (value) {
  };
  AbstractCoroutine.prototype.tk = function (cause, handled) {
  };
  AbstractCoroutine.prototype.uk = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.vk = function (state) {
    if (state instanceof CompletedExceptionally)
      this.tk(state.wk_1, state.yk());
    else {
      this.sk((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.y2 = function (result) {
    var state = this.zk(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.al(state);
  };
  AbstractCoroutine.prototype.al = function (state) {
    return this.bl(state);
  };
  AbstractCoroutine.prototype.cl = function (exception) {
    handleCoroutineException(this.pk_1, exception);
  };
  AbstractCoroutine.prototype.dl = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.pk_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.dl.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.dl.call(this);
  };
  AbstractCoroutine.prototype.el = function (start, receiver, block) {
    start.hl(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.km() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.el(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function async(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.km() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.el(start, coroutine, block);
    return coroutine;
  }
  function async$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return async(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.im = function (exception) {
    handleCoroutineException(this.x2(), exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.rm_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.nl = function () {
    startCoroutineCancellable_0(this.rm_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.an_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$0.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.pd_1 = 1;
            suspendResult = this.an_1.bn(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$0.$metadata$ = classMeta('$awaitCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.fn = function ($cont) {
    var tmp = new $awaitCOROUTINE$0(this, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  DeferredCoroutine.$metadata$ = classMeta('DeferredCoroutine', [Deferred, SelectClause1], undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.jn_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.nl = function () {
    startCoroutineCancellable_0(this.jn_1, this);
  };
  LazyDeferredCoroutine.$metadata$ = classMeta('LazyDeferredCoroutine', undefined, undefined, undefined, undefined, DeferredCoroutine.prototype);
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return _this__u8e3s4.qn(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.tn_1 = handle;
  }
  DisposeOnCancel.prototype.un = function (cause) {
    return this.tn_1.vn();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.tn_1 + ']';
  };
  DisposeOnCancel.$metadata$ = classMeta('DisposeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.co();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp_0;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_safe_receiver.jo();
        }
        if (tmp$ret$0) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp$ret$1 = tmp_0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.kl();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.mo())) {
      var tmp_0 = $this.eo_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).ko();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.eo_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.no(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException($this.x2(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    {
      var tmp0_loop = $this.go_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.ak_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.go_1.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop = $this.go_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.ak_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.go_1.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:
              throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.x2().b3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var handle = parent.tl(true, false, tmp$ret$1, 2, null);
    $this.io_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.eo_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oo($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.po();
    $this.qo(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    {
      var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop = $this.ho_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
            var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this.ho_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CancelledContinuation) {
              if (tmp1__anonymous__uwfjfc.vo()) {
                var tmp1_safe_receiver = onCancellation;
                if (tmp1_safe_receiver == null)
                  null;
                else {
                  var tmp$ret$1;
                  {
                    {
                    }
                    tmp$ret$1 = $this.ro(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.g1());
                  }
                }
                return Unit_getInstance();
              }
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    {
      var tmp0_loop = $this.ho_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
            var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.mo(), onCancellation, idempotent);
            if (!$this.ho_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            return get_RESUME_TOKEN();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              var tmp;
              if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.zo_1 === idempotent : false) {
                {
                }
                tmp = get_RESUME_TOKEN();
              } else {
                tmp = null;
              }
              return tmp;
            } else {
              return null;
            }
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.po();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.eo_1 = delegate;
    {
    }
    this.fo_1 = this.eo_1.x2();
    this.go_1 = atomic$int$1(0);
    this.ho_1 = atomic$ref$1(Active_getInstance());
    this.io_1 = null;
  }
  CancellableContinuationImpl.prototype.bp = function () {
    return this.eo_1;
  };
  CancellableContinuationImpl.prototype.x2 = function () {
    return this.fo_1;
  };
  CancellableContinuationImpl.prototype.kl = function () {
    return this.ho_1.zj_1;
  };
  CancellableContinuationImpl.prototype.ll = function () {
    var tmp = this.kl();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.kn = function () {
    var tmp = this.kl();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.cp = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ll()) {
      handle.vn();
      this.io_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.jo = function () {
    {
    }
    {
    }
    var state = this.ho_1.zj_1;
    {
    }
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.zo_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.po();
      return false;
    }
    this.go_1.ak_1 = 0;
    this.ho_1.zj_1 = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.dp = function () {
    return this.kl();
  };
  CancellableContinuationImpl.prototype.ep = function (takenState, cause) {
    var tmp0_loop = this.ho_1;
    while (true) {
      {
        var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          throw IllegalStateException_init_$Create$('Not completed');
        } else {
          if (tmp0_subject instanceof CompletedExceptionally)
            return Unit_getInstance();
          else {
            if (tmp0_subject instanceof CompletedContinuation) {
              {
                var tmp0_check = !tmp1__anonymous__uwfjfc.fp();
                {
                }
                if (!tmp0_check) {
                  var tmp$ret$0;
                  {
                    tmp$ret$0 = 'Must be called at most once';
                  }
                  var message = tmp$ret$0;
                  throw IllegalStateException_init_$Create$(toString_0(message));
                }
              }
              var update = tmp1__anonymous__uwfjfc.gp(null, null, null, null, cause, 15, null);
              if (this.ho_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                tmp1__anonymous__uwfjfc.hp(this, cause);
                return Unit_getInstance();
              }
            } else {
              if (this.ho_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
                return Unit_getInstance();
              }
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.qo = function (cause) {
    {
      var tmp0_loop = this.ho_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
            return false;
          var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
          if (!this.ho_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$1;
            {
              {
              }
              tmp$ret$1 = this.ip(tmp0_safe_receiver, cause);
            }
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, this.mo());
          return true;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.jp = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.qo(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.ip = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this.x2(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.ro = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.x2(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.kp = function (parent) {
    return parent.ol();
  };
  CancellableContinuationImpl.prototype.lp = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.io_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.kl();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.wk_1, this);
    if (get_isCancellableMode(this.mo())) {
      var job = this.x2().b3(Key_getInstance_3());
      if (!(job == null) ? !job.rk() : false) {
        var cause = job.ol();
        this.ep(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.mp(state);
  };
  CancellableContinuationImpl.prototype.y2 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.mo();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.sn = function (value, onCancellation) {
    return resumeImpl(this, value, this.mo(), onCancellation);
  };
  CancellableContinuationImpl.prototype.qn = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    {
      var tmp0_loop = this.ho_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (tmp0_subject instanceof Active) {
            if (this.ho_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
              return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CancelHandler)
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            else {
              if (tmp0_subject instanceof CompletedExceptionally) {
                if (!tmp1__anonymous__uwfjfc.np())
                  multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
                if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
                  var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
                  callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.wk_1);
                }
                return Unit_getInstance();
              } else {
                if (tmp0_subject instanceof CompletedContinuation) {
                  if (!(tmp1__anonymous__uwfjfc.xo_1 == null))
                    multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  if (tmp1__anonymous__uwfjfc.fp()) {
                    callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.ap_1);
                    return Unit_getInstance();
                  }
                  var update = tmp1__anonymous__uwfjfc.gp(null, cancelHandler, null, null, null, 29, null);
                  if (this.ho_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                    return Unit_getInstance();
                } else {
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
                  if (this.ho_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                    return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.po = function () {
    var tmp0_elvis_lhs = this.io_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.vn();
    this.io_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.ln = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.nn = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.on = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.pn = function (token) {
    {
    }
    dispatchResume(this, this.mo());
  };
  CancellableContinuationImpl.prototype.rn = function (_this__u8e3s4, value) {
    var tmp = this.eo_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xn_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.mo();
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.mp = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.wo_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.op = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.op.call(this, state);
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
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.eo_1);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.dl() + '(' + toDebugString(this.eo_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.dl = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = classMeta('CancellableContinuationImpl', [CancellableContinuation, CoroutineStackFrame], undefined, undefined, undefined, DispatchedTask.prototype);
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = classMeta('CancelHandler', [NotCompleted], undefined, undefined, undefined, CancelHandlerBase.prototype);
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = objectMeta('Active', [NotCompleted]);
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = interfaceMeta('NotCompleted');
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.wo_1 = result;
    this.xo_1 = cancelHandler;
    this.yo_1 = onCancellation;
    this.zo_1 = idempotentResume;
    this.ap_1 = cancelCause;
  }
  CompletedContinuation.prototype.rp = function () {
    return this.xo_1;
  };
  CompletedContinuation.prototype.sp = function () {
    return this.zo_1;
  };
  CompletedContinuation.prototype.tp = function () {
    return this.ap_1;
  };
  CompletedContinuation.prototype.fp = function () {
    return !(this.ap_1 == null);
  };
  CompletedContinuation.prototype.hp = function (cont, cause) {
    var tmp0_safe_receiver = this.xo_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = cont.ip(tmp0_safe_receiver, cause);
      }
    }
    var tmp1_safe_receiver = this.yo_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = cont.ro(tmp1_safe_receiver, cause);
      }
    }
  };
  CompletedContinuation.prototype.up = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.gp = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.wo_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.xo_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.yo_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.zo_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.ap_1;
    return this.up(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.wo_1) + ', cancelHandler=' + this.xo_1 + ', onCancellation=' + this.yo_1 + ', idempotentResume=' + toString(this.zo_1) + ', cancelCause=' + this.ap_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.wo_1 == null ? 0 : hashCode(this.wo_1);
    result = imul(result, 31) + (this.xo_1 == null ? 0 : hashCode(this.xo_1)) | 0;
    result = imul(result, 31) + (this.yo_1 == null ? 0 : hashCode(this.yo_1)) | 0;
    result = imul(result, 31) + (this.zo_1 == null ? 0 : hashCode(this.zo_1)) | 0;
    result = imul(result, 31) + (this.ap_1 == null ? 0 : hashCode(this.ap_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.wo_1, tmp0_other_with_cast.wo_1))
      return false;
    if (!equals(this.xo_1, tmp0_other_with_cast.xo_1))
      return false;
    if (!equals(this.yo_1, tmp0_other_with_cast.yo_1))
      return false;
    if (!equals(this.zo_1, tmp0_other_with_cast.zo_1))
      return false;
    if (!equals(this.ap_1, tmp0_other_with_cast.ap_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = classMeta('CompletedContinuation');
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.vp_1 = handler;
  }
  InvokeOnCancel.prototype.un = function (cause) {
    this.vp_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.vp_1) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = classMeta('InvokeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  CompletableDeferred.$metadata$ = interfaceMeta('CompletableDeferred', [Deferred]);
  function CompletableDeferred_0(parent) {
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferred$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return CompletableDeferred_0(parent);
  }
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gq_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$1.prototype.zd = function () {
    var suspendResult = this.rd_1;
    $sm: do
      try {
        var tmp = this.pd_1;
        switch (tmp) {
          case 0:
            this.qd_1 = 2;
            this.pd_1 = 1;
            suspendResult = this.gq_1.bn(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$1.$metadata$ = classMeta('$awaitCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.mk(parent);
  }
  CompletableDeferredImpl.prototype.vl = function () {
    return true;
  };
  CompletableDeferredImpl.prototype.fn = function ($cont) {
    var tmp = new $awaitCOROUTINE$1(this, $cont);
    tmp.rd_1 = Unit_getInstance();
    tmp.sd_1 = null;
    return tmp.zd();
  };
  CompletableDeferredImpl.prototype.wp = function (value) {
    return this.jq(value);
  };
  CompletableDeferredImpl.prototype.xp = function (exception) {
    return this.jq(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  CompletableDeferredImpl.$metadata$ = classMeta('CompletableDeferredImpl', [CompletableDeferred, SelectClause1], undefined, undefined, undefined, JobSupport.prototype);
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = interfaceMeta('CompletableJob', [Job]);
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.wk_1 = cause;
    this.xk_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.g1 = function () {
    return this.wk_1;
  };
  CompletedExceptionally.prototype.yk = function () {
    return this.xk_1.dk_1;
  };
  CompletedExceptionally.prototype.np = function () {
    return this.xk_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.wk_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.uo_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.vo = function () {
    return this.uo_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = classMeta('CancelledContinuation', undefined, undefined, undefined, undefined, CompletedExceptionally.prototype);
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    {
      {
      }
      var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
      var tmp;
      if (exception == null) {
        var tmp$ret$0;
        {
          var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
          var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__q1qw7t;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        {
          var tmp_1 = recoverStackTrace(exception, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
    }
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    {
      {
      }
      var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
      var tmp;
      if (exception == null) {
        var tmp$ret$0;
        {
          var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
          var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
    }
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.mq_1 = result;
    this.nq_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.mq_1) + ', onCancellation=' + this.nq_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.mq_1 == null ? 0 : hashCode(this.mq_1);
    result = imul(result, 31) + hashCode(this.nq_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.mq_1, tmp0_other_with_cast.mq_1))
      return false;
    if (!equals(this.nq_1, tmp0_other_with_cast.nq_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = classMeta('CompletedWithCancellation');
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5() {
    return function (it) {
      return it instanceof CoroutineDispatcher ? it : null;
    };
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5());
  }
  Key_0.$metadata$ = objectMeta('Key', undefined, undefined, undefined, undefined, AbstractCoroutineContextKey.prototype);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.pq = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.z2 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.a3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.rq();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.b3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.sq(context, exception);
          return Unit_getInstance();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
  }
  CoroutineExceptionHandler.$metadata$ = interfaceMeta('CoroutineExceptionHandler', [Element]);
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    {
      var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply;
    }
    return tmp$ret$0;
  }
  function CoroutineExceptionHandler_0(handler) {
    return new _no_name_provided__qut3iv(handler);
  }
  function _no_name_provided__qut3iv($handler) {
    this.uq_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  _no_name_provided__qut3iv.prototype.sq = function (context, exception) {
    return this.uq_1(context, exception);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.wq_1 = name;
  }
  CoroutineName.prototype.toString = function () {
    return 'CoroutineName(' + this.wq_1 + ')';
  };
  CoroutineName.prototype.hashCode = function () {
    return getStringHashCode(this.wq_1);
  };
  CoroutineName.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.wq_1 === tmp0_other_with_cast.wq_1))
      return false;
    return true;
  };
  CoroutineName.$metadata$ = classMeta('CoroutineName', undefined, undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.b3(Key_getInstance_3()) == null)) {
      tmp = context;
    } else {
      tmp = context.i3(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function cancel(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.qk().b3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.wl(cause);
  }
  function cancel$default_1(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel(_this__u8e3s4, cause);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.qk = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = objectMeta('GlobalScope', [CoroutineScope]);
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.hl = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.xc();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        break;
      case 2:
        tmp = startCoroutine(block, receiver, completion);
        break;
      case 3:
        tmp = startCoroutineUndispatched(block, receiver, completion);
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.km = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = classMeta('CoroutineStart', undefined, undefined, undefined, undefined, Enum.prototype);
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = interfaceMeta('CopyableThrowable');
  function Deferred() {
  }
  Deferred.$metadata$ = interfaceMeta('Deferred', [Job]);
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function delay(timeMillis, $cont) {
    if (timeMillis.a1(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.cp();
      {
        Companion_getInstance();
        if (timeMillis.a1(new Long(-1, 2147483647)) < 0) {
          get_delay(cancellable.x2()).xq(timeMillis, cancellable);
        }
      }
      tmp$ret$0 = cancellable.lp();
    }
    return tmp$ret$0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.b3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.zq_1 = new Long(0, 0);
    this.ar_1 = false;
    this.br_1 = null;
  }
  EventLoop.prototype.cr = function () {
    var tmp0_elvis_lhs = this.br_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.gr();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.pp();
    return true;
  };
  EventLoop.prototype.hr = function (task) {
    var tmp0_elvis_lhs = this.br_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = new ArrayQueue();
        {
        }
        {
          this.br_1 = tmp0_also;
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.ir(task);
  };
  EventLoop.prototype.jr = function () {
    return this.zq_1.a1(delta(this, true)) >= 0;
  };
  EventLoop.prototype.kr = function () {
    var tmp0_safe_receiver = this.br_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lr();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.mr = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.zq_1 = tmp0_this.zq_1.b4(delta(this, unconfined));
    if (!unconfined)
      this.ar_1 = true;
  };
  EventLoop.prototype.nr = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.zq_1 = tmp0_this.zq_1.c4(delta(this, unconfined));
    if (this.zq_1.a1(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this.ar_1) {
      this.or();
    }
  };
  EventLoop.prototype.or = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.pr_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.qr = function () {
    var tmp0_elvis_lhs = this.pr_1.sr();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance().pr_1.tr(tmp0_also);
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = objectMeta('ThreadLocalEventLoop');
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = classMeta('CompletionHandlerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = classMeta('CoroutinesInternalError', undefined, undefined, undefined, undefined, Error_0.prototype);
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = interfaceMeta('DisposableHandle');
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  Job.$metadata$ = interfaceMeta('Job', [Element]);
  function ChildJob() {
  }
  ChildJob.$metadata$ = interfaceMeta('ChildJob', [Job]);
  function ParentJob() {
  }
  ParentJob.$metadata$ = interfaceMeta('ParentJob', [Job]);
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = interfaceMeta('ChildHandle', [DisposableHandle]);
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.vn = function () {
  };
  NonDisposableHandle.prototype.am = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = objectMeta('NonDisposableHandle', [DisposableHandle, ChildHandle]);
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.b3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.rk())
      throw _this__u8e3s4.ol();
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    return _this__u8e3s4.wl(CancellationException_init_$Create$_0(message, cause));
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.b3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_2(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = _this__u8e3s4.b3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wl(cause);
    }
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.ur_1 = isActive;
  }
  Empty.prototype.rk = function () {
    return this.ur_1;
  };
  Empty.prototype.vr = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.ur_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.rk = function () {
    return true;
  };
  NodeList.prototype.vr = function () {
    return this;
  };
  NodeList.prototype.zr = function (state) {
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
          tmp0_apply.fc('List{');
          tmp0_apply.fc(state);
          tmp0_apply.fc('}[');
          var first = true;
          {
            var cur = this.ds();
            while (!equals(cur, this)) {
              if (cur instanceof JobNode) {
                var tmp0__anonymous__q1qw7t = cur;
                if (first)
                  first = false;
                else {
                  tmp0_apply.fc(', ');
                }
                tmp0_apply.ec(tmp0__anonymous__q1qw7t);
              }
              cur = cur.as_1;
            }
          }
          tmp0_apply.fc(']');
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.zr('Active') : anyToString(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.vs = function () {
    var tmp = this.us_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.rk = function () {
    return true;
  };
  JobNode.prototype.vr = function () {
    return null;
  };
  JobNode.prototype.vn = function () {
    return this.vs().ul(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.vs()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.at_1.zj_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.at_1.zj_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wk_1;
    var wasCancelling = false;
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        wasCancelling = state.bt();
        var exceptions = state.ct(proposedException);
        var finalCause = getFinalRootCause($this, state, exceptions);
        if (!(finalCause == null))
          addSuppressedExceptions($this, finalCause, exceptions);
        tmp$ret$0 = finalCause;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.im(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).np();
      }
    }
    if (!wasCancelling)
      $this.fm(finalException);
    $this.vk(finalState);
    var casSuccess = $this.kk_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.m()) {
      if (state.bt()) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.uk() : tmp0_elvis_lhs, null, $this);
        }
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      var tmp0_iterator = exceptions.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$1;
        {
          tmp$ret$1 = !(element instanceof CancellationException);
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.h(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        var tmp0_iterator_0 = exceptions.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          var tmp$ret$3;
          {
            var tmp;
            if (!(element_0 === first)) {
              tmp = element_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.g() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.g());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.d();
    while (tmp0_iterator.e()) {
      var exception = tmp0_iterator.f();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.b(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        {
        }
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this.kk_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.fm(null);
    $this.vk(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.jl();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp0_safe_receiver.vn();
        tmp$ret$0 = $this.il(NonDisposableHandle_getInstance());
      }
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.wk_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.cl(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.vr();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.fm(cause);
    {
      var exception = null;
      {
        var cur = list.ds();
        while (!equals(cur, list)) {
          if (cur instanceof JobCancellingNode) {
            var tmp0__anonymous__q1qw7t = cur;
            try {
              tmp0__anonymous__q1qw7t.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver = exception;
                var tmp;
                if (tmp0_safe_receiver == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs = tmp;
                if (tmp1_elvis_lhs == null) {
                  var tmp$ret$1;
                  {
                    {
                    }
                    exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
                    tmp$ret$1 = Unit_getInstance();
                  }
                } else
                  tmp1_elvis_lhs;
              } else {
                throw $p;
              }
            }
          }
          cur = cur.as_1;
        }
      }
      var tmp0_safe_receiver_0 = exception;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp$ret$2;
        {
          {
          }
          tmp$ret$2 = $this.cl(tmp0_safe_receiver_0);
        }
      }
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.gm())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.jl();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.am(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    {
      var cur = _this__u8e3s4.ds();
      while (!equals(cur, _this__u8e3s4)) {
        if (cur instanceof JobNode) {
          var tmp0__anonymous__q1qw7t = cur;
          try {
            tmp0__anonymous__q1qw7t.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver = exception;
              var tmp;
              if (tmp0_safe_receiver == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs = tmp;
              if (tmp1_elvis_lhs == null) {
                var tmp$ret$1;
                {
                  {
                  }
                  exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
                  tmp$ret$1 = Unit_getInstance();
                }
              } else
                tmp1_elvis_lhs;
            } else {
              throw $p;
            }
          }
        }
        cur = cur.as_1;
      }
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      {
        {
        }
        tmp$ret$2 = $this.cl(tmp0_safe_receiver_0);
      }
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.ur_1)
        return 0;
      if (!$this.kk_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.nl();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.kk_1.atomicfu$compareAndSet(state, state.dt_1))
          return -1;
        $this.nl();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.us_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = $this.kl() === expect;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.ls(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.ur_1 ? list : new InactiveNodeList(list);
    $this.kk_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.ws(new NodeList());
    var tmp$ret$0;
    {
      tmp$ret$0 = state.as_1;
    }
    var list = tmp$ret$0;
    $this.kk_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = $this.kl();
          if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
            return false;
          if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
            return true;
        }
      }
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.cp();
      {
        var tmp$ret$1;
        {
          var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
          }
          tmp$ret$1 = tmp$ret$0;
        }
        disposeOnCancellation(cancellable, $this.rl(tmp$ret$1));
      }
      tmp$ret$2 = cancellable.lp();
    }
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = $this.kl();
          var tmp;
          if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
            tmp = true;
          } else {
            var tmp_0;
            if (tmp0__anonymous__q1qw7t instanceof Finishing) {
              tmp_0 = tmp0__anonymous__q1qw7t.et();
            } else {
              tmp_0 = false;
            }
            tmp = tmp_0;
          }
          if (tmp) {
            return get_COMPLETING_ALREADY();
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (!(finalState === get_COMPLETING_RETRY()))
            return finalState;
        }
      }
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.uk() : tmp0_elvis_lhs, null, $this);
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).dm();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block: {
          var tmp0__anonymous__q1qw7t = $this.kl();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Finishing) {
            var tmp$ret$4;
            {
              var tmp$ret$3;
              {
                if (tmp0__anonymous__q1qw7t.ft())
                  return get_TOO_LATE_TO_CANCEL();
                var wasCancelling = tmp0__anonymous__q1qw7t.bt();
                if (!(cause == null) ? true : !wasCancelling) {
                  var tmp0_elvis_lhs = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs == null) {
                    var tmp$ret$0;
                    {
                      var tmp0_also = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also;
                      }
                      tmp$ret$0 = tmp0_also;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs;
                  }
                  var causeException = tmp;
                  tmp0__anonymous__q1qw7t.gt(causeException);
                }
                var tmp$ret$2;
                {
                  var tmp1_takeIf = tmp0__anonymous__q1qw7t.ht();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = !wasCancelling;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf;
                  } else {
                    tmp_0 = null;
                  }
                  tmp$ret$2 = tmp_0;
                }
                tmp$ret$3 = tmp$ret$2;
              }
              tmp$ret$4 = tmp$ret$3;
            }
            var notifyRootCause = tmp$ret$4;
            var tmp1_safe_receiver = notifyRootCause;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp$ret$5;
              {
                {
                }
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__q1qw7t.xs_1, tmp1_safe_receiver);
              }
            }
            return get_COMPLETING_ALREADY();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var tmp2_elvis_lhs = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs == null) {
                var tmp$ret$6;
                {
                  var tmp0_also_0 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0;
                  }
                  tmp$ret$6 = tmp0_also_0;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs;
              }
              var causeException_0 = tmp_1;
              if (tmp0__anonymous__q1qw7t.rk()) {
                if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                  return get_COMPLETING_ALREADY();
              } else {
                var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
                if (finalState === get_COMPLETING_ALREADY()) {
                  var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                  throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
                } else if (finalState === get_COMPLETING_RETRY()) {
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block;
                } else
                  return finalState;
              }
            } else {
              return get_TOO_LATE_TO_CANCEL();
            }
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.vr();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.kk_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    {
      if (finishing.et())
        return get_COMPLETING_ALREADY();
      finishing.it(true);
      if (!(finishing === state)) {
        if (!$this.kk_1.atomicfu$compareAndSet(state, finishing))
          return get_COMPLETING_RETRY();
      }
      {
      }
      var wasCancelling = finishing.bt();
      var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = finishing.gt(tmp0_safe_receiver.wk_1);
        }
      }
      var tmp$ret$2;
      {
        var tmp0_takeIf = finishing.ht();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        {
          tmp$ret$1 = !wasCancelling;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf;
        } else {
          tmp_0 = null;
        }
        tmp$ret$2 = tmp_0;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
      }
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wk_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.vr();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      {
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      var handle = child_1.nt_1.tl(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      var tmp0 = $this_1;
      var tmp1 = state_1;
      var tmp2 = nextChild_0;
      var tmp3 = proposedUpdate_1;
      $this_0 = tmp0;
      state_0 = tmp1;
      child_0 = tmp2;
      proposedUpdate_0 = tmp3;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.bl(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      {
        var tmp0__get_isRemoved__hsfvgr = cur;
        tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.cs_1;
      }
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      {
        var tmp1__get_prevNode__b1i0ed = cur;
        tmp$ret$1 = tmp1__get_prevNode__b1i0ed.bs_1;
      }
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      {
        var tmp2__get_nextNode__ek7k4a = cur;
        tmp$ret$2 = tmp2__get_nextNode__ek7k4a.as_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      {
        var tmp3__get_isRemoved__lodk3s = cur;
        tmp$ret$3 = tmp3__get_isRemoved__lodk3s.cs_1;
      }
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.bt() ? 'Cancelling' : state.et() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.rk() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.xs_1 = list;
    this.ys_1 = atomic$boolean$1(isCompleting);
    this.zs_1 = atomic$ref$1(rootCause);
    this.at_1 = atomic$ref$1(null);
  }
  Finishing.prototype.vr = function () {
    return this.xs_1;
  };
  Finishing.prototype.it = function (value) {
    this.ys_1.dk_1 = value;
  };
  Finishing.prototype.et = function () {
    return this.ys_1.dk_1;
  };
  Finishing.prototype.ot = function (value) {
    this.zs_1.zj_1 = value;
  };
  Finishing.prototype.ht = function () {
    return this.zs_1.zj_1;
  };
  Finishing.prototype.ft = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.bt = function () {
    return !(this.ht() == null);
  };
  Finishing.prototype.rk = function () {
    return this.ht() == null;
  };
  Finishing.prototype.ct = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        {
          var tmp0_also = allocateList(this);
          {
          }
          {
            tmp0_also.b(eh);
          }
          tmp$ret$0 = tmp0_also;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.ht();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = list.h7(0, tmp0_safe_receiver);
      }
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.b(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.gt = function (exception) {
    var rootCause = this.ht();
    if (rootCause == null) {
      this.ot(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null)
      _set_exceptionsHolder__tqm22h(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        {
          var tmp0_apply = allocateList(this);
          {
          }
          {
            tmp0_apply.b(eh);
            tmp0_apply.b(exception);
          }
          tmp$ret$0 = tmp0_apply;
        }
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).b(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.bt() + ', completing=' + this.et() + ', rootCause=' + this.ht() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.xs_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.tt_1 = parent;
    this.ut_1 = state;
    this.vt_1 = child;
    this.wt_1 = proposedUpdate;
  }
  ChildCompletion.prototype.un = function (cause) {
    continueCompleting(this.tt_1, this.ut_1, this.vt_1, this.wt_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.du_1 = job;
  }
  AwaitContinuation.prototype.kp = function (parent) {
    var state = this.du_1.kl();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.ht();
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
    }
    if (state instanceof CompletedExceptionally)
      return state.wk_1;
    return parent.ol();
  };
  AwaitContinuation.prototype.dl = function () {
    return 'AwaitContinuation';
  };
  AwaitContinuation.$metadata$ = classMeta('AwaitContinuation', undefined, undefined, undefined, undefined, CancellableContinuationImpl.prototype);
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
      cont.cp();
      var tmp$ret$1;
      {
        var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      disposeOnCancellation(cont, $this.rl(tmp$ret$1));
      tmp$ret$2 = cont.lp();
    }
    return tmp$ret$2;
  }
  function JobSupport(active) {
    this.kk_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.lk_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.r = function () {
    return Key_getInstance_3();
  };
  JobSupport.prototype.il = function (value) {
    this.lk_1.zj_1 = value;
  };
  JobSupport.prototype.jl = function () {
    return this.lk_1.zj_1;
  };
  JobSupport.prototype.mk = function (parent) {
    {
    }
    if (parent == null) {
      this.il(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.ml();
    var handle = parent.em(this);
    this.il(handle);
    if (this.ll()) {
      handle.vn();
      this.il(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.kl = function () {
    {
      var tmp0_loop = this.kk_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
            return tmp1__anonymous__uwfjfc;
          tmp1__anonymous__uwfjfc.eu(this);
        }
      }
    }
  };
  JobSupport.prototype.rk = function () {
    var state = this.kl();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.rk();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.ll = function () {
    var tmp = this.kl();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.ml = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.kl();
          var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
          if (tmp0_subject === 0)
            return false;
          else if (tmp0_subject === 1)
            return true;
        }
      }
    }
  };
  JobSupport.prototype.nl = function () {
  };
  JobSupport.prototype.ol = function () {
    var state = this.kl();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.ht();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.pl(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.ql(state.wk_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.pl = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.uk() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.ql = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.pl(_this__u8e3s4, message);
  };
  JobSupport.prototype.rl = function (handler) {
    return this.sl(false, true, handler);
  };
  JobSupport.prototype.sl = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.kl();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Empty) {
            if (tmp0__anonymous__q1qw7t.ur_1) {
              if (this.kk_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var list = tmp0__anonymous__q1qw7t.vr();
              if (list == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
              } else {
                var rootCause = null;
                var handle = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  {
                    rootCause = tmp0__anonymous__q1qw7t.ht();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !tmp0__anonymous__q1qw7t.et();
                      } else {
                        tmp_2 = false;
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block;
                      }
                      if (rootCause == null)
                        return node;
                      handle = node;
                      tmp_0 = Unit_getInstance();
                    }
                    tmp$ret$2 = tmp_0;
                  }
                }
                if (!(rootCause == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause);
                  return handle;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                    return node;
                }
              }
            } else {
              if (invokeImmediately) {
                var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
                invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.wk_1);
              }
              return NonDisposableHandle_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.lq = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      {
        tmp$ret$0 = $cont.x2();
      }
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype.ul = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.kl();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof JobNode) {
            if (!(tmp0__anonymous__q1qw7t === node))
              return Unit_getInstance();
            if (this.kk_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              if (!(tmp0__anonymous__q1qw7t.vr() == null)) {
                node.hs();
              }
              return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.vl = function () {
    return false;
  };
  JobSupport.prototype.wl = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.uk() : tmp0_elvis_lhs_0, null, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.yl(tmp);
  };
  JobSupport.prototype.uk = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.yl = function (cause) {
    this.bm(cause);
  };
  JobSupport.prototype.zl = function (parentJob) {
    this.bm(parentJob);
  };
  JobSupport.prototype.am = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.bm(cause) ? this.hm() : false;
  };
  JobSupport.prototype.bm = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.vl()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.bl(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.cm = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.uk() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.dm = function () {
    var state = this.kl();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.ht();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.wk_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.jq = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.kl();
          var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (finalState === get_COMPLETING_ALREADY())
            return false;
          else if (finalState === get_COMPLETING_WAITING_CHILDREN())
            return true;
          else if (finalState === get_COMPLETING_RETRY()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            this.bl(finalState);
            return true;
          }
        }
      }
    }
  };
  JobSupport.prototype.zk = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.kl();
          var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
          if (finalState === get_COMPLETING_ALREADY())
            throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
          else if (finalState === get_COMPLETING_RETRY()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else
            return finalState;
        }
      }
    }
  };
  JobSupport.prototype.em = function (child) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = this.tl(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.cl = function (exception) {
    throw exception;
  };
  JobSupport.prototype.fm = function (cause) {
  };
  JobSupport.prototype.gm = function () {
    return false;
  };
  JobSupport.prototype.hm = function () {
    return true;
  };
  JobSupport.prototype.im = function (exception) {
    return false;
  };
  JobSupport.prototype.vk = function (state) {
  };
  JobSupport.prototype.bl = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.jm() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.jm = function () {
    return this.dl() + '{' + stateString(this, this.kl()) + '}';
  };
  JobSupport.prototype.dl = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.bn = function ($cont) {
    $l$loop: while (true) {
      var state = this.kl();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          {
            var tmp0_recoverAndThrow = state.wk_1;
            throw tmp0_recoverAndThrow;
          }
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  JobSupport.$metadata$ = classMeta('JobSupport', [Job, ChildJob, ParentJob, SelectClause0]);
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = classMeta('JobCancellingNode', undefined, undefined, undefined, undefined, JobNode.prototype);
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function InactiveNodeList(list) {
    this.dt_1 = list;
  }
  InactiveNodeList.prototype.vr = function () {
    return this.dt_1;
  };
  InactiveNodeList.prototype.rk = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.dt_1.zr('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.nt_1 = childJob;
  }
  ChildHandleNode.prototype.un = function (cause) {
    return this.nt_1.zl(this.vs());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  ChildHandleNode.prototype.am = function (cause) {
    return this.vs().am(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.ju_1 = handler;
    this.ku_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.un = function (cause) {
    if (this.ku_1.atomicfu$compareAndSet(0, 1))
      this.ju_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.pu_1 = handler;
  }
  InvokeOnCompletion.prototype.un = function (cause) {
    return this.pu_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.uu_1 = continuation;
  }
  ResumeOnCompletion.prototype.un = function (cause) {
    var tmp$ret$1;
    {
      var tmp0_resume = this.uu_1;
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      tmp$ret$1 = tmp0_resume.y2(tmp$ret$0);
    }
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  ResumeOnCompletion.$metadata$ = classMeta('ResumeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vu_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.av_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.un = function (cause) {
    var state = this.vs().kl();
    {
    }
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      {
        var tmp0_resumeWithException = this.av_1;
        var tmp1_resumeWithException = state.wk_1;
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
        }
        tmp$ret$1 = tmp0_resumeWithException.y2(tmp$ret$0);
      }
    } else {
      var tmp$ret$3;
      {
        var tmp2_resume = this.av_1;
        var tmp = unboxState(state);
        var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        var tmp$ret$2;
        {
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
        }
        tmp$ret$3 = tmp2_resume.y2(tmp$ret$2);
      }
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  ResumeAwaitOnCompletion.$metadata$ = classMeta('ResumeAwaitOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function IncompleteStateBox(state) {
    this.vu_1 = state;
  }
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.fv_1 = child;
  }
  ChildContinuation.prototype.un = function (cause) {
    this.fv_1.jp(this.fv_1.kp(this.vs()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function handlesException($this) {
    var tmp = $this.jl();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vs();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.hm())
        return true;
      var tmp_1 = parentJob.jl();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.vs();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.mk(parent);
    this.iv_1 = handlesException(this);
  }
  JobImpl.prototype.vl = function () {
    return true;
  };
  JobImpl.prototype.hm = function () {
    return this.iv_1;
  };
  JobImpl.prototype.kq = function () {
    return this.jq(Unit_getInstance());
  };
  JobImpl.prototype.xp = function (exception) {
    return this.jq(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  JobImpl.$metadata$ = classMeta('JobImpl', [CompletableJob], undefined, undefined, undefined, JobSupport.prototype);
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.lv();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.lv = function () {
    var main = Dispatchers_getInstance().qv();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.kv();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = classMeta('MainCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.am = function (cause) {
    return false;
  };
  SupervisorJobImpl.$metadata$ = classMeta('SupervisorJobImpl', undefined, undefined, undefined, undefined, JobImpl.prototype);
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.pq = function (context) {
    return false;
  };
  Unconfined.prototype.qq = function (context, block) {
    var yieldContext = context.b3(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.wv_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = objectMeta('Unconfined', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_4() {
    Key_instance_3 = this;
  }
  Key_4.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.aw_1 == null))
        throw recoverStackTrace_0(result.bw());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
      var tmp$ret$0;
      $l$block_1: {
        var receive = new ReceiveHasNext($this, cancellable);
        while (true) {
          if (enqueueReceive($this.cw_1, receive)) {
            removeReceiveOnCancel($this.cw_1, cancellable, receive);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
          var result = $this.cw_1.hw();
          $this.dw_1 = result;
          if (result instanceof Closed) {
            if (result.aw_1 == null) {
              var tmp$ret$2;
              {
                var tmp$ret$1;
                {
                  var tmp0_success = Companion_getInstance_0();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(false);
                }
                tmp$ret$2 = cancellable.y2(tmp$ret$1);
              }
            } else {
              var tmp$ret$4;
              {
                var tmp0_resumeWithException = result.bw();
                var tmp$ret$3;
                {
                  var tmp0_failure = Companion_getInstance_0();
                  tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
                }
                tmp$ret$4 = cancellable.y2(tmp$ret$3);
              }
            }
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
          if (!(result === get_POLL_FAILED())) {
            var tmp0_safe_receiver = $this.cw_1.lw();
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.x2());
            }
            cancellable.sn(true, tmp);
            tmp$ret$0 = Unit_getInstance();
            break $l$block_1;
          }
        }
      }
      tmp$ret$5 = cancellable.lp();
    }
    return tmp$ret$5;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    {
      var tmp0_also = $this.mw(receive);
      {
      }
      {
        if (tmp0_also)
          $this.nw();
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return cont.qn(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.pw_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.ow_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.un = function (cause) {
    if (this.ow_1.hs())
      this.pw_1.qw();
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.ow_1 + ']';
  };
  RemoveReceiveOnCancel.$metadata$ = classMeta('RemoveReceiveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function Itr(channel) {
    this.cw_1 = channel;
    this.dw_1 = get_POLL_FAILED();
  }
  Itr.prototype.rw = function () {
    return this.cw_1;
  };
  Itr.prototype.sw = function (_set____db54di) {
    this.dw_1 = _set____db54di;
  };
  Itr.prototype.tw = function ($cont) {
    if (!(this.dw_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.dw_1);
    this.dw_1 = this.cw_1.hw();
    if (!(this.dw_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.dw_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.f = function () {
    var result = this.dw_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.bw());
    if (!(result === get_POLL_FAILED())) {
      this.dw_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  Itr.$metadata$ = classMeta('Itr', [ChannelIterator]);
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.xw_1 = iterator;
    this.yw_1 = cont;
  }
  ReceiveHasNext.prototype.zw = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.yw_1.nn(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bx_1, this.dx(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    {
    }
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.ex();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveHasNext.prototype.fx = function (value) {
    this.xw_1.dw_1 = value;
    this.yw_1.pn(get_RESUME_TOKEN());
  };
  ReceiveHasNext.prototype.gx = function (closed) {
    var tmp;
    if (closed.aw_1 == null) {
      tmp = this.yw_1.mn(false, null, 2, null);
    } else {
      tmp = this.yw_1.on(closed.bw());
    }
    var token = tmp;
    if (!(token == null)) {
      this.xw_1.dw_1 = closed;
      this.yw_1.pn(token);
    }
  };
  ReceiveHasNext.prototype.dx = function (value) {
    var tmp0_safe_receiver = this.xw_1.cw_1.lw();
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.yw_1.x2());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  ReceiveHasNext.$metadata$ = classMeta('ReceiveHasNext', undefined, undefined, undefined, undefined, Receive.prototype);
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.hw = function () {
    while (true) {
      var tmp0_elvis_lhs = this.nx();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.rx(null);
      if (!(token == null)) {
        {
        }
        send.sx();
        return send.tx();
      }
      send.ux();
    }
  };
  AbstractChannel.prototype.vx = function () {
    return !(this.wx() == null) ? this.mx() : false;
  };
  AbstractChannel.prototype.mw = function (receive) {
    var tmp;
    if (this.lx()) {
      var tmp$ret$1;
      $l$block: {
        var tmp0_addLastIfPrev = this.xx();
        var tmp$ret$0;
        {
          var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.bs_1;
          tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        }
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.ls(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        var tmp2_addLastIfPrevAndIf = this.xx();
        var tmp$ret$2;
        {
          var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.bs_1;
          tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        }
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        {
          tmp$ret$4 = this.mx();
        }
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.ls(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.wl = function (cause) {
    if (this.vx())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.yx(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.yx = function (cause) {
    var tmp$ret$0;
    {
      var tmp0_also = this.zx(cause);
      {
      }
      {
        this.ay(tmp0_also);
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  AbstractChannel.prototype.ay = function (wasClosed) {
    var tmp0_elvis_lhs = this.by();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      {
        tmp$ret$0 = closed.bs_1;
      }
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      {
      }
      if (!previous.hs()) {
        previous.qs();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.cy(list, closed);
  };
  AbstractChannel.prototype.cy = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.dy(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.g() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp1__anonymous__uwfjfc = list_0.h(i);
                tmp1__anonymous__uwfjfc.dy(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.d = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.ey = function () {
    var tmp$ret$0;
    {
      var tmp0_also = AbstractSendChannel.prototype.ey.call(this);
      {
      }
      {
        var tmp;
        if (!(tmp0_also == null)) {
          tmp = !(tmp0_also instanceof Closed);
        } else {
          tmp = false;
        }
        if (tmp)
          this.qw();
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  AbstractChannel.prototype.nw = function () {
  };
  AbstractChannel.prototype.qw = function () {
  };
  AbstractChannel.$metadata$ = classMeta('AbstractChannel', [Channel], undefined, undefined, undefined, AbstractSendChannel.prototype);
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.ky();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.kw_1.zj_1;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.kw_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      {
        tmp$ret$0 = closed.bs_1;
      }
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.hs()) {
        previous.qs();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.gx(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.g() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp2__anonymous__z9zvc9 = list.h(i);
                tmp2__anonymous__z9zvc9.gx(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.iy(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    {
      var tmp0__get_nextNode__vg4li4 = $this.jw_1;
      tmp$ret$0 = tmp0__get_nextNode__vg4li4.as_1;
    }
    var head = tmp$ret$0;
    if (head === $this.jw_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    {
      var tmp1__get_prevNode__b1i0ed = $this.jw_1;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.bs_1;
    }
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    {
      var tmp0_forEach = $this.jw_1;
      var cur = tmp0_forEach.ds();
      while (!equals(cur, tmp0_forEach)) {
        if (cur instanceof LinkedListNode) {
          var tmp1__anonymous__uwfjfc = cur;
          var tmp0 = size;
          size = tmp0 + 1 | 0;
        }
        cur = cur.as_1;
      }
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.oy_1 = element;
  }
  SendBuffered.prototype.py = function () {
    return this.oy_1;
  };
  SendBuffered.prototype.tx = function () {
    return this.oy_1;
  };
  SendBuffered.prototype.rx = function (otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.ex();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  SendBuffered.prototype.sx = function () {
  };
  SendBuffered.prototype.dy = function (closed) {
    {
    }
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.oy_1 + ')';
  };
  SendBuffered.$metadata$ = classMeta('SendBuffered', undefined, undefined, undefined, undefined, Send.prototype);
  function AbstractSendChannel(onUndeliveredElement) {
    this.iw_1 = onUndeliveredElement;
    this.jw_1 = new LinkedListHead();
    this.kw_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.lw = function () {
    return this.iw_1;
  };
  AbstractSendChannel.prototype.xx = function () {
    return this.jw_1;
  };
  AbstractSendChannel.prototype.fy = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.ey();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.zw(element, null);
      if (!(token == null)) {
        {
        }
        receive.fx(element);
        return receive.kx();
      }
    }
  };
  AbstractSendChannel.prototype.by = function () {
    var tmp$ret$0;
    {
      var tmp0__get_prevNode__2ljhpg = this.jw_1;
      tmp$ret$0 = tmp0__get_prevNode__2ljhpg.bs_1;
    }
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        {
          helpClose(this, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp0_safe_receiver;
      }
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.wx = function () {
    var tmp$ret$0;
    {
      var tmp0__get_nextNode__vg4li4 = this.jw_1;
      tmp$ret$0 = tmp0__get_nextNode__vg4li4.as_1;
    }
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        {
          helpClose(this, tmp0_safe_receiver);
        }
        tmp$ret$1 = tmp0_safe_receiver;
      }
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.nx = function () {
    var tmp$ret$0;
    $l$block_1: {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.jw_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.as_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      {
        var tmp2__anonymous__z9zvc9 = next;
        tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      }
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      {
        var tmp0_check = next.ms();
        {
        }
        if (!tmp0_check) {
          var tmp$ret$2;
          {
            tmp$ret$2 = 'Should remove';
          }
          var message = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString_0(message));
        }
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.qy = function (element) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_addLastIfPrev = this.jw_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      {
        var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.bs_1;
        if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
          return tmp2__anonymous__z9zvc9;
        tmp$ret$0 = true;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.ls(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.gy = function (element) {
    var result = this.fy(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().uy(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.by();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().ty();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().sy(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().sy(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.zx = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      var tmp0_addLastIfPrev = this.jw_1;
      var tmp$ret$0;
      {
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.bs_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.ls(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      {
        var tmp2__get_prevNode__jhgj3a = this.jw_1;
        tmp$ret$2 = tmp2__get_prevNode__jhgj3a.bs_1;
      }
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded)
      invokeOnCloseHandler(this, cause);
    return closeAdded;
  };
  AbstractSendChannel.prototype.iy = function (closed) {
  };
  AbstractSendChannel.prototype.ey = function () {
    var tmp$ret$0;
    $l$block_1: {
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.jw_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.as_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      {
        var tmp2__anonymous__z9zvc9 = next;
        tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      }
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      {
        var tmp0_check = next.ms();
        {
        }
        if (!tmp0_check) {
          var tmp$ret$2;
          {
            tmp$ret$2 = 'Should remove';
          }
          var message = tmp$ret$2;
          throw IllegalStateException_init_$Create$(toString_0(message));
        }
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.jy();
  };
  AbstractSendChannel.prototype.jy = function () {
    return '';
  };
  AbstractSendChannel.$metadata$ = classMeta('AbstractSendChannel', [SendChannel]);
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.ux = function () {
  };
  Send.$metadata$ = classMeta('Send', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = interfaceMeta('ReceiveOrClosed');
  function Closed(closeCause) {
    Send.call(this);
    this.aw_1 = closeCause;
  }
  Closed.prototype.vy = function () {
    return this.aw_1;
  };
  Closed.prototype.ky = function () {
    var tmp0_elvis_lhs = this.aw_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.bw = function () {
    var tmp0_elvis_lhs = this.aw_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.kx = function () {
    return this;
  };
  Closed.prototype.tx = function () {
    return this;
  };
  Closed.prototype.rx = function (otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.ex();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  Closed.prototype.sx = function () {
  };
  Closed.prototype.zw = function (value, otherOp) {
    var tmp$ret$0;
    {
      var tmp0_also = get_RESUME_TOKEN();
      {
      }
      {
        var tmp0_safe_receiver = otherOp;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.ex();
        }
      }
      tmp$ret$0 = tmp0_also;
    }
    return tmp$ret$0;
  };
  Closed.prototype.fx = function (value) {
  };
  Closed.prototype.dy = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.aw_1 + ']';
  };
  Closed.$metadata$ = classMeta('Closed', [ReceiveOrClosed], undefined, undefined, undefined, Send.prototype);
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.kx = function () {
    return get_OFFER_SUCCESS();
  };
  Receive.$metadata$ = classMeta('Receive', [ReceiveOrClosed], undefined, undefined, undefined, LinkedListNode.prototype);
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.zy_1) {
      $this.ez_1.ak_1 = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.az_1;
    var tmp0 = tmp0_subject.xc();
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.zy_1) {
      ensureCapacity($this, currentSize);
      $this.cz_1[($this.dz_1 + currentSize | 0) % $this.cz_1.length | 0] = element;
    } else {
      {
      }
      $this.cz_1[$this.dz_1 % $this.cz_1.length | 0] = null;
      $this.cz_1[($this.dz_1 + currentSize | 0) % $this.cz_1.length | 0] = element;
      $this.dz_1 = ($this.dz_1 + 1 | 0) % $this.cz_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.cz_1.length) {
      var tmp$ret$0;
      {
        var tmp0_min = imul($this.cz_1.length, 2);
        var tmp1_min = $this.zy_1;
        tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      }
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      {
        tmp$ret$1 = fillArrayVal(Array(newSize), null);
      }
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.cz_1[($this.dz_1 + i | 0) % $this.cz_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.cz_1 = newBuffer;
      $this.dz_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.zy_1 = capacity;
    this.az_1 = onBufferOverflow;
    {
      var tmp0_require = this.zy_1 >= 1;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.zy_1 + ' was specified';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    this.bz_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_min = this.zy_1;
          tmp$ret$1 = Math.min(tmp0_min, 8);
        }
        var tmp1_arrayOfNulls = tmp$ret$1;
        tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
      }
      var tmp2_apply = tmp$ret$2;
      {
      }
      {
        var tmp_0 = get_EMPTY();
        fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
      }
      tmp$ret$3 = tmp2_apply;
    }
    tmp.cz_1 = tmp$ret$3;
    this.dz_1 = 0;
    this.ez_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.lx = function () {
    return false;
  };
  ArrayChannel.prototype.mx = function () {
    return this.ez_1.ak_1 === 0;
  };
  ArrayChannel.prototype.vx = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.bz_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.vx.call(this);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.fy = function (element) {
    var receive = null;
    var tmp$ret$3;
    {
      var tmp0_withLock = this.bz_1;
      var tmp$ret$2;
      $l$block: {
        var size = this.ez_1.ak_1;
        var tmp0_safe_receiver = this.by();
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
        var tmp1_safe_receiver = updateBufferSize(this, size);
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          {
            {
            }
            return tmp1_safe_receiver;
          }
        }
        if (size === 0) {
          loop: while (true) {
            var tmp2_elvis_lhs = this.ey();
            var tmp;
            if (tmp2_elvis_lhs == null) {
              break loop;
            } else {
              tmp = tmp2_elvis_lhs;
            }
            receive = tmp;
            if (receive instanceof Closed) {
              this.ez_1.ak_1 = size;
              return ensureNotNull(receive);
            }
            var token = ensureNotNull(receive).zw(element, null);
            if (!(token == null)) {
              {
              }
              this.ez_1.ak_1 = size;
              tmp$ret$2 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        enqueueElement(this, size, element);
        return get_OFFER_SUCCESS();
      }
      tmp$ret$3 = tmp$ret$2;
    }
    ensureNotNull(receive).fx(element);
    return ensureNotNull(receive).kx();
  };
  ArrayChannel.prototype.hw = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.bz_1;
      var size = this.ez_1.ak_1;
      if (size === 0) {
        var tmp0_elvis_lhs = this.by();
        return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
      }
      result = this.cz_1[this.dz_1];
      this.cz_1[this.dz_1] = null;
      this.ez_1.ak_1 = size - 1 | 0;
      var replacement = get_POLL_FAILED();
      if (size === this.zy_1) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.nx();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          send = tmp;
          var token = ensureNotNull(send).rx(null);
          if (!(token == null)) {
            {
            }
            resumed = true;
            replacement = ensureNotNull(send).tx();
            break loop;
          }
          ensureNotNull(send).ux();
        }
      }
      var tmp_0;
      if (!(replacement === get_POLL_FAILED())) {
        tmp_0 = !(replacement instanceof Closed);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.ez_1.ak_1 = size;
        this.cz_1[(this.dz_1 + size | 0) % this.cz_1.length | 0] = replacement;
      }
      this.dz_1 = (this.dz_1 + 1 | 0) % this.cz_1.length | 0;
      tmp$ret$0 = Unit_getInstance();
    }
    if (resumed)
      ensureNotNull(send).sx();
    return result;
  };
  ArrayChannel.prototype.mw = function (receive) {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.bz_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.mw.call(this, receive);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ArrayChannel.prototype.ay = function (wasClosed) {
    var onUndeliveredElement = this.lw();
    var undeliveredElementException = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.bz_1;
      {
        var tmp0_repeat = this.ez_1.ak_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var value = this.cz_1[this.dz_1];
              if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
                undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
              }
              this.cz_1[this.dz_1] = get_EMPTY();
              this.dz_1 = (this.dz_1 + 1 | 0) % this.cz_1.length | 0;
            }
          }
           while (inductionVariable < tmp0_repeat);
      }
      this.ez_1.ak_1 = 0;
      tmp$ret$0 = Unit_getInstance();
    }
    AbstractChannel.prototype.ay.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  ArrayChannel.prototype.jy = function () {
    return '(buffer:capacity=' + this.zy_1 + ',size=' + this.ez_1.ak_1 + ')';
  };
  ArrayChannel.$metadata$ = classMeta('ArrayChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BufferOverflow.$metadata$ = classMeta('BufferOverflow', undefined, undefined, undefined, undefined, Enum.prototype);
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.fz_1 = 2147483647;
    this.gz_1 = 0;
    this.hz_1 = -1;
    this.iz_1 = -2;
    this.jz_1 = -3;
    this.kz_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.lz_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  Factory.$metadata$ = objectMeta('Factory');
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  Channel.$metadata$ = interfaceMeta('Channel', [SendChannel, ReceiveChannel]);
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        {
          var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
          {
          }
          if (!tmp0_require) {
            var tmp$ret$0;
            {
              tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
            }
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().lz_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel_0(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function ReceiveChannel() {
  }
  ReceiveChannel.$metadata$ = interfaceMeta('ReceiveChannel');
  function SendChannel() {
  }
  SendChannel.$metadata$ = interfaceMeta('SendChannel');
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  Failed.$metadata$ = classMeta('Failed');
  function Closed_0(cause) {
    Failed.call(this);
    this.mz_1 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.mz_1, other.mz_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    {
      var tmp0_hashCode = this.mz_1;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.mz_1 + ')';
  };
  Closed_0.$metadata$ = classMeta('Closed', undefined, undefined, undefined, undefined, Failed.prototype);
  function Companion() {
    Companion_instance = this;
    this.ry_1 = new Failed();
  }
  Companion.prototype.uy = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.ty = function () {
    return _ChannelResult___init__impl__siwsuf(this.ry_1);
  };
  Companion.prototype.sy = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelIterator() {
  }
  ChannelIterator.$metadata$ = interfaceMeta('ChannelIterator');
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  ClosedReceiveChannelException.$metadata$ = classMeta('ClosedReceiveChannelException', undefined, undefined, undefined, undefined, NoSuchElementException.prototype);
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  ClosedSendChannelException.$metadata$ = classMeta('ClosedSendChannelException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
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
          var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
          tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.wl(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.rz_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.lw();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.rz_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.qz_1 = new NoOpLock();
    this.rz_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.lx = function () {
    return false;
  };
  ConflatedChannel.prototype.mx = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.qz_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = this.rz_1 === get_EMPTY();
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.fy = function (element) {
    var receive = null;
    var tmp$ret$3;
    {
      var tmp0_withLock = this.qz_1;
      var tmp$ret$1;
      $l$block: {
        var tmp0_safe_receiver = this.by();
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
        if (this.rz_1 === get_EMPTY()) {
          loop: while (true) {
            var tmp1_elvis_lhs = this.ey();
            var tmp;
            if (tmp1_elvis_lhs == null) {
              break loop;
            } else {
              tmp = tmp1_elvis_lhs;
            }
            receive = tmp;
            if (receive instanceof Closed) {
              return ensureNotNull(receive);
            }
            var token = ensureNotNull(receive).zw(element, null);
            if (!(token == null)) {
              {
              }
              tmp$ret$1 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        var tmp2_safe_receiver = updateValueLocked(this, element);
        if (tmp2_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          {
            {
            }
            throw tmp2_safe_receiver;
          }
        }
        return get_OFFER_SUCCESS();
      }
      tmp$ret$3 = tmp$ret$1;
    }
    ensureNotNull(receive).fx(element);
    return ensureNotNull(receive).kx();
  };
  ConflatedChannel.prototype.hw = function () {
    var result = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.qz_1;
      if (this.rz_1 === get_EMPTY()) {
        var tmp0_elvis_lhs = this.by();
        return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
      }
      result = this.rz_1;
      this.rz_1 = get_EMPTY();
      tmp$ret$0 = Unit_getInstance();
    }
    return result;
  };
  ConflatedChannel.prototype.ay = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    {
      var tmp0_withLock = this.qz_1;
      undeliveredElementException = updateValueLocked(this, get_EMPTY());
      tmp$ret$0 = Unit_getInstance();
    }
    AbstractChannel.prototype.ay.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  ConflatedChannel.prototype.mw = function (receive) {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.qz_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = AbstractChannel.prototype.mw.call(this, receive);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.jy = function () {
    var tmp$ret$1;
    {
      var tmp0_withLock = this.qz_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = '(value=' + toString(this.rz_1) + ')';
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  ConflatedChannel.$metadata$ = classMeta('ConflatedChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.lx = function () {
    return true;
  };
  LinkedListChannel.prototype.mx = function () {
    return true;
  };
  LinkedListChannel.prototype.fy = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.fy.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.qy(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.cy = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.lw();
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.oy_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.dy(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.g() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              {
                var tmp1__anonymous__uwfjfc = list_0.h(i);
                var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
                if (tmp0_subject_1 instanceof SendBuffered) {
                  var tmp1_safe_receiver_0 = this.lw();
                  var tmp_3;
                  if (tmp1_safe_receiver_0 == null) {
                    tmp_3 = null;
                  } else {
                    var tmp_4 = tmp1__anonymous__uwfjfc.oy_1;
                    tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                  }
                  undeliveredElementException = tmp_3;
                } else {
                  tmp1__anonymous__uwfjfc.dy(closed);
                }
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        throw tmp0_safe_receiver;
      }
    }
  };
  LinkedListChannel.$metadata$ = classMeta('LinkedListChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.lx = function () {
    return true;
  };
  RendezvousChannel.prototype.mx = function () {
    return true;
  };
  RendezvousChannel.$metadata$ = classMeta('RendezvousChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function ensureCapacity_0($this) {
    var currentSize = $this.dr_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    {
      var tmp0_copyInto = $this.dr_1;
      var tmp1_copyInto = $this.er_1;
      var tmp2_copyInto = tmp0_copyInto.length;
      arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newElements;
    }
    var tmp$ret$2;
    {
      var tmp3_copyInto = $this.dr_1;
      var tmp4_copyInto = $this.dr_1.length - $this.er_1 | 0;
      var tmp5_copyInto = $this.er_1;
      arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
      tmp$ret$2 = newElements;
    }
    $this.dr_1 = newElements;
    $this.er_1 = 0;
    $this.fr_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(16), null);
    }
    tmp.dr_1 = tmp$ret$0;
    this.er_1 = 0;
    this.fr_1 = 0;
  }
  ArrayQueue.prototype.lr = function () {
    return this.er_1 === this.fr_1;
  };
  ArrayQueue.prototype.ir = function (element) {
    this.dr_1[this.fr_1] = element;
    this.fr_1 = (this.fr_1 + 1 | 0) & (this.dr_1.length - 1 | 0);
    if (this.fr_1 === this.er_1)
      ensureCapacity_0(this);
  };
  ArrayQueue.prototype.gr = function () {
    if (this.er_1 === this.fr_1)
      return null;
    var element = this.dr_1[this.er_1];
    this.dr_1[this.er_1] = null;
    this.er_1 = (this.er_1 + 1 | 0) & (this.dr_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = classMeta('ArrayQueue');
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = classMeta('OpDescriptor');
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.xn_1.pq(tmp1_resumeCancellableWith.x2())) {
        tmp1_resumeCancellableWith.zn_1 = state;
        tmp1_resumeCancellableWith.yz(get_MODE_CANCELLABLE());
        tmp_0 = tmp1_resumeCancellableWith.xn_1.qq(tmp1_resumeCancellableWith.x2(), tmp1_resumeCancellableWith);
      } else {
        var tmp$ret$0;
        $l$block: {
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          {
          }
          var eventLoop = ThreadLocalEventLoop_getInstance().qr();
          if (false ? eventLoop.kr() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.jr()) {
            tmp1_resumeCancellableWith.zn_1 = state;
            tmp1_resumeCancellableWith.yz(tmp0_executeUnconfined);
            eventLoop.hr(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            {
              eventLoop.mr(true);
              try {
                {
                  var tmp$ret$3;
                  $l$block_0: {
                    var job = tmp1_resumeCancellableWith.x2().b3(Key_getInstance_3());
                    if (!(job == null) ? !job.rk() : false) {
                      var cause = job.ol();
                      tmp1_resumeCancellableWith.ep(state, cause);
                      var tmp$ret$2;
                      {
                        var tmp$ret$1;
                        {
                          var tmp0_failure = Companion_getInstance_0();
                          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                        }
                        tmp$ret$2 = tmp1_resumeCancellableWith.y2(tmp$ret$1);
                      }
                      tmp$ret$3 = true;
                      break $l$block_0;
                    }
                    tmp$ret$3 = false;
                  }
                  if (!tmp$ret$3) {
                    {
                      var tmp$ret$4;
                      {
                        var tmp0_withContinuationContext = tmp1_resumeCancellableWith.yn_1;
                        var tmp1_withContinuationContext = tmp1_resumeCancellableWith.ao_1;
                        tmp$ret$4 = tmp1_resumeCancellableWith.yn_1.y2(result);
                      }
                    }
                  }
                }
                $l$loop: while (true) {
                  if (!eventLoop.cr())
                    break $l$loop;
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp1_resumeCancellableWith.qp($p, null);
                } else {
                  throw $p;
                }
              }
              finally {
                eventLoop.nr(true);
              }
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      tmp = _this__u8e3s4.y2(result);
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.bo_1.zj_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.xn_1 = dispatcher;
    this.yn_1 = continuation;
    this.zn_1 = get_UNDEFINED();
    this.ao_1 = threadContextElements(this.x2());
    this.bo_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.zz = function () {
    return this.yn_1;
  };
  DispatchedContinuation.prototype.x2 = function () {
    return this.yn_1.x2();
  };
  DispatchedContinuation.prototype.a10 = function () {
    return this.ao_1;
  };
  DispatchedContinuation.prototype.ko = function () {
    return !(this.bo_1.zj_1 == null);
  };
  DispatchedContinuation.prototype.b10 = function () {
    {
      var tmp0_loop = this.bo_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
            return Unit_getInstance();
        }
      }
    }
  };
  DispatchedContinuation.prototype.rq = function () {
    this.b10();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.po();
    }
  };
  DispatchedContinuation.prototype.co = function () {
    {
      var tmp0_loop = this.bo_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          if (tmp1__anonymous__uwfjfc === null) {
            this.bo_1.zj_1 = get_REUSABLE_CLAIMED();
            return null;
          } else {
            if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
              if (this.bo_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
                return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
              }
            } else {
              if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
              } else {
                if (tmp1__anonymous__uwfjfc instanceof Error) {
                } else {
                  var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.oo = function (continuation) {
    {
      var tmp0_loop = this.bo_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
            if (this.bo_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
              return null;
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
              {
                var tmp0_require = this.bo_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require) {
                    var tmp$ret$0;
                    {
                      tmp$ret$0 = 'Failed requirement.';
                    }
                    var message = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_0(message));
                  }
                }
              }
              return tmp1__anonymous__uwfjfc;
            } else {
              var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.no = function (cause) {
    {
      var tmp0_loop = this.bo_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.zj_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
            if (this.bo_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
              return true;
          } else {
            if (tmp0_subject instanceof Error)
              return true;
            else {
              if (this.bo_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
                return false;
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.dp = function () {
    var state = this.zn_1;
    {
    }
    this.zn_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.bp = function () {
    return this;
  };
  DispatchedContinuation.prototype.y2 = function (result) {
    var context = this.yn_1.x2();
    var state = toState$default(result, null, 1, null);
    if (this.xn_1.pq(context)) {
      this.zn_1 = state;
      this.yz(get_MODE_ATOMIC());
      this.xn_1.qq(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        {
        }
        var eventLoop = ThreadLocalEventLoop_getInstance().qr();
        if (false ? eventLoop.kr() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.jr()) {
          this.zn_1 = state;
          this.yz(tmp0_executeUnconfined);
          eventLoop.hr(this);
          tmp = true;
        } else {
          {
            eventLoop.mr(true);
            try {
              {
                var tmp$ret$1;
                {
                  var tmp0_withCoroutineContext = this.x2();
                  var tmp1_withCoroutineContext = this.ao_1;
                  tmp$ret$1 = this.yn_1.y2(result);
                }
              }
              $l$loop: while (true) {
                if (!eventLoop.cr())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.qp($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.nr(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.ep = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.nq_1(cause);
    }
  };
  DispatchedContinuation.prototype.c10 = function (state) {
    var job = this.x2().b3(Key_getInstance_3());
    if (!(job == null) ? !job.rk() : false) {
      var cause = job.ol();
      this.ep(state, cause);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        }
        tmp$ret$1 = this.y2(tmp$ret$0);
      }
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.d10 = function (result) {
    var tmp$ret$0;
    {
      var tmp0_withContinuationContext = this.yn_1;
      var tmp1_withContinuationContext = this.ao_1;
      tmp$ret$0 = this.yn_1.y2(result);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.xn_1 + ', ' + toDebugString(this.yn_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    {
    }
    var eventLoop = ThreadLocalEventLoop_getInstance().qr();
    if (doYield ? eventLoop.kr() : false)
      return false;
    var tmp;
    if (eventLoop.jr()) {
      _this__u8e3s4.zn_1 = contState;
      _this__u8e3s4.yz(mode);
      eventLoop.hr(_this__u8e3s4);
      tmp = true;
    } else {
      {
        eventLoop.mr(true);
        try {
          block();
          $l$loop: while (true) {
            if (!eventLoop.cr())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.qp($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.nr(true);
        }
      }
      tmp = false;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.lo_1 = resumeMode;
  }
  DispatchedTask.prototype.yz = function (_set____db54di) {
    this.lo_1 = _set____db54di;
  };
  DispatchedTask.prototype.mo = function () {
    return this.lo_1;
  };
  DispatchedTask.prototype.ep = function (takenState, cause) {
  };
  DispatchedTask.prototype.mp = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.op = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wk_1;
  };
  DispatchedTask.prototype.pp = function () {
    {
    }
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.bp();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.yn_1;
      var tmp$ret$5;
      {
        var tmp0_withContinuationContext = delegate.ao_1;
        var context = continuation.x2();
        var state = this.dp();
        var exception = this.op(state);
        var job = (exception == null ? get_isCancellableMode(this.lo_1) : false) ? context.b3(Key_getInstance_3()) : null;
        var tmp_0;
        if (!(job == null) ? !job.rk() : false) {
          var cause = job.ol();
          this.ep(state, cause);
          var tmp$ret$0;
          {
            var tmp0_failure = Companion_getInstance_0();
            var tmp1_failure = recoverStackTrace(cause, continuation);
            tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
          }
          tmp_0 = continuation.y2(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception == null)) {
            var tmp$ret$2;
            {
              var tmp$ret$1;
              {
                var tmp0_failure_0 = Companion_getInstance_0();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
              }
              tmp$ret$2 = continuation.y2(tmp$ret$1);
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            {
              var tmp2_resume = this.mp(state);
              var tmp$ret$3;
              {
                var tmp0_success = Companion_getInstance_0();
                tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
              }
              tmp$ret$4 = continuation.y2(tmp$ret$3);
            }
            tmp_1 = tmp$ret$4;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$5 = tmp_0;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      {
        var tmp_2;
        try {
          var tmp$ret$6;
          {
            var tmp0_success_0 = Companion_getInstance_0();
            var tmp1_success = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp_2 = tmp$ret$6;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var tmp$ret$7;
            {
              var tmp2_failure = Companion_getInstance_0();
              tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp_3 = tmp$ret$7;
          } else {
            throw $p;
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$8 = tmp_2;
      }
      var result = tmp$ret$8;
      this.qp(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.qp = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.bp().x2(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    {
    }
    var delegate = _this__u8e3s4.bp();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.lo_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.xn_1;
      var context = delegate.x2();
      if (dispatcher.pq(context)) {
        dispatcher.qq(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.mr(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.cr())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.qp($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.nr(true);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().qr();
    if (eventLoop.jr()) {
      eventLoop.hr(_this__u8e3s4);
    } else {
      {
        eventLoop.mr(true);
        try {
          {
            resume(_this__u8e3s4, _this__u8e3s4.bp(), true);
          }
          $l$loop: while (true) {
            if (!eventLoop.cr())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.qp($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.nr(true);
        }
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.dp();
    var exception = _this__u8e3s4.op(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      {
        var tmp1_success = Companion_getInstance_0();
        var tmp2_success = _this__u8e3s4.mp(state);
        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      {
        var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.yn_1;
        var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.ao_1;
        tmp$ret$2 = tmp3_resumeUndispatchedWith.yn_1.y2(result);
      }
    } else
      delegate.y2(result);
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    {
    }
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).b(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.b((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.b(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.g() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.h(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.e10_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.e10_1 = holder;
  }
  InlineList.prototype.toString = function () {
    return InlineList__toString_impl_1aej86(this.e10_1);
  };
  InlineList.prototype.hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.e10_1);
  };
  InlineList.prototype.equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.e10_1, other);
  };
  InlineList.$metadata$ = classMeta('InlineList');
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  UndeliveredElementException.$metadata$ = classMeta('UndeliveredElementException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          {
          }
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = handleCoroutineException(context, tmp0_safe_receiver);
      }
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.f10_1 = context;
  }
  ContextScope.prototype.qk = function () {
    return this.f10_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.f10_1 + ')';
  };
  ContextScope.$metadata$ = classMeta('ContextScope', [CoroutineScope]);
  function Symbol(symbol) {
    this.g10_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.g10_1 + '>';
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).md();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.a1(parsed) <= 0 ? parsed.a1(maxValue) <= 0 : false)) {
      {
        var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      }
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      tmp = resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = dispatcherFailure$accessor$paksz7(completion, $p);
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    {
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    }
    completion.y2(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      }
      var tmp_1 = tmp$ret$0;
      tmp = resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        tmp_2 = dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    {
      tmp$ret$0 = completion;
    }
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_failure = Companion_getInstance_0();
            tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          }
          tmp$ret$2 = actualCompletion.y2(tmp$ret$1);
        }
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      {
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$3;
        {
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
        }
        tmp$ret$4 = actualCompletion.y2(tmp$ret$3);
      }
    }
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = completion;
      }
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        {
          var tmp$ret$4;
          {
            var tmp0_withCoroutineContext = completion.x2();
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                var tmp$ret$1;
                {
                  tmp$ret$1 = _this__u8e3s4;
                }
                var a = tmp$ret$1;
                tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.ae(receiver, actualCompletion);
              }
              tmp$ret$3 = tmp$ret$2;
            }
            tmp$ret$4 = tmp$ret$3;
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          {
            var tmp$ret$6;
            {
              var tmp0_failure = Companion_getInstance_0();
              tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp$ret$7 = actualCompletion.y2(tmp$ret$6);
          }
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        {
          var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
          var tmp$ret$9;
          {
            var tmp0_success = Companion_getInstance_0();
            tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
          }
          tmp$ret$10 = actualCompletion.y2(tmp$ret$9);
        }
      }
    }
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = interfaceMeta('SelectClause1');
  function CloseableCoroutineDispatcher() {
  }
  CloseableCoroutineDispatcher.$metadata$ = classMeta('CloseableCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = classMeta('CompletionHandlerBase', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      {
        tmp$ret$0 = _this__u8e3s4;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = classMeta('CancelHandlerBase');
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().mv_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        {
          var tmp0_asDynamic = window;
          tmp$ret$0 = tmp0_asDynamic;
        }
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        {
          var tmp1_asDynamic = window;
          tmp$ret$1 = tmp1_asDynamic;
        }
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.qk().i3(context);
    return (!(combined === Dispatchers_getInstance().mv_1) ? combined.b3(Key_getInstance()) == null : false) ? combined.i3(Dispatchers_getInstance().mv_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).ba();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      {
        tmp$ret$1 = _this__u8e3s4;
      }
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.mv_1 = createDefaultDispatcher();
    this.nv_1 = Unconfined_getInstance();
    this.ov_1 = new JsMainDispatcher(this.mv_1, false);
    this.pv_1 = null;
  }
  Dispatchers.prototype.j10 = function () {
    return this.mv_1;
  };
  Dispatchers.prototype.qv = function () {
    var tmp0_elvis_lhs = this.pv_1;
    return tmp0_elvis_lhs == null ? this.ov_1 : tmp0_elvis_lhs;
  };
  Dispatchers.$metadata$ = objectMeta('Dispatchers');
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.l10_1 = delegate;
    this.m10_1 = invokeImmediately;
    this.n10_1 = this.m10_1 ? this : new JsMainDispatcher(this.l10_1, true);
  }
  JsMainDispatcher.prototype.kv = function () {
    return this.n10_1;
  };
  JsMainDispatcher.prototype.pq = function (context) {
    return !this.m10_1;
  };
  JsMainDispatcher.prototype.qq = function (context, block) {
    return this.l10_1.qq(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.lv();
    return tmp0_elvis_lhs == null ? this.l10_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.qq = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.s10_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.s10_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.s10_1, this.s10_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.s10_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = classMeta('JobCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.v10 = function () {
    process.nextTick(this.f11().b11_1);
  };
  NodeDispatcher.$metadata$ = objectMeta('NodeDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.v10 = function () {
    setTimeout(this.f11().b11_1, 0);
  };
  SetTimeoutDispatcher.$metadata$ = objectMeta('SetTimeoutDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.n11();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.c11_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.b11_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.o11 = function () {
    this.c11_1.v10();
  };
  ScheduledMessageQueue.prototype.p11 = function () {
    setTimeout(this.b11_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = $continuation.rn(this$0, Unit_getInstance());
      }
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.e11_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.f11 = function () {
    return this.e11_1;
  };
  SetTimeoutBasedDispatcher.prototype.qq = function (context, block) {
    this.e11_1.q11(block);
  };
  SetTimeoutBasedDispatcher.prototype.xq = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    continuation.qn(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function MessageQueue() {
    ArrayQueue.call(this);
    this.l11_1 = 16;
    this.m11_1 = false;
  }
  MessageQueue.prototype.q11 = function (element) {
    this.ir(element);
    if (!this.m11_1) {
      this.m11_1 = true;
      this.o11();
    }
  };
  MessageQueue.prototype.n11 = function () {
    try {
      {
        var tmp0_repeat = this.l11_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs = this.gr();
              var tmp;
              if (tmp0_elvis_lhs == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var element = tmp;
              element.pp();
            }
          }
           while (inductionVariable < tmp0_repeat);
      }
    }finally {
      if (this.lr()) {
        this.m11_1 = false;
      } else {
        this.p11();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).md();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.r11_1 = handle;
  }
  ClearTimeout.prototype.vn = function () {
    clearTimeout(this.r11_1);
  };
  ClearTimeout.prototype.un = function (cause) {
    this.vn();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.un(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.r11_1 + ']';
  };
  ClearTimeout.$metadata$ = classMeta('ClearTimeout', [DisposableHandle], undefined, undefined, undefined, CancelHandler.prototype);
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = $continuation.rn(this$0, Unit_getInstance());
      }
      return Unit_getInstance();
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.t11_1 = window_0;
    this.u11_1 = new WindowMessageQueue(this.t11_1);
  }
  WindowDispatcher.prototype.qq = function (context, block) {
    return this.u11_1.q11(block);
  };
  WindowDispatcher.prototype.xq = function (timeMillis, continuation) {
    this.t11_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.a12_1 ? event.data == this$0.b12_1 : false) {
        event.stopPropagation();
        tmp = this$0.n11();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.n11();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.a12_1 = window_0;
    this.b12_1 = 'dispatchCoroutine';
    this.a12_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.o11 = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.p11 = function () {
    this.a12_1.postMessage(this.b12_1, '*');
  };
  WindowMessageQueue.$metadata$ = classMeta('WindowMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = classMeta('SchedulerTask', [Runnable]);
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      {
        var tmp0_also = new WindowDispatcher(_this__u8e3s4);
        {
        }
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = _this__u8e3s4;
          }
          tmp$ret$1.coroutineDispatcher = tmp0_also;
        }
        tmp$ret$2 = tmp0_also;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  NoOpLock.$metadata$ = classMeta('NoOpLock');
  function withLock(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.hs = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this.as_1 = this;
    this.bs_1 = this;
    this.cs_1 = false;
  }
  LinkedListNode.prototype.ds = function () {
    return this.as_1;
  };
  LinkedListNode.prototype.is = function () {
    return this.as_1;
  };
  LinkedListNode.prototype.js = function () {
    return this.bs_1;
  };
  LinkedListNode.prototype.ks = function () {
    return this.cs_1;
  };
  LinkedListNode.prototype.ls = function (node) {
    var prev = this.bs_1;
    node.as_1 = this;
    node.bs_1 = prev;
    prev.as_1 = node;
    this.bs_1 = node;
  };
  LinkedListNode.prototype.hs = function () {
    return this.ms();
  };
  LinkedListNode.prototype.ms = function () {
    if (this.cs_1)
      return false;
    var prev = this.bs_1;
    var next = this.as_1;
    prev.as_1 = next;
    next.bs_1 = prev;
    this.cs_1 = true;
    return true;
  };
  LinkedListNode.prototype.ws = function (node) {
    if (!(this.as_1 === this))
      return false;
    this.ls(node);
    return true;
  };
  LinkedListNode.prototype.ns = function (node, condition) {
    if (!condition())
      return false;
    this.ls(node);
    return true;
  };
  LinkedListNode.prototype.os = function (node, predicate) {
    if (!predicate(this.bs_1))
      return false;
    this.ls(node);
    return true;
  };
  LinkedListNode.prototype.ps = function (node, predicate, condition) {
    if (!predicate(this.bs_1))
      return false;
    if (!condition())
      return false;
    this.ls(node);
    return true;
  };
  LinkedListNode.prototype.qs = function () {
  };
  LinkedListNode.$metadata$ = classMeta('LinkedListNode');
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.rr_1 = null;
  }
  CommonThreadLocal.prototype.sr = function () {
    var tmp = this.rr_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.tr = function (value) {
    this.rr_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.tl = invokeOnCompletion$default;
  JobSupport.prototype.xl = cancel$default;
  JobSupport.prototype.i3 = plus;
  JobSupport.prototype.b3 = get;
  JobSupport.prototype.h3 = fold;
  JobSupport.prototype.g3 = minusKey;
  AbstractCoroutine.prototype.tl = invokeOnCompletion$default;
  AbstractCoroutine.prototype.xl = cancel$default;
  AbstractCoroutine.prototype.i3 = plus;
  AbstractCoroutine.prototype.b3 = get;
  AbstractCoroutine.prototype.h3 = fold;
  AbstractCoroutine.prototype.g3 = minusKey;
  StandaloneCoroutine.prototype.tl = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.xl = cancel$default;
  StandaloneCoroutine.prototype.i3 = plus;
  StandaloneCoroutine.prototype.b3 = get;
  StandaloneCoroutine.prototype.h3 = fold;
  StandaloneCoroutine.prototype.g3 = minusKey;
  LazyStandaloneCoroutine.prototype.tl = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.xl = cancel$default;
  LazyStandaloneCoroutine.prototype.i3 = plus;
  LazyStandaloneCoroutine.prototype.b3 = get;
  LazyStandaloneCoroutine.prototype.h3 = fold;
  LazyStandaloneCoroutine.prototype.g3 = minusKey;
  DeferredCoroutine.prototype.tl = invokeOnCompletion$default;
  DeferredCoroutine.prototype.xl = cancel$default;
  DeferredCoroutine.prototype.i3 = plus;
  DeferredCoroutine.prototype.b3 = get;
  DeferredCoroutine.prototype.h3 = fold;
  DeferredCoroutine.prototype.g3 = minusKey;
  LazyDeferredCoroutine.prototype.tl = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.xl = cancel$default;
  LazyDeferredCoroutine.prototype.i3 = plus;
  LazyDeferredCoroutine.prototype.b3 = get;
  LazyDeferredCoroutine.prototype.h3 = fold;
  LazyDeferredCoroutine.prototype.g3 = minusKey;
  CancellableContinuationImpl.prototype.mn = tryResume$default;
  CompletableDeferredImpl.prototype.tl = invokeOnCompletion$default;
  CompletableDeferredImpl.prototype.xl = cancel$default;
  CompletableDeferredImpl.prototype.i3 = plus;
  CompletableDeferredImpl.prototype.b3 = get;
  CompletableDeferredImpl.prototype.h3 = fold;
  CompletableDeferredImpl.prototype.g3 = minusKey;
  CoroutineDispatcher.prototype.b3 = get_0;
  CoroutineDispatcher.prototype.h3 = fold;
  CoroutineDispatcher.prototype.g3 = minusKey_0;
  CoroutineDispatcher.prototype.i3 = plus;
  _no_name_provided__qut3iv.prototype.b3 = get;
  _no_name_provided__qut3iv.prototype.h3 = fold;
  _no_name_provided__qut3iv.prototype.g3 = minusKey;
  _no_name_provided__qut3iv.prototype.i3 = plus;
  CoroutineName.prototype.b3 = get;
  CoroutineName.prototype.h3 = fold;
  CoroutineName.prototype.g3 = minusKey;
  CoroutineName.prototype.i3 = plus;
  EventLoop.prototype.i3 = plus;
  EventLoop.prototype.b3 = get_0;
  EventLoop.prototype.h3 = fold;
  EventLoop.prototype.g3 = minusKey_0;
  AwaitContinuation.prototype.mn = tryResume$default;
  JobImpl.prototype.tl = invokeOnCompletion$default;
  JobImpl.prototype.xl = cancel$default;
  JobImpl.prototype.i3 = plus;
  JobImpl.prototype.b3 = get;
  JobImpl.prototype.h3 = fold;
  JobImpl.prototype.g3 = minusKey;
  MainCoroutineDispatcher.prototype.i3 = plus;
  MainCoroutineDispatcher.prototype.b3 = get_0;
  MainCoroutineDispatcher.prototype.h3 = fold;
  MainCoroutineDispatcher.prototype.g3 = minusKey_0;
  SupervisorJobImpl.prototype.tl = invokeOnCompletion$default;
  SupervisorJobImpl.prototype.xl = cancel$default;
  SupervisorJobImpl.prototype.i3 = plus;
  SupervisorJobImpl.prototype.b3 = get;
  SupervisorJobImpl.prototype.h3 = fold;
  SupervisorJobImpl.prototype.g3 = minusKey;
  Unconfined.prototype.i3 = plus;
  Unconfined.prototype.b3 = get_0;
  Unconfined.prototype.h3 = fold;
  Unconfined.prototype.g3 = minusKey_0;
  AbstractSendChannel.prototype.hy = close$default;
  AbstractChannel.prototype.xl = cancel$default_0;
  AbstractChannel.prototype.hy = close$default;
  ArrayChannel.prototype.xl = cancel$default_0;
  ArrayChannel.prototype.hy = close$default;
  ConflatedChannel.prototype.xl = cancel$default_0;
  ConflatedChannel.prototype.hy = close$default;
  LinkedListChannel.prototype.xl = cancel$default_0;
  LinkedListChannel.prototype.hy = close$default;
  RendezvousChannel.prototype.xl = cancel$default_0;
  RendezvousChannel.prototype.hy = close$default;
  JsMainDispatcher.prototype.i3 = plus;
  JsMainDispatcher.prototype.b3 = get_0;
  JsMainDispatcher.prototype.h3 = fold;
  JsMainDispatcher.prototype.g3 = minusKey_0;
  UnconfinedEventLoop.prototype.i3 = plus;
  UnconfinedEventLoop.prototype.b3 = get_0;
  UnconfinedEventLoop.prototype.h3 = fold;
  UnconfinedEventLoop.prototype.g3 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.i3 = plus;
  SetTimeoutBasedDispatcher.prototype.b3 = get_0;
  SetTimeoutBasedDispatcher.prototype.h3 = fold;
  SetTimeoutBasedDispatcher.prototype.g3 = minusKey_0;
  NodeDispatcher.prototype.i3 = plus;
  NodeDispatcher.prototype.b3 = get_0;
  NodeDispatcher.prototype.h3 = fold;
  NodeDispatcher.prototype.g3 = minusKey_0;
  SetTimeoutDispatcher.prototype.i3 = plus;
  SetTimeoutDispatcher.prototype.b3 = get_0;
  SetTimeoutDispatcher.prototype.h3 = fold;
  SetTimeoutDispatcher.prototype.g3 = minusKey_0;
  WindowDispatcher.prototype.i3 = plus;
  WindowDispatcher.prototype.b3 = get_0;
  WindowDispatcher.prototype.h3 = fold;
  WindowDispatcher.prototype.g3 = minusKey_0;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = delay;
  _.$_$.b = Channel$default;
  _.$_$.c = CompletableDeferred$default;
  _.$_$.d = cancel$default;
  _.$_$.e = invokeOnCompletion$default;
  _.$_$.f = Job$default;
  _.$_$.g = SupervisorJob$default;
  _.$_$.h = async$default;
  _.$_$.i = cancel$default_1;
  _.$_$.j = launch$default;
  _.$_$.k = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.l = Factory_getInstance;
  _.$_$.m = Key_getInstance_0;
  _.$_$.n = Key_getInstance_1;
  _.$_$.o = Dispatchers_getInstance;
  _.$_$.p = GlobalScope_getInstance;
  _.$_$.q = Key_getInstance_3;
  _.$_$.r = cancelConsumed;
  _.$_$.s = LinkedListNode;
  _.$_$.t = recoverStackTrace;
  _.$_$.u = CancellableContinuationImpl;
  _.$_$.v = CloseableCoroutineDispatcher;
  _.$_$.w = CompletableJob;
  _.$_$.x = CoroutineExceptionHandler;
  _.$_$.y = CoroutineName;
  _.$_$.z = CoroutineScope_0;
  _.$_$.a1 = CoroutineScope;
  _.$_$.b1 = DisposableHandle;
  _.$_$.c1 = Job_0;
  _.$_$.d1 = Job;
  _.$_$.e1 = get_MODE_CANCELLABLE;
  _.$_$.f1 = SupervisorJob;
  _.$_$.g1 = cancel;
  _.$_$.h1 = cancel_2;
  _.$_$.i1 = cancel_0;
  _.$_$.j1 = cancel_1;
  _.$_$.k1 = get_job;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map