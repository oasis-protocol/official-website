webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _config_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/en */ "./config/en.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/lowesyang/Documents/website/the-oasis-website/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var ParticlesParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: "#000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#999"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: "#ccc",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  retina_detect: true
};
i18next__WEBPACK_IMPORTED_MODULE_3__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_4__["initReactI18next"]).init({
  resources: {
    en: {
      translation: _config_en__WEBPACK_IMPORTED_MODULE_5__["default"]
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
function Home() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("en"),
      lang = _useState[0],
      setLang = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var cacheLang = localStorage.getItem("lang");

    if (cacheLang && cacheLang !== lang) {
      setLang(cacheLang);
      i18next__WEBPACK_IMPORTED_MODULE_3__["default"].changeLanguage(cacheLang);
    }
  });

  function languageChange(lang) {
    setLang(lang);
    i18next__WEBPACK_IMPORTED_MODULE_3__["default"].changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  var langText = "";
  if (lang === "cn") langText = "中文";else if (lang === "en") langText = "EN";
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "THE OASIS - Protocol of Cross-Contract Items Transferring"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "THE OASIS protocol blockchain NFT crypto asset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "THE OASIS protocl. Bring you to the ecosystem of NFT asset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "author",
    content: "byterum",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "robots",
    content: "index,follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "google",
    content: "index,follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "googlebot",
    content: "index,follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "verify",
    content: "index,follow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://rsms.me/inter/inter-ui.css",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/default.css",
    id: "theme-color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js",
    crossorigin: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-169399144-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }), __jsx("script", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, "\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-169399144-1');\n  ")), __jsx("div", {
    className: "smart-scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-md navbar-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "navbar-brand heading-black",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, "THE OASIS"), __jsx("button", {
    className: "navbar-toggler navbar-toggler-right border-0",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarCollapse",
    "aria-controls": "navbarCollapse",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx("span", {
    "data-feather": "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarCollapse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "navbar-nav mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }, t("特性"))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#dapps",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, "Dapp")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  }, "FAQ")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#community",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }, t("社区"))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link page-scroll",
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 19
    }
  }, t("合作")))), __jsx("ul", {
    className: "navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "https://github.com/the-oasis-protocol",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-github",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    as: "select",
    size: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 19
    }
  }, __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, "\u4E2D\u6587"), __jsx("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, "English")))), __jsx("form", {
    className: "form-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "btn btn-primary",
    target: "_blank",
    href: "https://docs.theoasis.io",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 17
    }
  }, t("接入文档"))))))), __jsx("div", {
    className: "pt-3",
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row vh-md-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-5 ml-auto my-auto text-center text-md-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text- text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, t("低门槛接入虚拟资产互通的应用生态")), __jsx("h1", {
    className: "display-4 mt-2 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, "THE OASIS - ", t("NFT资产跨应用互通")), __jsx("a", {
    href: "#about",
    className: "btn btn-secondary d-inline-flex flex-row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 15
    }
  }, t("快速入门"), __jsx("em", {
    "data-feather": "chevrons-right",
    width: "20",
    height: "20",
    className: "ml-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-md-6 my-auto pt-5 pt-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: 500,
    params: ParticlesParams,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    id: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 mr-auto text-center text-md-left lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 15
    }
  }, t("THE OASIS协议是一套基于区块链的协议与工具套件。它实现了基于NFT（非同质化通证）的虚拟资产在不同合约间的转移与复用，并提供了封装优良的资产复用、解析工具包"))), __jsx("div", {
    className: "col-md-5 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }, t("现已支持")))), __jsx("div", {
    className: "row mt-5 mb-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-5 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "img/eosio.png",
    width: "120",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  })))))))), __jsx("div", {
    id: "features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-10 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row feature-boxes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-md-6 box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-file-text-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 23
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 19
    }
  }, t("通用资产标准")), __jsx(react_i18next__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
    i18nKey: "standardAsset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }, "THE OASIS\u5236\u5B9A\u4E86\u5177\u5907\u53EF\u6269\u5C55\u6027\u826F\u597D\u7684", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 44
    }
  }, "FT/NFT"), "\u6807\u51C6\u63A5\u53E3\uFF0C\u5E76\u63D0\u4F9B\u5B8C\u5584\u7684\u5408\u7EA6\u6A21\u677F"))), __jsx("div", {
    className: "col-md-6 box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-exchange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 23
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, t("跨合约NFT转移")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 19
    }
  }, t("THE OASIS实现了安全、原子的跨合约NFT转移，帮助您的资产穿梭在各种应用的合约层"))), __jsx("div", {
    className: "col-md-6 box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-edit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 23
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 19
    }
  }, t("定制化资产映射")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 19
    }
  }, t("您可以自由定制外来NFT在合约内的映射目标资产，以实现更灵活的资产复用"))), __jsx("div", {
    className: "col-md-6 box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-shield",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 23
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 19
    }
  }, t("密码学安全")), __jsx("ul", {
    className: "text-muted list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 21
    }
  }, t("数字签名保障资产完整性，防止篡改资产")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 21
    }
  }, t("中转合约记录资产位置，防止伪造资产")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 21
    }
  }, t("全生命周期追踪"))))))))), __jsx("div", {
    className: "pt-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 15
    }
  }, t("为什么要接入THE OASIS")))), __jsx("div", {
    className: "row mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-4 mx-auto box text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-users",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 19
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 15
    }
  }, t("快速冷启动")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 15
    }
  }, t("复用已有应用的资产，快速吸引流量，加速应用冷启动"))), __jsx("div", {
    className: "col-md-4 mx-auto box text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-shopping-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 19
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 15
    }
  }, t("刺激消费")), __jsx("ul", {
    className: "text-muted list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 17
    }
  }, t("迫使玩家重复消费道具的时代即将过去")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 17
    }
  }, t("复用性强，使用场景更丰富的资产更容易受到玩家青睐")))), __jsx("div", {
    className: "col-md-4 mx-auto box text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "icon-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "icon-box-inner text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-rocket",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 19
    }
  }))), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 15
    }
  }, t("跨应用联合玩法")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 15
    }
  }, t("带着CryptoKitties的宠物猫游览Decentraland的虚拟世界")))))), __jsx("div", {
    className: "pt-7",
    id: "dapps",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 15
    }
  }, t("已接入的Dapp")))), __jsx("div", {
    className: "row mt-5 mb-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-5 mx-auto text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://pandahero.io",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "img/pandahero.png",
    width: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-md-5 mx-auto text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "img/panda-logo.png",
    width: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    id: "faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 mx-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 15
    }
  }, "FAQ"))), __jsx("div", {
    className: "row mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-10 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 19
    }
  }, t("跨应用资产转移需要收费吗？")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 19
    }
  }, t("在合约执行层面只收取区块链交易的手续费，无其他任何费用。应用方也可以在上层构建灵活的付费方案，以拓展更多商业模式。"))), __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 19
    }
  }, t("资产转移后会出现丢失情况吗？")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 19
    }
  }, t("资产只在合约有安全漏洞或其他Bug的情况下可能会出现丢失。我们建议用户在审查目标应用的安全性并充分信任后，再进行资产转移的操作。"))), __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 19
    }
  }, t("合作方单方面退出生态，资产是否会受影响？")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 19
    }
  }, t("在合作方合约符合THE OASIS协议标准的情况下，任何资产在任何时候都可以转移回它最初的发行合约。"))), __jsx("div", {
    className: "col-md-6 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 19
    }
  }, t("接入协议后会对资产做什么限制？")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 19
    }
  }, t("协议仅对必要的数据字段做了标准化，其它任何操作均无限制，可由应用方自由扩展。")))))))), __jsx("div", {
    className: "py-4 my-4 border-top",
    id: "community",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-10 mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-body d-md-flex flex-row align-items-center text-center text-md-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mb-4 mb-md-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 19
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 21
    }
  }, t("想与更多开发者、应用方交流？")), __jsx("span", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 21
    }
  }, t("好的灵感总是在交流的过程中产生"))), __jsx("a", {
    className: "ml-md-auto d-inline-flex flex-row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 21
    }
  }, t("加入社区"))))))))), __jsx("div", {
    className: "bg-hero py-7",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-12 my-md-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "display text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 15
    }
  }, t("申请测试")), __jsx("p", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 15
    }
  }, t("请通过邮件与我们取得联系")), __jsx("a", {
    className: "lead text-light",
    href: "mailto:the-oasis@byterum.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 15
    }
  }, "the-oasis@byterum.com"))))), __jsx("footer", {
    className: "py-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-sm-5 mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 15
    }
  }, t("关于链坊")), __jsx(react_i18next__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
    i18nKey: "byterumInfo",
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 15
    }
  }, "\u94FE\u574A\u662F\u4E00\u5BB6\u4E13\u6CE8\u4E8E\u533A\u5757\u94FE\u6280\u672F\u7814\u53D1\u7684\u521B\u65B0\u79D1\u6280\u516C\u53F8\u3002\u6211\u4EEC\u81F4\u529B\u4E8E\u5C06\u533A\u5757\u94FE\u6280\u672F\u4E0E\u6E38\u620F\u3001\u6587\u5B66\u3001\u827A\u672F\u7B49\u6587\u521B\u9886\u57DF\u4EA7\u54C1\u7ED3\u5408\uFF0C\u63A8\u5E7F\u901A\u8BC1\u7ECF\u6D4E\uFF0C\u964D\u4F4E\u4EA4\u6613\u6469\u64E6\u6210\u672C\uFF0C\u6700\u5927\u5316\u4FDD\u969C\u7528\u6237\u7684\u5229\u76CA\u3002"), __jsx("ul", {
    className: "list-inline social social-rounded social-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "list-inline-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "list-inline-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "list-inline-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-telegram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "list-inline-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://github.com/the-oasis-protocol",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 15
    }
  }, t("相关资源")), __jsx("ul", {
    className: "list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://pandahero.io",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 19
    }
  }, t("竹录隐侠"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://eos.io",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 19
    }
  }, "EOSIO")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://dapp.review",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 19
    }
  }, "DappReview")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 15
    }
  }, t("社区")), __jsx("ul", {
    className: "list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 19
    }
  }, "Refer a friend")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 19
    }
  }, "Affiliates")))), __jsx("div", {
    className: "col-sm-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 15
    }
  }, t("帮助")), __jsx("ul", {
    className: "list-unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://github.com/the-oasis-protocol",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 19
    }
  }, "Github")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 19
    }
  }, t("报告Bug")))))), __jsx("div", {
    className: "row mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-12 text-muted text-center small-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 13
    }
  }, "\xA9 ", new Date().getFullYear(), " \u94FE\u574A\u79D1\u6280 Byterum - All Rights Reserved")))), __jsx("div", {
    className: "scroll-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fa fa-angle-up",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 9
    }
  })), __jsx("script", {
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.7.0/feather.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.28e738a148078c122452.hot-update.js.map