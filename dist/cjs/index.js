require("./index.css");
var $bDPUV$react = require("react");
var $bDPUV$reactdom = require("react-dom");
var $bDPUV$brace = require("brace");
var $bDPUV$reactace = require("react-ace");
var $bDPUV$reactframecomponent = require("react-frame-component");
require("brace/mode/jsx");
require("brace/theme/monokai");
var $bDPUV$reactjsxruntime = require("react/jsx-runtime");

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
parcelRequire.register("fK6f9", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $b75ffeb1891f1dd5$var$_react = $b75ffeb1891f1dd5$var$_interopRequireDefault($bDPUV$react);
function $b75ffeb1891f1dd5$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $b75ffeb1891f1dd5$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $b75ffeb1891f1dd5$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $b75ffeb1891f1dd5$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $b75ffeb1891f1dd5$var$_typeof(obj);
}
function $b75ffeb1891f1dd5$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $b75ffeb1891f1dd5$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $b75ffeb1891f1dd5$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $b75ffeb1891f1dd5$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $b75ffeb1891f1dd5$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $b75ffeb1891f1dd5$var$_possibleConstructorReturn(self, call) {
    if (call && ($b75ffeb1891f1dd5$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $b75ffeb1891f1dd5$var$_assertThisInitialized(self);
}
function $b75ffeb1891f1dd5$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $b75ffeb1891f1dd5$var$_getPrototypeOf(o) {
    $b75ffeb1891f1dd5$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $b75ffeb1891f1dd5$var$_getPrototypeOf(o);
}
function $b75ffeb1891f1dd5$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $b75ffeb1891f1dd5$var$_setPrototypeOf(subClass, superClass);
}
function $b75ffeb1891f1dd5$var$_setPrototypeOf(o, p) {
    $b75ffeb1891f1dd5$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $b75ffeb1891f1dd5$var$_setPrototypeOf(o, p);
}
var $b75ffeb1891f1dd5$var$DefaultWrapper = function DefaultWrapper(props) {
    return $b75ffeb1891f1dd5$var$_react["default"].createElement("div", null, props.children);
};
var $b75ffeb1891f1dd5$var$ComponentRenderer = /*#__PURE__*/ function(_React$Component) {
    $b75ffeb1891f1dd5$var$_inherits(ComponentRenderer, _React$Component);
    function ComponentRenderer(props) {
        var _this;
        $b75ffeb1891f1dd5$var$_classCallCheck(this, ComponentRenderer);
        _this = $b75ffeb1891f1dd5$var$_possibleConstructorReturn(this, $b75ffeb1891f1dd5$var$_getPrototypeOf(ComponentRenderer).call(this, props));
        _this.Wrapper = window._CustomWrapper || $b75ffeb1891f1dd5$var$DefaultWrapper;
        _this.state = {
            hasError: false,
            error: null
        };
        return _this;
    }
    $b75ffeb1891f1dd5$var$_createClass(ComponentRenderer, [
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
                return $b75ffeb1891f1dd5$var$_react["default"].createElement(this.Wrapper, this.props, children);
            }
        }
    ]);
    return ComponentRenderer;
}($b75ffeb1891f1dd5$var$_react["default"].Component);
var $b75ffeb1891f1dd5$var$_default = $b75ffeb1891f1dd5$var$ComponentRenderer;
module.exports["default"] = $b75ffeb1891f1dd5$var$_default;

});



var $b318354194e01438$exports = {};
"use strict";
Object.defineProperty($b318354194e01438$exports, "__esModule", {
    value: true
});
$b318354194e01438$exports["default"] = void 0;

var $b318354194e01438$var$_react = $b318354194e01438$var$_interopRequireDefault($bDPUV$react);

var $b318354194e01438$var$_brace = $b318354194e01438$var$_interopRequireDefault($bDPUV$brace);

var $b318354194e01438$var$_reactAce = $b318354194e01438$var$_interopRequireDefault($bDPUV$reactace);

var $b318354194e01438$var$_reactFrameComponent = $b318354194e01438$var$_interopRequireWildcard($bDPUV$reactframecomponent);



