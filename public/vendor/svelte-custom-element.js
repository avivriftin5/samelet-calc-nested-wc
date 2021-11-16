var App = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  });

  var regenerator = runtime_1;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$8() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$8()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
  }

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function noop() {}

  var identity = function identity(x) {
    return x;
  };

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  function subscribe(store) {
    if (store == null) {
      return noop;
    }

    for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      callbacks[_key - 1] = arguments[_key];
    }

    var unsub = store.subscribe.apply(store, callbacks);
    return unsub.unsubscribe ? function () {
      return unsub.unsubscribe();
    } : unsub;
  }

  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }

  function null_to_empty(value) {
    return value == null ? '' : value;
  }

  function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
  }

  var is_client = typeof window !== 'undefined';
  var now = is_client ? function () {
    return window.performance.now();
  } : function () {
    return Date.now();
  };
  var raf = is_client ? function (cb) {
    return requestAnimationFrame(cb);
  } : noop; // used internally for testing

  var tasks = new Set();

  function run_tasks(now) {
    tasks.forEach(function (task) {
      if (!task.c(now)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0) raf(run_tasks);
  }
  /**
   * Creates a new task that runs on each raf frame
   * until it returns a falsy value or is aborted
   */


  function loop(callback) {
    var task;
    if (tasks.size === 0) raf(run_tasks);
    return {
      promise: new Promise(function (fulfill) {
        tasks.add(task = {
          c: callback,
          f: fulfill
        });
      }),
      abort: function abort() {
        tasks.delete(task);
      }
    };
  } // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM

  function append(target, node) {
    target.appendChild(node);
  }

  function get_root_for_style(node) {
    if (!node) return document;
    var root = node.getRootNode ? node.getRootNode() : node.getRootNode();

    if (root && root.host) {
      return root;
    }

    return node.getRootNode();
  }

  function append_empty_stylesheet(node) {
    var style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element;
  }

  function append_stylesheet(node, style) {
    append(node.head || node, style);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function empty() {
    return text('');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function to_number(value) {
    return value === '' ? null : +value;
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data) text.data = data;
  }

  function set_input_value(input, value) {
    input.value = value == null ? '' : value;
  }

  function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
  }
  // so we cache the result instead


  var crossorigin;

  function is_crossorigin() {
    if (crossorigin === undefined) {
      crossorigin = false;

      try {
        if (typeof window !== 'undefined' && window.parent) {
          void window.parent.document;
        }
      } catch (error) {
        crossorigin = true;
      }
    }

    return crossorigin;
  }

  function add_resize_listener(node, fn) {
    var computed_style = getComputedStyle(node);

    if (computed_style.position === 'static') {
      node.style.position = 'relative';
    }

    var iframe = element('iframe');
    iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' + 'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    var crossorigin = is_crossorigin();
    var unsubscribe;

    if (crossorigin) {
      iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
      unsubscribe = listen(window, 'message', function (event) {
        if (event.source === iframe.contentWindow) fn();
      });
    } else {
      iframe.src = 'about:blank';

      iframe.onload = function () {
        unsubscribe = listen(iframe.contentWindow, 'resize', fn);
      };
    }

    append(node, iframe);
    return function () {
      if (crossorigin) {
        unsubscribe();
      } else if (unsubscribe && iframe.contentWindow) {
        unsubscribe();
      }

      detach(iframe);
    };
  }

  function custom_event(type, detail) {
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
  }

  function attribute_to_object(attributes) {
    var result = {};

    var _iterator2 = _createForOfIteratorHelper$1(attributes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var attribute = _step2.value;
        result[attribute.name] = attribute.value;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return result;
  }

  var active_docs = new Set();
  var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

  function hash(str) {
    var hash = 5381;
    var i = str.length;

    while (i--) {
      hash = (hash << 5) - hash ^ str.charCodeAt(i);
    }

    return hash >>> 0;
  }

  function create_rule(node, a, b, duration, delay, ease, fn) {
    var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var step = 16.666 / duration;
    var keyframes = '{\n';

    for (var p = 0; p <= 1; p += step) {
      var t = a + (b - a) * ease(p);
      keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
    }

    var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
    var name = "__svelte_".concat(hash(rule), "_").concat(uid);
    var doc = get_root_for_style(node);
    active_docs.add(doc);
    var stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = append_empty_stylesheet(node).sheet);
    var current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

    if (!current_rules[name]) {
      current_rules[name] = true;
      stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
    }

    var animation = node.style.animation || '';
    node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
    active += 1;
    return name;
  }

  function delete_rule(node, name) {
    var previous = (node.style.animation || '').split(', ');
    var next = previous.filter(name ? function (anim) {
      return anim.indexOf(name) < 0;
    } // remove specific animation
    : function (anim) {
      return anim.indexOf('__svelte') === -1;
    } // remove all Svelte animations
    );
    var deleted = previous.length - next.length;

    if (deleted) {
      node.style.animation = next.join(', ');
      active -= deleted;
      if (!active) clear_rules();
    }
  }

  function clear_rules() {
    raf(function () {
      if (active) return;
      active_docs.forEach(function (doc) {
        var stylesheet = doc.__svelte_stylesheet;
        var i = stylesheet.cssRules.length;

        while (i--) {
          stylesheet.deleteRule(i);
        }

        doc.__svelte_rules = {};
      });
      active_docs.clear();
    });
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error('Function called outside component initialization');
    return current_component;
  }

  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  // shorthand events, or if we want to implement
  // a real bubbling mechanism


  function bubble(component, event) {
    var _this2 = this;

    var callbacks = component.$$.callbacks[event.type];

    if (callbacks) {
      // @ts-ignore
      callbacks.slice().forEach(function (fn) {
        return fn.call(_this2, event);
      });
    }
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      set_current_component(null);
      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i4 = 0; _i4 < render_callbacks.length; _i4 += 1) {
        var callback = render_callbacks[_i4];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var promise;

  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(function () {
        promise = null;
      });
    }

    return promise;
  }

  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
  }

  var outroing = new Set();
  var outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  var null_transition = {
    duration: 0
  };

  function create_bidirectional_transition(node, fn, params, intro) {
    var config = fn(node, params);
    var t = intro ? 0 : 1;
    var running_program = null;
    var pending_program = null;
    var animation_name = null;

    function clear_animation() {
      if (animation_name) delete_rule(node, animation_name);
    }

    function init(program, duration) {
      var d = program.b - t;
      duration *= Math.abs(d);
      return {
        a: t,
        b: program.b,
        d: d,
        duration: duration,
        start: program.start,
        end: program.start + duration,
        group: program.group
      };
    }

    function go(b) {
      var _ref3 = config || null_transition,
          _ref3$delay = _ref3.delay,
          delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
          _ref3$duration = _ref3.duration,
          duration = _ref3$duration === void 0 ? 300 : _ref3$duration,
          _ref3$easing = _ref3.easing,
          easing = _ref3$easing === void 0 ? identity : _ref3$easing,
          _ref3$tick = _ref3.tick,
          tick = _ref3$tick === void 0 ? noop : _ref3$tick,
          css = _ref3.css;

      var program = {
        start: now() + delay,
        b: b
      };

      if (!b) {
        // @ts-ignore todo: improve typings
        program.group = outros;
        outros.r += 1;
      }

      if (running_program || pending_program) {
        pending_program = program;
      } else {
        // if this is an intro, and there's a delay, we need to do
        // an initial tick and/or apply CSS animation immediately
        if (css) {
          clear_animation();
          animation_name = create_rule(node, t, b, duration, delay, easing, css);
        }

        if (b) tick(0, 1);
        running_program = init(program, duration);
        add_render_callback(function () {
          return dispatch(node, b, 'start');
        });
        loop(function (now) {
          if (pending_program && now > pending_program.start) {
            running_program = init(pending_program, duration);
            pending_program = null;
            dispatch(node, running_program.b, 'start');

            if (css) {
              clear_animation();
              animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
            }
          }

          if (running_program) {
            if (now >= running_program.end) {
              tick(t = running_program.b, 1 - t);
              dispatch(node, running_program.b, 'end');

              if (!pending_program) {
                // we're done
                if (running_program.b) {
                  // intro — we can tidy up immediately
                  clear_animation();
                } else {
                  // outro — needs to be coordinated
                  if (! --running_program.group.r) run_all(running_program.group.c);
                }
              }

              running_program = null;
            } else if (now >= running_program.start) {
              var p = now - running_program.start;
              t = running_program.a + running_program.d * easing(p / running_program.duration);
              tick(t, 1 - t);
            }
          }

          return !!(running_program || pending_program);
        });
      }
    }

    return {
      run: function run(b) {
        if (is_function(config)) {
          wait().then(function () {
            // @ts-ignore
            config = config();
            go(b);
          });
        } else {
          go(b);
        }
      },
      end: function end() {
        clear_animation();
        running_program = pending_program = null;
      }
    };
  }

  function bind(component, name, callback) {
    var index = component.$$.props[name];

    if (index !== undefined) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor, customElement) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor);

    if (!customElement) {
      // onMount happens before the initial afterUpdate
      add_render_callback(function () {
        var new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
        } else {
          // Edge case - component was destroyed immediately,
          // most likely as a result of a binding initialising
          run_all(new_on_destroy);
        }

        component.$$.on_mount = [];
      });
    }

    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
    var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty: dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    var ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }

    set_current_component(parent_component);
  }

  var SvelteElement;

  if (typeof HTMLElement === 'function') {
    SvelteElement = /*#__PURE__*/function (_HTMLElement) {
      _inherits(SvelteElement, _HTMLElement);

      var _super2 = _createSuper$7(SvelteElement);

      function SvelteElement() {
        var _this3;

        _classCallCheck(this, SvelteElement);

        _this3 = _super2.call(this);

        _this3.attachShadow({
          mode: 'open'
        });

        return _this3;
      }

      _createClass(SvelteElement, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var on_mount = this.$$.on_mount;
          this.$$.on_disconnect = on_mount.map(run).filter(is_function); // @ts-ignore todo: improve typings

          for (var key in this.$$.slotted) {
            // @ts-ignore todo: improve typings
            this.appendChild(this.$$.slotted[key]);
          }
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, _oldValue, newValue) {
          this[attr] = newValue;
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          run_all(this.$$.on_disconnect);
        }
      }, {
        key: "$destroy",
        value: function $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
        }
      }, {
        key: "$on",
        value: function $on(type, callback) {
          // TODO should this delegate to addEventListener?
          var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return function () {
            var index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
          };
        }
      }, {
        key: "$set",
        value: function $set($$props) {
          if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
          }
        }
      }]);

      return SvelteElement;
    }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */


  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteComponent;
  }();

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  var subscriber_queue = [];
  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   * @param {*=}value initial value
   * @param {StartStopNotifier=}start start and stop notifications for subscriptions
   */


  function writable(value) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var stop;
    var subscribers = new Set();

    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;

        if (stop) {
          // store is ready
          var run_queue = !subscriber_queue.length;

          var _iterator = _createForOfIteratorHelper(subscribers),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var subscriber = _step.value;
              subscriber[1]();
              subscriber_queue.push(subscriber, value);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (run_queue) {
            for (var i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }

            subscriber_queue.length = 0;
          }
        }
      }
    }

    function update(fn) {
      set(fn(value));
    }

    function subscribe(run) {
      var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var subscriber = [run, invalidate];
      subscribers.add(subscriber);

      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }

      run(value);
      return function () {
        subscribers.delete(subscriber);

        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }

    return {
      set: set,
      update: update,
      subscribe: subscribe
    };
  }

  function persist(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function writableSession(key, initialValue) {
    var sessionValue = JSON.parse(sessionStorage.getItem(key));
    if (!sessionValue) persist(key, initialValue);
    var store = writable(sessionValue || initialValue);
    store.subscribe(function (value) {
      return persist(key, value);
    });
    return store;
  }

  var UserSessionData = writableSession('UserSessionData', null);

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$6(ctx) {
    var div8;
    var div5;
    var div1;
    var div0;
    var a0;
    var t1;
    var div2;
    var span;
    var t2;
    var t3_value =
    /*$UserSessionData*/
    ctx[1][
    /*slider_type*/
    ctx[0]].toLocaleString() + "";
    var t3;
    var t4;
    var div4;
    var div3;
    var a1;
    var t6;
    var div7;
    var mounted;
    var dispose;
    return {
      c: function c() {
        div8 = element("div");
        div5 = element("div");
        div1 = element("div");
        div0 = element("div");
        a0 = element("a");
        a0.textContent = "+";
        t1 = space();
        div2 = element("div");
        span = element("span");
        t2 = text("₪ ");
        t3 = text(t3_value);
        t4 = space();
        div4 = element("div");
        div3 = element("div");
        a1 = element("a");
        a1.textContent = "-";
        t6 = space();
        div7 = element("div");
        div7.innerHTML = "<div class=\"arrowDown svelte-1pgruff\"></div>";
        attr(a0, "class", "round-button-a svelte-1pgruff");
        attr(a0, "href", '#');
        attr(div0, "class", "round-button-circle svelte-1pgruff");
        attr(div1, "class", "round-button svelte-1pgruff");
        attr(span, "class", "svelte-1pgruff");
        attr(a1, "class", "round-button-a svelte-1pgruff");
        attr(a1, "href", '#');
        attr(div3, "class", "round-button-circle svelte-1pgruff");
        attr(div4, "class", "round-button svelte-1pgruff");
        attr(div5, "class", "buttonAndText svelte-1pgruff");
        attr(div7, "class", "arrowContainer svelte-1pgruff");
        set_style(div8, "margin-right",
        /*$UserSessionData*/
        ctx[1][
        /*sliderLeftString*/
        ctx[2]]);
      },
      m: function m(target, anchor) {
        insert(target, div8, anchor);
        append(div8, div5);
        append(div5, div1);
        append(div1, div0);
        append(div0, a0);
        append(div5, t1);
        append(div5, div2);
        append(div2, span);
        append(span, t2);
        append(span, t3);
        append(div5, t4);
        append(div5, div4);
        append(div4, div3);
        append(div3, a1);
        append(div8, t6);
        append(div8, div7);

        if (!mounted) {
          dispose = [listen(a0, "click",
          /*IncreasePrice*/
          ctx[3]), listen(a1, "click",
          /*reducePrice*/
          ctx[4])];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*$UserSessionData, slider_type*/
        3 && t3_value !== (t3_value =
        /*$UserSessionData*/
        ctx[1][
        /*slider_type*/
        ctx[0]].toLocaleString() + "")) set_data(t3, t3_value);

        if (dirty &
        /*$UserSessionData*/
        2) {
          set_style(div8, "margin-right",
          /*$UserSessionData*/
          ctx[1][
          /*sliderLeftString*/
          ctx[2]]);
        }
      },
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(div8);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  var priceChangeFactor = 10;

  function instance$6($$self, $$props, $$invalidate) {
    var $UserSessionData;
    component_subscribe($$self, UserSessionData, function ($$value) {
      return $$invalidate(1, $UserSessionData = $$value);
    });
    var slider_type = $$props.slider_type;
    var rate_over_prime = $$props.rate_over_prime;
    var calc_bubble_left_position = $$props.calc_bubble_left_position;
    var sliderLeftString = "".concat(slider_type, "_bubble_left");
    var otherSliderType = slider_type == "max_cache" ? "max_funding" : "max_cache";

    var IncreasePrice = function IncreasePrice() {
      set_store_value(UserSessionData, $UserSessionData[slider_type] += priceChangeFactor, $UserSessionData);
      set_store_value(UserSessionData, $UserSessionData[otherSliderType] -= priceChangeFactor, $UserSessionData);
      calc_bubble_left_position();
      setMontlyAmount();
    };

    var reducePrice = function reducePrice() {
      set_store_value(UserSessionData, $UserSessionData[slider_type] -= priceChangeFactor, $UserSessionData);
      set_store_value(UserSessionData, $UserSessionData[otherSliderType] += priceChangeFactor, $UserSessionData);
      calc_bubble_left_position();
      setMontlyAmount();
    };

    var setMontlyAmount = function setMontlyAmount() {
      var monthInteger = parseInt($UserSessionData["max_months"]);
      var monthAmountWithoutIntrest = $UserSessionData["max_funding"] / monthInteger;
      var interest = $UserSessionData["prime"] + rate_over_prime;
      var SinglePercentageOfOriginal = monthAmountWithoutIntrest / 100;
      var amountOfPercentage = SinglePercentageOfOriginal * interest;
      set_store_value(UserSessionData, $UserSessionData["max_monthly_funding"] = monthAmountWithoutIntrest + amountOfPercentage, $UserSessionData);
      set_store_value(UserSessionData, $UserSessionData["finalMaxAmount"] = $UserSessionData["max_monthly_funding"] * monthInteger, $UserSessionData);
    };

    $$self.$$set = function ($$props) {
      if ('slider_type' in $$props) $$invalidate(0, slider_type = $$props.slider_type);
      if ('rate_over_prime' in $$props) $$invalidate(5, rate_over_prime = $$props.rate_over_prime);
      if ('calc_bubble_left_position' in $$props) $$invalidate(6, calc_bubble_left_position = $$props.calc_bubble_left_position);
    };

    return [slider_type, $UserSessionData, sliderLeftString, IncreasePrice, reducePrice, rate_over_prime, calc_bubble_left_position];
  }

  var Range_bubble = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Range_bubble, _SvelteComponent);

    var _super = _createSuper$6(Range_bubble);

    function Range_bubble(options) {
      var _this;

      _classCallCheck(this, Range_bubble);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {
        slider_type: 0,
        rate_over_prime: 5,
        calc_bubble_left_position: 6
      });
      return _this;
    }

    return Range_bubble;
  }(SvelteComponent);

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$5(ctx) {
    var div0;
    var rangebubble;
    var t0;
    var div1;
    var input;
    var div1_resize_listener;
    var t1;
    var div4;
    var div2;
    var t3;
    var div3;
    var current;
    var mounted;
    var dispose;
    rangebubble = new Range_bubble({
      props: {
        slider_type:
        /*slider_type*/
        ctx[0],
        rate_over_prime:
        /*rate_over_prime*/
        ctx[1],
        calc_bubble_left_position:
        /*calc_bubble_left_position*/
        ctx[6]
      }
    });
    return {
      c: function c() {
        div0 = element("div");
        create_component(rangebubble.$$.fragment);
        t0 = space();
        div1 = element("div");
        input = element("input");
        t1 = space();
        div4 = element("div");
        div2 = element("div");
        div2.textContent = "".concat(parseInt(
        /*maxRange*/
        ctx[5]).toLocaleString());
        t3 = space();
        div3 = element("div");
        div3.textContent = "".concat(
        /*minRange*/
        ctx[4]);
        attr(div0, "class", "rangeSliderWrapper svelte-10bmzab");
        attr(input, "type", "range");
        attr(input, "min",
        /*minRange*/
        ctx[4]);
        attr(input, "max",
        /*maxRange*/
        ctx[5]);
        attr(input, "class", "svelte-10bmzab");
        attr(div1, "class", "rangeSliderWrapper svelte-10bmzab");
        add_render_callback(function () {
          return (
            /*div1_elementresize_handler*/
            ctx[9].call(div1)
          );
        });
        attr(div4, "class", "minmaxWrapper svelte-10bmzab");
      },
      m: function m(target, anchor) {
        insert(target, div0, anchor);
        mount_component(rangebubble, div0, null);
        insert(target, t0, anchor);
        insert(target, div1, anchor);
        append(div1, input);
        set_input_value(input,
        /*$UserSessionData*/
        ctx[3][
        /*slider_type*/
        ctx[0]]);
        div1_resize_listener = add_resize_listener(div1,
        /*div1_elementresize_handler*/
        ctx[9].bind(div1));
        insert(target, t1, anchor);
        insert(target, div4, anchor);
        append(div4, div2);
        append(div4, t3);
        append(div4, div3);
        current = true;

        if (!mounted) {
          dispose = [listen(input, "change",
          /*input_change_input_handler*/
          ctx[8]), listen(input, "input",
          /*input_change_input_handler*/
          ctx[8]), listen(input, "input",
          /*updateOtherValues*/
          ctx[7])];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var rangebubble_changes = {};
        if (dirty &
        /*slider_type*/
        1) rangebubble_changes.slider_type =
        /*slider_type*/
        ctx[0];
        if (dirty &
        /*rate_over_prime*/
        2) rangebubble_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[1];
        rangebubble.$set(rangebubble_changes);

        if (dirty &
        /*$UserSessionData, slider_type*/
        9) {
          set_input_value(input,
          /*$UserSessionData*/
          ctx[3][
          /*slider_type*/
          ctx[0]]);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(rangebubble.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(rangebubble.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(div0);
        destroy_component(rangebubble);
        if (detaching) detach(t0);
        if (detaching) detach(div1);
        div1_resize_listener();
        if (detaching) detach(t1);
        if (detaching) detach(div4);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance$5($$self, $$props, $$invalidate) {
    var $UserSessionData;
    component_subscribe($$self, UserSessionData, function ($$value) {
      return $$invalidate(3, $UserSessionData = $$value);
    });
    var slider_type = $$props.slider_type;
    var rate_over_prime = $$props.rate_over_prime;
    var sliderWidth;
    var otherSliderType = slider_type == "max_cache" ? "max_funding" : "max_cache";
    var sliderLeftString = "".concat(slider_type, "_bubble_left");
    var otherSliderLeftString = "".concat(otherSliderType, "_bubble_left");
    var minRangekey = "".concat(slider_type, "_range_min");
    var maxRangeKey = "".concat(slider_type, "_range_max");
    var otherMinRangekey = "".concat(otherSliderType, "_range_min");
    var othermaxRangeKey = "".concat(otherSliderType, "_range_max");
    var minRange = $UserSessionData[minRangekey];
    var maxRange = $UserSessionData[maxRangeKey];
    $UserSessionData[otherMinRangekey];
    $UserSessionData[othermaxRangeKey];

    var calc_bubble_left_position = function calc_bubble_left_position() {
      var newPosition = getPixelsShift(slider_type);
      console.log("newPosition is " + newPosition);
      var newOtherPosition = getPixelsShift(otherSliderType);
      set_store_value(UserSessionData, $UserSessionData[sliderLeftString] = "".concat(newPosition, "px"), $UserSessionData);
      set_store_value(UserSessionData, $UserSessionData[otherSliderLeftString] = "".concat(newOtherPosition, "px"), $UserSessionData);
    };

    var getPixelsShift = function getPixelsShift(slider) {
      var sliderMinRangeKey = "".concat(slider, "_range_min");
      var sliderMaxRangeKey = "".concat(slider, "_range_max");
      var sliderValue = $UserSessionData[slider];
      var sliderMin = $UserSessionData[sliderMinRangeKey];
      var sliderMax = $UserSessionData[sliderMaxRangeKey];
      var valueToMaxRange = sliderMax - sliderValue; // 12,000     

      var fullRange = sliderMax - sliderMin; // 58,500

      var relativeValueToFull = valueToMaxRange / fullRange; // 0.2

      var relativePrecentageFromeEnd = 1 - relativeValueToFull; // 0.79

      var gapInMeasuredWidth = 31; // exclude external gip bounderies , and size of bubble

      var widthToSet = sliderWidth - gapInMeasuredWidth; // 380 - middle to end

      var actualXOverWidth;

      if (relativePrecentageFromeEnd >= 0.5) {
        // positives from 0 - middle to 380 end
        var fullPositiveRange = 0.5; // 1 - 0.5

        var relativeToFull = 1 - relativePrecentageFromeEnd; // 1 -0.79

        var actualPrecentage = relativeToFull / fullPositiveRange; // 0.21 / 0.5 

        var precentageToUse = 1 - actualPrecentage;
        actualXOverWidth = widthToSet * precentageToUse;
      } else {
        // negatives from middle to 0 (380)
        var fullNegativeRange = 0.5; // 0.5 - 0

        var _relativeToFull = 0.5 - relativePrecentageFromeEnd; // 0.5 -0.2


        var _actualPrecentage = _relativeToFull / fullNegativeRange; // 0.21 / 0.5 


        actualXOverWidth = widthToSet * _actualPrecentage * -1;
      } //let gapFromMiddle = relativePrecentageFromeEnd - 0.5 // negetive numbers
      //let actualXOverWidth = sliderWidth * relativePrecentageFromeEnd // 0.79 X 411 = 326
      // let midPoint = 0.5 * sliderWidth // 411 * 0.5 = 205
      //let gapInPixels = actualXOverWidth - midPoint;
      //let reversedGapForMargin = -1 * gapInPixels;


      return actualXOverWidth;
    };

    var updateOtherValues = function updateOtherValues() {
      set_store_value(UserSessionData, $UserSessionData[otherSliderType] = $UserSessionData["maxTotal"] - $UserSessionData[slider_type], $UserSessionData);
      calc_bubble_left_position();
      setMontlyAmount();
    };

    var setMontlyAmount = function setMontlyAmount() {
      var monthInteger = parseInt($UserSessionData["max_months"]);
      var monthAmountWithoutIntrest = $UserSessionData["max_funding"] / monthInteger;
      var interest = $UserSessionData["prime"] + rate_over_prime;
      var SinglePercentageOfOriginal = monthAmountWithoutIntrest / 100;
      var amountOfPercentage = SinglePercentageOfOriginal * interest;
      set_store_value(UserSessionData, $UserSessionData["max_monthly_funding"] = monthAmountWithoutIntrest + amountOfPercentage, $UserSessionData);
      set_store_value(UserSessionData, $UserSessionData["finalMaxAmount"] = $UserSessionData["max_monthly_funding"] * monthInteger, $UserSessionData);
    };

    onMount(function () {
      calc_bubble_left_position();
    });

    function input_change_input_handler() {
      $UserSessionData[slider_type] = to_number(this.value);
      UserSessionData.set($UserSessionData);
      $$invalidate(0, slider_type);
    }

    function div1_elementresize_handler() {
      sliderWidth = this.offsetWidth;
      $$invalidate(2, sliderWidth);
    }

    $$self.$$set = function ($$props) {
      if ('slider_type' in $$props) $$invalidate(0, slider_type = $$props.slider_type);
      if ('rate_over_prime' in $$props) $$invalidate(1, rate_over_prime = $$props.rate_over_prime);
    };

    return [slider_type, rate_over_prime, sliderWidth, $UserSessionData, minRange, maxRange, calc_bubble_left_position, updateOtherValues, input_change_input_handler, div1_elementresize_handler];
  }

  var Range_slider = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Range_slider, _SvelteComponent);

    var _super = _createSuper$5(Range_slider);

    function Range_slider(options) {
      var _this;

      _classCallCheck(this, Range_slider);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
        slider_type: 0,
        rate_over_prime: 1
      });
      return _this;
    }

    return Range_slider;
  }(SvelteComponent);

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_else_block(ctx) {
    var div;
    return {
      c: function c() {
        div = element("div");
        attr(div, "class", "topspace svelte-13loezj");
      },
      m: function m(target, anchor) {
        insert(target, div, anchor);
      },
      p: noop,
      d: function d(detaching) {
        if (detaching) detach(div);
      }
    };
  } // (89:9) {#if isSelected}


  function create_if_block$2(ctx) {
    var div0;
    var span;
    var t0;
    var t1;
    var div1;
    return {
      c: function c() {
        div0 = element("div");
        span = element("span");
        t0 = text(
        /*months*/
        ctx[0]);
        t1 = space();
        div1 = element("div");
        attr(div0, "class", "bubbleContainer svelte-13loezj");
        attr(div1, "class", "arrowDown svelte-13loezj");
      },
      m: function m(target, anchor) {
        insert(target, div0, anchor);
        append(div0, span);
        append(span, t0);
        insert(target, t1, anchor);
        insert(target, div1, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*months*/
        1) set_data(t0,
        /*months*/
        ctx[0]);
      },
      d: function d(detaching) {
        if (detaching) detach(div0);
        if (detaching) detach(t1);
        if (detaching) detach(div1);
      }
    };
  }

  function create_fragment$4(ctx) {
    var a;
    var div2;
    var t0;
    var div0;
    var div0_class_value;
    var t1;
    var div1;
    var t2;
    var mounted;
    var dispose;

    function select_block_type(ctx, dirty) {
      if (
      /*isSelected*/
      ctx[2]) return create_if_block$2;
      return create_else_block;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
    return {
      c: function c() {
        a = element("a");
        div2 = element("div");
        if_block.c();
        t0 = space();
        div0 = element("div");
        t1 = space();
        div1 = element("div");
        t2 = text(
        /*text*/
        ctx[1]);
        attr(div0, "class", div0_class_value = "" + (null_to_empty(
        /*isSelected*/
        ctx[2] ? 'greenLine' : 'grayLine') + " svelte-13loezj"));
        attr(div1, "class", "textLine svelte-13loezj");
        attr(div2, "class", "wrapper svelte-13loezj");
        attr(a, "href", '#');
        attr(a, "class", "svelte-13loezj");
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        append(a, div2);
        if_block.m(div2, null);
        append(div2, t0);
        append(div2, div0);
        append(div2, t1);
        append(div2, div1);
        append(div1, t2);

        if (!mounted) {
          dispose = listen(a, "click",
          /*handleItemClick*/
          ctx[3]);
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(div2, t0);
          }
        }

        if (dirty &
        /*isSelected*/
        4 && div0_class_value !== (div0_class_value = "" + (null_to_empty(
        /*isSelected*/
        ctx[2] ? 'greenLine' : 'grayLine') + " svelte-13loezj"))) {
          attr(div0, "class", div0_class_value);
        }

        if (dirty &
        /*text*/
        2) set_data(t2,
        /*text*/
        ctx[1]);
      },
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(a);
        if_block.d();
        mounted = false;
        dispose();
      }
    };
  }

  function instance$4($$self, $$props, $$invalidate) {
    var isSelected;
    var $UserSessionData;
    component_subscribe($$self, UserSessionData, function ($$value) {
      return $$invalidate(5, $UserSessionData = $$value);
    });
    var months = $$props.months;
    var text = $$props.text;
    var rate_over_prime = $$props.rate_over_prime;

    var setMontlyAmount = function setMontlyAmount() {
      var monthInteger = parseInt($UserSessionData["max_months"]);
      var monthAmountWithoutIntrest = $UserSessionData["max_funding"] / monthInteger;
      var interest = $UserSessionData["prime"] + rate_over_prime;
      var SinglePercentageOfOriginal = monthAmountWithoutIntrest / 100;
      var amountOfPercentage = SinglePercentageOfOriginal * interest;
      set_store_value(UserSessionData, $UserSessionData["max_monthly_funding"] = monthAmountWithoutIntrest + amountOfPercentage, $UserSessionData);
      set_store_value(UserSessionData, $UserSessionData["finalMaxAmount"] = $UserSessionData["max_monthly_funding"] * monthInteger, $UserSessionData);
    };

    var handleItemClick = function handleItemClick() {
      set_store_value(UserSessionData, $UserSessionData["max_months"] = months, $UserSessionData);
      setMontlyAmount();
    };

    $$self.$$set = function ($$props) {
      if ('months' in $$props) $$invalidate(0, months = $$props.months);
      if ('text' in $$props) $$invalidate(1, text = $$props.text);
      if ('rate_over_prime' in $$props) $$invalidate(4, rate_over_prime = $$props.rate_over_prime);
    };

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*$UserSessionData, months*/
      33) {
        $$invalidate(2, isSelected = $UserSessionData["max_months"] == months);
      }
    };

    return [months, text, isSelected, handleItemClick, rate_over_prime, $UserSessionData];
  }

  var Max_payment_months = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Max_payment_months, _SvelteComponent);

    var _super = _createSuper$4(Max_payment_months);

    function Max_payment_months(options) {
      var _this;

      _classCallCheck(this, Max_payment_months);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
        months: 0,
        text: 1,
        rate_over_prime: 4
      });
      return _this;
    }

    return Max_payment_months;
  }(SvelteComponent);

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$3(ctx) {
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        button.textContent = "הבנתי";
        attr(button, "class", "svelte-h8fehs");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click",
          /*click_handler*/
          ctx[0]);
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$3($$self) {
    function click_handler(event) {
      bubble.call(this, $$self, event);
    }

    return [click_handler];
  }

  var Close = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Close, _SvelteComponent);

    var _super = _createSuper$3(Close);

    function Close(options) {
      var _this;

      _classCallCheck(this, Close);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
      return _this;
    }

    return Close;
  }(SvelteComponent);

  function fade(node) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$delay = _ref2.delay,
        delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
        _ref2$easing = _ref2.easing,
        easing = _ref2$easing === void 0 ? identity : _ref2$easing;

    var o = +getComputedStyle(node).opacity;
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t) {
        return "opacity: ".concat(t * o);
      }
    };
  }

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$2(ctx) {
    var div4;
    var div2;
    var div0;
    var t0;
    var t1;
    var div1;
    var close;
    var t2;
    var div3;
    var div4_transition;
    var current;
    close = new Close({});
    close.$on("click",
    /*handleClose*/
    ctx[5]);
    return {
      c: function c() {
        div4 = element("div");
        div2 = element("div");
        div0 = element("div");
        t0 = text(
        /*message*/
        ctx[0]);
        t1 = space();
        div1 = element("div");
        create_component(close.$$.fragment);
        t2 = space();
        div3 = element("div");
        attr(div0, "class", "mainText svelte-1oh97dw");
        attr(div1, "class", "svelte-1oh97dw");
        attr(div2, "class", "toolTipWraraper svelte-1oh97dw");
        set_style(div2, "top",
        /*top*/
        ctx[1] + "px");
        set_style(div2, "left",
        /*left*/
        ctx[2] + "px");
        attr(div3, "class", "arrow-down svelte-1oh97dw");
        set_style(div3, "top",
        /*arrowTop*/
        ctx[3] + "px");
        set_style(div3, "left",
        /*arrowLeft*/
        ctx[4] + "px");
      },
      m: function m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div2);
        append(div2, div0);
        append(div0, t0);
        append(div2, t1);
        append(div2, div1);
        mount_component(close, div1, null);
        append(div4, t2);
        append(div4, div3);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (!current || dirty &
        /*message*/
        1) set_data(t0,
        /*message*/
        ctx[0]);

        if (!current || dirty &
        /*top*/
        2) {
          set_style(div2, "top",
          /*top*/
          ctx[1] + "px");
        }

        if (!current || dirty &
        /*left*/
        4) {
          set_style(div2, "left",
          /*left*/
          ctx[2] + "px");
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(close.$$.fragment, local);
        add_render_callback(function () {
          if (!div4_transition) div4_transition = create_bidirectional_transition(div4, fade, {}, true);
          div4_transition.run(1);
        });
        current = true;
      },
      o: function o(local) {
        transition_out(close.$$.fragment, local);
        if (!div4_transition) div4_transition = create_bidirectional_transition(div4, fade, {}, false);
        div4_transition.run(0);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(div4);
        destroy_component(close);
        if (detaching && div4_transition) div4_transition.end();
      }
    };
  }

  function instance$2($$self, $$props, $$invalidate) {
    var _$$props$message = $$props.message,
        message = _$$props$message === void 0 ? "נסיון לנסיון" : _$$props$message;
    var _$$props$top = $$props.top,
        top = _$$props$top === void 0 ? 100 : _$$props$top;
    var _$$props$left = $$props.left,
        left = _$$props$left === void 0 ? 300 : _$$props$left;
    var isShowToolTip = $$props.isShowToolTip;
    var arrowTop = top + 65;
    var arrowLeft = left + 140;

    var handleClose = function handleClose() {
      $$invalidate(6, isShowToolTip = false);
    };

    $$self.$$set = function ($$props) {
      if ('message' in $$props) $$invalidate(0, message = $$props.message);
      if ('top' in $$props) $$invalidate(1, top = $$props.top);
      if ('left' in $$props) $$invalidate(2, left = $$props.left);
      if ('isShowToolTip' in $$props) $$invalidate(6, isShowToolTip = $$props.isShowToolTip);
    };

    return [message, top, left, arrowTop, arrowLeft, handleClose, isShowToolTip];
  }

  var Tooltip = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Tooltip, _SvelteComponent);

    var _super = _createSuper$2(Tooltip);

    function Tooltip(options) {
      var _this;

      _classCallCheck(this, Tooltip);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
        message: 0,
        top: 1,
        left: 2,
        isShowToolTip: 6
      });
      return _this;
    }

    return Tooltip;
  }(SvelteComponent);

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_if_block$1(ctx) {
    var tooltip;
    var updating_isShowToolTip;
    var current;

    function tooltip_isShowToolTip_binding(value) {
      /*tooltip_isShowToolTip_binding*/
      ctx[18](value);
    }

    var tooltip_props = {
      top:
      /*top*/
      ctx[2],
      left:
      /*left*/
      ctx[3],
      message:
      /*tooltipMessage*/
      ctx[1]
    };

    if (
    /*isShowToolTip*/
    ctx[4] !== void 0) {
      tooltip_props.isShowToolTip =
      /*isShowToolTip*/
      ctx[4];
    }

    tooltip = new Tooltip({
      props: tooltip_props
    });
    binding_callbacks.push(function () {
      return bind(tooltip, 'isShowToolTip', tooltip_isShowToolTip_binding);
    });
    return {
      c: function c() {
        create_component(tooltip.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(tooltip, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var tooltip_changes = {};
        if (dirty &
        /*top*/
        4) tooltip_changes.top =
        /*top*/
        ctx[2];
        if (dirty &
        /*left*/
        8) tooltip_changes.left =
        /*left*/
        ctx[3];
        if (dirty &
        /*tooltipMessage*/
        2) tooltip_changes.message =
        /*tooltipMessage*/
        ctx[1];

        if (!updating_isShowToolTip && dirty &
        /*isShowToolTip*/
        16) {
          updating_isShowToolTip = true;
          tooltip_changes.isShowToolTip =
          /*isShowToolTip*/
          ctx[4];
          add_flush_callback(function () {
            return updating_isShowToolTip = false;
          });
        }

        tooltip.$set(tooltip_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(tooltip.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(tooltip.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(tooltip, detaching);
      }
    };
  }

  function create_fragment$1(ctx) {
    var t0;
    var div0;
    var t2;
    var div3;
    var t6;
    var div20;
    var div13;
    var div6;
    var div4;
    var a0;
    var t7;
    var span1;
    var t9;
    var div5;
    var rangeslider0;
    var t10;
    var div9;
    var div7;
    var a1;
    var t11;
    var span2;
    var t13;
    var div8;
    var rangeslider1;
    var t14;
    var div12;
    var div10;
    var a2;
    var t15;
    var span3;
    var t17;
    var div11;
    var maxpaymentmonths0;
    var t18;
    var maxpaymentmonths1;
    var t19;
    var maxpaymentmonths2;
    var t20;
    var maxpaymentmonths3;
    var t21;
    var maxpaymentmonths4;
    var t22;
    var div19;
    var div14;
    var a3;
    var t23;
    var span4;
    var t25;
    var div15;
    var t26;
    var t27_value = parseInt(
    /*$UserSessionData*/
    ctx[5]["finalMaxAmount"]).toLocaleString() + "";
    var t27;
    var t28;
    var div16;
    var a4;
    var t29;
    var span5;
    var t31;
    var div17;
    var t32;
    var t33_value = parseInt(
    /*$UserSessionData*/
    ctx[5]["max_monthly_funding"]).toLocaleString() + "";
    var t33;
    var t34;
    var div18;
    var button;
    var t36;
    var div26;
    var div24;
    var div21;
    var t38;
    var div22;
    var t39;
    var t40;
    var t41;
    var div23;
    var t43;
    var div25;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*isShowToolTip*/
    ctx[4] && create_if_block$1(ctx);
    rangeslider0 = new Range_slider({
      props: {
        slider_type: "max_cache",
        rate_over_prime:
        /*rate_over_prime*/
        ctx[0]
      }
    });
    rangeslider1 = new Range_slider({
      props: {
        slider_type: "max_funding",
        rate_over_prime:
        /*rate_over_prime*/
        ctx[0]
      }
    });
    maxpaymentmonths0 = new Max_payment_months({
      props: {
        months: "60",
        text: "5 שנים ",
        rate_over_prime:
        /*rate_over_prime*/
        ctx[0]
      }
    });
    maxpaymentmonths1 = new Max_payment_months({
      props: {
        months: "48",
        text: "4 שנים ",
        rate_over_prime:
        /*rate_over_prime*/
        ctx[0]
      }
    });
    maxpaymentmonths2 = new Max_payment_months({
      props: {
        months: "36",
        text: "3 שנים ",
        rate_over_prime:
        /*rate_over_prime*/
        ctx[0]
      }
    });
    maxpaymentmonths3 = new Max_payment_months({
      props: {
        months: "24",
        text: "שנתיים",
        rate_over_prime:
        /*rate_over_prime*/
        ctx[0]
      }
    });
    maxpaymentmonths4 = new Max_payment_months({
      props: {
        months: "12",
        text: "שנה",
        rate_over_prime:
        /*rate_over_prime*/
        ctx[0]
      }
    });
    return {
      c: function c() {
        if (if_block) if_block.c();
        t0 = space();
        div0 = element("div");
        div0.innerHTML = "<span>\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05E1\u05DE\u05DC\u05EA</span>";
        t2 = space();
        div3 = element("div");
        div3.innerHTML = "<div>\u05E4\u05D4 \u05E0\u05D9\u05EA\u05DF \u05DC\u05EA\u05DB\u05E0\u05DF \u05D1\u05E1\u05D9\u05DE\u05D5\u05DC\u05D8\u05D5\u05E8 \u05D0\u05EA \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD \u05E9\u05DC\u05DA</div> \n        <div linelocation=\"middle\">\u05D5\u05D0\u05E3 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05D4 \u05DC\u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05D1\u05E4\u05E8\u05D9\u05E1\u05D4 \u05E0\u05D5\u05D7\u05D4</div>";
        t6 = space();
        div20 = element("div");
        div13 = element("div");
        div6 = element("div");
        div4 = element("div");
        a0 = element("a");
        a0.innerHTML = "<img src=\"i-icon.png\" class=\"iIconImage svelte-11fforo\" alt=\"\"/>";
        t7 = space();
        span1 = element("span");
        span1.textContent = "סכום המקדמה/מזומן";
        t9 = space();
        div5 = element("div");
        create_component(rangeslider0.$$.fragment);
        t10 = space();
        div9 = element("div");
        div7 = element("div");
        a1 = element("a");
        a1.innerHTML = "<img src=\"i-icon.png\" class=\"iIconImage svelte-11fforo\" alt=\"\"/>";
        t11 = space();
        span2 = element("span");
        span2.textContent = "סכום הנדרש למימון";
        t13 = space();
        div8 = element("div");
        create_component(rangeslider1.$$.fragment);
        t14 = space();
        div12 = element("div");
        div10 = element("div");
        a2 = element("a");
        a2.innerHTML = "<img src=\"i-icon.png\" class=\"iIconImage svelte-11fforo\" alt=\"\"/>";
        t15 = space();
        span3 = element("span");
        span3.textContent = "תשלומים חודשיים";
        t17 = space();
        div11 = element("div");
        create_component(maxpaymentmonths0.$$.fragment);
        t18 = space();
        create_component(maxpaymentmonths1.$$.fragment);
        t19 = space();
        create_component(maxpaymentmonths2.$$.fragment);
        t20 = space();
        create_component(maxpaymentmonths3.$$.fragment);
        t21 = space();
        create_component(maxpaymentmonths4.$$.fragment);
        t22 = space();
        div19 = element("div");
        div14 = element("div");
        a3 = element("a");
        a3.innerHTML = "<img src=\"i-icon.png\" class=\"iIconImage svelte-11fforo\" alt=\"\"/>";
        t23 = space();
        span4 = element("span");
        span4.textContent = "סכום להחזר בתום תקופת ההלוואה";
        t25 = space();
        div15 = element("div");
        t26 = text("₪ ");
        t27 = text(t27_value);
        t28 = space();
        div16 = element("div");
        a4 = element("a");
        a4.innerHTML = "<img src=\"i-icon.png\" class=\"iIconImage svelte-11fforo\" alt=\"\"/>";
        t29 = space();
        span5 = element("span");
        span5.textContent = "סכום החזר חודשי";
        t31 = space();
        div17 = element("div");
        t32 = text("₪ ");
        t33 = text(t33_value);
        t34 = space();
        div18 = element("div");
        button = element("button");
        button.textContent = "להגשת בקשה מהירה";
        t36 = space();
        div26 = element("div");
        div24 = element("div");
        div21 = element("div");
        div21.textContent = "ההצעה הינה בכפוף לאישור ולתנאי ההלוואה";
        t38 = space();
        div22 = element("div");
        t39 = text("הריבית המחושבת היא פריים +  ");
        t40 = text(
        /*rate_over_prime*/
        ctx[0]);
        t41 = space();
        div23 = element("div");
        div23.textContent = "בסיום התהליך וקבלת כל המסמכים תשלח קבלה";
        t43 = space();
        div25 = element("div");
        div25.innerHTML = "<img src=\"menu_logo.png\" alt=\"\" class=\"svelte-11fforo\"/>";
        attr(div0, "class", "maintitle svelte-11fforo");
        attr(div3, "class", "linesContainer svelte-11fforo");
        attr(a0, "href", '#');
        attr(a0, "class", "iconContainer svelte-11fforo");
        attr(span1, "class", "svelte-11fforo");
        attr(div4, "class", "infoModalWrapper svelte-11fforo");
        attr(div5, "class", "rangeSliderCWrapper svelte-11fforo");
        attr(div6, "class", "titleAndRangeContainer svelte-11fforo");
        attr(a1, "href", '#');
        attr(a1, "class", "iconContainer svelte-11fforo");
        attr(span2, "class", "svelte-11fforo");
        attr(div7, "class", "infoModalWrapper svelte-11fforo");
        attr(div8, "class", "rangeSliderCWrapper svelte-11fforo");
        attr(div9, "class", "titleAndRangeContainer svelte-11fforo");
        attr(a2, "href", '#');
        attr(a2, "class", "iconContainer svelte-11fforo");
        attr(span3, "class", "svelte-11fforo");
        attr(div10, "class", "infoModalWrapper svelte-11fforo");
        attr(div11, "class", "paymentMonthContainer svelte-11fforo");
        attr(div12, "class", "titleAndRangeContainer svelte-11fforo");
        attr(div13, "class", "rightColumn svelte-11fforo");
        attr(a3, "href", '#');
        attr(a3, "class", "iconContainer svelte-11fforo");
        attr(span4, "class", "svelte-11fforo");
        attr(div14, "class", "infoModalWrapperLeft svelte-11fforo");
        attr(div15, "class", "amountContainer svelte-11fforo");
        attr(a4, "href", '#');
        attr(a4, "class", "iconContainer svelte-11fforo");
        attr(span5, "class", "svelte-11fforo");
        attr(div16, "class", "infoModalWrapperLeftFinal svelte-11fforo");
        attr(div17, "class", "amountContainer svelte-11fforo");
        attr(button, "class", "svelte-11fforo");
        attr(div18, "class", "buttonContainer svelte-11fforo");
        attr(div19, "class", "leftColumn svelte-11fforo");
        attr(div20, "class", "columnLayout svelte-11fforo");
        attr(div21, "class", "greenTitle svelte-11fforo");
        attr(div22, "class", "greenTitle svelte-11fforo");
        attr(div23, "class", "greenTitle svelte-11fforo");
        attr(div24, "class", "bottomTextsContainer svelte-11fforo");
        attr(div25, "class", "logoContainer svelte-11fforo");
        attr(div26, "class", "buttomrowContainer svelte-11fforo");
      },
      m: function m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, div0, anchor);
        insert(target, t2, anchor);
        insert(target, div3, anchor);
        insert(target, t6, anchor);
        insert(target, div20, anchor);
        append(div20, div13);
        append(div13, div6);
        append(div6, div4);
        append(div4, a0);
        append(div4, t7);
        append(div4, span1);
        append(div6, t9);
        append(div6, div5);
        mount_component(rangeslider0, div5, null);
        append(div13, t10);
        append(div13, div9);
        append(div9, div7);
        append(div7, a1);
        append(div7, t11);
        append(div7, span2);
        append(div9, t13);
        append(div9, div8);
        mount_component(rangeslider1, div8, null);
        append(div13, t14);
        append(div13, div12);
        append(div12, div10);
        append(div10, a2);
        append(div10, t15);
        append(div10, span3);
        append(div12, t17);
        append(div12, div11);
        mount_component(maxpaymentmonths0, div11, null);
        append(div11, t18);
        mount_component(maxpaymentmonths1, div11, null);
        append(div11, t19);
        mount_component(maxpaymentmonths2, div11, null);
        append(div11, t20);
        mount_component(maxpaymentmonths3, div11, null);
        append(div11, t21);
        mount_component(maxpaymentmonths4, div11, null);
        append(div20, t22);
        append(div20, div19);
        append(div19, div14);
        append(div14, a3);
        append(div14, t23);
        append(div14, span4);
        append(div19, t25);
        append(div19, div15);
        append(div15, t26);
        append(div15, t27);
        append(div19, t28);
        append(div19, div16);
        append(div16, a4);
        append(div16, t29);
        append(div16, span5);
        append(div19, t31);
        append(div19, div17);
        append(div17, t32);
        append(div17, t33);
        append(div19, t34);
        append(div19, div18);
        append(div18, button);
        insert(target, t36, anchor);
        insert(target, div26, anchor);
        append(div26, div24);
        append(div24, div21);
        append(div24, t38);
        append(div24, div22);
        append(div22, t39);
        append(div22, t40);
        append(div24, t41);
        append(div24, div23);
        append(div26, t43);
        append(div26, div25);
        current = true;

        if (!mounted) {
          dispose = [listen(a0, "click",
          /*chachIconClickHandler*/
          ctx[6]), listen(a1, "click",
          /*FundingIconClickHandler*/
          ctx[7]), listen(a2, "click",
          /*MonthlyIconClickHandler*/
          ctx[8]), listen(a3, "click",
          /*endPaymentClickHandler*/
          ctx[9]), listen(a4, "click",
          /*monhtlyPaymentClickHandler*/
          ctx[10]), listen(button, "click",
          /*handleButtonClick*/
          ctx[11])];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*isShowToolTip*/
        ctx[4]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*isShowToolTip*/
            16) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$1(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t0.parentNode, t0);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }

        var rangeslider0_changes = {};
        if (dirty &
        /*rate_over_prime*/
        1) rangeslider0_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[0];
        rangeslider0.$set(rangeslider0_changes);
        var rangeslider1_changes = {};
        if (dirty &
        /*rate_over_prime*/
        1) rangeslider1_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[0];
        rangeslider1.$set(rangeslider1_changes);
        var maxpaymentmonths0_changes = {};
        if (dirty &
        /*rate_over_prime*/
        1) maxpaymentmonths0_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[0];
        maxpaymentmonths0.$set(maxpaymentmonths0_changes);
        var maxpaymentmonths1_changes = {};
        if (dirty &
        /*rate_over_prime*/
        1) maxpaymentmonths1_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[0];
        maxpaymentmonths1.$set(maxpaymentmonths1_changes);
        var maxpaymentmonths2_changes = {};
        if (dirty &
        /*rate_over_prime*/
        1) maxpaymentmonths2_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[0];
        maxpaymentmonths2.$set(maxpaymentmonths2_changes);
        var maxpaymentmonths3_changes = {};
        if (dirty &
        /*rate_over_prime*/
        1) maxpaymentmonths3_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[0];
        maxpaymentmonths3.$set(maxpaymentmonths3_changes);
        var maxpaymentmonths4_changes = {};
        if (dirty &
        /*rate_over_prime*/
        1) maxpaymentmonths4_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[0];
        maxpaymentmonths4.$set(maxpaymentmonths4_changes);
        if ((!current || dirty &
        /*$UserSessionData*/
        32) && t27_value !== (t27_value = parseInt(
        /*$UserSessionData*/
        ctx[5]["finalMaxAmount"]).toLocaleString() + "")) set_data(t27, t27_value);
        if ((!current || dirty &
        /*$UserSessionData*/
        32) && t33_value !== (t33_value = parseInt(
        /*$UserSessionData*/
        ctx[5]["max_monthly_funding"]).toLocaleString() + "")) set_data(t33, t33_value);
        if (!current || dirty &
        /*rate_over_prime*/
        1) set_data(t40,
        /*rate_over_prime*/
        ctx[0]);
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        transition_in(rangeslider0.$$.fragment, local);
        transition_in(rangeslider1.$$.fragment, local);
        transition_in(maxpaymentmonths0.$$.fragment, local);
        transition_in(maxpaymentmonths1.$$.fragment, local);
        transition_in(maxpaymentmonths2.$$.fragment, local);
        transition_in(maxpaymentmonths3.$$.fragment, local);
        transition_in(maxpaymentmonths4.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        transition_out(rangeslider0.$$.fragment, local);
        transition_out(rangeslider1.$$.fragment, local);
        transition_out(maxpaymentmonths0.$$.fragment, local);
        transition_out(maxpaymentmonths1.$$.fragment, local);
        transition_out(maxpaymentmonths2.$$.fragment, local);
        transition_out(maxpaymentmonths3.$$.fragment, local);
        transition_out(maxpaymentmonths4.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(t0);
        if (detaching) detach(div0);
        if (detaching) detach(t2);
        if (detaching) detach(div3);
        if (detaching) detach(t6);
        if (detaching) detach(div20);
        destroy_component(rangeslider0);
        destroy_component(rangeslider1);
        destroy_component(maxpaymentmonths0);
        destroy_component(maxpaymentmonths1);
        destroy_component(maxpaymentmonths2);
        destroy_component(maxpaymentmonths3);
        destroy_component(maxpaymentmonths4);
        if (detaching) detach(t36);
        if (detaching) detach(div26);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance$1($$self, $$props, $$invalidate) {
    var $UserSessionData;
    component_subscribe($$self, UserSessionData, function ($$value) {
      return $$invalidate(5, $UserSessionData = $$value);
    });
    var total = $$props.total;
    var rate_over_prime = $$props.rate_over_prime;
    var prime = $$props.prime;
    var max_funding_precentage = $$props.max_funding_precentage;
    var minimum_cache = $$props.minimum_cache;
    var max_funding = $$props.max_funding;
    var months = $$props.months;
    var initFund;

    if (max_funding_precentage == 0 || max_funding_precentage > 100) {
      max_funding_precentage = 70;
    }

    var initFundDevider = 100 / max_funding_precentage;
    set_store_value(UserSessionData, $UserSessionData = {}, $UserSessionData);
    set_store_value(UserSessionData, $UserSessionData["maxTotal"] = total, $UserSessionData);
    set_store_value(UserSessionData, $UserSessionData["prime"] = prime, $UserSessionData);
    initFund = $UserSessionData["maxTotal"] / initFundDevider;
    set_store_value(UserSessionData, $UserSessionData["max_cache"] = initFund, $UserSessionData);
    set_store_value(UserSessionData, $UserSessionData["max_funding"] = $UserSessionData["maxTotal"] - $UserSessionData["max_cache"], $UserSessionData);
    set_store_value(UserSessionData, $UserSessionData["max_cache_range_max"] = total, $UserSessionData);
    set_store_value(UserSessionData, $UserSessionData["max_cache_range_min"] = minimum_cache, $UserSessionData);
    set_store_value(UserSessionData, $UserSessionData["max_funding_range_max"] = max_funding, $UserSessionData);
    set_store_value(UserSessionData, $UserSessionData["max_funding_range_min"] = 0, $UserSessionData);

    if (months % 12 == 0) {
      set_store_value(UserSessionData, $UserSessionData["max_months"] = months.toString(), $UserSessionData);
    } else {
      set_store_value(UserSessionData, $UserSessionData["max_months"] = "36", $UserSessionData);
    }

    var tooltipMessage = "";
    var top = 0;
    var left = 0;
    var isShowToolTip = false;

    var setMontlyAmount = function setMontlyAmount() {
      if (typeof window !== 'undefined') {
        var monthInteger = parseInt($UserSessionData["max_months"]);
        var monthAmountWithoutIntrest = $UserSessionData["max_funding"] / monthInteger;
        var interest = $UserSessionData["prime"] + rate_over_prime;
        var SinglePercentageOfOriginal = monthAmountWithoutIntrest / 100;
        var amountOfPercentage = SinglePercentageOfOriginal * interest;
        set_store_value(UserSessionData, $UserSessionData["max_monthly_funding"] = monthAmountWithoutIntrest + amountOfPercentage, $UserSessionData);
        set_store_value(UserSessionData, $UserSessionData["finalMaxAmount"] = $UserSessionData["max_monthly_funding"] * monthInteger, $UserSessionData);
      }
    };

    setMontlyAmount();

    var chachIconClickHandler = function chachIconClickHandler(event) {
      // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
      $$invalidate(2, top = event.clientY - 100);
      $$invalidate(3, left = event.clientX - 150);
      $$invalidate(1, tooltipMessage = "סכום המזומן שברשותך לתשלום על הרכב");
      $$invalidate(4, isShowToolTip = true);
    }; // open(MaxInfoModal, { message: "סכום המזומן שברשותך לתשלום על הרכב" }, { closeButton: false,styleWindow });


    var FundingIconClickHandler = function FundingIconClickHandler(event) {
      // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
      $$invalidate(2, top = event.clientY - 100);
      $$invalidate(3, left = event.clientX - 150);
      $$invalidate(1, tooltipMessage = "סכום הנדרש לך למימון העסקה");
      $$invalidate(4, isShowToolTip = true);
    }; // open(MaxInfoModal, { message: "סכום הנדרש לך למימון העסקה" }, { closeButton: false,styleWindow });


    var MonthlyIconClickHandler = function MonthlyIconClickHandler(event) {
      // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
      $$invalidate(2, top = event.clientY - 100);
      $$invalidate(3, left = event.clientX - 150);
      $$invalidate(1, tooltipMessage = "תקופת התשלומים שלי (בחודשים)");
      $$invalidate(4, isShowToolTip = true);
    }; // open(MaxInfoModal, { message: "תקופת התשלומים שלי (בחודשים)" }, { closeButton: false,styleWindow });


    var endPaymentClickHandler = function endPaymentClickHandler(event) {
      // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
      $$invalidate(2, top = event.clientY - 100);
      $$invalidate(3, left = event.clientX - 150);
      $$invalidate(1, tooltipMessage = "הסכום שנותר לך לשלם בסיום העסקה");
      $$invalidate(4, isShowToolTip = true);
    }; // open(MaxInfoModal, { message: "הסכום שנותר לך לשלם בסיום העסקה" }, { closeButton: false,styleWindow });


    var monhtlyPaymentClickHandler = function monhtlyPaymentClickHandler(event) {
      // set  y based on actual click position (+ 10px ), width and height are fixed ( start with default)
      $$invalidate(2, top = event.clientY - 100);
      $$invalidate(3, left = event.clientX - 150);
      $$invalidate(1, tooltipMessage = "סכום ההחזר החודשי המשוער שלך");
      $$invalidate(4, isShowToolTip = true);
    }; // open(MaxInfoModal, { message: "סכום ההחזר החודשי המשוער שלך" }, { closeButton: false,styleWindow });


    var handleButtonClick = function handleButtonClick() {
      //let maxURL = `viewIframe?back=max&url=${SAPPER_APP_MAX_URL}`;
      // goto(maxURL)
      var monthInteger = parseInt($UserSessionData["max_months"]);
      var totalAmount = parseInt($UserSessionData["max_funding"]);
      var maxURL = "https://www.max.co.il/loans/wizard/that-me?amount=".concat(totalAmount, "&payments=").concat(monthInteger, "&businessLoan=false");
      window.open(maxURL);
    };

    function tooltip_isShowToolTip_binding(value) {
      isShowToolTip = value;
      $$invalidate(4, isShowToolTip);
    }

    $$self.$$set = function ($$props) {
      if ('total' in $$props) $$invalidate(13, total = $$props.total);
      if ('rate_over_prime' in $$props) $$invalidate(0, rate_over_prime = $$props.rate_over_prime);
      if ('prime' in $$props) $$invalidate(14, prime = $$props.prime);
      if ('max_funding_precentage' in $$props) $$invalidate(12, max_funding_precentage = $$props.max_funding_precentage);
      if ('minimum_cache' in $$props) $$invalidate(15, minimum_cache = $$props.minimum_cache);
      if ('max_funding' in $$props) $$invalidate(16, max_funding = $$props.max_funding);
      if ('months' in $$props) $$invalidate(17, months = $$props.months);
    };

    return [rate_over_prime, tooltipMessage, top, left, isShowToolTip, $UserSessionData, chachIconClickHandler, FundingIconClickHandler, MonthlyIconClickHandler, endPaymentClickHandler, monhtlyPaymentClickHandler, handleButtonClick, max_funding_precentage, total, prime, minimum_cache, max_funding, months, tooltip_isShowToolTip_binding];
  }

  var Max_content = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Max_content, _SvelteComponent);

    var _super = _createSuper$1(Max_content);

    function Max_content(options) {
      var _this;

      _classCallCheck(this, Max_content);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
        total: 13,
        rate_over_prime: 0,
        prime: 14,
        max_funding_precentage: 12,
        minimum_cache: 15,
        max_funding: 16,
        months: 17
      });
      return _this;
    }

    return Max_content;
  }(SvelteComponent);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function create_if_block(ctx) {
    var maxcontent;
    var current;
    maxcontent = new Max_content({
      props: {
        total:
        /*total*/
        ctx[0],
        max_funding_precentage:
        /*maxFundingPrecentage*/
        ctx[3],
        rate_over_prime:
        /*rate_over_prime*/
        ctx[1],
        minimum_cache:
        /*minimumCache*/
        ctx[4],
        max_funding: "" + (
        /*maxFunding*/
        ctx[5] +
        /*months*/
        ctx[6]),
        prime:
        /*prime*/
        ctx[2]
      }
    });
    return {
      c: function c() {
        create_component(maxcontent.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(maxcontent, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var maxcontent_changes = {};
        if (dirty &
        /*total*/
        1) maxcontent_changes.total =
        /*total*/
        ctx[0];
        if (dirty &
        /*maxFundingPrecentage*/
        8) maxcontent_changes.max_funding_precentage =
        /*maxFundingPrecentage*/
        ctx[3];
        if (dirty &
        /*rate_over_prime*/
        2) maxcontent_changes.rate_over_prime =
        /*rate_over_prime*/
        ctx[1];
        if (dirty &
        /*minimumCache*/
        16) maxcontent_changes.minimum_cache =
        /*minimumCache*/
        ctx[4];
        if (dirty &
        /*maxFunding, months*/
        96) maxcontent_changes.max_funding = "" + (
        /*maxFunding*/
        ctx[5] +
        /*months*/
        ctx[6]);
        if (dirty &
        /*prime*/
        4) maxcontent_changes.prime =
        /*prime*/
        ctx[2];
        maxcontent.$set(maxcontent_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(maxcontent.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(maxcontent.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(maxcontent, detaching);
      }
    };
  }

  function create_fragment(ctx) {
    var if_block_anchor;
    var current;
    var if_block =
    /*isFontLoaded*/
    ctx[7] && create_if_block(ctx);
    return {
      c: function c() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
        this.c = noop;
      },
      m: function m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*isFontLoaded*/
        ctx[7]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*isFontLoaded*/
            128) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance($$self, $$props, $$invalidate) {
    var _$$props$total = $$props.total,
        total = _$$props$total === void 0 ? 60000 : _$$props$total;
    var _$$props$rate_over_pr = $$props.rate_over_prime,
        rate_over_prime = _$$props$rate_over_pr === void 0 ? 2.75 : _$$props$rate_over_pr;
    var _$$props$prime = $$props.prime,
        prime = _$$props$prime === void 0 ? 1.6 : _$$props$prime;
    var _$$props$maxFundingPr = $$props.maxFundingPrecentage,
        maxFundingPrecentage = _$$props$maxFundingPr === void 0 ? 80 : _$$props$maxFundingPr;
    var _$$props$minimumCache = $$props.minimumCache,
        minimumCache = _$$props$minimumCache === void 0 ? 1500 : _$$props$minimumCache;
    var _$$props$maxFunding = $$props.maxFunding,
        maxFunding = _$$props$maxFunding === void 0 ? 58500 : _$$props$maxFunding;
    var _$$props$months = $$props.months,
        months = _$$props$months === void 0 ? 24 : _$$props$months;
    var isFontLoaded = false;
    onMount( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var fonts, fontsLoadedCounter;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('the component has mounted');
              fonts = ["fbspoileren-bold-webfont", "fbspoileren-regular-webfont", "FbSpoiler-Lightwebfont"];
              fontsLoadedCounter = 0;
              fonts.map(function (font) {
                var fontName = font;
                var fontURL = "url(".concat(fontName, ".ttf)");
                var f = new FontFace(fontName, fontURL);
                f.load().then(function (loadedFace) {
                  document.fonts.add(loadedFace);
                  fontsLoadedCounter += 1;
                });
              });

            case 4:

              if (!(fontsLoadedCounter == fonts.length)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("break", 13);

            case 9:
              _context.next = 11;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 3000);
              });

            case 11:
              _context.next = 4;
              break;

            case 13:
              $$invalidate(7, isFontLoaded = true);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    $$self.$$set = function ($$props) {
      if ('total' in $$props) $$invalidate(0, total = $$props.total);
      if ('rate_over_prime' in $$props) $$invalidate(1, rate_over_prime = $$props.rate_over_prime);
      if ('prime' in $$props) $$invalidate(2, prime = $$props.prime);
      if ('maxFundingPrecentage' in $$props) $$invalidate(3, maxFundingPrecentage = $$props.maxFundingPrecentage);
      if ('minimumCache' in $$props) $$invalidate(4, minimumCache = $$props.minimumCache);
      if ('maxFunding' in $$props) $$invalidate(5, maxFunding = $$props.maxFunding);
      if ('months' in $$props) $$invalidate(6, months = $$props.months);
    };

    return [total, rate_over_prime, prime, maxFundingPrecentage, minimumCache, maxFunding, months, isFontLoaded];
  }

  var Src = /*#__PURE__*/function (_SvelteElement) {
    _inherits(Src, _SvelteElement);

    var _super = _createSuper(Src);

    function Src(options) {
      var _this;

      _classCallCheck(this, Src);

      _this = _super.call(this);
      _this.shadowRoot.innerHTML = "<style>@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800i&display=swap\");.component-styles-wrapper h1{font-family:\"Open Sans\", sans-serif}.component-styles-wrapper .clock-container{width:500px}@media(orientation: portrait) and (max-width: 479px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:25px;font-size:15.8pt}.linesContainer.svelte-11fforo.svelte-11fforo{font-size:14.05pt;flex-direction:column;align-items:center;margin-top:10px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:24px;padding-right:30px}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:24px;padding-right:30px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:24px;padding-right:30px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:11.22pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:11.22pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:11.22pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:100%;margin-right:-18px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:25.5pt}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{padding-right:30px;padding-left:30px}button.svelte-11fforo.svelte-11fforo{width:70%;height:40px;margin-top:20px}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:10.5pt}.logoContainer.svelte-11fforo.svelte-11fforo{width:100%}}@media(orientation: portrait) and (min-width: 480px) and (max-width: 599px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:25px;font-size:21pt}.linesContainer.svelte-11fforo.svelte-11fforo{font-size:18.75pt;flex-direction:column;align-items:center;margin-top:10px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:33px;padding-right:40px}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:33px;padding-right:40px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:33px;padding-right:40px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:14.9pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:14.9pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:14.9pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:100%;margin-right:-18px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:34.0pt}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{padding-right:40px;padding-left:40px}button.svelte-11fforo.svelte-11fforo{width:60%;height:40px;margin-top:20px}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:14.0pt}.logoContainer.svelte-11fforo.svelte-11fforo{width:100%}}@media(orientation: portrait) and (min-width: 600px) and (max-width: 719px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:25px;font-size:26.3pt}.linesContainer.svelte-11fforo.svelte-11fforo{font-size:23.4pt;flex-direction:column;align-items:center;margin-top:10px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:38.1px;padding-right:48px}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:38.1px;padding-right:48px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:38.1px;padding-right:48px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:18.7pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:18.7pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:18.7pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:85%;margin-right:-7px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:42.5pt}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{padding-right:48px;padding-left:48px}button.svelte-11fforo.svelte-11fforo{width:55%;height:40px;margin-top:20px}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:17.5pt}.logoContainer.svelte-11fforo.svelte-11fforo{width:100%}}@media(orientation: portrait) and (min-width: 720px) and (max-width: 1023px){.maintitle.svelte-11fforo.svelte-11fforo{font-size:31.6pt;padding-top:25px}.linesContainer.svelte-11fforo.svelte-11fforo{font-size:28.1pt;flex-direction:column;align-items:center;margin-top:10px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:50px;padding-right:88px}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:50px;padding-right:88px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:50px;padding-right:88px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:22.4pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:22.4pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:22.4pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:97%;margin-right:3px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:42.5pt}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{padding-right:88px;padding-left:88px}button.svelte-11fforo.svelte-11fforo{width:50%;height:40px;margin-top:20px}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:21.1pt}.logoContainer.svelte-11fforo.svelte-11fforo{width:100%}}@media(orientation: portrait) and (min-width: 1024px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:25px;font-size:45.1pt}.linesContainer.svelte-11fforo.svelte-11fforo{font-size:40.0pt;flex-direction:column;align-items:center;margin-top:10px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:60px;padding-right:120px}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:60px;padding-right:120px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:60px;padding-right:120px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:32.0pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:32.0pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:32.0pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:97%;margin-right:3px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:72.6pt}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{padding-right:120px;padding-left:120px}button.svelte-11fforo.svelte-11fforo{width:45%;height:40px;margin-top:20px}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:30.0pt}.logoContainer.svelte-11fforo.svelte-11fforo{width:100%}}@media(orientation: landscape) and ( max-width: 1279px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:45px;font-size:23.21pt}.linesContainer.svelte-11fforo.svelte-11fforo{margin-top:51px;margin-right:61px;direction:rtl;gap:5px;font-size:13.35pt}.titleAndRangeContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;margin-top:6px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:28px;padding-right:61px}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:47px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:10px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:13.35pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:13.35pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:13.35pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:50%}.iconContainer.svelte-11fforo.svelte-11fforo{text-align:right;padding-top:2px}.columnLayout.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.rightColumn.svelte-11fforo.svelte-11fforo{width:65%}.leftColumn.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:column}.rangeSliderCWrapper.svelte-11fforo.svelte-11fforo{width:50%}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{width:50%;margin-top:10px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:31.14pt}button.svelte-11fforo.svelte-11fforo{width:95%}.bottomTextsContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;padding-right:61px;gap:5px;width:90%}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:8.5pt;align-self:flex-end}.buttomrowContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.logoContainer.svelte-11fforo img.svelte-11fforo{max-width:60%;height:auto}}@media(orientation: landscape) and ( min-width: 1280px) and ( max-width: 1439px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:94px;font-size:39.02pt}.linesContainer.svelte-11fforo.svelte-11fforo{margin-top:88px;margin-right:160px;direction:rtl;gap:5px;font-size:21.34pt}.titleAndRangeContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;margin-top:17px;margin-bottom:40px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:28px;padding-right:160px;width:30%}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:47px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:10px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:21.34pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:21.34pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:21.34pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:50%}.iconContainer.svelte-11fforo.svelte-11fforo{text-align:right;padding-top:2px}.columnLayout.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.rightColumn.svelte-11fforo.svelte-11fforo{width:65%}.leftColumn.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:column;margin-right:10px}.rangeSliderCWrapper.svelte-11fforo.svelte-11fforo{width:50%}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{width:50%;margin-top:10px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:49.79pt}button.svelte-11fforo.svelte-11fforo{width:85%}.bottomTextsContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;padding-right:160px;gap:5px;width:90%}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:13.5pt;align-self:flex-end}.buttomrowContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.logoContainer.svelte-11fforo img.svelte-11fforo{max-width:60%;height:auto}}@media(orientation: landscape) and ( min-width: 1440px) and ( max-width: 1919px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:112px;font-size:44.08pt}.linesContainer.svelte-11fforo.svelte-11fforo{margin-top:93px;margin-right:183px;direction:rtl;gap:5px;font-size:24.1pt}.titleAndRangeContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;margin-top:17px;margin-bottom:60px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:28px;padding-right:183px;width:30%}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:47px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:10px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:24.1pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:24.1pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:24.1pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:70%}.iconContainer.svelte-11fforo.svelte-11fforo{text-align:right;padding-top:2px}.columnLayout.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.rightColumn.svelte-11fforo.svelte-11fforo{width:65%}.leftColumn.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:column;margin-right:10px}.rangeSliderCWrapper.svelte-11fforo.svelte-11fforo{width:50%}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{width:50%;margin-top:10px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:56.24pt}button.svelte-11fforo.svelte-11fforo{width:75%}.bottomTextsContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;padding-right:183px;gap:5px;width:90%}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:16.5pt;align-self:flex-end}.buttomrowContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.logoContainer.svelte-11fforo img.svelte-11fforo{max-width:60%;height:auto}}@media(orientation: landscape) and ( min-width: 1920px) and ( max-width: 2559px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:151px;font-size:58.67pt}.linesContainer.svelte-11fforo.svelte-11fforo{margin-top:140px;margin-right:238px;direction:rtl;gap:5px;font-size:32pt}.titleAndRangeContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;margin-top:17px;margin-bottom:95px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:28px;padding-right:183px;width:30%}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:47px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:10px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:32pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:32pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:32pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:70%}.iconContainer.svelte-11fforo.svelte-11fforo{text-align:right;padding-top:2px}.columnLayout.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.rightColumn.svelte-11fforo.svelte-11fforo{width:65%}.leftColumn.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:column;margin-right:10px}.rangeSliderCWrapper.svelte-11fforo.svelte-11fforo{width:50%}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{width:50%;margin-top:10px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:74pt}button.svelte-11fforo.svelte-11fforo{width:60%}.bottomTextsContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;padding-right:183px;gap:5px;width:90%}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:22.5pt;align-self:flex-end}.buttomrowContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.logoContainer.svelte-11fforo img.svelte-11fforo{max-width:60%;height:auto}}@media(orientation: landscape) and ( min-width: 2560px){.maintitle.svelte-11fforo.svelte-11fforo{padding-top:143px;font-size:78.06pt}.linesContainer.svelte-11fforo.svelte-11fforo{margin-top:174px;margin-right:325px;direction:rtl;gap:5px;font-size:42.69pt}.titleAndRangeContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;margin-top:17px;margin-bottom:130px}.infoModalWrapper.svelte-11fforo.svelte-11fforo{padding-top:28px;padding-right:325px;width:30%}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{padding-top:47px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{padding-top:10px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-size:42.69pt}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-size:42.69pt}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-size:42.69pt}.iIconImage.svelte-11fforo.svelte-11fforo{max-width:70%}.iconContainer.svelte-11fforo.svelte-11fforo{text-align:right;padding-top:2px}.columnLayout.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.rightColumn.svelte-11fforo.svelte-11fforo{width:65%}.leftColumn.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:column;margin-right:60px}.rangeSliderCWrapper.svelte-11fforo.svelte-11fforo{width:50%}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{width:50%;margin-top:10px}.amountContainer.svelte-11fforo.svelte-11fforo{font-size:99.6pt}button.svelte-11fforo.svelte-11fforo{width:50%}.bottomTextsContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse;padding-right:325px;gap:5px;width:90%}.greenTitle.svelte-11fforo.svelte-11fforo{font-size:29.5pt;align-self:flex-end}.buttomrowContainer.svelte-11fforo.svelte-11fforo{display:flex;flex-direction:row-reverse}.logoContainer.svelte-11fforo img.svelte-11fforo{max-width:60%;height:auto}}.maintitle.svelte-11fforo.svelte-11fforo{display:flex;justify-content:center;color:#142341;font-family:\"fbspoileren-bold-webfont\"}.linesContainer.svelte-11fforo.svelte-11fforo{display:flex;font-family:\"fbspoileren-regular-webfont\"}.infoModalWrapper.svelte-11fforo.svelte-11fforo{display:flex;justify-content:flex-end;margin-bottom:9px}.infoModalWrapperLeft.svelte-11fforo.svelte-11fforo{display:flex;justify-content:flex-end;margin-bottom:9px}.infoModalWrapperLeftFinal.svelte-11fforo.svelte-11fforo{display:flex;justify-content:flex-end;margin-bottom:9px}.infoModalWrapper.svelte-11fforo span.svelte-11fforo{font-family:\"FbSpoiler-Lightwebfont\";margin-left:5px}.infoModalWrapperLeft.svelte-11fforo span.svelte-11fforo{font-family:\"FbSpoiler-Lightwebfont\";margin-left:5px}.infoModalWrapperLeftFinal.svelte-11fforo span.svelte-11fforo{font-family:\"FbSpoiler-Lightwebfont\";margin-left:5px}.paymentMonthContainer.svelte-11fforo.svelte-11fforo{display:flex;justify-content:space-between}.amountContainer.svelte-11fforo.svelte-11fforo{text-align:center;color:#15abc4;font-family:\"fbspoileren-bold-webfont\"}.buttonContainer.svelte-11fforo.svelte-11fforo{display:flex;width:100%;justify-content:center}button.svelte-11fforo.svelte-11fforo{background-color:#15abc4;border:1px solid #f0f0f0;color:white;border-radius:20px;font-size:12pt;margin-bottom:20px}.greenTitle.svelte-11fforo.svelte-11fforo{display:flex;justify-content:center;color:#15abc4;font-family:\"fbspoileren-regular-webfont\"}.logoContainer.svelte-11fforo.svelte-11fforo{display:flex;margin-top:20px;justify-content:center}a.svelte-13loezj{text-decoration:none}.wrapper.svelte-13loezj{display:flex;flex-direction:column;justify-content:center}.bubbleContainer.svelte-13loezj{display:flex;justify-content:center;background-color:#15abc4;border:1px solid #15abc4;color:white;border-radius:5px;font-family:\"fbspoileren-regular-webfont\";font-size:16px;font-weight:bold;height:25px;margin-top:-6px}.arrowDown.svelte-13loezj{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #15abc4;margin-left:40%}@media(orientation: portrait){.topspace.svelte-13loezj{height:25px}}@media(orientation: landscape){.topspace.svelte-13loezj{height:26px}}.greenLine.svelte-13loezj{background-color:#15abc4;height:5px;width:100%}.grayLine.svelte-13loezj{background-color:#5d5d5d;height:5px;width:100%}.textLine.svelte-13loezj{color:#5d5d5d;font-size:14px;direction:rtl;font-family:\"fbspoileren-regular-webfont\";text-decoration:underline}.toolTipWraraper.svelte-1oh97dw.svelte-1oh97dw{box-shadow:0px 0px 17px #15abc4 ;width:300px;position:absolute;padding:5px;background-color:white;border-radius:25px;z-index:5000}.toolTipWraraper.svelte-1oh97dw div.svelte-1oh97dw{display:flex;justify-content:center}.mainText.svelte-1oh97dw.svelte-1oh97dw{font-family:\"fbspoileren-regular-webfont\"}@media(orientation: portrait) and (max-width: 479px){.mainText.svelte-1oh97dw.svelte-1oh97dw{font-size:10.3pt}}@media(orientation: portrait) and (min-width: 480px) and (max-width: 599px){.mainText.svelte-1oh97dw.svelte-1oh97dw{font-size:12.3pt}}@media(orientation: portrait) and (min-width: 600px) and (max-width: 719px){.mainText.svelte-1oh97dw.svelte-1oh97dw{font-size:14.3pt}}@media(orientation: portrait) and (min-width: 720px) and (max-width: 1023px){.mainText.svelte-1oh97dw.svelte-1oh97dw{font-size:16.3pt}}@media(orientation: portrait) and (min-width: 1024px){.mainText.svelte-1oh97dw.svelte-1oh97dw{font-size:18.3pt}}.arrow-down.svelte-1oh97dw.svelte-1oh97dw{width:0;height:0;position:absolute;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid white;z-index:6000}@media(orientation: portrait) and (max-width: 479px){.rangeSliderWrapper.svelte-10bmzab{padding-left:10px;padding-right:10px}.minmaxWrapper.svelte-10bmzab{padding-left:30px;padding-right:30px}input.svelte-10bmzab{width:90%}}@media(orientation: portrait) and (min-width: 480px) and (max-width: 599px){.rangeSliderWrapper.svelte-10bmzab{padding-left:15px;padding-right:15px}.minmaxWrapper.svelte-10bmzab{padding-left:40px;padding-right:40px}input.svelte-10bmzab{width:90%}}@media(orientation: portrait) and (min-width: 600px) and (max-width: 719px){.rangeSliderWrapper.svelte-10bmzab{padding-left:19px;padding-right:19px}.minmaxWrapper.svelte-10bmzab{padding-left:48px;padding-right:48px}input.svelte-10bmzab{width:90%}}@media(orientation: portrait) and (min-width: 720px) and (max-width: 1023px){.rangeSliderWrapper.svelte-10bmzab{padding-left:39px;padding-right:39px}.minmaxWrapper.svelte-10bmzab{padding-left:88px;padding-right:88px}input.svelte-10bmzab{width:90%}}@media(orientation: portrait) and (min-width: 1024px){.rangeSliderWrapper.svelte-10bmzab{padding-left:55px;padding-right:55px}.minmaxWrapper.svelte-10bmzab{padding-left:120px;padding-right:120px}input.svelte-10bmzab{width:90%}}@media(orientation: landscape) and ( max-width: 1279px){input.svelte-10bmzab{width:100%}.minmaxWrapper.svelte-10bmzab{padding-left:5px;padding-right:5px}}input.svelte-10bmzab{direction:rtl}.rangeSliderWrapper.svelte-10bmzab{display:flex;justify-content:center}.minmaxWrapper.svelte-10bmzab{display:flex;justify-content:space-between;font-size:10px}input[type=range].svelte-10bmzab{height:25px;-webkit-appearance:none;margin:10px 0;width:100%}input[type=range].svelte-10bmzab:focus{outline:none}input[type=range].svelte-10bmzab::-webkit-slider-runnable-track{width:100%;height:5px;cursor:pointer;animate:0.2s;box-shadow:0px 0px 0px #000000;background:#15abc4;border-radius:1px;border:0px solid #000000}input[type=range].svelte-10bmzab::-webkit-slider-thumb{box-shadow:0px 0px 0px #000000;border:1px solid #2497E3;height:18px;width:18px;border-radius:25px;background:#f3f4f5;cursor:pointer;-webkit-appearance:none;margin-top:-7px}input[type=range].svelte-10bmzab:focus::-webkit-slider-runnable-track{background:#15abc4}input[type=range].svelte-10bmzab::-moz-range-track{width:100%;height:5px;cursor:pointer;animate:0.2s;box-shadow:0px 0px 0px #000000;background:#15abc4;border-radius:1px;border:0px solid #000000}input[type=range].svelte-10bmzab::-moz-range-thumb{box-shadow:0px 0px 0px #000000;border:1px solid #2497E3;height:18px;width:18px;border-radius:25px;background:#A1D0FF;cursor:pointer}input[type=range].svelte-10bmzab::-ms-track{width:100%;height:5px;cursor:pointer;animate:0.2s;background:transparent;border-color:transparent;color:transparent}input[type=range].svelte-10bmzab::-ms-fill-lower{background:#15abc4;border:0px solid #000000;border-radius:2px;box-shadow:0px 0px 0px #000000}input[type=range].svelte-10bmzab::-ms-fill-upper{background:#15abc4;border:0px solid #000000;border-radius:2px;box-shadow:0px 0px 0px #000000}input[type=range].svelte-10bmzab::-ms-thumb{margin-top:1px;box-shadow:0px 0px 0px #000000;border:1px solid #2497E3;height:18px;width:18px;border-radius:25px;background:#A1D0FF;cursor:pointer}input[type=range].svelte-10bmzab:focus::-ms-fill-lower{background:#15abc4}input[type=range].svelte-10bmzab:focus::-ms-fill-upper{background:#15abc4}button.svelte-h8fehs{margin-top:10px;background-color:#15abc4;border:1px solid #f0f0f0;color:white;border-radius:20px;font-family:\"fbspoileren-bold-webfont\";height:30px}@media(orientation: portrait) and (max-width: 479px){button.svelte-h8fehs{font-size:13.1pt;width:80%}}@media(orientation: portrait) and (min-width: 480px) and (max-width: 599px){button.svelte-h8fehs{font-size:12pt;width:80%}}@media(orientation: portrait) and (min-width: 600px) and (max-width: 719px){button.svelte-h8fehs{font-size:12pt;width:80%}}@media(orientation: portrait) and (min-width: 720px) and (max-width: 1023px){button.svelte-h8fehs{font-size:12pt;width:80%}}@media(orientation: portrait) and (min-width: 1024px){button.svelte-h8fehs{font-size:12pt;width:80%}}@media(orientation: landscape){button.svelte-h8fehs{font-size:12pt;width:80%}}.buttonAndText.svelte-1pgruff{display:flex;justify-content:space-between;background-color:#98a1a4;border:1px solid #98a1a4;border-radius:10px;height:15px;width:100%}.round-button.svelte-1pgruff{width:10%;margin-top:1px;margin-right:3px}span.svelte-1pgruff{font-size:10px}.round-button-circle.svelte-1pgruff{width:130%;height:2px;padding-top:2px;padding-bottom:100%;border-radius:50%;border:0.1px solid #000000a6;overflow:hidden;background:transparent}.round-button-a.svelte-1pgruff{display:block;float:left;width:100%;margin-right:2px;padding-bottom:50%;line-height:0.7em;text-align:center;color:black;font-family:Verdana;font-size:10px;font-weight:bold;text-decoration:none}.arrowContainer.svelte-1pgruff{display:flex;justify-content:center}.arrowDown.svelte-1pgruff{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #98a1a4}</style>";
      init(_assertThisInitialized(_this), {
        target: _this.shadowRoot,
        props: attribute_to_object(_this.attributes),
        customElement: true
      }, instance, create_fragment, safe_not_equal, {
        total: 0,
        rate_over_prime: 1,
        prime: 2,
        maxFundingPrecentage: 3,
        minimumCache: 4,
        maxFunding: 5,
        months: 6
      }, null);

      if (options) {
        if (options.target) {
          insert(options.target, _assertThisInitialized(_this), options.anchor);
        }

        if (options.props) {
          _this.$set(options.props);

          flush();
        }
      }

      return _this;
    }

    _createClass(Src, [{
      key: "total",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(total) {
        this.$$set({
          total: total
        });
        flush();
      }
    }, {
      key: "rate_over_prime",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(rate_over_prime) {
        this.$$set({
          rate_over_prime: rate_over_prime
        });
        flush();
      }
    }, {
      key: "prime",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(prime) {
        this.$$set({
          prime: prime
        });
        flush();
      }
    }, {
      key: "maxFundingPrecentage",
      get: function get() {
        return this.$$.ctx[3];
      },
      set: function set(maxFundingPrecentage) {
        this.$$set({
          maxFundingPrecentage: maxFundingPrecentage
        });
        flush();
      }
    }, {
      key: "minimumCache",
      get: function get() {
        return this.$$.ctx[4];
      },
      set: function set(minimumCache) {
        this.$$set({
          minimumCache: minimumCache
        });
        flush();
      }
    }, {
      key: "maxFunding",
      get: function get() {
        return this.$$.ctx[5];
      },
      set: function set(maxFunding) {
        this.$$set({
          maxFunding: maxFunding
        });
        flush();
      }
    }, {
      key: "months",
      get: function get() {
        return this.$$.ctx[6];
      },
      set: function set(months) {
        this.$$set({
          months: months
        });
        flush();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["total", "rate_over_prime", "prime", "maxFundingPrecentage", "minimumCache", "maxFunding", "months"];
      }
    }]);

    return Src;
  }(SvelteElement);

  customElements.define("svelte-custom-element", Src);

  return Src;

})();
