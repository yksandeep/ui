import "./index.css";
import $KFbeF$react1, * as $KFbeF$react from "react";
import $KFbeF$reactdom from "react-dom";
import * as $KFbeF$brace from "brace";
import * as $KFbeF$reactace from "react-ace";
import * as $KFbeF$reactframecomponent from "react-frame-component";
import "brace/mode/jsx";
import "brace/theme/monokai";
import {jsx as $KFbeF$jsx} from "react/jsx-runtime";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire6725"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire6725"] = parcelRequire;
}
parcelRequire.register("cBxYU", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $92d34cbcd9433a0b$var$_react = $92d34cbcd9433a0b$var$_interopRequireDefault($KFbeF$react);
function $92d34cbcd9433a0b$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $92d34cbcd9433a0b$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $92d34cbcd9433a0b$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $92d34cbcd9433a0b$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $92d34cbcd9433a0b$var$_typeof(obj);
}
function $92d34cbcd9433a0b$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $92d34cbcd9433a0b$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $92d34cbcd9433a0b$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $92d34cbcd9433a0b$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $92d34cbcd9433a0b$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $92d34cbcd9433a0b$var$_possibleConstructorReturn(self, call) {
    if (call && ($92d34cbcd9433a0b$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $92d34cbcd9433a0b$var$_assertThisInitialized(self);
}
function $92d34cbcd9433a0b$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $92d34cbcd9433a0b$var$_getPrototypeOf(o) {
    $92d34cbcd9433a0b$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $92d34cbcd9433a0b$var$_getPrototypeOf(o);
}
function $92d34cbcd9433a0b$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $92d34cbcd9433a0b$var$_setPrototypeOf(subClass, superClass);
}
function $92d34cbcd9433a0b$var$_setPrototypeOf(o, p) {
    $92d34cbcd9433a0b$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $92d34cbcd9433a0b$var$_setPrototypeOf(o, p);
}
var $92d34cbcd9433a0b$var$DefaultWrapper = function DefaultWrapper(props) {
    return $92d34cbcd9433a0b$var$_react["default"].createElement("div", null, props.children);
};
var $92d34cbcd9433a0b$var$ComponentRenderer = /*#__PURE__*/ function(_React$Component) {
    $92d34cbcd9433a0b$var$_inherits(ComponentRenderer, _React$Component);
    function ComponentRenderer(props) {
        var _this;
        $92d34cbcd9433a0b$var$_classCallCheck(this, ComponentRenderer);
        _this = $92d34cbcd9433a0b$var$_possibleConstructorReturn(this, $92d34cbcd9433a0b$var$_getPrototypeOf(ComponentRenderer).call(this, props));
        _this.Wrapper = window._CustomWrapper || $92d34cbcd9433a0b$var$DefaultWrapper;
        _this.state = {
            hasError: false,
            error: null
        };
        return _this;
    }
    $92d34cbcd9433a0b$var$_createClass(ComponentRenderer, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error) {
                console.log(error.message);
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return $92d34cbcd9433a0b$var$_react["default"].createElement(this.Wrapper, this.props, children);
            }
        }
    ]);
    return ComponentRenderer;
}($92d34cbcd9433a0b$var$_react["default"].Component);
var $92d34cbcd9433a0b$var$_default = $92d34cbcd9433a0b$var$ComponentRenderer;
module.exports["default"] = $92d34cbcd9433a0b$var$_default;

});



var $036eb554b7cc55dd$exports = {};
"use strict";
Object.defineProperty($036eb554b7cc55dd$exports, "__esModule", {
    value: true
});
$036eb554b7cc55dd$exports["default"] = void 0;

var $036eb554b7cc55dd$var$_react = $036eb554b7cc55dd$var$_interopRequireDefault($KFbeF$react);

var $036eb554b7cc55dd$var$_brace = $036eb554b7cc55dd$var$_interopRequireDefault($KFbeF$brace);

var $036eb554b7cc55dd$var$_reactAce = $036eb554b7cc55dd$var$_interopRequireDefault($KFbeF$reactace);

var $036eb554b7cc55dd$var$_reactFrameComponent = $036eb554b7cc55dd$var$_interopRequireWildcard($KFbeF$reactframecomponent);