var $b318354194e01438$var$_componentRenderer = $b318354194e01438$var$_interopRequireDefault((parcelRequire("fK6f9")));
function $b318354194e01438$var$_interopRequireWildcard(obj) {
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
function $b318354194e01438$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $b318354194e01438$var$_typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $b318354194e01438$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $b318354194e01438$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $b318354194e01438$var$_typeof(obj);
}
function $b318354194e01438$var$_objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $b318354194e01438$var$_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function $b318354194e01438$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $b318354194e01438$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $b318354194e01438$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $b318354194e01438$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $b318354194e01438$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $b318354194e01438$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $b318354194e01438$var$_possibleConstructorReturn(self, call) {
    if (call && ($b318354194e01438$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $b318354194e01438$var$_assertThisInitialized(self);
}
function $b318354194e01438$var$_getPrototypeOf(o) {
    $b318354194e01438$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $b318354194e01438$var$_getPrototypeOf(o);
}
function $b318354194e01438$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $b318354194e01438$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $b318354194e01438$var$_setPrototypeOf(subClass, superClass);
}
function $b318354194e01438$var$_setPrototypeOf(o, p) {
    $b318354194e01438$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $b318354194e01438$var$_setPrototypeOf(o, p);
}
window.component = null;
var $b318354194e01438$var$Wrapper = /*#__PURE__*/ function(_React$Component) {
    $b318354194e01438$var$_inherits(Wrapper, _React$Component);
    function Wrapper(props) {
        var _this;
        $b318354194e01438$var$_classCallCheck(this, Wrapper);
        _this = $b318354194e01438$var$_possibleConstructorReturn(this, $b318354194e01438$var$_getPrototypeOf(Wrapper).call(this, props));
        window.component = window.component || {};
        _this.iframeRef = $b318354194e01438$var$_react["default"].createRef();
        _this.handleChange = _this.handleChange.bind($b318354194e01438$var$_assertThisInitialized(_this));
        _this.toggleEditor = _this.toggleEditor.bind($b318354194e01438$var$_assertThisInitialized(_this));
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
    $b318354194e01438$var$_createClass(Wrapper, [
        {
            key: "executeScript",
            value: function executeScript(source) {
                var uniqId = this.props.uniqId;
                var script = document.createElement("script");
                var self = this;
                script.onload = script.onerror = function() {
                    this.remove();
                    self.setState(function(state) {
                        return $b318354194e01438$var$_objectSpread2({}, state, {
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
                    return $b318354194e01438$var$_objectSpread2({}, state, {
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
                    return $b318354194e01438$var$_objectSpread2({}, state, {
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
                return $b318354194e01438$var$_react["default"].createElement("div", null, $b318354194e01438$var$_react["default"].createElement($b318354194e01438$var$_reactFrameComponent["default"], {
                    className: "component-wrapper",
                    ref: this.iframeRef,
                    style: {
                        width: "100%",
                        height: height
                    },
                    onLoad: this.computeHeight()
                }, $b318354194e01438$var$_react["default"].createElement("link", {
                    type: "text/css",
                    rel: "stylesheet",
                    href: "./build/entry.css"
                }), $b318354194e01438$var$_react["default"].createElement($b318354194e01438$var$_reactFrameComponent.FrameContextConsumer, null, function(frameContext) {
                    return $b318354194e01438$var$_react["default"].createElement($b318354194e01438$var$_componentRenderer["default"], {
                        frameContext: frameContext
                    }, component);
                })), $b318354194e01438$var$_react["default"].createElement("div", {
                    className: "bd__button"
                }, $b318354194e01438$var$_react["default"].createElement("a", {
                    href: "#",
                    onClick: this.toggleEditor
                }, "Modify Example Code")), showEditor ? $b318354194e01438$var$_react["default"].createElement("div", {
                    className: "field"
                }, $b318354194e01438$var$_react["default"].createElement($b318354194e01438$var$_reactAce["default"], {
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
}($b318354194e01438$var$_react["default"].Component);
var $b318354194e01438$var$_default = function _default(props) {
    return $b318354194e01438$var$_react["default"].createElement($b318354194e01438$var$Wrapper, props);
};
$b318354194e01438$exports["default"] = $b318354194e01438$var$_default;




var $1b2b4d9e863be928$exports = {};

$parcel$export($1b2b4d9e863be928$exports, "Button", () => $1b2b4d9e863be928$export$353f5b6fc5456de1, (v) => $1b2b4d9e863be928$export$353f5b6fc5456de1 = v);


var $1b2b4d9e863be928$var$__rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const $1b2b4d9e863be928$export$353f5b6fc5456de1 = (_a)=>{
    var { variant: variant = "primary"  } = _a, props = $1b2b4d9e863be928$var$__rest(_a, [
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
    return (0, $bDPUV$reactjsxruntime.jsx)("button", Object.assign({
        style: _style
    }, props, {
        children: children
    }));
};


var $d233c9262c517674$exports = {};

$parcel$export($d233c9262c517674$exports, "TextField", () => $d233c9262c517674$export$2c73285ae9390cec, (v) => $d233c9262c517674$export$2c73285ae9390cec = v);


var $d233c9262c517674$var$__rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const $d233c9262c517674$var$TextFieldStyle = {
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "4px",
    border: "1px solid #282c34",
    width: "100%"
};
const $d233c9262c517674$export$2c73285ae9390cec = (_a)=>{
    var props = $d233c9262c517674$var$__rest(_a, []);
    const { style: style  } = props;
    const _style = style || $d233c9262c517674$var$TextFieldStyle;
    return (0, $bDPUV$reactjsxruntime.jsx)("div", Object.assign({
        style: _style
    }, {
        children: (0, $bDPUV$reactjsxruntime.jsx)("input", Object.assign({
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
window.React = (0, ($parcel$interopDefault($bDPUV$react)));
window.ReactDOM = (0, ($parcel$interopDefault($bDPUV$reactdom)));
window.ReactWrapper = (0, (/*@__PURE__*/$parcel$interopDefault($b318354194e01438$exports)));
reactComponents["Button"] = (0, (/*@__PURE__*/$parcel$interopDefault($1b2b4d9e863be928$exports)));
reactComponents["TextField"] = (0, (/*@__PURE__*/$parcel$interopDefault($d233c9262c517674$exports)));


//# sourceMappingURL=index.js.map
