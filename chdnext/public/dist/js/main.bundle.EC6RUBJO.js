(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/cropperjs/dist/cropper.js
  var require_cropper = __commonJS({
    "node_modules/cropperjs/dist/cropper.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Cropper = factory());
      })(exports, function() {
        "use strict";
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
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
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return _arrayLikeToArray(arr);
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++)
            arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
        var WINDOW = IS_BROWSER ? window : {};
        var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
        var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
        var NAMESPACE = "cropper";
        var ACTION_ALL = "all";
        var ACTION_CROP = "crop";
        var ACTION_MOVE = "move";
        var ACTION_ZOOM = "zoom";
        var ACTION_EAST = "e";
        var ACTION_WEST = "w";
        var ACTION_SOUTH = "s";
        var ACTION_NORTH = "n";
        var ACTION_NORTH_EAST = "ne";
        var ACTION_NORTH_WEST = "nw";
        var ACTION_SOUTH_EAST = "se";
        var ACTION_SOUTH_WEST = "sw";
        var CLASS_CROP = "".concat(NAMESPACE, "-crop");
        var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
        var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
        var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
        var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
        var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
        var CLASS_MOVE = "".concat(NAMESPACE, "-move");
        var DATA_ACTION = "".concat(NAMESPACE, "Action");
        var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
        var DRAG_MODE_CROP = "crop";
        var DRAG_MODE_MOVE = "move";
        var DRAG_MODE_NONE = "none";
        var EVENT_CROP = "crop";
        var EVENT_CROP_END = "cropend";
        var EVENT_CROP_MOVE = "cropmove";
        var EVENT_CROP_START = "cropstart";
        var EVENT_DBLCLICK = "dblclick";
        var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
        var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
        var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
        var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
        var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
        var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
        var EVENT_READY = "ready";
        var EVENT_RESIZE = "resize";
        var EVENT_WHEEL = "wheel";
        var EVENT_ZOOM = "zoom";
        var MIME_TYPE_JPEG = "image/jpeg";
        var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
        var REGEXP_DATA_URL = /^data:/;
        var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
        var REGEXP_TAG_NAME = /^img|canvas$/i;
        var MIN_CONTAINER_WIDTH = 200;
        var MIN_CONTAINER_HEIGHT = 100;
        var DEFAULTS = {
          viewMode: 0,
          dragMode: DRAG_MODE_CROP,
          initialAspectRatio: NaN,
          aspectRatio: NaN,
          data: null,
          preview: "",
          responsive: true,
          restore: true,
          checkCrossOrigin: true,
          checkOrientation: true,
          modal: true,
          guides: true,
          center: true,
          highlight: true,
          background: true,
          autoCrop: true,
          autoCropArea: 0.8,
          movable: true,
          rotatable: true,
          scalable: true,
          zoomable: true,
          zoomOnTouch: true,
          zoomOnWheel: true,
          wheelZoomRatio: 0.1,
          cropBoxMovable: true,
          cropBoxResizable: true,
          toggleDragModeOnDblclick: true,
          minCanvasWidth: 0,
          minCanvasHeight: 0,
          minCropBoxWidth: 0,
          minCropBoxHeight: 0,
          minContainerWidth: MIN_CONTAINER_WIDTH,
          minContainerHeight: MIN_CONTAINER_HEIGHT,
          ready: null,
          cropstart: null,
          cropmove: null,
          cropend: null,
          crop: null,
          zoom: null
        };
        var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
        var isNaN2 = Number.isNaN || WINDOW.isNaN;
        function isNumber(value) {
          return typeof value === "number" && !isNaN2(value);
        }
        var isPositiveNumber = function isPositiveNumber2(value) {
          return value > 0 && value < Infinity;
        };
        function isUndefined(value) {
          return typeof value === "undefined";
        }
        function isObject(value) {
          return _typeof(value) === "object" && value !== null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function isPlainObject(value) {
          if (!isObject(value)) {
            return false;
          }
          try {
            var _constructor = value.constructor;
            var prototype = _constructor.prototype;
            return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
          } catch (error) {
            return false;
          }
        }
        function isFunction(value) {
          return typeof value === "function";
        }
        var slice = Array.prototype.slice;
        function toArray(value) {
          return Array.from ? Array.from(value) : slice.call(value);
        }
        function forEach(data, callback) {
          if (data && isFunction(callback)) {
            if (Array.isArray(data) || isNumber(data.length)) {
              toArray(data).forEach(function(value, key) {
                callback.call(data, value, key, data);
              });
            } else if (isObject(data)) {
              Object.keys(data).forEach(function(key) {
                callback.call(data, data[key], key, data);
              });
            }
          }
          return data;
        }
        var assign = Object.assign || function assign2(target) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (isObject(target) && args.length > 0) {
            args.forEach(function(arg) {
              if (isObject(arg)) {
                Object.keys(arg).forEach(function(key) {
                  target[key] = arg[key];
                });
              }
            });
          }
          return target;
        };
        var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
        function normalizeDecimalNumber(value) {
          var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
          return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
        }
        var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
        function setStyle(element, styles) {
          var style = element.style;
          forEach(styles, function(value, property) {
            if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
              value = "".concat(value, "px");
            }
            style[property] = value;
          });
        }
        function hasClass(element, value) {
          return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
        }
        function addClass(element, value) {
          if (!value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              addClass(elem, value);
            });
            return;
          }
          if (element.classList) {
            element.classList.add(value);
            return;
          }
          var className = element.className.trim();
          if (!className) {
            element.className = value;
          } else if (className.indexOf(value) < 0) {
            element.className = "".concat(className, " ").concat(value);
          }
        }
        function removeClass(element, value) {
          if (!value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              removeClass(elem, value);
            });
            return;
          }
          if (element.classList) {
            element.classList.remove(value);
            return;
          }
          if (element.className.indexOf(value) >= 0) {
            element.className = element.className.replace(value, "");
          }
        }
        function toggleClass(element, value, added) {
          if (!value) {
            return;
          }
          if (isNumber(element.length)) {
            forEach(element, function(elem) {
              toggleClass(elem, value, added);
            });
            return;
          }
          if (added) {
            addClass(element, value);
          } else {
            removeClass(element, value);
          }
        }
        var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
        function toParamCase(value) {
          return value.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
        }
        function getData(element, name) {
          if (isObject(element[name])) {
            return element[name];
          }
          if (element.dataset) {
            return element.dataset[name];
          }
          return element.getAttribute("data-".concat(toParamCase(name)));
        }
        function setData(element, name, data) {
          if (isObject(data)) {
            element[name] = data;
          } else if (element.dataset) {
            element.dataset[name] = data;
          } else {
            element.setAttribute("data-".concat(toParamCase(name)), data);
          }
        }
        function removeData(element, name) {
          if (isObject(element[name])) {
            try {
              delete element[name];
            } catch (error) {
              element[name] = void 0;
            }
          } else if (element.dataset) {
            try {
              delete element.dataset[name];
            } catch (error) {
              element.dataset[name] = void 0;
            }
          } else {
            element.removeAttribute("data-".concat(toParamCase(name)));
          }
        }
        var REGEXP_SPACES = /\s\s*/;
        var onceSupported = function() {
          var supported = false;
          if (IS_BROWSER) {
            var once = false;
            var listener = function listener2() {
            };
            var options = Object.defineProperty({}, "once", {
              get: function get() {
                supported = true;
                return once;
              },
              set: function set(value) {
                once = value;
              }
            });
            WINDOW.addEventListener("test", listener, options);
            WINDOW.removeEventListener("test", listener, options);
          }
          return supported;
        }();
        function removeListener(element, type, listener) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var handler = listener;
          type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (!onceSupported) {
              var listeners = element.listeners;
              if (listeners && listeners[event] && listeners[event][listener]) {
                handler = listeners[event][listener];
                delete listeners[event][listener];
                if (Object.keys(listeners[event]).length === 0) {
                  delete listeners[event];
                }
                if (Object.keys(listeners).length === 0) {
                  delete element.listeners;
                }
              }
            }
            element.removeEventListener(event, handler, options);
          });
        }
        function addListener(element, type, listener) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var _handler = listener;
          type.trim().split(REGEXP_SPACES).forEach(function(event) {
            if (options.once && !onceSupported) {
              var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
              _handler = function handler() {
                delete listeners[event][listener];
                element.removeEventListener(event, _handler, options);
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                listener.apply(element, args);
              };
              if (!listeners[event]) {
                listeners[event] = {};
              }
              if (listeners[event][listener]) {
                element.removeEventListener(event, listeners[event][listener], options);
              }
              listeners[event][listener] = _handler;
              element.listeners = listeners;
            }
            element.addEventListener(event, _handler, options);
          });
        }
        function dispatchEvent(element, type, data) {
          var event;
          if (isFunction(Event) && isFunction(CustomEvent)) {
            event = new CustomEvent(type, {
              detail: data,
              bubbles: true,
              cancelable: true
            });
          } else {
            event = document.createEvent("CustomEvent");
            event.initCustomEvent(type, true, true, data);
          }
          return element.dispatchEvent(event);
        }
        function getOffset(element) {
          var box = element.getBoundingClientRect();
          return {
            left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: box.top + (window.pageYOffset - document.documentElement.clientTop)
          };
        }
        var location = WINDOW.location;
        var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
        function isCrossOriginURL(url) {
          var parts = url.match(REGEXP_ORIGINS);
          return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
        }
        function addTimestamp(url) {
          var timestamp = "timestamp=".concat(new Date().getTime());
          return url + (url.indexOf("?") === -1 ? "?" : "&") + timestamp;
        }
        function getTransforms(_ref) {
          var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
          var values = [];
          if (isNumber(translateX) && translateX !== 0) {
            values.push("translateX(".concat(translateX, "px)"));
          }
          if (isNumber(translateY) && translateY !== 0) {
            values.push("translateY(".concat(translateY, "px)"));
          }
          if (isNumber(rotate) && rotate !== 0) {
            values.push("rotate(".concat(rotate, "deg)"));
          }
          if (isNumber(scaleX) && scaleX !== 1) {
            values.push("scaleX(".concat(scaleX, ")"));
          }
          if (isNumber(scaleY) && scaleY !== 1) {
            values.push("scaleY(".concat(scaleY, ")"));
          }
          var transform = values.length ? values.join(" ") : "none";
          return {
            WebkitTransform: transform,
            msTransform: transform,
            transform
          };
        }
        function getMaxZoomRatio(pointers) {
          var pointers2 = _objectSpread2({}, pointers);
          var maxRatio = 0;
          forEach(pointers, function(pointer, pointerId) {
            delete pointers2[pointerId];
            forEach(pointers2, function(pointer2) {
              var x1 = Math.abs(pointer.startX - pointer2.startX);
              var y1 = Math.abs(pointer.startY - pointer2.startY);
              var x2 = Math.abs(pointer.endX - pointer2.endX);
              var y2 = Math.abs(pointer.endY - pointer2.endY);
              var z1 = Math.sqrt(x1 * x1 + y1 * y1);
              var z2 = Math.sqrt(x2 * x2 + y2 * y2);
              var ratio = (z2 - z1) / z1;
              if (Math.abs(ratio) > Math.abs(maxRatio)) {
                maxRatio = ratio;
              }
            });
          });
          return maxRatio;
        }
        function getPointer(_ref2, endOnly) {
          var pageX = _ref2.pageX, pageY = _ref2.pageY;
          var end = {
            endX: pageX,
            endY: pageY
          };
          return endOnly ? end : _objectSpread2({
            startX: pageX,
            startY: pageY
          }, end);
        }
        function getPointersCenter(pointers) {
          var pageX = 0;
          var pageY = 0;
          var count = 0;
          forEach(pointers, function(_ref3) {
            var startX = _ref3.startX, startY = _ref3.startY;
            pageX += startX;
            pageY += startY;
            count += 1;
          });
          pageX /= count;
          pageY /= count;
          return {
            pageX,
            pageY
          };
        }
        function getAdjustedSizes(_ref4) {
          var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
          var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain";
          var isValidWidth = isPositiveNumber(width);
          var isValidHeight = isPositiveNumber(height);
          if (isValidWidth && isValidHeight) {
            var adjustedWidth = height * aspectRatio;
            if (type === "contain" && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
              height = width / aspectRatio;
            } else {
              width = height * aspectRatio;
            }
          } else if (isValidWidth) {
            height = width / aspectRatio;
          } else if (isValidHeight) {
            width = height * aspectRatio;
          }
          return {
            width,
            height
          };
        }
        function getRotatedSizes(_ref5) {
          var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
          degree = Math.abs(degree) % 180;
          if (degree === 90) {
            return {
              width: height,
              height: width
            };
          }
          var arc = degree % 90 * Math.PI / 180;
          var sinArc = Math.sin(arc);
          var cosArc = Math.cos(arc);
          var newWidth = width * cosArc + height * sinArc;
          var newHeight = width * sinArc + height * cosArc;
          return degree > 90 ? {
            width: newHeight,
            height: newWidth
          } : {
            width: newWidth,
            height: newHeight
          };
        }
        function getSourceCanvas(image, _ref6, _ref7, _ref8) {
          var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
          var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
          var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? "transparent" : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? "low" : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          var maxSizes = getAdjustedSizes({
            aspectRatio,
            width: maxWidth,
            height: maxHeight
          });
          var minSizes = getAdjustedSizes({
            aspectRatio,
            width: minWidth,
            height: minHeight
          }, "cover");
          var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
          var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
          var destMaxSizes = getAdjustedSizes({
            aspectRatio: imageAspectRatio,
            width: maxWidth,
            height: maxHeight
          });
          var destMinSizes = getAdjustedSizes({
            aspectRatio: imageAspectRatio,
            width: minWidth,
            height: minHeight
          }, "cover");
          var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
          var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
          var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
          canvas.width = normalizeDecimalNumber(width);
          canvas.height = normalizeDecimalNumber(height);
          context.fillStyle = fillColor;
          context.fillRect(0, 0, width, height);
          context.save();
          context.translate(width / 2, height / 2);
          context.rotate(rotate * Math.PI / 180);
          context.scale(scaleX, scaleY);
          context.imageSmoothingEnabled = imageSmoothingEnabled;
          context.imageSmoothingQuality = imageSmoothingQuality;
          context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function(param) {
            return Math.floor(normalizeDecimalNumber(param));
          }))));
          context.restore();
          return canvas;
        }
        var fromCharCode = String.fromCharCode;
        function getStringFromCharCode(dataView, start, length) {
          var str = "";
          length += start;
          for (var i = start; i < length; i += 1) {
            str += fromCharCode(dataView.getUint8(i));
          }
          return str;
        }
        var REGEXP_DATA_URL_HEAD = /^data:.*,/;
        function dataURLToArrayBuffer(dataURL) {
          var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, "");
          var binary = atob(base64);
          var arrayBuffer = new ArrayBuffer(binary.length);
          var uint8 = new Uint8Array(arrayBuffer);
          forEach(uint8, function(value, i) {
            uint8[i] = binary.charCodeAt(i);
          });
          return arrayBuffer;
        }
        function arrayBufferToDataURL(arrayBuffer, mimeType) {
          var chunks = [];
          var chunkSize = 8192;
          var uint8 = new Uint8Array(arrayBuffer);
          while (uint8.length > 0) {
            chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
            uint8 = uint8.subarray(chunkSize);
          }
          return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
        }
        function resetAndGetOrientation(arrayBuffer) {
          var dataView = new DataView(arrayBuffer);
          var orientation;
          try {
            var littleEndian;
            var app1Start;
            var ifdStart;
            if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
              var length = dataView.byteLength;
              var offset = 2;
              while (offset + 1 < length) {
                if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
                  app1Start = offset;
                  break;
                }
                offset += 1;
              }
            }
            if (app1Start) {
              var exifIDCode = app1Start + 4;
              var tiffOffset = app1Start + 10;
              if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
                var endianness = dataView.getUint16(tiffOffset);
                littleEndian = endianness === 18761;
                if (littleEndian || endianness === 19789) {
                  if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
                    var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                    if (firstIFDOffset >= 8) {
                      ifdStart = tiffOffset + firstIFDOffset;
                    }
                  }
                }
              }
            }
            if (ifdStart) {
              var _length = dataView.getUint16(ifdStart, littleEndian);
              var _offset;
              var i;
              for (i = 0; i < _length; i += 1) {
                _offset = ifdStart + i * 12 + 2;
                if (dataView.getUint16(_offset, littleEndian) === 274) {
                  _offset += 8;
                  orientation = dataView.getUint16(_offset, littleEndian);
                  dataView.setUint16(_offset, 1, littleEndian);
                  break;
                }
              }
            }
          } catch (error) {
            orientation = 1;
          }
          return orientation;
        }
        function parseOrientation(orientation) {
          var rotate = 0;
          var scaleX = 1;
          var scaleY = 1;
          switch (orientation) {
            case 2:
              scaleX = -1;
              break;
            case 3:
              rotate = -180;
              break;
            case 4:
              scaleY = -1;
              break;
            case 5:
              rotate = 90;
              scaleY = -1;
              break;
            case 6:
              rotate = 90;
              break;
            case 7:
              rotate = 90;
              scaleX = -1;
              break;
            case 8:
              rotate = -90;
              break;
          }
          return {
            rotate,
            scaleX,
            scaleY
          };
        }
        var render = {
          render: function render2() {
            this.initContainer();
            this.initCanvas();
            this.initCropBox();
            this.renderCanvas();
            if (this.cropped) {
              this.renderCropBox();
            }
          },
          initContainer: function initContainer() {
            var element = this.element, options = this.options, container = this.container, cropper = this.cropper;
            var minWidth = Number(options.minContainerWidth);
            var minHeight = Number(options.minContainerHeight);
            addClass(cropper, CLASS_HIDDEN);
            removeClass(element, CLASS_HIDDEN);
            var containerData = {
              width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
              height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
            };
            this.containerData = containerData;
            setStyle(cropper, {
              width: containerData.width,
              height: containerData.height
            });
            addClass(element, CLASS_HIDDEN);
            removeClass(cropper, CLASS_HIDDEN);
          },
          initCanvas: function initCanvas() {
            var containerData = this.containerData, imageData = this.imageData;
            var viewMode = this.options.viewMode;
            var rotated = Math.abs(imageData.rotate) % 180 === 90;
            var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
            var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
            var aspectRatio = naturalWidth / naturalHeight;
            var canvasWidth = containerData.width;
            var canvasHeight = containerData.height;
            if (containerData.height * aspectRatio > containerData.width) {
              if (viewMode === 3) {
                canvasWidth = containerData.height * aspectRatio;
              } else {
                canvasHeight = containerData.width / aspectRatio;
              }
            } else if (viewMode === 3) {
              canvasHeight = containerData.width / aspectRatio;
            } else {
              canvasWidth = containerData.height * aspectRatio;
            }
            var canvasData = {
              aspectRatio,
              naturalWidth,
              naturalHeight,
              width: canvasWidth,
              height: canvasHeight
            };
            this.canvasData = canvasData;
            this.limited = viewMode === 1 || viewMode === 2;
            this.limitCanvas(true, true);
            canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
            canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
            canvasData.left = (containerData.width - canvasData.width) / 2;
            canvasData.top = (containerData.height - canvasData.height) / 2;
            canvasData.oldLeft = canvasData.left;
            canvasData.oldTop = canvasData.top;
            this.initialCanvasData = assign({}, canvasData);
          },
          limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
            var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var viewMode = options.viewMode;
            var aspectRatio = canvasData.aspectRatio;
            var cropped = this.cropped && cropBoxData;
            if (sizeLimited) {
              var minCanvasWidth = Number(options.minCanvasWidth) || 0;
              var minCanvasHeight = Number(options.minCanvasHeight) || 0;
              if (viewMode > 1) {
                minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
                minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
                if (viewMode === 3) {
                  if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                    minCanvasWidth = minCanvasHeight * aspectRatio;
                  } else {
                    minCanvasHeight = minCanvasWidth / aspectRatio;
                  }
                }
              } else if (viewMode > 0) {
                if (minCanvasWidth) {
                  minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
                } else if (minCanvasHeight) {
                  minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
                } else if (cropped) {
                  minCanvasWidth = cropBoxData.width;
                  minCanvasHeight = cropBoxData.height;
                  if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                    minCanvasWidth = minCanvasHeight * aspectRatio;
                  } else {
                    minCanvasHeight = minCanvasWidth / aspectRatio;
                  }
                }
              }
              var _getAdjustedSizes = getAdjustedSizes({
                aspectRatio,
                width: minCanvasWidth,
                height: minCanvasHeight
              });
              minCanvasWidth = _getAdjustedSizes.width;
              minCanvasHeight = _getAdjustedSizes.height;
              canvasData.minWidth = minCanvasWidth;
              canvasData.minHeight = minCanvasHeight;
              canvasData.maxWidth = Infinity;
              canvasData.maxHeight = Infinity;
            }
            if (positionLimited) {
              if (viewMode > (cropped ? 0 : 1)) {
                var newCanvasLeft = containerData.width - canvasData.width;
                var newCanvasTop = containerData.height - canvasData.height;
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
                canvasData.maxTop = Math.max(0, newCanvasTop);
                if (cropped && this.limited) {
                  canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                  canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                  canvasData.maxLeft = cropBoxData.left;
                  canvasData.maxTop = cropBoxData.top;
                  if (viewMode === 2) {
                    if (canvasData.width >= containerData.width) {
                      canvasData.minLeft = Math.min(0, newCanvasLeft);
                      canvasData.maxLeft = Math.max(0, newCanvasLeft);
                    }
                    if (canvasData.height >= containerData.height) {
                      canvasData.minTop = Math.min(0, newCanvasTop);
                      canvasData.maxTop = Math.max(0, newCanvasTop);
                    }
                  }
                }
              } else {
                canvasData.minLeft = -canvasData.width;
                canvasData.minTop = -canvasData.height;
                canvasData.maxLeft = containerData.width;
                canvasData.maxTop = containerData.height;
              }
            }
          },
          renderCanvas: function renderCanvas(changed, transformed) {
            var canvasData = this.canvasData, imageData = this.imageData;
            if (transformed) {
              var _getRotatedSizes = getRotatedSizes({
                width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
                height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
                degree: imageData.rotate || 0
              }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
              var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
              var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
              canvasData.left -= (width - canvasData.width) / 2;
              canvasData.top -= (height - canvasData.height) / 2;
              canvasData.width = width;
              canvasData.height = height;
              canvasData.aspectRatio = naturalWidth / naturalHeight;
              canvasData.naturalWidth = naturalWidth;
              canvasData.naturalHeight = naturalHeight;
              this.limitCanvas(true, false);
            }
            if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
              canvasData.left = canvasData.oldLeft;
            }
            if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
              canvasData.top = canvasData.oldTop;
            }
            canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
            canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
            this.limitCanvas(false, true);
            canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
            canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
            canvasData.oldLeft = canvasData.left;
            canvasData.oldTop = canvasData.top;
            setStyle(this.canvas, assign({
              width: canvasData.width,
              height: canvasData.height
            }, getTransforms({
              translateX: canvasData.left,
              translateY: canvasData.top
            })));
            this.renderImage(changed);
            if (this.cropped && this.limited) {
              this.limitCropBox(true, true);
            }
          },
          renderImage: function renderImage(changed) {
            var canvasData = this.canvasData, imageData = this.imageData;
            var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
            var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
            assign(imageData, {
              width,
              height,
              left: (canvasData.width - width) / 2,
              top: (canvasData.height - height) / 2
            });
            setStyle(this.image, assign({
              width: imageData.width,
              height: imageData.height
            }, getTransforms(assign({
              translateX: imageData.left,
              translateY: imageData.top
            }, imageData))));
            if (changed) {
              this.output();
            }
          },
          initCropBox: function initCropBox() {
            var options = this.options, canvasData = this.canvasData;
            var aspectRatio = options.aspectRatio || options.initialAspectRatio;
            var autoCropArea = Number(options.autoCropArea) || 0.8;
            var cropBoxData = {
              width: canvasData.width,
              height: canvasData.height
            };
            if (aspectRatio) {
              if (canvasData.height * aspectRatio > canvasData.width) {
                cropBoxData.height = cropBoxData.width / aspectRatio;
              } else {
                cropBoxData.width = cropBoxData.height * aspectRatio;
              }
            }
            this.cropBoxData = cropBoxData;
            this.limitCropBox(true, true);
            cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
            cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
            cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
            cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
            cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
            cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
            cropBoxData.oldLeft = cropBoxData.left;
            cropBoxData.oldTop = cropBoxData.top;
            this.initialCropBoxData = assign({}, cropBoxData);
          },
          limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
            var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
            var aspectRatio = options.aspectRatio;
            if (sizeLimited) {
              var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
              var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
              var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
              var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
              minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
              minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
              if (aspectRatio) {
                if (minCropBoxWidth && minCropBoxHeight) {
                  if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
                    minCropBoxHeight = minCropBoxWidth / aspectRatio;
                  } else {
                    minCropBoxWidth = minCropBoxHeight * aspectRatio;
                  }
                } else if (minCropBoxWidth) {
                  minCropBoxHeight = minCropBoxWidth / aspectRatio;
                } else if (minCropBoxHeight) {
                  minCropBoxWidth = minCropBoxHeight * aspectRatio;
                }
                if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
                  maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
                } else {
                  maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
                }
              }
              cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
              cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
              cropBoxData.maxWidth = maxCropBoxWidth;
              cropBoxData.maxHeight = maxCropBoxHeight;
            }
            if (positionLimited) {
              if (limited) {
                cropBoxData.minLeft = Math.max(0, canvasData.left);
                cropBoxData.minTop = Math.max(0, canvasData.top);
                cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
                cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
              } else {
                cropBoxData.minLeft = 0;
                cropBoxData.minTop = 0;
                cropBoxData.maxLeft = containerData.width - cropBoxData.width;
                cropBoxData.maxTop = containerData.height - cropBoxData.height;
              }
            }
          },
          renderCropBox: function renderCropBox() {
            var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
            if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
              cropBoxData.left = cropBoxData.oldLeft;
            }
            if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
              cropBoxData.top = cropBoxData.oldTop;
            }
            cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
            cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
            this.limitCropBox(false, true);
            cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
            cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
            cropBoxData.oldLeft = cropBoxData.left;
            cropBoxData.oldTop = cropBoxData.top;
            if (options.movable && options.cropBoxMovable) {
              setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
            }
            setStyle(this.cropBox, assign({
              width: cropBoxData.width,
              height: cropBoxData.height
            }, getTransforms({
              translateX: cropBoxData.left,
              translateY: cropBoxData.top
            })));
            if (this.cropped && this.limited) {
              this.limitCanvas(true, true);
            }
            if (!this.disabled) {
              this.output();
            }
          },
          output: function output() {
            this.preview();
            dispatchEvent(this.element, EVENT_CROP, this.getData());
          }
        };
        var preview = {
          initPreview: function initPreview() {
            var element = this.element, crossOrigin = this.crossOrigin;
            var preview2 = this.options.preview;
            var url = crossOrigin ? this.crossOriginUrl : this.url;
            var alt = element.alt || "The image to preview";
            var image = document.createElement("img");
            if (crossOrigin) {
              image.crossOrigin = crossOrigin;
            }
            image.src = url;
            image.alt = alt;
            this.viewBox.appendChild(image);
            this.viewBoxImage = image;
            if (!preview2) {
              return;
            }
            var previews = preview2;
            if (typeof preview2 === "string") {
              previews = element.ownerDocument.querySelectorAll(preview2);
            } else if (preview2.querySelector) {
              previews = [preview2];
            }
            this.previews = previews;
            forEach(previews, function(el) {
              var img = document.createElement("img");
              setData(el, DATA_PREVIEW, {
                width: el.offsetWidth,
                height: el.offsetHeight,
                html: el.innerHTML
              });
              if (crossOrigin) {
                img.crossOrigin = crossOrigin;
              }
              img.src = url;
              img.alt = alt;
              img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
              el.innerHTML = "";
              el.appendChild(img);
            });
          },
          resetPreview: function resetPreview() {
            forEach(this.previews, function(element) {
              var data = getData(element, DATA_PREVIEW);
              setStyle(element, {
                width: data.width,
                height: data.height
              });
              element.innerHTML = data.html;
              removeData(element, DATA_PREVIEW);
            });
          },
          preview: function preview2() {
            var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
            var width = imageData.width, height = imageData.height;
            var left = cropBoxData.left - canvasData.left - imageData.left;
            var top = cropBoxData.top - canvasData.top - imageData.top;
            if (!this.cropped || this.disabled) {
              return;
            }
            setStyle(this.viewBoxImage, assign({
              width,
              height
            }, getTransforms(assign({
              translateX: -left,
              translateY: -top
            }, imageData))));
            forEach(this.previews, function(element) {
              var data = getData(element, DATA_PREVIEW);
              var originalWidth = data.width;
              var originalHeight = data.height;
              var newWidth = originalWidth;
              var newHeight = originalHeight;
              var ratio = 1;
              if (cropBoxWidth) {
                ratio = originalWidth / cropBoxWidth;
                newHeight = cropBoxHeight * ratio;
              }
              if (cropBoxHeight && newHeight > originalHeight) {
                ratio = originalHeight / cropBoxHeight;
                newWidth = cropBoxWidth * ratio;
                newHeight = originalHeight;
              }
              setStyle(element, {
                width: newWidth,
                height: newHeight
              });
              setStyle(element.getElementsByTagName("img")[0], assign({
                width: width * ratio,
                height: height * ratio
              }, getTransforms(assign({
                translateX: -left * ratio,
                translateY: -top * ratio
              }, imageData))));
            });
          }
        };
        var events = {
          bind: function bind() {
            var element = this.element, options = this.options, cropper = this.cropper;
            if (isFunction(options.cropstart)) {
              addListener(element, EVENT_CROP_START, options.cropstart);
            }
            if (isFunction(options.cropmove)) {
              addListener(element, EVENT_CROP_MOVE, options.cropmove);
            }
            if (isFunction(options.cropend)) {
              addListener(element, EVENT_CROP_END, options.cropend);
            }
            if (isFunction(options.crop)) {
              addListener(element, EVENT_CROP, options.crop);
            }
            if (isFunction(options.zoom)) {
              addListener(element, EVENT_ZOOM, options.zoom);
            }
            addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
            if (options.zoomable && options.zoomOnWheel) {
              addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
                passive: false,
                capture: true
              });
            }
            if (options.toggleDragModeOnDblclick) {
              addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
            }
            addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
            addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
            if (options.responsive) {
              addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
            }
          },
          unbind: function unbind() {
            var element = this.element, options = this.options, cropper = this.cropper;
            if (isFunction(options.cropstart)) {
              removeListener(element, EVENT_CROP_START, options.cropstart);
            }
            if (isFunction(options.cropmove)) {
              removeListener(element, EVENT_CROP_MOVE, options.cropmove);
            }
            if (isFunction(options.cropend)) {
              removeListener(element, EVENT_CROP_END, options.cropend);
            }
            if (isFunction(options.crop)) {
              removeListener(element, EVENT_CROP, options.crop);
            }
            if (isFunction(options.zoom)) {
              removeListener(element, EVENT_ZOOM, options.zoom);
            }
            removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
            if (options.zoomable && options.zoomOnWheel) {
              removeListener(cropper, EVENT_WHEEL, this.onWheel, {
                passive: false,
                capture: true
              });
            }
            if (options.toggleDragModeOnDblclick) {
              removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
            }
            removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
            removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
            if (options.responsive) {
              removeListener(window, EVENT_RESIZE, this.onResize);
            }
          }
        };
        var handlers = {
          resize: function resize() {
            if (this.disabled) {
              return;
            }
            var options = this.options, container = this.container, containerData = this.containerData;
            var ratioX = container.offsetWidth / containerData.width;
            var ratioY = container.offsetHeight / containerData.height;
            var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
            if (ratio !== 1) {
              var canvasData;
              var cropBoxData;
              if (options.restore) {
                canvasData = this.getCanvasData();
                cropBoxData = this.getCropBoxData();
              }
              this.render();
              if (options.restore) {
                this.setCanvasData(forEach(canvasData, function(n, i) {
                  canvasData[i] = n * ratio;
                }));
                this.setCropBoxData(forEach(cropBoxData, function(n, i) {
                  cropBoxData[i] = n * ratio;
                }));
              }
            }
          },
          dblclick: function dblclick() {
            if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
              return;
            }
            this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
          },
          wheel: function wheel(event) {
            var _this = this;
            var ratio = Number(this.options.wheelZoomRatio) || 0.1;
            var delta = 1;
            if (this.disabled) {
              return;
            }
            event.preventDefault();
            if (this.wheeling) {
              return;
            }
            this.wheeling = true;
            setTimeout(function() {
              _this.wheeling = false;
            }, 50);
            if (event.deltaY) {
              delta = event.deltaY > 0 ? 1 : -1;
            } else if (event.wheelDelta) {
              delta = -event.wheelDelta / 120;
            } else if (event.detail) {
              delta = event.detail > 0 ? 1 : -1;
            }
            this.zoom(-delta * ratio, event);
          },
          cropStart: function cropStart(event) {
            var buttons = event.buttons, button = event.button;
            if (this.disabled || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
              return;
            }
            var options = this.options, pointers = this.pointers;
            var action;
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                pointers[touch.identifier] = getPointer(touch);
              });
            } else {
              pointers[event.pointerId || 0] = getPointer(event);
            }
            if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
              action = ACTION_ZOOM;
            } else {
              action = getData(event.target, DATA_ACTION);
            }
            if (!REGEXP_ACTIONS.test(action)) {
              return;
            }
            if (dispatchEvent(this.element, EVENT_CROP_START, {
              originalEvent: event,
              action
            }) === false) {
              return;
            }
            event.preventDefault();
            this.action = action;
            this.cropping = false;
            if (action === ACTION_CROP) {
              this.cropping = true;
              addClass(this.dragBox, CLASS_MODAL);
            }
          },
          cropMove: function cropMove(event) {
            var action = this.action;
            if (this.disabled || !action) {
              return;
            }
            var pointers = this.pointers;
            event.preventDefault();
            if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
              originalEvent: event,
              action
            }) === false) {
              return;
            }
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                assign(pointers[touch.identifier] || {}, getPointer(touch, true));
              });
            } else {
              assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
            }
            this.change(event);
          },
          cropEnd: function cropEnd(event) {
            if (this.disabled) {
              return;
            }
            var action = this.action, pointers = this.pointers;
            if (event.changedTouches) {
              forEach(event.changedTouches, function(touch) {
                delete pointers[touch.identifier];
              });
            } else {
              delete pointers[event.pointerId || 0];
            }
            if (!action) {
              return;
            }
            event.preventDefault();
            if (!Object.keys(pointers).length) {
              this.action = "";
            }
            if (this.cropping) {
              this.cropping = false;
              toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
            }
            dispatchEvent(this.element, EVENT_CROP_END, {
              originalEvent: event,
              action
            });
          }
        };
        var change = {
          change: function change2(event) {
            var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
            var action = this.action;
            var aspectRatio = options.aspectRatio;
            var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
            var right = left + width;
            var bottom = top + height;
            var minLeft = 0;
            var minTop = 0;
            var maxWidth = containerData.width;
            var maxHeight = containerData.height;
            var renderable = true;
            var offset;
            if (!aspectRatio && event.shiftKey) {
              aspectRatio = width && height ? width / height : 1;
            }
            if (this.limited) {
              minLeft = cropBoxData.minLeft;
              minTop = cropBoxData.minTop;
              maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
              maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
            }
            var pointer = pointers[Object.keys(pointers)[0]];
            var range = {
              x: pointer.endX - pointer.startX,
              y: pointer.endY - pointer.startY
            };
            var check = function check2(side) {
              switch (side) {
                case ACTION_EAST:
                  if (right + range.x > maxWidth) {
                    range.x = maxWidth - right;
                  }
                  break;
                case ACTION_WEST:
                  if (left + range.x < minLeft) {
                    range.x = minLeft - left;
                  }
                  break;
                case ACTION_NORTH:
                  if (top + range.y < minTop) {
                    range.y = minTop - top;
                  }
                  break;
                case ACTION_SOUTH:
                  if (bottom + range.y > maxHeight) {
                    range.y = maxHeight - bottom;
                  }
                  break;
              }
            };
            switch (action) {
              case ACTION_ALL:
                left += range.x;
                top += range.y;
                break;
              case ACTION_EAST:
                if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                  renderable = false;
                  break;
                }
                check(ACTION_EAST);
                width += range.x;
                if (width < 0) {
                  action = ACTION_WEST;
                  width = -width;
                  left -= width;
                }
                if (aspectRatio) {
                  height = width / aspectRatio;
                  top += (cropBoxData.height - height) / 2;
                }
                break;
              case ACTION_NORTH:
                if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                  renderable = false;
                  break;
                }
                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                if (height < 0) {
                  action = ACTION_SOUTH;
                  height = -height;
                  top -= height;
                }
                if (aspectRatio) {
                  width = height * aspectRatio;
                  left += (cropBoxData.width - width) / 2;
                }
                break;
              case ACTION_WEST:
                if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                  renderable = false;
                  break;
                }
                check(ACTION_WEST);
                width -= range.x;
                left += range.x;
                if (width < 0) {
                  action = ACTION_EAST;
                  width = -width;
                  left -= width;
                }
                if (aspectRatio) {
                  height = width / aspectRatio;
                  top += (cropBoxData.height - height) / 2;
                }
                break;
              case ACTION_SOUTH:
                if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                  renderable = false;
                  break;
                }
                check(ACTION_SOUTH);
                height += range.y;
                if (height < 0) {
                  action = ACTION_NORTH;
                  height = -height;
                  top -= height;
                }
                if (aspectRatio) {
                  width = height * aspectRatio;
                  left += (cropBoxData.width - width) / 2;
                }
                break;
              case ACTION_NORTH_EAST:
                if (aspectRatio) {
                  if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                    renderable = false;
                    break;
                  }
                  check(ACTION_NORTH);
                  height -= range.y;
                  top += range.y;
                  width = height * aspectRatio;
                } else {
                  check(ACTION_NORTH);
                  check(ACTION_EAST);
                  if (range.x >= 0) {
                    if (right < maxWidth) {
                      width += range.x;
                    } else if (range.y <= 0 && top <= minTop) {
                      renderable = false;
                    }
                  } else {
                    width += range.x;
                  }
                  if (range.y <= 0) {
                    if (top > minTop) {
                      height -= range.y;
                      top += range.y;
                    }
                  } else {
                    height -= range.y;
                    top += range.y;
                  }
                }
                if (width < 0 && height < 0) {
                  action = ACTION_SOUTH_WEST;
                  height = -height;
                  width = -width;
                  top -= height;
                  left -= width;
                } else if (width < 0) {
                  action = ACTION_NORTH_WEST;
                  width = -width;
                  left -= width;
                } else if (height < 0) {
                  action = ACTION_SOUTH_EAST;
                  height = -height;
                  top -= height;
                }
                break;
              case ACTION_NORTH_WEST:
                if (aspectRatio) {
                  if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                    renderable = false;
                    break;
                  }
                  check(ACTION_NORTH);
                  height -= range.y;
                  top += range.y;
                  width = height * aspectRatio;
                  left += cropBoxData.width - width;
                } else {
                  check(ACTION_NORTH);
                  check(ACTION_WEST);
                  if (range.x <= 0) {
                    if (left > minLeft) {
                      width -= range.x;
                      left += range.x;
                    } else if (range.y <= 0 && top <= minTop) {
                      renderable = false;
                    }
                  } else {
                    width -= range.x;
                    left += range.x;
                  }
                  if (range.y <= 0) {
                    if (top > minTop) {
                      height -= range.y;
                      top += range.y;
                    }
                  } else {
                    height -= range.y;
                    top += range.y;
                  }
                }
                if (width < 0 && height < 0) {
                  action = ACTION_SOUTH_EAST;
                  height = -height;
                  width = -width;
                  top -= height;
                  left -= width;
                } else if (width < 0) {
                  action = ACTION_NORTH_EAST;
                  width = -width;
                  left -= width;
                } else if (height < 0) {
                  action = ACTION_SOUTH_WEST;
                  height = -height;
                  top -= height;
                }
                break;
              case ACTION_SOUTH_WEST:
                if (aspectRatio) {
                  if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                    renderable = false;
                    break;
                  }
                  check(ACTION_WEST);
                  width -= range.x;
                  left += range.x;
                  height = width / aspectRatio;
                } else {
                  check(ACTION_SOUTH);
                  check(ACTION_WEST);
                  if (range.x <= 0) {
                    if (left > minLeft) {
                      width -= range.x;
                      left += range.x;
                    } else if (range.y >= 0 && bottom >= maxHeight) {
                      renderable = false;
                    }
                  } else {
                    width -= range.x;
                    left += range.x;
                  }
                  if (range.y >= 0) {
                    if (bottom < maxHeight) {
                      height += range.y;
                    }
                  } else {
                    height += range.y;
                  }
                }
                if (width < 0 && height < 0) {
                  action = ACTION_NORTH_EAST;
                  height = -height;
                  width = -width;
                  top -= height;
                  left -= width;
                } else if (width < 0) {
                  action = ACTION_SOUTH_EAST;
                  width = -width;
                  left -= width;
                } else if (height < 0) {
                  action = ACTION_NORTH_WEST;
                  height = -height;
                  top -= height;
                }
                break;
              case ACTION_SOUTH_EAST:
                if (aspectRatio) {
                  if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                    renderable = false;
                    break;
                  }
                  check(ACTION_EAST);
                  width += range.x;
                  height = width / aspectRatio;
                } else {
                  check(ACTION_SOUTH);
                  check(ACTION_EAST);
                  if (range.x >= 0) {
                    if (right < maxWidth) {
                      width += range.x;
                    } else if (range.y >= 0 && bottom >= maxHeight) {
                      renderable = false;
                    }
                  } else {
                    width += range.x;
                  }
                  if (range.y >= 0) {
                    if (bottom < maxHeight) {
                      height += range.y;
                    }
                  } else {
                    height += range.y;
                  }
                }
                if (width < 0 && height < 0) {
                  action = ACTION_NORTH_WEST;
                  height = -height;
                  width = -width;
                  top -= height;
                  left -= width;
                } else if (width < 0) {
                  action = ACTION_SOUTH_WEST;
                  width = -width;
                  left -= width;
                } else if (height < 0) {
                  action = ACTION_NORTH_EAST;
                  height = -height;
                  top -= height;
                }
                break;
              case ACTION_MOVE:
                this.move(range.x, range.y);
                renderable = false;
                break;
              case ACTION_ZOOM:
                this.zoom(getMaxZoomRatio(pointers), event);
                renderable = false;
                break;
              case ACTION_CROP:
                if (!range.x || !range.y) {
                  renderable = false;
                  break;
                }
                offset = getOffset(this.cropper);
                left = pointer.startX - offset.left;
                top = pointer.startY - offset.top;
                width = cropBoxData.minWidth;
                height = cropBoxData.minHeight;
                if (range.x > 0) {
                  action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
                } else if (range.x < 0) {
                  left -= width;
                  action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
                }
                if (range.y < 0) {
                  top -= height;
                }
                if (!this.cropped) {
                  removeClass(this.cropBox, CLASS_HIDDEN);
                  this.cropped = true;
                  if (this.limited) {
                    this.limitCropBox(true, true);
                  }
                }
                break;
            }
            if (renderable) {
              cropBoxData.width = width;
              cropBoxData.height = height;
              cropBoxData.left = left;
              cropBoxData.top = top;
              this.action = action;
              this.renderCropBox();
            }
            forEach(pointers, function(p) {
              p.startX = p.endX;
              p.startY = p.endY;
            });
          }
        };
        var methods = {
          crop: function crop() {
            if (this.ready && !this.cropped && !this.disabled) {
              this.cropped = true;
              this.limitCropBox(true, true);
              if (this.options.modal) {
                addClass(this.dragBox, CLASS_MODAL);
              }
              removeClass(this.cropBox, CLASS_HIDDEN);
              this.setCropBoxData(this.initialCropBoxData);
            }
            return this;
          },
          reset: function reset() {
            if (this.ready && !this.disabled) {
              this.imageData = assign({}, this.initialImageData);
              this.canvasData = assign({}, this.initialCanvasData);
              this.cropBoxData = assign({}, this.initialCropBoxData);
              this.renderCanvas();
              if (this.cropped) {
                this.renderCropBox();
              }
            }
            return this;
          },
          clear: function clear() {
            if (this.cropped && !this.disabled) {
              assign(this.cropBoxData, {
                left: 0,
                top: 0,
                width: 0,
                height: 0
              });
              this.cropped = false;
              this.renderCropBox();
              this.limitCanvas(true, true);
              this.renderCanvas();
              removeClass(this.dragBox, CLASS_MODAL);
              addClass(this.cropBox, CLASS_HIDDEN);
            }
            return this;
          },
          replace: function replace(url) {
            var hasSameSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            if (!this.disabled && url) {
              if (this.isImg) {
                this.element.src = url;
              }
              if (hasSameSize) {
                this.url = url;
                this.image.src = url;
                if (this.ready) {
                  this.viewBoxImage.src = url;
                  forEach(this.previews, function(element) {
                    element.getElementsByTagName("img")[0].src = url;
                  });
                }
              } else {
                if (this.isImg) {
                  this.replaced = true;
                }
                this.options.data = null;
                this.uncreate();
                this.load(url);
              }
            }
            return this;
          },
          enable: function enable() {
            if (this.ready && this.disabled) {
              this.disabled = false;
              removeClass(this.cropper, CLASS_DISABLED);
            }
            return this;
          },
          disable: function disable() {
            if (this.ready && !this.disabled) {
              this.disabled = true;
              addClass(this.cropper, CLASS_DISABLED);
            }
            return this;
          },
          destroy: function destroy() {
            var element = this.element;
            if (!element[NAMESPACE]) {
              return this;
            }
            element[NAMESPACE] = void 0;
            if (this.isImg && this.replaced) {
              element.src = this.originalUrl;
            }
            this.uncreate();
            return this;
          },
          move: function move(offsetX) {
            var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : offsetX;
            var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
            return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
          },
          moveTo: function moveTo(x) {
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
            var canvasData = this.canvasData;
            var changed = false;
            x = Number(x);
            y = Number(y);
            if (this.ready && !this.disabled && this.options.movable) {
              if (isNumber(x)) {
                canvasData.left = x;
                changed = true;
              }
              if (isNumber(y)) {
                canvasData.top = y;
                changed = true;
              }
              if (changed) {
                this.renderCanvas(true);
              }
            }
            return this;
          },
          zoom: function zoom(ratio, _originalEvent) {
            var canvasData = this.canvasData;
            ratio = Number(ratio);
            if (ratio < 0) {
              ratio = 1 / (1 - ratio);
            } else {
              ratio = 1 + ratio;
            }
            return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
          },
          zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
            var options = this.options, canvasData = this.canvasData;
            var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
            ratio = Number(ratio);
            if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
              var newWidth = naturalWidth * ratio;
              var newHeight = naturalHeight * ratio;
              if (dispatchEvent(this.element, EVENT_ZOOM, {
                ratio,
                oldRatio: width / naturalWidth,
                originalEvent: _originalEvent
              }) === false) {
                return this;
              }
              if (_originalEvent) {
                var pointers = this.pointers;
                var offset = getOffset(this.cropper);
                var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                  pageX: _originalEvent.pageX,
                  pageY: _originalEvent.pageY
                };
                canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
                canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
              } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
                canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
                canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
              } else {
                canvasData.left -= (newWidth - width) / 2;
                canvasData.top -= (newHeight - height) / 2;
              }
              canvasData.width = newWidth;
              canvasData.height = newHeight;
              this.renderCanvas(true);
            }
            return this;
          },
          rotate: function rotate(degree) {
            return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
          },
          rotateTo: function rotateTo(degree) {
            degree = Number(degree);
            if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
              this.imageData.rotate = degree % 360;
              this.renderCanvas(true, true);
            }
            return this;
          },
          scaleX: function scaleX(_scaleX) {
            var scaleY = this.imageData.scaleY;
            return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
          },
          scaleY: function scaleY(_scaleY) {
            var scaleX = this.imageData.scaleX;
            return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
          },
          scale: function scale(scaleX) {
            var scaleY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX;
            var imageData = this.imageData;
            var transformed = false;
            scaleX = Number(scaleX);
            scaleY = Number(scaleY);
            if (this.ready && !this.disabled && this.options.scalable) {
              if (isNumber(scaleX)) {
                imageData.scaleX = scaleX;
                transformed = true;
              }
              if (isNumber(scaleY)) {
                imageData.scaleY = scaleY;
                transformed = true;
              }
              if (transformed) {
                this.renderCanvas(true, true);
              }
            }
            return this;
          },
          getData: function getData2() {
            var rounded = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
            var data;
            if (this.ready && this.cropped) {
              data = {
                x: cropBoxData.left - canvasData.left,
                y: cropBoxData.top - canvasData.top,
                width: cropBoxData.width,
                height: cropBoxData.height
              };
              var ratio = imageData.width / imageData.naturalWidth;
              forEach(data, function(n, i) {
                data[i] = n / ratio;
              });
              if (rounded) {
                var bottom = Math.round(data.y + data.height);
                var right = Math.round(data.x + data.width);
                data.x = Math.round(data.x);
                data.y = Math.round(data.y);
                data.width = right - data.x;
                data.height = bottom - data.y;
              }
            } else {
              data = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              };
            }
            if (options.rotatable) {
              data.rotate = imageData.rotate || 0;
            }
            if (options.scalable) {
              data.scaleX = imageData.scaleX || 1;
              data.scaleY = imageData.scaleY || 1;
            }
            return data;
          },
          setData: function setData2(data) {
            var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
            var cropBoxData = {};
            if (this.ready && !this.disabled && isPlainObject(data)) {
              var transformed = false;
              if (options.rotatable) {
                if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                  imageData.rotate = data.rotate;
                  transformed = true;
                }
              }
              if (options.scalable) {
                if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                  imageData.scaleX = data.scaleX;
                  transformed = true;
                }
                if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                  imageData.scaleY = data.scaleY;
                  transformed = true;
                }
              }
              if (transformed) {
                this.renderCanvas(true, true);
              }
              var ratio = imageData.width / imageData.naturalWidth;
              if (isNumber(data.x)) {
                cropBoxData.left = data.x * ratio + canvasData.left;
              }
              if (isNumber(data.y)) {
                cropBoxData.top = data.y * ratio + canvasData.top;
              }
              if (isNumber(data.width)) {
                cropBoxData.width = data.width * ratio;
              }
              if (isNumber(data.height)) {
                cropBoxData.height = data.height * ratio;
              }
              this.setCropBoxData(cropBoxData);
            }
            return this;
          },
          getContainerData: function getContainerData() {
            return this.ready ? assign({}, this.containerData) : {};
          },
          getImageData: function getImageData() {
            return this.sized ? assign({}, this.imageData) : {};
          },
          getCanvasData: function getCanvasData() {
            var canvasData = this.canvasData;
            var data = {};
            if (this.ready) {
              forEach(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
                data[n] = canvasData[n];
              });
            }
            return data;
          },
          setCanvasData: function setCanvasData(data) {
            var canvasData = this.canvasData;
            var aspectRatio = canvasData.aspectRatio;
            if (this.ready && !this.disabled && isPlainObject(data)) {
              if (isNumber(data.left)) {
                canvasData.left = data.left;
              }
              if (isNumber(data.top)) {
                canvasData.top = data.top;
              }
              if (isNumber(data.width)) {
                canvasData.width = data.width;
                canvasData.height = data.width / aspectRatio;
              } else if (isNumber(data.height)) {
                canvasData.height = data.height;
                canvasData.width = data.height * aspectRatio;
              }
              this.renderCanvas(true);
            }
            return this;
          },
          getCropBoxData: function getCropBoxData() {
            var cropBoxData = this.cropBoxData;
            var data;
            if (this.ready && this.cropped) {
              data = {
                left: cropBoxData.left,
                top: cropBoxData.top,
                width: cropBoxData.width,
                height: cropBoxData.height
              };
            }
            return data || {};
          },
          setCropBoxData: function setCropBoxData(data) {
            var cropBoxData = this.cropBoxData;
            var aspectRatio = this.options.aspectRatio;
            var widthChanged;
            var heightChanged;
            if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
              if (isNumber(data.left)) {
                cropBoxData.left = data.left;
              }
              if (isNumber(data.top)) {
                cropBoxData.top = data.top;
              }
              if (isNumber(data.width) && data.width !== cropBoxData.width) {
                widthChanged = true;
                cropBoxData.width = data.width;
              }
              if (isNumber(data.height) && data.height !== cropBoxData.height) {
                heightChanged = true;
                cropBoxData.height = data.height;
              }
              if (aspectRatio) {
                if (widthChanged) {
                  cropBoxData.height = cropBoxData.width / aspectRatio;
                } else if (heightChanged) {
                  cropBoxData.width = cropBoxData.height * aspectRatio;
                }
              }
              this.renderCropBox();
            }
            return this;
          },
          getCroppedCanvas: function getCroppedCanvas() {
            var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!this.ready || !window.HTMLCanvasElement) {
              return null;
            }
            var canvasData = this.canvasData;
            var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
            if (!this.cropped) {
              return source;
            }
            var _this$getData = this.getData(), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
            var ratio = source.width / Math.floor(canvasData.naturalWidth);
            if (ratio !== 1) {
              initialX *= ratio;
              initialY *= ratio;
              initialWidth *= ratio;
              initialHeight *= ratio;
            }
            var aspectRatio = initialWidth / initialHeight;
            var maxSizes = getAdjustedSizes({
              aspectRatio,
              width: options.maxWidth || Infinity,
              height: options.maxHeight || Infinity
            });
            var minSizes = getAdjustedSizes({
              aspectRatio,
              width: options.minWidth || 0,
              height: options.minHeight || 0
            }, "cover");
            var _getAdjustedSizes = getAdjustedSizes({
              aspectRatio,
              width: options.width || (ratio !== 1 ? source.width : initialWidth),
              height: options.height || (ratio !== 1 ? source.height : initialHeight)
            }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
            width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
            height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            canvas.width = normalizeDecimalNumber(width);
            canvas.height = normalizeDecimalNumber(height);
            context.fillStyle = options.fillColor || "transparent";
            context.fillRect(0, 0, width, height);
            var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
            context.imageSmoothingEnabled = imageSmoothingEnabled;
            if (imageSmoothingQuality) {
              context.imageSmoothingQuality = imageSmoothingQuality;
            }
            var sourceWidth = source.width;
            var sourceHeight = source.height;
            var srcX = initialX;
            var srcY = initialY;
            var srcWidth;
            var srcHeight;
            var dstX;
            var dstY;
            var dstWidth;
            var dstHeight;
            if (srcX <= -initialWidth || srcX > sourceWidth) {
              srcX = 0;
              srcWidth = 0;
              dstX = 0;
              dstWidth = 0;
            } else if (srcX <= 0) {
              dstX = -srcX;
              srcX = 0;
              srcWidth = Math.min(sourceWidth, initialWidth + srcX);
              dstWidth = srcWidth;
            } else if (srcX <= sourceWidth) {
              dstX = 0;
              srcWidth = Math.min(initialWidth, sourceWidth - srcX);
              dstWidth = srcWidth;
            }
            if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
              srcY = 0;
              srcHeight = 0;
              dstY = 0;
              dstHeight = 0;
            } else if (srcY <= 0) {
              dstY = -srcY;
              srcY = 0;
              srcHeight = Math.min(sourceHeight, initialHeight + srcY);
              dstHeight = srcHeight;
            } else if (srcY <= sourceHeight) {
              dstY = 0;
              srcHeight = Math.min(initialHeight, sourceHeight - srcY);
              dstHeight = srcHeight;
            }
            var params = [srcX, srcY, srcWidth, srcHeight];
            if (dstWidth > 0 && dstHeight > 0) {
              var scale = width / initialWidth;
              params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
            }
            context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function(param) {
              return Math.floor(normalizeDecimalNumber(param));
            }))));
            return canvas;
          },
          setAspectRatio: function setAspectRatio(aspectRatio) {
            var options = this.options;
            if (!this.disabled && !isUndefined(aspectRatio)) {
              options.aspectRatio = Math.max(0, aspectRatio) || NaN;
              if (this.ready) {
                this.initCropBox();
                if (this.cropped) {
                  this.renderCropBox();
                }
              }
            }
            return this;
          },
          setDragMode: function setDragMode(mode) {
            var options = this.options, dragBox = this.dragBox, face = this.face;
            if (this.ready && !this.disabled) {
              var croppable = mode === DRAG_MODE_CROP;
              var movable = options.movable && mode === DRAG_MODE_MOVE;
              mode = croppable || movable ? mode : DRAG_MODE_NONE;
              options.dragMode = mode;
              setData(dragBox, DATA_ACTION, mode);
              toggleClass(dragBox, CLASS_CROP, croppable);
              toggleClass(dragBox, CLASS_MOVE, movable);
              if (!options.cropBoxMovable) {
                setData(face, DATA_ACTION, mode);
                toggleClass(face, CLASS_CROP, croppable);
                toggleClass(face, CLASS_MOVE, movable);
              }
            }
            return this;
          }
        };
        var AnotherCropper = WINDOW.Cropper;
        var Cropper2 = /* @__PURE__ */ function() {
          function Cropper3(element) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            _classCallCheck(this, Cropper3);
            if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
              throw new Error("The first argument is required and must be an <img> or <canvas> element.");
            }
            this.element = element;
            this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
            this.cropped = false;
            this.disabled = false;
            this.pointers = {};
            this.ready = false;
            this.reloading = false;
            this.replaced = false;
            this.sized = false;
            this.sizing = false;
            this.init();
          }
          _createClass(Cropper3, [{
            key: "init",
            value: function init() {
              var element = this.element;
              var tagName = element.tagName.toLowerCase();
              var url;
              if (element[NAMESPACE]) {
                return;
              }
              element[NAMESPACE] = this;
              if (tagName === "img") {
                this.isImg = true;
                url = element.getAttribute("src") || "";
                this.originalUrl = url;
                if (!url) {
                  return;
                }
                url = element.src;
              } else if (tagName === "canvas" && window.HTMLCanvasElement) {
                url = element.toDataURL();
              }
              this.load(url);
            }
          }, {
            key: "load",
            value: function load(url) {
              var _this = this;
              if (!url) {
                return;
              }
              this.url = url;
              this.imageData = {};
              var element = this.element, options = this.options;
              if (!options.rotatable && !options.scalable) {
                options.checkOrientation = false;
              }
              if (!options.checkOrientation || !window.ArrayBuffer) {
                this.clone();
                return;
              }
              if (REGEXP_DATA_URL.test(url)) {
                if (REGEXP_DATA_URL_JPEG.test(url)) {
                  this.read(dataURLToArrayBuffer(url));
                } else {
                  this.clone();
                }
                return;
              }
              var xhr = new XMLHttpRequest();
              var clone = this.clone.bind(this);
              this.reloading = true;
              this.xhr = xhr;
              xhr.onabort = clone;
              xhr.onerror = clone;
              xhr.ontimeout = clone;
              xhr.onprogress = function() {
                if (xhr.getResponseHeader("content-type") !== MIME_TYPE_JPEG) {
                  xhr.abort();
                }
              };
              xhr.onload = function() {
                _this.read(xhr.response);
              };
              xhr.onloadend = function() {
                _this.reloading = false;
                _this.xhr = null;
              };
              if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
                url = addTimestamp(url);
              }
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.withCredentials = element.crossOrigin === "use-credentials";
              xhr.send();
            }
          }, {
            key: "read",
            value: function read(arrayBuffer) {
              var options = this.options, imageData = this.imageData;
              var orientation = resetAndGetOrientation(arrayBuffer);
              var rotate = 0;
              var scaleX = 1;
              var scaleY = 1;
              if (orientation > 1) {
                this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
                var _parseOrientation = parseOrientation(orientation);
                rotate = _parseOrientation.rotate;
                scaleX = _parseOrientation.scaleX;
                scaleY = _parseOrientation.scaleY;
              }
              if (options.rotatable) {
                imageData.rotate = rotate;
              }
              if (options.scalable) {
                imageData.scaleX = scaleX;
                imageData.scaleY = scaleY;
              }
              this.clone();
            }
          }, {
            key: "clone",
            value: function clone() {
              var element = this.element, url = this.url;
              var crossOrigin = element.crossOrigin;
              var crossOriginUrl = url;
              if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
                if (!crossOrigin) {
                  crossOrigin = "anonymous";
                }
                crossOriginUrl = addTimestamp(url);
              }
              this.crossOrigin = crossOrigin;
              this.crossOriginUrl = crossOriginUrl;
              var image = document.createElement("img");
              if (crossOrigin) {
                image.crossOrigin = crossOrigin;
              }
              image.src = crossOriginUrl || url;
              image.alt = element.alt || "The image to crop";
              this.image = image;
              image.onload = this.start.bind(this);
              image.onerror = this.stop.bind(this);
              addClass(image, CLASS_HIDE);
              element.parentNode.insertBefore(image, element.nextSibling);
            }
          }, {
            key: "start",
            value: function start() {
              var _this2 = this;
              var image = this.image;
              image.onload = null;
              image.onerror = null;
              this.sizing = true;
              var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
              var done = function done2(naturalWidth, naturalHeight) {
                assign(_this2.imageData, {
                  naturalWidth,
                  naturalHeight,
                  aspectRatio: naturalWidth / naturalHeight
                });
                _this2.initialImageData = assign({}, _this2.imageData);
                _this2.sizing = false;
                _this2.sized = true;
                _this2.build();
              };
              if (image.naturalWidth && !isIOSWebKit) {
                done(image.naturalWidth, image.naturalHeight);
                return;
              }
              var sizingImage = document.createElement("img");
              var body = document.body || document.documentElement;
              this.sizingImage = sizingImage;
              sizingImage.onload = function() {
                done(sizingImage.width, sizingImage.height);
                if (!isIOSWebKit) {
                  body.removeChild(sizingImage);
                }
              };
              sizingImage.src = image.src;
              if (!isIOSWebKit) {
                sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
                body.appendChild(sizingImage);
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var image = this.image;
              image.onload = null;
              image.onerror = null;
              image.parentNode.removeChild(image);
              this.image = null;
            }
          }, {
            key: "build",
            value: function build() {
              if (!this.sized || this.ready) {
                return;
              }
              var element = this.element, options = this.options, image = this.image;
              var container = element.parentNode;
              var template = document.createElement("div");
              template.innerHTML = TEMPLATE;
              var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
              var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
              var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
              var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
              var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
              this.container = container;
              this.cropper = cropper;
              this.canvas = canvas;
              this.dragBox = dragBox;
              this.cropBox = cropBox;
              this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
              this.face = face;
              canvas.appendChild(image);
              addClass(element, CLASS_HIDDEN);
              container.insertBefore(cropper, element.nextSibling);
              if (!this.isImg) {
                removeClass(image, CLASS_HIDE);
              }
              this.initPreview();
              this.bind();
              options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
              options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
              options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
              addClass(cropBox, CLASS_HIDDEN);
              if (!options.guides) {
                addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
              }
              if (!options.center) {
                addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
              }
              if (options.background) {
                addClass(cropper, "".concat(NAMESPACE, "-bg"));
              }
              if (!options.highlight) {
                addClass(face, CLASS_INVISIBLE);
              }
              if (options.cropBoxMovable) {
                addClass(face, CLASS_MOVE);
                setData(face, DATA_ACTION, ACTION_ALL);
              }
              if (!options.cropBoxResizable) {
                addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
                addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
              }
              this.render();
              this.ready = true;
              this.setDragMode(options.dragMode);
              if (options.autoCrop) {
                this.crop();
              }
              this.setData(options.data);
              if (isFunction(options.ready)) {
                addListener(element, EVENT_READY, options.ready, {
                  once: true
                });
              }
              dispatchEvent(element, EVENT_READY);
            }
          }, {
            key: "unbuild",
            value: function unbuild() {
              if (!this.ready) {
                return;
              }
              this.ready = false;
              this.unbind();
              this.resetPreview();
              this.cropper.parentNode.removeChild(this.cropper);
              removeClass(this.element, CLASS_HIDDEN);
            }
          }, {
            key: "uncreate",
            value: function uncreate() {
              if (this.ready) {
                this.unbuild();
                this.ready = false;
                this.cropped = false;
              } else if (this.sizing) {
                this.sizingImage.onload = null;
                this.sizing = false;
                this.sized = false;
              } else if (this.reloading) {
                this.xhr.onabort = null;
                this.xhr.abort();
              } else if (this.image) {
                this.stop();
              }
            }
          }], [{
            key: "noConflict",
            value: function noConflict() {
              window.Cropper = AnotherCropper;
              return Cropper3;
            }
          }, {
            key: "setDefaults",
            value: function setDefaults(options) {
              assign(DEFAULTS, isPlainObject(options) && options);
            }
          }]);
          return Cropper3;
        }();
        assign(Cropper2.prototype, render, preview, events, handlers, change, methods);
        return Cropper2;
      });
    }
  });

  // ../chdnext/chdnext/public/js/chdnext/file_uploader/ProgressRing.vue
  var __vue_script__ = {
    name: "ProgressRing",
    props: {
      primary: String,
      secondary: String,
      radius: Number,
      progress: Number,
      stroke: Number
    },
    data() {
      const normalizedRadius = this.radius - this.stroke * 2;
      const circumference = normalizedRadius * 2 * Math.PI;
      return {
        normalizedRadius,
        circumference
      };
    },
    computed: {
      strokeDashoffset() {
        return this.circumference - this.progress / 100 * this.circumference;
      }
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("svg", {attrs: {height: _vm.radius * 2, width: _vm.radius * 2}}, [
      _c("circle", {
        style: {
          stroke: _vm.secondary,
          strokeDashoffset: 0
        },
        attrs: {
          "stroke-dasharray": _vm.circumference + " " + _vm.circumference,
          "stroke-width": _vm.stroke,
          fill: "transparent",
          r: _vm.normalizedRadius,
          cx: _vm.radius,
          cy: _vm.radius
        }
      }),
      _vm._v(" "),
      _c("circle", {
        style: {
          stroke: _vm.primary,
          strokeDashoffset: _vm.strokeDashoffset
        },
        attrs: {
          "stroke-dasharray": _vm.circumference + " " + _vm.circumference,
          "stroke-width": _vm.stroke,
          fill: "transparent",
          r: _vm.normalizedRadius,
          cx: _vm.radius,
          cy: _vm.radius
        }
      }),
      _vm._v(" "),
      _c("text", {
        style: {
          color: "var(--text-color)",
          fontSize: "var(--text-xs)",
          fontWeight: "var(--text-bold)"
        },
        attrs: {
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          x: _vm.radius,
          y: _vm.radius
        }
      }, [_vm._v("\n		" + _vm._s(_vm.progress) + "%\n	")])
    ]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-05e56655_0", {source: "\ncircle[data-v-05e56655] {\n	transition: stroke-dashoffset 0.35s;\n	transform: rotate(-90deg);\n	transform-origin: 50% 50%;\n}\n", map: {"version": 3, "sources": ["../chdnext/chdnext/public/js/chdnext/file_uploader/ProgressRing.vue"], "names": [], "mappings": ";AAsEA;CACA,mCAAA;CACA,yBAAA;CACA,yBAAA;AACA", "file": "ProgressRing.vue", "sourcesContent": [`<template>
	<svg :height="radius * 2" :width="radius * 2">
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: secondary,
				strokeDashoffset: 0
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: primary,
				strokeDashoffset: strokeDashoffset
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<text
			dominant-baseline="middle"
			text-anchor="middle"
			:x="radius"
			:y="radius"
			:style="{
				color: 'var(--text-color)',
				fontSize: 'var(--text-xs)',
				fontWeight: 'var(--text-bold)'
			}"
		>
			{{ progress }}%
		</text>
	</svg>
</template>
<script>
export default {
	name: "ProgressRing",
	props: {
		primary: String,
		secondary: String,
		radius: Number,
		progress: Number,
		stroke: Number
	},
	data() {
		const normalizedRadius = this.radius - this.stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;

		return {
			normalizedRadius,
			circumference
		};
	},
	computed: {
		strokeDashoffset() {
			return (
				this.circumference - (this.progress / 100) * this.circumference
			);
		}
	}
};
</script>
<style scoped>
circle {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-05e56655";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<svg :height="radius * 2" :width="radius * 2">
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: secondary,
				strokeDashoffset: 0
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: primary,
				strokeDashoffset: strokeDashoffset
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<text
			dominant-baseline="middle"
			text-anchor="middle"
			:x="radius"
			:y="radius"
			:style="{
				color: 'var(--text-color)',
				fontSize: 'var(--text-xs)',
				fontWeight: 'var(--text-bold)'
			}"
		>
			{{ progress }}%
		</text>
	</svg>
</template>
<script>
export default {
	name: "ProgressRing",
	props: {
		primary: String,
		secondary: String,
		radius: Number,
		progress: Number,
		stroke: Number
	},
	data() {
		const normalizedRadius = this.radius - this.stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;

		return {
			normalizedRadius,
			circumference
		};
	},
	computed: {
		strokeDashoffset() {
			return (
				this.circumference - (this.progress / 100) * this.circumference
			);
		}
	}
};
</script>
<style scoped>
circle {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__() {
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__ = /* @__PURE__ */ __vue_normalize__({render: __vue_render__, staticRenderFns: __vue_staticRenderFns__}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, void 0, void 0);
  var ProgressRing_default = __vue_component__;

  // ../chdnext/chdnext/public/js/chdnext/file_uploader/FilePreview.vue
  var __vue_script__2 = {
    name: "FilePreview",
    props: ["file"],
    components: {
      ProgressRing: ProgressRing_default
    },
    data() {
      return {
        src: null,
        optimize: this.file.optimize
      };
    },
    mounted() {
      if (this.is_image) {
        if (window.FileReader) {
          let fr = new FileReader();
          fr.onload = () => this.src = fr.result;
          fr.readAsDataURL(this.file.file_obj);
        }
      }
    },
    filters: {
      file_size(value) {
        return frappe.form.formatters.FileSize(value);
      },
      file_name(value) {
        return value;
      }
    },
    computed: {
      private_icon() {
        return frappe.utils.icon(this.is_private ? "lock" : "unlock");
      },
      is_private() {
        return this.file.doc ? this.file.doc.is_private : this.file.private;
      },
      uploaded() {
        return this.file.request_succeeded;
      },
      is_image() {
        return this.file.file_obj.type.startsWith("image");
      },
      is_optimizable() {
        let is_svg = this.file.file_obj.type == "image/svg+xml";
        return this.is_image && !is_svg && !this.uploaded && !this.file.failed;
      },
      is_cropable() {
        let croppable_types = ["image/jpeg", "image/png"];
        return !this.uploaded && !this.file.uploading && !this.file.failed && croppable_types.includes(this.file.file_obj.type);
      },
      progress() {
        let value = Math.round(this.file.progress * 100 / this.file.total);
        if (isNaN(value)) {
          value = 0;
        }
        return value;
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "file-preview"}, [
      _c("div", {staticClass: "file-icon"}, [
        _vm.is_image ? _c("img", {attrs: {src: _vm.src, alt: _vm.file.name}}) : _c("div", {
          staticClass: "fallback",
          domProps: {innerHTML: _vm._s(_vm.frappe.utils.icon("file", "md"))}
        })
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", [
          _vm.file.doc ? _c("a", {
            staticClass: "flex",
            attrs: {href: _vm.file.doc.file_url, target: "_blank"}
          }, [
            _c("span", {staticClass: "file-name"}, [
              _vm._v(_vm._s(_vm._f("file_name")(_vm.file.name)))
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "ml-2",
              domProps: {innerHTML: _vm._s(_vm.private_icon)}
            })
          ]) : _c("span", {staticClass: "flex"}, [
            _c("span", {staticClass: "file-name"}, [
              _vm._v(_vm._s(_vm._f("file_name")(_vm.file.name)))
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "ml-2 btn-reset",
              attrs: {title: _vm.__("Toggle Public/Private")},
              on: {
                click: function($event) {
                  return _vm.$emit("toggle_private");
                }
              }
            }, [
              _c("div", {
                domProps: {innerHTML: _vm._s(_vm.private_icon)}
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", {staticClass: "file-size"}, [
            _vm._v("\n				" + _vm._s(_vm._f("file_size")(_vm.file.file_obj.size)) + "\n			")
          ])
        ]),
        _vm._v(" "),
        _vm.is_optimizable ? _c("label", {staticClass: "optimize-checkbox"}, [
          _c("input", {
            attrs: {type: "checkbox"},
            domProps: {checked: _vm.optimize},
            on: {
              change: function($event) {
                return _vm.$emit("toggle_optimize");
              }
            }
          }),
          _vm._v("Optimize")
        ]) : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _vm.file.error_message ? _c("span", {staticClass: "file-error text-danger"}, [
            _vm._v("\n				" + _vm._s(_vm.file.error_message) + "\n			")
          ]) : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", {staticClass: "file-actions"}, [
        _c("ProgressRing", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.file.uploading && !_vm.uploaded && !_vm.file.failed,
              expression: "file.uploading && !uploaded && !file.failed"
            }
          ],
          attrs: {
            primary: "var(--primary-color)",
            secondary: "var(--gray-200)",
            radius: 24,
            progress: _vm.progress,
            stroke: 3
          }
        }),
        _vm._v(" "),
        _vm.uploaded ? _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.frappe.utils.icon("solid-success", "lg"))
          }
        }) : _vm._e(),
        _vm._v(" "),
        _vm.file.failed ? _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.frappe.utils.icon("solid-error", "lg"))
          }
        }) : _vm._e(),
        _vm._v(" "),
        _c("div", {staticClass: "file-action-buttons"}, [
          _vm.is_cropable ? _c("button", {
            staticClass: "btn btn-crop muted",
            domProps: {
              innerHTML: _vm._s(_vm.frappe.utils.icon("crop", "md"))
            },
            on: {
              click: function($event) {
                return _vm.$emit("toggle_image_cropper");
              }
            }
          }) : _vm._e(),
          _vm._v(" "),
          !_vm.uploaded && !_vm.file.uploading && !_vm.file.failed ? _c("button", {
            staticClass: "btn muted",
            domProps: {
              innerHTML: _vm._s(_vm.frappe.utils.icon("delete", "md"))
            },
            on: {
              click: function($event) {
                return _vm.$emit("remove");
              }
            }
          }) : _vm._e()
        ])
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-a58c3838_0", {source: "\n.file-preview {\n	display: flex;\n	align-items: center;\n	padding: 0.75rem;\n	border: 1px solid transparent;\n}\n.file-preview + .file-preview {\n	border-top-color: var(--border-color);\n}\n.file-preview:hover {\n	background-color: var(--bg-color);\n	border-color: var(--dark-border-color);\n	border-radius: var(--border-radius);\n}\n.file-preview:hover + .file-preview {\n	border-top-color: transparent;\n}\n.file-icon {\n	border-radius: var(--border-radius);\n	width: 2.625rem;\n	height: 2.625rem;\n	overflow: hidden;\n	margin-right: var(--margin-md);\n	flex-shrink: 0;\n}\n.file-icon img {\n	width: 100%;\n	height: 100%;\n	object-fit: cover;\n}\n.file-icon .fallback {\n	width: 100%;\n	height: 100%;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	border: 1px solid var(--border-color);\n	border-radius: var(--border-radius);\n}\n.file-name {\n	font-size: var(--text-base);\n	font-weight: var(--text-bold);\n	color: var(--text-color);\n	display: -webkit-box;\n	-webkit-line-clamp: 1;\n	-webkit-box-orient: vertical;\n	overflow: hidden;\n}\n.file-size {\n	font-size: var(--text-sm);\n	color: var(--text-light);\n}\n.file-actions {\n	width: 3rem;\n	flex-shrink: 0;\n	margin-left: auto;\n	text-align: center;\n}\n.file-actions .btn {\n	padding: var(--padding-xs);\n	box-shadow: none;\n}\n.file-action-buttons {\n	display: flex;\n	justify-content: flex-end;\n}\n.muted {\n	opacity: 0.5;\n	transition: 0.3s;\n}\n.muted:hover {\n	opacity: 1;\n}\n.optimize-checkbox {\n	font-size: var(--text-sm);\n	color: var(--text-light);\n	display: flex;\n	align-items: center;\n	padding-top: 0.25rem;\n}\n.file-error {\n	font-size: var(--text-sm);\n	font-weight: var(--text-bold);\n}\n", map: {"version": 3, "sources": ["../chdnext/chdnext/public/js/chdnext/file_uploader/FilePreview.vue"], "names": [], "mappings": ";AAyHA;CACA,aAAA;CACA,mBAAA;CACA,gBAAA;CACA,6BAAA;AACA;AAEA;CACA,qCAAA;AACA;AAEA;CACA,iCAAA;CACA,sCAAA;CACA,mCAAA;AACA;AAEA;CACA,6BAAA;AACA;AAEA;CACA,mCAAA;CACA,eAAA;CACA,gBAAA;CACA,gBAAA;CACA,8BAAA;CACA,cAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,iBAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,qCAAA;CACA,mCAAA;AACA;AAEA;CACA,2BAAA;CACA,6BAAA;CACA,wBAAA;CACA,oBAAA;CACA,qBAAA;CACA,4BAAA;CACA,gBAAA;AACA;AAEA;CACA,yBAAA;CACA,wBAAA;AACA;AAEA;CACA,WAAA;CACA,cAAA;CACA,iBAAA;CACA,kBAAA;AACA;AAEA;CACA,0BAAA;CACA,gBAAA;AACA;AAEA;CACA,aAAA;CACA,yBAAA;AACA;AAEA;CACA,YAAA;CACA,gBAAA;AACA;AAEA;CACA,UAAA;AACA;AAEA;CACA,yBAAA;CACA,wBAAA;CACA,aAAA;CACA,mBAAA;CACA,oBAAA;AACA;AAEA;CACA,yBAAA;CACA,6BAAA;AACA", "file": "FilePreview.vue", "sourcesContent": [`<template>
	<div class="file-preview">
		<div class="file-icon">
			<img
				v-if="is_image"
				:src="src"
				:alt="file.name"
			>
			<div class="fallback" v-else v-html="frappe.utils.icon('file', 'md')">
			</div>
		</div>
		<div>
			<div>
				<a class="flex" :href="file.doc.file_url" v-if="file.doc" target="_blank">
					<span class="file-name">{{ file.name | file_name }}</span>
					<div class="ml-2" v-html="private_icon"></div>
				</a>
				<span class="flex" v-else>
					<span class="file-name">{{ file.name | file_name }}</span>
					<button class="ml-2 btn-reset" @click="$emit('toggle_private')" :title="__('Toggle Public/Private')">
						<div v-html="private_icon"></div>
					</button>
				</span>
			</div>

			<div>
				<span class="file-size">
					{{ file.file_obj.size | file_size }}
				</span>
			</div>
			<label v-if="is_optimizable" class="optimize-checkbox"><input type="checkbox" :checked="optimize" @change="$emit('toggle_optimize')">Optimize</label>
			<div>
				<span v-if="file.error_message" class="file-error text-danger">
					{{ file.error_message }}
				</span>
			</div>
		</div>
		<div class="file-actions">
			<ProgressRing
				v-show="file.uploading && !uploaded && !file.failed"
				primary="var(--primary-color)"
				secondary="var(--gray-200)"
				:radius="24"
				:progress="progress"
				:stroke="3"
			/>
			<div v-if="uploaded" v-html="frappe.utils.icon('solid-success', 'lg')"></div>
			<div v-if="file.failed" v-html="frappe.utils.icon('solid-error', 'lg')"></div>
			<div class="file-action-buttons">
				<button v-if="is_cropable" class="btn btn-crop muted" @click="$emit('toggle_image_cropper')" v-html="frappe.utils.icon('crop', 'md')"></button>
				<button v-if="!uploaded && !file.uploading && !file.failed" class="btn muted" @click="$emit('remove')" v-html="frappe.utils.icon('delete', 'md')"></button>
			</div>
		</div>
	</div>