var $036eb554b7cc55dd$var$_componentRenderer = $036eb554b7cc55dd$var$_interopRequireDefault((parcelRequire("cBxYU")));
function $036eb554b7cc55dd$var$_interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj["default"] = obj;
        return newObj;
    }
}
function $036eb554b7cc55dd$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $036eb554b7cc55dd$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $036eb554b7cc55dd$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $036eb554b7cc55dd$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $036eb554b7cc55dd$var$_typeof(obj);
}
function $036eb554b7cc55dd$var$_objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $036eb554b7cc55dd$var$_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function $036eb554b7cc55dd$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $036eb554b7cc55dd$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $036eb554b7cc55dd$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $036eb554b7cc55dd$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $036eb554b7cc55dd$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $036eb554b7cc55dd$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $036eb554b7cc55dd$var$_possibleConstructorReturn(self, call) {
    if (call && ($036eb554b7cc55dd$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $036eb554b7cc55dd$var$_assertThisInitialized(self);
}
function $036eb554b7cc55dd$var$_getPrototypeOf(o) {
    $036eb554b7cc55dd$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $036eb554b7cc55dd$var$_getPrototypeOf(o);
}
function $036eb554b7cc55dd$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $036eb554b7cc55dd$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $036eb554b7cc55dd$var$_setPrototypeOf(subClass, superClass);
}
function $036eb554b7cc55dd$var$_setPrototypeOf(o, p) {
    $036eb554b7cc55dd$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $036eb554b7cc55dd$var$_setPrototypeOf(o, p);
}
window.component = null;
var $036eb554b7cc55dd$var$Wrapper = /*#__PURE__*/ function(_React$Component) {
    $036eb554b7cc55dd$var$_inherits(Wrapper, _React$Component);
    function Wrapper(props) {
        var _this;
        $036eb554b7cc55dd$var$_classCallCheck(this, Wrapper);
        _this = $036eb554b7cc55dd$var$_possibleConstructorReturn(this, $036eb554b7cc55dd$var$_getPrototypeOf(Wrapper).call(this, props));
        window.component = window.component || {};
        _this.iframeRef = $036eb554b7cc55dd$var$_react["default"].createRef();
        _this.handleChange = _this.handleChange.bind($036eb554b7cc55dd$var$_assertThisInitialized(_this));
        _this.toggleEditor = _this.toggleEditor.bind($036eb554b7cc55dd$var$_assertThisInitialized(_this));
        var example = props.example;
        example = example || "return (<div>Example</div>)";
        _this.state = {
            example: example,
            height: 200,
            showEditor: false
        };
        _this.executeScript(example);
        return _this;
    }
    $036eb554b7cc55dd$var$_createClass(Wrapper, [
        {
            key: "executeScript",
            value: function executeScript(source) {
                var uniqId = this.props.uniqId;
                var script = document.createElement("script");
                var self = this;
                script.onload = script.onerror = function() {
                    this.remove();
                    self.setState(function(state) {
                        return $036eb554b7cc55dd$var$_objectSpread2({}, state, {
                            component: window.component[uniqId] || ""
                        });
                    });
                };
                var wrapper = "window.component['".concat(uniqId, "'] = (() => {\n      ").concat(Object.keys(reactComponents).map(function(k) {
                    return "const ".concat(k, " = reactComponents['").concat(k, "'];");
                }).join("\n"), "\n      try {\n        ").concat(source, "\n      } catch (error) {\n        console.log(error)\n      }\n    })()");
                try {
                    var src = Babel.transform(wrapper, {
                        presets: [
                            "react",
                            "es2015"
                        ]
                    }).code;
                    script.src = "data:text/plain;base64," + btoa(src);
                } catch (error) {
                    console.log(error);
                }
                document.body.appendChild(script);
            }
        },
        {
            key: "handleChange",
            value: function handleChange(code) {
                this.executeScript(code);
                this.setState(function(state) {
                    return $036eb554b7cc55dd$var$_objectSpread2({}, state, {
                        example: code
                    });
                });
            }
        },
        {
            key: "computeHeight",
            value: function computeHeight() {
                var height = this.state.height;
                var padding = 5; // buffer for any unstyled margins
                if (this.iframeRef.current && this.iframeRef.current.node.contentDocument && this.iframeRef.current.node.contentDocument.body.offsetHeight !== 0 && this.iframeRef.current.node.contentDocument.body.offsetHeight !== height - padding) this.setState({
                    height: this.iframeRef.current.node.contentDocument.body.offsetHeight + padding
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.computeHeight();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                this.heightInterval = setInterval(function() {
                    _this2.computeHeight();
                }, 1000);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                clearInterval(this.heightInterval);
            }
        },
        {
            key: "toggleEditor",
            value: function toggleEditor(event) {
                event.preventDefault();
                this.setState(function(state) {
                    return $036eb554b7cc55dd$var$_objectSpread2({}, state, {
                        showEditor: !state.showEditor
                    });
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var _this$state = this.state, component = _this$state.component, height = _this$state.height, showEditor = _this$state.showEditor;
                return $036eb554b7cc55dd$var$_react["default"].createElement("div", null, $036eb554b7cc55dd$var$_react["default"].createElement($036eb554b7cc55dd$var$_reactFrameComponent["default"], {
                    className: "component-wrapper",
                    ref: this.iframeRef,
                    style: {
                        width: "100%",
                        height: height
                    },
                    onLoad: this.computeHeight()
                }, $036eb554b7cc55dd$var$_react["default"].createElement("link", {
                    type: "text/css",
                    rel: "stylesheet",
                    href: "./build/entry.css"
                }), $036eb554b7cc55dd$var$_react["default"].createElement($036eb554b7cc55dd$var$_reactFrameComponent.FrameContextConsumer, null, function(frameContext) {
                    return $036eb554b7cc55dd$var$_react["default"].createElement($036eb554b7cc55dd$var$_componentRenderer["default"], {
                        frameContext: frameContext
                    }, component);
                })), $036eb554b7cc55dd$var$_react["default"].createElement("div", {
                    className: "bd__button"
                }, $036eb554b7cc55dd$var$_react["default"].createElement("a", {
                    href: "#",
                    onClick: this.toggleEditor
                }, "Modify Example Code")), showEditor ? $036eb554b7cc55dd$var$_react["default"].createElement("div", {
                    className: "field"
                }, $036eb554b7cc55dd$var$_react["default"].createElement($036eb554b7cc55dd$var$_reactAce["default"], {
                    style: {
                        width: "100%",
                        height: "200px",
                        marginBottom: "20px"
                    },
                    value: this.state.example,
                    mode: "jsx",
                    theme: "monokai",
                    onChange: function onChange(code) {
                        return _this3.handleChange(code);
                    },
                    name: "editor-div",
                    editorProps: {
                        $useSoftTabs: true
                    }
                })) : "");
            }
        }
    ]);
    return Wrapper;
}($036eb554b7cc55dd$var$_react["default"].Component);
var $036eb554b7cc55dd$var$_default = function _default(props) {
    return $036eb554b7cc55dd$var$_react["default"].createElement($036eb554b7cc55dd$var$Wrapper, props);
};
$036eb554b7cc55dd$exports["default"] = $036eb554b7cc55dd$var$_default;




var $b4b64bfc09ff32fd$exports = {};

$parcel$export($b4b64bfc09ff32fd$exports, "Button", () => $b4b64bfc09ff32fd$export$353f5b6fc5456de1, (v) => $b4b64bfc09ff32fd$export$353f5b6fc5456de1 = v);


var $b4b64bfc09ff32fd$var$__rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const $b4b64bfc09ff32fd$export$353f5b6fc5456de1 = (_a)=>{
    var { variant: variant = "primary"  } = _a, props = $b4b64bfc09ff32fd$var$__rest(_a, [
        "variant"
    ]);
    const { children: children , style: style  } = props;
    const _style = style || {};
    switch(variant){
        case "primary":
            _style.backgroundColor = "#006E7F";
            _style.color = "#fff";
            break;
        case "secondary":
            _style.backgroundColor = "#F8CB2E";
            _style.color = "#000";
            break;
        case "danger":
            _style.backgroundColor = "#B22727";
            _style.color = "#fff";
            break;
    }
    _style.padding = "5px 10px";
    return (0, $KFbeF$jsx)("button", Object.assign({
        style: _style
    }, props, {
        children: children
    }));
};


var $9a1afb83f7bcc019$exports = {};

$parcel$export($9a1afb83f7bcc019$exports, "TextField", () => $9a1afb83f7bcc019$export$2c73285ae9390cec, (v) => $9a1afb83f7bcc019$export$2c73285ae9390cec = v);


var $9a1afb83f7bcc019$var$__rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const $9a1afb83f7bcc019$var$TextFieldStyle = {
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "4px",
    border: "1px solid #282c34",
    width: "100%"
};
const $9a1afb83f7bcc019$export$2c73285ae9390cec = (_a)=>{
    var props = $9a1afb83f7bcc019$var$__rest(_a, []);
    const { style: style  } = props;
    const _style = style || $9a1afb83f7bcc019$var$TextFieldStyle;
    return (0, $KFbeF$jsx)("div", Object.assign({
        style: _style
    }, {
        children: (0, $KFbeF$jsx)("input", Object.assign({
            style: {
                outline: "none",
                border: "none",
                width: "100%"
            }
        }, props))
    }));
};


window.reactComponents = {};
window.vueComponents = {};
window.React = (0, $KFbeF$react1);
window.ReactDOM = (0, $KFbeF$reactdom);
window.ReactWrapper = (0, (/*@__PURE__*/$parcel$interopDefault($036eb554b7cc55dd$exports)));
reactComponents["Button"] = (0, (/*@__PURE__*/$parcel$interopDefault($b4b64bfc09ff32fd$exports)));
reactComponents["TextField"] = (0, (/*@__PURE__*/$parcel$interopDefault($9a1afb83f7bcc019$exports)));


//# sourceMappingURL=index.js.map
