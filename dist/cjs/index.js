require("./index.css");
var $bDPUV$react = require("react");
var $bDPUV$reactdom = require("react-dom");
var $bDPUV$brace = require("brace");
var $bDPUV$reactace = require("react-ace");
var $bDPUV$reactframecomponent = require("react-frame-component");
require("brace/mode/jsx");
require("brace/theme/monokai");
var $bDPUV$reactjsxruntime = require("react/jsx-runtime");
var $bDPUV$styledcomponents = require("styled-components");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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







const $6efddf785acba2da$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $6efddf785acba2da$var$CLink = $6efddf785acba2da$export$60332b2344f7fe41.withComponent("a");
const $6efddf785acba2da$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($6efddf785acba2da$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $960eb45cf463ac7a$export$425ce3ef4cdbf755 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $6efddf785acba2da$export$60332b2344f7fe41), {
                children: "Demo Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $6efddf785acba2da$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $960eb45cf463ac7a$export$2e2bcd8739ae039 = $960eb45cf463ac7a$export$425ce3ef4cdbf755;





const $254a6d2e8523b03d$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $254a6d2e8523b03d$var$CLink = $254a6d2e8523b03d$export$60332b2344f7fe41.withComponent("a");
const $254a6d2e8523b03d$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($254a6d2e8523b03d$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $8649ace3e4b9f74b$export$637dc98eed5e9c43 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $254a6d2e8523b03d$export$60332b2344f7fe41), {
                children: "Demo2 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $254a6d2e8523b03d$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $8649ace3e4b9f74b$export$2e2bcd8739ae039 = $8649ace3e4b9f74b$export$637dc98eed5e9c43;





const $50c59db9eace09f5$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $50c59db9eace09f5$var$CLink = $50c59db9eace09f5$export$60332b2344f7fe41.withComponent("a");
const $50c59db9eace09f5$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($50c59db9eace09f5$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $f0c9ad497f17e639$export$45c607991fee356f = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $50c59db9eace09f5$export$60332b2344f7fe41), {
                children: "Demo3 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $50c59db9eace09f5$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $f0c9ad497f17e639$export$2e2bcd8739ae039 = $f0c9ad497f17e639$export$45c607991fee356f;





const $48c45b0efedd4bf1$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $48c45b0efedd4bf1$var$CLink = $48c45b0efedd4bf1$export$60332b2344f7fe41.withComponent("a");
const $48c45b0efedd4bf1$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($48c45b0efedd4bf1$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $0abc89f98573ebbc$export$514f206bd1471c2c = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $48c45b0efedd4bf1$export$60332b2344f7fe41), {
                children: "Demo4 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $48c45b0efedd4bf1$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $0abc89f98573ebbc$export$2e2bcd8739ae039 = $0abc89f98573ebbc$export$514f206bd1471c2c;





const $96edb8fafc36f71e$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $96edb8fafc36f71e$var$CLink = $96edb8fafc36f71e$export$60332b2344f7fe41.withComponent("a");
const $96edb8fafc36f71e$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($96edb8fafc36f71e$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $e6b7418123fa4ba6$export$828a4cd7248da115 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $96edb8fafc36f71e$export$60332b2344f7fe41), {
                children: "Demo5 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $96edb8fafc36f71e$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $e6b7418123fa4ba6$export$2e2bcd8739ae039 = $e6b7418123fa4ba6$export$828a4cd7248da115;





const $a98a1d1433e5185a$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $a98a1d1433e5185a$var$CLink = $a98a1d1433e5185a$export$60332b2344f7fe41.withComponent("a");
const $a98a1d1433e5185a$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($a98a1d1433e5185a$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $d40c8859606f14af$export$8a4c6e20bcfe4525 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $a98a1d1433e5185a$export$60332b2344f7fe41), {
                children: "Demo6 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $a98a1d1433e5185a$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $d40c8859606f14af$export$2e2bcd8739ae039 = $d40c8859606f14af$export$8a4c6e20bcfe4525;





const $b35366fb8c8e9ad5$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $b35366fb8c8e9ad5$var$CLink = $b35366fb8c8e9ad5$export$60332b2344f7fe41.withComponent("a");
const $b35366fb8c8e9ad5$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($b35366fb8c8e9ad5$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $cf18a31b917c9662$export$e707661d2292ffc2 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $b35366fb8c8e9ad5$export$60332b2344f7fe41), {
                children: "Demo7 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $b35366fb8c8e9ad5$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $cf18a31b917c9662$export$2e2bcd8739ae039 = $cf18a31b917c9662$export$e707661d2292ffc2;





const $93d38cbfa51bf25a$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $93d38cbfa51bf25a$var$CLink = $93d38cbfa51bf25a$export$60332b2344f7fe41.withComponent("a");
const $93d38cbfa51bf25a$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($93d38cbfa51bf25a$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $4e09d0aa1d6ee2b9$export$fd0ca4cfd9b46415 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $93d38cbfa51bf25a$export$60332b2344f7fe41), {
                children: "Demo8 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $93d38cbfa51bf25a$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $4e09d0aa1d6ee2b9$export$2e2bcd8739ae039 = $4e09d0aa1d6ee2b9$export$fd0ca4cfd9b46415;





const $97ae85a66d1a1dc7$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $97ae85a66d1a1dc7$var$CLink = $97ae85a66d1a1dc7$export$60332b2344f7fe41.withComponent("a");
const $97ae85a66d1a1dc7$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($97ae85a66d1a1dc7$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $652401647f0ba8f2$export$f03a3da580f473c0 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $97ae85a66d1a1dc7$export$60332b2344f7fe41), {
                children: "Demo9 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $97ae85a66d1a1dc7$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $652401647f0ba8f2$export$2e2bcd8739ae039 = $652401647f0ba8f2$export$f03a3da580f473c0;





const $7665c9e8d5c85a4a$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $7665c9e8d5c85a4a$var$CLink = $7665c9e8d5c85a4a$export$60332b2344f7fe41.withComponent("a");
const $7665c9e8d5c85a4a$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($7665c9e8d5c85a4a$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $ba37d44a2b5e5aec$export$a9e0ee7fff861e6c = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $7665c9e8d5c85a4a$export$60332b2344f7fe41), {
                children: "Demo10 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $7665c9e8d5c85a4a$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $ba37d44a2b5e5aec$export$2e2bcd8739ae039 = $ba37d44a2b5e5aec$export$a9e0ee7fff861e6c;





const $08ae74eb03cecdba$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $08ae74eb03cecdba$var$CLink = $08ae74eb03cecdba$export$60332b2344f7fe41.withComponent("a");
const $08ae74eb03cecdba$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($08ae74eb03cecdba$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $599341c192139594$export$3b5f4ae6f7e235ff = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $08ae74eb03cecdba$export$60332b2344f7fe41), {
                children: "Demo11 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $08ae74eb03cecdba$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $599341c192139594$export$2e2bcd8739ae039 = $599341c192139594$export$3b5f4ae6f7e235ff;





const $542c9740df497dbb$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $542c9740df497dbb$var$CLink = $542c9740df497dbb$export$60332b2344f7fe41.withComponent("a");
const $542c9740df497dbb$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($542c9740df497dbb$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $1f8ba8b0a66fff6f$export$4cf18d483db29669 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $542c9740df497dbb$export$60332b2344f7fe41), {
                children: "Demo12 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $542c9740df497dbb$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $1f8ba8b0a66fff6f$export$2e2bcd8739ae039 = $1f8ba8b0a66fff6f$export$4cf18d483db29669;





const $15e4d0a9c0d30498$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $15e4d0a9c0d30498$var$CLink = $15e4d0a9c0d30498$export$60332b2344f7fe41.withComponent("a");
const $15e4d0a9c0d30498$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($15e4d0a9c0d30498$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $b7a19353220aa387$export$dfe5111104f78e73 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $15e4d0a9c0d30498$export$60332b2344f7fe41), {
                children: "Demo13 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $15e4d0a9c0d30498$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $b7a19353220aa387$export$2e2bcd8739ae039 = $b7a19353220aa387$export$dfe5111104f78e73;





const $1c8517dcd04ee9b9$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $1c8517dcd04ee9b9$var$CLink = $1c8517dcd04ee9b9$export$60332b2344f7fe41.withComponent("a");
const $1c8517dcd04ee9b9$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($1c8517dcd04ee9b9$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $6b489c124e5d4e06$export$915e5aa92b496c0c = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $1c8517dcd04ee9b9$export$60332b2344f7fe41), {
                children: "Demo14 Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $1c8517dcd04ee9b9$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $6b489c124e5d4e06$export$2e2bcd8739ae039 = $6b489c124e5d4e06$export$915e5aa92b496c0c;





const $e1a78482f8238e20$export$60332b2344f7fe41 = (0, ($parcel$interopDefault($bDPUV$styledcomponents))).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $e1a78482f8238e20$var$CLink = $e1a78482f8238e20$export$60332b2344f7fe41.withComponent("a");
const $e1a78482f8238e20$export$94b4c87f5c7de894 = (0, ($parcel$interopDefault($bDPUV$styledcomponents)))($e1a78482f8238e20$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $9291ff908006c477$export$1b16fc9eb974a84d = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $bDPUV$reactjsxruntime.jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsx)((0, $e1a78482f8238e20$export$60332b2344f7fe41), {
                children: "Test Component "
            }),
            (0, $bDPUV$reactjsxruntime.jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $bDPUV$reactjsxruntime.jsxs)((0, $e1a78482f8238e20$export$94b4c87f5c7de894), Object.assign({
                href: "#"
            }, {
                children: [
                    sampleTextProp,
                    " Link"
                ]
            }))
        ]
    }));
};
var $9291ff908006c477$export$2e2bcd8739ae039 = $9291ff908006c477$export$1b16fc9eb974a84d;


window.reactComponents = {};
window.vueComponents = {};
window.React = (0, ($parcel$interopDefault($bDPUV$react)));
window.ReactDOM = (0, ($parcel$interopDefault($bDPUV$reactdom)));
window.ReactWrapper = (0, (/*@__PURE__*/$parcel$interopDefault($b318354194e01438$exports)));
reactComponents["Demo"] = (0, $960eb45cf463ac7a$export$2e2bcd8739ae039);
reactComponents["Demo2"] = (0, $8649ace3e4b9f74b$export$2e2bcd8739ae039);
reactComponents["Demo3"] = (0, $f0c9ad497f17e639$export$2e2bcd8739ae039);
reactComponents["Demo4"] = (0, $0abc89f98573ebbc$export$2e2bcd8739ae039);
reactComponents["Demo5"] = (0, $e6b7418123fa4ba6$export$2e2bcd8739ae039);
reactComponents["Demo6"] = (0, $d40c8859606f14af$export$2e2bcd8739ae039);
reactComponents["Demo7"] = (0, $cf18a31b917c9662$export$2e2bcd8739ae039);
reactComponents["Demo8"] = (0, $4e09d0aa1d6ee2b9$export$2e2bcd8739ae039);
reactComponents["Demo9"] = (0, $652401647f0ba8f2$export$2e2bcd8739ae039);
reactComponents["Demo10"] = (0, $ba37d44a2b5e5aec$export$2e2bcd8739ae039);
reactComponents["Demo11"] = (0, $599341c192139594$export$2e2bcd8739ae039);
reactComponents["Demo12"] = (0, $1f8ba8b0a66fff6f$export$2e2bcd8739ae039);
reactComponents["Demo13"] = (0, $b7a19353220aa387$export$2e2bcd8739ae039);
reactComponents["Demo14"] = (0, $6b489c124e5d4e06$export$2e2bcd8739ae039);
reactComponents["Test"] = (0, $9291ff908006c477$export$2e2bcd8739ae039);


//# sourceMappingURL=index.js.map