</template>

<script>
import ProgressRing from './ProgressRing.vue';
export default {
	name: 'FilePreview',
	props: ['file'],
	components: {
		ProgressRing
	},
	data() {
		return {
			src: null,
			optimize: this.file.optimize
		}
	},
	mounted() {
		if (this.is_image) {
			if (window.FileReader) {
				let fr = new FileReader();
				fr.onload = () => this.src = fr.result;
				fr.readAsDataURL(this.file.file_obj);
			}
		}
	},
	filters: {
		file_size(value) {
			return frappe.form.formatters.FileSize(value);
		},
		file_name(value) {
			return value;
			// return frappe.utils.file_name_ellipsis(value, 9);
		}
	},
	computed: {
		private_icon() {
			return frappe.utils.icon(this.is_private ? 'lock' : 'unlock');
		},
		is_private() {
			return this.file.doc ? this.file.doc.is_private : this.file.private;
		},
		uploaded() {
			return this.file.request_succeeded;
		},
		is_image() {
			return this.file.file_obj.type.startsWith('image');
		},
		is_optimizable() {
			let is_svg = this.file.file_obj.type == 'image/svg+xml';
			return this.is_image && !is_svg && !this.uploaded && !this.file.failed;
		},
		is_cropable() {
			let croppable_types = ['image/jpeg', 'image/png'];
			return !this.uploaded && !this.file.uploading && !this.file.failed && croppable_types.includes(this.file.file_obj.type);
		},
		progress() {
			let value = Math.round((this.file.progress * 100) / this.file.total);
			if (isNaN(value)) {
				value = 0;
			}
			return value;
		}
	}
}
</script>

