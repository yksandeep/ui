import "./index.css";
import $KFbeF$react1, * as $KFbeF$react from "react";
import $KFbeF$reactdom from "react-dom";
import * as $KFbeF$brace from "brace";
import * as $KFbeF$reactace from "react-ace";
import * as $KFbeF$reactframecomponent from "react-frame-component";
import "brace/mode/jsx";
import "brace/theme/monokai";
import {jsxs as $KFbeF$jsxs, jsx as $KFbeF$jsx} from "react/jsx-runtime";
import $KFbeF$styledcomponents from "styled-components";

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







const $9f0b56cfd019faab$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $9f0b56cfd019faab$var$CLink = $9f0b56cfd019faab$export$60332b2344f7fe41.withComponent("a");
const $9f0b56cfd019faab$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($9f0b56cfd019faab$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $363d9fb5caf1b0fe$export$425ce3ef4cdbf755 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $9f0b56cfd019faab$export$60332b2344f7fe41), {
                children: "Demo Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $9f0b56cfd019faab$export$94b4c87f5c7de894), Object.assign({
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
var $363d9fb5caf1b0fe$export$2e2bcd8739ae039 = $363d9fb5caf1b0fe$export$425ce3ef4cdbf755;





const $f2f3939f60c24c4a$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $f2f3939f60c24c4a$var$CLink = $f2f3939f60c24c4a$export$60332b2344f7fe41.withComponent("a");
const $f2f3939f60c24c4a$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($f2f3939f60c24c4a$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $4da7ddc087ecd411$export$637dc98eed5e9c43 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $f2f3939f60c24c4a$export$60332b2344f7fe41), {
                children: "Demo2 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $f2f3939f60c24c4a$export$94b4c87f5c7de894), Object.assign({
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
var $4da7ddc087ecd411$export$2e2bcd8739ae039 = $4da7ddc087ecd411$export$637dc98eed5e9c43;





const $47d471d36abb4299$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $47d471d36abb4299$var$CLink = $47d471d36abb4299$export$60332b2344f7fe41.withComponent("a");
const $47d471d36abb4299$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($47d471d36abb4299$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $bd4d2cab1a0a7c44$export$45c607991fee356f = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $47d471d36abb4299$export$60332b2344f7fe41), {
                children: "Demo3 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $47d471d36abb4299$export$94b4c87f5c7de894), Object.assign({
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
var $bd4d2cab1a0a7c44$export$2e2bcd8739ae039 = $bd4d2cab1a0a7c44$export$45c607991fee356f;





const $1ea86ac8d4d01c82$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $1ea86ac8d4d01c82$var$CLink = $1ea86ac8d4d01c82$export$60332b2344f7fe41.withComponent("a");
const $1ea86ac8d4d01c82$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($1ea86ac8d4d01c82$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $260438344695e9fc$export$514f206bd1471c2c = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $1ea86ac8d4d01c82$export$60332b2344f7fe41), {
                children: "Demo4 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $1ea86ac8d4d01c82$export$94b4c87f5c7de894), Object.assign({
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
var $260438344695e9fc$export$2e2bcd8739ae039 = $260438344695e9fc$export$514f206bd1471c2c;





const $5dbc2ec80479e6f7$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $5dbc2ec80479e6f7$var$CLink = $5dbc2ec80479e6f7$export$60332b2344f7fe41.withComponent("a");
const $5dbc2ec80479e6f7$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($5dbc2ec80479e6f7$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $e1bfe63348ea2d5b$export$828a4cd7248da115 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $5dbc2ec80479e6f7$export$60332b2344f7fe41), {
                children: "Demo5 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $5dbc2ec80479e6f7$export$94b4c87f5c7de894), Object.assign({
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
var $e1bfe63348ea2d5b$export$2e2bcd8739ae039 = $e1bfe63348ea2d5b$export$828a4cd7248da115;





const $d965ea69f4876245$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $d965ea69f4876245$var$CLink = $d965ea69f4876245$export$60332b2344f7fe41.withComponent("a");
const $d965ea69f4876245$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($d965ea69f4876245$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $ee6566a38184903c$export$8a4c6e20bcfe4525 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $d965ea69f4876245$export$60332b2344f7fe41), {
                children: "Demo6 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $d965ea69f4876245$export$94b4c87f5c7de894), Object.assign({
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
var $ee6566a38184903c$export$2e2bcd8739ae039 = $ee6566a38184903c$export$8a4c6e20bcfe4525;





const $a487db7190a15359$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $a487db7190a15359$var$CLink = $a487db7190a15359$export$60332b2344f7fe41.withComponent("a");
const $a487db7190a15359$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($a487db7190a15359$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $72655230370d5dc0$export$e707661d2292ffc2 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $a487db7190a15359$export$60332b2344f7fe41), {
                children: "Demo7 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $a487db7190a15359$export$94b4c87f5c7de894), Object.assign({
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
var $72655230370d5dc0$export$2e2bcd8739ae039 = $72655230370d5dc0$export$e707661d2292ffc2;





const $032fee68359a15b8$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $032fee68359a15b8$var$CLink = $032fee68359a15b8$export$60332b2344f7fe41.withComponent("a");
const $032fee68359a15b8$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($032fee68359a15b8$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $4aa2c01f75d160f3$export$fd0ca4cfd9b46415 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $032fee68359a15b8$export$60332b2344f7fe41), {
                children: "Demo8 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $032fee68359a15b8$export$94b4c87f5c7de894), Object.assign({
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
var $4aa2c01f75d160f3$export$2e2bcd8739ae039 = $4aa2c01f75d160f3$export$fd0ca4cfd9b46415;





const $ee1c747f8807187b$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $ee1c747f8807187b$var$CLink = $ee1c747f8807187b$export$60332b2344f7fe41.withComponent("a");
const $ee1c747f8807187b$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($ee1c747f8807187b$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $5641ed3d38835ddc$export$f03a3da580f473c0 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $ee1c747f8807187b$export$60332b2344f7fe41), {
                children: "Demo9 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $ee1c747f8807187b$export$94b4c87f5c7de894), Object.assign({
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
var $5641ed3d38835ddc$export$2e2bcd8739ae039 = $5641ed3d38835ddc$export$f03a3da580f473c0;





const $dba83ee998a582c6$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $dba83ee998a582c6$var$CLink = $dba83ee998a582c6$export$60332b2344f7fe41.withComponent("a");
const $dba83ee998a582c6$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($dba83ee998a582c6$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $a95aca81e55bda60$export$a9e0ee7fff861e6c = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $dba83ee998a582c6$export$60332b2344f7fe41), {
                children: "Demo10 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $dba83ee998a582c6$export$94b4c87f5c7de894), Object.assign({
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
var $a95aca81e55bda60$export$2e2bcd8739ae039 = $a95aca81e55bda60$export$a9e0ee7fff861e6c;





const $4f6a3116462d2a25$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $4f6a3116462d2a25$var$CLink = $4f6a3116462d2a25$export$60332b2344f7fe41.withComponent("a");
const $4f6a3116462d2a25$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($4f6a3116462d2a25$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $76bc8817e30b2eaa$export$3b5f4ae6f7e235ff = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $4f6a3116462d2a25$export$60332b2344f7fe41), {
                children: "Demo11 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $4f6a3116462d2a25$export$94b4c87f5c7de894), Object.assign({
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
var $76bc8817e30b2eaa$export$2e2bcd8739ae039 = $76bc8817e30b2eaa$export$3b5f4ae6f7e235ff;





const $0b9260fd58cdc3b3$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $0b9260fd58cdc3b3$var$CLink = $0b9260fd58cdc3b3$export$60332b2344f7fe41.withComponent("a");
const $0b9260fd58cdc3b3$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($0b9260fd58cdc3b3$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $036c1b296dd80815$export$4cf18d483db29669 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $0b9260fd58cdc3b3$export$60332b2344f7fe41), {
                children: "Demo12 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $0b9260fd58cdc3b3$export$94b4c87f5c7de894), Object.assign({
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
var $036c1b296dd80815$export$2e2bcd8739ae039 = $036c1b296dd80815$export$4cf18d483db29669;





const $1bad68cb5ad99d91$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $1bad68cb5ad99d91$var$CLink = $1bad68cb5ad99d91$export$60332b2344f7fe41.withComponent("a");
const $1bad68cb5ad99d91$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($1bad68cb5ad99d91$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $fe092a2b44134315$export$dfe5111104f78e73 = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $1bad68cb5ad99d91$export$60332b2344f7fe41), {
                children: "Demo13 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $1bad68cb5ad99d91$export$94b4c87f5c7de894), Object.assign({
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
var $fe092a2b44134315$export$2e2bcd8739ae039 = $fe092a2b44134315$export$dfe5111104f78e73;





const $8268706ca70f528b$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $8268706ca70f528b$var$CLink = $8268706ca70f528b$export$60332b2344f7fe41.withComponent("a");
const $8268706ca70f528b$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($8268706ca70f528b$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $24c78f736182f732$export$915e5aa92b496c0c = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $8268706ca70f528b$export$60332b2344f7fe41), {
                children: "Demo14 Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $8268706ca70f528b$export$94b4c87f5c7de894), Object.assign({
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
var $24c78f736182f732$export$2e2bcd8739ae039 = $24c78f736182f732$export$915e5aa92b496c0c;





const $ca6d23f7399cfc58$export$60332b2344f7fe41 = (0, $KFbeF$styledcomponents).div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const $ca6d23f7399cfc58$var$CLink = $ca6d23f7399cfc58$export$60332b2344f7fe41.withComponent("a");
const $ca6d23f7399cfc58$export$94b4c87f5c7de894 = (0, $KFbeF$styledcomponents)($ca6d23f7399cfc58$var$CLink)`
  display: block;

  &:hover {
    border-color: slategray;
  }
`;


const $8bb2fc18b65cedb7$export$1b16fc9eb974a84d = ({ sampleTextProp: sampleTextProp  })=>{
    return (0, $KFbeF$jsxs)("div", Object.assign({
        style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            padding: "20px"
        }
    }, {
        children: [
            (0, $KFbeF$jsx)("p", {
                children: "Card with DIV HTML Tag"
            }),
            (0, $KFbeF$jsx)((0, $ca6d23f7399cfc58$export$60332b2344f7fe41), {
                children: "Test Component "
            }),
            (0, $KFbeF$jsx)("p", {
                children: "Card with Anchor link (a) HTML Tag"
            }),
            (0, $KFbeF$jsxs)((0, $ca6d23f7399cfc58$export$94b4c87f5c7de894), Object.assign({
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
var $8bb2fc18b65cedb7$export$2e2bcd8739ae039 = $8bb2fc18b65cedb7$export$1b16fc9eb974a84d;


window.reactComponents = {};
window.vueComponents = {};
window.React = (0, $KFbeF$react1);
window.ReactDOM = (0, $KFbeF$reactdom);
window.ReactWrapper = (0, (/*@__PURE__*/$parcel$interopDefault($036eb554b7cc55dd$exports)));
reactComponents["Demo"] = (0, $363d9fb5caf1b0fe$export$2e2bcd8739ae039);
reactComponents["Demo2"] = (0, $4da7ddc087ecd411$export$2e2bcd8739ae039);
reactComponents["Demo3"] = (0, $bd4d2cab1a0a7c44$export$2e2bcd8739ae039);
reactComponents["Demo4"] = (0, $260438344695e9fc$export$2e2bcd8739ae039);
reactComponents["Demo5"] = (0, $e1bfe63348ea2d5b$export$2e2bcd8739ae039);
reactComponents["Demo6"] = (0, $ee6566a38184903c$export$2e2bcd8739ae039);
reactComponents["Demo7"] = (0, $72655230370d5dc0$export$2e2bcd8739ae039);
reactComponents["Demo8"] = (0, $4aa2c01f75d160f3$export$2e2bcd8739ae039);
reactComponents["Demo9"] = (0, $5641ed3d38835ddc$export$2e2bcd8739ae039);
reactComponents["Demo10"] = (0, $a95aca81e55bda60$export$2e2bcd8739ae039);
reactComponents["Demo11"] = (0, $76bc8817e30b2eaa$export$2e2bcd8739ae039);
reactComponents["Demo12"] = (0, $036c1b296dd80815$export$2e2bcd8739ae039);
reactComponents["Demo13"] = (0, $fe092a2b44134315$export$2e2bcd8739ae039);
reactComponents["Demo14"] = (0, $24c78f736182f732$export$2e2bcd8739ae039);
reactComponents["Test"] = (0, $8bb2fc18b65cedb7$export$2e2bcd8739ae039);


//# sourceMappingURL=index.js.map
