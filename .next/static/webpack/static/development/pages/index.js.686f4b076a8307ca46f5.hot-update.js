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

const EventItem = ({
  src
}) => {
  const event = unpackEvent(src);
  return __jsx("li", {
    className: "jsx-3226011895",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-3226011895",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, event.name), __jsx("h4", {
    className: "jsx-3226011895",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, event.subgenre), __jsx("time", {
    className: "jsx-3226011895" + " " + 'event-time',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, event.dates.start.localTime), __jsx("time", {
    className: "jsx-3226011895" + " " + 'event-date',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, event.dates.start.localDate), __jsx("a", {
    href: event.url,
    className: "jsx-3226011895",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, event.venue, "\u2192"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3226011895",
    __self: undefined
  }, "time.jsx-3226011895{display:block;}a.jsx-3226011895,a.jsx-3226011895:visited{font-size:2rem;color:gold;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3226011895:hover{color:goldenrod;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGJlcmdlcm9uL3Byb2plY3RzL2VkdS95by1lZG1vbnRvbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBR3lCLEFBSUMsQUFNQyxjQVRsQixDQUlhLENBTWIsVUFMdUIsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZGJlcmdlcm9uL3Byb2plY3RzL2VkdS95by1lZG1vbnRvbi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmZ1bmN0aW9uIHVucGFja0V2ZW50KGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgY29uc3QgeyBuYW1lLCBkYXRlcywgaW1hZ2VzLCB1cmwgfSA9IGV2ZW50O1xuICBjb25zdCB7IGdlbnJlLCBzdWJnZW5yZSB9ID0gZXZlbnQuY2xhc3NpZmljYXRpb25zWzBdO1xuICBjb25zdCB2ZW51ZSA9IGV2ZW50Ll9lbWJlZGRlZC52ZW51ZXNbMF07XG5cbiAgcmV0dXJuIHsgbmFtZSwgZGF0ZXMsIGltYWdlcywgdXJsLCBnZW5yZSwgc3ViZ2VucmUsIHZlbnVlIH07XG59XG5cbmNvbnN0IEV2ZW50SXRlbSA9ICh7IHNyYyB9KSA9PiB7XG4gIGNvbnN0IGV2ZW50ID0gdW5wYWNrRXZlbnQoc3JjKTtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICA8aDM+e2V2ZW50Lm5hbWV9PC9oMz5cbiAgICAgIDxoND57ZXZlbnQuc3ViZ2VucmV9PC9oND5cbiAgICAgIDx0aW1lIGNsYXNzTmFtZT0nZXZlbnQtdGltZSc+e2V2ZW50LmRhdGVzLnN0YXJ0LmxvY2FsVGltZX08L3RpbWU+XG4gICAgICA8dGltZSBjbGFzc05hbWU9J2V2ZW50LWRhdGUnPntldmVudC5kYXRlcy5zdGFydC5sb2NhbERhdGV9PC90aW1lPlxuICAgICAgPGEgaHJlZj17ZXZlbnQudXJsfT57ZXZlbnQudmVudWV94oaSPC9hPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICB0aW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBhLFxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBjb2xvcjogZ29sZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogZ29sZGVucm9kO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmNvbnN0IEluZGV4ID0gKHsgZXZlbnRzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPllvJ0VkbW9udG9uPC9oMT5cbiAgICAgIDxwPkxpdmUgRWRtb250b24gSGlwIEhvcDwvcD5cblxuICAgICAgPHVsIGNsYXNzTmFtZT0ndXBjb21pbmctc2hvd3MnPjwvdWw+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2V2ZW50cy5tYXAoZXZlbnQgPT4gKFxuICAgICAgICAgICAgPEV2ZW50SXRlbSBrZXk9e2V2ZW50LmlkfSBldmVudD17ZXZlbnR9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgyPkZlYXR1cmVkPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRGlzY291bnQgTGlvbiBTYWZhcmkgaXMgYSBoaXAgaG9wIGR1byBmZWF0dXJpbmcgdGhlIGVsb3F1ZW50IEZhd2tlc1xuICAgICAgICAgIGFuZCBncm9vdmUgbWFnaWNpYW4gQnVyZ2VyZmluZ2VyLiBUaGlzIGVkbW9udG9uIGJvcm4gYW5kIHJhaXNlZCBkdW9cbiAgICAgICAgICBoYXMgYmVlbiBicmluZ2luZyBjcm93ZHMgdG8gdGhlaXIga25lZXMgc2luY2UgMjAxNy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1yb3cnPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDM+R2V0IHlvdXIgRXZlbnQgTGlzdGVkPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEFyZSB5b3UgaG9zdGluZyBhbiBldmVudD8gTGV0IHVzIGtub3chIFdlIHdhbnQgdG8gYnJpbmcgZmFucyBhbmRcbiAgICAgICAgICAgIGNvbnRlbnQtY3JlYXRvcnMgdG9nZXRoZXIsIHdpdGggdGhlIGdvYWwgb2YgaGVscGluZyB5b3UgZ3JvdyB5b3VyXG4gICAgICAgICAgICBicmFuZCBhcyBwYWlubGVzc2x5IGFzIHBvc3NpYmxlLiBZb0VkbW9udG9uIGlzIHRoZSBiZXN0IHdheSB0byBsZXRcbiAgICAgICAgICAgIHRoZSBwZW9wbGUgRWRtb250b24ga25vdyB3aGF04oCZcyB1cC4gQmVzdCBvZiBhbGwsIGxpc3RpbmcgeW91cnNlbGYgb25cbiAgICAgICAgICAgIFlvIEVkbW9udG9uIGlzIGNvbXBsZXRlbHkgZnJlZSFcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBEbyB5b3UgaGF2ZSBwaWN0dXJlcyBvZiBhbiBldmVudD8gV2Ugd291bGQgbG92ZSB0byBzZWUgdGhlbS4gWW91clxuICAgICAgICAgICAgcGhvdG9zIGNvdWxkIGJlIGZlYXR1cmVkIGhlcmUgb24gdGhlIHNpdGUuIEV2ZXJ5IHdlZWsgd2UgZmVhdHVyZSBhXG4gICAgICAgICAgICBkaWZmZXJlbnQgYXJ0aXN0IG9yIGNyZXcsIGFuZCB3ZSB3b3VsZCBsb3ZlIHlvdXIgcGhvdG9ncmFwaHMgdG8gZG9cbiAgICAgICAgICAgIGl0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDM+QWJvdXQgWW8nRWRtb250b248L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgWW/igJkgRWRtb250b24gaXMgdGhlIGJlc3QgdXAgYW5kIGNvbWluZyBIaXAgSG9wIGFuZCBSYXAgZXZlbnQgbGlzdGluZ1xuICAgICAgICAgICAgc2l0ZSBpbiBFZG1vbnRvbi4gRm91bmRlZCBpbiAyMDE5LCB0aGUgb3duZXIgd2FzIGZlZCB1cCB0cnlpbmcgdG9cbiAgICAgICAgICAgIGZpZ3VyZSBvdXQgd2hlcmUgZXZlbnRzIHdlcmUgaGFwcGVuaW5nIGluIEVkbW9udG9uLiBBdCBZb+KAmSBFZG1vbnRvbixcbiAgICAgICAgICAgIHdlIGFyZSBicmluZ2luZyB5b3UgdGhlIGxhdGVzdCB1cC10by1kYXRlIGluZm9ybWF0aW9uIGFib3V0IHNob3dzXG4gICAgICAgICAgICBoYXBwZW5pbmcgYXJvdW5kIHRoZSBjaXR5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFlvIEVkbW9udG9uIGlzIGEgcHJvbW90aW9uYWwgcGxhdGZvcm0gd2hlcmUgYXJ0aXN0cyBhbmQgZmFucyBjYW5cbiAgICAgICAgICAgIHByb21vdGUgdGhlaXIgZmF2b3JpdGUgYXJ0aXN0cywgbWVyY2hhbmRpc2UgYW5kIHZlbnVlcy4gWW8gRWRtb250b25cbiAgICAgICAgICAgIGlzIGJ1aWx0IGZvciB5b3UgdG8gZW5nYWdlIHdpdGggdGhlIEVkbW9udG9uIGhpcCBob3AgY29tbXVuaXR5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAuZmxleC1yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuY29uc3QgQVBJX1NUUiA9IGBodHRwczovL2FwcC50aWNrZXRtYXN0ZXIuY29tL2Rpc2NvdmVyeS92Mi9ldmVudHM/YXBpa2V5PSR7cHJvY2Vzcy5lbnYuVE1BU1RFUl9BUElfS0VZfWA7XG5cbmNvbnN0IEhJUEhPUF9HRU5SRV9JRCA9ICdLbnZaZlo3dkF2MSc7XG5jb25zdCBFRE1PTlRPTl9RVUVSWSA9ICdsb2NhbGU9KiZjaXR5PUVkbW9udG9uJmNvdW50cnlDb2RlPUNBJztcblxuZnVuY3Rpb24ga2V5d29yZFNlYXJjaChrZXl3b3JkKSB7XG4gIGNvbnN0IGNsZWFuS2V5V29yZCA9IGVuY29kZVVSSUNvbXBvbmVudChrZXl3b3JkKTtcbiAgcmV0dXJuIGAma2V5d29yZD0ke2NsZWFuS2V5V29yZH0mJHtFRE1PTlRPTl9RVUVSWX1gO1xufVxuXG5mdW5jdGlvbiBnZW5yZVNlYXJjaChnZW5yZSkge1xuICByZXR1cm4gYCZjbGFzc2lmaWNhdGlvbklkPSR7Z2VucmV9JiR7RURNT05UT05fUVVFUll9YDtcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX1NUUiArIGdlbnJlU2VhcmNoKEhJUEhPUF9HRU5SRV9JRCkpO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHsgZXZlbnRzOiBqc29uLl9lbWJlZGRlZC5ldmVudHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/davidbergeron/projects/edu/yo-edmonton/pages/index.js */"));
};

const Index = ({
  events
}) => {
  return __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Yo'Edmonton"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Live Edmonton Hip Hop"), __jsx("ul", {
    className: "jsx-2734067919" + " " + 'upcoming-shows',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("section", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, events.map(event => __jsx(EventItem, {
    key: event.id,
    event: event,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })))), __jsx("section", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Featured"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Discount Lion Safari is a hip hop duo featuring the eloquent Fawkes and groove magician Burgerfinger. This edmonton born and raised duo has been bringing crowds to their knees since 2017.")), __jsx("div", {
    className: "jsx-2734067919" + " " + 'flex-row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Get your Event Listed"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Are you hosting an event? Let us know! We want to bring fans and content-creators together, with the goal of helping you grow your brand as painlessly as possible. YoEdmonton is the best way to let the people Edmonton know what\u2019s up. Best of all, listing yourself on Yo Edmonton is completely free!"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Do you have pictures of an event? We would love to see them. Your photos could be featured here on the site. Every week we feature a different artist or crew, and we would love your photographs to do it.")), __jsx("section", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "About Yo'Edmonton"), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Yo\u2019 Edmonton is the best up and coming Hip Hop and Rap event listing site in Edmonton. Founded in 2019, the owner was fed up trying to figure out where events were happening in Edmonton. At Yo\u2019 Edmonton, we are bringing you the latest up-to-date information about shows happening around the city."), __jsx("p", {
    className: "jsx-2734067919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Yo Edmonton is a promotional platform where artists and fans can promote their favorite artists, merchandise and venues. Yo Edmonton is built for you to engage with the Edmonton hip hop community."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2734067919",
    __self: undefined
  }, "@media only screen and (min-width:720px){.flex-row.jsx-2734067919{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}h2.jsx-2734067919{margin-top:0;}section.jsx-2734067919{position:relative;padding:20px;border:1px solid lightgrey;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,0.5);margin-bottom:2rem;margin-right:1rem;}a.jsx-2734067919{font-family:'Roboto';}ul.jsx-2734067919{padding:0;}li.jsx-2734067919{list-style:none;margin:5px 0;}a.jsx-2734067919{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2734067919:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGJlcmdlcm9uL3Byb2plY3RzL2VkdS95by1lZG1vbnRvbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR2tCLEFBSTBCLEFBS0YsQUFHSyxBQVNHLEFBSVgsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLENBOUJBLEdBb0JlLEVBakJBLEdBU2YsUUFTQSxFQWpCNkIsbUJBcUJoQixRQXBCZSxHQXFCNUIsYUEvQkUsNENBVzhCLDJCQUNYLG1CQUNELGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZGF2aWRiZXJnZXJvbi9wcm9qZWN0cy9lZHUveW8tZWRtb250b24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5mdW5jdGlvbiB1bnBhY2tFdmVudChldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudCk7XG4gIGNvbnN0IHsgbmFtZSwgZGF0ZXMsIGltYWdlcywgdXJsIH0gPSBldmVudDtcbiAgY29uc3QgeyBnZW5yZSwgc3ViZ2VucmUgfSA9IGV2ZW50LmNsYXNzaWZpY2F0aW9uc1swXTtcbiAgY29uc3QgdmVudWUgPSBldmVudC5fZW1iZWRkZWQudmVudWVzWzBdO1xuXG4gIHJldHVybiB7IG5hbWUsIGRhdGVzLCBpbWFnZXMsIHVybCwgZ2VucmUsIHN1YmdlbnJlLCB2ZW51ZSB9O1xufVxuXG5jb25zdCBFdmVudEl0ZW0gPSAoeyBzcmMgfSkgPT4ge1xuICBjb25zdCBldmVudCA9IHVucGFja0V2ZW50KHNyYyk7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPGgzPntldmVudC5uYW1lfTwvaDM+XG4gICAgICA8aDQ+e2V2ZW50LnN1YmdlbnJlfTwvaDQ+XG4gICAgICA8dGltZSBjbGFzc05hbWU9J2V2ZW50LXRpbWUnPntldmVudC5kYXRlcy5zdGFydC5sb2NhbFRpbWV9PC90aW1lPlxuICAgICAgPHRpbWUgY2xhc3NOYW1lPSdldmVudC1kYXRlJz57ZXZlbnQuZGF0ZXMuc3RhcnQubG9jYWxEYXRlfTwvdGltZT5cbiAgICAgIDxhIGhyZWY9e2V2ZW50LnVybH0+e2V2ZW50LnZlbnVlfeKGkjwvYT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdGltZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgYSxcbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgY29sb3I6IGdvbGQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IGdvbGRlbnJvZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5jb25zdCBJbmRleCA9ICh7IGV2ZW50cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5ZbydFZG1vbnRvbjwvaDE+XG4gICAgICA8cD5MaXZlIEVkbW9udG9uIEhpcCBIb3A8L3A+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3VwY29taW5nLXNob3dzJz48L3VsPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtldmVudHMubWFwKGV2ZW50ID0+IChcbiAgICAgICAgICAgIDxFdmVudEl0ZW0ga2V5PXtldmVudC5pZH0gZXZlbnQ9e2V2ZW50fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMj5GZWF0dXJlZDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIERpc2NvdW50IExpb24gU2FmYXJpIGlzIGEgaGlwIGhvcCBkdW8gZmVhdHVyaW5nIHRoZSBlbG9xdWVudCBGYXdrZXNcbiAgICAgICAgICBhbmQgZ3Jvb3ZlIG1hZ2ljaWFuIEJ1cmdlcmZpbmdlci4gVGhpcyBlZG1vbnRvbiBib3JuIGFuZCByYWlzZWQgZHVvXG4gICAgICAgICAgaGFzIGJlZW4gYnJpbmdpbmcgY3Jvd2RzIHRvIHRoZWlyIGtuZWVzIHNpbmNlIDIwMTcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtcm93Jz5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgzPkdldCB5b3VyIEV2ZW50IExpc3RlZDwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBcmUgeW91IGhvc3RpbmcgYW4gZXZlbnQ/IExldCB1cyBrbm93ISBXZSB3YW50IHRvIGJyaW5nIGZhbnMgYW5kXG4gICAgICAgICAgICBjb250ZW50LWNyZWF0b3JzIHRvZ2V0aGVyLCB3aXRoIHRoZSBnb2FsIG9mIGhlbHBpbmcgeW91IGdyb3cgeW91clxuICAgICAgICAgICAgYnJhbmQgYXMgcGFpbmxlc3NseSBhcyBwb3NzaWJsZS4gWW9FZG1vbnRvbiBpcyB0aGUgYmVzdCB3YXkgdG8gbGV0XG4gICAgICAgICAgICB0aGUgcGVvcGxlIEVkbW9udG9uIGtub3cgd2hhdOKAmXMgdXAuIEJlc3Qgb2YgYWxsLCBsaXN0aW5nIHlvdXJzZWxmIG9uXG4gICAgICAgICAgICBZbyBFZG1vbnRvbiBpcyBjb21wbGV0ZWx5IGZyZWUhXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRG8geW91IGhhdmUgcGljdHVyZXMgb2YgYW4gZXZlbnQ/IFdlIHdvdWxkIGxvdmUgdG8gc2VlIHRoZW0uIFlvdXJcbiAgICAgICAgICAgIHBob3RvcyBjb3VsZCBiZSBmZWF0dXJlZCBoZXJlIG9uIHRoZSBzaXRlLiBFdmVyeSB3ZWVrIHdlIGZlYXR1cmUgYVxuICAgICAgICAgICAgZGlmZmVyZW50IGFydGlzdCBvciBjcmV3LCBhbmQgd2Ugd291bGQgbG92ZSB5b3VyIHBob3RvZ3JhcGhzIHRvIGRvXG4gICAgICAgICAgICBpdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgzPkFib3V0IFlvJ0VkbW9udG9uPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFlv4oCZIEVkbW9udG9uIGlzIHRoZSBiZXN0IHVwIGFuZCBjb21pbmcgSGlwIEhvcCBhbmQgUmFwIGV2ZW50IGxpc3RpbmdcbiAgICAgICAgICAgIHNpdGUgaW4gRWRtb250b24uIEZvdW5kZWQgaW4gMjAxOSwgdGhlIG93bmVyIHdhcyBmZWQgdXAgdHJ5aW5nIHRvXG4gICAgICAgICAgICBmaWd1cmUgb3V0IHdoZXJlIGV2ZW50cyB3ZXJlIGhhcHBlbmluZyBpbiBFZG1vbnRvbi4gQXQgWW/igJkgRWRtb250b24sXG4gICAgICAgICAgICB3ZSBhcmUgYnJpbmdpbmcgeW91IHRoZSBsYXRlc3QgdXAtdG8tZGF0ZSBpbmZvcm1hdGlvbiBhYm91dCBzaG93c1xuICAgICAgICAgICAgaGFwcGVuaW5nIGFyb3VuZCB0aGUgY2l0eS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZbyBFZG1vbnRvbiBpcyBhIHByb21vdGlvbmFsIHBsYXRmb3JtIHdoZXJlIGFydGlzdHMgYW5kIGZhbnMgY2FuXG4gICAgICAgICAgICBwcm9tb3RlIHRoZWlyIGZhdm9yaXRlIGFydGlzdHMsIG1lcmNoYW5kaXNlIGFuZCB2ZW51ZXMuIFlvIEVkbW9udG9uXG4gICAgICAgICAgICBpcyBidWlsdCBmb3IgeW91IHRvIGVuZ2FnZSB3aXRoIHRoZSBFZG1vbnRvbiBoaXAgaG9wIGNvbW11bml0eS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgLmZsZXgtcm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IEFQSV9TVFIgPSBgaHR0cHM6Ly9hcHAudGlja2V0bWFzdGVyLmNvbS9kaXNjb3ZlcnkvdjIvZXZlbnRzP2FwaWtleT0ke3Byb2Nlc3MuZW52LlRNQVNURVJfQVBJX0tFWX1gO1xuXG5jb25zdCBISVBIT1BfR0VOUkVfSUQgPSAnS252WmZaN3ZBdjEnO1xuY29uc3QgRURNT05UT05fUVVFUlkgPSAnbG9jYWxlPSomY2l0eT1FZG1vbnRvbiZjb3VudHJ5Q29kZT1DQSc7XG5cbmZ1bmN0aW9uIGtleXdvcmRTZWFyY2goa2V5d29yZCkge1xuICBjb25zdCBjbGVhbktleVdvcmQgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5d29yZCk7XG4gIHJldHVybiBgJmtleXdvcmQ9JHtjbGVhbktleVdvcmR9JiR7RURNT05UT05fUVVFUll9YDtcbn1cblxuZnVuY3Rpb24gZ2VucmVTZWFyY2goZ2VucmUpIHtcbiAgcmV0dXJuIGAmY2xhc3NpZmljYXRpb25JZD0ke2dlbnJlfSYke0VETU9OVE9OX1FVRVJZfWA7XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9TVFIgKyBnZW5yZVNlYXJjaChISVBIT1BfR0VOUkVfSUQpKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IGV2ZW50czoganNvbi5fZW1iZWRkZWQuZXZlbnRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/davidbergeron/projects/edu/yo-edmonton/pages/index.js */"));
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
//# sourceMappingURL=index.js.686f4b076a8307ca46f5.hot-update.js.map