<style>
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}

.file-preview + .file-preview {
	border-top-color: var(--border-color);
}

.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}

.file-preview:hover + .file-preview {
	border-top-color: transparent;
}

.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}

.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}

.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}

.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}

.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
}

.file-action-buttons {
	display: flex;
	justify-content: flex-end;
}

.muted {
	opacity: 0.5;
	transition: 0.3s;
}

.muted:hover {
	opacity: 1;
}

.optimize-checkbox {
	font-size: var(--text-sm);
	color: var(--text-light);
	display: flex;
	align-items: center;
	padding-top: 0.25rem;
}

.file-error {
	font-size: var(--text-sm);
	font-weight: var(--text-bold);
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__2 = void 0;
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="file-preview">
		<div class="file-icon">
			<img
				v-if="is_image"
				:src="src"
				:alt="file.name"
			>
			<div class="fallback" v-else v-html="frappe.utils.icon('file', 'md')">
			</div>
		</div>
		<div>
			<div>
				<a class="flex" :href="file.doc.file_url" v-if="file.doc" target="_blank">
					<span class="file-name">{{ file.name | file_name }}</span>
					<div class="ml-2" v-html="private_icon"></div>
				</a>
				<span class="flex" v-else>
					<span class="file-name">{{ file.name | file_name }}</span>
					<button class="ml-2 btn-reset" @click="$emit('toggle_private')" :title="__('Toggle Public/Private')">
						<div v-html="private_icon"></div>
					</button>
				</span>
			</div>

			<div>
				<span class="file-size">
					{{ file.file_obj.size | file_size }}
				</span>
			</div>
			<label v-if="is_optimizable" class="optimize-checkbox"><input type="checkbox" :checked="optimize" @change="$emit('toggle_optimize')">Optimize</label>
			<div>
				<span v-if="file.error_message" class="file-error text-danger">
					{{ file.error_message }}
				</span>
			</div>
		</div>
		<div class="file-actions">
			<ProgressRing
				v-show="file.uploading && !uploaded && !file.failed"
				primary="var(--primary-color)"
				secondary="var(--gray-200)"
				:radius="24"
				:progress="progress"
				:stroke="3"
			/>
			<div v-if="uploaded" v-html="frappe.utils.icon('solid-success', 'lg')"></div>
			<div v-if="file.failed" v-html="frappe.utils.icon('solid-error', 'lg')"></div>
			<div class="file-action-buttons">
				<button v-if="is_cropable" class="btn btn-crop muted" @click="$emit('toggle_image_cropper')" v-html="frappe.utils.icon('crop', 'md')"></button>
				<button v-if="!uploaded && !file.uploading && !file.failed" class="btn muted" @click="$emit('remove')" v-html="frappe.utils.icon('delete', 'md')"></button>
			</div>
		</div>
	</div>
</template>

<script>
import ProgressRing from './ProgressRing.vue';
export default {
	name: 'FilePreview',
	props: ['file'],
	components: {
		ProgressRing
	},
	data() {
		return {
			src: null,
			optimize: this.file.optimize
		}
	},
	mounted() {
		if (this.is_image) {
			if (window.FileReader) {
				let fr = new FileReader();
				fr.onload = () => this.src = fr.result;
				fr.readAsDataURL(this.file.file_obj);
			}
		}
	},
	filters: {
		file_size(value) {
			return frappe.form.formatters.FileSize(value);
		},
		file_name(value) {
			return value;
			// return frappe.utils.file_name_ellipsis(value, 9);
		}
	},
	computed: {
		private_icon() {
			return frappe.utils.icon(this.is_private ? 'lock' : 'unlock');
		},
		is_private() {
			return this.file.doc ? this.file.doc.is_private : this.file.private;
		},
		uploaded() {
			return this.file.request_succeeded;
		},
		is_image() {
			return this.file.file_obj.type.startsWith('image');
		},
		is_optimizable() {
			let is_svg = this.file.file_obj.type == 'image/svg+xml';
			return this.is_image && !is_svg && !this.uploaded && !this.file.failed;
		},
		is_cropable() {
			let croppable_types = ['image/jpeg', 'image/png'];
			return !this.uploaded && !this.file.uploading && !this.file.failed && croppable_types.includes(this.file.file_obj.type);
		},
		progress() {
			let value = Math.round((this.file.progress * 100) / this.file.total);
			if (isNaN(value)) {
				value = 0;
			}
			return value;
		}
	}
}
</script>

<style>
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}

