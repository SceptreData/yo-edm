webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/davidbergeron/projects/edu/yo-edmonton/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function unpackEvent(event) {
  if (event !== undefined) {
    console.log(event);
    const {
      name,
      dates,
      images,
      url
    } = event;
    const {
      genre,
      subgenre
    } = event.classifications[0];
    const venue = event._embedded.venues[0];
    return {
      name,
      dates,
      images,
      url,
      genre,
      subgenre,
      venue
    };
  }

  return null;
}

const EventItem = ({
  src
}) => {
  const event = unpackEvent(src);

  if (event) {
    return __jsx("li", {
      className: "jsx-3818783337",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, __jsx("h3", {
      className: "jsx-3818783337",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, event.name), __jsx("h4", {
      className: "jsx-3818783337",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, event.subgenre), __jsx("time", {
      className: "jsx-3818783337" + " " + 'event-time',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, event.dates.start.localTime), __jsx("time", {
      className: "jsx-3818783337" + " " + 'event-date',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, event.dates.start.localDate), __jsx("a", {
      href: event.url,
      className: "jsx-3818783337",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, event.venue, "\u2192"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3818783337",
      __self: undefined
    }, "time.jsx-3818783337{display:block;}a.jsx-3818783337,a.jsx-3818783337:visited{font-size:2rem;color:gold;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3818783337:hover{color:goldenrod;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGJlcmdlcm9uL3Byb2plY3RzL2VkdS95by1lZG1vbnRvbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm9CLEFBRzJCLEFBSUMsQUFNQyxjQVRsQixDQUlhLENBTWIsVUFMdUIsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZGJlcmdlcm9uL3Byb2plY3RzL2VkdS95by1lZG1vbnRvbi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmZ1bmN0aW9uIHVucGFja0V2ZW50KGV2ZW50KSB7XG4gIGlmIChldmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGNvbnN0IHsgbmFtZSwgZGF0ZXMsIGltYWdlcywgdXJsIH0gPSBldmVudDtcbiAgICBjb25zdCB7IGdlbnJlLCBzdWJnZW5yZSB9ID0gZXZlbnQuY2xhc3NpZmljYXRpb25zWzBdO1xuICAgIGNvbnN0IHZlbnVlID0gZXZlbnQuX2VtYmVkZGVkLnZlbnVlc1swXTtcblxuICAgIHJldHVybiB7IG5hbWUsIGRhdGVzLCBpbWFnZXMsIHVybCwgZ2VucmUsIHN1YmdlbnJlLCB2ZW51ZSB9O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBFdmVudEl0ZW0gPSAoeyBzcmMgfSkgPT4ge1xuICBjb25zdCBldmVudCA9IHVucGFja0V2ZW50KHNyYyk7XG4gIGlmIChldmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDxoMz57ZXZlbnQubmFtZX08L2gzPlxuICAgICAgICA8aDQ+e2V2ZW50LnN1YmdlbnJlfTwvaDQ+XG4gICAgICAgIDx0aW1lIGNsYXNzTmFtZT0nZXZlbnQtdGltZSc+e2V2ZW50LmRhdGVzLnN0YXJ0LmxvY2FsVGltZX08L3RpbWU+XG4gICAgICAgIDx0aW1lIGNsYXNzTmFtZT0nZXZlbnQtZGF0ZSc+e2V2ZW50LmRhdGVzLnN0YXJ0LmxvY2FsRGF0ZX08L3RpbWU+XG4gICAgICAgIDxhIGhyZWY9e2V2ZW50LnVybH0+e2V2ZW50LnZlbnVlfeKGkjwvYT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHRpbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEsXG4gICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGNvbG9yOiBnb2xkO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IGdvbGRlbnJvZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IEluZGV4ID0gKHsgZXZlbnRzIH0pID0+IHtcbiAgY29uc29sZS5sb2coZXZlbnRzKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPllvJ0VkbW9udG9uPC9oMT5cbiAgICAgIDxwPkxpdmUgRWRtb250b24gSGlwIEhvcDwvcD5cblxuICAgICAgPHVsIGNsYXNzTmFtZT0ndXBjb21pbmctc2hvd3MnPjwvdWw+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2V2ZW50cy5tYXAoZXZlbnQgPT4gKFxuICAgICAgICAgICAgPEV2ZW50SXRlbSBrZXk9e2V2ZW50LmlkfSBzcmM9e2V2ZW50fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5GZWF0dXJlZDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIERpc2NvdW50IExpb24gU2FmYXJpIGlzIGEgaGlwIGhvcCBkdW8gZmVhdHVyaW5nIHRoZSBlbG9xdWVudCBGYXdrZXNcbiAgICAgICAgICBhbmQgZ3Jvb3ZlIG1hZ2ljaWFuIEJ1cmdlcmZpbmdlci4gVGhpcyBlZG1vbnRvbiBib3JuIGFuZCByYWlzZWQgZHVvXG4gICAgICAgICAgaGFzIGJlZW4gYnJpbmdpbmcgY3Jvd2RzIHRvIHRoZWlyIGtuZWVzIHNpbmNlIDIwMTcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgzPkdldCB5b3VyIEV2ZW50IExpc3RlZDwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBcmUgeW91IGhvc3RpbmcgYW4gZXZlbnQ/IExldCB1cyBrbm93ISBXZSB3YW50IHRvIGJyaW5nIGZhbnMgYW5kXG4gICAgICAgICAgICBjb250ZW50LWNyZWF0b3JzIHRvZ2V0aGVyLCB3aXRoIHRoZSBnb2FsIG9mIGhlbHBpbmcgeW91IGdyb3cgeW91clxuICAgICAgICAgICAgYnJhbmQgYXMgcGFpbmxlc3NseSBhcyBwb3NzaWJsZS4gWW9FZG1vbnRvbiBpcyB0aGUgYmVzdCB3YXkgdG8gbGV0XG4gICAgICAgICAgICB0aGUgcGVvcGxlIEVkbW9udG9uIGtub3cgd2hhdOKAmXMgdXAuIEJlc3Qgb2YgYWxsLCBsaXN0aW5nIHlvdXJzZWxmIG9uXG4gICAgICAgICAgICBZbyBFZG1vbnRvbiBpcyBjb21wbGV0ZWx5IGZyZWUhXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRG8geW91IGhhdmUgcGljdHVyZXMgb2YgYW4gZXZlbnQ/IFdlIHdvdWxkIGxvdmUgdG8gc2VlIHRoZW0uIFlvdXJcbiAgICAgICAgICAgIHBob3RvcyBjb3VsZCBiZSBmZWF0dXJlZCBoZXJlIG9uIHRoZSBzaXRlLiBFdmVyeSB3ZWVrIHdlIGZlYXR1cmUgYVxuICAgICAgICAgICAgZGlmZmVyZW50IGFydGlzdCBvciBjcmV3LCBhbmQgd2Ugd291bGQgbG92ZSB5b3VyIHBob3RvZ3JhcGhzIHRvIGRvXG4gICAgICAgICAgICBpdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgzPkFib3V0IFlvJ0VkbW9udG9uPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFlv4oCZIEVkbW9udG9uIGlzIHRoZSBiZXN0IHVwIGFuZCBjb21pbmcgSGlwIEhvcCBhbmQgUmFwIGV2ZW50IGxpc3RpbmdcbiAgICAgICAgICAgIHNpdGUgaW4gRWRtb250b24uIEZvdW5kZWQgaW4gMjAxOSwgdGhlIG93bmVyIHdhcyBmZWQgdXAgdHJ5aW5nIHRvXG4gICAgICAgICAgICBmaWd1cmUgb3V0IHdoZXJlIGV2ZW50cyB3ZXJlIGhhcHBlbmluZyBpbiBFZG1vbnRvbi4gQXQgWW/igJkgRWRtb250b24sXG4gICAgICAgICAgICB3ZSBhcmUgYnJpbmdpbmcgeW91IHRoZSBsYXRlc3QgdXAtdG8tZGF0ZSBpbmZvcm1hdGlvbiBhYm91dCBzaG93c1xuICAgICAgICAgICAgaGFwcGVuaW5nIGFyb3VuZCB0aGUgY2l0eS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZbyBFZG1vbnRvbiBpcyBhIHByb21vdGlvbmFsIHBsYXRmb3JtIHdoZXJlIGFydGlzdHMgYW5kIGZhbnMgY2FuXG4gICAgICAgICAgICBwcm9tb3RlIHRoZWlyIGZhdm9yaXRlIGFydGlzdHMsIG1lcmNoYW5kaXNlIGFuZCB2ZW51ZXMuIFlvIEVkbW9udG9uXG4gICAgICAgICAgICBpcyBidWlsdCBmb3IgeW91IHRvIGVuZ2FnZSB3aXRoIHRoZSBFZG1vbnRvbiBoaXAgaG9wIGNvbW11bml0eS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgLmZsZXgtcm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IEFQSV9TVFIgPSBgaHR0cHM6Ly9hcHAudGlja2V0bWFzdGVyLmNvbS9kaXNjb3ZlcnkvdjIvZXZlbnRzP2FwaWtleT0ke3Byb2Nlc3MuZW52LlRNQVNURVJfQVBJX0tFWX1gO1xuXG5jb25zdCBISVBIT1BfR0VOUkVfSUQgPSAnS252WmZaN3ZBdjEnO1xuY29uc3QgRURNT05UT05fUVVFUlkgPSAnbG9jYWxlPSomY2l0eT1FZG1vbnRvbiZjb3VudHJ5Q29kZT1DQSc7XG5cbmZ1bmN0aW9uIGtleXdvcmRTZWFyY2goa2V5d29yZCkge1xuICBjb25zdCBjbGVhbktleVdvcmQgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5d29yZCk7XG4gIHJldHVybiBgJmtleXdvcmQ9JHtjbGVhbktleVdvcmR9JiR7RURNT05UT05fUVVFUll9YDtcbn1cblxuZnVuY3Rpb24gZ2VucmVTZWFyY2goZ2VucmUpIHtcbiAgcmV0dXJuIGAmY2xhc3NpZmljYXRpb25JZD0ke2dlbnJlfSYke0VETU9OVE9OX1FVRVJZfWA7XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9TVFIgKyBnZW5yZVNlYXJjaChISVBIT1BfR0VOUkVfSUQpKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IGV2ZW50czoganNvbi5fZW1iZWRkZWQuZXZlbnRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/davidbergeron/projects/edu/yo-edmonton/pages/index.js */"));
  }

  return null;
};

const Index = ({
  events
}) => {
  console.log(events);
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Yo'Edmonton"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Live Edmonton Hip Hop"), __jsx("ul", {
    className: "jsx-2734067919" + " " + 'upcoming-shows',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("section", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, events.map(event => __jsx(EventItem, {
    key: event.id,
    src: event,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })))), __jsx("section", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Featured"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Discount Lion Safari is a hip hop duo featuring the eloquent Fawkes and groove magician Burgerfinger. This edmonton born and raised duo has been bringing crowds to their knees since 2017.")), __jsx("div", {
    className: "jsx-2734067919" + " " + 'flex-row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Get your Event Listed"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Are you hosting an event? Let us know! We want to bring fans and content-creators together, with the goal of helping you grow your brand as painlessly as possible. YoEdmonton is the best way to let the people Edmonton know what\u2019s up. Best of all, listing yourself on Yo Edmonton is completely free!"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Do you have pictures of an event? We would love to see them. Your photos could be featured here on the site. Every week we feature a different artist or crew, and we would love your photographs to do it.")), __jsx("section", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "About Yo'Edmonton"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Yo\u2019 Edmonton is the best up and coming Hip Hop and Rap event listing site in Edmonton. Founded in 2019, the owner was fed up trying to figure out where events were happening in Edmonton. At Yo\u2019 Edmonton, we are bringing you the latest up-to-date information about shows happening around the city."), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Yo Edmonton is a promotional platform where artists and fans can promote their favorite artists, merchandise and venues. Yo Edmonton is built for you to engage with the Edmonton hip hop community."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2734067919",
    __self: undefined
  }, "@media only screen and (min-width:720px){.flex-row.jsx-2734067919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}h2.jsx-2734067919{margin-top:0;}section.jsx-2734067919{position:relative;padding:20px;border:1px solid lightgrey;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,0.5);margin-bottom:2rem;margin-right:1rem;}a.jsx-2734067919{font-family:'Roboto';}ul.jsx-2734067919{padding:0;}li.jsx-2734067919{list-style:none;margin:5px 0;}a.jsx-2734067919{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2734067919:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGJlcmdlcm9uL3Byb2plY3RzL2VkdS95by1lZG1vbnRvbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR2tCLEFBSTBCLEFBS0YsQUFHSyxBQVNHLEFBSVgsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLENBOUJBLEdBb0JlLEVBakJBLEdBU2YsUUFTQSxFQWpCNkIsbUJBcUJoQixRQXBCZSxHQXFCNUIsYUEvQkUsNENBVzhCLDJCQUNYLG1CQUNELGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZGF2aWRiZXJnZXJvbi9wcm9qZWN0cy9lZHUveW8tZWRtb250b24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5mdW5jdGlvbiB1bnBhY2tFdmVudChldmVudCkge1xuICBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBjb25zdCB7IG5hbWUsIGRhdGVzLCBpbWFnZXMsIHVybCB9ID0gZXZlbnQ7XG4gICAgY29uc3QgeyBnZW5yZSwgc3ViZ2VucmUgfSA9IGV2ZW50LmNsYXNzaWZpY2F0aW9uc1swXTtcbiAgICBjb25zdCB2ZW51ZSA9IGV2ZW50Ll9lbWJlZGRlZC52ZW51ZXNbMF07XG5cbiAgICByZXR1cm4geyBuYW1lLCBkYXRlcywgaW1hZ2VzLCB1cmwsIGdlbnJlLCBzdWJnZW5yZSwgdmVudWUgfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgRXZlbnRJdGVtID0gKHsgc3JjIH0pID0+IHtcbiAgY29uc3QgZXZlbnQgPSB1bnBhY2tFdmVudChzcmMpO1xuICBpZiAoZXZlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8aDM+e2V2ZW50Lm5hbWV9PC9oMz5cbiAgICAgICAgPGg0PntldmVudC5zdWJnZW5yZX08L2g0PlxuICAgICAgICA8dGltZSBjbGFzc05hbWU9J2V2ZW50LXRpbWUnPntldmVudC5kYXRlcy5zdGFydC5sb2NhbFRpbWV9PC90aW1lPlxuICAgICAgICA8dGltZSBjbGFzc05hbWU9J2V2ZW50LWRhdGUnPntldmVudC5kYXRlcy5zdGFydC5sb2NhbERhdGV9PC90aW1lPlxuICAgICAgICA8YSBocmVmPXtldmVudC51cmx9PntldmVudC52ZW51ZX3ihpI8L2E+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB0aW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLFxuICAgICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjb2xvcjogZ29sZDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBJbmRleCA9ICh7IGV2ZW50cyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGV2ZW50cyk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5ZbydFZG1vbnRvbjwvaDE+XG4gICAgICA8cD5MaXZlIEVkbW9udG9uIEhpcCBIb3A8L3A+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3VwY29taW5nLXNob3dzJz48L3VsPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtldmVudHMubWFwKGV2ZW50ID0+IChcbiAgICAgICAgICAgIDxFdmVudEl0ZW0ga2V5PXtldmVudC5pZH0gc3JjPXtldmVudH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDI+RmVhdHVyZWQ8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBEaXNjb3VudCBMaW9uIFNhZmFyaSBpcyBhIGhpcCBob3AgZHVvIGZlYXR1cmluZyB0aGUgZWxvcXVlbnQgRmF3a2VzXG4gICAgICAgICAgYW5kIGdyb292ZSBtYWdpY2lhbiBCdXJnZXJmaW5nZXIuIFRoaXMgZWRtb250b24gYm9ybiBhbmQgcmFpc2VkIGR1b1xuICAgICAgICAgIGhhcyBiZWVuIGJyaW5naW5nIGNyb3dkcyB0byB0aGVpciBrbmVlcyBzaW5jZSAyMDE3LlxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMz5HZXQgeW91ciBFdmVudCBMaXN0ZWQ8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQXJlIHlvdSBob3N0aW5nIGFuIGV2ZW50PyBMZXQgdXMga25vdyEgV2Ugd2FudCB0byBicmluZyBmYW5zIGFuZFxuICAgICAgICAgICAgY29udGVudC1jcmVhdG9ycyB0b2dldGhlciwgd2l0aCB0aGUgZ29hbCBvZiBoZWxwaW5nIHlvdSBncm93IHlvdXJcbiAgICAgICAgICAgIGJyYW5kIGFzIHBhaW5sZXNzbHkgYXMgcG9zc2libGUuIFlvRWRtb250b24gaXMgdGhlIGJlc3Qgd2F5IHRvIGxldFxuICAgICAgICAgICAgdGhlIHBlb3BsZSBFZG1vbnRvbiBrbm93IHdoYXTigJlzIHVwLiBCZXN0IG9mIGFsbCwgbGlzdGluZyB5b3Vyc2VsZiBvblxuICAgICAgICAgICAgWW8gRWRtb250b24gaXMgY29tcGxldGVseSBmcmVlIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIERvIHlvdSBoYXZlIHBpY3R1cmVzIG9mIGFuIGV2ZW50PyBXZSB3b3VsZCBsb3ZlIHRvIHNlZSB0aGVtLiBZb3VyXG4gICAgICAgICAgICBwaG90b3MgY291bGQgYmUgZmVhdHVyZWQgaGVyZSBvbiB0aGUgc2l0ZS4gRXZlcnkgd2VlayB3ZSBmZWF0dXJlIGFcbiAgICAgICAgICAgIGRpZmZlcmVudCBhcnRpc3Qgb3IgY3JldywgYW5kIHdlIHdvdWxkIGxvdmUgeW91ciBwaG90b2dyYXBocyB0byBkb1xuICAgICAgICAgICAgaXQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMz5BYm91dCBZbydFZG1vbnRvbjwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZb+KAmSBFZG1vbnRvbiBpcyB0aGUgYmVzdCB1cCBhbmQgY29taW5nIEhpcCBIb3AgYW5kIFJhcCBldmVudCBsaXN0aW5nXG4gICAgICAgICAgICBzaXRlIGluIEVkbW9udG9uLiBGb3VuZGVkIGluIDIwMTksIHRoZSBvd25lciB3YXMgZmVkIHVwIHRyeWluZyB0b1xuICAgICAgICAgICAgZmlndXJlIG91dCB3aGVyZSBldmVudHMgd2VyZSBoYXBwZW5pbmcgaW4gRWRtb250b24uIEF0IFlv4oCZIEVkbW9udG9uLFxuICAgICAgICAgICAgd2UgYXJlIGJyaW5naW5nIHlvdSB0aGUgbGF0ZXN0IHVwLXRvLWRhdGUgaW5mb3JtYXRpb24gYWJvdXQgc2hvd3NcbiAgICAgICAgICAgIGhhcHBlbmluZyBhcm91bmQgdGhlIGNpdHkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgWW8gRWRtb250b24gaXMgYSBwcm9tb3Rpb25hbCBwbGF0Zm9ybSB3aGVyZSBhcnRpc3RzIGFuZCBmYW5zIGNhblxuICAgICAgICAgICAgcHJvbW90ZSB0aGVpciBmYXZvcml0ZSBhcnRpc3RzLCBtZXJjaGFuZGlzZSBhbmQgdmVudWVzLiBZbyBFZG1vbnRvblxuICAgICAgICAgICAgaXMgYnVpbHQgZm9yIHlvdSB0byBlbmdhZ2Ugd2l0aCB0aGUgRWRtb250b24gaGlwIGhvcCBjb21tdW5pdHkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgIC5mbGV4LXJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5jb25zdCBBUElfU1RSID0gYGh0dHBzOi8vYXBwLnRpY2tldG1hc3Rlci5jb20vZGlzY292ZXJ5L3YyL2V2ZW50cz9hcGlrZXk9JHtwcm9jZXNzLmVudi5UTUFTVEVSX0FQSV9LRVl9YDtcblxuY29uc3QgSElQSE9QX0dFTlJFX0lEID0gJ0tudlpmWjd2QXYxJztcbmNvbnN0IEVETU9OVE9OX1FVRVJZID0gJ2xvY2FsZT0qJmNpdHk9RWRtb250b24mY291bnRyeUNvZGU9Q0EnO1xuXG5mdW5jdGlvbiBrZXl3b3JkU2VhcmNoKGtleXdvcmQpIHtcbiAgY29uc3QgY2xlYW5LZXlXb3JkID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleXdvcmQpO1xuICByZXR1cm4gYCZrZXl3b3JkPSR7Y2xlYW5LZXlXb3JkfSYke0VETU9OVE9OX1FVRVJZfWA7XG59XG5cbmZ1bmN0aW9uIGdlbnJlU2VhcmNoKGdlbnJlKSB7XG4gIHJldHVybiBgJmNsYXNzaWZpY2F0aW9uSWQ9JHtnZW5yZX0mJHtFRE1PTlRPTl9RVUVSWX1gO1xufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElfU1RSICsgZ2VucmVTZWFyY2goSElQSE9QX0dFTlJFX0lEKSk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4geyBldmVudHM6IGpzb24uX2VtYmVkZGVkLmV2ZW50cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/davidbergeron/projects/edu/yo-edmonton/pages/index.js */"));
};

const API_STR = "https://app.ticketmaster.com/discovery/v2/events?apikey=".concat(process.env.TMASTER_API_KEY);
const HIPHOP_GENRE_ID = 'KnvZfZ7vAv1';
const EDMONTON_QUERY = 'locale=*&city=Edmonton&countryCode=CA';

function keywordSearch(keyword) {
  const cleanKeyWord = encodeURIComponent(keyword);
  return "&keyword=".concat(cleanKeyWord, "&").concat(EDMONTON_QUERY);
}

function genreSearch(genre) {
  return "&classificationId=".concat(genre, "&").concat(EDMONTON_QUERY);
}

Index.getInitialProps = async ({
  req
}) => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(API_STR + genreSearch(HIPHOP_GENRE_ID));
  const json = await res.json();
  return {
    events: json._embedded.events
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.0aad3f0cf80bac218c47.hot-update.js.map