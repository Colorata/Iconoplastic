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
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var isObject = kotlin_kotlin.$_$.d7;
  var Unit_getInstance = kotlin_kotlin.$_$.d3;
  var plus = kotlin_kotlin.$_$.y5;
  var get = kotlin_kotlin.$_$.u5;
  var fold = kotlin_kotlin.$_$.t5;
  var minusKey = kotlin_kotlin.$_$.v5;
  var Continuation = kotlin_kotlin.$_$.s5;
  var classMeta = kotlin_kotlin.$_$.n6;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.m2;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.l5;
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var isInterface = kotlin_kotlin.$_$.b7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var toString = kotlin_kotlin.$_$.t9;
  var toString_0 = kotlin_kotlin.$_$.m7;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k5;
  var objectMeta = kotlin_kotlin.$_$.i7;
  var hashCode = kotlin_kotlin.$_$.s6;
  var equals = kotlin_kotlin.$_$.o6;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.y1;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.o5;
  var Key_getInstance = kotlin_kotlin.$_$.l2;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.n5;
  var get_0 = kotlin_kotlin.$_$.p5;
  var minusKey_0 = kotlin_kotlin.$_$.q5;
  var ContinuationInterceptor = kotlin_kotlin.$_$.r5;
  var Key = kotlin_kotlin.$_$.x5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Enum = kotlin_kotlin.$_$.t8;
  var startCoroutine = kotlin_kotlin.$_$.c6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.q9;
  var Long = kotlin_kotlin.$_$.w8;
  var RuntimeException = kotlin_kotlin.$_$.y8;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.h6;
  var Error_0 = kotlin_kotlin.$_$.u8;
  var Error_init_$Init$ = kotlin_kotlin.$_$.f1;
  var Element = kotlin_kotlin.$_$.w5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var anyToString = kotlin_kotlin.$_$.e6;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.s9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var CancellationException = kotlin_kotlin.$_$.j5;
  var ArrayList = kotlin_kotlin.$_$.e3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var UnsupportedOperationException = kotlin_kotlin.$_$.g9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var fillArrayVal = kotlin_kotlin.$_$.p6;
  var arrayCopy = kotlin_kotlin.$_$.t3;
  var Companion_getInstance = kotlin_kotlin.$_$.y2;
  var createFailure = kotlin_kotlin.$_$.j9;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var ensureNotNull = kotlin_kotlin.$_$.k9;
  var intercepted = kotlin_kotlin.$_$.m5;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.b1;
  var getStringHashCode = kotlin_kotlin.$_$.r6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.s;
  //endregion
  //region block: pre-declaration
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.gq(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
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
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
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
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob)
      this.bp(parentContext.v3(Key_getInstance_2()));
    this.ep_1 = parentContext.c4(this);
  }
  AbstractCoroutine.prototype.r3 = function () {
    return this.ep_1;
  };
  AbstractCoroutine.prototype.fp = function () {
    return this.ep_1;
  };
  AbstractCoroutine.prototype.gp = function () {
    return JobSupport.prototype.gp.call(this);
  };
  AbstractCoroutine.prototype.hp = function (value) {
  };
  AbstractCoroutine.prototype.ip = function (cause, handled) {
  };
  AbstractCoroutine.prototype.jp = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.kp = function (state) {
    if (state instanceof CompletedExceptionally)
      this.ip(state.lp_1, state.np());
    else {
      this.hp((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.s3 = function (result) {
    var state = this.op(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.pp(state);
  };
  AbstractCoroutine.prototype.pp = function (state) {
    return this.qp(state);
  };
  AbstractCoroutine.prototype.rp = function (exception) {
    handleCoroutineException(this.ep_1, exception);
  };
  AbstractCoroutine.prototype.sp = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.ep_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.sp.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.sp.call(this);
  };
  AbstractCoroutine.prototype.tp = function (start, receiver, block) {
    start.wp(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.vq() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.tp(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.tq = function (exception) {
    handleCoroutineException(this.r3(), exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.cr_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.cq = function () {
    startCoroutineCancellable_0(this.cr_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.zp();
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
    if (get_isReusableMode($this.rr())) {
      var tmp_0 = $this.er_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).pr();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.er_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.sr(cause);
  }
  function trySuspend($this) {
    {
      var tmp0_loop = $this.gr_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.to_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.gr_1.atomicfu$compareAndSet(0, 1))
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
      var tmp0_loop = $this.gr_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.to_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          switch (tmp0_subject) {
            case 0:
              if ($this.gr_1.atomicfu$compareAndSet(0, 2))
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
    var tmp0_elvis_lhs = $this.r3().v3(Key_getInstance_2());
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
    var handle = parent.hq(true, false, tmp$ret$1, 2, null);
    $this.ir_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.er_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tr($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.ur();
    $this.vr(cancellationCause);
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
      var tmp0_loop = $this.hr_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.so_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
            var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this.hr_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }
            detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CancelledContinuation) {
              if (tmp1__anonymous__uwfjfc.as()) {
                var tmp1_safe_receiver = onCancellation;
                if (tmp1_safe_receiver == null)
                  null;
                else {
                  var tmp$ret$1;
                  {
                    {
                    }
                    tmp$ret$1 = $this.wr(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.f1());
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
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.ur();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.er_1 = delegate;
    {
    }
    this.fr_1 = this.er_1.r3();
    this.gr_1 = atomic$int$1(0);
    this.hr_1 = atomic$ref$1(Active_getInstance());
    this.ir_1 = null;
  }
  CancellableContinuationImpl.prototype.bs = function () {
    return this.er_1;
  };
  CancellableContinuationImpl.prototype.r3 = function () {
    return this.fr_1;
  };
  CancellableContinuationImpl.prototype.zp = function () {
    return this.hr_1.so_1;
  };
  CancellableContinuationImpl.prototype.aq = function () {
    var tmp = this.zp();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.cs = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.aq()) {
      handle.ds();
      this.ir_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.es = function () {
    return this.zp();
  };
  CancellableContinuationImpl.prototype.fs = function (takenState, cause) {
    var tmp0_loop = this.hr_1;
    while (true) {
      {
        var tmp1__anonymous__uwfjfc = tmp0_loop.so_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          throw IllegalStateException_init_$Create$('Not completed');
        } else {
          if (tmp0_subject instanceof CompletedExceptionally)
            return Unit_getInstance();
          else {
            if (tmp0_subject instanceof CompletedContinuation) {
              {
                var tmp0_check = !tmp1__anonymous__uwfjfc.ls();
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
              var update = tmp1__anonymous__uwfjfc.ms(null, null, null, null, cause, 15, null);
              if (this.hr_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
                tmp1__anonymous__uwfjfc.ns(this, cause);
                return Unit_getInstance();
              }
            } else {
              if (this.hr_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
                return Unit_getInstance();
              }
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.vr = function (cause) {
    {
      var tmp0_loop = this.hr_1;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__uwfjfc = tmp0_loop.so_1;
          if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
            return false;
          var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
          if (!this.hr_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
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
              tmp$ret$1 = this.os(tmp0_safe_receiver, cause);
            }
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, this.rr());
          return true;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.ps = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.vr(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.os = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this.r3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.wr = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.r3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.qs = function (parent) {
    return parent.dq();
  };
  CancellableContinuationImpl.prototype.rs = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.ir_1 == null) {
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
    var state = this.zp();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.lp_1, this);
    if (get_isCancellableMode(this.rr())) {
      var job = this.r3().v3(Key_getInstance_2());
      if (!(job == null) ? !job.gp() : false) {
        var cause = job.dq();
        this.fs(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.ss(state);
  };
  CancellableContinuationImpl.prototype.s3 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.rr();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.ur = function () {
    var tmp0_elvis_lhs = this.ir_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.ds();
    this.ir_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.ss = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.gs_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.ts = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.ts.call(this, state);
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
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.er_1);
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.sp() + '(' + toDebugString(this.er_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.sp = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = classMeta('CancellableContinuationImpl', [CancellableContinuation, CoroutineStackFrame], undefined, undefined, undefined, DispatchedTask.prototype);
  function CancelHandler() {
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
    this.gs_1 = result;
    this.hs_1 = cancelHandler;
    this.is_1 = onCancellation;
    this.js_1 = idempotentResume;
    this.ks_1 = cancelCause;
  }
  CompletedContinuation.prototype.ls = function () {
    return !(this.ks_1 == null);
  };
  CompletedContinuation.prototype.ns = function (cont, cause) {
    var tmp0_safe_receiver = this.hs_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = cont.os(tmp0_safe_receiver, cause);
      }
    }
    var tmp1_safe_receiver = this.is_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = cont.wr(tmp1_safe_receiver, cause);
      }
    }
  };
  CompletedContinuation.prototype.ws = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.ms = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.gs_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.hs_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.is_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.js_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.ks_1;
    return this.ws(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.gs_1) + ', cancelHandler=' + this.hs_1 + ', onCancellation=' + this.is_1 + ', idempotentResume=' + toString(this.js_1) + ', cancelCause=' + this.ks_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.gs_1 == null ? 0 : hashCode(this.gs_1);
    result = imul(result, 31) + (this.hs_1 == null ? 0 : hashCode(this.hs_1)) | 0;
    result = imul(result, 31) + (this.is_1 == null ? 0 : hashCode(this.is_1)) | 0;
    result = imul(result, 31) + (this.js_1 == null ? 0 : hashCode(this.js_1)) | 0;
    result = imul(result, 31) + (this.ks_1 == null ? 0 : hashCode(this.ks_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.gs_1, tmp0_other_with_cast.gs_1))
      return false;
    if (!equals(this.hs_1, tmp0_other_with_cast.hs_1))
      return false;
    if (!equals(this.is_1, tmp0_other_with_cast.is_1))
      return false;
    if (!equals(this.js_1, tmp0_other_with_cast.js_1))
      return false;
    if (!equals(this.ks_1, tmp0_other_with_cast.ks_1))
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
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
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
    this.lp_1 = cause;
    this.mp_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.f1 = function () {
    return this.lp_1;
  };
  CompletedExceptionally.prototype.np = function () {
    return this.mp_1.wo_1;
  };
  CompletedExceptionally.prototype.xs = function () {
    return this.mp_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.lp_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.zr_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.as = function () {
    return this.zr_1.atomicfu$compareAndSet(false, true);
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
    this.ys_1 = result;
    this.zs_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.ys_1) + ', onCancellation=' + this.zs_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.ys_1 == null ? 0 : hashCode(this.ys_1);
    result = imul(result, 31) + hashCode(this.zs_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.ys_1, tmp0_other_with_cast.ys_1))
      return false;
    if (!equals(this.zs_1, tmp0_other_with_cast.zs_1))
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
  CoroutineDispatcher.prototype.bt = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.t3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.u3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.dt();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.v3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.et(context, exception);
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
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
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
  CoroutineStart.prototype.wp = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.q4();
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
  CoroutineStart.prototype.vq = function () {
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
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.gt_1 = new Long(0, 0);
    this.ht_1 = false;
    this.it_1 = null;
  }
  EventLoop.prototype.jt = function () {
    var tmp0_elvis_lhs = this.it_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.nt();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.us();
    return true;
  };
  EventLoop.prototype.ot = function (task) {
    var tmp0_elvis_lhs = this.it_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = new ArrayQueue();
        {
        }
        {
          this.it_1 = tmp0_also;
        }
        tmp$ret$0 = tmp0_also;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.pt(task);
  };
  EventLoop.prototype.qt = function () {
    return this.gt_1.w(delta(this, true)) >= 0;
  };
  EventLoop.prototype.rt = function () {
    var tmp0_safe_receiver = this.it_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.st();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.tt = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.gt_1 = tmp0_this.gt_1.v4(delta(this, unconfined));
    if (!unconfined)
      this.ht_1 = true;
  };
  EventLoop.prototype.ut = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.gt_1 = tmp0_this.gt_1.w4(delta(this, unconfined));
    if (this.gt_1.w(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this.ht_1) {
      this.vt();
    }
  };
  EventLoop.prototype.vt = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.wt_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.xt = function () {
    var tmp0_elvis_lhs = this.wt_1.zt();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_also = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance().wt_1.au(tmp0_also);
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
  NonDisposableHandle.prototype.ds = function () {
  };
  NonDisposableHandle.prototype.lq = function (cause) {
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
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
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
    this.bu_1 = isActive;
  }
  Empty.prototype.gp = function () {
    return this.bu_1;
  };
  Empty.prototype.cu = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.bu_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.gp = function () {
    return true;
  };
  NodeList.prototype.cu = function () {
    return this;
  };
  NodeList.prototype.gu = function (state) {
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
          tmp0_apply.e6('List{');
          tmp0_apply.e6(state);
          tmp0_apply.e6('}[');
          var first = true;
          {
            var cur = this.ku();
            while (!equals(cur, this)) {
              if (cur instanceof JobNode) {
                var tmp0__anonymous__q1qw7t = cur;
                if (first)
                  first = false;
                else {
                  tmp0_apply.e6(', ');
                }
                tmp0_apply.d6(tmp0__anonymous__q1qw7t);
              }
              cur = cur.hu_1;
            }
          }
          tmp0_apply.e6(']');
        }
        tmp$ret$0 = tmp0_apply;
      }
      tmp$ret$1 = tmp$ret$0.toString();
    }
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.gu('Active') : anyToString(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.vu = function () {
    var tmp = this.uu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.gp = function () {
    return true;
  };
  JobNode.prototype.cu = function () {
    return null;
  };
  JobNode.prototype.ds = function () {
    return this.vu().iq(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.vu()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.bv_1.so_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.bv_1.so_1;
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
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lp_1;
    var wasCancelling = false;
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        wasCancelling = state.cv();
        var exceptions = state.dv(proposedException);
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
      var handled = cancelParent($this, finalException) ? true : $this.tq(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).xs();
      }
    }
    if (!wasCancelling)
      $this.qq(finalException);
    $this.kp(finalState);
    var casSuccess = $this.zo_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.i()) {
      if (state.cv()) {
        var tmp$ret$0;
        {
          var tmp0_elvis_lhs = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.jp() : tmp0_elvis_lhs, null, $this);
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
    if (!$this.zo_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.qq(null);
    $this.kp(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.yp();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      {
        {
        }
        tmp0_safe_receiver.ds();
        tmp$ret$0 = $this.xp(NonDisposableHandle_getInstance());
      }
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lp_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.rp(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.cu();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.qq(cause);
    {
      var exception = null;
      {
        var cur = list.ku();
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
          cur = cur.hu_1;
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
          tmp$ret$2 = $this.rp(tmp0_safe_receiver_0);
        }
      }
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.rq())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.yp();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.lq(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    {
      var cur = _this__u8e3s4.ku();
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
        cur = cur.hu_1;
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
        tmp$ret$2 = $this.rp(tmp0_safe_receiver_0);
      }
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.bu_1)
        return 0;
      if (!$this.zo_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.cq();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.zo_1.atomicfu$compareAndSet(state, state.ev_1))
          return -1;
        $this.cq();
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
    node.uu_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      var tmp$ret$0;
      {
        tmp$ret$0 = $this.zp() === expect;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.ou(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.bu_1 ? list : new InactiveNodeList(list);
    $this.zo_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.xu(new NodeList());
    var tmp$ret$0;
    {
      tmp$ret$0 = state.hu_1;
    }
    var list = tmp$ret$0;
    $this.zo_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = $this.zp();
          var tmp;
          if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
            tmp = true;
          } else {
            var tmp_0;
            if (tmp0__anonymous__q1qw7t instanceof Finishing) {
              tmp_0 = tmp0__anonymous__q1qw7t.fv();
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
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.jp() : tmp0_elvis_lhs, null, $this);
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).oq();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block: {
          var tmp0__anonymous__q1qw7t = $this.zp();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Finishing) {
            var tmp$ret$4;
            {
              var tmp$ret$3;
              {
                if (tmp0__anonymous__q1qw7t.gv())
                  return get_TOO_LATE_TO_CANCEL();
                var wasCancelling = tmp0__anonymous__q1qw7t.cv();
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
                  tmp0__anonymous__q1qw7t.hv(causeException);
                }
                var tmp$ret$2;
                {
                  var tmp1_takeIf = tmp0__anonymous__q1qw7t.iv();
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
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__q1qw7t.yu_1, tmp1_safe_receiver);
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
              if (tmp0__anonymous__q1qw7t.gp()) {
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
    var tmp1_elvis_lhs = state.cu();
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
    if (!$this.zo_1.atomicfu$compareAndSet(state, cancelling))
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
      if (finishing.fv())
        return get_COMPLETING_ALREADY();
      finishing.jv(true);
      if (!(finishing === state)) {
        if (!$this.zo_1.atomicfu$compareAndSet(state, finishing))
          return get_COMPLETING_RETRY();
      }
      {
      }
      var wasCancelling = finishing.cv();
      var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = finishing.hv(tmp0_safe_receiver.lp_1);
        }
      }
      var tmp$ret$2;
      {
        var tmp0_takeIf = finishing.iv();
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
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lp_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.cu();
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
      var handle = child_1.ov_1.hq(false, false, tmp$ret$1, 1, null);
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
    $this.qp(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      {
        var tmp0__get_isRemoved__hsfvgr = cur;
        tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.ju_1;
      }
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      {
        var tmp1__get_prevNode__b1i0ed = cur;
        tmp$ret$1 = tmp1__get_prevNode__b1i0ed.iu_1;
      }
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      {
        var tmp2__get_nextNode__ek7k4a = cur;
        tmp$ret$2 = tmp2__get_nextNode__ek7k4a.hu_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      {
        var tmp3__get_isRemoved__lodk3s = cur;
        tmp$ret$3 = tmp3__get_isRemoved__lodk3s.ju_1;
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
      tmp = state.cv() ? 'Cancelling' : state.fv() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.gp() ? 'Active' : 'New';
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
    this.yu_1 = list;
    this.zu_1 = atomic$boolean$1(isCompleting);
    this.av_1 = atomic$ref$1(rootCause);
    this.bv_1 = atomic$ref$1(null);
  }
  Finishing.prototype.cu = function () {
    return this.yu_1;
  };
  Finishing.prototype.jv = function (value) {
    this.zu_1.wo_1 = value;
  };
  Finishing.prototype.fv = function () {
    return this.zu_1.wo_1;
  };
  Finishing.prototype.pv = function (value) {
    this.av_1.so_1 = value;
  };
  Finishing.prototype.iv = function () {
    return this.av_1.so_1;
  };
  Finishing.prototype.gv = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.cv = function () {
    return !(this.iv() == null);
  };
  Finishing.prototype.gp = function () {
    return this.iv() == null;
  };
  Finishing.prototype.dv = function (proposedException) {
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
    var rootCause = this.iv();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      {
        {
        }
        tmp$ret$1 = list.qa(0, tmp0_safe_receiver);
      }
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.b(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.hv = function (exception) {
    var rootCause = this.iv();
    if (rootCause == null) {
      this.pv(exception);
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
    return 'Finishing[cancelling=' + this.cv() + ', completing=' + this.fv() + ', rootCause=' + this.iv() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.yu_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.uv_1 = parent;
    this.vv_1 = state;
    this.wv_1 = child;
    this.xv_1 = proposedUpdate;
  }
  ChildCompletion.prototype.yv = function (cause) {
    continueCompleting(this.uv_1, this.vv_1, this.wv_1, this.xv_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.yv(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function JobSupport(active) {
    this.zo_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.ap_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.p1 = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype.xp = function (value) {
    this.ap_1.so_1 = value;
  };
  JobSupport.prototype.yp = function () {
    return this.ap_1.so_1;
  };
  JobSupport.prototype.bp = function (parent) {
    {
    }
    if (parent == null) {
      this.xp(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.bq();
    var handle = parent.pq(this);
    this.xp(handle);
    if (this.aq()) {
      handle.ds();
      this.xp(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.zp = function () {
    {
      var tmp0_loop = this.zo_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.so_1;
          if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
            return tmp1__anonymous__uwfjfc;
          tmp1__anonymous__uwfjfc.zv(this);
        }
      }
    }
  };
  JobSupport.prototype.gp = function () {
    var state = this.zp();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.gp();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.aq = function () {
    var tmp = this.zp();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.bq = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.zp();
          var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
          if (tmp0_subject === 0)
            return false;
          else if (tmp0_subject === 1)
            return true;
        }
      }
    }
  };
  JobSupport.prototype.cq = function () {
  };
  JobSupport.prototype.dq = function () {
    var state = this.zp();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.iv();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.eq(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
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
          tmp = this.fq(state.lp_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.eq = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_elvis_lhs_0 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.jp() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.fq = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.eq(_this__u8e3s4, message);
  };
  JobSupport.prototype.gq = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.zp();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof Empty) {
            if (tmp0__anonymous__q1qw7t.bu_1) {
              if (this.zo_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              var list = tmp0__anonymous__q1qw7t.cu();
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
                    rootCause = tmp0__anonymous__q1qw7t.iv();
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
                        tmp_2 = !tmp0__anonymous__q1qw7t.fv();
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
                invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lp_1);
              }
              return NonDisposableHandle_getInstance();
            }
          }
        }
      }
    }
  };
  JobSupport.prototype.iq = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__q1qw7t = this.zp();
          var tmp0_subject = tmp0__anonymous__q1qw7t;
          if (tmp0_subject instanceof JobNode) {
            if (!(tmp0__anonymous__q1qw7t === node))
              return Unit_getInstance();
            if (this.zo_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
              if (!(tmp0__anonymous__q1qw7t.cu() == null)) {
                node.wu();
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
  JobSupport.prototype.jq = function () {
    return false;
  };
  JobSupport.prototype.jp = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.kq = function (parentJob) {
    this.mq(parentJob);
  };
  JobSupport.prototype.lq = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.mq(cause) ? this.sq() : false;
  };
  JobSupport.prototype.mq = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.jq()) {
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
      this.qp(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.nq = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.jp() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.oq = function () {
    var state = this.zp();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.iv();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.lp_1;
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
  JobSupport.prototype.op = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__q1qw7t = this.zp();
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
  JobSupport.prototype.pq = function (child) {
    var tmp$ret$1;
    {
      var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = this.hq(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.rp = function (exception) {
    throw exception;
  };
  JobSupport.prototype.qq = function (cause) {
  };
  JobSupport.prototype.rq = function () {
    return false;
  };
  JobSupport.prototype.sq = function () {
    return true;
  };
  JobSupport.prototype.tq = function (exception) {
    return false;
  };
  JobSupport.prototype.kp = function (state) {
  };
  JobSupport.prototype.qp = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.uq() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.uq = function () {
    return this.sp() + '{' + stateString(this, this.zp()) + '}';
  };
  JobSupport.prototype.sp = function () {
    return get_classSimpleName(this);
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
    this.ev_1 = list;
  }
  InactiveNodeList.prototype.cu = function () {
    return this.ev_1;
  };
  InactiveNodeList.prototype.gp = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.ev_1.gu('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.ov_1 = childJob;
  }
  ChildHandleNode.prototype.yv = function (cause) {
    return this.ov_1.kq(this.vu());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.yv(cause);
  };
  ChildHandleNode.prototype.lq = function (cause) {
    return this.vu().lq(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.ew_1 = handler;
    this.fw_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.yv = function (cause) {
    if (this.fw_1.atomicfu$compareAndSet(0, 1))
      this.ew_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.yv(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.kw_1 = handler;
  }
  InvokeOnCompletion.prototype.yv = function (cause) {
    return this.kw_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.yv(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function IncompleteStateBox(state) {
    this.lw_1 = state;
  }
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.qw_1 = child;
  }
  ChildContinuation.prototype.yv = function (cause) {
    this.qw_1.ps(this.qw_1.qs(this.vu()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.yv(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function handlesException($this) {
    var tmp = $this.yp();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vu();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.sq())
        return true;
      var tmp_1 = parentJob.yp();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.vu();
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
    this.bp(parent);
    this.tw_1 = handlesException(this);
  }
  JobImpl.prototype.jq = function () {
    return true;
  };
  JobImpl.prototype.sq = function () {
    return this.tw_1;
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
    var tmp0_elvis_lhs = this.ww();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.ww = function () {
    var main = Dispatchers_getInstance().bx();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.vw();
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
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.bt = function (context) {
    return false;
  };
  Unconfined.prototype.ct = function (context, block) {
    var yieldContext = context.v3(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.ex_1 = true;
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
  function ensureCapacity($this) {
    var currentSize = $this.kt_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    {
      var tmp0_copyInto = $this.kt_1;
      var tmp1_copyInto = $this.lt_1;
      var tmp2_copyInto = tmp0_copyInto.length;
      arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newElements;
    }
    var tmp$ret$2;
    {
      var tmp3_copyInto = $this.kt_1;
      var tmp4_copyInto = $this.kt_1.length - $this.lt_1 | 0;
      var tmp5_copyInto = $this.lt_1;
      arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
      tmp$ret$2 = newElements;
    }
    $this.kt_1 = newElements;
    $this.lt_1 = 0;
    $this.mt_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(16), null);
    }
    tmp.kt_1 = tmp$ret$0;
    this.lt_1 = 0;
    this.mt_1 = 0;
  }
  ArrayQueue.prototype.st = function () {
    return this.lt_1 === this.mt_1;
  };
  ArrayQueue.prototype.pt = function (element) {
    this.kt_1[this.mt_1] = element;
    this.mt_1 = (this.mt_1 + 1 | 0) & (this.kt_1.length - 1 | 0);
    if (this.mt_1 === this.lt_1)
      ensureCapacity(this);
  };
  ArrayQueue.prototype.nt = function () {
    if (this.lt_1 === this.mt_1)
      return null;
    var element = this.kt_1[this.lt_1];
    this.kt_1[this.lt_1] = null;
    this.lt_1 = (this.lt_1 + 1 | 0) & (this.kt_1.length - 1 | 0);
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
      if (tmp1_resumeCancellableWith.kr_1.bt(tmp1_resumeCancellableWith.r3())) {
        tmp1_resumeCancellableWith.mr_1 = state;
        tmp1_resumeCancellableWith.fx(get_MODE_CANCELLABLE());
        tmp_0 = tmp1_resumeCancellableWith.kr_1.ct(tmp1_resumeCancellableWith.r3(), tmp1_resumeCancellableWith);
      } else {
        var tmp$ret$0;
        $l$block: {
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          {
          }
          var eventLoop = ThreadLocalEventLoop_getInstance().xt();
          if (false ? eventLoop.rt() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.qt()) {
            tmp1_resumeCancellableWith.mr_1 = state;
            tmp1_resumeCancellableWith.fx(tmp0_executeUnconfined);
            eventLoop.ot(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            {
              eventLoop.tt(true);
              try {
                {
                  var tmp$ret$3;
                  $l$block_0: {
                    var job = tmp1_resumeCancellableWith.r3().v3(Key_getInstance_2());
                    if (!(job == null) ? !job.gp() : false) {
                      var cause = job.dq();
                      tmp1_resumeCancellableWith.fs(state, cause);
                      var tmp$ret$2;
                      {
                        var tmp$ret$1;
                        {
                          var tmp0_failure = Companion_getInstance();
                          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                        }
                        tmp$ret$2 = tmp1_resumeCancellableWith.s3(tmp$ret$1);
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
                        var tmp0_withContinuationContext = tmp1_resumeCancellableWith.lr_1;
                        var tmp1_withContinuationContext = tmp1_resumeCancellableWith.nr_1;
                        tmp$ret$4 = tmp1_resumeCancellableWith.lr_1.s3(result);
                      }
                    }
                  }
                }
                $l$loop: while (true) {
                  if (!eventLoop.jt())
                    break $l$loop;
                }
              } catch ($p) {
                if ($p instanceof Error) {
                  tmp1_resumeCancellableWith.vs($p, null);
                } else {
                  throw $p;
                }
              }
              finally {
                eventLoop.ut(true);
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
      tmp = _this__u8e3s4.s3(result);
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.or_1.so_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.kr_1 = dispatcher;
    this.lr_1 = continuation;
    this.mr_1 = get_UNDEFINED();
    this.nr_1 = threadContextElements(this.r3());
    this.or_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.gx = function () {
    return this.lr_1;
  };
  DispatchedContinuation.prototype.r3 = function () {
    return this.lr_1.r3();
  };
  DispatchedContinuation.prototype.hx = function () {
    return this.nr_1;
  };
  DispatchedContinuation.prototype.pr = function () {
    return !(this.or_1.so_1 == null);
  };
  DispatchedContinuation.prototype.ix = function () {
    {
      var tmp0_loop = this.or_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.so_1;
          if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
            return Unit_getInstance();
        }
      }
    }
  };
  DispatchedContinuation.prototype.dt = function () {
    this.ix();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ur();
    }
  };
  DispatchedContinuation.prototype.tr = function (continuation) {
    {
      var tmp0_loop = this.or_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.so_1;
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
            if (this.or_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
              return null;
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
              {
                var tmp0_require = this.or_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
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
  DispatchedContinuation.prototype.sr = function (cause) {
    {
      var tmp0_loop = this.or_1;
      while (true) {
        {
          var tmp1__anonymous__uwfjfc = tmp0_loop.so_1;
          var tmp0_subject = tmp1__anonymous__uwfjfc;
          if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
            if (this.or_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
              return true;
          } else {
            if (tmp0_subject instanceof Error)
              return true;
            else {
              if (this.or_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
                return false;
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.es = function () {
    var state = this.mr_1;
    {
    }
    this.mr_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.bs = function () {
    return this;
  };
  DispatchedContinuation.prototype.s3 = function (result) {
    var context = this.lr_1.r3();
    var state = toState$default(result, null, 1, null);
    if (this.kr_1.bt(context)) {
      this.mr_1 = state;
      this.fx(get_MODE_ATOMIC());
      this.kr_1.ct(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        {
        }
        var eventLoop = ThreadLocalEventLoop_getInstance().xt();
        if (false ? eventLoop.rt() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.qt()) {
          this.mr_1 = state;
          this.fx(tmp0_executeUnconfined);
          eventLoop.ot(this);
          tmp = true;
        } else {
          {
            eventLoop.tt(true);
            try {
              {
                var tmp$ret$1;
                {
                  var tmp0_withCoroutineContext = this.r3();
                  var tmp1_withCoroutineContext = this.nr_1;
                  tmp$ret$1 = this.lr_1.s3(result);
                }
              }
              $l$loop: while (true) {
                if (!eventLoop.jt())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.vs($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.ut(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.fs = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.zs_1(cause);
    }
  };
  DispatchedContinuation.prototype.jx = function (state) {
    var job = this.r3().v3(Key_getInstance_2());
    if (!(job == null) ? !job.gp() : false) {
      var cause = job.dq();
      this.fs(state, cause);
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        }
        tmp$ret$1 = this.s3(tmp$ret$0);
      }
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.kx = function (result) {
    var tmp$ret$0;
    {
      var tmp0_withContinuationContext = this.lr_1;
      var tmp1_withContinuationContext = this.nr_1;
      tmp$ret$0 = this.lr_1.s3(result);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.kr_1 + ', ' + toDebugString(this.lr_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    {
    }
    var eventLoop = ThreadLocalEventLoop_getInstance().xt();
    if (doYield ? eventLoop.rt() : false)
      return false;
    var tmp;
    if (eventLoop.qt()) {
      _this__u8e3s4.mr_1 = contState;
      _this__u8e3s4.fx(mode);
      eventLoop.ot(_this__u8e3s4);
      tmp = true;
    } else {
      {
        eventLoop.tt(true);
        try {
          block();
          $l$loop: while (true) {
            if (!eventLoop.jt())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.vs($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.ut(true);
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
    this.qr_1 = resumeMode;
  }
  DispatchedTask.prototype.fx = function (_set____db54di) {
    this.qr_1 = _set____db54di;
  };
  DispatchedTask.prototype.rr = function () {
    return this.qr_1;
  };
  DispatchedTask.prototype.fs = function (takenState, cause) {
  };
  DispatchedTask.prototype.ss = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.ts = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lp_1;
  };
  DispatchedTask.prototype.us = function () {
    {
    }
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.bs();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.lr_1;
      var tmp$ret$5;
      {
        var tmp0_withContinuationContext = delegate.nr_1;
        var context = continuation.r3();
        var state = this.es();
        var exception = this.ts(state);
        var job = (exception == null ? get_isCancellableMode(this.qr_1) : false) ? context.v3(Key_getInstance_2()) : null;
        var tmp_0;
        if (!(job == null) ? !job.gp() : false) {
          var cause = job.dq();
          this.fs(state, cause);
          var tmp$ret$0;
          {
            var tmp0_failure = Companion_getInstance();
            var tmp1_failure = recoverStackTrace(cause, continuation);
            tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
          }
          tmp_0 = continuation.s3(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception == null)) {
            var tmp$ret$2;
            {
              var tmp$ret$1;
              {
                var tmp0_failure_0 = Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
              }
              tmp$ret$2 = continuation.s3(tmp$ret$1);
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            {
              var tmp2_resume = this.ss(state);
              var tmp$ret$3;
              {
                var tmp0_success = Companion_getInstance();
                tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
              }
              tmp$ret$4 = continuation.s3(tmp$ret$3);
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
            var tmp0_success_0 = Companion_getInstance();
            var tmp1_success = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp_2 = tmp$ret$6;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Error) {
            var tmp$ret$7;
            {
              var tmp2_failure = Companion_getInstance();
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
      this.vs(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.vs = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.bs().r3(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    {
    }
    var delegate = _this__u8e3s4.bs();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.qr_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.kr_1;
      var context = delegate.r3();
      if (dispatcher.bt(context)) {
        dispatcher.ct(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.tt(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.jt())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.vs($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.ut(true);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().xt();
    if (eventLoop.qt()) {
      eventLoop.ot(_this__u8e3s4);
    } else {
      {
        eventLoop.tt(true);
        try {
          {
            resume(_this__u8e3s4, _this__u8e3s4.bs(), true);
          }
          $l$loop: while (true) {
            if (!eventLoop.jt())
              break $l$loop;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this__u8e3s4.vs($p, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.ut(true);
        }
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.es();
    var exception = _this__u8e3s4.ts(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      {
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      {
        var tmp1_success = Companion_getInstance();
        var tmp2_success = _this__u8e3s4.ss(state);
        tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      {
        var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.lr_1;
        var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.nr_1;
        tmp$ret$2 = tmp3_resumeUndispatchedWith.lr_1.s3(result);
      }
    } else
      delegate.s3(result);
  }
  function Symbol(symbol) {
    this.lx_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.lx_1 + '>';
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance();
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
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    }
    completion.s3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      {
        var tmp0_success = Companion_getInstance();
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
            var tmp0_failure = Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          }
          tmp$ret$2 = actualCompletion.s3(tmp$ret$1);
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
          var tmp0_success = Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
        }
        tmp$ret$4 = actualCompletion.s3(tmp$ret$3);
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
            var tmp0_withCoroutineContext = completion.r3();
            var tmp$ret$3;
            {
              var tmp$ret$2;
              {
                var tmp$ret$1;
                {
                  tmp$ret$1 = _this__u8e3s4;
                }
                var a = tmp$ret$1;
                tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.di(receiver, actualCompletion);
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
              var tmp0_failure = Companion_getInstance();
              tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp$ret$7 = actualCompletion.s3(tmp$ret$6);
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
            var tmp0_success = Companion_getInstance();
            tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
          }
          tmp$ret$10 = actualCompletion.s3(tmp$ret$9);
        }
      }
    }
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
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
    var combined = _this__u8e3s4.fp().c4(context);
    return (!(combined === Dispatchers_getInstance().xw_1) ? combined.v3(Key_getInstance()) == null : false) ? combined.c4(Dispatchers_getInstance().xw_1) : combined;
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
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).fd();
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
    this.xw_1 = createDefaultDispatcher();
    this.yw_1 = Unconfined_getInstance();
    this.zw_1 = new JsMainDispatcher(this.xw_1, false);
    this.ax_1 = null;
  }
  Dispatchers.prototype.bx = function () {
    var tmp0_elvis_lhs = this.ax_1;
    return tmp0_elvis_lhs == null ? this.zw_1 : tmp0_elvis_lhs;
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
    this.nx_1 = delegate;
    this.ox_1 = invokeImmediately;
    this.px_1 = this.ox_1 ? this : new JsMainDispatcher(this.nx_1, true);
  }
  JsMainDispatcher.prototype.vw = function () {
    return this.px_1;
  };
  JsMainDispatcher.prototype.bt = function (context) {
    return !this.ox_1;
  };
  JsMainDispatcher.prototype.ct = function (context, block) {
    return this.nx_1.ct(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.ww();
    return tmp0_elvis_lhs == null ? this.nx_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.ct = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.ux_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.ux_1;
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
        tmp_1 = equals(other.ux_1, this.ux_1);
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
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.ux_1) | 0, 31);
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
  NodeDispatcher.prototype.xx = function () {
    process.nextTick(this.hy().dy_1);
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
  SetTimeoutDispatcher.prototype.xx = function () {
    setTimeout(this.hy().dy_1, 0);
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
      this$0.py();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.ey_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.dy_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.qy = function () {
    this.ey_1.xx();
  };
  ScheduledMessageQueue.prototype.ry = function () {
    setTimeout(this.dy_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.gy_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.hy = function () {
    return this.gy_1;
  };
  SetTimeoutBasedDispatcher.prototype.ct = function (context, block) {
    this.gy_1.sy(block);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function MessageQueue() {
    ArrayQueue.call(this);
    this.ny_1 = 16;
    this.oy_1 = false;
  }
  MessageQueue.prototype.sy = function (element) {
    this.pt(element);
    if (!this.oy_1) {
      this.oy_1 = true;
      this.qy();
    }
  };
  MessageQueue.prototype.py = function () {
    try {
      {
        var tmp0_repeat = this.ny_1;
        {
        }
        var inductionVariable = 0;
        if (inductionVariable < tmp0_repeat)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            {
              var tmp0_elvis_lhs = this.nt();
              var tmp;
              if (tmp0_elvis_lhs == null) {
                return Unit_getInstance();
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var element = tmp;
              element.us();
            }
          }
           while (inductionVariable < tmp0_repeat);
      }
    }finally {
      if (this.st()) {
        this.oy_1 = false;
      } else {
        this.ry();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.uy_1 = window_0;
    this.vy_1 = new WindowMessageQueue(this.uy_1);
  }
  WindowDispatcher.prototype.ct = function (context, block) {
    return this.vy_1.sy(block);
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.bz_1 ? event.data == this$0.cz_1 : false) {
        event.stopPropagation();
        tmp = this$0.py();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.py();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.bz_1 = window_0;
    this.cz_1 = 'dispatchCoroutine';
    this.bz_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.qy = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.ry = function () {
    this.bz_1.postMessage(this.cz_1, '*');
  };
  WindowMessageQueue.$metadata$ = classMeta('WindowMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function await_0(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.cs();
      {
        var tmp = await$lambda(cancellable);
        _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
      }
      tmp$ret$0 = cancellable.rs();
    }
    return tmp$ret$0;
  }
  function await$lambda($cancellable) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_success = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(it);
        }
        tmp$ret$1 = $cancellable.s3(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
  function await$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
        }
        tmp$ret$1 = $cancellable.s3(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
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
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this.hu_1 = this;
    this.iu_1 = this;
    this.ju_1 = false;
  }
  LinkedListNode.prototype.ku = function () {
    return this.hu_1;
  };
  LinkedListNode.prototype.lu = function () {
    return this.hu_1;
  };
  LinkedListNode.prototype.mu = function () {
    return this.iu_1;
  };
  LinkedListNode.prototype.nu = function () {
    return this.ju_1;
  };
  LinkedListNode.prototype.ou = function (node) {
    var prev = this.iu_1;
    node.hu_1 = this;
    node.iu_1 = prev;
    prev.hu_1 = node;
    this.iu_1 = node;
  };
  LinkedListNode.prototype.wu = function () {
    return this.pu();
  };
  LinkedListNode.prototype.pu = function () {
    if (this.ju_1)
      return false;
    var prev = this.iu_1;
    var next = this.hu_1;
    prev.hu_1 = next;
    next.iu_1 = prev;
    this.ju_1 = true;
    return true;
  };
  LinkedListNode.prototype.xu = function (node) {
    if (!(this.hu_1 === this))
      return false;
    this.ou(node);
    return true;
  };
  LinkedListNode.prototype.qu = function (node, condition) {
    if (!condition())
      return false;
    this.ou(node);
    return true;
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
  function synchronized(lock, block) {
    return block();
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.yt_1 = null;
  }
  CommonThreadLocal.prototype.zt = function () {
    var tmp = this.yt_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.au = function (value) {
    this.yt_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.hq = invokeOnCompletion$default;
  JobSupport.prototype.c4 = plus;
  JobSupport.prototype.v3 = get;
  JobSupport.prototype.b4 = fold;
  JobSupport.prototype.a4 = minusKey;
  AbstractCoroutine.prototype.hq = invokeOnCompletion$default;
  AbstractCoroutine.prototype.c4 = plus;
  AbstractCoroutine.prototype.v3 = get;
  AbstractCoroutine.prototype.b4 = fold;
  AbstractCoroutine.prototype.a4 = minusKey;
  StandaloneCoroutine.prototype.hq = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.c4 = plus;
  StandaloneCoroutine.prototype.v3 = get;
  StandaloneCoroutine.prototype.b4 = fold;
  StandaloneCoroutine.prototype.a4 = minusKey;
  LazyStandaloneCoroutine.prototype.hq = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.c4 = plus;
  LazyStandaloneCoroutine.prototype.v3 = get;
  LazyStandaloneCoroutine.prototype.b4 = fold;
  LazyStandaloneCoroutine.prototype.a4 = minusKey;
  CoroutineDispatcher.prototype.v3 = get_0;
  CoroutineDispatcher.prototype.b4 = fold;
  CoroutineDispatcher.prototype.a4 = minusKey_0;
  CoroutineDispatcher.prototype.c4 = plus;
  EventLoop.prototype.c4 = plus;
  EventLoop.prototype.v3 = get_0;
  EventLoop.prototype.b4 = fold;
  EventLoop.prototype.a4 = minusKey_0;
  JobImpl.prototype.hq = invokeOnCompletion$default;
  JobImpl.prototype.c4 = plus;
  JobImpl.prototype.v3 = get;
  JobImpl.prototype.b4 = fold;
  JobImpl.prototype.a4 = minusKey;
  MainCoroutineDispatcher.prototype.c4 = plus;
  MainCoroutineDispatcher.prototype.v3 = get_0;
  MainCoroutineDispatcher.prototype.b4 = fold;
  MainCoroutineDispatcher.prototype.a4 = minusKey_0;
  Unconfined.prototype.c4 = plus;
  Unconfined.prototype.v3 = get_0;
  Unconfined.prototype.b4 = fold;
  Unconfined.prototype.a4 = minusKey_0;
  JsMainDispatcher.prototype.c4 = plus;
  JsMainDispatcher.prototype.v3 = get_0;
  JsMainDispatcher.prototype.b4 = fold;
  JsMainDispatcher.prototype.a4 = minusKey_0;
  UnconfinedEventLoop.prototype.c4 = plus;
  UnconfinedEventLoop.prototype.v3 = get_0;
  UnconfinedEventLoop.prototype.b4 = fold;
  UnconfinedEventLoop.prototype.a4 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.c4 = plus;
  SetTimeoutBasedDispatcher.prototype.v3 = get_0;
  SetTimeoutBasedDispatcher.prototype.b4 = fold;
  SetTimeoutBasedDispatcher.prototype.a4 = minusKey_0;
  NodeDispatcher.prototype.c4 = plus;
  NodeDispatcher.prototype.v3 = get_0;
  NodeDispatcher.prototype.b4 = fold;
  NodeDispatcher.prototype.a4 = minusKey_0;
  SetTimeoutDispatcher.prototype.c4 = plus;
  SetTimeoutDispatcher.prototype.v3 = get_0;
  SetTimeoutDispatcher.prototype.b4 = fold;
  SetTimeoutDispatcher.prototype.a4 = minusKey_0;
  WindowDispatcher.prototype.c4 = plus;
  WindowDispatcher.prototype.v3 = get_0;
  WindowDispatcher.prototype.b4 = fold;
  WindowDispatcher.prototype.a4 = minusKey_0;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = await_0;
  _.$_$.b = Job$default;
  _.$_$.c = launch$default;
  _.$_$.d = CoroutineScope;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map