.file-preview + .file-preview {
	border-top-color: var(--border-color);
}

.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}

.file-preview:hover + .file-preview {
	border-top-color: transparent;
}

.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}

.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}

.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}

.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}

.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
}

.file-action-buttons {
	display: flex;
	justify-content: flex-end;
}

.muted {
	opacity: 0.5;
	transition: 0.3s;
}

.muted:hover {
	opacity: 1;
}

.optimize-checkbox {
	font-size: var(--text-sm);
	color: var(--text-light);
	display: flex;
	align-items: center;
	padding-top: 0.25rem;
}

.file-error {
	font-size: var(--text-sm);
	font-weight: var(--text-bold);
}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__2() {
    const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2}, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, __vue_create_injector__2, void 0, void 0);
  var FilePreview_default = __vue_component__2;

  // ../chdnext/chdnext/public/js/chdnext/file_uploader/TreeNode.vue
  var __vue_script__3 = {
    name: "TreeNode",
    props: ["node", "selected_node"],
    components: {
      TreeNode: () => frappe.ui.components.TreeNode
    },
    computed: {
      icon() {
        let icons = {
          open: frappe.utils.icon("folder-open", "md"),
          closed: frappe.utils.icon("folder-normal", "md"),
          leaf: frappe.utils.icon("primitive-dot", "xs"),
          search: frappe.utils.icon("search")
        };
        if (this.node.by_search)
          return icons.search;
        if (this.node.is_leaf)
          return icons.leaf;
        if (this.node.open)
          return icons.open;
        return icons.closed;
      }
    }
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "tree-node", class: {opened: _vm.node.open}}, [
      _c("span", {
        staticClass: "tree-link",
        class: {active: _vm.node.value === _vm.selected_node.value},
        attrs: {disabled: _vm.node.fetching},
        on: {
          click: function($event) {
            return _vm.$emit("node-click", _vm.node);
          }
        }
      }, [
        _c("div", {domProps: {innerHTML: _vm._s(_vm.icon)}}),
        _vm._v(" "),
        _c("a", {staticClass: "tree-label"}, [
          _vm._v(_vm._s(_vm.node.label))
        ])
      ]),
      _vm._v(" "),
      _c("ul", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.node.open,
            expression: "node.open"
          }
        ],
        staticClass: "tree-children"
      }, [
        _vm._l(_vm.node.children, function(n) {
          return _c("TreeNode", {
            key: n.value,
            attrs: {node: n, selected_node: _vm.selected_node},
            on: {
              "node-click": function(n2) {
                return _vm.$emit("node-click", n2);
              },
              "load-more": function(n2) {
                return _vm.$emit("load-more", n2);
              }
            }
          });
        }),
        _vm._v(" "),
        _vm.node.has_more_children ? _c("button", {
          staticClass: "btn btn-xs btn-load-more",
          attrs: {disabled: _vm.node.children_loading},
          on: {
            click: function($event) {
              return _vm.$emit("load-more", _vm.node);
            }
          }
        }, [
          _vm._v("\n			" + _vm._s(_vm.node.children_loading ? _vm.__("Loading...") : _vm.__("Load more")) + "\n		")
        ]) : _vm._e()
      ], 2)
    ]);
  };
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-1445ac8a_0", {source: "\n.btn-load-more[data-v-1445ac8a] {\n	margin-left: 1.6rem;\n	margin-top: 0.5rem;\n}\n", map: {"version": 3, "sources": ["../chdnext/chdnext/public/js/chdnext/file_uploader/TreeNode.vue"], "names": [], "mappings": ";AAwDA;CACA,mBAAA;CACA,kBAAA;AACA", "file": "TreeNode.vue", "sourcesContent": [`<template>
	<div class="tree-node" :class="{ opened: node.open }">
		<span
			class="tree-link"
			@click="$emit('node-click', node)"
			:class="{ active: node.value === selected_node.value }"
			:disabled="node.fetching"
		>
			<div v-html="icon"></div>
			<a class="tree-label">{{ node.label }}</a>
		</span>
		<ul class="tree-children" v-show="node.open">
			<TreeNode
				v-for="n in node.children"
				:key="n.value"
				:node="n"
				:selected_node="selected_node"
				@node-click="n => $emit('node-click', n)"
				@load-more="n => $emit('load-more', n)"
			/>
			<button
				class="btn btn-xs btn-load-more"
				v-if="node.has_more_children"
				@click="$emit('load-more', node)"
				:disabled="node.children_loading"
			>
				{{ node.children_loading ? __("Loading...") : __("Load more") }}
			</button>
		</ul>
	</div>
</template>
<script>
export default {
	name: "TreeNode",
	props: ["node", "selected_node"],
	components: {
		TreeNode: () => frappe.ui.components.TreeNode
	},
	computed: {
		icon() {
			let icons = {
				open: frappe.utils.icon("folder-open", "md"),
				closed: frappe.utils.icon("folder-normal", "md"),
				leaf: frappe.utils.icon("primitive-dot", "xs"),
				search: frappe.utils.icon("search")
			};

			if (this.node.by_search) return icons.search;
			if (this.node.is_leaf) return icons.leaf;
			if (this.node.open) return icons.open;
			return icons.closed;
		}
	}
};
</script>
<style scoped>
.btn-load-more {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__3 = "data-v-1445ac8a";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="tree-node" :class="{ opened: node.open }">
		<span
			class="tree-link"
			@click="$emit('node-click', node)"
			:class="{ active: node.value === selected_node.value }"
			:disabled="node.fetching"
		>
			<div v-html="icon"></div>
			<a class="tree-label">{{ node.label }}</a>
		</span>
		<ul class="tree-children" v-show="node.open">
			<TreeNode
				v-for="n in node.children"
				:key="n.value"
				:node="n"
				:selected_node="selected_node"
				@node-click="n => $emit('node-click', n)"
				@load-more="n => $emit('load-more', n)"
			/>
			<button
				class="btn btn-xs btn-load-more"
				v-if="node.has_more_children"
				@click="$emit('load-more', node)"
				:disabled="node.children_loading"
			>
				{{ node.children_loading ? __("Loading...") : __("Load more") }}
			</button>
		</ul>
	</div>
</template>
<script>
export default {
	name: "TreeNode",
	props: ["node", "selected_node"],
	components: {
		TreeNode: () => frappe.ui.components.TreeNode
	},
	computed: {
		icon() {
			let icons = {
				open: frappe.utils.icon("folder-open", "md"),
				closed: frappe.utils.icon("folder-normal", "md"),
				leaf: frappe.utils.icon("primitive-dot", "xs"),
				search: frappe.utils.icon("search")
			};

			if (this.node.by_search) return icons.search;
			if (this.node.is_leaf) return icons.leaf;
			if (this.node.open) return icons.open;
			return icons.closed;
		}
	}
};
</script>
<style scoped>
.btn-load-more {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__3() {
    const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3({render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3}, __vue_inject_styles__3, __vue_script__3, __vue_scope_id__3, __vue_is_functional_template__3, __vue_module_identifier__3, false, __vue_create_injector__3, void 0, void 0);
  var TreeNode_default = __vue_component__3;

  // ../chdnext/chdnext/public/js/chdnext/file_uploader/FileBrowser.vue
  var __vue_script__4 = {
    name: "FileBrowser",
    components: {
      TreeNode: TreeNode_default
    },
    data() {
      return {
        node: {
          label: __("Home"),
          value: "Home",
          children: [],
          children_start: 0,
          children_loading: false,
          is_leaf: false,
          fetching: false,
          fetched: false,
          open: false,
          filtered: true
        },
        selected_node: {},
        search_text: "",
        page_length: 10
      };
    },
    mounted() {
      this.toggle_node(this.node);
    },
    methods: {
      toggle_node(node) {
        if (!node.fetched && !node.is_leaf) {
          node.fetching = true;
          node.children_start = 0;
          node.children_loading = false;
          this.get_files_in_folder(node.value, 0).then(({files, has_more}) => {
            node.open = true;
            node.children = files;
            node.fetched = true;
            node.fetching = false;
            node.children_start += this.page_length;
            node.has_more_children = has_more;
          });
        } else {
          node.open = !node.open;
          this.select_node(node);
        }
      },
      load_more(node) {
        if (node.has_more_children) {
          let start = node.children_start;
          node.children_loading = true;
          this.get_files_in_folder(node.value, start).then(({files, has_more}) => {
            node.children = node.children.concat(files);
            node.children_start += this.page_length;
            node.has_more_children = has_more;
            node.children_loading = false;
          });
        }
      },
      select_node(node) {
        if (node.is_leaf) {
          this.selected_node = node;
        }
      },
      get_files_in_folder(folder, start) {
        return frappe.call("frappe.core.doctype.file.file.get_files_in_folder", {
          folder,
          start,
          page_length: this.page_length
        }).then((r) => {
          let {files = [], has_more = false} = r.message || {};
          files.sort((a, b) => {
            if (a.is_folder && b.is_folder) {
              return a.modified < b.modified ? -1 : 1;
            }
            if (a.is_folder) {
              return -1;
            }
            if (b.is_folder) {
              return 1;
            }
            return 0;
          });
          files = files.map((file) => this.make_file_node(file));
          return {files, has_more};
        });
      },
      search_by_name: frappe.utils.debounce(function() {
        if (this.search_text === "") {
          this.node = this.folder_node;
          return;
        }
        if (this.search_text.length < 3)
          return;
        frappe.call("frappe.core.doctype.file.file.get_files_by_search_text", {
          text: this.search_text
        }).then((r) => {
          let files = r.message || [];
          files = files.map((file) => this.make_file_node(file));
          if (!this.folder_node) {
            this.folder_node = this.node;
          }
          this.node = {
            label: __("Search Results"),
            value: "",
            children: files,
            by_search: true,
            open: true,
            filtered: true
          };
        });
      }, 300),
      make_file_node(file) {
        let filename = file.file_name || file.name;
        let label = frappe.utils.file_name_ellipsis(filename, 40);
        return {
          label,
          filename,
          file_url: file.file_url,
          value: file.name,
          is_leaf: !file.is_folder,
          fetched: !file.is_folder,
          children: [],
          children_loading: false,
          children_start: 0,
          open: false,
          fetching: false,
          filtered: true
        };
      }
    }
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "file-browser"}, [
      _c("div", [
        _c("a", {
          staticClass: "text-muted text-medium",
          attrs: {href: ""},
          on: {
            click: function($event) {
              $event.preventDefault();
              return _vm.$emit("hide-browser");
            }
          }
        }, [
          _vm._v("\n			" + _vm._s(_vm.__("\u2190 Back to upload files")) + "\n		")
        ])
      ]),
      _vm._v(" "),
      _c("div", {staticClass: "file-browser-list"}, [
        _c("div", {staticClass: "file-filter"}, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search_text,
                expression: "search_text"
              }
            ],
            staticClass: "form-control input-xs",
            attrs: {
              type: "search",
              placeholder: _vm.__("Search by filename or extension")
            },
            domProps: {value: _vm.search_text},
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return;
                  }
                  _vm.search_text = $event.target.value;
                },
                _vm.search_by_name
              ]
            }
          })
        ]),
        _vm._v(" "),
        _c("TreeNode", {
          staticClass: "tree with-skeleton",
          attrs: {node: _vm.node, selected_node: _vm.selected_node},
          on: {
            "node-click": function(n) {
              return _vm.toggle_node(n);
            },
            "load-more": function(n) {
              return _vm.load_more(n);
            }
          }
        })
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-52523eee_0", {source: "\n.file-browser-list {\n	height: 300px;\n	overflow: hidden;\n	margin-top: 10px;\n}\n.file-filter {\n	padding: 3px;\n}\n.tree {\n	overflow: auto;\n	height: 100%;\n	padding-left: 0;\n	padding-right: 0;\n	padding-bottom: 4rem;\n}\n", map: {"version": 3, "sources": ["../chdnext/chdnext/public/js/chdnext/file_uploader/FileBrowser.vue"], "names": [], "mappings": ";AAkLA;CACA,aAAA;CACA,gBAAA;CACA,gBAAA;AACA;AAEA;CACA,YAAA;AACA;AAEA;CACA,cAAA;CACA,YAAA;CACA,eAAA;CACA,gBAAA;CACA,oBAAA;AACA", "file": "FileBrowser.vue", "sourcesContent": [`<template>
	<div class="file-browser">
		<div>
			<a
				href=""
				class="text-muted text-medium"
				@click.prevent="$emit('hide-browser')"
			>
				{{ __("\u2190 Back to upload files") }}
			</a>
		</div>
		<div class="file-browser-list">
			<div class="file-filter">
				<input
					type="search"
					class="form-control input-xs"
					:placeholder="__('Search by filename or extension')"
					v-model="search_text"
					@input="search_by_name"
				/>
			</div>
			<TreeNode
				class="tree with-skeleton"
				:node="node"
				:selected_node="selected_node"
				@node-click="n => toggle_node(n)"
				@load-more="n => load_more(n)"
			/>
		</div>
	</div>
</template>
<script>
import TreeNode from "./TreeNode.vue";

export default {
	name: "FileBrowser",
	components: {
		TreeNode
	},
	data() {
		return {
			node: {
				label: __("Home"),
				value: "Home",
				children: [],
				children_start: 0,
				children_loading: false,
				is_leaf: false,
				fetching: false,
				fetched: false,
				open: false,
				filtered: true
			},
			selected_node: {},
			search_text: "",
			page_length: 10
		};
	},
	mounted() {
		this.toggle_node(this.node);
	},
	methods: {
		toggle_node(node) {
			if (!node.fetched && !node.is_leaf) {
				node.fetching = true;
				node.children_start = 0;
				node.children_loading = false;
				this.get_files_in_folder(node.value, 0).then(
					({ files, has_more }) => {
						node.open = true;
						node.children = files;
						node.fetched = true;
						node.fetching = false;
						node.children_start += this.page_length;
						node.has_more_children = has_more;
					}
				);
			} else {
				node.open = !node.open;
				this.select_node(node);
			}
		},
		load_more(node) {
			if (node.has_more_children) {
				let start = node.children_start;
				node.children_loading = true;
				this.get_files_in_folder(node.value, start).then(
					({ files, has_more }) => {
						node.children = node.children.concat(files);
						node.children_start += this.page_length;
						node.has_more_children = has_more;
						node.children_loading = false;
					}
				);
			}
		},
		select_node(node) {
			if (node.is_leaf) {
				this.selected_node = node;
			}
		},
		get_files_in_folder(folder, start) {
			return frappe
				.call("frappe.core.doctype.file.file.get_files_in_folder", {
					folder,
					start,
					page_length: this.page_length
				})
				.then(r => {
					let { files = [], has_more = false } = r.message || {};
					files.sort((a, b) => {
						if (a.is_folder && b.is_folder) {
							return a.modified < b.modified ? -1 : 1;
						}
						if (a.is_folder) {
							return -1;
						}
						if (b.is_folder) {
							return 1;
						}
						return 0;
					});
					files = files.map(file => this.make_file_node(file));
					return { files, has_more };
				});
		},
		search_by_name: frappe.utils.debounce(function() {
			if (this.search_text === "") {
				this.node = this.folder_node;
				return;
			}
			if (this.search_text.length < 3) return;
			frappe
				.call(
					"frappe.core.doctype.file.file.get_files_by_search_text",
					{
						text: this.search_text
					}
				)
				.then(r => {
					let files = r.message || [];
					files = files.map(file => this.make_file_node(file));
					if (!this.folder_node) {
						this.folder_node = this.node;
					}
					this.node = {
						label: __("Search Results"),
						value: "",
						children: files,
						by_search: true,
						open: true,
						filtered: true
					};
				});
		}, 300),
		make_file_node(file) {
			let filename = file.file_name || file.name;
			let label = frappe.utils.file_name_ellipsis(filename, 40);
			return {
				label: label,
				filename: filename,
				file_url: file.file_url,
				value: file.name,
				is_leaf: !file.is_folder,
				fetched: !file.is_folder, // fetched if node is leaf
				children: [],
				children_loading: false,
				children_start: 0,
				open: false,
				fetching: false,
				filtered: true
			};
		}
	}
};
</script>

<style>
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}

.file-filter {
	padding: 3px;
}

.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__4 = void 0;
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="file-browser">
		<div>
			<a
				href=""
				class="text-muted text-medium"
				@click.prevent="$emit('hide-browser')"
			>
				{{ __("\u2190 Back to upload files") }}
			</a>
		</div>
		<div class="file-browser-list">
			<div class="file-filter">
				<input
					type="search"
					class="form-control input-xs"
					:placeholder="__('Search by filename or extension')"
					v-model="search_text"
					@input="search_by_name"
				/>
			</div>
			<TreeNode
				class="tree with-skeleton"
				:node="node"
				:selected_node="selected_node"
				@node-click="n => toggle_node(n)"
				@load-more="n => load_more(n)"
			/>
		</div>
	</div>
</template>
<script>
import TreeNode from "./TreeNode.vue";

export default {
	name: "FileBrowser",
	components: {
		TreeNode
	},
	data() {
		return {
			node: {
				label: __("Home"),
				value: "Home",
				children: [],
				children_start: 0,
				children_loading: false,
				is_leaf: false,
				fetching: false,
				fetched: false,
				open: false,
				filtered: true
			},
			selected_node: {},
			search_text: "",
			page_length: 10
		};
	},
	mounted() {
		this.toggle_node(this.node);
	},
	methods: {
		toggle_node(node) {
			if (!node.fetched && !node.is_leaf) {
				node.fetching = true;
				node.children_start = 0;
				node.children_loading = false;
				this.get_files_in_folder(node.value, 0).then(
					({ files, has_more }) => {
						node.open = true;
						node.children = files;
						node.fetched = true;
						node.fetching = false;
						node.children_start += this.page_length;
						node.has_more_children = has_more;
					}
				);
			} else {
				node.open = !node.open;
				this.select_node(node);
			}
		},
		load_more(node) {
			if (node.has_more_children) {
				let start = node.children_start;
				node.children_loading = true;
				this.get_files_in_folder(node.value, start).then(
					({ files, has_more }) => {
						node.children = node.children.concat(files);
						node.children_start += this.page_length;
						node.has_more_children = has_more;
						node.children_loading = false;
					}
				);
			}
		},
		select_node(node) {
			if (node.is_leaf) {
				this.selected_node = node;
			}
		},
		get_files_in_folder(folder, start) {
			return frappe
				.call("frappe.core.doctype.file.file.get_files_in_folder", {
					folder,
					start,
					page_length: this.page_length
				})
				.then(r => {
					let { files = [], has_more = false } = r.message || {};
					files.sort((a, b) => {
						if (a.is_folder && b.is_folder) {
							return a.modified < b.modified ? -1 : 1;
						}
						if (a.is_folder) {
							return -1;
						}
						if (b.is_folder) {
							return 1;
						}
						return 0;
					});
					files = files.map(file => this.make_file_node(file));
					return { files, has_more };
				});
		},
		search_by_name: frappe.utils.debounce(function() {
			if (this.search_text === "") {
				this.node = this.folder_node;
				return;
			}
			if (this.search_text.length < 3) return;
			frappe
				.call(
					"frappe.core.doctype.file.file.get_files_by_search_text",
					{
						text: this.search_text
					}
				)
				.then(r => {
					let files = r.message || [];
					files = files.map(file => this.make_file_node(file));
					if (!this.folder_node) {
						this.folder_node = this.node;
					}
					this.node = {
						label: __("Search Results"),
						value: "",
						children: files,
						by_search: true,
						open: true,
						filtered: true
					};
				});
		}, 300),
		make_file_node(file) {
			let filename = file.file_name || file.name;
			let label = frappe.utils.file_name_ellipsis(filename, 40);
			return {
				label: label,
				filename: filename,
				file_url: file.file_url,
				value: file.name,
				is_leaf: !file.is_folder,
				fetched: !file.is_folder, // fetched if node is leaf
				children: [],
				children_loading: false,
				children_start: 0,
				open: false,
				fetching: false,
				filtered: true
			};
		}
	}
};
</script>

<style>
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}

.file-filter {
	padding: 3px;
}

.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__4() {
    const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4({render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4}, __vue_inject_styles__4, __vue_script__4, __vue_scope_id__4, __vue_is_functional_template__4, __vue_module_identifier__4, false, __vue_create_injector__4, void 0, void 0);
  var FileBrowser_default = __vue_component__4;

  // ../chdnext/chdnext/public/js/chdnext/file_uploader/WebLink.vue
  var __vue_script__5 = {
    name: "WebLink",
    data() {
      return {
        url: ""
      };
    }
  };
  var __vue_render__5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "file-web-link margin-bottom"}, [
      _c("a", {
        staticClass: "text-muted text-medium",
        attrs: {href: ""},
        on: {
          click: function($event) {
            $event.preventDefault();
            return _vm.$emit("hide-web-link");
          }
        }
      }, [_vm._v("\n		" + _vm._s(_vm.__("\u2190 Back to upload files")) + "\n	")]),
      _vm._v(" "),
      _c("div", {staticClass: "input-group"}, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.url,
              expression: "url"
            }
          ],
          staticClass: "form-control",
          attrs: {type: "text", placeholder: _vm.__("Attach a web link")},
          domProps: {value: _vm.url},
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return;
              }
              _vm.url = $event.target.value;
            }
          }
        })
      ])
    ]);
  };
  var __vue_staticRenderFns__5 = [];
  __vue_render__5._withStripped = true;
  var __vue_inject_styles__5 = function(inject) {
    if (!inject)
      return;
    inject("data-v-b53a634e_0", {source: "\n.file-web-link .input-group {\n	margin-top: 10px;\n}\n", map: {"version": 3, "sources": ["../chdnext/chdnext/public/js/chdnext/file_uploader/WebLink.vue"], "names": [], "mappings": ";AA6BA;CACA,gBAAA;AACA", "file": "WebLink.vue", "sourcesContent": [`<template>
	<div class="file-web-link margin-bottom">
		<a href class="text-muted text-medium"
			@click.prevent="$emit('hide-web-link')"
		>
			{{ __('\u2190 Back to upload files') }}
		</a>
		<div class="input-group">
			<input
				type="text"
				class="form-control"
				:placeholder="__('Attach a web link')"
				v-model="url"
			>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WebLink',
	data() {
		return {
			url: '',
		}
	}
}
</script>

<style>
.file-web-link .input-group {
	margin-top: 10px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__5 = void 0;
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="file-web-link margin-bottom">
		<a href class="text-muted text-medium"
			@click.prevent="$emit('hide-web-link')"
		>
			{{ __('\u2190 Back to upload files') }}
		</a>
		<div class="input-group">
			<input
				type="text"
				class="form-control"
				:placeholder="__('Attach a web link')"
				v-model="url"
			>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WebLink',
	data() {
		return {
			url: '',
		}
	}
}
</script>

<style>
.file-web-link .input-group {
	margin-top: 10px;
}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__5() {
    const styles = __vue_create_injector__5.styles || (__vue_create_injector__5.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5({render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5}, __vue_inject_styles__5, __vue_script__5, __vue_scope_id__5, __vue_is_functional_template__5, __vue_module_identifier__5, false, __vue_create_injector__5, void 0, void 0);
  var WebLink_default = __vue_component__5;

  // ../chdnext/chdnext/public/js/integrations/google_drive_picker.js
  var GoogleDrivePicker = class {
    constructor({
      pickerCallback,
      enabled,
      appId,
      developerKey,
      clientId
    } = {}) {
      this.scope = ["https://www.googleapis.com/auth/drive.readonly"];
      this.pickerApiLoaded = false;
      this.enabled = enabled;
      this.appId = appId;
      this.pickerCallback = pickerCallback;
      this.developerKey = developerKey;
      this.clientId = clientId;
    }
    loadPicker() {
      $.ajax({
        method: "GET",
        url: "https://apis.google.com/js/api.js",
        dataType: "script",
        cache: true
      }).done(this.loadGapi.bind(this));
    }
    loadGapi() {
      if (!frappe.boot.user.google_drive_token) {
        gapi.load("auth", this.onAuthApiLoad.bind(this));
      }
      gapi.load("picker", this.onPickerApiLoad.bind(this));
    }
    onAuthApiLoad() {
      gapi.auth.authorize({
        "client_id": this.clientId,
        "scope": this.scope,
        "immediate": false
      }, this.handleAuthResult.bind(this));
    }
    handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
        frappe.boot.user.google_drive_token = authResult.access_token;
        this.createPicker();
      }
    }
    onPickerApiLoad() {
      this.pickerApiLoaded = true;
      this.createPicker();
    }
    createPicker() {
      if (this.pickerApiLoaded && frappe.boot.user.google_drive_token) {
        var view = new google.picker.DocsView(google.picker.ViewId.DOCS).setParent("root").setIncludeFolders(true);
        var picker = new google.picker.PickerBuilder().setAppId(this.appId).setDeveloperKey(this.developerKey).setOAuthToken(frappe.boot.user.google_drive_token).addView(view).setLocale(frappe.boot.lang).setCallback(this.pickerCallback).build();
        picker.setVisible(true);
      }
    }
  };
  var google_drive_picker_default = GoogleDrivePicker;

  // ../chdnext/chdnext/public/js/chdnext/file_uploader/ImageCropper.vue
  var import_cropperjs = __toModule(require_cropper());
  var __vue_script__6 = {
    name: "ImageCropper",
    props: ["file", "attach_doc_image"],
    data() {
      return {
        src: null,
        cropper: null,
        image: null
      };
    },
    mounted() {
      if (window.FileReader) {
        let fr = new FileReader();
        fr.onload = () => this.src = fr.result;
        fr.readAsDataURL(this.file.cropper_file);
      }
      aspect_ratio = this.attach_doc_image ? 0 : NaN;
      crop_box = this.file.crop_box_data;
      this.image = this.$refs.image;
      this.image.onload = () => {
        this.cropper = new import_cropperjs.default(this.image, {
          zoomable: false,
          scalable: false,
          viewMode: 1,
          data: crop_box,
          aspectRatio: aspect_ratio
        });
      };
    },
    computed: {
      crop_button_text() {
        return this.attach_doc_image ? "Upload" : "Crop";
      }
    },
    methods: {
      crop_image() {
        this.file.crop_box_data = this.cropper.getData();
        const canvas = this.cropper.getCroppedCanvas();
        const file_type = this.file.file_obj.type;
        canvas.toBlob((blob) => {
          var cropped_file_obj = new File([blob], this.file.name, {
            type: blob.type
          });
          this.file.file_obj = cropped_file_obj;
          this.$emit("toggle_image_cropper");
          if (this.attach_doc_image) {
            this.$emit("upload_after_crop");
          }
        }, file_type);
      }
    }
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", [
        _c("img", {ref: "image", attrs: {src: _vm.src, alt: _vm.file.name}})
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", {staticClass: "image-cropper-actions"}, [
        !_vm.attach_doc_image ? _c("button", {
          staticClass: "btn btn-sm margin-right",
          on: {
            click: function($event) {
              return _vm.$emit("toggle_image_cropper");
            }
          }
        }, [_vm._v("Back")]) : _vm._e(),
        _vm._v(" "),
        _c("button", {
          staticClass: "btn btn-primary btn-sm margin-right",
          domProps: {innerHTML: _vm._s(_vm.crop_button_text)},
          on: {click: _vm.crop_image}
        })
      ])
    ]);
  };
  var __vue_staticRenderFns__6 = [];
  __vue_render__6._withStripped = true;
  var __vue_inject_styles__6 = function(inject) {
    if (!inject)
      return;
    inject("data-v-b43cb654_0", {source: "\nimg {\n	display: block;\n	max-width: 100%;\n	max-height: 600px;\n}\n.image-cropper-actions {\n	display: flex;\n	justify-content: flex-end;\n}\n", map: {"version": 3, "sources": ["../chdnext/chdnext/public/js/chdnext/file_uploader/ImageCropper.vue"], "names": [], "mappings": ";AAqEA;CACA,cAAA;CACA,eAAA;CACA,iBAAA;AACA;AAEA;CACA,aAAA;CACA,yBAAA;AACA", "file": "ImageCropper.vue", "sourcesContent": [`<template>
	<div>
		<div>
			<img ref="image" :src="src" :alt="file.name"/>
		</div>
		<br/>
		<div class="image-cropper-actions">
			<button class="btn btn-sm margin-right" v-if="!attach_doc_image" @click="$emit('toggle_image_cropper')">Back</button>
			<button class="btn btn-primary btn-sm margin-right" @click="crop_image" v-html="crop_button_text"></button>
		</div>
	</div>
</template>

<script>
import Cropper from "cropperjs";
export default {
	name: "ImageCropper",
	props: ["file", "attach_doc_image"],
	data() {
		return {
			src: null,
			cropper: null,
			image: null
		};
	},
	mounted() {
		if (window.FileReader) {
			let fr = new FileReader();
			fr.onload = () => (this.src = fr.result);
			fr.readAsDataURL(this.file.cropper_file);
		}
		aspect_ratio = this.attach_doc_image ? 0 : NaN;
		crop_box = this.file.crop_box_data;
		this.image = this.$refs.image;
		this.image.onload = () => {
			this.cropper = new Cropper(this.image, {
				zoomable: false,
				scalable: false,
				viewMode: 1,
				data: crop_box,
				aspectRatio: aspect_ratio
			});
		};
	},
	computed: {
		crop_button_text() {
			return this.attach_doc_image ? "Upload" : "Crop";
		}
	},
	methods: {
		crop_image() {
			this.file.crop_box_data = this.cropper.getData();
			const canvas = this.cropper.getCroppedCanvas();
			const file_type = this.file.file_obj.type;
			canvas.toBlob(blob => {
				var cropped_file_obj = new File([blob], this.file.name, {
					type: blob.type
				});
				this.file.file_obj = cropped_file_obj;
				this.$emit("toggle_image_cropper");
				if(this.attach_doc_image) {
					this.$emit("upload_after_crop");
				}
			}, file_type);
		}
	}
};
</script>
<style>
img {
	display: block;
	max-width: 100%;
	max-height: 600px;
}

.image-cropper-actions {
	display: flex;
	justify-content: flex-end;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__6 = void 0;
  var __vue_module_identifier__6 = void 0;
  var __vue_is_functional_template__6 = false;
  function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div>
		<div>
			<img ref="image" :src="src" :alt="file.name"/>
		</div>
		<br/>
		<div class="image-cropper-actions">
			<button class="btn btn-sm margin-right" v-if="!attach_doc_image" @click="$emit('toggle_image_cropper')">Back</button>
			<button class="btn btn-primary btn-sm margin-right" @click="crop_image" v-html="crop_button_text"></button>
		</div>
	</div>
</template>

<script>
import Cropper from "cropperjs";
export default {
	name: "ImageCropper",
	props: ["file", "attach_doc_image"],
	data() {
		return {
			src: null,
			cropper: null,
			image: null
		};
	},
	mounted() {
		if (window.FileReader) {
			let fr = new FileReader();
			fr.onload = () => (this.src = fr.result);
			fr.readAsDataURL(this.file.cropper_file);
		}
		aspect_ratio = this.attach_doc_image ? 0 : NaN;
		crop_box = this.file.crop_box_data;
		this.image = this.$refs.image;
		this.image.onload = () => {
			this.cropper = new Cropper(this.image, {
				zoomable: false,
				scalable: false,
				viewMode: 1,
				data: crop_box,
				aspectRatio: aspect_ratio
			});
		};
	},
	computed: {
		crop_button_text() {
			return this.attach_doc_image ? "Upload" : "Crop";
		}
	},
	methods: {
		crop_image() {
			this.file.crop_box_data = this.cropper.getData();
			const canvas = this.cropper.getCroppedCanvas();
			const file_type = this.file.file_obj.type;
			canvas.toBlob(blob => {
				var cropped_file_obj = new File([blob], this.file.name, {
					type: blob.type
				});
				this.file.file_obj = cropped_file_obj;
				this.$emit("toggle_image_cropper");
				if(this.attach_doc_image) {
					this.$emit("upload_after_crop");
				}
			}, file_type);
		}
	}
};
</script>
<style>
img {
	display: block;
	max-width: 100%;
	max-height: 600px;
}

.image-cropper-actions {
	display: flex;
	justify-content: flex-end;
}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__6() {
    const styles = __vue_create_injector__6.styles || (__vue_create_injector__6.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6({render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6}, __vue_inject_styles__6, __vue_script__6, __vue_scope_id__6, __vue_is_functional_template__6, __vue_module_identifier__6, false, __vue_create_injector__6, void 0, void 0);
  var ImageCropper_default = __vue_component__6;

  // ../chdnext/chdnext/public/js/chdnext/file_uploader/FileUploader.vue
  var __vue_script__7 = {
    name: "FileUploader",
    props: {
      show_upload_button: {
        default: true
      },
      disable_file_browser: {
        default: false
      },
      allow_multiple: {
        default: true
      },
      as_dataurl: {
        default: false
      },
      doctype: {
        default: null
      },
      docname: {
        default: null
      },
      fieldname: {
        default: null
      },
      folder: {
        default: "Home"
      },
      method: {
        default: null
      },
      on_success: {
        default: null
      },
      restrictions: {
        default: () => ({
          max_file_size: null,
          max_number_of_files: null,
          allowed_file_types: []
        })
      },
      attach_doc_image: {
        default: false
      },
      upload_notes: {
        default: null
      }
    },
    components: {
      FilePreview: FilePreview_default,
      FileBrowser: FileBrowser_default,
      WebLink: WebLink_default,
      ImageCropper: ImageCropper_default
    },
    data() {
      return {
        files: [],
        is_dragging: false,
        currently_uploading: -1,
        show_file_browser: false,
        show_web_link: false,
        show_image_cropper: false,
        crop_image_with_index: -1,
        trigger_upload: false,
        close_dialog: false,
        hide_dialog_footer: false,
        allow_take_photo: false,
        allow_web_link: true,
        google_drive_settings: {
          enabled: false
        }
      };
    },
    created() {
      this.allow_take_photo = window.navigator.mediaDevices;
      if (frappe.user_id !== "Guest") {
        frappe.call({
          method: "frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",
          callback: (resp) => {
            if (!resp.exc) {
              this.google_drive_settings = resp.message;
            }
          }
        });
      }
      if (this.restrictions.max_file_size == null) {
        frappe.call("frappe.core.doctype.file.file.get_max_file_size").then((res) => {
          this.restrictions.max_file_size = Number(res.message);
        });
      }
    },
    watch: {
      files(newvalue, oldvalue) {
        if (!this.allow_multiple && newvalue.length > 1) {
          this.files = [newvalue[newvalue.length - 1]];
        }
      }
    },
    computed: {
      upload_complete() {
        return this.files.length > 0 && this.files.every((file) => file.total !== 0 && file.progress === file.total);
      }
    },
    methods: {
      dragover() {
        this.is_dragging = true;
      },
      dragleave() {
        this.is_dragging = false;
      },
      dropfiles(e) {
        this.is_dragging = false;
        this.add_files(e.dataTransfer.files);
      },
      browse_files() {
        this.$refs.file_input.click();
      },
      on_file_input(e) {
        this.add_files(this.$refs.file_input.files);
      },
      remove_file(file) {
        this.files = this.files.filter((f) => f !== file);
      },
      toggle_image_cropper(index) {
        this.crop_image_with_index = this.show_image_cropper ? -1 : index;
        this.hide_dialog_footer = !this.show_image_cropper;
        this.show_image_cropper = !this.show_image_cropper;
      },
      toggle_all_private() {
        let flag;
        let private_values = this.files.filter((file) => file.private);
        if (private_values.length < this.files.length) {
          flag = true;
        } else {
          flag = false;
        }
        this.files = this.files.map((file) => {
          file.private = flag;
          return file;
        });
      },
      add_files(file_array) {
        let files = Array.from(file_array).filter(this.check_restrictions).map((file) => {
          let is_image = file.type.startsWith("image");
          return {
            file_obj: file,
            cropper_file: file,
            crop_box_data: null,
            optimize: this.attach_doc_image ? true : false,
            name: file.name,
            doc: null,
            progress: 0,
            total: 0,
            failed: false,
            request_succeeded: false,
            error_message: null,
            uploading: false,
            private: !is_image
          };
        });
        this.files = this.files.concat(files);
        if (this.files.length != 0 && this.attach_doc_image) {
          this.toggle_image_cropper(0);
        }
      },
      check_restrictions(file) {
        let {max_file_size, allowed_file_types} = this.restrictions;
        let mime_type = file.type;
        let extension = "." + file.name.split(".").pop();
        let is_correct_type = true;
        let valid_file_size = true;
        if (allowed_file_types.length) {
          is_correct_type = allowed_file_types.some((type) => {
            if (type.includes("/")) {
              if (!file.type)
                return false;
              return file.type.match(type);
            }
            if (type[0] === ".") {
              return file.name.endsWith(type);
            }
            return false;
          });
        }
        if (max_file_size && file.size != null) {
          valid_file_size = file.size < max_file_size;
        }
        if (!is_correct_type) {
          console.warn("File skipped because of invalid file type", file);
          frappe.show_alert({
            message: __('File "{0}" was skipped because of invalid file type', [file.name]),
            indicator: "orange"
          });
        }
        if (!valid_file_size) {
          console.warn("File skipped because of invalid file size", file.size, file);
          frappe.show_alert({
            message: __('File "{0}" was skipped because size exceeds {1} MB', [file.name, max_file_size / (1024 * 1024)]),
            indicator: "orange"
          });
        }
        return is_correct_type && valid_file_size;
      },
      upload_files() {
        if (this.show_file_browser) {
          return this.upload_via_file_browser();
        }
        if (this.show_web_link) {
          return this.upload_via_web_link();
        }
        if (this.as_dataurl) {
          return this.return_as_dataurl();
        }
        return frappe.run_serially(this.files.map((file, i) => () => this.upload_file(file, i)));
      },
      upload_via_file_browser() {
        let selected_file = this.$refs.file_browser.selected_node;
        if (!selected_file.value) {
          frappe.msgprint(__("Click on a file to select it."));
          this.close_dialog = true;
          return Promise.reject();
        }
        this.close_dialog = true;
        return this.upload_file({
          file_url: selected_file.file_url
        });
      },
      upload_via_web_link() {
        let file_url = this.$refs.web_link.url;
        if (!file_url) {
          frappe.msgprint(__("Invalid URL"));
          this.close_dialog = true;
          return Promise.reject();
        }
        file_url = decodeURI(file_url);
        this.close_dialog = true;
        return this.upload_file({
          file_url
        });
      },
      return_as_dataurl() {
        let promises = this.files.map((file) => frappe.dom.file_to_base64(file.file_obj).then((dataurl) => {
          file.dataurl = dataurl;
          this.on_success && this.on_success(file);
        }));
        this.close_dialog = true;
        return Promise.all(promises);
      },
      upload_file(file, i) {
        this.currently_uploading = i;
        return new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest();
          xhr.upload.addEventListener("loadstart", (e) => {
            file.uploading = true;
          });
          xhr.upload.addEventListener("progress", (e) => {
            if (e.lengthComputable) {
              file.progress = e.loaded;
              file.total = e.total;
            }
          });
          xhr.upload.addEventListener("load", (e) => {
            file.uploading = false;
            resolve();
          });
          xhr.addEventListener("error", (e) => {
            file.failed = true;
            reject();
          });
          xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                file.request_succeeded = true;
                let r = null;
                let file_doc = null;
                try {
                  r = JSON.parse(xhr.responseText);
                  if (r.message.doctype === "File") {
                    file_doc = r.message;
                  }
                } catch (e) {
                  r = xhr.responseText;
                }
                file.doc = file_doc;
                if (this.on_success) {
                  this.on_success(file_doc, r);
                }
                if (i == this.files.length - 1 && this.files.every((file2) => file2.request_succeeded)) {
                  this.close_dialog = true;
                }
              } else if (xhr.status === 403) {
                file.failed = true;
                let response = JSON.parse(xhr.responseText);
                file.error_message = `Not permitted. ${response._error_message || ""}`;
              } else if (xhr.status === 413) {
                file.failed = true;
                file.error_message = "Size exceeds the maximum allowed file size.";
              } else {
                file.failed = true;
                file.error_message = xhr.status === 0 ? "XMLHttpRequest Error" : `${xhr.status} : ${xhr.statusText}`;
                let error = null;
                try {
                  error = JSON.parse(xhr.responseText);
                } catch (e) {
                }
                frappe.request.cleanup({}, error);
              }
            }
          };
          xhr.open("POST", "/api/method/upload_file", true);
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("X-Frappe-CSRF-Token", frappe.csrf_token);
          let form_data = new FormData();
          if (file.file_obj) {
            form_data.append("file", file.file_obj, file.name);
          }
          form_data.append("is_private", +file.private);
          form_data.append("folder", this.folder);
          if (file.file_url) {
            form_data.append("file_url", file.file_url);
          }
          if (file.file_name) {
            form_data.append("file_name", file.file_name);
          }
          if (this.doctype && this.docname) {
            form_data.append("doctype", this.doctype);
            form_data.append("docname", this.docname);
          }
          if (this.fieldname) {
            form_data.append("fieldname", this.fieldname);
          }
          if (this.method) {
            form_data.append("method", this.method);
          }
          if (file.optimize) {
            form_data.append("optimize", true);
          }
          if (this.attach_doc_image) {
            form_data.append("max_width", 200);
            form_data.append("max_height", 200);
          }
          xhr.send(form_data);
        });
      },
      capture_image() {
        const capture = new frappe.ui.Capture({
          animate: false,
          error: true
        });
        capture.show();
        capture.submit((data_url) => {
          let filename = `capture_${frappe.datetime.now_datetime().replaceAll(/[: -]/g, "_")}.png`;
          this.url_to_file(data_url, filename, "image/png").then((file) => this.add_files([file]));
        });
      },
      show_google_drive_picker() {
        let dialog = cur_dialog;
        dialog.hide();
        let google_drive = new google_drive_picker_default({
          pickerCallback: (data) => this.google_drive_callback(data, dialog),
          ...this.google_drive_settings
        });
        google_drive.loadPicker();
      },
      google_drive_callback(data, dialog) {
        if (data.action == google.picker.Action.PICKED) {
          this.upload_file({
            file_url: data.docs[0].url,
            file_name: data.docs[0].name
          });
        } else if (data.action == google.picker.Action.CANCEL) {
          dialog.show();
        }
      },
      url_to_file(url, filename, mime_type) {
        return fetch(url).then((res) => res.arrayBuffer()).then((buffer) => new File([buffer], filename, {type: mime_type}));
      }
    }
  };
  var __vue_render__7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "file-uploader",
      on: {
        dragover: function($event) {
          $event.preventDefault();
          return _vm.dragover($event);
        },
        dragleave: function($event) {
          $event.preventDefault();
          return _vm.dragleave($event);
        },
        drop: function($event) {
          $event.preventDefault();
          return _vm.dropfiles($event);
        }
      }
    }, [
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.files.length === 0 && !_vm.show_file_browser && !_vm.show_web_link,
            expression: "files.length === 0 && !show_file_browser && !show_web_link"
          }
        ],
        staticClass: "file-upload-area"
      }, [
        !_vm.is_dragging ? _c("div", [
          _c("div", {staticClass: "text-center"}, [
            _vm._v("\n				" + _vm._s(_vm.__("Drag and drop files here or upload from")) + "\n			")
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "mt-2 text-center"}, [
            _c("button", {
              staticClass: "btn btn-file-upload",
              on: {click: _vm.browse_files}
            }, [
              _c("svg", {
                attrs: {
                  width: "30",
                  height: "30",
                  viewBox: "0 0 30 30",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              }, [
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "url(#paint0_linear)"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M13.5 22V19",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M16.5 22V19",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M10.5 22H19.5",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M7.5 16H22.5",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("defs", [
                  _c("linearGradient", {
                    attrs: {
                      id: "paint0_linear",
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "30",
                      gradientUnits: "userSpaceOnUse"
                    }
                  }, [
                    _c("stop", {
                      attrs: {"stop-color": "#2C9AF1"}
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      attrs: {
                        offset: "1",
                        "stop-color": "#2490EF"
                      }
                    })
                  ], 1)
                ], 1)
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("My Device")))
              ])
            ]),
            _vm._v(" "),
            _c("input", {
              ref: "file_input",
              staticClass: "hidden",
              attrs: {
                type: "file",
                multiple: _vm.allow_multiple,
                accept: _vm.restrictions.allowed_file_types.join(", ")
              },
              on: {change: _vm.on_file_input}
            }),
            _vm._v(" "),
            !_vm.disable_file_browser ? _c("button", {
              staticClass: "btn btn-file-upload",
              on: {
                click: function($event) {
                  _vm.show_file_browser = true;
                }
              }
            }, [
              _c("svg", {
                attrs: {
                  width: "30",
                  height: "30",
                  viewBox: "0 0 30 30",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              }, [
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "#48BB74"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z",
                    stroke: "white",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "square"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12",
                    stroke: "white",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("Library")))
              ])
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.allow_web_link ? _c("button", {
              staticClass: "btn btn-file-upload",
              on: {
                click: function($event) {
                  _vm.show_web_link = true;
                }
              }
            }, [
              _c("svg", {
                attrs: {
                  width: "30",
                  height: "30",
                  viewBox: "0 0 30 30",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              }, [
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "#ECAC4B"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M12.0469 17.9543L17.9558 12.0454",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("Link")))
              ])
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.allow_take_photo ? _c("button", {
              staticClass: "btn btn-file-upload",
              on: {click: _vm.capture_image}
            }, [
              _c("svg", {
                attrs: {
                  width: "30",
                  height: "30",
                  viewBox: "0 0 30 30",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              }, [
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "#CE315B"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z",
                    stroke: "white",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "16",
                    r: "2.5",
                    stroke: "white"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("Camera")))
              ])
            ]) : _vm._e(),
            _vm._v(" "),
            _vm.google_drive_settings.enabled ? _c("button", {
              staticClass: "btn btn-file-upload",
              on: {click: _vm.show_google_drive_picker}
            }, [
              _c("svg", {attrs: {width: "30", height: "30"}}, [
                _c("image", {
                  attrs: {
                    "xlink:href": "/assets/frappe/icons/social/google_drive.svg",
                    width: "30",
                    height: "30"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("Google Drive")))
              ])
            ]) : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "text-muted text-medium"}, [
            _vm._v("\n				" + _vm._s(_vm.upload_notes) + "\n			")
          ])
        ]) : _c("div", [
          _vm._v("\n			" + _vm._s(_vm.__("Drop files here")) + "\n		")
        ])
      ]),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.files.length && !_vm.show_file_browser && !_vm.show_web_link,
            expression: "files.length && !show_file_browser && !show_web_link"
          }
        ],
        staticClass: "file-preview-area"
      }, [
        !_vm.show_image_cropper ? _c("div", {staticClass: "file-preview-container"}, _vm._l(_vm.files, function(file, i) {
          return _c("FilePreview", {
            key: file.name,
            attrs: {file},
            on: {
              remove: function($event) {
                return _vm.remove_file(file);
              },
              toggle_private: function($event) {
                file.private = !file.private;
              },
              toggle_optimize: function($event) {
                file.optimize = !file.optimize;
              },
              toggle_image_cropper: function($event) {
                return _vm.toggle_image_cropper(i);
              }
            }
          });
        }), 1) : _vm._e(),
        _vm._v(" "),
        _vm.show_upload_button && _vm.currently_uploading === -1 ? _c("div", {staticClass: "flex align-center"}, [
          _c("button", {
            staticClass: "btn btn-primary btn-sm margin-right",
            on: {click: _vm.upload_files}
          }, [
            _vm.files.length === 1 ? _c("span", [
              _vm._v("\n					" + _vm._s(_vm.__("Upload file")) + "\n				")
            ]) : _c("span", [
              _vm._v("\n					" + _vm._s(_vm.__("Upload {0} files", [_vm.files.length])) + "\n				")
            ])
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "text-muted text-medium"}, [
            _vm._v("\n				" + _vm._s(_vm.__("Click on the lock icon to toggle public/private")) + "\n			")
          ])
        ]) : _vm._e()
      ]),
      _vm._v(" "),
      _vm.show_image_cropper ? _c("ImageCropper", {
        attrs: {
          file: _vm.files[_vm.crop_image_with_index],
          attach_doc_image: _vm.attach_doc_image
        },
        on: {
          toggle_image_cropper: function($event) {
            return _vm.toggle_image_cropper(-1);
          },
          upload_after_crop: function($event) {
            _vm.trigger_upload = true;
          }
        }
      }) : _vm._e(),
      _vm._v(" "),
      _vm.show_file_browser && !_vm.disable_file_browser ? _c("FileBrowser", {
        ref: "file_browser",
        on: {
          "hide-browser": function($event) {
            _vm.show_file_browser = false;
          }
        }
      }) : _vm._e(),
      _vm._v(" "),
      _vm.show_web_link ? _c("WebLink", {
        ref: "web_link",
        on: {
          "hide-web-link": function($event) {
            _vm.show_web_link = false;
          }
        }
      }) : _vm._e()
    ], 1);
  };
  var __vue_staticRenderFns__7 = [];
  __vue_render__7._withStripped = true;
  var __vue_inject_styles__7 = function(inject) {
    if (!inject)
      return;
    inject("data-v-59e9fb3c_0", {source: "\n.file-upload-area {\n	min-height: 16rem;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	border: 1px dashed var(--dark-border-color);\n	border-radius: var(--border-radius);\n	cursor: pointer;\n	background-color: var(--bg-color);\n}\n.btn-file-upload {\n	background-color: transparent;\n	border: none;\n	box-shadow: none;\n	font-size: var(--text-xs);\n}\n", map: {"version": 3, "sources": ["../chdnext/chdnext/public/js/chdnext/file_uploader/FileUploader.vue"], "names": [], "mappings": ";AAmjBA;CACA,iBAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,2CAAA;CACA,mCAAA;CACA,eAAA;CACA,iCAAA;AACA;AAEA;CACA,6BAAA;CACA,YAAA;CACA,gBAAA;CACA,yBAAA;AACA", "file": "FileUploader.vue", "sourcesContent": [`<template>
	<div class="file-uploader"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="dropfiles"
	>
		<div
			class="file-upload-area"
			v-show="files.length === 0 && !show_file_browser && !show_web_link"
		>
			<div v-if="!is_dragging">
				<div class="text-center">
					{{ __('Drag and drop files here or upload from') }}
				</div>
				<div class="mt-2 text-center">
					<button class="btn btn-file-upload" @click="browse_files">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="url(#paint0_linear)"/>
							<path d="M13.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.5 22H19.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.5 16H22.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2C9AF1"/>
							<stop offset="1" stop-color="#2490EF"/>
							</linearGradient>
							</defs>
						</svg>
						<div class="mt-1">{{ __('My Device') }}</div>
					</button>
					<input
						type="file"
						class="hidden"
						ref="file_input"
						@change="on_file_input"
						:multiple="allow_multiple"
						:accept="restrictions.allowed_file_types.join(', ')"
					>
					<button class="btn btn-file-upload" v-if="!disable_file_browser" @click="show_file_browser = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#48BB74"/>
							<path d="M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="square"/>
							<path d="M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Library') }}</div>
					</button>
					<button class="btn btn-file-upload" v-if="allow_web_link" @click="show_web_link = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#ECAC4B"/>
							<path d="M12.0469 17.9543L17.9558 12.0454" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Link') }}</div>
					</button>
					<button v-if="allow_take_photo" class="btn btn-file-upload" @click="capture_image">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#CE315B"/>
							<path d="M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z" stroke="white" stroke-linejoin="round"/>
							<circle cx="15" cy="16" r="2.5" stroke="white"/>
						</svg>
						<div class="mt-1">{{ __('Camera') }}</div>
					</button>
					<button v-if="google_drive_settings.enabled" class="btn btn-file-upload" @click="show_google_drive_picker">
						<svg width="30" height="30">
							<image xlink:href="/assets/frappe/icons/social/google_drive.svg" width="30" height="30"/>
						</svg>
						<div class="mt-1">{{ __('Google Drive') }}</div>
					</button>
				</div>
				<div class="text-muted text-medium">
					{{ upload_notes }}
				</div>
			</div>
			<div v-else>
				{{ __('Drop files here') }}
			</div>
		</div>
		<div class="file-preview-area" v-show="files.length && !show_file_browser && !show_web_link">
			<div class="file-preview-container" v-if="!show_image_cropper">
				<FilePreview
					v-for="(file, i) in files"
					:key="file.name"
					:file="file"
					@remove="remove_file(file)"
					@toggle_private="file.private = !file.private"
					@toggle_optimize="file.optimize = !file.optimize"
					@toggle_image_cropper="toggle_image_cropper(i)"
				/>
			</div>
			<div class="flex align-center" v-if="show_upload_button && currently_uploading === -1">
				<button
					class="btn btn-primary btn-sm margin-right"
					@click="upload_files"
				>
					<span v-if="files.length === 1">
						{{ __('Upload file') }}
					</span>
					<span v-else>
						{{ __('Upload {0} files', [files.length]) }}
					</span>
				</button>
				<div class="text-muted text-medium">
					{{ __('Click on the lock icon to toggle public/private') }}
				</div>
			</div>
		</div>
		<ImageCropper
			v-if="show_image_cropper"
			:file="files[crop_image_with_index]"
			:attach_doc_image="attach_doc_image"
			@toggle_image_cropper="toggle_image_cropper(-1)"
			@upload_after_crop="trigger_upload=true"
		/>
		<FileBrowser
			ref="file_browser"
			v-if="show_file_browser && !disable_file_browser"
			@hide-browser="show_file_browser = false"
		/>
		<WebLink
			ref="web_link"
			v-if="show_web_link"
			@hide-web-link="show_web_link = false"
		/>
	</div>
</template>

<script>
import FilePreview from './FilePreview.vue';
import FileBrowser from './FileBrowser.vue';
import WebLink from './WebLink.vue';
import GoogleDrivePicker from '../../integrations/google_drive_picker';
import ImageCropper from './ImageCropper.vue';

export default {
	name: 'FileUploader',
	props: {
		show_upload_button: {
			default: true
		},
		disable_file_browser: {
			default: false
		},
		allow_multiple: {
			default: true
		},
		as_dataurl: {
			default: false
		},
		doctype: {
			default: null
		},
		docname: {
			default: null
		},
		fieldname: {
			default: null
		},
		folder: {
			default: 'Home'
		},
		method: {
			default: null
		},
		on_success: {
			default: null
		},
		restrictions: {
			default: () => ({
				max_file_size: null, // 2048 -> 2KB
				max_number_of_files: null,
				allowed_file_types: [] // ['image/*', 'video/*', '.jpg', '.gif', '.pdf']
			})
		},
		attach_doc_image: {
			default: false
		},
		upload_notes: {
			default: null // "Images or video, upto 2MB"
		}
	},
	components: {
		FilePreview,
		FileBrowser,
		WebLink,
		ImageCropper
	},
	data() {
		return {
			files: [],
			is_dragging: false,
			currently_uploading: -1,
			show_file_browser: false,
			show_web_link: false,
			show_image_cropper: false,
			crop_image_with_index: -1,
			trigger_upload: false,
			close_dialog: false,
			hide_dialog_footer: false,
			allow_take_photo: false,
			allow_web_link: true,
			google_drive_settings: {
				enabled: false
			}
		}
	},
	created() {
		this.allow_take_photo = window.navigator.mediaDevices;
		if (frappe.user_id !== "Guest") {
			frappe.call({
				// method only available after login
				method: "frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",
				callback: (resp) => {
					if (!resp.exc) {
						this.google_drive_settings = resp.message;
					}
				}
			});
		}
		if (this.restrictions.max_file_size == null) {
			frappe.call('frappe.core.doctype.file.file.get_max_file_size')
				.then(res => {
					this.restrictions.max_file_size = Number(res.message);
				});
		}
	},
	watch: {
		files(newvalue, oldvalue) {
			if (!this.allow_multiple && newvalue.length > 1) {
				this.files = [newvalue[newvalue.length - 1]];
			}
		}
	},
	computed: {
		upload_complete() {
			return this.files.length > 0
				&& this.files.every(
					file => file.total !== 0 && file.progress === file.total);
		}
	},
	methods: {
		dragover() {
			this.is_dragging = true;
		},
		dragleave() {
			this.is_dragging = false;
		},
		dropfiles(e) {
			this.is_dragging = false;
			this.add_files(e.dataTransfer.files);
		},
		browse_files() {
			this.$refs.file_input.click();
		},
		on_file_input(e) {
			this.add_files(this.$refs.file_input.files);
		},
		remove_file(file) {
			this.files = this.files.filter(f => f !== file);
		},
		toggle_image_cropper(index) {
			this.crop_image_with_index = this.show_image_cropper ? -1 : index;
			this.hide_dialog_footer = !this.show_image_cropper;
			this.show_image_cropper = !this.show_image_cropper;
		},
		toggle_all_private() {
			let flag;
			let private_values = this.files.filter(file => file.private);
			if (private_values.length < this.files.length) {
				// there are some private and some public
				// set all to private
				flag = true;
			} else {
				// all are private, set all to public
				flag = false;
			}
			this.files = this.files.map(file => {
				file.private = flag;
				return file;
			});
		},
		add_files(file_array) {
			let files = Array.from(file_array)
				.filter(this.check_restrictions)
				.map(file => {
					let is_image = file.type.startsWith('image');
					return {
						file_obj: file,
						cropper_file: file,
						crop_box_data: null,
						optimize: this.attach_doc_image ? true : false,
						name: file.name,
						doc: null,
						progress: 0,
						total: 0,
						failed: false,
						request_succeeded: false,
						error_message: null,
						uploading: false,
						private: !is_image
					}
				});
			this.files = this.files.concat(files);
			if(this.files.length != 0 && this.attach_doc_image) {
				this.toggle_image_cropper(0);
			}
		},
		check_restrictions(file) {
			let { max_file_size, allowed_file_types } = this.restrictions;

			let mime_type = file.type;
			let extension = '.' + file.name.split('.').pop();

			let is_correct_type = true;
			let valid_file_size = true;

			if (allowed_file_types.length) {
				is_correct_type = allowed_file_types.some((type) => {
					// is this is a mime-type
					if (type.includes('/')) {
						if (!file.type) return false;
						return file.type.match(type);
					}

					// otherwise this is likely an extension
					if (type[0] === '.') {
						return file.name.endsWith(type);
					}
					return false;
				});
			}

			if (max_file_size && file.size != null) {
				valid_file_size = file.size < max_file_size;
			}

			if (!is_correct_type) {
				console.warn('File skipped because of invalid file type', file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because of invalid file type', [file.name]),
					indicator: 'orange'
				});
			}
			if (!valid_file_size) {
				console.warn('File skipped because of invalid file size', file.size, file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because size exceeds {1} MB', [file.name, max_file_size / (1024 * 1024)]),
					indicator: 'orange'
				});
			}

			return is_correct_type && valid_file_size;
		},
		upload_files() {
			if (this.show_file_browser) {
				return this.upload_via_file_browser();
			}
			if (this.show_web_link) {
				return this.upload_via_web_link();
			}
			if (this.as_dataurl) {
				return this.return_as_dataurl();
			}
			return frappe.run_serially(
				this.files.map(
					(file, i) =>
						() => this.upload_file(file, i)
				)
			);
		},
		upload_via_file_browser() {
			let selected_file = this.$refs.file_browser.selected_node;
			if (!selected_file.value) {
				frappe.msgprint(__('Click on a file to select it.'));
				this.close_dialog = true;
				return Promise.reject();
			}
			this.close_dialog = true;
			return this.upload_file({
				file_url: selected_file.file_url
			});
		},
		upload_via_web_link() {
			let file_url = this.$refs.web_link.url;
			if (!file_url) {
				frappe.msgprint(__('Invalid URL'));
				this.close_dialog = true;
				return Promise.reject();
			}
			file_url = decodeURI(file_url)
			this.close_dialog = true;
			return this.upload_file({
				file_url
			});
		},
		return_as_dataurl() {
			let promises = this.files.map(file =>
				frappe.dom.file_to_base64(file.file_obj)
					.then(dataurl => {
						file.dataurl = dataurl;
						this.on_success && this.on_success(file);
					})
			);
			this.close_dialog = true;
			return Promise.all(promises);
		},
		upload_file(file, i) {
			this.currently_uploading = i;

			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.upload.addEventListener('loadstart', (e) => {
					file.uploading = true;
				})
				xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable) {
						file.progress = e.loaded;
						file.total = e.total;
					}
				})
				xhr.upload.addEventListener('load', (e) => {
					file.uploading = false;
					resolve();
				})
				xhr.addEventListener('error', (e) => {
					file.failed = true;
					reject();
				})
				xhr.onreadystatechange = () => {
					if (xhr.readyState == XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							file.request_succeeded = true;
							let r = null;
							let file_doc = null;
							try {
								r = JSON.parse(xhr.responseText);
								if (r.message.doctype === 'File') {
									file_doc = r.message;
								}
							} catch(e) {
								r = xhr.responseText;
							}

							file.doc = file_doc;

							if (this.on_success) {
								this.on_success(file_doc, r);
							}

							if (i == this.files.length - 1 && this.files.every(file => file.request_succeeded)) {
								this.close_dialog = true;
							}

						} else if (xhr.status === 403) {
							file.failed = true;
							let response = JSON.parse(xhr.responseText);
							file.error_message = \`Not permitted. \${response._error_message || ''}\`;

						} else if (xhr.status === 413) {
							file.failed = true;
							file.error_message = 'Size exceeds the maximum allowed file size.';

						} else {
							file.failed = true;
							file.error_message = xhr.status === 0 ? 'XMLHttpRequest Error' : \`\${xhr.status} : \${xhr.statusText}\`;

							let error = null;
							try {
								error = JSON.parse(xhr.responseText);
							} catch(e) {
								// pass
							}
							frappe.request.cleanup({}, error);
						}
					}
				}
				xhr.open('POST', '/api/method/upload_file', true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);

				let form_data = new FormData();
				if (file.file_obj) {
					form_data.append('file', file.file_obj, file.name);
				}
				form_data.append('is_private', +file.private);
				form_data.append('folder', this.folder);

				if (file.file_url) {
					form_data.append('file_url', file.file_url);
				}

				if (file.file_name) {
					form_data.append('file_name', file.file_name);
				}

				if (this.doctype && this.docname) {
					form_data.append('doctype', this.doctype);
					form_data.append('docname', this.docname);
				}

				if (this.fieldname) {
					form_data.append('fieldname', this.fieldname);
				}

				if (this.method) {
					form_data.append('method', this.method);
				}

				if (file.optimize) {
					form_data.append('optimize', true);
				}

				if (this.attach_doc_image) {
					form_data.append('max_width', 200);
					form_data.append('max_height', 200);
				}

				xhr.send(form_data);
			});
		},
		capture_image() {
			const capture = new frappe.ui.Capture({
				animate: false,
				error: true
			});
			capture.show();
			capture.submit(data_url => {
				let filename = \`capture_\${frappe.datetime.now_datetime().replaceAll(/[: -]/g, '_')}.png\`;
				this.url_to_file(data_url, filename, 'image/png').then((file) =>
					this.add_files([file])
				);
			});
		},
		show_google_drive_picker() {
			let dialog = cur_dialog;
			dialog.hide();
			let google_drive = new GoogleDrivePicker({
				pickerCallback: data => this.google_drive_callback(data, dialog),
				...this.google_drive_settings
			});
			google_drive.loadPicker();
		},
		google_drive_callback(data, dialog) {
			if (data.action == google.picker.Action.PICKED) {
				this.upload_file({
					file_url: data.docs[0].url,
					file_name: data.docs[0].name
				});
			} else if (data.action == google.picker.Action.CANCEL) {
				dialog.show();
			}
		},
		url_to_file(url, filename, mime_type) {
			return fetch(url)
					.then(res => res.arrayBuffer())
					.then(buffer => new File([buffer], filename, { type: mime_type }));
		},
	}
}
</script>
<style>
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}

.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__7 = void 0;
  var __vue_module_identifier__7 = void 0;
  var __vue_is_functional_template__7 = false;
  function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="file-uploader"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="dropfiles"
	>
		<div
			class="file-upload-area"
			v-show="files.length === 0 && !show_file_browser && !show_web_link"
		>
			<div v-if="!is_dragging">
				<div class="text-center">
					{{ __('Drag and drop files here or upload from') }}
				</div>
				<div class="mt-2 text-center">
					<button class="btn btn-file-upload" @click="browse_files">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="url(#paint0_linear)"/>
							<path d="M13.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.5 22H19.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.5 16H22.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2C9AF1"/>
							<stop offset="1" stop-color="#2490EF"/>
							</linearGradient>
							</defs>
						</svg>
						<div class="mt-1">{{ __('My Device') }}</div>
					</button>
					<input
						type="file"
						class="hidden"
						ref="file_input"
						@change="on_file_input"
						:multiple="allow_multiple"
						:accept="restrictions.allowed_file_types.join(', ')"
					>
					<button class="btn btn-file-upload" v-if="!disable_file_browser" @click="show_file_browser = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#48BB74"/>
							<path d="M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="square"/>
							<path d="M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Library') }}</div>
					</button>
					<button class="btn btn-file-upload" v-if="allow_web_link" @click="show_web_link = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#ECAC4B"/>
							<path d="M12.0469 17.9543L17.9558 12.0454" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Link') }}</div>
					</button>
					<button v-if="allow_take_photo" class="btn btn-file-upload" @click="capture_image">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#CE315B"/>
							<path d="M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z" stroke="white" stroke-linejoin="round"/>
							<circle cx="15" cy="16" r="2.5" stroke="white"/>
						</svg>
						<div class="mt-1">{{ __('Camera') }}</div>
					</button>
					<button v-if="google_drive_settings.enabled" class="btn btn-file-upload" @click="show_google_drive_picker">
						<svg width="30" height="30">
							<image xlink:href="/assets/frappe/icons/social/google_drive.svg" width="30" height="30"/>
						</svg>
						<div class="mt-1">{{ __('Google Drive') }}</div>
					</button>
				</div>
				<div class="text-muted text-medium">
					{{ upload_notes }}
				</div>
			</div>
			<div v-else>
				{{ __('Drop files here') }}
			</div>
		</div>
		<div class="file-preview-area" v-show="files.length && !show_file_browser && !show_web_link">
			<div class="file-preview-container" v-if="!show_image_cropper">
				<FilePreview
					v-for="(file, i) in files"
					:key="file.name"
					:file="file"
					@remove="remove_file(file)"
					@toggle_private="file.private = !file.private"
					@toggle_optimize="file.optimize = !file.optimize"
					@toggle_image_cropper="toggle_image_cropper(i)"
				/>
			</div>
			<div class="flex align-center" v-if="show_upload_button && currently_uploading === -1">
				<button
					class="btn btn-primary btn-sm margin-right"
					@click="upload_files"
				>
					<span v-if="files.length === 1">
						{{ __('Upload file') }}
					</span>
					<span v-else>
						{{ __('Upload {0} files', [files.length]) }}
					</span>
				</button>
				<div class="text-muted text-medium">
					{{ __('Click on the lock icon to toggle public/private') }}
				</div>
			</div>
		</div>
		<ImageCropper
			v-if="show_image_cropper"
			:file="files[crop_image_with_index]"
			:attach_doc_image="attach_doc_image"
			@toggle_image_cropper="toggle_image_cropper(-1)"
			@upload_after_crop="trigger_upload=true"
		/>
		<FileBrowser
			ref="file_browser"
			v-if="show_file_browser && !disable_file_browser"
			@hide-browser="show_file_browser = false"
		/>
		<WebLink
			ref="web_link"
			v-if="show_web_link"
			@hide-web-link="show_web_link = false"
		/>
	</div>
</template>

<script>
import FilePreview from './FilePreview.vue';
import FileBrowser from './FileBrowser.vue';
import WebLink from './WebLink.vue';
import GoogleDrivePicker from '../../integrations/google_drive_picker';
import ImageCropper from './ImageCropper.vue';

export default {
	name: 'FileUploader',
	props: {
		show_upload_button: {
			default: true
		},
		disable_file_browser: {
			default: false
		},
		allow_multiple: {
			default: true
		},
		as_dataurl: {
			default: false
		},
		doctype: {
			default: null
		},
		docname: {
			default: null
		},
		fieldname: {
			default: null
		},
		folder: {
			default: 'Home'
		},
		method: {
			default: null
		},
		on_success: {
			default: null
		},
		restrictions: {
			default: () => ({
				max_file_size: null, // 2048 -> 2KB
				max_number_of_files: null,
				allowed_file_types: [] // ['image/*', 'video/*', '.jpg', '.gif', '.pdf']
			})
		},
		attach_doc_image: {
			default: false
		},
		upload_notes: {
			default: null // "Images or video, upto 2MB"
		}
	},
	components: {
		FilePreview,
		FileBrowser,
		WebLink,
		ImageCropper
	},
	data() {
		return {
			files: [],
			is_dragging: false,
			currently_uploading: -1,
			show_file_browser: false,
			show_web_link: false,
			show_image_cropper: false,
			crop_image_with_index: -1,
			trigger_upload: false,
			close_dialog: false,
			hide_dialog_footer: false,
			allow_take_photo: false,
			allow_web_link: true,
			google_drive_settings: {
				enabled: false
			}
		}
	},
	created() {
		this.allow_take_photo = window.navigator.mediaDevices;
		if (frappe.user_id !== "Guest") {
			frappe.call({
				// method only available after login
				method: "frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",
				callback: (resp) => {
					if (!resp.exc) {
						this.google_drive_settings = resp.message;
					}
				}
			});
		}
		if (this.restrictions.max_file_size == null) {
			frappe.call('frappe.core.doctype.file.file.get_max_file_size')
				.then(res => {
					this.restrictions.max_file_size = Number(res.message);
				});
		}
	},
	watch: {
		files(newvalue, oldvalue) {
			if (!this.allow_multiple && newvalue.length > 1) {
				this.files = [newvalue[newvalue.length - 1]];
			}
		}
	},
	computed: {
		upload_complete() {
			return this.files.length > 0
				&& this.files.every(
					file => file.total !== 0 && file.progress === file.total);
		}
	},
	methods: {
		dragover() {
			this.is_dragging = true;
		},
		dragleave() {
			this.is_dragging = false;
		},
		dropfiles(e) {
			this.is_dragging = false;
			this.add_files(e.dataTransfer.files);
		},
		browse_files() {
			this.$refs.file_input.click();
		},
		on_file_input(e) {
			this.add_files(this.$refs.file_input.files);
		},
		remove_file(file) {
			this.files = this.files.filter(f => f !== file);
		},
		toggle_image_cropper(index) {
			this.crop_image_with_index = this.show_image_cropper ? -1 : index;
			this.hide_dialog_footer = !this.show_image_cropper;
			this.show_image_cropper = !this.show_image_cropper;
		},
		toggle_all_private() {
			let flag;
			let private_values = this.files.filter(file => file.private);
			if (private_values.length < this.files.length) {
				// there are some private and some public
				// set all to private
				flag = true;
			} else {
				// all are private, set all to public
				flag = false;
			}
			this.files = this.files.map(file => {
				file.private = flag;
				return file;
			});
		},
		add_files(file_array) {
			let files = Array.from(file_array)
				.filter(this.check_restrictions)
				.map(file => {
					let is_image = file.type.startsWith('image');
					return {
						file_obj: file,
						cropper_file: file,
						crop_box_data: null,
						optimize: this.attach_doc_image ? true : false,
						name: file.name,
						doc: null,
						progress: 0,
						total: 0,
						failed: false,
						request_succeeded: false,
						error_message: null,
						uploading: false,
						private: !is_image
					}
				});
			this.files = this.files.concat(files);
			if(this.files.length != 0 && this.attach_doc_image) {
				this.toggle_image_cropper(0);
			}
		},
		check_restrictions(file) {
			let { max_file_size, allowed_file_types } = this.restrictions;

			let mime_type = file.type;
			let extension = '.' + file.name.split('.').pop();

			let is_correct_type = true;
			let valid_file_size = true;

			if (allowed_file_types.length) {
				is_correct_type = allowed_file_types.some((type) => {
					// is this is a mime-type
					if (type.includes('/')) {
						if (!file.type) return false;
						return file.type.match(type);
					}

					// otherwise this is likely an extension
					if (type[0] === '.') {
						return file.name.endsWith(type);
					}
					return false;
				});
			}

			if (max_file_size && file.size != null) {
				valid_file_size = file.size < max_file_size;
			}

			if (!is_correct_type) {
				console.warn('File skipped because of invalid file type', file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because of invalid file type', [file.name]),
					indicator: 'orange'
				});
			}
			if (!valid_file_size) {
				console.warn('File skipped because of invalid file size', file.size, file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because size exceeds {1} MB', [file.name, max_file_size / (1024 * 1024)]),
					indicator: 'orange'
				});
			}

			return is_correct_type && valid_file_size;
		},
		upload_files() {
			if (this.show_file_browser) {
				return this.upload_via_file_browser();
			}
			if (this.show_web_link) {
				return this.upload_via_web_link();
			}
			if (this.as_dataurl) {
				return this.return_as_dataurl();
			}
			return frappe.run_serially(
				this.files.map(
					(file, i) =>
						() => this.upload_file(file, i)
				)
			);
		},
		upload_via_file_browser() {
			let selected_file = this.$refs.file_browser.selected_node;
			if (!selected_file.value) {
				frappe.msgprint(__('Click on a file to select it.'));
				this.close_dialog = true;
				return Promise.reject();
			}
			this.close_dialog = true;
			return this.upload_file({
				file_url: selected_file.file_url
			});
		},
		upload_via_web_link() {
			let file_url = this.$refs.web_link.url;
			if (!file_url) {
				frappe.msgprint(__('Invalid URL'));
				this.close_dialog = true;
				return Promise.reject();
			}
			file_url = decodeURI(file_url)
			this.close_dialog = true;
			return this.upload_file({
				file_url
			});
		},
		return_as_dataurl() {
			let promises = this.files.map(file =>
				frappe.dom.file_to_base64(file.file_obj)
					.then(dataurl => {
						file.dataurl = dataurl;
						this.on_success && this.on_success(file);
					})
			);
			this.close_dialog = true;
			return Promise.all(promises);
		},
		upload_file(file, i) {
			this.currently_uploading = i;

			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.upload.addEventListener('loadstart', (e) => {
					file.uploading = true;
				})
				xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable) {
						file.progress = e.loaded;
						file.total = e.total;
					}
				})
				xhr.upload.addEventListener('load', (e) => {
					file.uploading = false;
					resolve();
				})
				xhr.addEventListener('error', (e) => {
					file.failed = true;
					reject();
				})
				xhr.onreadystatechange = () => {
					if (xhr.readyState == XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							file.request_succeeded = true;
							let r = null;
							let file_doc = null;
							try {
								r = JSON.parse(xhr.responseText);
								if (r.message.doctype === 'File') {
									file_doc = r.message;
								}
							} catch(e) {
								r = xhr.responseText;
							}

							file.doc = file_doc;

							if (this.on_success) {
								this.on_success(file_doc, r);
							}

							if (i == this.files.length - 1 && this.files.every(file => file.request_succeeded)) {
								this.close_dialog = true;
							}

						} else if (xhr.status === 403) {
							file.failed = true;
							let response = JSON.parse(xhr.responseText);
							file.error_message = \`Not permitted. \${response._error_message || ''}\`;

						} else if (xhr.status === 413) {
							file.failed = true;
							file.error_message = 'Size exceeds the maximum allowed file size.';

						} else {
							file.failed = true;
							file.error_message = xhr.status === 0 ? 'XMLHttpRequest Error' : \`\${xhr.status} : \${xhr.statusText}\`;

							let error = null;
							try {
								error = JSON.parse(xhr.responseText);
							} catch(e) {
								// pass
							}
							frappe.request.cleanup({}, error);
						}
					}
				}
				xhr.open('POST', '/api/method/upload_file', true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);

				let form_data = new FormData();
				if (file.file_obj) {
					form_data.append('file', file.file_obj, file.name);
				}
				form_data.append('is_private', +file.private);
				form_data.append('folder', this.folder);

				if (file.file_url) {
					form_data.append('file_url', file.file_url);
				}

				if (file.file_name) {
					form_data.append('file_name', file.file_name);
				}

				if (this.doctype && this.docname) {
					form_data.append('doctype', this.doctype);
					form_data.append('docname', this.docname);
				}

				if (this.fieldname) {
					form_data.append('fieldname', this.fieldname);
				}

				if (this.method) {
					form_data.append('method', this.method);
				}

				if (file.optimize) {
					form_data.append('optimize', true);
				}

				if (this.attach_doc_image) {
					form_data.append('max_width', 200);
					form_data.append('max_height', 200);
				}

				xhr.send(form_data);
			});
		},
		capture_image() {
			const capture = new frappe.ui.Capture({
				animate: false,
				error: true
			});
			capture.show();
			capture.submit(data_url => {
				let filename = \`capture_\${frappe.datetime.now_datetime().replaceAll(/[: -]/g, '_')}.png\`;
				this.url_to_file(data_url, filename, 'image/png').then((file) =>
					this.add_files([file])
				);
			});
		},
		show_google_drive_picker() {
			let dialog = cur_dialog;
			dialog.hide();
			let google_drive = new GoogleDrivePicker({
				pickerCallback: data => this.google_drive_callback(data, dialog),
				...this.google_drive_settings
			});
			google_drive.loadPicker();
		},
		google_drive_callback(data, dialog) {
			if (data.action == google.picker.Action.PICKED) {
				this.upload_file({
					file_url: data.docs[0].url,
					file_name: data.docs[0].name
				});
			} else if (data.action == google.picker.Action.CANCEL) {
				dialog.show();
			}
		},
		url_to_file(url, filename, mime_type) {
			return fetch(url)
					.then(res => res.arrayBuffer())
					.then(buffer => new File([buffer], filename, { type: mime_type }));
		},
	}
}
</script>
<style>
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}

.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
}
</style>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__7() {
    const styles = __vue_create_injector__7.styles || (__vue_create_injector__7.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7({render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7}, __vue_inject_styles__7, __vue_script__7, __vue_scope_id__7, __vue_is_functional_template__7, __vue_module_identifier__7, false, __vue_create_injector__7, void 0, void 0);
  var FileUploader_default = __vue_component__7;

  // ../chdnext/chdnext/public/js/chdnext/file_uploader/index.js
  var FileUploader = class {
    constructor({
      wrapper,
      method,
      on_success,
      doctype,
      docname,
      fieldname,
      files,
      folder,
      restrictions,
      upload_notes,
      allow_multiple,
      as_dataurl,
      disable_file_browser,
      attach_doc_image,
      frm
    } = {}) {
      frm && frm.attachments.max_reached(true);
      if (!wrapper) {
        this.make_dialog();
      } else {
        this.wrapper = wrapper.get ? wrapper.get(0) : wrapper;
      }
      if (attach_doc_image) {
        restrictions.allowed_file_types = ["image/jpeg", "image/png"];
      }
      this.$fileuploader = new Vue({
        el: this.wrapper,
        render: (h) => h(FileUploader_default, {
          props: {
            show_upload_button: !Boolean(this.dialog),
            doctype,
            docname,
            fieldname,
            method,
            folder,
            on_success,
            restrictions,
            upload_notes,
            allow_multiple,
            as_dataurl,
            disable_file_browser,
            attach_doc_image
          }
        })
      });
      this.uploader = this.$fileuploader.$children[0];
      this.uploader.$watch("files", (files2) => {
        let all_private = files2.every((file) => file.private);
        if (this.dialog) {
          this.dialog.set_secondary_action_label(all_private ? __("Set all public") : __("Set all private"));
        }
      }, {deep: true});
      this.uploader.$watch("trigger_upload", (trigger_upload) => {
        if (trigger_upload) {
          this.upload_files();
        }
      });
      this.uploader.$watch("close_dialog", (close_dialog) => {
        if (close_dialog) {
          this.dialog && this.dialog.hide();
        }
      });
      this.uploader.$watch("hide_dialog_footer", (hide_dialog_footer) => {
        if (hide_dialog_footer) {
          this.dialog && this.dialog.footer.addClass("hide");
          this.dialog.$wrapper.data("bs.modal")._config.backdrop = "static";
        } else {
          this.dialog && this.dialog.footer.removeClass("hide");
          this.dialog.$wrapper.data("bs.modal")._config.backdrop = true;
        }
      });
      if (files && files.length) {
        this.uploader.add_files(files);
      }
    }
    upload_files() {
      this.dialog && this.dialog.get_primary_btn().prop("disabled", true);
      this.dialog && this.dialog.get_secondary_btn().prop("disabled", true);
      return this.uploader.upload_files();
    }
    make_dialog() {
      this.dialog = new frappe.ui.Dialog({
        title: __("Upload"),
        primary_action_label: __("Upload"),
        primary_action: () => this.upload_files(),
        secondary_action_label: __("Set all private"),
        secondary_action: () => {
          this.uploader.toggle_all_private();
        }
      });
      this.wrapper = this.dialog.body;
      this.dialog.show();
      this.dialog.$wrapper.on("hidden.bs.modal", function() {
        $(this).data("bs.modal", null);
        $(this).remove();
      });
    }
  };
  var file_uploader_default = FileUploader;

  // ../chdnext/chdnext/public/js/chdnext/upload.js
  frappe.provide("frappe.ui");
  frappe.ui.FileUploader = file_uploader_default;
})();
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
//# sourceMappingURL=main.bundle.EC6RUBJO.js.map
